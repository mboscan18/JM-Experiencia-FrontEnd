import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, PopoverController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastController } from 'ionic-angular';

import { ClientesServiceProvider } from '../../providers/clientes-service/clientes-service';
import { regexValidators } from '../../imports/validator';

/**
 * Generated class for the CrearClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-cliente',
  templateUrl: 'crear-cliente.html',
})
export class CrearClientePage {


  clienteForm: FormGroup;
  celebraciones: any; 
  celebracionSelected: any;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder, 
              public alertCtrl: AlertController, 
              public popoverCtrl: PopoverController,
              private toastCtrl: ToastController,
              private clienteService: ClientesServiceProvider) {

    this.clienteForm = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required])
      ],
      email: ['',  Validators.compose([
        Validators.pattern(regexValidators.email),
        Validators.required])
      ],
      whatsapp: ['', Validators.compose([
        Validators.required])
      ],
      telefono: ['', Validators.compose([
        Validators.required])
      ],
      direccion: ['', Validators.compose([
        Validators.required])
      ],
      celebraciones_cliente: this.formBuilder.array([ this.initCelebracion() ])
    });  

    this.getAllCelebrciones();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearClientePage');
  }


  // Inicializa el Input  si no existen celebraciones agregadas
  //----------------------------------------------------------
  initCelebracion(): FormGroup {
    return this.formBuilder.group({
      celebracion_descripcion: [''],
      fecha: ['', Validators.required],
      celebracion_id: ['', Validators.required],
      id: -1
    });
  }

  // Inicializa el Input si existen celebraciones agregadas
  //----------------------------------------------------------
  initCelebracionesCliente(celebracion_cliente): FormGroup {
    return this.formBuilder.group({
      celebracion_descripcion: [celebracion_cliente.celebracion_descripcion],
      fecha: [celebracion_cliente.fecha, Validators.required],
      celebracion_id: celebracion_cliente.celebracion_id,
      id: celebracion_cliente.id
    });
  }
  
  // Agrega un input al arreglo de Inputs
  //----------------------------------------------------------
  addCelebracion(): void {
    const control = <FormArray>this.clienteForm.controls.celebraciones_cliente;
    control.push(this.initCelebracion());
  }

  // Remueveun input del arreglo de Inputs
  //----------------------------------------------------------
  removeCelebracion(i : number) : void
  {
    const control = <FormArray>this.clienteForm.controls.celebraciones_cliente;
    control.removeAt(i);
  }

  // Acción cuando se selcciona una celebración
  //----------------------------------------------------------
  selectCelebracion(index){

    const control = <FormArray>this.clienteForm.controls.celebraciones_cliente.value;
    let celebracion = this.celebraciones.filter((item) => {
      return (item.id == control[index].celebracion_id);
    });
    control[index].celebracion_descripcion = celebracion[0].descripcion

    //console.log(control[index].celebracion_id);
    //console.log(control[index].celebracion_descripcion);
  }

  // Remueveun input del arreglo de Inputs
  //----------------------------------------------------------
  getAllCelebrciones(){
    this.clienteService.getCelebraciones().then(result => {
      if (!result['error']){
        console.log('Celebraciones obtenidas Exitosamente');
        console.log(result);
        
        this.celebraciones = result;
        
      }
      else{
        console.log('Error al obtener Celebraciones');
        console.log(result);
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

  // Crea el cliente y las celebraciones agregadas
  //----------------------------------------------------------
  crearCliente(formResult){
      this.clienteService.crearCliente(formResult).then((result) =>{
        if (!result['error']){
          console.log('Cliente creado Exitosamente');
          
          let toast = this.toastCtrl.create({
            message: result['message'],
            duration: 3000,
            position: 'middle'
          });
          toast.present();
          this.navCtrl.pop();
          this.navCtrl.setRoot(CrearClientePage);
        }
        else{
          console.log('Error en los datos enviados');
          let errorMessage = '';
          if(result['error']['errors']){
            if(result['error']['errors']['name']){
              result['error']['errors']['name'].forEach(element => {
                errorMessage += '<i class="fas fa-exclamation-circle error-item"></i> '+element+'<br>';
              });
            }
            if(result['error']['errors']['email']){
              result['error']['errors']['email'].forEach(element => {
                errorMessage += '<i class="fas fa-exclamation-circle error-item"></i> '+element+'<br>';
              });
            }
            if(result['error']['errors']['whatsapp']){
              result['error']['errors']['whatsapp'].forEach(element => {
                errorMessage += '<i class="fas fa-exclamation-circle error-item"></i> '+element+'<br>';
              });
            }
            if(result['error']['errors']['direccion']){
              result['error']['errors']['direccion'].forEach(element => {
                errorMessage += '<i class="fas fa-exclamation-circle error-item"></i> '+element+'<br>';
              });
            }
            if(result['error']['errors']['celebraciones_cliente']){
              result['error']['errors']['celebraciones_cliente'].forEach(element => {
                errorMessage += '<i class="fas fa-exclamation-circle error-item"></i> '+element+'<br>';
              });
            }
          }else{
            errorMessage = result['error']['message']+'<br>';
          }
            
          let alert = this.alertCtrl.create({
            title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
            subTitle: 'Hubo errores al crear el Cliente:<br>',
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
