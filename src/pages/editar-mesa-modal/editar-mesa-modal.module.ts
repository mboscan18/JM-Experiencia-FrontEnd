import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarMesaModalPage } from './editar-mesa-modal';

@NgModule({
  declarations: [
    EditarMesaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarMesaModalPage),
  ],
})
export class EditarMesaModalPageModule {}
