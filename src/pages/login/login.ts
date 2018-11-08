import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';

import { regexValidators } from '../../imports/validator';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  credentialsForm: FormGroup; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private formBuilder: FormBuilder,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public authService: AuthServiceProvider) {

    this.credentialsForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.pattern(regexValidators.email),
        Validators.required])
      ],
      password: ['', Validators.compose([
        Validators.pattern(regexValidators.password),
        Validators.required])
      ]
    });
    this.onLogIn();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogIn() {
    if (this.credentialsForm.valid) {
      var credentials = {
        'email': this.credentialsForm.controls['email'].value,
        'password': this.credentialsForm.controls['password'].value
      };
      let loading = this.loadingCtrl.create({
        //spinner: 'dots',
        content: `
        <ion-title>
            Autenticando Usuario . . .
        </ion-title>
        <ion-spinner></ion-spinner>`,
        cssClass: 'my-loading-class'
      });
    
      loading.present();
      
      console.log(credentials);
      this.authService.login(credentials).then((result) =>{
        if (result['access_token']){
          console.log('Success');
          
        
          setTimeout(() => {
            this.navCtrl.setRoot(HomePage);
            loading.dismiss();
          }, 2000);
        }
        else{
          console.log('Failed');
          let alert = this.alertCtrl.create({
            title: 'Failed Login',
            subTitle: result['message'],
            buttons: ['OK']
          });
          alert.present();
          loading.dismiss();
        } 
      }, (err) => {
        loading.dismiss();
        /*this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: err.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();*/
        });

      }
    }

onForgotPassword() {
// this.logger.info('SignInPage: onForgotPassword()');
}

}
