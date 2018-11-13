import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ManejoMesasPage } from '../manejo-mesas/manejo-mesas';
import { HistorialAsistenciaPage } from '../historial-asistencia/historial-asistencia';
import { AdminClientesPage } from '../admin-clientes/admin-clientes';
import { AdminCorreosPage } from '../admin-correos/admin-correos';
import { CrearClientePage } from '../crear-cliente/crear-cliente';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{iconType: string, icon: string, title: string, component: any, color: string}>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { iconType: 'img', icon: '../../assets/imgs/meeting_menu.svg', title: 'Manejo de Mesas', component: ManejoMesasPage, color: '#0000FF' },
      { iconType: 'icon', icon: 'fas fa-history', title: 'Historial de Asistencia', component: HistorialAsistenciaPage, color: '#FF0000' },
      { iconType: 'icon', icon: 'fas fa-users-cog', title: 'Administrar Clientes', component: AdminClientesPage, color: '#FF9900' },
      { iconType: 'icon', icon: 'fas fa-envelope', title: 'Administrar Correos', component: AdminCorreosPage, color: '#009900' },
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
  }

  openclientes(){
    this.navCtrl.setRoot(CrearClientePage);
  }

}
