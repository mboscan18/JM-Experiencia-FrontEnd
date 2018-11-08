import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder: FormBuilder, 
              public alertCtrl: AlertController, 
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
      celebraciones_cliente: ['', Validators.compose([
        Validators.required])
      ]
    });  

    this.getAllCelebrciones();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearClientePage');
  }


  // Inicializa el Input 
  //----------------------------------------------------------
  initCelebracionCliente(celebracion): FormGroup {
    return this.formBuilder.group({
      descripcion: [celebracion.descripcion, Validators.required],
      fecha: ['', Validators.required],
      celebracion_id: celebracion.id
    });
  }
  
  // Agrega un input al arreglo de Inputs
  //----------------------------------------------------------
  addCelebracion(celebracion): void {
    const control = <FormArray>this.clienteForm.controls.celebraciones_cliente;
    control.push(this.initCelebracionCliente(celebracion));
  }

  // Remueveun input del arreglo de Inputs
  //----------------------------------------------------------
  removeFoto(i : number) : void
  {
    const control = <FormArray>this.clienteForm.controls.celebraciones_cliente;
    control.removeAt(i);
  }

  // Remueveun input del arreglo de Inputs
  //----------------------------------------------------------
  getAllCelebrciones(){
    this.clienteService.getCelebraciones().then(result => {
      if (!result['error']){
        console.log('Celebraciones obtenidas Exitosamente');
       // console.log(result);
        
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


}
