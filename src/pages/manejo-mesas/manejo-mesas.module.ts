import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManejoMesasPage } from './manejo-mesas';

@NgModule({
  declarations: [
    ManejoMesasPage,
  ],
  imports: [
    IonicPageModule.forChild(ManejoMesasPage),
  ],
})
export class ManejoMesasPageModule {}
