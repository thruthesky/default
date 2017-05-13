webpackJsonp([1,4],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 107;


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(71);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
 * @todo check if the device is online( has internet connection )
 *
 *
 */


var AppComponent = (function () {
    function AppComponent(app) {
        var _this = this;
        this.app = app;
        app.loginCheck();
        document.addEventListener('deviceready', function () { return _this.onDeviceReady(); }, false);
    }
    AppComponent.prototype.onDeviceReady = function () {
        console.log("Cordova is ready.");
        // console.log(device.cordova);
        this.app.device = device;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(187),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app__["a" /* App */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomErrorHandler; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomErrorHandler = (function () {
    function CustomErrorHandler() {
    }
    CustomErrorHandler.prototype.handleError = function (error) {
        this.displayError(error);
        // IMPORTANT: Rethrow the error otherwise it gets swallowed
        throw error;
    };
    CustomErrorHandler.prototype.displayError = function (error) {
        var handler = document.querySelector('#custom-error-handler');
        if (!handler) {
            var div = document.createElement('div');
            div.id = "custom-error-handler";
            document.body.insertBefore(div, document.body.firstChild);
            handler = document.querySelector('#custom-error-handler');
        }
        var div = document.createElement('div');
        div.innerText = error.stack;
        var h2 = document.createElement('h2');
        h2.innerText = error.message;
        handler.appendChild(h2);
        handler.appendChild(div);
    };
    return CustomErrorHandler;
}());
CustomErrorHandler = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CustomErrorHandler);

//# sourceMappingURL=app.error-handler.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_error_handler__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_header__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_icon_user_icon__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_about__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_register_register__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__environments_environment__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// global custom error handler. need help here.

// abc componnents. need help here. Make it npm modules or not?
//import { AbcComponents } from './abc-components/abc-components.module';
//import { AbcComponents } from 'abc-components';
// app share service.

// app root component.



// page components.





// angulare fire 2




var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */], pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_header_header__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_user_icon_user_icon__["a" /* UserIconComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_18__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_app__["a" /* App */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5__app_error_handler__["a" /* CustomErrorHandler */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(app, router) {
        this.app = app;
        this.router = router;
        this.showMenu = false;
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.onClickLogout = function () {
        var _this = this;
        this.app.logout(function () {
            console.log("user logged out.");
            _this.router.navigateByUrl('/');
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'header-component',
        template: __webpack_require__(188),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app__["a" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserIconComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserIconComponent = (function () {
    function UserIconComponent(app) {
        this.app = app;
    }
    UserIconComponent.prototype.ngOnInit = function () { };
    return UserIconComponent;
}());
UserIconComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'user-icon',
        template: __webpack_require__(189)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app__["a" /* App */]) === "function" && _a || Object])
], UserIconComponent);

var _a;
//# sourceMappingURL=user-icon.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPage = (function () {
    function AboutPage() {
    }
    AboutPage.prototype.ngOnInit = function () { };
    return AboutPage;
}());
AboutPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(190)
    }),
    __metadata("design:paramtypes", [])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(app) {
        this.app = app;
    }
    HomePage.prototype.ngOnInit = function () { };
    return HomePage;
}());
HomePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(191)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app__["a" /* App */]) === "function" && _a || Object])
], HomePage);

var _a;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_app__ = __webpack_require__(14);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(router, afAuth, app) {
        this.router = router;
        this.afAuth = afAuth;
        this.app = app;
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.onClickLoginWithGoogle = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider())
            .then(function () { return _this.successHandler(); })
            .catch(function (e) { return _this.errorHandler(e); });
    };
    LoginPage.prototype.onClickLoginWithFacebook = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider())
            .then(function () { return _this.successHandler(); })
            .catch(function (e) { return _this.errorHandler(e); });
    };
    LoginPage.prototype.successHandler = function () {
        this.router.navigateByUrl('/');
    };
    LoginPage.prototype.errorHandler = function (e) {
        console.log('error: ', e);
        this.error = e.message;
        this.app.zoneRun();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(192)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_app__["a" /* App */]) === "function" && _c || Object])
], LoginPage);

var _a, _b, _c;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfilePage = (function () {
    function ProfilePage() {
    }
    ProfilePage.prototype.ngOnInit = function () { };
    return ProfilePage;
}());
ProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(193)
    }),
    __metadata("design:paramtypes", [])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_app__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = (function () {
    function RegisterPage(router, app) {
        this.router = router;
        this.app = app;
        this.form = {};
    }
    RegisterPage.prototype.ngOnInit = function () { };
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        console.log("onSubmit()");
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]()
            .createUserWithEmailAndPassword(this.form.email, this.form.password)
            .then(function (a) {
            console.log('user created: ', a);
            var user = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().currentUser;
            user.updateProfile({
                displayName: _this.form.displayName,
                photoURL: null
            })
                .then(function () {
                console.log('user displayName updated: ');
                _this.app.user.displayName = _this.form.displayName;
                _this.router.navigateByUrl('/');
            })
                .catch(function (e) {
                _this.error = e.message;
            });
        })
            .catch(function (e) {
            _this.error = e.message;
        });
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        template: __webpack_require__(194)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_app__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_app__["a" /* App */]) === "function" && _b || Object])
], RegisterPage);

var _a, _b;
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



;
var App = (function () {
    function App(ngZone, afAuth) {
        this.ngZone = ngZone;
        this.afAuth = afAuth;
        this.user = {};
    }
    Object.defineProperty(App.prototype, "logged", {
        get: function () {
            return this.user.displayName !== void 0;
        },
        enumerable: true,
        configurable: true
    });
    App.prototype.logout = function (callback) {
        this.afAuth.auth.signOut()
            .then(callback);
    };
    App.prototype.loginCheck = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                user['providerData'].forEach(function (profile) {
                    _this.user.providerId = profile.providerId;
                    _this.user.uid = profile.uid;
                    _this.user.displayName = profile.displayName;
                    _this.user.email = profile.email;
                    _this.user.photoURL = profile.photoURL;
                    console.log("user logged in: ", _this.user);
                });
            }
            else {
                console.log("user not logged in");
                _this.user = {};
            }
        });
    };
    App.prototype.zoneRun = function () {
        this.ngZone.run(function () { });
    };
    return App;
}());
App = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object])
], App);

var _a, _b;
//# sourceMappingURL=app.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n/* VARIABLES */\n/* BASE */\nbody {\n  margin-top: 68px !important; }\n\nng-component {\n  display: block;\n  margin: 0 auto;\n  padding: 0 8px;\n  max-width: 992px; }\n  @media all and (min-width: 992px) {\n    ng-component {\n      padding: 0; } }\n  ng-component .title {\n    font-size: 3em; }\n\n#custom-error-handler {\n  position: absolute;\n  z-index: 987654321;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 1em;\n  font-size: 14px;\n  background-color: black;\n  color: white; }\n  #custom-error-handler h2 {\n    font-size: 24px;\n    color: #b00; }\n\nnav.navbar {\n  padding: 0 !important; }\n  nav.navbar .container {\n    margin: 0;\n    padding: 0;\n    width: 100%; }\n    @media (min-width: 992px) {\n      nav.navbar .container {\n        margin: 0 auto;\n        width: 992px; } }\n  nav.navbar .navbar-toggler {\n    padding: 0;\n    right: 0;\n    padding: 0.5rem; }\n    @media (min-width: 992px) {\n      nav.navbar .navbar-toggler {\n        padding-left: 0; } }\n  nav.navbar .logo {\n    padding: 0.5rem;\n    min-width: 8em; }\n    @media (min-width: 992px) {\n      nav.navbar .logo {\n        padding-left: 0; } }\n\n.collapse.active {\n  display: block; }\n\n@media (min-width: 768px) {\n  .collapse ul {\n    height: 25px; } }\n\n.collapse ul li {\n  padding: .4em 1em; }\n  @media (min-width: 768px) {\n    .collapse ul li {\n      padding: 0; } }\n\nnav.navbar {\n  font-size: 0.9rem;\n  background-color: slategrey;\n  color: white; }\n  nav.navbar .collapse, nav.navbar a {\n    background-color: #93a3b3;\n    color: snow; }\n    @media (min-width: 768px) {\n      nav.navbar .collapse, nav.navbar a {\n        background-color: inherit;\n        color: white; } }\n  nav.navbar .fa {\n    color: slategrey; }\n  nav.navbar .fa-circle {\n    color: white; }\n  nav.navbar .navbar-toggler {\n    font-size: 0.9rem; }\n\n.user-icon {\n  height: auto;\n  vertical-align: top; }\n  @media (min-width: 768px) {\n    .user-icon {\n      height: 0; } }\n  .user-icon img {\n    top: -2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<nav class=\"header navbar navbar-toggleable-sm fixed-top\">\n    <div class=\"container\">\n\n        <div class=\"navbar-toggler collapsed navbar-toggler-right\">\n            <user-icon *ngIf=\" app.logged \" routerLink=\"/profile\"></user-icon>\n            <span class=\"fa-stack fa-lg\" (click)=\" showMenu = !showMenu \">\n                <i class=\"fa fa-circle fa-stack-2x\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-bars fa-stack-1x\" aria-hidden=\"true\"></i>\n            </span>\n        </div>\n\n        <div class=\"logo\" routerLink=\"/\">\n            <span class=\"fa-stack fa-lg\">\n                <i class=\"fa fa-circle fa-stack-2x\" aria-hidden=\"true\"></i>\n                <i class=\"fa fa-home fa-stack-1x\" aria-hidden=\"true\"></i>\n            </span>\n            ABC\n        </div>\n\n\n        <div class=\"navbar-collapse collapse\" [class.active]=\"showMenu\">\n            <ul class=\"navbar-nav mr-auto pointers\">\n                <li class=\"nav-item pr-3\">\n                    <a href=\"https://github.com/thruthesky/abcframework\" target=\"_blank\">Docs</a>\n                </li>\n                <li class=\"nav-item pr-3\">\n                    <a href=\"https://github.com/thruthesky/abcframework/issues?q=is%3Aopen+is%3Aissue+label%3A%22help+wanted%22\" target=\"_blank\">Q&amp;A Forum</a>\n                </li>\n                <li class=\"nav-item pr-3\">\n                    <a href=\"https://github.com/thruthesky/abcframework/wiki/Quick-Start\" target=\"_blank\">Quick Start</a>\n                </li>\n            </ul>\n            <ul class=\"navbar-nav pointers\">\n\n                <li *ngIf=\" !app.logged \" class=\"nav-item pr-3\" routerLink=\"/login\">\n                    Login\n                </li>\n                \n                <li *ngIf=\" !app.logged \" class=\"nav-item mr-3\" routerLink=\"/register\">\n                    Register\n                </li>\n\n                <li *ngIf=\"app.logged\" class=\"user-icon mr-3\" routerLink=\"/profile\" title=\"{{ app.user.displayName }}\">\n                    <user-icon></user-icon>\n                </li>\n\n                <li *ngIf=\" app.logged \" class=\"mr-md-3 mr-lg-0\" (click)=\" onClickLogout() \">\n                    <div class=\"text\">Logout</div>\n                </li>\n\n            </ul>\n        </div>\n\n    </div>\n    \n</nav>"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "            <span class=\"user-icon mr-3\" routerLink=\"/profile\" title=\"{{ app.user.displayName }}\">\n                <span class=\"fa-stack\">\n                        <ng-container *ngIf=\" app.user.photoURL \">\n                            <i class=\"fa fa-circle fa-stack-2x\" aria-hidden=\"true\"></i>\n                            <img class=\"fa fa-stack-1x\" style=\"width: 34px; border-radius: 50%;\" src=\"{{ app.user.photoURL }}\">\n                        </ng-container>\n                        <ng-container  *ngIf=\" ! app.user.photoURL \">\n                            <i class=\"fa fa-circle fa-stack-2x\" aria-hidden=\"true\"></i>\n                            <i class=\"fa fa-user fa-stack-1x \" aria-hidden=\"true\"></i>\n                        </ng-container>\n                    </span>\n            </span>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<section class=\"page\">\n\n    <div class=\"jumbotron\">\n        <h1 class=\"title display-3\">ABC Framework</h1>\n        <p class=\"lead\">\n            ABC framework is made of most popular open sources like Angular, Bootstrap(with ng-bootstrap), Font Awesome and much more.\n            ABC framework adopted Firebase as its default backend and developers can benefit cloud service of it.\n        </p>\n        <p>\n            <button class=\"btn btn-success\" routerLink=\"/\">Go to home</button>\n        </p>\n    </div>\n\n    Office web sites : www.abcframework.com<br>\n    \n    \n</section>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "\n  <header-component></header-component>\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"jumbotron\">\n  <h1 class=\"title display-3\">Hi, I am ABC!</h1>\n  <p class=\"lead\">\n    I can help you making apps as easy as A! B! C! Just follow the steps and you are there already! And we welcome supporters\n    in anyway who can help like tutorial documentating, Q&amp;A Forum management and business partners.\n  </p>\n  <p>\n    <button class=\"btn btn-success\" routerLink=\"/about\">Read more</button>\n  </p>\n</div>\n\n<p>\n  Abc framework was born early 2017 and it is very new at this time. Please visit www.abcframework.com and leave your comments.\n</p>\n\n\n\n<p *ngIf=\"app.device\">\n  Hey, you are on {{ app.device.platform }}.\n</p>\n\n\n<p>Official Website : www.abcframework.com</p>\n\n\n<h2>Features of the app</h2>\n<ul>\n  <li>\n    For design, Bootstrap + ng-bootstrap, Font Awesome, Enhancer Abc component may be separated in another npm module.\n  </li>\n  <li>\n    For backend, Firebase + Angularfire 2\n  </li>\n  <li>\n    User Authentication Basic Authentication with Google Login, Facebook Login, etc. ( based on firebase )\n  </li>\n</ul>\n\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n\n\n\n<div class=\"alert alert-info\" role=\"info\">\n    <h2>Login</h2>\n    <div>You can login with one of your favorite social sites.</div>\n    <div>If you want you can register the site.</div>\n</div>\n<div *ngIf=\"error\" class=\"alert alert-warning\" role=\"alert\">\n    <strong>{{ error }}</strong>\n</div>\n\n\n\n\n<div class=\"logins pointers\">\n\n    <div (click)=\"onClickLoginWithGoogle()\">\n        <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-google fa-stack-1x fa-inverse\" aria-hidden=\"true\"></i>\n        </span> Login with Google\n    </div>\n\n\n    <div (click)=\"onClickLoginWithFacebook()\">\n        <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\" aria-hidden=\"true\"></i>\n            <i class=\"fa fa-facebook fa-stack-1x fa-inverse\" aria-hidden=\"true\"></i>\n        </span> Login with Facebook\n    </div>\n</div>"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<h1>Profile Page</h1>\n\n    \n    <div class=\"alert alert-warning\" role=\"alert\">\n        <strong>Under construction</strong>\n    </div>\n\n\n<p>\n    Email/Password login users only update user information.<br>\n    Social login users cannot update user information.<br>\n    TODO: profile photo upload.\n</p>"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<header-component></header-component>\n<div class=\"alert alert-info\" role=\"alert\">\n    <strong>ABC framework registration</strong>\n</div>\n\nYou can login with social sites like facebook, twitter and much more.\n\n<div class=\"container\">\n    <form (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group row\">\n            <label for=\"emailBox\" class=\"col-sm-2 col-form-label\">Email</label>\n            <div class=\"col-sm-10\">\n                <input name=\"email\" [(ngModel)]=\"form.email\" class=\"form-control w-100\" id=\"emailBox\" type=\"email\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"passwordBox\" class=\"col-sm-2 col-form-label\">Password</label>\n            <div class=\"col-sm-10\">\n                <input name=\"password\" [(ngModel)]=\"form.password\" class=\"form-control w-100\" id=\"passwordBox\" type=\"password\">\n            </div>\n        </div>\n        <div class=\"form-group row\">\n            <label for=\"nameBox\" class=\"col-sm-2 col-form-label\">Display Name</label>\n            <div class=\"col-sm-10\">\n                <input name=\"name\" [(ngModel)]=\"form.displayName\" class=\"form-control w-100\" id=\"nameBox\" type=\"text\">\n            </div>\n        </div>\n        \n        \n\n        <div *ngIf=\"error\" class=\"form-group row\">\n            <div class=\"col-12\">\n                <div class=\"alert alert-warning\" role=\"alert\">\n                    {{ error }}\n                </div>\n            </div>\n        </div>\n\n        <div class=\"form-group row\">\n            <div class=\"col-12\">\n                <button type=\"submit\" class=\"btn btn-primary w-100\">REGISTER</button>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(108);


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDOKjHZI_RiSISkFDyRSe1bWkdtCXBgWRk',
        authDomain: 'abcframework-2b4b1.firebaseapp.com',
        databaseURL: 'https://abcframework-2b4b1.firebaseio.com',
        projectId: 'abcframework-2b4b1',
        storageBucket: 'abcframework-2b4b1.appspot.com',
        messagingSenderId: '1080338804812'
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[231]);
//# sourceMappingURL=main.bundle.js.map