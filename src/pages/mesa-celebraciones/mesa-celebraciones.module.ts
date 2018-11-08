import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesaCelebracionesPage } from './mesa-celebraciones';

@NgModule({
  declarations: [
    MesaCelebracionesPage,
  ],
  imports: [
    IonicPageModule.forChild(MesaCelebracionesPage),
  ],
})
export class MesaCelebracionesPageModule {}
