import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


import { ManejoMesasProvider } from '../../providers/manejo-mesas/manejo-mesas';
import { ClientesServiceProvider } from '../../providers/clientes-service/clientes-service';

/**
 * Generated class for the MesaClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mesa-clientes',
  templateUrl: 'mesa-clientes.html',
})
export class MesaClientesPage {

  clientes: any;
  mesa: any;
  items: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public manejoMesasService: ManejoMesasProvider, 
              public clientesService: ClientesServiceProvider, 
              public alertCtrl: AlertController, 
              private toastCtrl: ToastController) {

      this.getAllClientes();          
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesaClientesPage');
  }

  // Inicializa el arreglo de clientes
  //----------------------------------------------------------
  initializeClientes() {
    this.navCtrl.pop();
  }

  // Cierra el Modal
  //----------------------------------------------------------
  closeModal() {
    this.navCtrl.pop();
  }

  // Filtro del Searchbar
  //----------------------------------------------------------
   filterItems(ev: any){
    this.initializeItems();
    const val = ev.target.value;

    if(val && val.trim() != ''){
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.email.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
          item.check_mesa.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
   }

    // Inicialización de datos a mostrar
   //----------------------------------------------------------
   initializeItems() {
    this.items = this.clientes;
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
        
        this.clientes = result;
        this.initializeItems();
        
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
  
  // Cambia el estado del cliente seleccionado
  //----------------------------------------------------------
  changeItemState(cliente){
    var position = this.items.indexOf(cliente);
    //console.log(this.items[position]);
    if(this.items[position]['check_mesa'] == "checked"){
      this.items[position]['check_mesa'] = "N";
    }else{
      this.items[position]['check_mesa'] = "checked";
    }
  }

  // Guarda los clientes agregados y elimina los removidos
  //----------------------------------------------------------
  guardar(){
    
 
 /* Obtiene los clientes de la mesa */
 
    let clientesUNchecked = this.items.filter((item) => {
      return (item.check_mesa.indexOf("N") > -1);
    });
    
    this.manejoMesasService.getClientesMesa(this.mesa.id).then(result => {
      if (!result['error']){
        console.log('Clientes obtenidos Exitosamente');
        //console.log(result);
        
/* Elimina los clientes des-seleccionados de la mesa  */

        let clientesToDelete = [{}];
        let clientesMesa = result;
        var i;
        for(i = 0; i < result['length']; i++){
          clientesUNchecked.forEach(element => {
            if(clientesMesa[i]['cliente_id'] == element.id){
              clientesToDelete.push(clientesMesa[i]);
            }
          });
        }
        clientesToDelete.splice(0, 1);
        //console.log(clientesToDelete);

        clientesToDelete.forEach(element => {
          this.manejoMesasService.deleteClienteMesa(element['id']).then(result => {
            if (!result['error']){
              console.log('Cliente eliminado de la mesa Exitosamente');
              //  console.log(result);
            }
            else{
              console.log('Error al eliminar cliente de la mesa');
              let errorMessage = result['error']['message'];
              console.log(errorMessage);
            }
          });
        });

  /* Agrega los clientes seleccionados a la mesa */

        let clientes = this.items.filter((item) => {
          return (item.check_mesa.indexOf("checked") > -1);
        });
        //console.log(clientes);
    
        let clientesReturn = {};
        var clientesSelected = [];
    
        clientes.forEach(element => {
          let item: {cliente_id: any};
          item = {cliente_id: element.id};
          clientesSelected.push(item);
        });
    
        clientesReturn= {
          mesa_id: this.mesa.id,
          clientes: clientesSelected
        }
    
        this.manejoMesasService.agregarClienteMesa(clientesReturn).then(result => {
          if (!result['error']){
            console.log('Clientes Agregados Exitosamente');
            //console.log(result);
            
            if(this.navParams.get("parentName") == "ShowMesaPage"){
              this.navParams.get("parentPage").getClientesMesa(); /* Actualiza ShowMesaPage */
              this.navParams.get("parentPage").navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
            }else 
            if(this.navParams.get("parentName") == "ManejoMesasPage"){
              this.navParams.get("parentPage").getClientesMesa(this.mesa); /* Actualiza ManejoMesasPage SelectedMesa */
              this.navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
            }else
            if(this.navParams.get("parentName") == "HistorialAsistenciaPage"){
             this.navParams.get("parentPage").getClientesMesa(this.mesa);
             this.navParams.get("parentPage").selectMesaHistory(this.mesa);
             this.navParams.get("parentPage").getMesasHistory( this.navParams.get("fecha")); /* Actualiza HistorialAsistenciaPage */
            }
    
            let toast = this.toastCtrl.create({
              message: result['message'],
              duration: 2000,
              position: 'middle'
            });
            toast.present();
            this.closeModal();
            
          }
          else{
            console.log('Error al Agregar Clientes');
            let errorMessage = result['error']['message']+'<br>';
            
            let alert = this.alertCtrl.create({
              title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
              subTitle: 'Hubo errores al agregar los Clientes:<br>',
              message: errorMessage
              ,
              buttons: ['OK']
            });
            alert.present();
          }
        });
      }
      else{
        console.log('Error al obtener clientes');
        let errorMessage = result['error']['message'];
        console.log(errorMessage);
      }
    });
 
    
  }
  
  
}
