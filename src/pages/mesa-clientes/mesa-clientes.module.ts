import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesaClientesPage } from './mesa-clientes';

@NgModule({
  declarations: [
    MesaClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(MesaClientesPage),
  ],
})
export class MesaClientesPageModule {}
