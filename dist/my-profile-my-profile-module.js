(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-profile-my-profile-module"],{

/***/ "./src/app/main/content/apps/my-profile/about/about.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/apps/my-profile/about/about.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"p-24\" fxLayout=\"row wrap\">\r\n\r\n    <div class=\"about-content\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"65\">\r\n\r\n        <div class=\"profile-box info-box general\" fxLayout=\"column\">\r\n\r\n            <header class=\"mat-accent-bg\">\r\n                <div class=\"title\">About Us</div>\r\n            </header>\r\n\r\n            <div class=\"content\">\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Company Description</div>\r\n                    <div class=\"info\">{{client.description}}</div>\r\n                </div>\r\n\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Company Vision</div>\r\n                    <div class=\"info\">{{client.vision}}</div>\r\n                </div>\r\n\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Company Mission</div>\r\n                    <div class=\"info\">{{client.mission}}</div>\r\n                </div>\r\n\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Company Values</div>\r\n                    <div class=\"info\">{{client.company_values}}</div>\r\n                </div>\r\n\r\n                \r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"profile-box info-box contact\" fxLayout=\"column\">\r\n\r\n            <header class=\"mat-accent-bg\">\r\n                <div class=\"title\">General Information</div>\r\n            </header>\r\n\r\n            <div class=\"content\">\r\n\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Company Start Date</div>\r\n                    <div class=\"info\">{{client.start_date}}</div>\r\n                </div>\r\n\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">UEN</div>\r\n                    <div class=\"info\">{{client.uen}}</div>\r\n                </div>\r\n                \r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Tax Number</div>\r\n                    <div class=\"info\">{{client.tax_number}}</div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"about-sidebar\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"35\">\r\n\r\n        <div class=\"profile-box info-box contact\" fxLayout=\"column\">\r\n\r\n            <header class=\"mat-accent-bg\">\r\n                <div class=\"title\">Contact</div>\r\n            </header>\r\n\r\n            <div class=\"content\">\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Address</div>\r\n                    <div class=\"info\">\r\n                        <p>{{client.address}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Tel.</div>\r\n                    <div class=\"info\">\r\n                        <p>{{client.contact_number}}</p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Website</div>\r\n                    <div class=\"info\">\r\n                        <span>{{client.website}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Emails</div>\r\n                    <div class=\"info\">\r\n                        <p>{{client.email}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/my-profile/about/about.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/apps/my-profile/about/about.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#about {\n  max-width: 100%; }\n#about .about-content .general .location mat-icon {\n    line-height: 13px !important; }\n#about .about-content .work .job .company {\n    padding: 0 16px 0 0;\n    font-weight: 500; }\n#about .about-content .work .job .date {\n    color: rgba(0, 0, 0, 0.54); }\n#about .about-sidebar {\n    padding-left: 32px; }\n@media only screen and (max-width: 768px) {\n      #about .about-sidebar {\n        padding-left: 0px; } }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #about .about-sidebar {\n        padding: 8px; } }\n#about .about-sidebar .friends .content .friend {\n      padding: 4px; }\n#about .about-sidebar .groups .content .group {\n      margin-bottom: 16px; }\n#about .about-sidebar .groups .content .group:last-child {\n        margin-bottom: 0; }\n#about .about-sidebar .groups .content .group .logo {\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        margin-right: 16px; }\n#about .about-sidebar .groups .content .group .name {\n        font-weight: 500;\n        font-size: 15px; }\n#about .about-sidebar .groups .content .group .category,\n      #about .about-sidebar .groups .content .group .members {\n        color: rgba(0, 0, 0, 0.54); }\n#about .about-sidebar .groups .content .group .members {\n        margin-top: 16px; }\n.profile-box {\n  margin-bottom: 16px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.profile-box header {\n    padding: 16px; }\n.profile-box header .title {\n      font-size: 17px; }\n.profile-box header .more {\n      cursor: pointer; }\n.profile-box .content {\n    padding: 16px;\n    background-color: #FFF; }\n.profile-box footer {\n    padding: 8px;\n    border-top: 1px solid rgba(0, 0, 0, 0.08);\n    background-color: rgba(0, 0, 0, 0.06); }\n.profile-box.info-box .info-line {\n    margin-bottom: 24px; }\n.profile-box.info-box .info-line .title {\n      font-size: 15px;\n      font-weight: 500;\n      padding-bottom: 4px; }\n.profile-box.info-box .info-line .info p {\n      margin: 0px; }\n.profile-box.info-box .info-line:last-child {\n      margin-bottom: 0; }\n.actions .mat-icon {\n  color: #fff;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/my-profile/about/about.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/apps/my-profile/about/about.component.ts ***!
  \***********************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AboutComponent.prototype, "client", void 0);
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-profile',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/main/content/apps/my-profile/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/main/content/apps/my-profile/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/my-profile/my-profile.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/content/apps/my-profile/my-profile.module.ts ***!
  \*******************************************************************/
/*! exports provided: MyProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileModule", function() { return MyProfileModule; });
/* harmony import */ var _my_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-profile.service */ "./src/app/main/content/apps/my-profile/my-profile.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-profile/my-profile.component */ "./src/app/main/content/apps/my-profile/my-profile/my-profile.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/main/content/apps/my-profile/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__["MyProfileComponent"]
    }
];
var MyProfileModule = /** @class */ (function () {
    function MyProfileModule() {
    }
    MyProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"]
            ],
            declarations: [_my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_6__["MyProfileComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]],
            providers: [_my_profile_service__WEBPACK_IMPORTED_MODULE_0__["MyProfileService"]]
        })
    ], MyProfileModule);
    return MyProfileModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/my-profile/my-profile.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/content/apps/my-profile/my-profile.service.ts ***!
  \********************************************************************/
/*! exports provided: MyProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileService", function() { return MyProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _fuse_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/constant */ "./src/@fuse/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyProfileService = /** @class */ (function () {
    function MyProfileService(http) {
        this.http = http;
        this.baseUrl = _fuse_constant__WEBPACK_IMPORTED_MODULE_5__["apiUri"];
    }
    MyProfileService.prototype.setHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    MyProfileService.prototype.postData = function (url, data, type) {
        var headers = this.setHeaders();
        if (type = 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344');
        }
        var options = { headers: headers };
        return this.http.post(this.baseUrl + url, data, options).map(this.extractData).catch(this.handleError);
    };
    MyProfileService.prototype.getData = function (url, data) {
        var headers = this.setHeaders();
        if (data) {
            var queryParams = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
            url += '?' + queryParams;
        }
        var options = { headers: headers };
        return this.http.get(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    MyProfileService.prototype.deleteData = function (url) {
        var headers = this.setHeaders();
        var options = { headers: headers };
        return this.http.delete(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    MyProfileService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    MyProfileService.prototype.handleError = function (error) {
        var errMsg = error.error;
        if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) { return errMsg.message[k]; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
    };
    MyProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MyProfileService);
    return MyProfileService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/my-profile/my-profile/my-profile.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/main/content/apps/my-profile/my-profile/my-profile.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"profile\" class=\"page-layout simple tabbed\" fusePerfectScrollbar *ngIf=\"client\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header p-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\r\n         fxLayoutAlign.gt-sm=\"space-between end\">\r\n\r\n        <div class=\"user-info\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\r\n             fxLayoutAlign.gt-sm=\"start center\">\r\n            <img class=\"profile-image avatar huge\" src=\"assets/images/avatars/profile.jpg\"\r\n                 *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\r\n            <div class=\"name\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">{{client.name}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" *fuseIfOnDom\r\n             [@animate]=\"{value:'*',params:{delay:'200ms'}}\">\r\n             <mat-icon class=\"mat-icon material-icons mr-16\" role=\"img\" aria-hidden=\"true\" (click)=\"editProfile()\">edit</mat-icon>\r\n             <mat-icon class=\"mat-icon material-icons\" role=\"img\" aria-hidden=\"true\" routerLink=\"/apps/calendar\">calendar_today</mat-icon>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\" >\r\n        <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex=\"100\">\r\n            <!-- <mat-card> -->\r\n            <mat-tab-group>\r\n                <mat-tab label=\"About\">\r\n                    <app-about-profile [client]=\"client\"></app-about-profile>\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n        </div>\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/my-profile/my-profile/my-profile.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/main/content/apps/my-profile/my-profile/my-profile.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#profile .header {\n  height: 120px;\n  min-height: 120px;\n  max-height: 120px;\n  background-size: cover; }\n#profile .header .profile-image {\n    margin-right: 24px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .profile-image {\n        margin: 0 0 16px 0; } }\n#profile .header .name {\n    font-size: 34px;\n    color: #FFFFFF; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .name {\n        margin-bottom: 32px; } }\n#profile .header .actions button {\n    text-transform: none;\n    padding: 0 16px;\n    height: 32px;\n    line-height: 32px;\n    margin: 0 0 0 8px; }\n#profile .content {\n  -webkit-box-flex: 1;\n          flex: 1; }\n#profile .content mat-tab-group {\n    height: 100%; }\n#profile .content mat-tab-group .mat-tab-body-wrapper {\n      -webkit-box-flex: 1;\n              flex-grow: 1; }\n#about {\n  max-width: 100%; }\n#about .about-content .general .location mat-icon {\n    line-height: 13px !important; }\n#about .about-content .work .job .company {\n    padding: 0 16px 0 0;\n    font-weight: 500; }\n#about .about-content .work .job .date {\n    color: rgba(0, 0, 0, 0.54); }\n#about .about-sidebar {\n    padding-left: 32px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #about .about-sidebar {\n        padding: 8px; } }\n#about .about-sidebar .friends .content .friend {\n      padding: 4px; }\n#about .about-sidebar .groups .content .group {\n      margin-bottom: 16px; }\n#about .about-sidebar .groups .content .group:last-child {\n        margin-bottom: 0; }\n#about .about-sidebar .groups .content .group .logo {\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        margin-right: 16px; }\n#about .about-sidebar .groups .content .group .name {\n        font-weight: 500;\n        font-size: 15px; }\n#about .about-sidebar .groups .content .group .category,\n      #about .about-sidebar .groups .content .group .members {\n        color: rgba(0, 0, 0, 0.54); }\n#about .about-sidebar .groups .content .group .members {\n        margin-top: 16px; }\n.actions .mat-icon {\n  color: #fff;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/my-profile/my-profile/my-profile.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/content/apps/my-profile/my-profile/my-profile.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function() { return MyProfileComponent; });
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _my_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../my-profile.service */ "./src/app/main/content/apps/my-profile/my-profile.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-profile/edit-profile.component */ "./src/app/main/content/apps/my-profile/edit-profile/edit-profile.component.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyProfileComponent = /** @class */ (function () {
    function MyProfileComponent(dialog, apiloader, toast, myService) {
        this.dialog = dialog;
        this.apiloader = apiloader;
        this.toast = toast;
        this.myService = myService;
        this.client_id = sessionStorage.getItem('client_id');
    }
    MyProfileComponent.prototype.ngOnInit = function () {
        this.getClientDetails();
    };
    MyProfileComponent.prototype.editProfile = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_5__["EditProfileComponent"], {
            panelClass: 'myProfile',
            data: {
                client: this.client
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            else {
                _this.updateClient(response);
            }
        });
    };
    MyProfileComponent.prototype.getClientDetails = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        this.myService.getData('clients/' + this.client_id).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.client = response.data;
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    MyProfileComponent.prototype.updateClient = function (response) {
        var _this = this;
        this.apiloader.setLoader(true);
        var formData = response[1];
        var uploader = response[0];
        var sdate = moment__WEBPACK_IMPORTED_MODULE_7__(formData.start_date).format('YYYY-MM-DD');
        var form = new FormData();
        form.append('logo', formData.logo);
        form.append('company_name', formData.company_name);
        form.append('description', formData.description);
        form.append('vision', formData.vision);
        form.append('mission', formData.mission);
        form.append('company_values', formData.company_values);
        form.append('start_date', sdate);
        form.append('uen', formData.uen);
        form.append('tax_number', formData.tax_number);
        form.append('address', formData.address);
        form.append('contact_number', formData.contact_number);
        form.append('website', formData.website);
        form.append('email', formData.email);
        /* const body = new URLSearchParams();
        body.set('company_name', formData.company_name);
        body.set('email', formData.email);
        body.set('mission', formData.mission);
        body.set('vision', formData.vision);
        body.set('logo', formData.logo);
        body.set('company_values', formData.company_values);
        body.set('description', formData.description);
        body.set('uen', formData.uen);
        body.set('tax_number', formData.tax_number);
        body.set('contact_number', formData.contact_number);
        body.set('website', formData.website);
        body.set('address', formData.address);
        body.set('start_date', sdate);
        body.set('latitude', '20.25');
        body.set('latitude', '21.25'); */
        this.myService.postData('clients/' + this.client_id, form).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.getClientDetails();
                _this.toast.showSuccess('Client Updated Successfully!.');
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    MyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-my-profile',
            template: __webpack_require__(/*! ./my-profile.component.html */ "./src/app/main/content/apps/my-profile/my-profile/my-profile.component.html"),
            styles: [__webpack_require__(/*! ./my-profile.component.scss */ "./src/app/main/content/apps/my-profile/my-profile/my-profile.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"],
            _my_profile_service__WEBPACK_IMPORTED_MODULE_1__["MyProfileService"]])
    ], MyProfileComponent);
    return MyProfileComponent;
}());



/***/ })

}]);
//# sourceMappingURL=my-profile-my-profile-module.js.map