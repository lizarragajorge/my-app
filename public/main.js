(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions.component.ts":
/*!**************************************!*\
  !*** ./src/app/actions.component.ts ***!
  \**************************************/
/*! exports provided: ActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsComponent", function() { return ActionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
        this.selectAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ActionsComponent.prototype.onSelectAction = function (a) {
        this.selectAction.emit(a);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ActionsComponent.prototype, "selectAction", void 0);
    ActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'actions-page',
            template: __webpack_require__(/*! ./templates/actions.component.html */ "./src/app/templates/actions.component.html"),
            styles: [__webpack_require__(/*! ./styles/app.component.css */ "./src/app/styles/app.component.css")]
        })
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.page = "home";
        this.getPage = function () {
            return this.page;
        };
    }
    AppComponent.prototype.setPage = function (pageState) {
        this.page = pageState;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./templates/app.component.html */ "./src/app/templates/app.component.html"),
            styles: [__webpack_require__(/*! ./styles/app.component.css */ "./src/app/styles/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _requests_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./requests.component */ "./src/app/requests.component.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile.component.ts");
/* harmony import */ var _actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions.component */ "./src/app/actions.component.ts");
/* harmony import */ var _ask_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ask.component */ "./src/app/ask.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _requests_component__WEBPACK_IMPORTED_MODULE_7__["RequestsComponent"],
                _profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _actions_component__WEBPACK_IMPORTED_MODULE_9__["ActionsComponent"],
                _ask_component__WEBPACK_IMPORTED_MODULE_10__["AskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ask.component.ts":
/*!**********************************!*\
  !*** ./src/app/ask.component.ts ***!
  \**********************************/
/*! exports provided: AskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskComponent", function() { return AskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AskComponent = /** @class */ (function () {
    function AskComponent() {
    }
    AskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ask-page',
            template: __webpack_require__(/*! ./templates/ask.component.html */ "./src/app/templates/ask.component.html"),
            styles: [__webpack_require__(/*! ./styles/app.component.css */ "./src/app/styles/app.component.css")]
        })
    ], AskComponent);
    return AskComponent;
}());



/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(angularFire) {
        this.angularFire = angularFire;
        this.actionPage = false;
        this.selectPerson = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.person = null;
        this.firebase = this.angularFire.list('/people');
    }
    HomeComponent.prototype.getActivity = function () {
        return this.angularFire.list('/people').valueChanges();
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getActivity().subscribe(function (res) {
            _this.people = res;
        });
    };
    HomeComponent.prototype.onSelectPerson = function (p) {
        this.selectPerson.emit(p);
    };
    HomeComponent.prototype.setActionPage = function () {
        console.log("calling action page");
        this.actionPage = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HomeComponent.prototype, "selectPerson", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-page',
            template: __webpack_require__(/*! ./templates/home.component.html */ "./src/app/templates/home.component.html"),
            styles: [__webpack_require__(/*! ./styles/app.component.css */ "./src/app/styles/app.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/Person.ts":
/*!**********************************!*\
  !*** ./src/app/models/Person.ts ***!
  \**********************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/models/Request.ts":
/*!***********************************!*\
  !*** ./src/app/models/Request.ts ***!
  \***********************************/
/*! exports provided: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
var Request = /** @class */ (function () {
    function Request(firstName, lastName, message) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.message = message;
    }
    return Request;
}());



/***/ }),

/***/ "./src/app/profile.component.ts":
/*!**************************************!*\
  !*** ./src/app/profile.component.ts ***!
  \**************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Person */ "./src/app/models/Person.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(angularFire) {
        this.angularFire = angularFire;
        this.title = 'app';
        this.activity = new _models_Person__WEBPACK_IMPORTED_MODULE_1__["Person"]("Brandon", "Buchanan");
        this.firebase = this.angularFire.list('/activity');
    }
    ProfileComponent.prototype.getActivity = function () {
        return this.angularFire.list('/activity').valueChanges();
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getActivity().subscribe(function (res) {
            _this.activities = res;
        });
    };
    ProfileComponent.prototype.makeActivityActive = function (p) {
        if (p.activity.isActive) {
            p.activity.isActive = false;
        }
        else {
            p.activity.isActive = true;
        }
    };
    ProfileComponent.prototype.addActivity = function () {
        console.log(this.activity);
        if (this.activity) {
            this.firebase.push({
                activity: this.activity,
                createdDate: (new Date()).getTime()
            });
        }
        else {
            alert('Enter task');
        }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-page',
            template: __webpack_require__(/*! ./templates/profile.component.html */ "./src/app/templates/profile.component.html"),
            styles: [__webpack_require__(/*! ./styles/app.component.css */ "./src/app/styles/app.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/requests.component.ts":
/*!***************************************!*\
  !*** ./src/app/requests.component.ts ***!
  \***************************************/
/*! exports provided: RequestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsComponent", function() { return RequestsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Request */ "./src/app/models/Request.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestsComponent = /** @class */ (function () {
    function RequestsComponent(angularFire) {
        this.angularFire = angularFire;
        this.recievedRequests = [
            new _models_Request__WEBPACK_IMPORTED_MODULE_1__["Request"]("Brandon", "Buchanan", "Golf"),
            new _models_Request__WEBPACK_IMPORTED_MODULE_1__["Request"]("Jorge", "Garcia", "Rocket League"),
            new _models_Request__WEBPACK_IMPORTED_MODULE_1__["Request"]("Drake", "Loud", "Coffee"),
            new _models_Request__WEBPACK_IMPORTED_MODULE_1__["Request"]("Pierre", "Pierre", "Crossaint"),
            new _models_Request__WEBPACK_IMPORTED_MODULE_1__["Request"]("Brandon", "Buchanan", "Golf"),
            new _models_Request__WEBPACK_IMPORTED_MODULE_1__["Request"]("Jorge", "Garcia", "Rocket League"),
            new _models_Request__WEBPACK_IMPORTED_MODULE_1__["Request"]("Drake", "Loud", "Coffee"),
            new _models_Request__WEBPACK_IMPORTED_MODULE_1__["Request"]("Pierre", "Pierre", "Crossaint")
        ];
        this.request = null;
        this.firebase = this.angularFire.list('/requests');
    }
    RequestsComponent.prototype.getRequests = function () {
        return this.angularFire.list('/requests').valueChanges();
    };
    RequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRequests().subscribe(function (res) {
            console.log(res);
            _this.requests = res;
        });
        console.log(this.requests);
    };
    RequestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'requests-page',
            template: __webpack_require__(/*! ./templates/requests.component.html */ "./src/app/templates/requests.component.html"),
            styles: [__webpack_require__(/*! ./styles/app.component.css */ "./src/app/styles/app.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], RequestsComponent);
    return RequestsComponent;
}());



/***/ }),

/***/ "./src/app/styles/app.component.css":
/*!******************************************!*\
  !*** ./src/app/styles/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.action-block {\n    text-align: center;\n    padding-top: 5em;\n    padding-bottom: 5em;\n    border-color: black;\n    border-width: 1px;\n    border-radius: 10px;\n    border-style: solid;\n    margin-bottom: 1em;\n    margin-top: 1em;\n}\n\n.action-block:hover {\n    background-color: #eeeeee;\n}\n\na.confirm-btn {\n    width: 100%;\n    margin: 20px auto;\n    color: #ffffff;\n}\n\n#nav_bottom {\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    left: 0;\n\n}\n\n.list-people {\n    margin-top: 2em;\n}\n\n.list-activities {\n    max-height: 17em;\n    overflow: scroll;\n    margin-top: 1em;\n}\n\n.navbar-brand {\n    width: 100%;\n    text-align: center;\n    font-family: 'Righteous', cursive;\n    letter-spacing: 2px;\n    font-size: 1.7em;\n}\n\n.navbar-light .navbar-brand {\n    margin: 0 auto;\n}\n\nh1 {\n    margin-top: 1em;\n    font-family: 'Raleway', sans-serif;\n    text-align: center;\n}\n\nh3 {\n    font-family: 'Raleway', sans-serif;\n    font-weight: bold;\n    text-align: center;\n    letter-spacing: 1px;\n    color: #007bff;\n    font-size: 20px;\n}\n\n.profile-btn {\n    display: block;\n    width: 100%;\n    margin: 2em auto;\n    font-size: 1.2em;\n}\n\n.form-check {\n    font-size: 1.5em;\n    text-align: center;\n}\n\n.requests-h1 {\n    margin-bottom: 1em;\n}\n\n.form-check > input {\n    display: inline-block;\n    height: 1.5em;\n}\n\n.splash {\n    position: fixed;\n    top:0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    color: #fff;\n    background-color: #007bff;\n    text-align: center;\n    font-size: 3em;\n    font-family: 'Righteous', cursive;\n    letter-spacing: 2px;\n    padding-top: 7em;\n}\n\n.img-person {\n    border-radius: 50%;\n}\n\n#people {\n    max-height: 25em;\n    overflow: scroll;\n}\n\n.people-item {\n    min-height: 120px;\n}\n\n.people-name {\n    font-weight: 900;\n    font-size: 1em;\n    display: block;\n}\n\n.people-office {\n    font-size: .9em;\n    display: block;\n    font-weight: 300;\n    font-style: italic;\n}\n\n.request-message{\n    text-align: left;\n    margin-left: 20px;\n}\n\n.activity-item {\n    font-size: 1.5em;\n}\n\n.activity-item > i {\n    margin-right: 20px;\n    width: 20px;\n}\n\n.request-message-name{\n    font-weight: bold;\n    font-size: 24px;\n}\n\n.request-message-activity{\n    margin-left: 18px;\n    font-style: italic;\n    font-size: 18px;\n}\n\n.request-message-btn{\n    width: 80px;\n    margin: 5px 5px;\n}\n\n@media only screen and (min-width: 768px) {\n    .list-activities {\n        max-height: 30em;\n        overflow: scroll;\n        margin-top: 1em;\n    }\n\n    .nav-bottom {\n        top:70;\n        left:0;\n        right: 0;\n    }\n\n    #people { \n        max-height: 30em;\n    }\n\n    .col-lg-4 {\n        padding: none;\n    }\n}"

/***/ }),

/***/ "./src/app/templates/actions.component.html":
/*!**************************************************!*\
  !*** ./src/app/templates/actions.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <h1>Brandon Buchanan</h1>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-6\">\n        <a (click)=\"onSelectAction('ask')\">\n            <div class=\"action-block\">\n                <i class=\"fas fa-utensils fa-3x\"></i>\n            </div>\n        </a>\n    </div>\n    <div class=\"col-6\">\n        <a (click)=\"onSelectAction('ask')\">\n            <div class=\"action-block\">\n                <i class=\"fas fa-bicycle fa-3x\"></i>\n            </div>\n        </a>\n    </div>\n    <div class=\"col-6\">\n        <a (click)=\"onSelectAction('ask')\">\n            <div class=\"action-block\">\n                <i class=\"fas fa-chess-rook fa-3x\"></i>\n            </div>\n        </a>\n    </div>\n    <div class=\"col-6\">\n        <a (click)=\"onSelectAction('ask')\">\n            <div class=\"action-block\">\n                <i class=\"fas fa-basketball-ball fa-3x\"></i>\n            </div>\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/templates/app.component.html":
/*!**********************************************!*\
  !*** ./src/app/templates/app.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a id=\"center_brand\" class=\"navbar-brand center\" href=\"index.html\">SONR\n    <i class=\"fab fa-servicestack\"></i>\n  </a>\n</nav>\n<div class=\"container-fluid\">\n<div class=\"row\">\n  <div class=\"offset-lg-4 col-lg-4 col-md-6 offset-md-3 col-xs-12\">\n  <requests-page *ngIf=\"page == 'requests'\"></requests-page> \n  <home-page *ngIf=\"page == 'home'\" (selectPerson)=\"setPage($event)\"> </home-page>\n  <profile-page *ngIf=\"page == 'profile'\"> </profile-page>\n  <actions-page *ngIf=\"page == 'actions'\" (selectAction)=\"setPage($event)\"> </actions-page>\n  <ask-page *ngIf=\"page == 'ask'\" > </ask-page>\n</div>\n</div>\n\n  <ul id=\"nav_bottom\" class=\"nav nav-pills nav-fill\">\n    <li class=\"nav-item\">\n      <a (click)=\"setPage('profile')\" class=\"nav-link {{page == 'profile' ? 'active' : ''}}\">\n        <i class=\"fas fa-user fa-lg\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a (click)=\"setPage('home')\"  class=\"nav-link {{page == 'home' ? 'active' : ''}}\">\n        <i class=\"fas fa-home fa-lg\"></i>\n      </a>\n    </li>\n    <li class=\"nav-item\">\n      <a (click)=\"setPage('requests')\" class=\"nav-link {{page == 'requests' ? 'active' : ''}}\">\n        <i class=\"fas fa-envelope fa-lg\"></i>\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/templates/ask.component.html":
/*!**********************************************!*\
  !*** ./src/app/templates/ask.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <h1>Do you want to send Brandon a request for food?</h1>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col\">\n        <a class=\"btn btn-success confirm-btn\">\n            <i class=\"fas fa-check fa-3x\"></i> Yes!\n        </a>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col\">\n        <a class=\"btn btn-danger confirm-btn\">\n            <i class=\"fas fa-times fa-3x\"></i> No...\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/templates/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/templates/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ask-page *ngIf=\"page == 'ask'\" (selectAction)=\"setActionPage($event)\"> </ask-page>\n<div class=\"row\">\n    <div class=\"col\">\n        <h1>Fins you should meet.</h1>\n    </div>\n</div>\n\n<ul id=\"people\" class=\"list-group list-people\">\n    <li (click)=\"onSelectPerson('actions')\" (selectAction)=\"changeActionPage($event)\" *ngFor=\"let p of people\" class=\"people-item list-group-item d-flex justify-content-between align-items-center\">\n        <div class=\"col-3\">\n            <img class=\"img-fluid img-person\" src=\"https://loremflickr.com/75/75/{{ p.activity.lastName }}\" />\n        </div>\n        <div class=\"col-9\">\n            <span class=\"people-name\">{{ p.activity.firstName + \" \" + p.activity.lastName}}</span>\n            <span class=\"people-office\">{{ p.activity.office }}</span>\n        </div>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/templates/profile.component.html":
/*!**************************************************!*\
  !*** ./src/app/templates/profile.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"row\">\n            <div class=\"col\">\n                <h1>Change your profile.</h1>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <hr />\n                <h3>Activities</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <ul id=\"activity_list\" class=\"list-group list-activities\">\n                    <li (click)=\"makeActivityActive(activity)\" *ngFor=\"let activity of activities\" class=\"list-group-item activity-item {{ activity.activity.isActive ? 'active' : '' }}\"> <i class=\"fas fa-{{ activity.activity.icon }}\"></i>{{ activity.activity.name }}</li>\n                </ul>\n            </div>\n\n        </div>\n        \n        <div class=\"row\">\n\n            <div class=\"col\">\n                <div class=\"profile-btn btn btn-success\">Save</div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                <form>\n                    <div class=\"form-check\">\n                        <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                        <label class=\"form-check-label\" for=\"exampleCheck1\">Opt in?</label>\n                    </div>\n                </form>\n            </div>\n        </div>"

/***/ }),

/***/ "./src/app/templates/requests.component.html":
/*!***************************************************!*\
  !*** ./src/app/templates/requests.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <h1 class=\"requests-h1\">View your requests.</h1>\n    </div>\n</div>\n\n<ul class=\"nav justify-content-center nav-pills nav-fill\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link active\" style=\"font-size: 24px\" id=\"sent-tab\" data-toggle=\"tab\" href=\"#sent\" role=\"tab\" aria-controls=\"sent\"\n            aria-selected=\"true\">Sent</a>\n    </li>\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" style=\"font-size: 24px\" id=\"recieved-tab\" data-toggle=\"tab\" href=\"#recieved\" role=\"tab\" aria-controls=\"recieved\"\n            aria-selected=\"false\">Recieved</a>\n    </li>\n</ul>\n\n<div class=\"tab-content\" id=\"myTabContent\">\n    <div class=\"tab-pane fade show active\" id=\"sent\" role=\"tabpanel\" aria-labelledby=\"sent-tab\">\n        <div>\n            \n            <ul id=\"people\" class=\"list-group list-people\">\n                <li *ngFor=\"let request of requests\" class=\"people-item list-group-item d-flex justify-content-between align-items-center\">\n                    <span>\n                        <!-- <div>\n                            <img class=\"img-fluid img-person\" src=\"https://loremflickr.com/75/75/\" />\n                        </div> -->\n                        <span class=\"request-message\">\n                            <a class=\"request-message-name\"> {{ request.firstName + \" \" + request.lastName }} </a>\n                            <br/>\n                            <a class=\"request-message-activity\"> {{ request.message }} </a>\n                        </span>\n                    </span>\n                    <span>\n                        <button class=\"btn btn-danger request-message-btn\" type=\"button\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </span>\n                </li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"tab-pane fade\" id=\"recieved\" role=\"tabpanel\" aria-labelledby=\"recieved-tab\">\n        <div>\n            <ul id=\"people\" class=\"list-group list-people\">\n                <li *ngFor=\"let request of recievedRequests\" class=\"people-item list-group-item d-flex justify-content-between align-items-center\">\n                    <span class=\"request-message\">\n                        <a class=\"request-message-name\"> {{ request.firstName }} </a>\n                        <br/>\n                        <a class=\"request-message-activity\"> {{ request.message }} </a>\n                    </span>\n                    <span>\n                        <button class=\"btn btn-primary request-message-btn\" type=\"button\">\n                            <i class=\"fas fa-check\"></i>\n                        </button>\n                        <br/>\n                        <button class=\"btn btn-danger request-message-btn\" type=\"button\">\n                            <i class=\"fas fa-times\"></i>\n                        </button>\n                    </span>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD84k9_tQEI0shSTKBTBFLuwAV1JdSFpJk",
        authDomain: "sonr-ed33f.firebaseapp.com",
        databaseURL: "https://sonr-ed33f.firebaseio.com",
        projectId: "sonr-ed33f",
        storageBucket: "",
        messagingSenderId: "892311524328"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brandonbuchanan/Documents/GitHub/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map