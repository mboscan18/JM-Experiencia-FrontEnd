import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';

/**
 * Generated class for the UserPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-popover',
  templateUrl: 'user-popover.html',
})
export class UserPopoverPage {

  user_name: any;
  user_rol: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public authService: AuthServiceProvider) {
    
    this.storage.get('user_name').then((val) => {
      this.user_name = val;
    });   
    this.storage.get('user_rol').then((val) => {
      switch (val) {
        case "ADM":
          this.user_rol = "Usuario Administrador";
          break;
        case "EXP":
          this.user_rol = "Usuario de Experiencia";
            break;
        case "CLI":
          this.user_rol = "Cliente";
      }
    });
  }

  logout() {
      this.authService.logout().then((result) =>{
          this.navCtrl.setRoot(LoginPage);
          this.navCtrl.popToRoot();
          console.log(result);
      }, (err) => {
          console.log("Error en logout");
        });

    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPopoverPage');
  }

}
