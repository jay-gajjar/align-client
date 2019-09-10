(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["subscription-subscription-module"],{

/***/ "./src/app/main/content/apps/subscription/subscription.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/apps/subscription/subscription.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"subscription\" class=\"page-layout simple tabbed\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n  <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\"\r\n  fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n  \r\n  <!-- APP TITLE -->\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n         <!-- <mat-icon class=\"logo-icon mr-16\">settings</mat-icon> -->\r\n         <span class=\"logo-text h1\">Subscription</span>\r\n     </div>\r\n  \r\n  </div>\r\n  <!-- / APP TITLE -->\r\n  </div>\r\n  <!-- / HEADER -->\r\n\r\n  <div class=\"subscription m-16\">\r\n    <div class=\"free\">\r\n        <mat-card>\r\n          <mat-card-header>\r\n              <mat-card-title>Free</mat-card-title>\r\n              <mat-card-subtitle>(Individual)</mat-card-subtitle>\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n              <ul>\r\n                <li>User Profile Access</li>\r\n                <li>Calendar</li>\r\n                <li>Task Management</li>\r\n                <li>Communication<span>(upto 10 chat Groups)</span></li>\r\n              </ul>\r\n          </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"paid\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>Paid</mat-card-title>\r\n                <mat-card-subtitle>(Company)</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div class=\"left\">\r\n                <ul>\r\n                  <li>Client Admin</li>\r\n                  <li>User Profile</li>\r\n                  <li>Company Profile</li>\r\n                  <li>Calendar</li>\r\n                  <li>Task Management</li>\r\n                  <li>Onboarding</li>\r\n                  <li>Performance Mgt.</li>\r\n                  <li>Leave Mgt.</li>\r\n                  <li>3rd Party API app access</li>\r\n                  <li>Annocement</li>\r\n                  <li>Communication</li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"right\">\r\n                  <ul>\r\n                    <li>Approval Workflow</li>\r\n                    <li>Bulk Update(Web)</li>\r\n                    <li>Report(Web)</li>\r\n                    <li>Technical Support(Chat)</li>\r\n                  </ul>\r\n              </div>\r\n\r\n                \r\n            </mat-card-content>\r\n          </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/subscription/subscription.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/apps/subscription/subscription.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#subscription {\n  width: 384px;\n  max-width: 384px;\n  padding: 0px;\n  text-align: center;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n    #subscription {\n      padding: 0px;\n      width: 100%; } }\n#subscription .logo {\n    width: 128px;\n    margin: 32px auto; }\n#subscription .title {\n    font-size: 12px;\n    color: #ccc;\n    margin: 16px 32px 32px 30px; }\n#subscription form {\n    width: 100%;\n    text-align: left; }\n#subscription form mat-form-field {\n      width: 100%; }\n#subscription form .submit-button {\n      width: 220px;\n      margin: 16px auto;\n      display: block; }\n@media screen and (max-width: 599px) {\n        #subscription form .submit-button {\n          width: 90%; } }\n#subscription .login {\n    margin: 32px auto 24px auto;\n    width: 250px;\n    font-weight: 500; }\n#subscription .login .text {\n      margin-right: 8px; }\n.reset {\n  display: block;\n  width: 100%;\n  left: 30%;\n  float: left;\n  position: relative; }\n.subscription .mat-card {\n  padding: 0px;\n  border: 1px solid #fa7915;\n  border-radius: 10px; }\n.subscription .mat-card-header {\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #f2ab13;\n  padding: 14px 0 0 0;\n  border-radius: 10px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n.subscription .mat-card-title {\n  font-size: 20px;\n  font-weight: 500; }\n.subscription .mat-card-subtitle {\n  font-size: 20px;\n  color: #000; }\n.subscription .mat-card-title, .subscription .mat-card-subtitle {\n  margin-bottom: 5px; }\n.subscription .mat-card-content {\n  text-align: left;\n  padding: 20px;\n  height: 450px; }\n.subscription .mat-card-content ul {\n  list-style: none;\n  margin: 0; }\n.subscription .mat-card-content ul li {\n  font-size: 18px;\n  padding: 5px 0px; }\n.subscription .mat-card-content ul li:before {\n  font-weight: 100;\n  margin-left: -1em;\n  background-color: #fb7215;\n  border-radius: 50%;\n  content: \"\";\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 2px;\n  height: 8px;\n  width: 8px; }\n.subscription .free {\n  width: 30%;\n  display: block;\n  float: left;\n  padding: 20px; }\n.subscription .paid {\n  width: 60%;\n  display: block;\n  float: left;\n  padding: 20px; }\n.subscription .paid .left, .subscription .paid .right {\n    width: 50%;\n    display: block;\n    float: left; }\n@media only screen and (max-width: 767px) {\n  .subscription {\n    margin: 0px !important; }\n    .subscription .free, .subscription .paid, .subscription .left, .subscription .right {\n      width: 100% !important; }\n    .subscription .free .mat-card-content {\n      height: 230px; }\n    .subscription .paid .mat-card-content {\n      height: 600px; } }\n"

/***/ }),

/***/ "./src/app/main/content/apps/subscription/subscription.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/apps/subscription/subscription.component.ts ***!
  \**************************************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
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

var SubscriptionComponent = /** @class */ (function () {
    function SubscriptionComponent() {
    }
    SubscriptionComponent.prototype.ngOnInit = function () {
    };
    SubscriptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subscription',
            template: __webpack_require__(/*! ./subscription.component.html */ "./src/app/main/content/apps/subscription/subscription.component.html"),
            styles: [__webpack_require__(/*! ./subscription.component.scss */ "./src/app/main/content/apps/subscription/subscription.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SubscriptionComponent);
    return SubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/subscription/subscription.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/apps/subscription/subscription.module.ts ***!
  \***********************************************************************/
/*! exports provided: SubscriptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionModule", function() { return SubscriptionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _subscription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription.component */ "./src/app/main/content/apps/subscription/subscription.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _subscription_component__WEBPACK_IMPORTED_MODULE_5__["SubscriptionComponent"]
    }
];
var SubscriptionModule = /** @class */ (function () {
    function SubscriptionModule() {
    }
    SubscriptionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"]
            ],
            declarations: [_subscription_component__WEBPACK_IMPORTED_MODULE_5__["SubscriptionComponent"]]
        })
    ], SubscriptionModule);
    return SubscriptionModule;
}());



/***/ })

}]);
//# sourceMappingURL=subscription-subscription-module.js.map