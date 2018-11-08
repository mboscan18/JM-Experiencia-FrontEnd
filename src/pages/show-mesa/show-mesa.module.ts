import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowMesaPage } from './show-mesa';

@NgModule({
  declarations: [
    ShowMesaPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowMesaPage),
  ],
})
export class ShowMesaPageModule {}
