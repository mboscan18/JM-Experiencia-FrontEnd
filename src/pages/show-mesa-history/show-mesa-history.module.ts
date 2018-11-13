import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowMesaHistoryPage } from './show-mesa-history';

@NgModule({
  declarations: [
    ShowMesaHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowMesaHistoryPage),
  ],
})
export class ShowMesaHistoryPageModule {}
