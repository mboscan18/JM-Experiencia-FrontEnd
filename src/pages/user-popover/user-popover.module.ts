import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPopoverPage } from './user-popover';

@NgModule({
  declarations: [
    UserPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPopoverPage),
  ],
})
export class UserPopoverPageModule {}
