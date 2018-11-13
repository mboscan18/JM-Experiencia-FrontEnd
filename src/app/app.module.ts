import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { TooltipsModule } from 'ionic-tooltips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
import { HeaderPage } from '../pages/header/header';
import { UserPopoverPage } from '../pages/user-popover/user-popover';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ManejoMesasPage } from '../pages/manejo-mesas/manejo-mesas';
import { HistorialAsistenciaPage } from '../pages/historial-asistencia/historial-asistencia';
import { AdminClientesPage } from '../pages/admin-clientes/admin-clientes';
import { AdminCorreosPage } from '../pages/admin-correos/admin-correos';
import { DatosPage } from '../pages/datos/datos';
import { CrearMesaModalPage } from '../pages/crear-mesa-modal/crear-mesa-modal';
import { ShowMesaPage } from '../pages/show-mesa/show-mesa';
import { EditarMesaModalPage } from '../pages/editar-mesa-modal/editar-mesa-modal';
import { MesaCelebracionesPage } from '../pages/mesa-celebraciones/mesa-celebraciones';
import { MesaClientesPage } from '../pages/mesa-clientes/mesa-clientes';
import { MesaFotosPage } from '../pages/mesa-fotos/mesa-fotos';
import { MesaCorreoPage } from '../pages/mesa-correo/mesa-correo';
import { InitialOptionsPage } from '../pages/initial-options/initial-options';
import { CrearClientePage } from '../pages/crear-cliente/crear-cliente';
import { ShowMesaHistoryPage } from '../pages/show-mesa-history/show-mesa-history';

import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { ManejoMesasProvider } from '../providers/manejo-mesas/manejo-mesas';
import { ClientesServiceProvider } from '../providers/clientes-service/clientes-service';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HeaderPage,
    UserPopoverPage,
    HomePage,
    ManejoMesasPage,
    HistorialAsistenciaPage,
    AdminClientesPage,
    AdminCorreosPage,
    DatosPage,
    CrearMesaModalPage,
    ShowMesaPage,
    EditarMesaModalPage,
    MesaCelebracionesPage,
    MesaClientesPage,
    MesaFotosPage,
    MesaCorreoPage,
    InitialOptionsPage,
    CrearClientePage,
    ShowMesaHistoryPage

  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    TooltipsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp, 
    {
      iconMode: 'md',
      menuType: 'overlay',
      scrollAssist: true,
      autoFocusAssist: true
    }, 
    {
      links: [
        { component: LoginPage, name: 'LoginPage', segment: 'login' }
      ],
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HeaderPage,
    UserPopoverPage,
    HomePage,
    ManejoMesasPage,
    HistorialAsistenciaPage,
    AdminClientesPage,
    AdminCorreosPage,
    DatosPage,
    CrearMesaModalPage,
    ShowMesaPage,
    EditarMesaModalPage,
    MesaCelebracionesPage,
    MesaClientesPage,
    MesaFotosPage,
    MesaCorreoPage,
    InitialOptionsPage,
    CrearClientePage,
    ShowMesaHistoryPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ManejoMesasProvider,
    ClientesServiceProvider
  ]
})
export class AppModule {}
