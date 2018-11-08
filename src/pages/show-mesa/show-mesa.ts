import { Component, HostListener  } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { ManejoMesasProvider } from '../../providers/manejo-mesas/manejo-mesas';

import { EditarMesaModalPage } from '../editar-mesa-modal/editar-mesa-modal';
import { MesaClientesPage } from '../mesa-clientes/mesa-clientes';
import { MesaCelebracionesPage } from '../mesa-celebraciones/mesa-celebraciones';
import { MesaFotosPage } from '../mesa-fotos/mesa-fotos';
import { MesaCorreoPage } from '../mesa-correo/mesa-correo';

/**
 * Generated class for the ShowMesaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-mesa',
  templateUrl: 'show-mesa.html',
})

export class ShowMesaPage {

  
  public mesa: any;
  horaApertura: any;  
  horaClausura: any;  
  clientesMesa: any;
  celebracionesMesa: any;
  cantClientes: any;
  cantCelebraciones: any;

  modalEditar: any;
  modalClientesMesa: any;
  modalCelebracionesMesa: any;
  modalFotosMesa: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public manejoMesasService: ManejoMesasProvider, 
              public alertCtrl: AlertController, 
              public platform: Platform, 
              public modalCtrl: ModalController,
              private toastCtrl: ToastController) {
    
    this.initializeSelectedMesa(this.navParams.get("mesa"));
    this.getClientesMesa();
    this.getCelebracionesMesa();

  }

    ionViewDidLoad() {
    console.log('\nPAGINA SHOW MESA');
    let elm = <HTMLElement>document.querySelector(".mesa-selected-page");
    this.platform.ready().then((readySource) => {
      let width = this.platform.width() - 15;
      elm.style.width = width+'px';
    });
  }

  // Inicializa las variables importantes de la página
  //----------------------------------------------------------
  initializeSelectedMesa(messa){
    this.mesa = messa;
    let time = new Date(this.mesa.apertura);
    let horas = time.getHours();
    let minutos = time.getMinutes();
    let meridian = 'am';
    if(horas > 12){
      horas -= 12;
      meridian = 'pm';
    }
    this.horaApertura = horas+':'+minutos+' '+meridian;

    if(this.mesa.clausura){
      time = new Date(this.mesa.clausura);
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

  // Se ejecuta cuando se redimensiona el Width de la pantalla
  //----------------------------------------------------------
  @HostListener('window:resize')
  onWindowResize() {
      let elm = <HTMLElement>document.querySelector(".mesa-selected-page");
      let width = window.outerWidth - 15;
      elm.style.width = width+'px';
  }

  // Cierra la pagina actual
  //----------------------------------------------------------
  closeShowMesa(){
    this.navCtrl.pop();
  }

  // Obtiene los Clientes de una Mesa
  //----------------------------------------------------------
  getClientesMesa(){
    this.manejoMesasService.getClientesMesa(this.mesa.id).then(result => {
      if (!result['error']){
        console.log('Clientes obtenidos Exitosamente');
        //console.log(result);
        //console.log(result['length']);
        
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
  getCelebracionesMesa(){
    this.manejoMesasService.getCelebracionesMesa(this.mesa.id).then(result => {
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
    this.modalEditar = this.modalCtrl.create(EditarMesaModalPage, { "parentPage": this, "mesa": this.mesa, "parentName": "ShowMesaPage" }, {
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
        
        this.getClientesMesa();
        this.navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */

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

  // Elimina un Cliente de la Mesa
  //----------------------------------------------------------
  deleteCelebracionMesa(celebracion){
    this.manejoMesasService.deleteCelebracionMesa(celebracion.id).then(result => {
      if (!result['error']){
        console.log('Celebración eliminada de la mesa Exitosamente');
        //  console.log(result);
        
        this.getCelebracionesMesa();
        this.navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */

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
    this.modalClientesMesa = this.modalCtrl.create(MesaClientesPage, { "parentPage": this, "mesa": this.mesa, "parentName": "ShowMesaPage" }, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    this.modalClientesMesa.present();
  }

    // Abre el modal de Celebraciones de la Mesa
  //----------------------------------------------------------
  openMesaCelebraciones_show(){
    this.modalCelebracionesMesa = this.modalCtrl.create(MesaCelebracionesPage, { "parentPage": this, "mesa": this.mesa, "parentName": "ShowMesaPage" }, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    this.modalCelebracionesMesa.present();
  }

  
  // Abre el modal de Fotos de la Mesa
  //----------------------------------------------------------
  openMesaFotos(){
    this.modalFotosMesa = this.modalCtrl.create(MesaFotosPage, { "parentPage": this, "mesa": this.mesa, "parentName": "ShowMesaPage" }, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    this.modalFotosMesa.present();
  }

}
