import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearMesaModalPage } from './crear-mesa-modal';

@NgModule({
  declarations: [
    CrearMesaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearMesaModalPage),
  ],
})
export class CrearMesaModalPageModule {}
