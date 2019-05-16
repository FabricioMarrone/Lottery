webpackJsonp([0],{

/***/ 159:
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
webpackEmptyAsyncContext.id = 159;

/***/ }),

/***/ 204:
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
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
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
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\LocalRepos\FabricioMarrone\Lottery-FrontEnd\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lottery - Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"C:\LocalRepos\FabricioMarrone\Lottery-FrontEnd\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\LocalRepos\FabricioMarrone\Lottery-FrontEnd\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lottery - List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\LocalRepos\FabricioMarrone\Lottery-FrontEnd\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComp = /** @class */ (function () {
    function RegistrationComp(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.step = 1;
        var nextStep = navParams.get('nextStep');
        if (nextStep) {
            this.step = nextStep;
        }
    }
    RegistrationComp_1 = RegistrationComp;
    RegistrationComp.prototype.generateCode = function (event) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(RegistrationComp_1, {
            nextStep: this.step + 1
        });
    };
    RegistrationComp = RegistrationComp_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\LocalRepos\FabricioMarrone\Lottery-FrontEnd\src\pages\registration\registration.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Lottery - Registration</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <h3>Lottery registration</h3>\n\n  \n\n    <div *ngIf="step == 1">\n\n        <button ion-button secondary (click)="generateCode($event)">Generate referred code</button>\n\n    </div>\n\n    \n\n    <div *ngIf="step == 2">\n\n        <p>Code generated! Share it!</p>\n\n    </div>\n\n  </ion-content>'/*ion-inline-end:"C:\LocalRepos\FabricioMarrone\Lottery-FrontEnd\src\pages\registration\registration.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegistrationComp);
    return RegistrationComp;
    var RegistrationComp_1;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_data_api_test__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_data_api_security__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_native_local_notifications__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestComp = /** @class */ (function () {
    function TestComp(_apiTest, _apiSecurity, navCtrl, navParams, localNotifications) {
        this._apiTest = _apiTest;
        this._apiSecurity = _apiSecurity;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.localNotifications = localNotifications;
        this.showData = null;
    }
    TestComp.prototype.readOpenData = function (event) {
        var _this = this;
        this._apiTest.GetApiBaseData("api/test/ReadOpenData").subscribe(function (r) {
            if (!r.criticalError) {
                _this.showData = r.message;
            }
        });
    };
    TestComp.prototype.ReadOpenEntityData = function (event) {
        var _this = this;
        this._apiTest.GetApiData(__WEBPACK_IMPORTED_MODULE_2__app_data_api_test__["b" /* TestEntity */], "api/test/ReadOpenEntityData").subscribe(function (r) {
            if (!r.criticalError && r.result)
                _this.showData = r.data.Id + " - " + r.data.Name;
            else
                _this.showData = r.message;
        });
    };
    TestComp.prototype.ReadOpenListEntityData = function (event) {
        var _this = this;
        this._apiTest.GetApiData(__WEBPACK_IMPORTED_MODULE_2__app_data_api_test__["b" /* TestEntity */], "api/test/ReadOpenListEntityData").subscribe(function (r) {
            if (!r.criticalError && r.result)
                _this.showData = r.data[0].Id + " - " + r.data[0].Name + " || " + r.data[1].Id + " - " + r.data[1].Name;
            else
                _this.showData = r.message;
        });
    };
    TestComp.prototype.readData = function (event) {
        var _this = this;
        this._apiTest.GetApiBaseData("api/test/ReadData", this.userToken ? this.userToken.access_token : null).subscribe(function (r) {
            if (!r.criticalError) {
                _this.showData = r.message;
            }
        });
    };
    TestComp.prototype.getCurrentUser = function (event) {
        var _this = this;
        this._apiSecurity.GetCurrentUser(this.userToken ? this.userToken.access_token : null).subscribe(function (r) {
            if (r.result && r.data) {
                _this.showData = "UserId: " + r.data.UserId + " - Name: " + r.data.Name + " - Email: " + r.data.Email + " - Confirmed: " + r.data.EmailConfirmed;
            }
            else if (!r.criticalError) {
                _this.showData = r.message;
            }
        });
    };
    TestComp.prototype.loginUser = function (event) {
        var _this = this;
        var loginCredentials = new __WEBPACK_IMPORTED_MODULE_3__app_data_api_security__["b" /* LoginCredentials */]();
        loginCredentials.username = "pepe";
        loginCredentials.password = "Usuario.00";
        this._apiSecurity.Login(loginCredentials).subscribe(function (r) {
            if (r) {
                _this.showData = "User LOGED IN. Token: " + r.access_token;
                _this.userToken = r;
            }
        });
    };
    TestComp.prototype.localNotificationTest = function () {
        var _this = this;
        this.localNotifications.hasPermission().then(function (p) {
            if (p) {
                _this.localNotifications.schedule({
                    id: 1,
                    text: 'Single ILocalNotification',
                });
            }
            else {
                _this.localNotifications.requestPermission();
            }
        });
    };
    TestComp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\LocalRepos\FabricioMarrone\Lottery-FrontEnd\src\pages\test\test.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Lottery - Test</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n    <h3>Lottery TEST</h3>\n\n  \n\n    <button ion-button secondary (click)="readOpenData($event)">Read Open Data</button>\n\n    <button ion-button secondary (click)="ReadOpenEntityData($event)">Read OpenEntity Data</button>\n\n    <button ion-button secondary (click)="ReadOpenListEntityData($event)">Read OpenListEntity Data</button>\n\n\n\n\n\n    <button ion-button secondary (click)="readData($event)">Read Protected Data</button>\n\n    <button ion-button secondary (click)="getCurrentUser($event)">Get current user</button>\n\n    <button ion-button secondary (click)="loginUser($event)">{{userToken? \'LOGED\' : \'LOGIN\'}}</button>\n\n    \n\n    <button ion-button secondary (click)="localNotificationTest($event)">Local notification</button>\n\n    \n\n\n\n    <div *ngIf="showData">\n\n        {{showData}}\n\n    </div>\n\n  </ion-content>'/*ion-inline-end:"C:\LocalRepos\FabricioMarrone\Lottery-FrontEnd\src\pages\test\test.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_data_api_test__["a" /* ApiTest */],
            __WEBPACK_IMPORTED_MODULE_3__app_data_api_security__["a" /* ApiSecurity */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__node_modules_ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], TestComp);
    return TestComp;
}());

//# sourceMappingURL=test.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TestEntity; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_base__ = __webpack_require__(254);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ApiTest = /** @class */ (function (_super) {
    __extends(ApiTest, _super);
    function ApiTest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApiTest = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["A" /* Injectable */])()
    ], ApiTest);
    return ApiTest;
}(__WEBPACK_IMPORTED_MODULE_1__api_base__["a" /* ApiBase */]));

var TestEntity = /** @class */ (function () {
    function TestEntity(json) {
        json = json || {};
        this.Id = json.Id || 0;
        this.Name = json.Name || "";
    }
    return TestEntity;
}());

//# sourceMappingURL=api.test.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiBase; });
/* unused harmony export ApiBaseResult */
/* unused harmony export ApiDataResult */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(40);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiBase = /** @class */ (function () {
    function ApiBase(_http, _alertCtrl) {
        this._http = _http;
        this._alertCtrl = _alertCtrl;
    }
    ApiBase_1 = ApiBase;
    //Gets a ApiBaseResult from server
    ApiBase.prototype.GetApiBaseData = function (url, token) {
        var _this = this;
        var options = this.CreateRequestOptionsArgsForGet(url, token);
        return this._http
            .get(options.url, options)
            .map(function (response) { return _this.ExtractApiBaseResult(response); })
            .catch(function (response) { return _this.ManageApiError(response); })
            .share();
    };
    //Post data and gets a ApiBaseResult in return
    ApiBase.prototype.PostApiBaseData = function (url, data) {
        var _this = this;
        var options = this.CreateRequestOptionsArgsForGet(url);
        var dataJson = JSON.stringify(data);
        return this._http
            .post(options.url, dataJson, options)
            .map(function (response) { return _this.ExtractApiBaseResult(response); })
            .catch(function (response) { return _this.ManageApiError(response); })
            .share();
    };
    //Gets a json without constructor from server
    ApiBase.prototype.Get = function (url) {
        var _this = this;
        var options = this.CreateRequestOptionsArgsForGet(url);
        return this._http
            .get(options.url, options)
            .map(function (response) { return _this.ExtractJsonResult(response); })
            .catch(function (response) { return _this.ManageJsonError(response); })
            .share();
    };
    //Post data and gets a json without constructor in return
    ApiBase.prototype.Post = function (url, data) {
        var _this = this;
        var options = this.CreateRequestOptionsArgsForGet(url);
        var dataJson = JSON.stringify(data);
        return this._http
            .post(options.url, dataJson, options)
            .map(function (response) { return _this.ExtractJsonResult(response); })
            .catch(function (response) { return _this.ManageJsonError(response); })
            .share();
    };
    //Gets ApiDataResult from server. Model must have a constructor.
    ApiBase.prototype.GetApiData = function (model, url, token) {
        var _this = this;
        var options = this.CreateRequestOptionsArgsForGet(url, token);
        return this._http
            .get(options.url, options)
            .map(function (response) { return _this.ExtractApiDataResult(model, response); })
            .catch(function (response) { return _this.ManageApiDataError(response); })
            .share();
    };
    //Post data and gets a ApiDataResult in return. Model must have a constructor.
    ApiBase.prototype.PostApiData = function (model, url, data) {
        var _this = this;
        var options = this.CreateRequestOptionsArgsForGet(url);
        var dataJson = JSON.stringify(data);
        return this._http
            .post(options.url, dataJson, options)
            .map(function (response) { return _this.ExtractApiDataResult(model, response); })
            .catch(function (response) { return _this.ManageApiDataError(response); })
            .share();
    };
    ApiBase.prototype.ExtractJsonResult = function (response) {
        if (response && response.text()) {
            var responseJson = response.json();
            return responseJson;
        }
        return null;
    };
    ApiBase.prototype.ExtractApiBaseResult = function (response) {
        if (response && response.text()) {
            var responseJson = response.json();
            return new ApiBaseResult(responseJson);
        }
        return new ApiBaseResult();
    };
    ApiBase.prototype.ExtractApiDataResult = function (model, response) {
        if (response && response.text()) {
            var responseJson = response.json();
            return new ApiDataResult(responseJson, model);
        }
        return new ApiDataResult();
    };
    ApiBase.prototype.ManageApiError = function (response) {
        var result = new ApiBaseResult();
        if (response && response.status) {
            result.result = false;
            result.criticalError = true;
            result.message = response.status + " - " + response.statusText;
            var alert_1 = this._alertCtrl.create({
                title: 'Error',
                subTitle: response.status + " - " + response.statusText,
                buttons: ['Ok']
            });
            alert_1.present();
        }
        return ApiBase_1.CreateObservable(result);
    };
    ApiBase.prototype.ManageJsonError = function (response) {
        if (response && response.status) {
            var alert_2 = this._alertCtrl.create({
                title: 'Error',
                subTitle: response.status + " - " + response.statusText,
                buttons: ['Ok']
            });
            alert_2.present();
        }
        return ApiBase_1.CreateObservable(null);
    };
    ApiBase.prototype.ManageApiDataError = function (response) {
        var result = new ApiDataResult();
        if (response && response.status) {
            result.result = false;
            result.criticalError = true;
            result.message = response.status + " - " + response.statusText;
            var alert_3 = this._alertCtrl.create({
                title: 'Error',
                subTitle: response.status + " - " + response.statusText,
                buttons: ['Ok']
            });
            alert_3.present();
        }
        return ApiBase_1.CreateObservable(result);
    };
    ApiBase.prototype.CreateRequestOptionsArgsForGet = function (url, token) {
        var options = {
            url: ApiBase_1.UrlBase + url,
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({}),
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Json
        };
        if (token) {
            options.headers.append("Authorization", "Bearer " + token);
        }
        return options;
    };
    ApiBase.prototype.CreateRequestOptionsArgsForPost = function (url, token) {
        var options = {
            url: ApiBase_1.UrlBase + url,
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({}),
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Json
        };
        if (token) {
            options.headers.append("Authorization", "Bearer " + token);
        }
        return options;
    };
    ApiBase.CreateObservable = function (valor) {
        return new __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_Observable__["Observable"](function (observer) {
            observer.next(valor);
            observer.complete();
        });
    };
    ApiBase.UrlBase = "http://localhost:60966/";
    ApiBase = ApiBase_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], ApiBase);
    return ApiBase;
    var ApiBase_1;
}());

var ApiBaseResult = /** @class */ (function () {
    function ApiBaseResult(json) {
        json = json || {};
        this.result = json.Result || false;
        this.criticalError = json.CriticalError || false;
        this.message = json.Message || "";
    }
    return ApiBaseResult;
}());

var ApiDataResult = /** @class */ (function (_super) {
    __extends(ApiDataResult, _super);
    function ApiDataResult(json, model) {
        var _this = this;
        json = json || {};
        _this = _super.call(this, json) || this;
        if (json.Data) {
            if (model) {
                //Call class constructor
                if (json.Data instanceof Array) {
                    _this.data = json.Data.map(function (item) { return new model(item); });
                }
                else {
                    _this.data = new model(json.Data);
                }
            }
            else {
                //Simply cast object to class
                if (json.Data instanceof Array) {
                    _this.data = json.Data.map(function (item) { return item; });
                }
                else {
                    _this.data = json.Data;
                }
            }
        }
        return _this;
    }
    return ApiDataResult;
}(ApiBaseResult));

//sfsdfsd 
//# sourceMappingURL=api.base.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiSecurity; });
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginCredentials; });
/* unused harmony export SecurityToken */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_base__ = __webpack_require__(254);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApiSecurity = /** @class */ (function (_super) {
    __extends(ApiSecurity, _super);
    function ApiSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApiSecurity.prototype.GetCurrentUser = function (token) {
        return this.GetApiData(User, "api/security/currentUser", token);
    };
    ApiSecurity.prototype.Login = function (credentials) {
        var _this = this;
        var options = {
            url: __WEBPACK_IMPORTED_MODULE_2__api_base__["a" /* ApiBase */].UrlBase + "api/security/token",
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            withCredentials: false,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                //"Cache-Control": "no-cache",
                //"Pragma": "no-cache",
                //"Expires": "Sat, 01 Jan 2000 00:00:00 GMT",
                "Content-Type": "application/x-www-form-urlencoded",
            }),
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ResponseContentType */].Json
        };
        return this._http
            .post(options.url, "userName=" + credentials.username +
            "&password=" + credentials.password +
            "&grant_type=password", options)
            .map(function (response) { return _this.ExtractJsonResult(response); })
            .catch(function (response) { return _this.ManageJsonError(response); })
            .share();
    };
    ApiSecurity = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_angular_core__["A" /* Injectable */])()
    ], ApiSecurity);
    return ApiSecurity;
}(__WEBPACK_IMPORTED_MODULE_2__api_base__["a" /* ApiBase */]));

var User = /** @class */ (function () {
    function User(json) {
        json = json || {};
        this.UserId = json.UserId || 0;
        this.Name = json.Name || "";
        this.Email = json.Email || "";
        this.EmailConfirmed = json.EmailConfirmed || false;
    }
    return User;
}());

var LoginCredentials = /** @class */ (function () {
    function LoginCredentials() {
    }
    return LoginCredentials;
}());

var SecurityToken = /** @class */ (function () {
    function SecurityToken() {
    }
    return SecurityToken;
}());

//# sourceMappingURL=api.security.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_registration_registration__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_test_test__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_api_module__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_local_notifications__ = __webpack_require__(347);
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
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_registration_registration__["a" /* RegistrationComp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_test_test__["a" /* TestComp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__data_api_module__["a" /* DataApiModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_registration_registration__["a" /* RegistrationComp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_test_test__["a" /* TestComp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_registration_registration__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_test_test__ = __webpack_require__(252);
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
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Registration', component: __WEBPACK_IMPORTED_MODULE_6__pages_registration_registration__["a" /* RegistrationComp */] },
            { title: 'Test', component: __WEBPACK_IMPORTED_MODULE_7__pages_test_test__["a" /* TestComp */] }
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\LocalRepos\FabricioMarrone\Lottery-FrontEnd\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Lottery</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\LocalRepos\FabricioMarrone\Lottery-FrontEnd\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_test__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_security__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataApiModule = /** @class */ (function () {
    function DataApiModule() {
    }
    DataApiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [],
            imports: [],
            exports: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__api_test__["a" /* ApiTest */],
                __WEBPACK_IMPORTED_MODULE_2__api_security__["a" /* ApiSecurity */]
            ]
        })
    ], DataApiModule);
    return DataApiModule;
}());

//# sourceMappingURL=api.module.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map