import { NgModule } from '@angular/core';
import { HeaderPage } from './header';
import { IonicPageModule} from 'ionic-angular';

@NgModule({
  declarations: [
    HeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(HeaderPage),
  ],
})
export class HeaderPageModule {  }


