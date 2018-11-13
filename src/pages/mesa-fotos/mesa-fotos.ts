import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';


import { ManejoMesasProvider } from '../../providers/manejo-mesas/manejo-mesas';
import { isArray } from 'ionic-angular/umd/util/util';

/**
 * Generated class for the MesaFotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mesa-fotos',
  templateUrl: 'mesa-fotos.html',
})
export class MesaFotosPage {

  fotosMesaForm: FormGroup; 
  fotos: any;
  mesa: any
  cantFotos: any


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public manejoMesasService: ManejoMesasProvider, 
              private formBuilder: FormBuilder, 
              public alertCtrl: AlertController, 
              private toastCtrl: ToastController) {

      this.fotosMesaForm = this.formBuilder.group({
        fotosMesa: this.formBuilder.array([ this.initInputsFotos() ])
      });   
      this.getFotosMesa();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MesaFotosPage');
  }

  // Inicializa las variables
  //----------------------------------------------------------
  initializeTerms(){
    const control = <FormArray>this.fotosMesaForm.controls.fotosMesa;
    this.fotos.forEach(element => {
      control.push(this.initInputsFotosValue(element.descripcion, element.id));
    });
    if(this.cantFotos > 0){
      control.removeAt(0);
    }

  }

  // Cierra el Modal
  //----------------------------------------------------------
  closeModal() {
    this.navCtrl.pop();
  }

  // Inicializa el arreglo de Inputs
  //----------------------------------------------------------
  initInputsFotosValue(descripcion, id): FormGroup {
    return this.formBuilder.group({
      descripcion: [descripcion, Validators.required],
      id: id
    });
  }

  // Inicializa el arreglo de Inputs
  //----------------------------------------------------------
  initInputsFotos(): FormGroup {
    return this.formBuilder.group({
      descripcion: ['', Validators.required],
      id: -1
    });
  }
  
  // Agrega un input al arreglo de Inputs
  //----------------------------------------------------------
  addFoto(): void {
    const control = <FormArray>this.fotosMesaForm.controls.fotosMesa;
    control.push(this.initInputsFotos());
  }

  // Remueveun input del arreglo de Inputs
  //----------------------------------------------------------
  removeFoto(i : number) : void
  {
    const control = <FormArray>this.fotosMesaForm.controls.fotosMesa;
    control.removeAt(i);
  }

  // Obtiene las Fotos de una Mesa
  //----------------------------------------------------------
  getFotosMesa(){
    this.mesa = this.navParams.get("mesa");
    this.manejoMesasService.getFotosMesa(this.mesa.id).then(result => {
      if (!result['error']){
        console.log('Fotos obtenidas Exitosamente');
        //console.log(result);
        
        this.fotos = result;
        this.cantFotos = result['length'];
        console.log(this.cantFotos);
        this.initializeTerms();
        
      }
      else{
        console.log('Error al obtener fotos');
        let errorMessage = '';
        
          errorMessage = result['error']['message']+'<br>';
        
        let alert = this.alertCtrl.create({
          title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
          subTitle: 'Hubo errores al obtener las Fotos de la Mesa:<br>',
          message: errorMessage
          ,
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

  guardar(formResult : any) : void
  {
    //console.log(formResult['fotosMesa']);
    //console.log(this.fotos);
    let fotosToDelete = this.fotos;
    var i, k, pos;
    for(i = 0; i < formResult['fotosMesa'].length; i++){
      k = 0;
      this.fotos.forEach(element => {
        if(formResult['fotosMesa'][i].id == element.id){
          pos = k;
          //console.log(formResult['fotosMesa'][i].id +' = '+ element.id);
        }
        k++;
      });
      fotosToDelete.splice(pos, 1);
    }

   // console.log( fotosToDelete );

    fotosToDelete.forEach(element => {
      this.manejoMesasService.deleteFotoMesa(element['id']).then(result => {
        if (!result['error']){
          console.log('Foto eliminada de la mesa Exitosamente');
          //  console.log(result);
        }
        else{
          console.log('Error al eliminar foto de la mesa');
          let errorMessage = result['error']['message'];
          console.log(errorMessage);
        }
      });
    });

/* Agrega los clientes seleccionados a la mesa */


    let fotosReturn = {};


    fotosReturn= {
      mesa_id: this.mesa.id,
      fotos_mesa: formResult['fotosMesa']
    }

    this.manejoMesasService.agregarFotoMesa(fotosReturn).then(result => {
      if (!result['error']){
        console.log('Fotos Agregadas Exitosamente');
        //console.log(result);
        
        if(this.navParams.get("parentName") == "ShowMesaPage"){
          if(this.navParams.get("parentPage").navParams.get("parentName") == "ManejoMesasPage"){
            this.navParams.get("parentPage").navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
          }else 
          if(this.navParams.get("parentPage").navParams.get("parentName") == "ShowMesaHistoryPage"){
            this.navParams.get("parentPage").navParams.get("parentPage")
            .getMesaHistory(this.navParams.get("parentPage").navParams.get("fecha"), this.mesa.num_mesa); /* Actualiza ShowMesaHistoryPage */
          }
        }else 
        if(this.navParams.get("parentName") == "ManejoMesasPage"){
          this.navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
        }else
        if(this.navParams.get("parentName") == "HistorialAsistenciaPage"){
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
        console.log('Error al Agregar Foto a la mesa');
        let errorMessage = result['error']['message']+'<br>';
        
        let alert = this.alertCtrl.create({
          title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
          subTitle: 'Hubo errores al agregar las fotos a la mesa:<br>',
          message: errorMessage
          ,
          buttons: ['OK']
        });
        alert.present();
      }
    });
   }


}
