import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InitialOptionsPage } from './initial-options';

@NgModule({
  declarations: [
    InitialOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(InitialOptionsPage),
  ],
})
export class InitialOptionsPageModule {}
