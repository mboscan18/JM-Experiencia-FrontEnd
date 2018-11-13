import { Component, HostListener } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, LoadingController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { ManejoMesasProvider } from '../../providers/manejo-mesas/manejo-mesas';

import { ShowMesaPage } from '../show-mesa/show-mesa';
import { EditarMesaModalPage } from '../editar-mesa-modal/editar-mesa-modal';
import { MesaClientesPage } from '../mesa-clientes/mesa-clientes';
import { MesaCelebracionesPage } from '../mesa-celebraciones/mesa-celebraciones';
import { MesaFotosPage } from '../mesa-fotos/mesa-fotos';
import { MesaCorreoPage } from '../mesa-correo/mesa-correo';
/**
 * Generated class for the HistorialAsistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial-asistencia',
  templateUrl: 'historial-asistencia.html',
})
export class HistorialAsistenciaPage {


  searchTerm: string = '';
  items:any;
  mesasHistory:any;
  mesasHistoryHeaders:any;
  myDate: String = new Date().toISOString().substring(0, 10);
  fechaForm: FormGroup;
  width_size = window.outerWidth;

  selectedMesaHistory: any;
  selectedMesa: any;
  horaAperturaHistory: any;  
  horaClausuraHistory: any;  
  horaAperturaSelected: any;  
  horaClausuraSelected: any;  
  clientesMesa: any;
  celebracionesMesa: any;
  cantClientes: any;
  cantCelebraciones: any;
  
  modalCrear: any;
  modalEditar: any;
  modalClientesMesa: any;
  modalCelebracionesMesa: any;
  modalFotosMesa: any;
  loading: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public manejoMesasService: ManejoMesasProvider, 
              public platform: Platform,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              public loadingCtrl: LoadingController,
              private formBuilder: FormBuilder, 
              private toastCtrl: ToastController) {

      console.log(this.myDate);
      this.fechaForm = this.formBuilder.group({
        fecha: ''
      });   

      this.width_size = window.outerWidth;
      console.log(this.width_size);

      this.getMesasHistory(this.myDate);      
    //  console.log(this.mesasHistory)
      
  }

   // Se ejecuta cuando se redimensiona el Width de la pantalla
  //----------------------------------------------------------
  @HostListener('window:resize')
  onWindowResize() {
      this.width_size = window.outerWidth;
0  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesasHistoryPage');
  }
  
  // Get Mesas History
  //----------------------------------------------------------
  getMesasHistory(fecha) {
    this.loading = this.loadingCtrl.create({
          //spinner: 'dots',
          content: `
          <ion-title>
              Obteniendo Datos . . .
          </ion-title>
          <ion-spinner></ion-spinner>`,
          cssClass: 'my-loading-class'
    });
  
    this.loading.present();
    this.manejoMesasService.getMesasHistory(fecha)
    .then(result => {
      //console.log(result);
      if(!result['error']){
          setTimeout(() => {
            this.mesasHistory = result;
            this.initializeItems();
            this.loading.dismiss();
          }, 2000);
      }else{
        this.loading.dismiss();
        console.log('Error al obtener Historial de Mesas');
        let errorMessage = '';
        
          errorMessage = result['error']['message']+'<br>';
          
        let alert = this.alertCtrl.create({
          title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
          subTitle: 'Hubo errores al obtener las Historial de Mesas:<br>',
          message: errorMessage
          ,
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }
  
    // Filtro del Searchbar
  //----------------------------------------------------------
  filterItems(ev: any){
    this.initializeItems();
    const val = ev.target.value;

    if(val && val.trim() != ''){
      this.items = this.items.filter((item) => {
        return (item.num_mesa == val ||
                item.estatus.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
   }

   // Inicialización de datos a mostrar
   //----------------------------------------------------------
   initializeItems() {
    this.items = this.mesasHistory;
    //console.log(this.items);
    }

  // Inicialización de datos a mostrar
   //----------------------------------------------------------
  selectFecha(){
    this.myDate = this.fechaForm.controls.fecha.value;
    console.log(this.myDate);
    this.getMesasHistory(this.myDate);
  }  

  // Muestra la mesa seleccionada
  //----------------------------------------------------------
   selectMesaHistory(mesa) {
    //console.log('Abriendo Mesa');
    if(window.outerWidth < 960){
      //this.navCtrl.push(ShowMesaPage, { "parentPage": this, "mesa": mesa });
    }else{

      console.log('\nPANEL HISTORIAL MESA SELECCIONADA');
      this.initializeMesaHistory(mesa);

      if(!this.selectedMesa){
        let elm = <HTMLElement>document.querySelector(".mesas-history-principal");
        elm.style.width = '60%';
        elm.style.height = '650px';
      }
    }
  }

  // Inicialización de datos de la mesa seleccionada
  //---------------------------------------------------------- 
  initializeMesaHistory(mesa){
      this.selectedMesaHistory = mesa;

      console.log(this.selectedMesaHistory);
      if(this.selectedMesaHistory.cant_mesas > 0){
   
        this.horaAperturaHistory = [];
        this.horaClausuraHistory = [];
        var i = 0;
        this.selectedMesaHistory.mesas.forEach(element => {
           let time = new Date(element.apertura);
           let horas = time.getHours();
           let minutos = time.getMinutes();
           let meridian = 'am';
           if(horas > 12){
             horas -= 12;
             meridian = 'pm';
           }
           this.horaAperturaHistory[i] = horas+':'+minutos+' '+meridian;
           console.log(i);
           console.log(this.horaAperturaHistory[i]);

           if(element.clausura){
             time = new Date(element.clausura);
             horas = time.getHours();
             minutos = time.getMinutes();
             meridian = 'am';
             if(horas > 12){
               horas -= 12;
               meridian = 'pm';
             }
             this.horaClausuraHistory[i] = horas+':'+minutos+' '+meridian;
           }else {
             this.horaClausuraHistory[i] = '';
           }
           i++;
        });
      }

  }

  // Muestra la mesa seleccionada
  //----------------------------------------------------------
  selectIntanceMesa(mesa: any) {
    //console.log('Abriendo Mesa');
    if(window.outerWidth < 960){
      this.navCtrl.push(ShowMesaPage, { "parentPage": this, "mesa": mesa });
    }else{

      console.log('\nPANEL MESA SELECCIONADA');
      this.initializeInstanceMesa(mesa);
      this.getClientesMesa(mesa);
      this.getCelebracionesMesa(mesa);

      let elm = <HTMLElement>document.querySelector(".mesas-history-principal");
      elm.style.width = '30%';

      elm = <HTMLElement>document.querySelector(".mesa-history-instences");
      elm.style.width = '30%';
    }
  }

  // Inicialización de datos de la mesa seleccionada
  //----------------------------------------------------------  
  initializeInstanceMesa(mesa){
    this.selectedMesa = mesa;
    console.log(this.selectedMesa);
        
    let time = new Date(mesa.apertura);
    let horas = time.getHours();
    let minutos = time.getMinutes();
    let meridian = 'am';
    if(horas > 12){
      horas -= 12;
      meridian = 'pm';
    }
    this.horaAperturaSelected = horas+':'+minutos+' '+meridian;
    
    if(mesa.clausura){
      time = new Date(mesa.clausura);
      horas = time.getHours();
      minutos = time.getMinutes();
      meridian = 'am';
      if(horas > 12){
        horas -= 12;
        meridian = 'pm';
      }
      this.horaClausuraSelected = horas+':'+minutos+' '+meridian;
    }else {
      this.horaClausuraSelected = '';
    }
  } 

    // Obtiene los Clientes de una Mesa
  //----------------------------------------------------------
  getClientesMesa(mesa: any){
    this.manejoMesasService.getClientesMesa(mesa.id).then(result => {
      if (!result['error']){
        console.log('Clientes obtenidos Exitosamente');
       // console.log(result);
        
        this.clientesMesa = result;
        this.cantClientes = result['length'];
        
      }
      else{
        console.log('Error al obtener clientes');
        let errorMessage = '';
        
          errorMessage = result['error']['message']+'<br>';
          
        let alert = this.alertCtrl.create({
          title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
          subTitle: 'Hubo errores al obtener los Clientes de la Mesa:<br>',
          message: errorMessage
          ,
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

  // Obtiene las Celebraciones de una Mesa
  //----------------------------------------------------------
  getCelebracionesMesa(mesa: any){
    this.manejoMesasService.getCelebracionesMesa(mesa.id).then(result => {
      if (!result['error']){
        console.log('Celebraciones obtenidas Exitosamente');
      //  console.log(result);
        
        this.celebracionesMesa = result;
        this.cantCelebraciones = result['length'];
        
      }
      else{
        console.log('Error al obtener celebraciones');
        let errorMessage = '';
        
          errorMessage = result['error']['message']+'<br>';
        
        let alert = this.alertCtrl.create({
          title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
          subTitle: 'Hubo errores al obtener las Celebraciones de la Mesa:<br>',
          message: errorMessage
          ,
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

  // Cerrar panel de mostrar historial de mesa
  //----------------------------------------------------------
  closeMesaHistory() {
    this.selectedMesaHistory = null;
    this.selectedMesa = null;
    let elm = <HTMLElement>document.querySelector(".mesas-history-principal");
    elm.style.width = '100%';
    elm.style.height = '100%';

  }

  // Cerrar panel de mostrar mesa
  //----------------------------------------------------------
  closeShowMesa() {
    this.selectedMesa = null;
    let elm = <HTMLElement>document.querySelector(".mesas-history-principal");
    elm.style.width = '60%';

    elm = <HTMLElement>document.querySelector(".mesa-history-instences");
    elm.style.width = '35%';
  }

  // Abre el modal de Editar Mesa
  //----------------------------------------------------------
  openMesaEditar(){
    this.modalEditar = this.modalCtrl.create(EditarMesaModalPage, { "parentPage": this, "mesa": this.selectedMesa, "parentName": "HistorialAsistenciaPage", "fecha": this.fechaForm.controls.fecha.value }, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    this.modalEditar.present();
  }

  // Elimina un Cliente de la Mesa
  //----------------------------------------------------------
  deleteClienteMesa(cliente){
    this.manejoMesasService.deleteClienteMesa(cliente.id).then(result => {
      if (!result['error']){
        console.log('Cliente eliminado de la mesa Exitosamente');
        //  console.log(result);
        
        this.getClientesMesa(this.selectedMesa);
        this.selectMesaHistory(this.selectedMesa);
        this.getMesasHistory(this.fechaForm.controls.fecha.value); /* Actualiza HistorialAsistenciaPage */

        let toast = this.toastCtrl.create({
          message: result['message'],
          duration: 3000,
          position: 'middle'
        });
        toast.present();
        
      }
      else{
        console.log('Error al eliminar cliente de la mesa');
        let errorMessage = '';
        
          errorMessage = result['error']['message']+'<br>';
        
        let alert = this.alertCtrl.create({
          title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
          subTitle: 'Hubo errores al eliminar el cliente de la Mesa:<br>',
          message: errorMessage
          ,
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

    // Elimina una Celebracion de la Mesa
  //----------------------------------------------------------
  deleteCelebracionMesa(celebracion){
    this.manejoMesasService.deleteCelebracionMesa(celebracion.id).then(result => {
      if (!result['error']){
        console.log('Celebración eliminada de la mesa Exitosamente');
        //  console.log(result);
        
        this.getCelebracionesMesa(this.selectedMesa);
        this.getMesasHistory(this.fechaForm.controls.fecha.value); /* Actualiza HistorialAsistenciaPage */

        let toast = this.toastCtrl.create({
          message: result['message'],
          duration: 3000,
          position: 'middle'
        });
        toast.present();
        
      }
      else{
        console.log('Error al eliminar celebración de la mesa');
        let errorMessage = '';
        
          errorMessage = result['error']['message']+'<br>';
        
        let alert = this.alertCtrl.create({
          title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
          subTitle: 'Hubo errores al eliminar la celebración de la Mesa:<br>',
          message: errorMessage
          ,
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

  // Abre el modal de Clientes de la Mesa
  //----------------------------------------------------------
  openMesaClientes(){
    this.modalClientesMesa = this.modalCtrl.create(MesaClientesPage, { "parentPage": this, "mesa": this.selectedMesa, "parentName": "HistorialAsistenciaPage", "fecha": this.fechaForm.controls.fecha.value }, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    this.modalClientesMesa.present();
  }

  // Abre el modal de Celebraciones de la Mesa
  //----------------------------------------------------------
  openMesaCelebraciones_manejo(){
    this.modalCelebracionesMesa = this.modalCtrl.create(MesaCelebracionesPage, { "parentPage": this, "mesa": this.selectedMesa, "parentName": "HistorialAsistenciaPage", "fecha": this.fechaForm.controls.fecha.value }, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    this.modalCelebracionesMesa.present();
  }

  // Abre el modal de Fotos de la Mesa
  //----------------------------------------------------------
  openMesaFotos_manejo(){
    this.modalFotosMesa = this.modalCtrl.create(MesaFotosPage, { "parentPage": this, "mesa": this.selectedMesa, "parentName": "HistorialAsistenciaPage", "fecha": this.fechaForm.controls.fecha.value }, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    this.modalFotosMesa.present();
  }

}
