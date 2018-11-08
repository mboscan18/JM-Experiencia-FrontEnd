import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import { UserPopoverPage } from '../user-popover/user-popover';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the HeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
})
export class HeaderPage {

  user_name: any;
  user_picture: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, private storage: Storage) {
    this.storage.get('user_picture').then((val) => {
      this.user_picture = val;
    });   
    this.storage.get('user_name').then((val) => {
      this.user_name = val;
    });   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HeaderPage');
  }

  userPopover(myEvent) {
    let popover = this.popoverCtrl.create(UserPopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
