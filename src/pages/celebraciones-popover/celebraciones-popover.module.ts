import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CelebracionesPopoverPage } from './celebraciones-popover';

@NgModule({
  declarations: [
    CelebracionesPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(CelebracionesPopoverPage),
  ],
})
export class CelebracionesPopoverPageModule {}
