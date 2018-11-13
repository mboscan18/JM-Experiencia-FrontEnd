import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ManejoMesasProvider } from '../../providers/manejo-mesas/manejo-mesas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the EditarMesaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-mesa-modal',
  templateUrl: 'editar-mesa-modal.html',
})
export class EditarMesaModalPage {

  public mesa = this.navParams.get("mesa");
  editMesaForm: FormGroup; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder, 
              public manejoMesasService: ManejoMesasProvider, 
              public alertCtrl: AlertController, 
              private toastCtrl: ToastController) {

    let str = this.mesa.apertura.substring(0,10);
    let str2 = this.mesa.apertura.substring(11,16);
    let apertura = str+'T'+str2+'Z';
    //console.log(apertura);

    let clausura = ''; 
    if(this.mesa.clausura){
      str = this.mesa.clausura.substring(0,10);
      str2 = this.mesa.clausura.substring(11,16);
      clausura = str+'T'+str2+'Z';
      //console.log(clausura);                
    }           
    this.editMesaForm = this.formBuilder.group({
      num_mesa: [this.mesa.num_mesa, Validators.compose([
        Validators.required])
      ],
      etiqueta: [this.mesa.etiqueta, Validators.compose([
        Validators.required])
      ],
      apertura: [apertura, Validators.compose([
        Validators.required])
      ],
      clausura: [clausura]
    });       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarMesaModalPage');
  }

  // Cierra el Modal
  //----------------------------------------------------------
  closeModal() {
      this.navCtrl.pop();
  }

  // Edita una Mesa
  //----------------------------------------------------------
  editarMesa() {
    if (this.editMesaForm.valid) {
      let fechaApertura = this.editMesaForm.controls['apertura'].value+'';
      let str = fechaApertura.substring(0,10);
      let str2 = fechaApertura.substring(11,16);
      fechaApertura = str+' '+str2;
      
      let fechaClausura = this.editMesaForm.controls['clausura'].value+'';
      str = fechaClausura.substring(0,10);
      str2 = fechaClausura.substring(11,16);
      fechaClausura = str+' '+str2;
      var mesaData = {
        'num_mesa': this.editMesaForm.controls['num_mesa'].value,
        'etiqueta': this.editMesaForm.controls['etiqueta'].value,
        'apertura': fechaApertura,
        'clausura': fechaClausura
      };
      
      console.log(mesaData);
      this.manejoMesasService.editarMesa(mesaData, this.mesa.id).then((result) =>{
        if (!result['error']){
          console.log('Mesa Actualizada Exitosamente');
          
          if(this.navParams.get("parentName") == "ShowMesaPage"){
            this.navParams.get("parentPage").initializeSelectedMesa(result['mesa']); /* Actualiza ShowMesaPage */
            this.navParams.get("parentPage").navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
          }else 
          if(this.navParams.get("parentName") == "ManejoMesasPage"){
            this.navParams.get("parentPage").initializeSelectedMesa(result['mesa']); /* Actualiza ManejoMesasPage SelectedMesa */
            this.navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
          }else
          if(this.navParams.get("parentName") == "HistorialAsistenciaPage"){
           this.navParams.get("parentPage").selectMesaHistory(this.mesa);
           this.navParams.get("parentPage").getMesasHistory( this.navParams.get("fecha")); /* Actualiza HistorialAsistenciaPage */
          }

          let toast = this.toastCtrl.create({
            message: result['message'],
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          this.closeModal();
        }
        else{
          console.log('Error en los datos enviados');
          let errorMessage = '';
          if(result['error']['errors']){
            if(result['error']['errors']['num_mesa']){
              result['error']['errors']['num_mesa'].forEach(element => {
                errorMessage += '<i class="fas fa-exclamation-circle error-item"></i> '+element+'<br>';
              });
            }
            if(result['error']['errors']['etiqueta']){
              result['error']['errors']['etiqueta'].forEach(element => {
                errorMessage += '<i class="fas fa-exclamation-circle error-item"></i> '+element+'<br>';
              });
            }
            if(result['error']['errors']['apertura']){
              result['error']['errors']['apertura'].forEach(element => {
                errorMessage += '<i class="fas fa-exclamation-circle error-item"></i> '+element+'<br>';
              });
            }
            if(result['error']['errors']['clausura']){
              result['error']['errors']['clausura'].forEach(element => {
                errorMessage += '<i class="fas fa-exclamation-circle error-item"></i> '+element+'<br>';
              });
            }
          }else{
            errorMessage = result['error']['message']+'<br>';
          }
            
          let alert = this.alertCtrl.create({
            title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
            subTitle: 'Hubo errores al Editar la Mesa:<br>',
            message: errorMessage
            ,
            buttons: ['OK']
          });
          alert.present();
        } 
      }, (err) => {

        });

      }
  }

}
