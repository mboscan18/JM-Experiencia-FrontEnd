import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { ManejoMesasProvider } from '../../providers/manejo-mesas/manejo-mesas';

import { ShowMesaPage } from '../show-mesa/show-mesa';

/**
 * Generated class for the ShowMesaHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-mesa-history',
  templateUrl: 'show-mesa-history.html',
})
export class ShowMesaHistoryPage {

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController,
              public manejoMesasService: ManejoMesasProvider, 
              public modalCtrl: ModalController) {
    this.initializeMesaHistory(this.navParams.get("mesa"));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowMesaHistoryPage');
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
    this.navCtrl.push(ShowMesaPage, { "parentPage": this, "mesa": mesa, "parentName": "ShowMesaHistoryPage", "fecha": this.navParams.get("parentPage").fechaForm.controls.fecha.value });
  }

  // Cerrar panel de mostrar historial de mesa
  //----------------------------------------------------------
  closeMesaHistory() {
    this.navParams.get("parentPage").getMesasHistory(this.navParams.get("parentPage").fechaForm.controls.fecha.value);
    this.navCtrl.pop();
  }

  // Get Mesas History
  //----------------------------------------------------------
  getMesaHistory(fecha, num_mesa) {
    this.manejoMesasService.getMesaHistory(fecha, num_mesa)
    .then(result => {
      //console.log(result);
      if(!result['error']){
          this.initializeMesaHistory(result);
      }else{
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

}
