import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ManejoMesasProvider } from '../../providers/manejo-mesas/manejo-mesas';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the CrearMesaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-mesa-modal',
  templateUrl: 'crear-mesa-modal.html',
})
export class CrearMesaModalPage {

  newMesaForm: FormGroup; 

  constructor(public navCtrl: NavController,  
              public navParams: NavParams,  
              private formBuilder: FormBuilder, 
              public manejoMesasService: ManejoMesasProvider, 
              public alertCtrl: AlertController, 
              private toastCtrl: ToastController) {
      
      this.newMesaForm = this.formBuilder.group({
        num_mesa: ['', Validators.compose([
          Validators.required])
        ],
        etiqueta: ['', Validators.compose([
          Validators.required])
        ],
        apertura: ['', Validators.compose([
          Validators.required])
        ],
        clausura: ['']
      });            
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearMesaModalPage');
  }

  // Cierra el Modal
  //----------------------------------------------------------
  closeModal() {
      this.navCtrl.pop();
  }

  // Crea una Mesa
  //----------------------------------------------------------
  crearMesa() {
    if (this.newMesaForm.valid) {
      let fechaApertura = this.newMesaForm.controls['apertura'].value+'';
      let str = fechaApertura.substring(0,10);
      let str2 = fechaApertura.substring(11,16);
      fechaApertura = str+' '+str2;
      
      let fechaClausura = this.newMesaForm.controls['clausura'].value+'';
      str = fechaClausura.substring(0,10);
      str2 = fechaClausura.substring(11,16);
      fechaClausura = str+' '+str2;
      var mesaData = {
        'num_mesa': this.newMesaForm.controls['num_mesa'].value,
        'etiqueta': this.newMesaForm.controls['etiqueta'].value,
        'apertura': fechaApertura,
        'clausura': fechaClausura
      };
      
      console.log(mesaData);
      this.manejoMesasService.crearMesa(mesaData).then((result) =>{
        if (!result['error']){
          console.log('Mesa creada Exitosamente');
          
          this.navParams.get("parentPage").getMesasActivas();
          let toast = this.toastCtrl.create({
            message: 'Mesa Aperturada Exitosamente',
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
            subTitle: 'Hubo errores al Aperturar la Mesa:<br>',
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
