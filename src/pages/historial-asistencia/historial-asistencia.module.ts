import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorialAsistenciaPage } from './historial-asistencia';

@NgModule({
  declarations: [
    HistorialAsistenciaPage,
  ],
  imports: [
    IonicPageModule.forChild(HistorialAsistenciaPage),
  ],
})
export class HistorialAsistenciaPageModule {}
