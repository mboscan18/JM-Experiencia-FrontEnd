import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { ManejoMesasProvider } from '../../providers/manejo-mesas/manejo-mesas';

import { ShowMesaPage } from '../show-mesa/show-mesa';
import { CrearMesaModalPage } from '../crear-mesa-modal/crear-mesa-modal';
import { EditarMesaModalPage } from '../editar-mesa-modal/editar-mesa-modal';
import { MesaClientesPage } from '../mesa-clientes/mesa-clientes';
import { MesaCelebracionesPage } from '../mesa-celebraciones/mesa-celebraciones';
import { MesaFotosPage } from '../mesa-fotos/mesa-fotos';
import { MesaCorreoPage } from '../mesa-correo/mesa-correo';

/**
 * Generated class for the ManejoMesasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manejo-mesas',
  templateUrl: 'manejo-mesas.html',
})
export class ManejoMesasPage {

  searchTerm: string = '';
  items:any;
  mesas:any;
  selectedMesa: any;
  horaApertura: any;  
  horaClausura: any;  
  clientesMesa: any;
  celebracionesMesa: any;
  cantClientes: any;
  cantCelebraciones: any;
  
  modalCrear: any;
  modalEditar: any;
  modalClientesMesa: any;
  modalCelebracionesMesa: any;
  modalFotosMesa: any;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public manejoMesasService: ManejoMesasProvider, 
              public platform: Platform,
              public alertCtrl: AlertController,
              public modalCtrl: ModalController,
              private toastCtrl: ToastController) {

    this.getMesasActivas();
    
  }

  ionViewDidLoad() {
    console.log('\nPAGINA MANEJO MESAS');
  }

  // Get Mesas activas
  //----------------------------------------------------------
  getMesasActivas() {
    this.manejoMesasService.getMesasActive()
    .then(data => {
      this.mesas = data;
      this.initializeItems();
    //  console.log(this.mesas);
    });
  }

  // Filtro del Searchbar
  //----------------------------------------------------------
  filterItems(ev: any){
    this.initializeItems();
    const val = ev.target.value;

    if(val && val.trim() != ''){
      this.items = this.items.filter((item) => {
        return (item.num_mesa.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.etiqueta.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
   }

   // Inicialización de datos a mostrar
   //----------------------------------------------------------
   initializeItems() {
    this.items = this.mesas;
    //console.log(this.items);
    }

  // Inicialización de datos de la mesa seleccionada
  //----------------------------------------------------------  
  initializeSelectedMesa(mesa){
    this.selectedMesa = mesa;
        
    let time = new Date(mesa.apertura);
    let horas = time.getHours();
    let minutos = time.getMinutes();
    let meridian = 'am';
    if(horas > 12){
      horas -= 12;
      meridian = 'pm';
    }
    this.horaApertura = horas+':'+minutos+' '+meridian;
    
    if(mesa.clausura){
      time = new Date(mesa.clausura);
      horas = time.getHours();
      minutos = time.getMinutes();
      meridian = 'am';
      if(horas > 12){
        horas -= 12;
        meridian = 'pm';
      }
      this.horaClausura = horas+':'+minutos+' '+meridian;
    }else {
      this.horaClausura = '';
    }
  }  

   // Mostrar datos de la mesa seleccionada
   //----------------------------------------------------------
   openMesa(mesa: any) {
      let width: any;
      console.log('Abriendo Mesa');
      this.platform.ready().then((readySource) => {
        width = this.platform.width();
        if(width < 960){
          this.navCtrl.push(ShowMesaPage, { "parentPage": this, "mesa": mesa });
        }else{

          console.log('\nPANEL MESA SELECCIONADA');
          this.initializeSelectedMesa(mesa);
          this.getClientesMesa(mesa);
          this.getCelebracionesMesa(mesa);

          let elm = <HTMLElement>document.querySelector(".manejo-mesas-principal");
          elm.style.width = '60%';
          elm.style.height = '650px';

        }
      });
    }
      
    // Llamada al modal de crear mesa
    //----------------------------------------------------------
    openCrearMesaModal() {
      this.modalCrear = this.modalCtrl.create(CrearMesaModalPage, { "parentPage": this }, {
        showBackdrop: true,
        enableBackdropDismiss: true
      });
      this.modalCrear.present();
      console.log("modal");
    }

    // Cerrar panel de mostrar mesa
    //----------------------------------------------------------
    closeShowMesa() {
      this.selectedMesa = null;
      let elm = <HTMLElement>document.querySelector(".manejo-mesas-principal");
      elm.style.width = '100%';
      elm.style.height = '100%';

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

   // Abre el modal de Editar Mesa
  //----------------------------------------------------------
  openMesaEditar(){
    this.modalEditar = this.modalCtrl.create(EditarMesaModalPage, { "parentPage": this, "mesa": this.selectedMesa, "parentName": "ManejoMesasPage" }, {
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
        this.getMesasActivas(); /* Actualiza ManejoMesasPage */

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
        this.getMesasActivas(); /* Actualiza ManejoMesasPage */

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
    this.modalClientesMesa = this.modalCtrl.create(MesaClientesPage, { "parentPage": this, "mesa": this.selectedMesa, "parentName": "ManejoMesasPage" }, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    this.modalClientesMesa.present();
  }

  // Abre el modal de Celebraciones de la Mesa
  //----------------------------------------------------------
  openMesaCelebraciones_manejo(){
    this.modalCelebracionesMesa = this.modalCtrl.create(MesaCelebracionesPage, { "parentPage": this, "mesa": this.selectedMesa, "parentName": "ManejoMesasPage" }, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    this.modalCelebracionesMesa.present();
  }

  // Abre el modal de Fotos de la Mesa
  //----------------------------------------------------------
  openMesaFotos_manejo(){
    this.modalFotosMesa = this.modalCtrl.create(MesaFotosPage, { "parentPage": this, "mesa": this.selectedMesa, "parentName": "ManejoMesasPage" }, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    this.modalFotosMesa.present();
  }

}
