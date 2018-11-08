import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ManejoMesasPage } from '../pages/manejo-mesas/manejo-mesas';
import { HistorialAsistenciaPage } from '../pages/historial-asistencia/historial-asistencia';
import { AdminClientesPage } from '../pages/admin-clientes/admin-clientes';
import { AdminCorreosPage } from '../pages/admin-correos/admin-correos';
import { DatosPage } from '../pages/datos/datos';
import { CrearClientePage } from '../pages/crear-cliente/crear-cliente';

import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{iconType: string, icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { iconType: 'icon', icon: 'fas fa-home', title: 'Home', component: HomePage },
      { iconType: 'img', icon: '../../assets/imgs/meeting_menu.svg', title: 'Manejo de Mesas', component: ManejoMesasPage },
      { iconType: 'icon', icon: 'fas fa-history', title: 'Hist. Asistencia', component: HistorialAsistenciaPage },
      { iconType: 'icon', icon: 'fas fa-users-cog', title: 'Adm. Clientes', component: AdminClientesPage },
      { iconType: 'icon', icon: 'fas fa-envelope', title: 'Adm. Correos', component: AdminCorreosPage },
      { iconType: 'icon', icon: 'fas fa-database', title: 'Datos', component: DatosPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
