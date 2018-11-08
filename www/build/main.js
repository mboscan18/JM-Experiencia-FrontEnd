webpackJsonp([0],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manejo_mesas_manejo_mesas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__historial_asistencia_historial_asistencia__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_clientes_admin_clientes__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_correos_admin_correos__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crear_cliente_crear_cliente__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pages = [
            { iconType: 'img', icon: '../../assets/imgs/meeting_menu.svg', title: 'Manejo de Mesas', component: __WEBPACK_IMPORTED_MODULE_2__manejo_mesas_manejo_mesas__["a" /* ManejoMesasPage */], color: '#0000FF' },
            { iconType: 'icon', icon: 'fas fa-history', title: 'Historial de Asistencia', component: __WEBPACK_IMPORTED_MODULE_3__historial_asistencia_historial_asistencia__["a" /* HistorialAsistenciaPage */], color: '#FF0000' },
            { iconType: 'icon', icon: 'fas fa-users-cog', title: 'Administrar Clientes', component: __WEBPACK_IMPORTED_MODULE_4__admin_clientes_admin_clientes__["a" /* AdminClientesPage */], color: '#FF9900' },
            { iconType: 'icon', icon: 'fas fa-envelope', title: 'Administrar Correos', component: __WEBPACK_IMPORTED_MODULE_5__admin_correos_admin_correos__["a" /* AdminCorreosPage */], color: '#009900' },
        ];
    }
    HomePage.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.navCtrl.setRoot(page.component);
    };
    HomePage.prototype.openclientes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__crear_cliente_crear_cliente__["a" /* CrearClientePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\home\home.html"*/'<page-header></page-header>\n\n<ion-content padding style="margin-top: 59px">\n  <h1 text-center ion-text color="principal">\n    <i class="fas fa-home"></i>\n    &nbsp;Home\n  </h1>\n\n  <div class="hidden-lg-up items-container" style="min-height: auto; overflow: auto; margin-bottom: 60px">\n    <a *ngFor="let pag of pages" (click)="openPage(pag)" class="text-decoration: none;">\n      <ion-row >\n        <ion-col>\n          <ion-card class="card-item" [ngStyle]="{\'border-color\': pag.color}">\n            <ion-row class="card-row">\n              <ion-col col-4 class="card-col-icon" *ngIf="pag.iconType == \'icon\'"> \n                <i class="{{pag.icon}} card-icon"></i>\n              </ion-col>\n              <ion-col col-4 class="card-col-icon" *ngIf="pag.iconType == \'img\'"> \n                <img src="{{pag.icon}}"  style="width: 100px; position: relative; left: 50%; margin-left: -50px"/>\n              </ion-col>\n              <ion-col col-6 class="card-col-title">{{pag.title}}</ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </a>\n  </div>\n\n  <div class="hidden-md-down items-container"  style="min-height: auto; overflow: auto; margin-bottom: 60px">\n    <a  class="text-decoration: none;">\n      <ion-row >\n        <ion-col col-6 *ngFor="let pag of pages" (click)="openPage(pag)">\n          <ion-card class="card-item" [ngStyle]="{\'border-color\': pag.color}" style="height: 200px;">\n            <ion-row style="display: table; height: 100%;">\n              <ion-col col-3 class="card-col-icon" *ngIf="pag.iconType == \'icon\'"> \n                <i class="{{pag.icon}}" style="font-size: 8.5rem; color: #003300; margin-left: 40%"></i>\n              </ion-col>\n              <ion-col col-3 class="card-col-icon" *ngIf="pag.iconType == \'img\'"> \n                <img src="{{pag.icon}}"  style="width: 100px; position: relative;  margin-left: 40%"/>\n              </ion-col>\n              <ion-col col-7 class="card-col-title">{{pag.title}}</ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </a>\n\n    <a  class="text-decoration: none;">\n      <ion-row >\n        <ion-col col-6  (click)="openclientes()">\n          <ion-card class="card-item" style="height: 200px;">\n            <ion-row style="display: table; height: 100%;">\n              <ion-col col-3 class="card-col-icon" > \n                <i class="fas fa-user-plus" style="font-size: 8.5rem; color: #003300; margin-left: 40%"></i>\n              </ion-col>\n              <ion-col col-7 class="card-col-title">Crear CLiente</ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </a>\n  </div>\n    \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManejoMesasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_manejo_mesas_manejo_mesas__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__show_mesa_show_mesa__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__crear_mesa_modal_crear_mesa_modal__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editar_mesa_modal_editar_mesa_modal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mesa_clientes_mesa_clientes__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mesa_celebraciones_mesa_celebraciones__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mesa_fotos_mesa_fotos__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the ManejoMesasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ManejoMesasPage = /** @class */ (function () {
    function ManejoMesasPage(navCtrl, navParams, manejoMesasService, platform, alertCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.manejoMesasService = manejoMesasService;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.searchTerm = '';
        this.getMesasActivas();
    }
    ManejoMesasPage.prototype.ionViewDidLoad = function () {
        console.log('\nPAGINA MANEJO MESAS');
    };
    // Get Mesas activas
    //----------------------------------------------------------
    ManejoMesasPage.prototype.getMesasActivas = function () {
        var _this = this;
        this.manejoMesasService.getMesasActive()
            .then(function (data) {
            _this.mesas = data;
            _this.initializeItems();
            //  console.log(this.mesas);
        });
    };
    // Filtro del Searchbar
    //----------------------------------------------------------
    ManejoMesasPage.prototype.filterItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.num_mesa.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.etiqueta.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    // Inicialización de datos a mostrar
    //----------------------------------------------------------
    ManejoMesasPage.prototype.initializeItems = function () {
        this.items = this.mesas;
        //console.log(this.items);
    };
    // Inicialización de datos de la mesa seleccionada
    //----------------------------------------------------------  
    ManejoMesasPage.prototype.initializeSelectedMesa = function (mesa) {
        this.selectedMesa = mesa;
        var time = new Date(mesa.apertura);
        var horas = time.getHours();
        var minutos = time.getMinutes();
        var meridian = 'am';
        if (horas > 12) {
            horas -= 12;
            meridian = 'pm';
        }
        this.horaApertura = horas + ':' + minutos + ' ' + meridian;
        if (mesa.clausura) {
            time = new Date(mesa.clausura);
            horas = time.getHours();
            minutos = time.getMinutes();
            meridian = 'am';
            if (horas > 12) {
                horas -= 12;
                meridian = 'pm';
            }
            this.horaClausura = horas + ':' + minutos + ' ' + meridian;
        }
        else {
            this.horaClausura = '';
        }
    };
    // Mostrar datos de la mesa seleccionada
    //----------------------------------------------------------
    ManejoMesasPage.prototype.openMesa = function (mesa) {
        var _this = this;
        var width;
        console.log('Abriendo Mesa');
        this.platform.ready().then(function (readySource) {
            width = _this.platform.width();
            if (width < 960) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__show_mesa_show_mesa__["a" /* ShowMesaPage */], { "parentPage": _this, "mesa": mesa });
            }
            else {
                console.log('\nPANEL MESA SELECCIONADA');
                _this.initializeSelectedMesa(mesa);
                _this.getClientesMesa(mesa);
                _this.getCelebracionesMesa(mesa);
                var elm = document.querySelector(".manejo-mesas-principal");
                elm.style.width = '60%';
            }
        });
    };
    // Llamada al modal de crear mesa
    //----------------------------------------------------------
    ManejoMesasPage.prototype.openCrearMesaModal = function () {
        this.modalCrear = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__crear_mesa_modal_crear_mesa_modal__["a" /* CrearMesaModalPage */], { "parentPage": this }, {
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.modalCrear.present();
        console.log("modal");
    };
    // Cerrar panel de mostrar mesa
    //----------------------------------------------------------
    ManejoMesasPage.prototype.closeShowMesa = function () {
        this.selectedMesa = null;
        var elm = document.querySelector(".manejo-mesas-principal");
        elm.style.width = '100%';
    };
    // Obtiene los Clientes de una Mesa
    //----------------------------------------------------------
    ManejoMesasPage.prototype.getClientesMesa = function (mesa) {
        var _this = this;
        this.manejoMesasService.getClientesMesa(mesa.id).then(function (result) {
            if (!result['error']) {
                console.log('Clientes obtenidos Exitosamente');
                // console.log(result);
                _this.clientesMesa = result;
                _this.cantClientes = result['length'];
            }
            else {
                console.log('Error al obtener clientes');
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert_1 = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al obtener los Clientes de la Mesa:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    // Obtiene las Celebraciones de una Mesa
    //----------------------------------------------------------
    ManejoMesasPage.prototype.getCelebracionesMesa = function (mesa) {
        var _this = this;
        this.manejoMesasService.getCelebracionesMesa(mesa.id).then(function (result) {
            if (!result['error']) {
                console.log('Celebraciones obtenidas Exitosamente');
                //  console.log(result);
                _this.celebracionesMesa = result;
                _this.cantCelebraciones = result['length'];
            }
            else {
                console.log('Error al obtener celebraciones');
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert_2 = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al obtener las Celebraciones de la Mesa:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
    };
    // Abre el modal de Editar Mesa
    //----------------------------------------------------------
    ManejoMesasPage.prototype.openMesaEditar = function () {
        this.modalEditar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__editar_mesa_modal_editar_mesa_modal__["a" /* EditarMesaModalPage */], { "parentPage": this, "mesa": this.selectedMesa, "parentName": "ManejoMesasPage" }, {
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.modalEditar.present();
    };
    // Elimina un Cliente de la Mesa
    //----------------------------------------------------------
    ManejoMesasPage.prototype.deleteClienteMesa = function (cliente) {
        var _this = this;
        this.manejoMesasService.deleteClienteMesa(cliente.id).then(function (result) {
            if (!result['error']) {
                console.log('Cliente eliminado de la mesa Exitosamente');
                //  console.log(result);
                _this.getClientesMesa(_this.selectedMesa);
                _this.getMesasActivas(); /* Actualiza ManejoMesasPage */
                var toast = _this.toastCtrl.create({
                    message: result['message'],
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                console.log('Error al eliminar cliente de la mesa');
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert_3 = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al eliminar el cliente de la Mesa:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert_3.present();
            }
        });
    };
    // Elimina una Celebracion de la Mesa
    //----------------------------------------------------------
    ManejoMesasPage.prototype.deleteCelebracionMesa = function (celebracion) {
        var _this = this;
        this.manejoMesasService.deleteCelebracionMesa(celebracion.id).then(function (result) {
            if (!result['error']) {
                console.log('Celebración eliminada de la mesa Exitosamente');
                //  console.log(result);
                _this.getCelebracionesMesa(_this.selectedMesa);
                _this.getMesasActivas(); /* Actualiza ManejoMesasPage */
                var toast = _this.toastCtrl.create({
                    message: result['message'],
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                console.log('Error al eliminar celebración de la mesa');
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert_4 = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al eliminar la celebración de la Mesa:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert_4.present();
            }
        });
    };
    // Abre el modal de Clientes de la Mesa
    //----------------------------------------------------------
    ManejoMesasPage.prototype.openMesaClientes = function () {
        this.modalClientesMesa = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__mesa_clientes_mesa_clientes__["a" /* MesaClientesPage */], { "parentPage": this, "mesa": this.selectedMesa, "parentName": "ManejoMesasPage" }, {
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.modalClientesMesa.present();
    };
    // Abre el modal de Celebraciones de la Mesa
    //----------------------------------------------------------
    ManejoMesasPage.prototype.openMesaCelebraciones_manejo = function () {
        this.modalCelebracionesMesa = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__mesa_celebraciones_mesa_celebraciones__["a" /* MesaCelebracionesPage */], { "parentPage": this, "mesa": this.selectedMesa, "parentName": "ManejoMesasPage" }, {
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.modalCelebracionesMesa.present();
    };
    // Abre el modal de Fotos de la Mesa
    //----------------------------------------------------------
    ManejoMesasPage.prototype.openMesaFotos_manejo = function () {
        this.modalFotosMesa = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__mesa_fotos_mesa_fotos__["a" /* MesaFotosPage */], { "parentPage": this, "mesa": this.selectedMesa, "parentName": "ManejoMesasPage" }, {
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.modalFotosMesa.present();
    };
    ManejoMesasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-manejo-mesas',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\manejo-mesas\manejo-mesas.html"*/'<page-header></page-header>\n\n<ion-content padding style="margin-top: 59px">\n  <h1 text-center ion-text color="principal">\n      <img src="../../assets/imgs/meeting_principal.svg" width="50em" style="margin-bottom: -10px">\n    &nbsp;Manejo de Mesas\n  </h1>\n\n  <div class="manejo-mesas-principal">\n\n      <ion-row>\n        <ion-col col-12 col-md-6 col-lg-6 col-xl-6>\n          <button class="button-agregar-mesa" (click)="openCrearMesaModal()">\n            <i class="fas fa-plus" style="font-size: 2rem"> </i> &nbsp;Aperturar Mesa\n          </button>\n        </ion-col>\n        <ion-col col-12 col-md-6 col-lg-6 col-xl-6>\n          <ion-searchbar\n          [showCancelButton]="shouldShowCancel"\n          (ionInput)="filterItems($event)">\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n    \n    \n    <div style="height: 100%; overflow: auto; margin-bottom: 60px" >\n      <a  style="text-decoration: none;">\n        <ion-row justify-content-center *ngIf="!selectedMesa">\n          <ion-col col-6 col-md-4 col-lg-3 col-xl-2 *ngFor="let mesa of items" (click)="openMesa(mesa)" >\n            <ion-card class="card-mesa" >\n              <ion-row >\n                <ion-col col class="card-mesa-title">Mesa {{mesa.num_mesa}}</ion-col>\n              </ion-row>\n              <ion-row >\n                <ion-col col class="card-mesa-etiqueta">{{mesa.etiqueta}}</ion-col>\n              </ion-row>\n              <ion-row >\n                <ion-col col class="card-mesa-icon" *ngIf="mesa.cant_clientes_mesa > 0"><i class="fas fa-users"></i></ion-col>\n                <ion-col col class="card-mesa-icon" *ngIf="mesa.cant_celebraciones_mesa > 0"><img src="../../assets/imgs/confetti_menu.svg"/></ion-col>\n                <ion-col col class="card-mesa-icon" *ngIf="mesa.cant_fotos_mesa > 0"><i class="fas fa-camera"></i></ion-col>\n                <ion-col col class="card-mesa-icon" *ngIf="mesa.cant_correos_mesa > 0"><i class="fas fa-envelope"></i></ion-col>\n              </ion-row>\n              <ion-row >\n                <ion-col col class="card-mesa-number" *ngIf="mesa.cant_clientes_mesa > 0">{{mesa.cant_clientes_mesa}}</ion-col>\n                <ion-col col class="card-mesa-number" *ngIf="mesa.cant_celebraciones_mesa > 0">{{mesa.cant_celebraciones_mesa}}</ion-col>\n                <ion-col col class="card-mesa-number" *ngIf="mesa.cant_fotos_mesa > 0">{{mesa.cant_fotos_mesa}}</ion-col>\n                <ion-col col class="card-mesa-number" *ngIf="mesa.cant_correos_mesa > 0">{{mesa.cant_correos_mesa}}</ion-col>\n              </ion-row>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n        <ion-row justify-content-center *ngIf="selectedMesa">\n            <ion-col col-3 col-md-4 col-lg-3 col-xl-3 *ngFor="let mesa of items" (click)="openMesa(mesa)" >\n              <ion-card class="card-mesa" >\n                <ion-row >\n                  <ion-col col class="card-mesa-title">Mesa {{mesa.num_mesa}}</ion-col>\n                </ion-row>\n                <ion-row >\n                  <ion-col col class="card-mesa-etiqueta">{{mesa.etiqueta}}</ion-col>\n                </ion-row>\n                <ion-row >\n                  <ion-col col class="card-mesa-icon" *ngIf="mesa.cant_clientes_mesa > 0"><i class="fas fa-users"></i></ion-col>\n                  <ion-col col class="card-mesa-icon" *ngIf="mesa.cant_celebraciones_mesa > 0"><img src="../../assets/imgs/confetti_menu.svg"/></ion-col>\n                  <ion-col col class="card-mesa-icon" *ngIf="mesa.cant_fotos_mesa > 0"><i class="fas fa-camera"></i></ion-col>\n                  <ion-col col class="card-mesa-icon" *ngIf="mesa.cant_correos_mesa > 0"><i class="fas fa-envelope"></i></ion-col>\n                </ion-row>\n                <ion-row >\n                  <ion-col col class="card-mesa-number" *ngIf="mesa.cant_clientes_mesa > 0">{{mesa.cant_clientes_mesa}}</ion-col>\n                  <ion-col col class="card-mesa-number" *ngIf="mesa.cant_celebraciones_mesa > 0">{{mesa.cant_celebraciones_mesa}}</ion-col>\n                  <ion-col col class="card-mesa-number" *ngIf="mesa.cant_fotos_mesa > 0">{{mesa.cant_fotos_mesa}}</ion-col>\n                  <ion-col col class="card-mesa-number" *ngIf="mesa.cant_correos_mesa > 0">{{mesa.cant_correos_mesa}}</ion-col>\n                </ion-row>\n              </ion-card>\n            </ion-col>\n          </ion-row>\n      </a>\n    </div>\n  \n  </div>\n  <div class="mesa-selected" *ngIf="selectedMesa">\n      <a class="cerrar-show-mesa" (click)="closeShowMesa()">\n        Cerrar &nbsp; <i class="fas fa-arrow-right"></i>\n      </a>\n      <div class="mesa-options-bar">\n          <ion-row>\n            <ion-col col>\n              <a (click)="openMesaEditar()"><i class="far fa-edit"></i></a>\n            </ion-col>\n            <ion-col col >\n              <a (click)="openMesaCelebraciones_manejo()"><img src="../../assets/imgs/confetti_menu.svg" class="option-img"/></a>\n            </ion-col>\n            <ion-col col >\n              <a (click)="openMesaClientes()"><i class="fas fa-user"></i></a>\n            </ion-col>\n            <ion-col col >\n              <a (click)="openMesaFotos_manejo()"><i class="fas fa-camera"></i></a>\n            </ion-col>\n            <ion-col col >\n              <a (click)="openMesaCorreo()"><i class="fas fa-envelope"></i></a>\n            </ion-col>\n          </ion-row>\n        </div>\n      <div class="mesa-title-bar">\n          <div class="table-cell">\n            <p class="mesa-numero">Mesa {{selectedMesa.num_mesa}}:</p>\n            <p class="mesa-etiqueta">&nbsp; {{selectedMesa.etiqueta}}</p>\n          </div>\n        </div>\n        <div class="mesa-horas-bar">\n            <ion-row>\n              <ion-col col-12 >\n                <i class="far fa-clock"></i> &nbsp; Hora de Apertura: &nbsp;<span style="text-decoration: bold; font-size: 2.4rem">{{horaApertura}}</span>\n              </ion-col>\n              <ion-col col-12 >\n                <i class="far fa-clock"></i> &nbsp; Hora de Clausura: &nbsp;<span style="text-decoration: bold; font-size: 2.4rem">{{horaClausura}}</span>\n              </ion-col>\n            </ion-row>\n        </div>\n          <ion-row >\n            <ion-col col class="title-section">\n              Motivo de Celebración:\n            </ion-col>\n          </ion-row>\n        <div class="mesaSelected-celebraciones-bar">\n            <ion-row>\n                <ion-col col class="empty" *ngIf="celebracionesMesa == 0">\n                  ¡No se han agregado Celebraciones aún!\n                </ion-col>\n              </ion-row>  \n              <ion-row *ngFor="let clebracion of celebracionesMesa">\n                <ion-col col >\n                  <img src="../../assets/imgs/confetti_menu.svg"/> &nbsp; {{clebracion.celebracion_descripcion}} de {{clebracion.cliente_name}} <a (click)="deleteCelebracionMesa(clebracion)"><i class="far fa-trash-alt icon-delete"></i></a>\n                </ion-col>\n              </ion-row>\n        </div>\n          <ion-row >\n            <ion-col col class="title-section">\n              Clientes de la Mesa:\n            </ion-col>\n          </ion-row>\n        <div class="mesaSelected-clientes-bar">\n            <ion-row>\n                <ion-col col class="empty" *ngIf="cantClientes == 0">\n                  ¡No se han agregado Clientes aún!\n                </ion-col>\n              </ion-row>\n              <ion-row *ngFor="let cliente of clientesMesa">\n                <ion-col col >\n                  <i class="fas fa-user"></i> &nbsp; {{cliente.cliente_name}} <a (click)="deleteClienteMesa(cliente)"><i class="far fa-trash-alt icon-delete"></i></a>\n                </ion-col>\n              </ion-row>\n        </div>\n\n  </div>\n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\manejo-mesas\manejo-mesas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_manejo_mesas_manejo_mesas__["a" /* ManejoMesasProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ManejoMesasPage);
    return ManejoMesasPage;
}());

//# sourceMappingURL=manejo-mesas.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constantes; });
var API_URL = 'http://192.168.1.12/JME/public/api/';
var constantes = {
    API_URL: API_URL,
};
//# sourceMappingURL=url.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarMesaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_manejo_mesas_manejo_mesas__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditarMesaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditarMesaModalPage = /** @class */ (function () {
    function EditarMesaModalPage(navCtrl, navParams, formBuilder, manejoMesasService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.manejoMesasService = manejoMesasService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.mesa = this.navParams.get("mesa");
        var str = this.mesa.apertura.substring(0, 10);
        var str2 = this.mesa.apertura.substring(11, 16);
        var apertura = str + 'T' + str2 + 'Z';
        //console.log(apertura);
        var clausura = '';
        if (this.mesa.clausura) {
            str = this.mesa.clausura.substring(0, 10);
            str2 = this.mesa.clausura.substring(11, 16);
            clausura = str + 'T' + str2 + 'Z';
            //console.log(clausura);                
        }
        this.editMesaForm = this.formBuilder.group({
            num_mesa: [this.mesa.num_mesa, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            etiqueta: [this.mesa.etiqueta, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            apertura: [apertura, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            clausura: [clausura]
        });
    }
    EditarMesaModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditarMesaModalPage');
    };
    // Cierra el Modal
    //----------------------------------------------------------
    EditarMesaModalPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    // Edita una Mesa
    //----------------------------------------------------------
    EditarMesaModalPage.prototype.editarMesa = function () {
        var _this = this;
        if (this.editMesaForm.valid) {
            var fechaApertura = this.editMesaForm.controls['apertura'].value + '';
            var str = fechaApertura.substring(0, 10);
            var str2 = fechaApertura.substring(11, 16);
            fechaApertura = str + ' ' + str2;
            var fechaClausura = this.editMesaForm.controls['clausura'].value + '';
            str = fechaClausura.substring(0, 10);
            str2 = fechaClausura.substring(11, 16);
            fechaClausura = str + ' ' + str2;
            var mesaData = {
                'num_mesa': this.editMesaForm.controls['num_mesa'].value,
                'etiqueta': this.editMesaForm.controls['etiqueta'].value,
                'apertura': fechaApertura,
                'clausura': fechaClausura
            };
            console.log(mesaData);
            this.manejoMesasService.editarMesa(mesaData, this.mesa.id).then(function (result) {
                if (!result['error']) {
                    console.log('Mesa Actualizada Exitosamente');
                    if (_this.navParams.get("parentName") == "ShowMesaPage") {
                        _this.navParams.get("parentPage").initializeSelectedMesa(result['mesa']); /* Actualiza ShowMesaPage */
                        _this.navParams.get("parentPage").navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
                    }
                    else if (_this.navParams.get("parentName") == "ManejoMesasPage") {
                        _this.navParams.get("parentPage").initializeSelectedMesa(result['mesa']); /* Actualiza ManejoMesasPage SelectedMesa */
                        _this.navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
                    }
                    var toast = _this.toastCtrl.create({
                        message: result['message'],
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    _this.closeModal();
                }
                else {
                    console.log('Error en los datos enviados');
                    var errorMessage_1 = '';
                    if (result['error']['errors']) {
                        if (result['error']['errors']['num_mesa']) {
                            result['error']['errors']['num_mesa'].forEach(function (element) {
                                errorMessage_1 += '<i class="fas fa-exclamation-circle error-item"></i> ' + element + '<br>';
                            });
                        }
                        if (result['error']['errors']['etiqueta']) {
                            result['error']['errors']['etiqueta'].forEach(function (element) {
                                errorMessage_1 += '<i class="fas fa-exclamation-circle error-item"></i> ' + element + '<br>';
                            });
                        }
                        if (result['error']['errors']['apertura']) {
                            result['error']['errors']['apertura'].forEach(function (element) {
                                errorMessage_1 += '<i class="fas fa-exclamation-circle error-item"></i> ' + element + '<br>';
                            });
                        }
                        if (result['error']['errors']['clausura']) {
                            result['error']['errors']['clausura'].forEach(function (element) {
                                errorMessage_1 += '<i class="fas fa-exclamation-circle error-item"></i> ' + element + '<br>';
                            });
                        }
                    }
                    else {
                        errorMessage_1 = result['error']['message'] + '<br>';
                    }
                    var alert_1 = _this.alertCtrl.create({
                        title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                        subTitle: 'Hubo errores al Editar la Mesa:<br>',
                        message: errorMessage_1,
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
            }, function (err) {
            });
        }
    };
    EditarMesaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-mesa-modal',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\editar-mesa-modal\editar-mesa-modal.html"*/'<ion-header>\n    <div class="modal-header">\n      <p class="modal-title" >Editar Mesa</p>\n  \n      <button class="modal-close-icon" (click)="closeModal()">\n        <i class="fas fa-times" style="font-size: 2.3rem"></i>\n      </button>\n    </div>      \n  </ion-header>\n  \n  <ion-content>\n    <div padding class="content-overflow">\n      <form  [formGroup]="editMesaForm">\n        \n        <ion-item class="form-item">\n          <ion-label stacked>Numero de la Mesa:</ion-label>\n          <ion-input type="number" [formControl]="editMesaForm.controls[\'num_mesa\']" readonly></ion-input>\n        </ion-item>\n        \n        <ion-item class="form-item">\n          <ion-label stacked>Etiqueta de la Mesa:</ion-label>\n          <ion-input type="text" [formControl]="editMesaForm.controls[\'etiqueta\']"></ion-input>\n        </ion-item>\n        \n        <ion-item class="form-item">\n          <ion-label stacked>Fecha y Hora de Apertura:</ion-label>\n          <ion-datetime displayFormat="YYYY-MM-DD HH:mm" pickerFormat="MMM/DD/YYYY hh:mma" \n          doneText="Aceptar" cancelText="Cancelar"	[formControl]="editMesaForm.controls[\'apertura\']"></ion-datetime>\n        </ion-item>\n        \n        <ion-item class="form-item">\n          <ion-label stacked>Fecha y Hora de Clausura (Opcional):</ion-label>\n          <ion-datetime displayFormat="YYYY-MM-DD HH:mm" pickerFormat="MMM/DD/YYYY hh:mma" \n          doneText="Aceptar" cancelText="Cancelar" [formControl]="editMesaForm.controls[\'clausura\']"></ion-datetime>\n        </ion-item>\n        \n        \n        \n        <ion-row class="sign-in-button-container">\n          <ion-col text-center>\n            <button class="succes-button" (click)="editarMesa()" [disabled]="!editMesaForm.valid">\n              <i class="far fa-save" style="font-size: 2rem"></i>&nbsp;Guardar\n            </button>\n          </ion-col>\n        </ion-row>\n        \n        \n      </form>\n      \n    </div>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\editar-mesa-modal\editar-mesa-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_manejo_mesas_manejo_mesas__["a" /* ManejoMesasProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], EditarMesaModalPage);
    return EditarMesaModalPage;
}());

//# sourceMappingURL=editar-mesa-modal.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesaClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_manejo_mesas_manejo_mesas__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clientes_service_clientes_service__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MesaClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MesaClientesPage = /** @class */ (function () {
    function MesaClientesPage(navCtrl, navParams, manejoMesasService, clientesService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.manejoMesasService = manejoMesasService;
        this.clientesService = clientesService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.getAllClientes();
    }
    MesaClientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesaClientesPage');
    };
    // Inicializa el arreglo de clientes
    //----------------------------------------------------------
    MesaClientesPage.prototype.initializeClientes = function () {
        this.navCtrl.pop();
    };
    // Cierra el Modal
    //----------------------------------------------------------
    MesaClientesPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    // Filtro del Searchbar
    //----------------------------------------------------------
    MesaClientesPage.prototype.filterItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.email.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.check_mesa.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    // Inicialización de datos a mostrar
    //----------------------------------------------------------
    MesaClientesPage.prototype.initializeItems = function () {
        this.items = this.clientes;
        //console.log(this.items);
    };
    // Obtiene todos los clientes indicando si estan en la mesa
    //----------------------------------------------------------
    MesaClientesPage.prototype.getAllClientes = function () {
        var _this = this;
        this.mesa = this.navParams.get("mesa");
        this.manejoMesasService.getClientesMesaCheck(this.mesa.id).then(function (result) {
            if (!result['error']) {
                console.log('Clientes obtenidos Exitosamente');
                //console.log(result);
                _this.clientes = result;
                _this.initializeItems();
            }
            else {
                console.log('Error al obtener celebraciones');
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert_1 = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al obtener los Clientes:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    // Cambia el estado del cliente seleccionado
    //----------------------------------------------------------
    MesaClientesPage.prototype.changeItemState = function (cliente) {
        var position = this.items.indexOf(cliente);
        //console.log(this.items[position]);
        if (this.items[position]['check_mesa'] == "checked") {
            this.items[position]['check_mesa'] = "N";
        }
        else {
            this.items[position]['check_mesa'] = "checked";
        }
    };
    // Guarda los clientes agregados y elimina los removidos
    //----------------------------------------------------------
    MesaClientesPage.prototype.guardar = function () {
        /* Obtiene los clientes de la mesa */
        var _this = this;
        var clientesUNchecked = this.items.filter(function (item) {
            return (item.check_mesa.indexOf("N") > -1);
        });
        this.manejoMesasService.getClientesMesa(this.mesa.id).then(function (result) {
            if (!result['error']) {
                console.log('Clientes obtenidos Exitosamente');
                //console.log(result);
                /* Elimina los clientes des-seleccionados de la mesa  */
                var clientesToDelete_1 = [{}];
                var clientesMesa_1 = result;
                var i;
                for (i = 0; i < result['length']; i++) {
                    clientesUNchecked.forEach(function (element) {
                        if (clientesMesa_1[i]['cliente_id'] == element.id) {
                            clientesToDelete_1.push(clientesMesa_1[i]);
                        }
                    });
                }
                clientesToDelete_1.splice(0, 1);
                //console.log(clientesToDelete);
                clientesToDelete_1.forEach(function (element) {
                    _this.manejoMesasService.deleteClienteMesa(element['id']).then(function (result) {
                        if (!result['error']) {
                            console.log('Cliente eliminado de la mesa Exitosamente');
                            //  console.log(result);
                        }
                        else {
                            console.log('Error al eliminar cliente de la mesa');
                            var errorMessage = result['error']['message'];
                            console.log(errorMessage);
                        }
                    });
                });
                /* Agrega los clientes seleccionados a la mesa */
                var clientes = _this.items.filter(function (item) {
                    return (item.check_mesa.indexOf("checked") > -1);
                });
                //console.log(clientes);
                var clientesReturn = {};
                var clientesSelected = [];
                clientes.forEach(function (element) {
                    var item;
                    item = { cliente_id: element.id };
                    clientesSelected.push(item);
                });
                clientesReturn = {
                    mesa_id: _this.mesa.id,
                    clientes: clientesSelected
                };
                _this.manejoMesasService.agregarClienteMesa(clientesReturn).then(function (result) {
                    if (!result['error']) {
                        console.log('Clientes Agregados Exitosamente');
                        //console.log(result);
                        if (_this.navParams.get("parentName") == "ShowMesaPage") {
                            _this.navParams.get("parentPage").getClientesMesa(); /* Actualiza ShowMesaPage */
                            _this.navParams.get("parentPage").navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
                        }
                        else if (_this.navParams.get("parentName") == "ManejoMesasPage") {
                            _this.navParams.get("parentPage").getClientesMesa(_this.mesa); /* Actualiza ManejoMesasPage SelectedMesa */
                            _this.navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
                        }
                        var toast = _this.toastCtrl.create({
                            message: result['message'],
                            duration: 2000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.closeModal();
                    }
                    else {
                        console.log('Error al Agregar Clientes');
                        var errorMessage = result['error']['message'] + '<br>';
                        var alert_2 = _this.alertCtrl.create({
                            title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                            subTitle: 'Hubo errores al agregar los Clientes:<br>',
                            message: errorMessage,
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                });
            }
            else {
                console.log('Error al obtener clientes');
                var errorMessage = result['error']['message'];
                console.log(errorMessage);
            }
        });
    };
    MesaClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mesa-clientes',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\mesa-clientes\mesa-clientes.html"*/'<ion-header>\n    <div class="modal-header">\n      <p class="modal-title" >Clientes de la Mesa</p>\n  \n      <button class="modal-close-icon" (click)="closeModal()">\n        <i class="fas fa-times" style="font-size: 2.3rem"></i>\n      </button>\n    </div>      \n  </ion-header>\n  \n  <ion-content>\n\n    <div padding class="search-bar">\n\n      <ion-row>\n        <ion-col col-12 col-md-6 col-lg-6 col-xl-6>\n          <button class="button-agregar-mesa" (click)="openCrearMesaModal()">\n            <i class="fas fa-user-plus" style="font-size: 2rem"> </i> &nbsp;Crear Cliente\n          </button>\n        </ion-col>\n        <ion-col col-12 col-md-6 col-lg-6 col-xl-6>\n          <ion-searchbar\n          [showCancelButton]="shouldShowCancel"\n          (ionInput)="filterItems($event)">\n          </ion-searchbar>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n    <div  class="lista-overflow">\n\n      <ion-list class="client-list">\n        <button ion-item *ngFor="let cliente of items" (click)="changeItemState(cliente)">\n          <i class="far fa-check-square icon-check" item-start *ngIf="cliente.check_mesa == \'checked\'"></i>\n          <i class="far fa-square icon-blank" item-start *ngIf="cliente.check_mesa == \'N\'"></i>\n          <h1 class="client-name-check" *ngIf="cliente.check_mesa == \'checked\'">{{cliente.name}}</h1>\n          <h2 class="client-email-check" *ngIf="cliente.check_mesa == \'checked\'">{{cliente.email}}</h2>\n          <h1 class="client-name" *ngIf="cliente.check_mesa == \'N\'">{{cliente.name}}</h1>\n          <h2 class="client-email" *ngIf="cliente.check_mesa == \'N\'">{{cliente.email}}</h2>\n        </button>\n      </ion-list>\n\n    </div>\n\n    <button class="button-guardar-clientes" (click)="guardar()">\n      <i class="fas fa-save" style="font-size: 2rem"> </i> &nbsp;Guardar\n    </button>\n\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\mesa-clientes\mesa-clientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_manejo_mesas_manejo_mesas__["a" /* ManejoMesasProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clientes_service_clientes_service__["a" /* ClientesServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MesaClientesPage);
    return MesaClientesPage;
}());

//# sourceMappingURL=mesa-clientes.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imports_url__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ClientesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClientesServiceProvider = /** @class */ (function () {
    function ClientesServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello ClientesServiceProvider Provider');
    }
    // Get All Clientes
    //----------------------------------------------------------
    ClientesServiceProvider.prototype.getClientes = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'cliente/', {})
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    // Get All Celebraciones
    //----------------------------------------------------------
    ClientesServiceProvider.prototype.getCelebraciones = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'X-Requested-With': 'XMLHttpRequest '
            });
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'celebracion/', { headers: headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    ClientesServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ClientesServiceProvider);
    return ClientesServiceProvider;
}());

//# sourceMappingURL=clientes-service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesaCelebracionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_manejo_mesas_manejo_mesas__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MesaCelebracionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MesaCelebracionesPage = /** @class */ (function () {
    function MesaCelebracionesPage(navCtrl, navParams, manejoMesasService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.manejoMesasService = manejoMesasService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.getAllClientes();
        this.getAllCelebraciones();
    }
    MesaCelebracionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesaCelebracionesPage');
    };
    // Cierra el Modal
    //----------------------------------------------------------
    MesaCelebracionesPage.prototype.close_Modal = function () {
        this.navCtrl.pop();
    };
    // Filtro del Searchbar
    //----------------------------------------------------------
    MesaCelebracionesPage.prototype.filterItems = function (ev) {
        this.initializeClientes();
        var val = ev.target.value;
        if (this.selectedCliente) {
            var elm = document.getElementById("cliente_" + this.selectedCliente);
            //elm.style.backgroundColor = '';
            this.selectedCliente = null;
        }
        if (val && val.trim() != '') {
            this.items_cli = this.items_cli.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.email.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                    item.check_mesa.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    // Función cuando selecciona un cliente
    //----------------------------------------------------------
    MesaCelebracionesPage.prototype.selectCliente = function (cliente_id) {
        console.log('Cliente selected');
        //console.log(cliente);
        //console.log(this.allCelebraciones);
        var val = cliente_id;
        this.items_cel = this.allCelebraciones.filter(function (item) {
            return (item.cliente_id == val);
        });
        if (this.selectedCliente) {
            var elm = document.getElementById("cliente_" + this.selectedCliente);
            elm.style.backgroundColor = '';
            this.selectedCliente_anterior = this.selectedCliente;
        }
        elm = document.getElementById("cliente_" + cliente_id);
        elm.style.backgroundColor = '#d8d8d8';
        this.selectedCliente = cliente_id;
        //console.log(this.items_cel);
    };
    // Cambia el estado de la celebración seleccionada
    //----------------------------------------------------------
    MesaCelebracionesPage.prototype.changeCelebracionState = function (celebracion) {
        var position = this.allCelebraciones.indexOf(celebracion);
        if (this.allCelebraciones[position]['check_mesa'] == "checked") {
            this.allCelebraciones[position]['check_mesa'] = "N";
        }
        else {
            this.allCelebraciones[position]['check_mesa'] = "checked";
        }
        this.selectCliente(celebracion.cliente_id);
        console.log('estado cambiado');
    };
    // Inicialización de datos a mostrar
    //----------------------------------------------------------
    MesaCelebracionesPage.prototype.initializeClientes = function () {
        this.items_cli = this.allClientes;
        //console.log(this.items);
    };
    // Inicialización de datos a mostrar
    //----------------------------------------------------------
    MesaCelebracionesPage.prototype.initializeCelebraciones = function () {
        this.items_cel = this.allCelebraciones;
        //console.log(this.items);
    };
    // Obtiene todos los clientes indicando si estan en la mesa
    //----------------------------------------------------------
    MesaCelebracionesPage.prototype.getAllClientes = function () {
        var _this = this;
        this.mesa = this.navParams.get("mesa");
        this.manejoMesasService.getClientesMesaCheck(this.mesa.id).then(function (result) {
            if (!result['error']) {
                console.log('Clientes obtenidos Exitosamente');
                //console.log(result);
                _this.allClientes = result;
                _this.initializeClientes();
            }
            else {
                console.log('Error al obtener celebraciones');
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert_1 = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al obtener los Clientes:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    // Obtiene todos las celebraciones de un cliente indicando si estan en la mesa
    //----------------------------------------------------------
    MesaCelebracionesPage.prototype.getAllCelebraciones = function () {
        var _this = this;
        this.mesa = this.navParams.get("mesa");
        this.manejoMesasService.getCelebracionesMesaCheck(this.mesa.id).then(function (result) {
            if (!result['error']) {
                console.log('Celebraciones obtenidos Exitosamente');
                //console.log(result);
                _this.allCelebraciones = result;
            }
            else {
                console.log('Error al obtener celebraciones');
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert_2 = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al obtener las Celebraciones:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
    };
    // Guarda los clientes agregados y elimina los removidos
    //----------------------------------------------------------
    MesaCelebracionesPage.prototype.guardar = function () {
        /* Obtiene las celebraciones de la mesa */
        var _this = this;
        var celebracionesUNchecked = this.allCelebraciones.filter(function (item) {
            return (item.check_mesa.indexOf("N") > -1);
        });
        this.manejoMesasService.getCelebracionesMesa(this.mesa.id).then(function (result) {
            if (!result['error']) {
                console.log('Celebraciones obtenidas Exitosamente');
                //console.log(result);
                /* Elimina las celebraciones des-seleccionadas de la mesa  */
                var celebracionesToDelete_1 = [{}];
                var clebracionesMesa_1 = result;
                var i;
                for (i = 0; i < result['length']; i++) {
                    celebracionesUNchecked.forEach(function (element) {
                        if (clebracionesMesa_1[i]['celebracion_cliente_id'] == element.id) {
                            celebracionesToDelete_1.push(clebracionesMesa_1[i]);
                        }
                    });
                }
                celebracionesToDelete_1.splice(0, 1);
                //console.log(clientesToDelete);
                celebracionesToDelete_1.forEach(function (element) {
                    _this.manejoMesasService.deleteCelebracionMesa(element['id']).then(function (result) {
                        if (!result['error']) {
                            console.log('Ceebracion removida de la mesa Exitosamente');
                            //  console.log(result);
                        }
                        else {
                            console.log('Error al eliminar celebracion de la mesa');
                            var errorMessage = result['error']['message'];
                            console.log(errorMessage);
                        }
                    });
                });
                /* Agrega las celebraciones seleccionadas a la mesa */
                var celebraciones = _this.allCelebraciones.filter(function (item) {
                    return (item.check_mesa.indexOf("checked") > -1);
                });
                //console.log(clientes);
                var clebracionesReturn = {};
                var celebracionesSelected = [];
                celebraciones.forEach(function (element) {
                    var item;
                    item = { celebracion_cliente_id: element.id };
                    celebracionesSelected.push(item);
                });
                clebracionesReturn = {
                    mesa_id: _this.mesa.id,
                    celebraciones_mesa: celebracionesSelected
                };
                console.log(clebracionesReturn);
                _this.manejoMesasService.agregarCelerebracionesMesa(clebracionesReturn).then(function (result) {
                    if (!result['error']) {
                        console.log('Celebraciones Agregadas Exitosamente');
                        //console.log(result);
                        if (_this.navParams.get("parentName") == "ShowMesaPage") {
                            _this.navParams.get("parentPage").getCelebracionesMesa(); /* Actualiza ShowMesaPage */
                            _this.navParams.get("parentPage").navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
                        }
                        else if (_this.navParams.get("parentName") == "ManejoMesasPage") {
                            _this.navParams.get("parentPage").getCelebracionesMesa(_this.mesa); /* Actualiza ManejoMesasPage SelectedMesa */
                            _this.navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
                        }
                        var toast = _this.toastCtrl.create({
                            message: result['message'],
                            duration: 2000,
                            position: 'middle'
                        });
                        toast.present();
                        _this.close_Modal();
                    }
                    else {
                        console.log('Error al Agregar Celebraciones');
                        var errorMessage = result['error']['message'] + '<br>';
                        var alert_3 = _this.alertCtrl.create({
                            title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                            subTitle: 'Hubo errores al agregar las Celebraciones:<br>',
                            message: errorMessage,
                            buttons: ['OK']
                        });
                        alert_3.present();
                    }
                });
            }
            else {
                console.log('Error al obtener Celebraciones');
                var errorMessage = result['error']['message'];
                console.log(errorMessage);
            }
        });
    };
    MesaCelebracionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mesa-celebraciones',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\mesa-celebraciones\mesa-celebraciones.html"*/'<ion-header>\n  <div class="modal-header">\n    <p class="modal-title" >Celebraciones de la Mesa</p>\n\n    <button class="modal-close-icon" (click)="close_Modal()">\n      <i class="fas fa-times" style="font-size: 2.3rem"></i>\n    </button>\n  </div>      \n</ion-header>\n\n<ion-content >\n\n  <div padding class="search-bar">\n\n    <ion-row>\n      \n      <ion-col col-12 col-md-6 col-lg-6 col-xl-6>\n        <button class="button-agregar-mesa" (click)="openCrearMesaModal()">\n          <i class="fas fa-user-plus" style="font-size: 2rem"> </i> &nbsp;Crear Cliente\n        </button>\n      </ion-col>\n      \n      <ion-col col-12 col-md-6 col-lg-6 col-xl-6>\n        <ion-searchbar\n        [showCancelButton]="shouldShowCancel"\n        (ionInput)="filterItems($event)">\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n  <ion-row >\n    <ion-col col-6 class="border ">\n      <div  class="clientes-overflow">\n        \n        <ion-list class="client-list" >\n          <button ion-item *ngFor="let cliente of items_cli" (click)="selectCliente(cliente.id)" id="cliente_{{cliente.id}}">\n            <h1 class="cliente-name-check" *ngIf="cliente.check_mesa == \'checked\'">{{cliente.name}}<br></h1>\n            <h2 class="cliente-email-check" *ngIf="cliente.check_mesa == \'checked\'">{{cliente.email}}</h2>\n            <h1 class="cliente-name" *ngIf="cliente.check_mesa == \'N\'">{{cliente.name}} <br></h1>\n            <h2 class="cliente-email" *ngIf="cliente.check_mesa == \'N\'">{{cliente.email}}</h2>\n          </button>\n        </ion-list>\n      \n      </div>\n    </ion-col>\n    <ion-col col-6 >\n      <div  class="celebraciones-overflow">\n\n        <button class="button-agregar-celebracion" (click)="openCrearCelebracionModal()" *ngIf="items_cel">\n            <img src="../../assets/imgs/confetti_white.svg" class="add-celeb-img"/> <i class="fas fa-plus"></i>\n        </button>\n        \n        <ion-list class="client-list" >\n          <button ion-item *ngFor="let celebracion of items_cel" (click)="changeCelebracionState(celebracion)">\n            <i class="far fa-check-square clebracion-icon-check" item-start *ngIf="celebracion.check_mesa == \'checked\'"></i>\n            <i class="far fa-square clebracion-icon-blank" item-start *ngIf="celebracion.check_mesa == \'N\'"></i>\n            <h1 class="clebracion-name-check" *ngIf="celebracion.check_mesa == \'checked\'">{{celebracion.celebracion_descripcion}} <br></h1>\n            <h2 class="clebracion-cliente-check" *ngIf="celebracion.check_mesa == \'checked\'">{{celebracion.cliente_name}}</h2>\n            <h1 class="clebracion-name" *ngIf="celebracion.check_mesa == \'N\'">{{celebracion.celebracion_descripcion}}<br></h1>\n            <h2 class="clebracion-cliente" *ngIf="celebracion.check_mesa == \'N\'">{{celebracion.cliente_name}}</h2>\n          </button>\n        </ion-list>\n      \n      </div>\n    </ion-col>\n  </ion-row>  \n      \n      <button class="button-guardar-celebraciones" (click)="guardar()">\n        <i class="fas fa-save" style="font-size: 2rem"> </i> &nbsp;Guardar\n      </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\mesa-celebraciones\mesa-celebraciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_manejo_mesas_manejo_mesas__["a" /* ManejoMesasProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MesaCelebracionesPage);
    return MesaCelebracionesPage;
}());

//# sourceMappingURL=mesa-celebraciones.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesaFotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_manejo_mesas_manejo_mesas__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MesaFotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MesaFotosPage = /** @class */ (function () {
    function MesaFotosPage(navCtrl, navParams, manejoMesasService, formBuilder, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.manejoMesasService = manejoMesasService;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.fotosMesaForm = this.formBuilder.group({
            fotosMesa: this.formBuilder.array([this.initInputsFotos()])
        });
        this.getFotosMesa();
    }
    MesaFotosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesaFotosPage');
    };
    // Inicializa las variables
    //----------------------------------------------------------
    MesaFotosPage.prototype.initializeTerms = function () {
        var _this = this;
        var control = this.fotosMesaForm.controls.fotosMesa;
        this.fotos.forEach(function (element) {
            control.push(_this.initInputsFotosValue(element.descripcion, element.id));
        });
        if (this.cantFotos > 0) {
            control.removeAt(0);
        }
    };
    // Cierra el Modal
    //----------------------------------------------------------
    MesaFotosPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    // Inicializa el arreglo de Inputs
    //----------------------------------------------------------
    MesaFotosPage.prototype.initInputsFotosValue = function (descripcion, id) {
        return this.formBuilder.group({
            descripcion: [descripcion, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            id: id
        });
    };
    // Inicializa el arreglo de Inputs
    //----------------------------------------------------------
    MesaFotosPage.prototype.initInputsFotos = function () {
        return this.formBuilder.group({
            descripcion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            id: -1
        });
    };
    // Agrega un input al arreglo de Inputs
    //----------------------------------------------------------
    MesaFotosPage.prototype.addFoto = function () {
        var control = this.fotosMesaForm.controls.fotosMesa;
        control.push(this.initInputsFotos());
    };
    // Remueveun input del arreglo de Inputs
    //----------------------------------------------------------
    MesaFotosPage.prototype.removeFoto = function (i) {
        var control = this.fotosMesaForm.controls.fotosMesa;
        control.removeAt(i);
    };
    // Obtiene las Fotos de una Mesa
    //----------------------------------------------------------
    MesaFotosPage.prototype.getFotosMesa = function () {
        var _this = this;
        this.mesa = this.navParams.get("mesa");
        this.manejoMesasService.getFotosMesa(this.mesa.id).then(function (result) {
            if (!result['error']) {
                console.log('Fotos obtenidas Exitosamente');
                //console.log(result);
                _this.fotos = result;
                _this.cantFotos = result['length'];
                console.log(_this.cantFotos);
                _this.initializeTerms();
            }
            else {
                console.log('Error al obtener fotos');
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al obtener las Fotos de la Mesa:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert.present();
            }
        });
    };
    MesaFotosPage.prototype.guardar = function (formResult) {
        var _this = this;
        //console.log(formResult['fotosMesa']);
        //console.log(this.fotos);
        var fotosToDelete = this.fotos;
        var i, k, pos;
        for (i = 0; i < formResult['fotosMesa'].length; i++) {
            k = 0;
            this.fotos.forEach(function (element) {
                if (formResult['fotosMesa'][i].id == element.id) {
                    pos = k;
                    //console.log(formResult['fotosMesa'][i].id +' = '+ element.id);
                }
                k++;
            });
            fotosToDelete.splice(pos, 1);
        }
        // console.log( fotosToDelete );
        fotosToDelete.forEach(function (element) {
            _this.manejoMesasService.deleteFotoMesa(element['id']).then(function (result) {
                if (!result['error']) {
                    console.log('Foto eliminada de la mesa Exitosamente');
                    //  console.log(result);
                }
                else {
                    console.log('Error al eliminar foto de la mesa');
                    var errorMessage = result['error']['message'];
                    console.log(errorMessage);
                }
            });
        });
        /* Agrega los clientes seleccionados a la mesa */
        var fotosReturn = {};
        fotosReturn = {
            mesa_id: this.mesa.id,
            fotos_mesa: formResult['fotosMesa']
        };
        this.manejoMesasService.agregarFotoMesa(fotosReturn).then(function (result) {
            if (!result['error']) {
                console.log('Fotos Agregadas Exitosamente');
                //console.log(result);
                if (_this.navParams.get("parentName") == "ShowMesaPage") {
                    _this.navParams.get("parentPage").navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
                }
                else if (_this.navParams.get("parentName") == "ManejoMesasPage") {
                    _this.navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
                }
                var toast = _this.toastCtrl.create({
                    message: result['message'],
                    duration: 2000,
                    position: 'middle'
                });
                toast.present();
                _this.closeModal();
            }
            else {
                console.log('Error al Agregar Foto a la mesa');
                var errorMessage = result['error']['message'] + '<br>';
                var alert = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al agregar las fotos a la mesa:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert.present();
            }
        });
    };
    MesaFotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mesa-fotos',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\mesa-fotos\mesa-fotos.html"*/'<ion-header>\n    <div class="modal-header">\n      <p class="modal-title" >Fotos de la Mesa</p>\n  \n      <button class="modal-close-icon" (click)="closeModal()">\n        <i class="fas fa-times" style="font-size: 2.3rem"></i>\n      </button>\n    </div>      \n  </ion-header>\n  \n  <ion-content>\n\n    <div padding class="search-bar">\n\n      <ion-row justify-content-center>\n        <ion-col col >\n          <button class="button-agregar-mesa" (click)="addFoto()">\n            <i class="fas fa-user-plus" style="font-size: 2rem"> </i> &nbsp;Agregar Referencia de Foto\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n    <div  class="fotos-overflow">\n        <form [formGroup]="fotosMesaForm" >\n            <div  formArrayName="fotosMesa" >\n\n                <div no-padding [formGroupName]="i" *ngFor="let foto of fotosMesaForm.controls.fotosMesa.controls; let i = index">\n                  \n                      <div class="referencia-item">\n                          <ion-item class="item-input-foto">\n                            <ion-label floating>Referencia {{i+1}}:</ion-label>\n                            <ion-input  type="text"  maxlength="50" formControlName="descripcion"></ion-input>\n                          </ion-item>\n                        <ion-item no-lines col-2 class="item-icon-foto" >\n                          <a class="button-trash" *ngIf="fotosMesaForm.controls.fotosMesa.length > 1" (click)="removeFoto(i)">\n                            <i class="far fa-trash-alt"></i>\n                          </a>\n                        </ion-item>\n                      </div>\n                  \n                  </div>\n\n            </div>  \n                         \n        </form>\n    </div>\n        \n        <button class="button-guardar-fotos" (click)="guardar(fotosMesaForm.value)" [disabled]="!fotosMesaForm.valid">\n          <i class="fas fa-save" style="font-size: 2rem"> </i> &nbsp;Guardar \n        </button>\n        \n      </ion-content>\n\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\mesa-fotos\mesa-fotos.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_manejo_mesas_manejo_mesas__["a" /* ManejoMesasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_manejo_mesas_manejo_mesas__["a" /* ManejoMesasProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _f || Object])
    ], MesaFotosPage);
    return MesaFotosPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=mesa-fotos.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistorialAsistenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HistorialAsistenciaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HistorialAsistenciaPage = /** @class */ (function () {
    function HistorialAsistenciaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistorialAsistenciaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistorialAsistenciaPage');
    };
    HistorialAsistenciaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historial-asistencia',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\historial-asistencia\historial-asistencia.html"*/'<page-header></page-header>\n\n<ion-content padding style="margin-top: 59px">\n  <h1 text-center ion-text color="principal">\n    <i class="fas fa-history"></i>\n    &nbsp;Hist. Asistencia\n  </h1>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\historial-asistencia\historial-asistencia.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HistorialAsistenciaPage);
    return HistorialAsistenciaPage;
}());

//# sourceMappingURL=historial-asistencia.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AdminClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminClientesPage = /** @class */ (function () {
    function AdminClientesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminClientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminClientesPage');
    };
    AdminClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-clientes',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\admin-clientes\admin-clientes.html"*/'<page-header></page-header>\n\n<ion-content padding style="margin-top: 59px">\n  <h1 text-center ion-text color="principal">\n    <i class="fas fa-users-cog"></i>\n    &nbsp;Adm. Clientes\n  </h1>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\admin-clientes\admin-clientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AdminClientesPage);
    return AdminClientesPage;
}());

//# sourceMappingURL=admin-clientes.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCorreosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AdminCorreosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdminCorreosPage = /** @class */ (function () {
    function AdminCorreosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AdminCorreosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdminCorreosPage');
    };
    AdminCorreosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin-correos',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\admin-correos\admin-correos.html"*/'<page-header></page-header>\n\n<ion-content padding style="margin-top: 59px">\n  <h1 text-center ion-text color="principal">\n    <i class="fas fa-envelope"></i>\n    &nbsp;Adm. Correos\n  </h1>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\admin-correos\admin-correos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AdminCorreosPage);
    return AdminCorreosPage;
}());

//# sourceMappingURL=admin-correos.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imports_url__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthServiceProvider = /** @class */ (function () {
    function AuthServiceProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            });
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__imports_url__["a" /* constantes */].API_URL + 'login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (data) {
                resolve(data);
                console.log(data);
                _this.storage.set('user_id', data['user']['id']);
                _this.storage.set('user_email', data['user']['email']);
                _this.storage.set('user_name', data['user']['name']);
                _this.storage.set('user_picture', data['user']['picture']);
                _this.storage.set('user_rol', data['user']['rol']);
                _this.storage.set('token', data['access_token']);
                _this.storage.set('status', 'logged');
                _this.storage.set('log_message', 'Success Login');
            }, function (error) {
                reject(error);
                console.log(error);
                _this.storage.remove('token');
                _this.storage.set('status', 'logged');
                _this.storage.set('log_message', 'Failed Login');
            });
        });
    };
    AuthServiceProvider.prototype.register = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'text/javascript'
            });
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__imports_url__["a" /* constantes */].API_URL + 'guest/signup', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var token;
            _this.storage.get('token').then(function (val) {
                console.log("Token: " + val);
                token = val;
            });
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': 'Bearer ' + token
            });
            _this.http.get(__WEBPACK_IMPORTED_MODULE_3__imports_url__["a" /* constantes */].API_URL + 'logout', { headers: headers })
                .subscribe(function (data) {
                resolve(data);
                _this.storage.clear();
            }, function (err) {
                console.log(err);
            });
        });
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 126;

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowMesaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_manejo_mesas_manejo_mesas__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_mesa_modal_editar_mesa_modal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mesa_clientes_mesa_clientes__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mesa_celebraciones_mesa_celebraciones__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mesa_fotos_mesa_fotos__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ShowMesaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShowMesaPage = /** @class */ (function () {
    function ShowMesaPage(navCtrl, navParams, manejoMesasService, alertCtrl, platform, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.manejoMesasService = manejoMesasService;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.initializeSelectedMesa(this.navParams.get("mesa"));
        this.getClientesMesa();
        this.getCelebracionesMesa();
    }
    ShowMesaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('\nPAGINA SHOW MESA');
        var elm = document.querySelector(".mesa-selected-page");
        this.platform.ready().then(function (readySource) {
            var width = _this.platform.width() - 15;
            elm.style.width = width + 'px';
        });
    };
    // Inicializa las variables importantes de la página
    //----------------------------------------------------------
    ShowMesaPage.prototype.initializeSelectedMesa = function (messa) {
        this.mesa = messa;
        var time = new Date(this.mesa.apertura);
        var horas = time.getHours();
        var minutos = time.getMinutes();
        var meridian = 'am';
        if (horas > 12) {
            horas -= 12;
            meridian = 'pm';
        }
        this.horaApertura = horas + ':' + minutos + ' ' + meridian;
        if (this.mesa.clausura) {
            time = new Date(this.mesa.clausura);
            horas = time.getHours();
            minutos = time.getMinutes();
            meridian = 'am';
            if (horas > 12) {
                horas -= 12;
                meridian = 'pm';
            }
            this.horaClausura = horas + ':' + minutos + ' ' + meridian;
        }
        else {
            this.horaClausura = '';
        }
    };
    // Se ejecuta cuando se redimensiona el Width de la pantalla
    //----------------------------------------------------------
    ShowMesaPage.prototype.onWindowResize = function () {
        var elm = document.querySelector(".mesa-selected-page");
        var width = window.outerWidth - 15;
        elm.style.width = width + 'px';
    };
    // Cierra la pagina actual
    //----------------------------------------------------------
    ShowMesaPage.prototype.closeShowMesa = function () {
        this.navCtrl.pop();
    };
    // Obtiene los Clientes de una Mesa
    //----------------------------------------------------------
    ShowMesaPage.prototype.getClientesMesa = function () {
        var _this = this;
        this.manejoMesasService.getClientesMesa(this.mesa.id).then(function (result) {
            if (!result['error']) {
                console.log('Clientes obtenidos Exitosamente');
                //console.log(result);
                //console.log(result['length']);
                _this.clientesMesa = result;
                _this.cantClientes = result['length'];
            }
            else {
                console.log('Error al obtener clientes');
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert_1 = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al obtener los Clientes de la Mesa:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    // Obtiene las Celebraciones de una Mesa
    //----------------------------------------------------------
    ShowMesaPage.prototype.getCelebracionesMesa = function () {
        var _this = this;
        this.manejoMesasService.getCelebracionesMesa(this.mesa.id).then(function (result) {
            if (!result['error']) {
                console.log('Celebraciones obtenidas Exitosamente');
                //  console.log(result);
                _this.celebracionesMesa = result;
                _this.cantCelebraciones = result['length'];
            }
            else {
                console.log('Error al obtener celebraciones');
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert_2 = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al obtener las Celebraciones de la Mesa:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert_2.present();
            }
        });
    };
    // Abre el modal de Editar Mesa
    //----------------------------------------------------------
    ShowMesaPage.prototype.openMesaEditar = function () {
        this.modalEditar = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__editar_mesa_modal_editar_mesa_modal__["a" /* EditarMesaModalPage */], { "parentPage": this, "mesa": this.mesa, "parentName": "ShowMesaPage" }, {
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.modalEditar.present();
    };
    // Elimina un Cliente de la Mesa
    //----------------------------------------------------------
    ShowMesaPage.prototype.deleteClienteMesa = function (cliente) {
        var _this = this;
        this.manejoMesasService.deleteClienteMesa(cliente.id).then(function (result) {
            if (!result['error']) {
                console.log('Cliente eliminado de la mesa Exitosamente');
                //  console.log(result);
                _this.getClientesMesa();
                _this.navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
                var toast = _this.toastCtrl.create({
                    message: result['message'],
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                console.log('Error al eliminar cliente de la mesa');
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert_3 = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al eliminar el cliente de la Mesa:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert_3.present();
            }
        });
    };
    // Elimina un Cliente de la Mesa
    //----------------------------------------------------------
    ShowMesaPage.prototype.deleteCelebracionMesa = function (celebracion) {
        var _this = this;
        this.manejoMesasService.deleteCelebracionMesa(celebracion.id).then(function (result) {
            if (!result['error']) {
                console.log('Celebración eliminada de la mesa Exitosamente');
                //  console.log(result);
                _this.getCelebracionesMesa();
                _this.navParams.get("parentPage").getMesasActivas(); /* Actualiza ManejoMesasPage */
                var toast = _this.toastCtrl.create({
                    message: result['message'],
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            else {
                console.log('Error al eliminar celebración de la mesa');
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert_4 = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al eliminar la celebración de la Mesa:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert_4.present();
            }
        });
    };
    // Abre el modal de Clientes de la Mesa
    //----------------------------------------------------------
    ShowMesaPage.prototype.openMesaClientes = function () {
        this.modalClientesMesa = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__mesa_clientes_mesa_clientes__["a" /* MesaClientesPage */], { "parentPage": this, "mesa": this.mesa, "parentName": "ShowMesaPage" }, {
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.modalClientesMesa.present();
    };
    // Abre el modal de Celebraciones de la Mesa
    //----------------------------------------------------------
    ShowMesaPage.prototype.openMesaCelebraciones_show = function () {
        this.modalCelebracionesMesa = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__mesa_celebraciones_mesa_celebraciones__["a" /* MesaCelebracionesPage */], { "parentPage": this, "mesa": this.mesa, "parentName": "ShowMesaPage" }, {
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.modalCelebracionesMesa.present();
    };
    // Abre el modal de Fotos de la Mesa
    //----------------------------------------------------------
    ShowMesaPage.prototype.openMesaFotos = function () {
        this.modalFotosMesa = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__mesa_fotos_mesa_fotos__["a" /* MesaFotosPage */], { "parentPage": this, "mesa": this.mesa, "parentName": "ShowMesaPage" }, {
            showBackdrop: true,
            enableBackdropDismiss: true
        });
        this.modalFotosMesa.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ShowMesaPage.prototype, "onWindowResize", null);
    ShowMesaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-mesa',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\show-mesa\show-mesa.html"*/'<page-header></page-header>\n\n<ion-content padding style="margin-top: 59px">\n  <h1 text-center ion-text color="principal">\n      <img src="../../assets/imgs/meeting_principal.svg" width="50em" style="margin-bottom: -10px">\n    &nbsp;Manejo de Mesas\n  </h1>\n\n  <div class="mesa-selected-page">\n    <a class="cerrar-mesa" (click)="closeShowMesa()">\n      <i class="fas fa-arrow-left"></i>&nbsp; Volver a Manejo de Mesas \n    </a>\n    <div class="mesa-options-bar">\n      <ion-row>\n        <ion-col col>\n          <a (click)="openMesaEditar()"><i class="far fa-edit"></i></a>\n        </ion-col>\n        <ion-col col >\n          <a (click)="openMesaCelebraciones_show()"><img src="../../assets/imgs/confetti_menu.svg" class="option-img"/></a>\n        </ion-col>\n        <ion-col col >\n          <a (click)="openMesaClientes()"><i class="fas fa-user"></i></a>\n        </ion-col>\n        <ion-col col >\n          <a (click)="openMesaFotos()"><i class="fas fa-camera"></i></a>\n        </ion-col>\n        <ion-col col >\n          <a (click)="openMesaCorreo()"><i class="fas fa-envelope"></i></a>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class="mesa-title-bar">\n      <div class="table-cell">\n        <p class="mesa-numero">Mesa {{mesa.num_mesa}}:</p>\n        <p class="mesa-etiqueta">&nbsp; {{mesa.etiqueta}}</p>\n      </div>\n    </div>\n    <div class="mesa-horas-bar">\n      <ion-row>\n        <ion-col col-12 >\n          <i class="far fa-clock"></i> &nbsp; Hora de Apertura: &nbsp;<span style="text-decoration: bold; font-size: 2.4rem">{{horaApertura}}</span>\n        </ion-col>\n        <ion-col col-12 >\n          <i class="far fa-clock"></i> &nbsp; Hora de Clausura: &nbsp;<span style="text-decoration: bold; font-size: 2.4rem">{{horaClausura}}</span>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-row >\n      <ion-col col class="title-section">\n        Motivo de Celebración:\n      </ion-col>\n    </ion-row>\n    <div class="mesa-celebraciones-bar">\n      <ion-row>\n        <ion-col col class="empty" *ngIf="celebracionesMesa == 0">\n          ¡No se han agregado Celebraciones aún!\n        </ion-col>\n      </ion-row>  \n      <ion-row *ngFor="let clebracion of celebracionesMesa">\n        <ion-col col >\n          <img src="../../assets/imgs/confetti_menu.svg"/> &nbsp; {{clebracion.celebracion_descripcion}} de {{clebracion.cliente_name}} <a (click)="deleteCelebracionMesa(clebracion)"><i class="far fa-trash-alt icon-delete"></i></a>\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-row >\n      <ion-col col class="title-section">\n        Clientes de la Mesa:\n      </ion-col>\n    </ion-row>\n    <div class="mesa-clientes-bar">\n      <ion-row>\n        <ion-col col class="empty" *ngIf="cantClientes == 0">\n          ¡No se han agregado Clientes aún!\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor="let cliente of clientesMesa">\n        <ion-col col >\n          <i class="fas fa-user"></i> &nbsp; {{cliente.cliente_name}} <a (click)="deleteClienteMesa(cliente)"><i class="far fa-trash-alt icon-delete"></i></a>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n    \n    \n    \n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\show-mesa\show-mesa.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_manejo_mesas_manejo_mesas__["a" /* ManejoMesasProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ShowMesaPage);
    return ShowMesaPage;
}());

//# sourceMappingURL=show-mesa.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearMesaModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_manejo_mesas_manejo_mesas__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CrearMesaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearMesaModalPage = /** @class */ (function () {
    function CrearMesaModalPage(navCtrl, navParams, formBuilder, manejoMesasService, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.manejoMesasService = manejoMesasService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.newMesaForm = this.formBuilder.group({
            num_mesa: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            etiqueta: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            apertura: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            clausura: ['']
        });
    }
    CrearMesaModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearMesaModalPage');
    };
    // Cierra el Modal
    //----------------------------------------------------------
    CrearMesaModalPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    // Crea una Mesa
    //----------------------------------------------------------
    CrearMesaModalPage.prototype.crearMesa = function () {
        var _this = this;
        if (this.newMesaForm.valid) {
            var fechaApertura = this.newMesaForm.controls['apertura'].value + '';
            var str = fechaApertura.substring(0, 10);
            var str2 = fechaApertura.substring(11, 16);
            fechaApertura = str + ' ' + str2;
            var fechaClausura = this.newMesaForm.controls['clausura'].value + '';
            str = fechaClausura.substring(0, 10);
            str2 = fechaClausura.substring(11, 16);
            fechaClausura = str + ' ' + str2;
            var mesaData = {
                'num_mesa': this.newMesaForm.controls['num_mesa'].value,
                'etiqueta': this.newMesaForm.controls['etiqueta'].value,
                'apertura': fechaApertura,
                'clausura': fechaClausura
            };
            console.log(mesaData);
            this.manejoMesasService.crearMesa(mesaData).then(function (result) {
                if (!result['error']) {
                    console.log('Mesa creada Exitosamente');
                    _this.navParams.get("parentPage").getMesasActivas();
                    var toast = _this.toastCtrl.create({
                        message: 'Mesa Aperturada Exitosamente',
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                    _this.closeModal();
                }
                else {
                    console.log('Error en los datos enviados');
                    var errorMessage_1 = '';
                    if (result['error']['errors']) {
                        if (result['error']['errors']['num_mesa']) {
                            result['error']['errors']['num_mesa'].forEach(function (element) {
                                errorMessage_1 += '<i class="fas fa-exclamation-circle error-item"></i> ' + element + '<br>';
                            });
                        }
                        if (result['error']['errors']['etiqueta']) {
                            result['error']['errors']['etiqueta'].forEach(function (element) {
                                errorMessage_1 += '<i class="fas fa-exclamation-circle error-item"></i> ' + element + '<br>';
                            });
                        }
                        if (result['error']['errors']['apertura']) {
                            result['error']['errors']['apertura'].forEach(function (element) {
                                errorMessage_1 += '<i class="fas fa-exclamation-circle error-item"></i> ' + element + '<br>';
                            });
                        }
                        if (result['error']['errors']['clausura']) {
                            result['error']['errors']['clausura'].forEach(function (element) {
                                errorMessage_1 += '<i class="fas fa-exclamation-circle error-item"></i> ' + element + '<br>';
                            });
                        }
                    }
                    else {
                        errorMessage_1 = result['error']['message'] + '<br>';
                    }
                    var alert_1 = _this.alertCtrl.create({
                        title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                        subTitle: 'Hubo errores al Aperturar la Mesa:<br>',
                        message: errorMessage_1,
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
            }, function (err) {
            });
        }
    };
    CrearMesaModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crear-mesa-modal',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\crear-mesa-modal\crear-mesa-modal.html"*/'<!--\n  Generated template for the CrearMesaModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <div class="modal-header">\n    <p class="modal-title" >Aperturar Mesa</p>\n\n    <button class="modal-close-icon" (click)="closeModal()">\n      <i class="fas fa-times" style="font-size: 2.3rem"></i>\n    </button>\n  </div>      \n</ion-header>\n\n<ion-content>\n  <div padding class="content-overflow">\n    <form  [formGroup]="newMesaForm">\n      \n      <ion-item class="form-item">\n        <ion-label stacked>Numero de la Mesa:</ion-label>\n        <ion-input type="number" [formControl]="newMesaForm.controls[\'num_mesa\']"></ion-input>\n      </ion-item>\n      \n      <ion-item class="form-item">\n        <ion-label stacked>Etiqueta de la Mesa:</ion-label>\n        <ion-input type="text" [formControl]="newMesaForm.controls[\'etiqueta\']"></ion-input>\n      </ion-item>\n      \n      <ion-item class="form-item">\n        <ion-label stacked>Fecha y Hora de Apertura:</ion-label>\n        <ion-datetime displayFormat="YYYY-MM-DD HH:mm" pickerFormat="MMM/DD/YYYY hh:mma" \n        doneText="Aceptar" cancelText="Cancelar"	[formControl]="newMesaForm.controls[\'apertura\']"></ion-datetime>\n      </ion-item>\n      \n      <ion-item class="form-item">\n        <ion-label stacked>Fecha y Hora de Clausura (Opcional):</ion-label>\n        <ion-datetime displayFormat="YYYY-MM-DD HH:mm" pickerFormat="MMM/DD/YYYY hh:mma" \n        doneText="Aceptar" cancelText="Cancelar" [formControl]="newMesaForm.controls[\'clausura\']"></ion-datetime>\n      </ion-item>\n      \n      \n      \n      <ion-row class="sign-in-button-container">\n        <ion-col text-center>\n          <button class="succes-button" (click)="crearMesa()" [disabled]="!newMesaForm.valid">\n            <i class="fas fa-plus" style="font-size: 2rem"></i>&nbsp;Crear\n          </button>\n        </ion-col>\n      </ion-row>\n      \n      \n    </form>\n    \n  </div>\n</ion-content>\n  '/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\crear-mesa-modal\crear-mesa-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_manejo_mesas_manejo_mesas__["a" /* ManejoMesasProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], CrearMesaModalPage);
    return CrearMesaModalPage;
}());

//# sourceMappingURL=crear-mesa-modal.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearClientePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_clientes_service_clientes_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__imports_validator__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CrearClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CrearClientePage = /** @class */ (function () {
    function CrearClientePage(navCtrl, navParams, formBuilder, alertCtrl, clienteService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.clienteService = clienteService;
        this.clienteForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__imports_validator__["a" /* regexValidators */].email),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            whatsapp: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            telefono: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            direccion: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            celebraciones_cliente: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ]
        });
        this.getAllCelebrciones();
    }
    CrearClientePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CrearClientePage');
    };
    // Inicializa el Input 
    //----------------------------------------------------------
    CrearClientePage.prototype.initCelebracionCliente = function (celebracion) {
        return this.formBuilder.group({
            descripcion: [celebracion.descripcion, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            fecha: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            celebracion_id: celebracion.id
        });
    };
    // Agrega un input al arreglo de Inputs
    //----------------------------------------------------------
    CrearClientePage.prototype.addCelebracion = function (celebracion) {
        var control = this.clienteForm.controls.celebraciones_cliente;
        control.push(this.initCelebracionCliente(celebracion));
    };
    // Remueveun input del arreglo de Inputs
    //----------------------------------------------------------
    CrearClientePage.prototype.removeFoto = function (i) {
        var control = this.clienteForm.controls.celebraciones_cliente;
        control.removeAt(i);
    };
    // Remueveun input del arreglo de Inputs
    //----------------------------------------------------------
    CrearClientePage.prototype.getAllCelebrciones = function () {
        var _this = this;
        this.clienteService.getCelebraciones().then(function (result) {
            if (!result['error']) {
                console.log('Celebraciones obtenidas Exitosamente');
                // console.log(result);
                _this.celebraciones = result;
            }
            else {
                console.log('Error al obtener Celebraciones');
                console.log(result);
                var errorMessage = '';
                errorMessage = result['error']['message'] + '<br>';
                var alert_1 = _this.alertCtrl.create({
                    title: '<p class="alert-title"><i class="fas fa-exclamation-circle"></i>&nbsp;Errores en los datos</p>',
                    subTitle: 'Hubo errores al obtener las Celebraciones:<br>',
                    message: errorMessage,
                    buttons: ['OK']
                });
                alert_1.present();
            }
        });
    };
    CrearClientePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-crear-cliente',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\crear-cliente\crear-cliente.html"*/'<ion-header >\n    <ion-navbar color="primary" >\n          \n      <img class="navabr-img"  text-center src="../../assets/imgs/logo_navbar.png" />\n                    \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <div padding class="content-overflow">\n      <form  [formGroup]="clienteForm">\n        \n        <ion-item class="form-item">\n          <ion-label stacked>Nombre y Apellido:</ion-label>\n          <ion-input type="text" [formControl]="clienteForm.controls[\'name\']"></ion-input>\n        </ion-item>\n\n        <ion-item class="form-item">\n          <ion-label stacked>E-Mail:</ion-label>\n          <ion-input type="email" [formControl]="clienteForm.controls[\'email\']"></ion-input>\n        </ion-item>\n        \n        <ion-item class="form-item">\n          <ion-label stacked>Teléfono (Whatsapp):</ion-label>\n          <ion-input type="number" [formControl]="clienteForm.controls[\'whatsapp\']"></ion-input>\n        </ion-item>\n\n        <ion-item class="form-item">\n          <ion-label stacked>Teléfono (Opcional):</ion-label>\n          <ion-input type="number" [formControl]="clienteForm.controls[\'telefono\']"></ion-input>\n        </ion-item>\n\n        <ion-item class="form-item">\n          <ion-label stacked>Dirección:</ion-label>\n          <ion-input type="text" [formControl]="clienteForm.controls[\'direccion\']"></ion-input>\n        </ion-item>\n\n        <ion-item class="form-item">\n          <ion-label stacked>gregar Celebración:</ion-label>\n          <ion-input type="text" ></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Gaming</ion-label>\n            <ion-select >\n              <ion-option value="nes">NES</ion-option>\n              <ion-option value="n64">Nintendo64</ion-option>\n              <ion-option value="ps">PlayStation</ion-option>\n              <ion-option value="genesis">Sega Genesis</ion-option>\n              <ion-option value="saturn">Sega Saturn</ion-option>\n              <ion-option value="snes">SNES</ion-option>\n            </ion-select>\n          </ion-item>\n        \n        \n        \n        \n        <ion-row class="sign-in-button-container">\n          <ion-col text-center>\n            <button class="succes-button" (click)="crearMesa()" [disabled]="!clienteForm.valid">\n              <i class="fas fa-plus" style="font-size: 2rem"></i>&nbsp;Crear\n            </button>\n          </ion-col>\n        </ion-row>\n        \n        \n      </form>\n      \n    </div>\n  </ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\crear-cliente\crear-cliente.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_clientes_service_clientes_service__["a" /* ClientesServiceProvider */]])
    ], CrearClientePage);
    return CrearClientePage;
}());

//# sourceMappingURL=crear-cliente.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regexValidators; });
// The Angular email validator accepts an email like "rob@example", perhaps because "rob@localhost" could be valid.
// The pureEmail regex does not accept "ryan@example" as a valid email address, which I think is a good thing.
// See: EMAIL_REGEXP from https://github.com/angular/angular.js/blob/ffb6b2fb56d9ffcb051284965dd538629ea9687a/src/ng/directive/input.js#L16
var PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Passwords should be at least 8 characters long and should contain one number, one character and one special character.
var PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.-])[A-Za-z\d@$!%*#?&.-]{8,}$/;
var regexValidators = {
    email: PURE_EMAIL_REGEXP,
    password: PASSWORD_REGEXP
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DatosPage = /** @class */ (function () {
    function DatosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DatosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DatosPage');
    };
    DatosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-datos',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\datos\datos.html"*/'<page-header></page-header>\n\n<ion-content padding style="margin-top: 59px">\n  <h1 text-center ion-text color="principal">\n    <i class="fas fa-database"></i>\n    &nbsp;Datos\n  </h1>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\datos\datos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DatosPage);
    return DatosPage;
}());

//# sourceMappingURL=datos.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UserPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPopoverPage = /** @class */ (function () {
    function UserPopoverPage(navCtrl, navParams, storage, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.authService = authService;
        this.storage.get('user_name').then(function (val) {
            _this.user_name = val;
        });
        this.storage.get('user_rol').then(function (val) {
            switch (val) {
                case "ADM":
                    _this.user_rol = "Usuario Administrador";
                    break;
                case "EXP":
                    _this.user_rol = "Usuario de Experiencia";
                    break;
                case "CLI":
                    _this.user_rol = "Cliente";
            }
        });
    }
    UserPopoverPage.prototype.logout = function () {
        var _this = this;
        this.authService.logout().then(function (result) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
            _this.navCtrl.popToRoot();
            console.log(result);
        }, function (err) {
            console.log("Error en logout");
        });
    };
    UserPopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPopoverPage');
    };
    UserPopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-popover',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\user-popover\user-popover.html"*/'  <label ion-item class="user-info">\n       <label class="user-name">{{user_name}}</label><br>\n       {{user_rol}}\n  </label>\n  <button ion-item text-right class="user-option">\n      Editar Perfil &nbsp;<i class="fas fa-user-edit"></i>\n  </button>\n  <button ion-item text-right class="user-option" (click)="logout()">\n      Cerrar Sesión &nbsp;<i class="fas fa-sign-out-alt"></i>\n  </button>'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\user-popover\user-popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], UserPopoverPage);
    return UserPopoverPage;
}());

//# sourceMappingURL=user-popover.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imports_validator__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, alertCtrl, loadingCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.credentialsForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__imports_validator__["a" /* regexValidators */].email),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__imports_validator__["a" /* regexValidators */].password),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required
                ])
            ]
        });
        this.onLogIn();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.onLogIn = function () {
        var _this = this;
        if (this.credentialsForm.valid) {
            var credentials = {
                'email': this.credentialsForm.controls['email'].value,
                'password': this.credentialsForm.controls['password'].value
            };
            var loading_1 = this.loadingCtrl.create({
                //spinner: 'dots',
                content: "\n        <ion-title>\n            Autenticando Usuario . . .\n        </ion-title>\n        <ion-spinner></ion-spinner>",
                cssClass: 'my-loading-class'
            });
            loading_1.present();
            console.log(credentials);
            this.authService.login(credentials).then(function (result) {
                if (result['access_token']) {
                    console.log('Success');
                    setTimeout(function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        loading_1.dismiss();
                    }, 2000);
                }
                else {
                    console.log('Failed');
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Failed Login',
                        subTitle: result['message'],
                        buttons: ['OK']
                    });
                    alert_1.present();
                    loading_1.dismiss();
                }
            }, function (err) {
                loading_1.dismiss();
                /*this.loading.dismiss().then( () => {
                  let alert = this.alertCtrl.create({
                    message: err.message,
                    buttons: [
                      {
                        text: "Ok",
                        role: 'cancel'
                      }
                    ]
                  });
                  alert.present();*/
            });
        }
    };
    LoginPage.prototype.onForgotPassword = function () {
        // this.logger.info('SignInPage: onForgotPassword()');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\login\login.html"*/'\n<ion-content >\n\n    <ion-row class="app-icon-container">\n      <ion-col text-center>\n        <ion-icon name="ionic" class="app-icon-zoom"></ion-icon>\n      </ion-col>\n    </ion-row>\n  \n    <form [formGroup]="credentialsForm">\n  \n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input [formControl]="credentialsForm.controls[\'email\']"\n            type="email" value="miguelboscan18@gmail.com"></ion-input>\n      </ion-item>\n  \n    \n  \n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input [formControl]="credentialsForm.controls[\'password\']"\n            type="password" value="Miguel2006*"></ion-input>\n      </ion-item>\n  \n      <div *ngIf="credentialsForm.controls.email.hasError(\'pattern\')">\n          Please enter a valid email.\n      </div>\n     <!-- <div *ngIf="credentialsForm.controls.password.hasError(\'pattern\')">\n          Passwords should be at least 8 characters long and contain one number,\n          one character and one special character.\n      </div> -->\n  \n      <ion-row class="sign-in-button-container">\n        <ion-col text-center>\n          <button ion-button block color="secondary"\n              [disabled]="!credentialsForm.valid" (click)="onLogIn()">\n            Sign in\n          </button>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row>\n        <ion-col text-center>\n          <button ion-button clear color="light"\n              (click)="onForgotPassword()">\n            Forgot your password?\n          </button>\n        </ion-col>\n      </ion-row>\n  \n    </form>\n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_header_header__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_popover_user_popover__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_manejo_mesas_manejo_mesas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_historial_asistencia_historial_asistencia__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_admin_clientes_admin_clientes__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_admin_correos_admin_correos__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_datos_datos__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_crear_mesa_modal_crear_mesa_modal__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_show_mesa_show_mesa__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_editar_mesa_modal_editar_mesa_modal__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_mesa_celebraciones_mesa_celebraciones__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_mesa_clientes_mesa_clientes__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_mesa_fotos_mesa_fotos__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_mesa_correo_mesa_correo__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_initial_options_initial_options__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_crear_cliente_crear_cliente__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_auth_service__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_manejo_mesas_manejo_mesas__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_clientes_service_clientes_service__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_user_popover_user_popover__["a" /* UserPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_manejo_mesas_manejo_mesas__["a" /* ManejoMesasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_historial_asistencia_historial_asistencia__["a" /* HistorialAsistenciaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_clientes_admin_clientes__["a" /* AdminClientesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_correos_admin_correos__["a" /* AdminCorreosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_datos_datos__["a" /* DatosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_crear_mesa_modal_crear_mesa_modal__["a" /* CrearMesaModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_show_mesa_show_mesa__["a" /* ShowMesaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_editar_mesa_modal_editar_mesa_modal__["a" /* EditarMesaModalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_mesa_celebraciones_mesa_celebraciones__["a" /* MesaCelebracionesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mesa_clientes_mesa_clientes__["a" /* MesaClientesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_mesa_fotos_mesa_fotos__["a" /* MesaFotosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_mesa_correo_mesa_correo__["a" /* MesaCorreoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_initial_options_initial_options__["a" /* InitialOptionsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_crear_cliente_crear_cliente__["a" /* CrearClientePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                    iconMode: 'md',
                    menuType: 'overlay',
                    scrollAssist: true,
                    autoFocusAssist: true
                }, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], name: 'LoginPage', segment: 'login' }
                    ],
                }),
                __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_header_header__["a" /* HeaderPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_user_popover_user_popover__["a" /* UserPopoverPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_manejo_mesas_manejo_mesas__["a" /* ManejoMesasPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_historial_asistencia_historial_asistencia__["a" /* HistorialAsistenciaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_admin_clientes_admin_clientes__["a" /* AdminClientesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_admin_correos_admin_correos__["a" /* AdminCorreosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_datos_datos__["a" /* DatosPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_crear_mesa_modal_crear_mesa_modal__["a" /* CrearMesaModalPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_show_mesa_show_mesa__["a" /* ShowMesaPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_editar_mesa_modal_editar_mesa_modal__["a" /* EditarMesaModalPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_mesa_celebraciones_mesa_celebraciones__["a" /* MesaCelebracionesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_mesa_clientes_mesa_clientes__["a" /* MesaClientesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_mesa_fotos_mesa_fotos__["a" /* MesaFotosPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_mesa_correo_mesa_correo__["a" /* MesaCorreoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_initial_options_initial_options__["a" /* InitialOptionsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_crear_cliente_crear_cliente__["a" /* CrearClientePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_26__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_manejo_mesas_manejo_mesas__["a" /* ManejoMesasProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_clientes_service_clientes_service__["a" /* ClientesServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManejoMesasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__imports_url__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ManejoMesasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ManejoMesasProvider = /** @class */ (function () {
    function ManejoMesasProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello ManejoMesasProvider Provider');
    }
    // Get Mesas Activas
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.getMesasActive = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'mesas_active', {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token)
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    // Crea una Mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.crearMesa = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json ',
                'X-Requested-With': 'XMLHttpRequest ',
                'Authorization': token
            });
            console.log(JSON.stringify(data));
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'mesa', JSON.stringify(data), { headers: headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(err);
            });
        });
    };
    // Edita una Mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.editarMesa = function (data, id) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json ',
                'X-Requested-With': 'XMLHttpRequest ',
                'Authorization': token
            });
            console.log(JSON.stringify(data));
            _this.http.put(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'mesa/' + id, JSON.stringify(data), { headers: headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(err);
            });
        });
    };
    // Get CLientes de una Mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.getClientesMesa = function (mesa_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'clientes_mesa/' + mesa_id, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token)
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    // Get Celebraciones de una Mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.getCelebracionesMesa = function (mesa_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'celebraciones_mesa/' + mesa_id, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token)
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    // Elimina un Cliente de la Mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.deleteClienteMesa = function (id_cliente) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'X-Requested-With': 'XMLHttpRequest ',
                'Authorization': token
            });
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'cliente_mesa/' + id_cliente, { headers: headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(err);
            });
        });
    };
    // Elimina una Celebración de la Mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.deleteCelebracionMesa = function (id_cliente) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'X-Requested-With': 'XMLHttpRequest ',
                'Authorization': token
            });
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'celebracion_mesa/' + id_cliente, { headers: headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(err);
            });
        });
    };
    // Agrega Celebraciones a una mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.agregarCelerebracionesMesa = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json ',
                'X-Requested-With': 'XMLHttpRequest ',
                'Authorization': token
            });
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'celebracion_mesa', JSON.stringify(data), { headers: headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(err);
            });
        });
    };
    // Agrega clientes a una mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.agregarClienteMesa = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json ',
                'X-Requested-With': 'XMLHttpRequest ',
                'Authorization': token
            });
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'cliente_mesa', JSON.stringify(data), { headers: headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(err);
            });
        });
    };
    // Get All Clientes indicando si estan en la mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.getClientesMesaCheck = function (mesa_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'clientes_mesa_check/' + mesa_id, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token)
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    // Get All Celebraciones_CLientes indicando si estan en la mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.getCelebracionesMesaCheck = function (mesa_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'celebraciones_mesa_check/' + mesa_id, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token)
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    // Get Fotos de una Mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.getFotosMesa = function (mesa_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'fotos_mesa/' + mesa_id, {
                headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]().set('Authorization', token)
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    // Delete Fotos de una Mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.deleteFotoMesa = function (foto_mesa_id) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'X-Requested-With': 'XMLHttpRequest ',
                'Authorization': token
            });
            _this.http.delete(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'foto_mesa/' + foto_mesa_id, { headers: headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(err);
            });
        });
    };
    // Agrega clientes a una mesa
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.agregarFotoMesa = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json ',
                'X-Requested-With': 'XMLHttpRequest ',
                'Authorization': token
            });
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'foto_mesa', JSON.stringify(data), { headers: headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                resolve(err);
            });
        });
    };
    // Get All Celebraciones
    //----------------------------------------------------------
    ManejoMesasProvider.prototype.getCelebraciones = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var token;
            _this.storage.get('token').then(function (val) {
                //console.log("Token: "+val);
                token = 'Bearer ' + val;
            });
            token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRiOGZmZWFjYjliY2M2ODdlZDNhMTFlMGUxYjBjYTQ4Y2NkMGU1ZDdmNTNiMDIwMjVmMmNjNTI1NDBlNjdmMDUyYWY1YTE3YzI3MjNmMzRhIn0.eyJhdWQiOiIxIiwianRpIjoiZGI4ZmZlYWNiOWJjYzY4N2VkM2ExMWUwZTFiMGNhNDhjY2QwZTVkN2Y1M2IwMjAyNWYyY2M1MjU0MGU2N2YwNTJhZjVhMTdjMjcyM2YzNGEiLCJpYXQiOjE1NDEwODgwNzIsIm5iZiI6MTU0MTA4ODA3MiwiZXhwIjoxNTcyNjI0MDcyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.AufQk8pXPVFg0oexiQV5ixlXtnlRM0hy19IdrC-0Txi789zqy4lxSYbhLneF9Fi4ExWXlZTiWNAJnfia8AvMmEv1LlOvaHPSVj8BNNMFYiniX7RnaVYN7-SNlFc8XEALVbBX749Ns_6fmks0BDuTJ1n7o7OKqFkZUGBn7dtmlPT-J00O966lOTUBgHr7ka0HtCRm_PsOcIC3Bhus-Rtgn0yRcYjXmFqldxgN_VDAuL84cpfgEgsnf5Ky4heCMbh0W1cJ-28nM8dbzgkKNPKjBHBHKSHPwGjwsu0mPyJCf6-kHyj8Flwjx0LzXkWaqgKvrWBc3GjJSQk_k5Q1b5ngKV9llNIAEpE5EtD_Ve6WDaeRqBsXYy6haqNaXOs4ZBuE7E8Y1hf57l2dO3u8LovnCF3dXs2mKdjUTKysufnyIanEsYZ91Q33TS7X-FHJnWz0VOvDRv1ycHzAGRDV5Oqw1lFt2haJ2aZWpCh8uBfI5xYmSPqrRWjdhWV1-GcNuh6AAGyT5ZGVAse8A2MUHuL9Z7LwQZ6iejqPtH-uNfruuNePn346vWnzZ6iItovRHv6Vuv2x2GoAkMiOUwJ5ufNwaKackXDfZYOUeEkkeMoDl41CI4DGE5WUTIVfPN4UsHVzrgnnKdWCt-Q1Gt20vGCQo5R-OvfmsPvPDwVbOeGSaD0';
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'X-Requested-With': 'XMLHttpRequest '
            });
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__imports_url__["a" /* constantes */].API_URL + 'celebracion/', { headers: headers })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                resolve(err);
            });
        });
    };
    ManejoMesasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ManejoMesasProvider);
    return ManejoMesasProvider;
}());

//# sourceMappingURL=manejo-mesas.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_manejo_mesas_manejo_mesas__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_historial_asistencia_historial_asistencia__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_admin_clientes_admin_clientes__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_correos_admin_correos__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_datos_datos__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { iconType: 'icon', icon: 'fas fa-home', title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { iconType: 'img', icon: '../../assets/imgs/meeting_menu.svg', title: 'Manejo de Mesas', component: __WEBPACK_IMPORTED_MODULE_5__pages_manejo_mesas_manejo_mesas__["a" /* ManejoMesasPage */] },
            { iconType: 'icon', icon: 'fas fa-history', title: 'Hist. Asistencia', component: __WEBPACK_IMPORTED_MODULE_6__pages_historial_asistencia_historial_asistencia__["a" /* HistorialAsistenciaPage */] },
            { iconType: 'icon', icon: 'fas fa-users-cog', title: 'Adm. Clientes', component: __WEBPACK_IMPORTED_MODULE_7__pages_admin_clientes_admin_clientes__["a" /* AdminClientesPage */] },
            { iconType: 'icon', icon: 'fas fa-envelope', title: 'Adm. Correos', component: __WEBPACK_IMPORTED_MODULE_8__pages_admin_correos_admin_correos__["a" /* AdminCorreosPage */] },
            { iconType: 'icon', icon: 'fas fa-database', title: 'Datos', component: __WEBPACK_IMPORTED_MODULE_9__pages_datos_datos__["a" /* DatosPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" class="menu-item">\n        <div *ngIf="p.iconType == \'icon\'">\n          <i class="{{p.icon}}"></i> &nbsp;{{p.title}}\n        </div>\n        <div *ngIf="p.iconType == \'img\'">\n          <img src="{{p.icon}}" width="28em" style="margin-bottom: -5px"/> &nbsp;{{p.title}}\n        </div>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_popover_user_popover__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the HeaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HeaderPage = /** @class */ (function () {
    function HeaderPage(navCtrl, navParams, popoverCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.storage = storage;
        this.storage.get('user_picture').then(function (val) {
            _this.user_picture = val;
        });
        this.storage.get('user_name').then(function (val) {
            _this.user_name = val;
        });
    }
    HeaderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HeaderPage');
    };
    HeaderPage.prototype.userPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__user_popover_user_popover__["a" /* UserPopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    HeaderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-header',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\header\header.html"*/'<ion-header >\n  <ion-navbar color="primary" >\n          <button ion-button menuToggle color="light" >\n            <ion-icon name="menu"></ion-icon>\n          </button>\n        \n          <img class="navabr-img"  text-center src="../../assets/imgs/logo_navbar.png" />\n        \n            <ion-buttons end style="position: absolute; right: 10px; ">\n              <button ion-button icon-only (click)="userPopover($event)">\n                <ion-icon name="contact" class="avatar"></ion-icon>\n                &nbsp;\n                <label class="hidden-sm-down" >{{user_name}} &nbsp;</label>\n                \n                <i class="fas fa-caret-down"></i>\n              </button>\n            </ion-buttons>\n        \n  </ion-navbar>\n</ion-header>\n  \n  \n  '/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\header\header.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], HeaderPage);
    return HeaderPage;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MesaCorreoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MesaCorreoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MesaCorreoPage = /** @class */ (function () {
    function MesaCorreoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MesaCorreoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MesaCorreoPage');
    };
    MesaCorreoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mesa-correo',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\mesa-correo\mesa-correo.html"*/'<!--\n  Generated template for the MesaCorreoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mesa-correo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\mesa-correo\mesa-correo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MesaCorreoPage);
    return MesaCorreoPage;
}());

//# sourceMappingURL=mesa-correo.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InitialOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InitialOptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InitialOptionsPage = /** @class */ (function () {
    function InitialOptionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InitialOptionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InitialOptionsPage');
    };
    InitialOptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-initial-options',template:/*ion-inline-start:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\initial-options\initial-options.html"*/'<!--\n  Generated template for the InitialOptionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>initial-options</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Personal\Documents\Miguel\07 - Freelancer\Proyectos\Jhony Maracas\Frontend\JME\src\pages\initial-options\initial-options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], InitialOptionsPage);
    return InitialOptionsPage;
}());

//# sourceMappingURL=initial-options.js.map

/***/ })

},[219]);
//# sourceMappingURL=main.js.map