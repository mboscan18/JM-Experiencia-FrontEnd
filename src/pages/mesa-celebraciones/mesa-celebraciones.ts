import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ManejoMesasProvider } from '../../providers/manejo-mesas/manejo-mesas';
import { CrearClientePage } from '../../pages/crear-cliente/crear-cliente';

/**
 * Generated class for the MesaCelebracionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mesa-celebraciones',
  templateUrl: 'mesa-celebraciones.html',
})
export class MesaCelebracionesPage {

  allClientes: any;
  allCelebraciones: any;
  mesa: any;
  items_cli: any;
  items_cel: any;
  selectedCliente: any;
  selectedCliente_anterior: any;
  modalCrearMesa: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public manejoMesasService: ManejoMesasProvider, 
              public modalCtrl: ModalController,
              public alertCtrl: AlertController, 
              private toastCtrl: ToastController) {

    this.getAllClientes(); 
    this.getAllCelebraciones();         
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesaCelebracionesPage');
  }

  // Cierra el Modal
  //----------------------------------------------------------
  close_Modal() {
    this.navCtrl.pop();
  }

  // Filtro del Searchbar
  //----------------------------------------------------------
  filterItems(ev: any){
    this.initializeClientes();
    const val = ev.target.value;

    if(this.selectedCliente){
      var elm = <HTMLElement>document.getElementById("cliente_"+this.selectedCliente);
      //elm.style.backgroundColor = '';
      this.selectedCliente = null;
    }

    if(val && val.trim() != ''){
      this.items_cli = this.items_cli.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.email.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.check_mesa.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }

  }

  // Función cuando selecciona un cliente
  //----------------------------------------------------------
  selectCliente(cliente_id){

    console.log('Cliente selected');
    //console.log(cliente);
    //console.log(this.allCelebraciones);
    const val = cliente_id;
    
    this.items_cel = this.allCelebraciones.filter((item) => {
      return (item.cliente_id == val);
    });

    if(this.selectedCliente){
      var elm = <HTMLElement>document.getElementById("cliente_"+this.selectedCliente);
      elm.style.backgroundColor = '';
      this.selectedCliente_anterior = this.selectedCliente
    }
    
    elm = <HTMLElement>document.getElementById("cliente_"+cliente_id);
    elm.style.backgroundColor = '#d8d8d8';
    
    this.selectedCliente = cliente_id;
    
    //console.log(this.items_cel);
   }

    
  // Cambia el estado de la celebración seleccionada
  //----------------------------------------------------------
  changeCelebracionState(celebracion){
    var position = this.allCelebraciones.indexOf(celebracion);
    if(this.allCelebraciones[position]['check_mesa'] == "checked"){
      this.allCelebraciones[position]['check_mesa'] = "N";
    }else{
      this.allCelebraciones[position]['check_mesa'] = "checked";
    }
    this.selectCliente(celebracion.cliente_id);
    console.log('estado cambiado');
  }

   // Inicialización de datos a mostrar
   //----------------------------------------------------------
   initializeClientes() {
    this.items_cli = this.allClientes;
    //console.log(this.items);
   }

   // Inicialización de datos a mostrar
   //----------------------------------------------------------
   initializeCelebraciones() {
    this.items_cel = this.allCelebraciones;
    //console.log(this.items);
   }

   // Obtiene todos los clientes indicando si estan en la mesa
  //----------------------------------------------------------
  getAllClientes() {
    this.mesa = this.navParams.get("mesa");
    this.manejoMesasService.getClientesMesaCheck(this.mesa.id).then(result => {
      if (!result['error']){
        console.log('Clientes obtenidos Exitosamente');
        //console.log(result);
        
        this.allClientes = result;
        this.initializeClientes();
        
      }
      else{
        console.log('Error al obtener celebraciones');
        let errorMessage = '';
        
        errorMessage = result['error']['message']+'<br>';
        
        let alert = this.alertCtrl.create({
          title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
          subTitle: 'Hubo errores al obtener los Clientes:<br>',
          message: errorMessage
          ,
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

  // Obtiene todos las celebraciones de un cliente indicando si estan en la mesa
  //----------------------------------------------------------
  getAllCelebraciones() {
    this.mesa = this.navParams.get("mesa");
    this.manejoMesasService.getCelebracionesMesaCheck(this.mesa.id).then(result => {
      if (!result['error']){
        console.log('Celebraciones obtenidos Exitosamente');
        //console.log(result);
        
        this.allCelebraciones = result;
        
      }
      else{
        console.log('Error al obtener celebraciones');
        let errorMessage = '';
        
        errorMessage = result['error']['message']+'<br>';
        
        let alert = this.alertCtrl.create({
          title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
          subTitle: 'Hubo errores al obtener las Celebraciones:<br>',
          message: errorMessage
          ,
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

  // Guarda los clientes agregados y elimina los removidos
  //----------------------------------------------------------
  guardar(){
 
    /* Obtiene las celebraciones de la mesa */
    
       let celebracionesUNchecked = this.allCelebraciones.filter((item) => {
         return (item.check_mesa.indexOf("N") > -1);
       });
       
       this.manejoMesasService.getCelebracionesMesa(this.mesa.id).then(result => {
         if (!result['error']){
           console.log('Celebraciones obtenidas Exitosamente');
           //console.log(result);
           
   /* Elimina las celebraciones des-seleccionadas de la mesa  */
   
           let celebracionesToDelete = [{}];
           let clebracionesMesa = result;
           var i;
           for(i = 0; i < result['length']; i++){
              celebracionesUNchecked.forEach(element => {
                if(clebracionesMesa[i]['celebracion_cliente_id'] == element.id){
                  celebracionesToDelete.push(clebracionesMesa[i]);
                }
              });
           }
           celebracionesToDelete.splice(0, 1);
           //console.log(clientesToDelete);
   
           celebracionesToDelete.forEach(element => {
             this.manejoMesasService.deleteCelebracionMesa(element['id']).then(result => {
               if (!result['error']){
                 console.log('Ceebracion removida de la mesa Exitosamente');
                 //  console.log(result);
               }
               else{
                 console.log('Error al eliminar celebracion de la mesa');
                 let errorMessage = result['error']['message'];
                 console.log(errorMessage);
               }
             });
           });
   
     /* Agrega las celebraciones seleccionadas a la mesa */
   
           let celebraciones = this.allCelebraciones.filter((item) => {
             return (item.check_mesa.indexOf("checked") > -1);
           });
           //console.log(clientes);
       
           let clebracionesReturn = {};
           var celebracionesSelected = [];
       
           celebraciones.forEach(element => {
             let item: {celebracion_cliente_id: any};
             item = {celebracion_cliente_id: element.id};
             celebracionesSelected.push(item);
           });
       
           clebracionesReturn= {
             mesa_id: this.mesa.id,
             celebraciones_mesa: celebracionesSelected
           }

           console.log(clebracionesReturn);
       
           this.manejoMesasService.agregarCelerebracionesMesa(clebracionesReturn).then(result => {
             if (!result['error']){
               console.log('Celebraciones Agregadas Exitosamente');
               //console.log(result);
               
               if(this.navParams.get("parentName") == "ShowMesaPage"){
                  this.navParams.get("parentPage").getCelebracionesMesa(); /* Actualiza ShowMesaPage */
                  if(this.navParams.get("parentPage").navParams.get("parentName") == "ManejoMesasPage"){
                    this.navParams.get("parentPage").navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
                  }else 
                  if(this.navParams.get("parentPage").navParams.get("parentName") == "ShowMesaHistoryPage"){
                    this.navParams.get("parentPage").navParams.get("parentPage")
                    .getMesaHistory(this.navParams.get("parentPage").navParams.get("fecha"), this.mesa.num_mesa); /* Actualiza ShowMesaHistoryPage */
                  }
              }else 
               if(this.navParams.get("parentName") == "ManejoMesasPage"){
                 this.navParams.get("parentPage").getCelebracionesMesa(this.mesa); /* Actualiza ManejoMesasPage SelectedMesa */
                 this.navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
              }else
               if(this.navParams.get("parentName") == "HistorialAsistenciaPage"){
                this.navParams.get("parentPage").getCelebracionesMesa(this.mesa);
                this.navParams.get("parentPage").selectMesaHistory(this.mesa);
                this.navParams.get("parentPage").getMesasHistory(this.navParams.get("fecha")); /* Actualiza HistorialAsistenciaPage */
               }
       
               let toast = this.toastCtrl.create({
                 message: result['message'],
                 duration: 2000,
                 position: 'middle'
               });
               toast.present();
               this.close_Modal();
               
             }
             else{
               console.log('Error al Agregar Celebraciones');
               let errorMessage = result['error']['message']+'<br>';
               
               let alert = this.alertCtrl.create({
                 title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                 subTitle: 'Hubo errores al agregar las Celebraciones:<br>',
                 message: errorMessage
                 ,
                 buttons: ['OK']
               });
               alert.present();
             }
           });
         }
         else{
           console.log('Error al obtener Celebraciones');
           let errorMessage = result['error']['message'];
           console.log(errorMessage);
         }
       });
    
       
  }

    // Abre el modal de Fotos de la Mesa
  //----------------------------------------------------------
  openCrearClienteModal(){
    this.modalCrearMesa = this.modalCtrl.create(CrearClientePage, { "parentPage": this, "mesa": this.mesa, "parentName": "MesaCelebracionesPage", "IsModal": true }, {
      showBackdrop: true,
      enableBackdropDismiss: true
    });
    this.modalCrearMesa.present();
  }

}
