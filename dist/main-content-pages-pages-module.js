(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-content-pages-pages-module"],{

/***/ "./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"forgot-password\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n    <div id=\"forgot-password-intro\" fxFlex fxHide fxShow.gt-xs>\r\n\r\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\r\n            <img src=\"assets/images/logos/fuse.svg\">\r\n        </div>\r\n\r\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\r\n            Welcome to the FUSE!\r\n        </div>\r\n\r\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\r\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"forgot-password-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\r\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\r\n\r\n        <div id=\"forgot-password-form\">\r\n\r\n            <div class=\"logo\" fxHide.gt-xs>\r\n                <span>F</span>\r\n            </div>\r\n\r\n            <div class=\"title\">RECOVER YOUR PASSWORD</div>\r\n\r\n            <form name=\"forgoPasswordForm\" [formGroup]=\"forgotPasswordForm\" novalidate>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"forgotPasswordFormErrors.email.required\">\r\n                        Email is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!forgotPasswordFormErrors.email.required && forgotPasswordFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\r\n                        aria-label=\"SEND RESET LINK\" [disabled]=\"forgotPasswordForm.invalid\">\r\n                    SEND RESET LINK\r\n                </button>\r\n\r\n            </form>\r\n\r\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login-2'\">Go back to login</a>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #forgot-password {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #forgot-password #forgot-password-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #forgot-password #forgot-password-intro {\n        padding: 128px 64px; } }\n:host #forgot-password #forgot-password-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #forgot-password #forgot-password-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #forgot-password #forgot-password-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #forgot-password #forgot-password-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #forgot-password #forgot-password-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #forgot-password #forgot-password-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n          text-align: center;\n          padding: 24px; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #039be5; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .title {\n        font-size: 21px; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .description {\n        padding-top: 8px; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n              width: 80%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n              width: 80%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: FuseForgotPassword2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseForgotPassword2Component", function() { return FuseForgotPassword2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseForgotPassword2Component = /** @class */ (function () {
    function FuseForgotPassword2Component(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.forgotPasswordFormErrors = {
            email: {}
        };
    }
    FuseForgotPassword2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
        this.forgotPasswordForm.valueChanges.subscribe(function () {
            _this.onForgotPasswordFormValuesChanged();
        });
    };
    FuseForgotPassword2Component.prototype.onForgotPasswordFormValuesChanged = function () {
        for (var field in this.forgotPasswordFormErrors) {
            if (!this.forgotPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.forgotPasswordFormErrors[field] = {};
            // Get the control
            var control = this.forgotPasswordForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.forgotPasswordFormErrors[field] = control.errors;
            }
        }
    };
    FuseForgotPassword2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-forgot-password-2',
            template: __webpack_require__(/*! ./forgot-password-2.component.html */ "./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password-2.component.scss */ "./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FuseForgotPassword2Component);
    return FuseForgotPassword2Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ForgotPassword2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassword2Module", function() { return ForgotPassword2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _forgot_password_2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password-2.component */ "./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/forgot-password-2',
        component: _forgot_password_2_component__WEBPACK_IMPORTED_MODULE_4__["FuseForgotPassword2Component"]
    }
];
var ForgotPassword2Module = /** @class */ (function () {
    function ForgotPassword2Module() {
    }
    ForgotPassword2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _forgot_password_2_component__WEBPACK_IMPORTED_MODULE_4__["FuseForgotPassword2Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
            ]
        })
    ], ForgotPassword2Module);
    return ForgotPassword2Module;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"forgot-password\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <div id=\"forgot-password-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\" *fuseIfOnDom\r\n         [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\r\n\r\n        <div id=\"forgot-password-form\">\r\n\r\n            <div class=\"logo\">\r\n                <img src=\"assets/images/logos/logo.png\">\r\n            </div>\r\n\r\n            <div class=\"title\">Enter your email and we send you a password reset link.</div>\r\n\r\n            <form name=\"forgotPasswordForm\" [formGroup]=\"forgotPasswordForm\">\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"forgotPasswordFormErrors.email.required\">\r\n                        Email is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!forgotPasswordFormErrors.email.required && forgotPasswordFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <button mat-raised-button class=\"submit-button\" (click)=\"onSubmit(forgotPasswordForm.value)\"\r\n                        aria-label=\"Send Request\" [disabled]=\"forgotPasswordForm.invalid\">\r\n                    Send Request\r\n                </button>\r\n            </form>\r\n\r\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Go back to login</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #forgot-password {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/align-background.png\") no-repeat;\n  background-size: cover; }\n:host #forgot-password #forgot-password-form-wrapper {\n    -webkit-box-flex: 1;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #forgot-password #forgot-password-form-wrapper {\n        padding: 16px; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      text-align: center;\n      background: #FFFFFF;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #forgot-password #forgot-password-form-wrapper #forgot-password-form {\n          padding: 24px;\n          width: 100%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .title {\n        font-size: 12px;\n        color: #ccc;\n        margin: 16px 32px 32px 30px; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form {\n        width: 100%;\n        text-align: left; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form mat-form-field {\n          width: 100%; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #forgot-password #forgot-password-form-wrapper #forgot-password-form form .submit-button {\n              width: 90%; } }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #forgot-password #forgot-password-form-wrapper #forgot-password-form .login .text {\n          margin-right: 8px; }\n.submit-button {\n  background-color: #F57D3F;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FuseForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseForgotPasswordComponent", function() { return FuseForgotPasswordComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication.service */ "./src/app/main/content/pages/authentication/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FuseForgotPasswordComponent = /** @class */ (function () {
    function FuseForgotPasswordComponent(fuseConfig, formBuilder, apiloader, toast, router, authService) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.apiloader = apiloader;
        this.toast = toast;
        this.router = router;
        this.authService = authService;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.forgotPasswordFormErrors = {
            email: {}
        };
    }
    FuseForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]]
        });
        this.forgotPasswordForm.valueChanges.subscribe(function () {
            _this.onForgotPasswordFormValuesChanged();
        });
    };
    FuseForgotPasswordComponent.prototype.onForgotPasswordFormValuesChanged = function () {
        for (var field in this.forgotPasswordFormErrors) {
            if (!this.forgotPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.forgotPasswordFormErrors[field] = {};
            // Get the control
            var control = this.forgotPasswordForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.forgotPasswordFormErrors[field] = control.errors;
            }
        }
    };
    FuseForgotPasswordComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.apiloader.setLoader(true);
        var body = new URLSearchParams();
        body.set('email', formData.email);
        this.authService.postData('clients/forgot-password', body.toString()).subscribe(function (response) {
            if (response.data.otp) {
                _this.apiloader.setLoader(false);
                _this.toast.showSuccess('OTP sent to your email address.');
                _this.router.navigate(['/pages/verify-otp']);
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    FuseForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'fuse-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_6__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], FuseForgotPasswordComponent);
    return FuseForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/forgot-password/forgot-password.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/forgot-password/forgot-password.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ForgotPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordModule", function() { return ForgotPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password.component */ "./src/app/main/content/pages/authentication/forgot-password/forgot-password.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ "./src/app/main/content/pages/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'auth/forgot-password',
        component: _forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["FuseForgotPasswordComponent"]
    }
];
var ForgotPasswordModule = /** @class */ (function () {
    function ForgotPasswordModule() {
    }
    ForgotPasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["FuseForgotPasswordComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
            ],
            providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]]
        })
    ], ForgotPasswordModule);
    return ForgotPasswordModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/lock/lock.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/lock/lock.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"lock\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <div id=\"lock-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div id=\"lock-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\r\n\r\n            <div class=\"lock-form-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n                 fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"start center\">\r\n\r\n                <div class=\"avatar-container\">\r\n                    <img class=\"avatar big\" src=\"assets/images/avatars/katherine.jpg\">\r\n                    <mat-icon class=\"s-36\">lock</mat-icon>\r\n                </div>\r\n\r\n                <div>\r\n                    <div class=\"title\">YOUR SESSION IS LOCKED</div>\r\n                    <div class=\"subtitle\">\r\n                        Due to inactivity, your session is locked. Enter your password to continue.\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <form name=\"lockForm\" [formGroup]=\"lockForm\" novalidate>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Username\" formControlName=\"username\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Password\" formControlName=\"password\">\r\n                    <mat-error *ngIf=\"lockFormErrors.password.required\">\r\n                        Password is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\r\n                        aria-label=\"UNLOCK\" [disabled]=\"lockForm.invalid\">\r\n                    UNLOCK\r\n                </button>\r\n\r\n            </form>\r\n\r\n            <div class=\"message\">\r\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Are you not Katherine?</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/lock/lock.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/lock/lock.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #lock {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #lock #lock-form-wrapper {\n    -webkit-box-flex: 1;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #lock #lock-form-wrapper {\n        padding: 16px; } }\n:host #lock #lock-form-wrapper #lock-form {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      width: 420px;\n      max-width: 420px;\n      padding: 48px 32px 32px 32px;\n      background: #FFFFFF;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #lock #lock-form-wrapper #lock-form {\n          padding: 24px;\n          width: 100%; } }\n:host #lock #lock-form-wrapper #lock-form .lock-form-header {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-flex: 1;\n                flex: 1 0 auto; }\n:host #lock #lock-form-wrapper #lock-form .lock-form-header .avatar-container {\n          position: relative;\n          margin-right: 16px; }\n:host #lock #lock-form-wrapper #lock-form .lock-form-header .avatar-container .avatar {\n            margin: 0; }\n@media screen and (max-width: 599px) {\n            :host #lock #lock-form-wrapper #lock-form .lock-form-header .avatar-container {\n              margin-right: 0; } }\n:host #lock #lock-form-wrapper #lock-form .lock-form-header .avatar-container mat-icon {\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            color: #f44336; }\n:host #lock #lock-form-wrapper #lock-form .lock-form-header .title {\n          font-size: 20px;\n          margin-bottom: 8px; }\n@media screen and (max-width: 599px) {\n            :host #lock #lock-form-wrapper #lock-form .lock-form-header .title {\n              margin-top: 16px;\n              text-align: center; } }\n:host #lock #lock-form-wrapper #lock-form .lock-form-header .subtitle {\n          color: rgba(0, 0, 0, 0.54); }\n@media screen and (max-width: 599px) {\n            :host #lock #lock-form-wrapper #lock-form .lock-form-header .subtitle {\n              text-align: center; } }\n:host #lock #lock-form-wrapper #lock-form form {\n        width: 100%;\n        margin: 32px 0 0 0; }\n:host #lock #lock-form-wrapper #lock-form form mat-form-field {\n          width: 100%; }\n:host #lock #lock-form-wrapper #lock-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #lock #lock-form-wrapper #lock-form form .submit-button {\n              width: 90%; } }\n:host #lock #lock-form-wrapper #lock-form .message {\n        font-weight: 500;\n        text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/lock/lock.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/lock/lock.component.ts ***!
  \**************************************************************************/
/*! exports provided: FuseLockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseLockComponent", function() { return FuseLockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseLockComponent = /** @class */ (function () {
    function FuseLockComponent(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.lockFormErrors = {
            username: {},
            password: {}
        };
    }
    FuseLockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lockForm = this.formBuilder.group({
            username: [
                {
                    value: 'Katherine',
                    disabled: true
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.lockForm.valueChanges.subscribe(function () {
            _this.onLockFormValuesChanged();
        });
    };
    FuseLockComponent.prototype.onLockFormValuesChanged = function () {
        for (var field in this.lockFormErrors) {
            if (!this.lockFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.lockFormErrors[field] = {};
            // Get the control
            var control = this.lockForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.lockFormErrors[field] = control.errors;
            }
        }
    };
    FuseLockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-lock',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/main/content/pages/authentication/lock/lock.component.html"),
            styles: [__webpack_require__(/*! ./lock.component.scss */ "./src/app/main/content/pages/authentication/lock/lock.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FuseLockComponent);
    return FuseLockComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/lock/lock.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/lock/lock.module.ts ***!
  \***********************************************************************/
/*! exports provided: LockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockModule", function() { return LockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _lock_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lock.component */ "./src/app/main/content/pages/authentication/lock/lock.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/lock',
        component: _lock_component__WEBPACK_IMPORTED_MODULE_4__["FuseLockComponent"]
    }
];
var LockModule = /** @class */ (function () {
    function LockModule() {
    }
    LockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _lock_component__WEBPACK_IMPORTED_MODULE_4__["FuseLockComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], LockModule);
    return LockModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/login-2/login-2.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/login-2/login-2.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"login\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n    <div id=\"login-intro\" fxFlex fxHide fxShow.gt-xs>\r\n\r\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\r\n            <img src=\"assets/images/logos/fuse.svg\">\r\n        </div>\r\n\r\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\r\n            Welcome to the FUSE!\r\n        </div>\r\n\r\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\r\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"login-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\r\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\r\n\r\n        <div id=\"login-form\">\r\n\r\n            <div class=\"logo\" fxHide.gt-xs>\r\n                <span>F</span>\r\n            </div>\r\n\r\n            <div class=\"title\">LOGIN TO YOUR ACCOUNT</div>\r\n\r\n            <form name=\"loginForm\" [formGroup]=\"loginForm\" novalidate>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"loginFormErrors.email.required\">\r\n                        Email is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!loginFormErrors.email.required && loginFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                    <mat-error *ngIf=\"loginFormErrors.password.required\">\r\n                        Password is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <div class=\"remember-forgot-password\" fxLayout=\"row\" fxLayout.xs=\"column\"\r\n                     fxLayoutAlign=\"space-between center\">\r\n                    <mat-checkbox class=\"remember-me\" aria-label=\"Remember Me\">\r\n                        Remember Me\r\n                    </mat-checkbox>\r\n\r\n                    <a class=\"forgot-password\" [routerLink]=\"'/pages/auth/forgot-password-2'\">\r\n                        Forgot Password?\r\n                    </a>\r\n                </div>\r\n\r\n                <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"LOGIN\"\r\n                        [disabled]=\"loginForm.invalid\">\r\n                    LOGIN\r\n                </button>\r\n\r\n            </form>\r\n\r\n            <div class=\"separator\">\r\n                <span class=\"text\">OR</span>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n\r\n                <button mat-raised-button class=\"google\">\r\n                    Log in with Google\r\n                </button>\r\n\r\n                <button mat-raised-button class=\"facebook\">\r\n                    Log in with Facebook\r\n                </button>\r\n\r\n            </div>\r\n\r\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <span class=\"text\">Don't have an account?</span>\r\n                <a class=\"link\" [routerLink]=\"'/pages/auth/register-2'\">Create an account</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/login-2/login-2.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/login-2/login-2.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #login {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #login #login-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #login #login-intro {\n        padding: 128px 64px; } }\n:host #login #login-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #login #login-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #login #login-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #login #login-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #login #login-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #login #login-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #login #login-form-wrapper #login-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #login #login-form-wrapper #login-form {\n          text-align: center;\n          padding: 24px; } }\n:host #login #login-form-wrapper #login-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #039be5; }\n:host #login #login-form-wrapper #login-form .title {\n        font-size: 21px; }\n:host #login #login-form-wrapper #login-form .description {\n        padding-top: 8px; }\n:host #login #login-form-wrapper #login-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #login #login-form-wrapper #login-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form mat-form-field {\n              width: 80%; } }\n:host #login #login-form-wrapper #login-form form mat-checkbox {\n          margin: 0; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password {\n          font-size: 13px;\n          margin-top: 8px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .remember-me {\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .remember-forgot-password .forgot-password {\n            font-size: 13px;\n            font-weight: 500;\n            margin-bottom: 16px; }\n:host #login #login-form-wrapper #login-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #login #login-form-wrapper #login-form form .submit-button {\n              width: 80%; } }\n:host #login #login-form-wrapper #login-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        text-align: center;\n        color: rgba(0, 0, 0, 0.54); }\n:host #login #login-form-wrapper #login-form .separator .text {\n          display: -webkit-inline-box;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #login #login-form-wrapper #login-form .separator .text:before, :host #login #login-form-wrapper #login-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #login #login-form-wrapper #login-form .separator .text:before {\n            right: 100%; }\n:host #login #login-form-wrapper #login-form .separator .text:after {\n            left: 100%; }\n:host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n        width: 70%;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n          :host #login #login-form-wrapper #login-form button.google, :host #login #login-form-wrapper #login-form button.facebook {\n            width: 60%; } }\n:host #login #login-form-wrapper #login-form button.google mat-icon, :host #login #login-form-wrapper #login-form button.facebook mat-icon {\n          color: #FFFFFF;\n          margin: 0 8px 0 0; }\n:host #login #login-form-wrapper #login-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #login #login-form-wrapper #login-form button.facebook {\n        background-color: #3f5c9a; }\n:host #login #login-form-wrapper #login-form .register {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #login #login-form-wrapper #login-form .register .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/login-2/login-2.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/login-2/login-2.component.ts ***!
  \********************************************************************************/
/*! exports provided: FuseLogin2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseLogin2Component", function() { return FuseLogin2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseLogin2Component = /** @class */ (function () {
    function FuseLogin2Component(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.loginFormErrors = {
            email: {},
            password: {}
        };
    }
    FuseLogin2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.loginForm.valueChanges.subscribe(function () {
            _this.onLoginFormValuesChanged();
        });
    };
    FuseLogin2Component.prototype.onLoginFormValuesChanged = function () {
        for (var field in this.loginFormErrors) {
            if (!this.loginFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.loginFormErrors[field] = {};
            // Get the control
            var control = this.loginForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.loginFormErrors[field] = control.errors;
            }
        }
    };
    FuseLogin2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-login-2',
            template: __webpack_require__(/*! ./login-2.component.html */ "./src/app/main/content/pages/authentication/login-2/login-2.component.html"),
            styles: [__webpack_require__(/*! ./login-2.component.scss */ "./src/app/main/content/pages/authentication/login-2/login-2.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FuseLogin2Component);
    return FuseLogin2Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/login-2/login-2.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/login-2/login-2.module.ts ***!
  \*****************************************************************************/
/*! exports provided: Login2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login2Module", function() { return Login2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _login_2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-2.component */ "./src/app/main/content/pages/authentication/login-2/login-2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/login-2',
        component: _login_2_component__WEBPACK_IMPORTED_MODULE_4__["FuseLogin2Component"]
    }
];
var Login2Module = /** @class */ (function () {
    function Login2Module() {
    }
    Login2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_2_component__WEBPACK_IMPORTED_MODULE_4__["FuseLogin2Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], Login2Module);
    return Login2Module;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mail-confirm\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <div id=\"mail-confirm-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div id=\"mail-confirm-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\r\n\r\n            <div class=\"logo\">\r\n                <mat-icon class=\"blue-fg s-96\">email</mat-icon>\r\n            </div>\r\n\r\n            <div class=\"title\">Confirm your email address!</div>\r\n\r\n            <div class=\"subtitle\">\r\n                <p>\r\n                    A confirmation e-mail has been sent to <b>example@mymail.com</b>.\r\n                </p>\r\n                <p>\r\n                    Check your inbox and click on the \"Confirm my email\" link to confirm your email address.\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"message\">\r\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Go back to login page</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #mail-confirm {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #mail-confirm #mail-confirm-form-wrapper {\n    -webkit-box-flex: 1;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #mail-confirm #mail-confirm-form-wrapper {\n        padding: 16px; } }\n:host #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form {\n      max-width: 480px;\n      padding: 48px;\n      background: #FFFFFF;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form {\n          padding: 24px;\n          width: 100%; } }\n:host #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form .logo {\n        margin: 0 auto 32px auto; }\n:host #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form .title {\n        font-size: 20px;\n        margin-top: 16px; }\n:host #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form .subtitle {\n        margin: 16px auto;\n        max-width: 300px;\n        color: rgba(0, 0, 0, 0.54);\n        font-size: 15px; }\n:host #mail-confirm #mail-confirm-form-wrapper #mail-confirm-form .message {\n        font-weight: 500;\n        text-align: center;\n        margin-top: 40px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FuseMailConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseMailConfirmComponent", function() { return FuseMailConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseMailConfirmComponent = /** @class */ (function () {
    function FuseMailConfirmComponent(fuseConfig) {
        this.fuseConfig = fuseConfig;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
    }
    FuseMailConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-mail-confirm',
            template: __webpack_require__(/*! ./mail-confirm.component.html */ "./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.html"),
            styles: [__webpack_require__(/*! ./mail-confirm.component.scss */ "./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__["FuseConfigService"]])
    ], FuseMailConfirmComponent);
    return FuseMailConfirmComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.module.ts ***!
  \***************************************************************************************/
/*! exports provided: MailConfirmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailConfirmModule", function() { return MailConfirmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _mail_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mail-confirm.component */ "./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/mail-confirm',
        component: _mail_confirm_component__WEBPACK_IMPORTED_MODULE_4__["FuseMailConfirmComponent"]
    }
];
var MailConfirmModule = /** @class */ (function () {
    function MailConfirmModule() {
    }
    MailConfirmModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _mail_confirm_component__WEBPACK_IMPORTED_MODULE_4__["FuseMailConfirmComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], MailConfirmModule);
    return MailConfirmModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/register-2/register-2.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register-2/register-2.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"register\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n    <div id=\"register-intro\" fxFlex fxHide fxShow.gt-xs>\r\n\r\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\r\n            <img src=\"assets/images/logos/fuse.svg\">\r\n        </div>\r\n\r\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\r\n            Welcome to the FUSE!\r\n        </div>\r\n\r\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\r\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"register-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\r\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\r\n\r\n        <div id=\"register-form\">\r\n\r\n            <div class=\"logo\" fxHide.gt-xs>\r\n                <span>F</span>\r\n            </div>\r\n\r\n            <div class=\"title\">CREATE AN ACCOUNT</div>\r\n\r\n            <form name=\"registerForm\" [formGroup]=\"registerForm\" novalidate>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n                    <mat-error *ngIf=\"registerFormErrors.name.required\">\r\n                        Name is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"registerFormErrors.email.required\">\r\n                        Email is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!registerFormErrors.email.required && registerFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                    <mat-error *ngIf=\"registerFormErrors.password.required\">\r\n                        Password is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\r\n                    <mat-error *ngIf=\"registerFormErrors.passwordConfirm.required\">\r\n                        Password confirmation is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"registerFormErrors.passwordConfirm.passwordsNotMatch\">\r\n                        Passwords must match\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <div class=\"terms\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <mat-checkbox name=\"terms\" aria-label=\"Accept\" required>\r\n                        <span>Accept</span>\r\n                    </mat-checkbox>\r\n                    <a href=\"#\">terms and conditions</a>\r\n                </div>\r\n\r\n                <button mat-raised-button color=\"accent\" class=\"submit-button\" aria-label=\"CREATE AN ACCOUNT\"\r\n                        [disabled]=\"registerForm.invalid\">\r\n                    CREATE AN ACCOUNT\r\n                </button>\r\n\r\n            </form>\r\n\r\n            <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                <span class=\"text\">Already have an account?</span>\r\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login-2'\">Login</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/register-2/register-2.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register-2/register-2.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #register {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #register #register-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #register #register-intro {\n        padding: 128px 64px; } }\n:host #register #register-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #register #register-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #register #register-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #register #register-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #register #register-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #register #register-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #register #register-form-wrapper #register-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #register #register-form-wrapper #register-form {\n          text-align: center;\n          padding: 24px; } }\n:host #register #register-form-wrapper #register-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #039be5; }\n:host #register #register-form-wrapper #register-form .title {\n        font-size: 21px; }\n:host #register #register-form-wrapper #register-form .description {\n        padding-top: 8px; }\n:host #register #register-form-wrapper #register-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #register #register-form-wrapper #register-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #register #register-form-wrapper #register-form form mat-form-field {\n              width: 80%; } }\n:host #register #register-form-wrapper #register-form form mat-checkbox {\n          margin: 0; }\n:host #register #register-form-wrapper #register-form form .terms {\n          margin: 16px 0 32px 0; }\n:host #register #register-form-wrapper #register-form form .terms a {\n            font-size: 16px;\n            margin-left: 4px; }\n:host #register #register-form-wrapper #register-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #register #register-form-wrapper #register-form form .submit-button {\n              width: 80%; } }\n:host #register #register-form-wrapper #register-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        text-align: center;\n        color: rgba(0, 0, 0, 0.54); }\n:host #register #register-form-wrapper #register-form .separator .text {\n          display: -webkit-inline-box;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #register #register-form-wrapper #register-form .separator .text:before, :host #register #register-form-wrapper #register-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #register #register-form-wrapper #register-form .separator .text:before {\n            right: 100%; }\n:host #register #register-form-wrapper #register-form .separator .text:after {\n            left: 100%; }\n:host #register #register-form-wrapper #register-form button.google, :host #register #register-form-wrapper #register-form button.facebook {\n        width: 70%;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n          :host #register #register-form-wrapper #register-form button.google, :host #register #register-form-wrapper #register-form button.facebook {\n            width: 60%; } }\n:host #register #register-form-wrapper #register-form button.google mat-icon, :host #register #register-form-wrapper #register-form button.facebook mat-icon {\n          color: #FFFFFF;\n          margin: 0 8px 0 0; }\n:host #register #register-form-wrapper #register-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #register #register-form-wrapper #register-form button.facebook {\n        background-color: #3f5c9a; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/register-2/register-2.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register-2/register-2.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FuseRegister2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseRegister2Component", function() { return FuseRegister2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseRegister2Component = /** @class */ (function () {
    function FuseRegister2Component(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.registerFormErrors = {
            name: {},
            email: {},
            password: {},
            passwordConfirm: {}
        };
    }
    FuseRegister2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, confirmPassword]]
        });
        this.registerForm.valueChanges.subscribe(function () {
            _this.onRegisterFormValuesChanged();
        });
    };
    FuseRegister2Component.prototype.onRegisterFormValuesChanged = function () {
        for (var field in this.registerFormErrors) {
            if (!this.registerFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.registerFormErrors[field] = {};
            // Get the control
            var control = this.registerForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.registerFormErrors[field] = control.errors;
            }
        }
    };
    FuseRegister2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-register-2',
            template: __webpack_require__(/*! ./register-2.component.html */ "./src/app/main/content/pages/authentication/register-2/register-2.component.html"),
            styles: [__webpack_require__(/*! ./register-2.component.scss */ "./src/app/main/content/pages/authentication/register-2/register-2.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FuseRegister2Component);
    return FuseRegister2Component;
}());

function confirmPassword(control) {
    if (!control.parent || !control) {
        return;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return;
    }
    if (passwordConfirm.value === '') {
        return;
    }
    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}


/***/ }),

/***/ "./src/app/main/content/pages/authentication/register-2/register-2.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register-2/register-2.module.ts ***!
  \***********************************************************************************/
/*! exports provided: Register2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register2Module", function() { return Register2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _register_2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-2.component */ "./src/app/main/content/pages/authentication/register-2/register-2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/register-2',
        component: _register_2_component__WEBPACK_IMPORTED_MODULE_4__["FuseRegister2Component"]
    }
];
var Register2Module = /** @class */ (function () {
    function Register2Module() {
    }
    Register2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _register_2_component__WEBPACK_IMPORTED_MODULE_4__["FuseRegister2Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], Register2Module);
    return Register2Module;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/img-cropper/img-cropper.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register/img-cropper/img-cropper.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">Image Cropper</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-16 m-0\" fusePerfectScrollbar>\r\n\r\n        <image-cropper\r\n            [imageChangedEvent]=\"imageChangedEvent\"\r\n            [maintainAspectRatio]=\"true\"\r\n            [aspectRatio]=\"3/ 3\"\r\n            [resizeToWidth]=\"128\"\r\n            [cropperMinWidth]=\"128\"\r\n            [onlyScaleDown]=\"true\"\r\n            [roundCropper]=\"true\"\r\n            format=\"png\"\r\n            outputType=\"base64\"\r\n            (imageCropped)=\"imageCropped($event)\"\r\n            (imageLoaded)=\"imageLoaded()\"\r\n            (cropperReady)=\"cropperReady()\"\r\n            (loadImageFailed)=\"loadImageFailed()\"\r\n            [style.display]=\"true\"\r\n        ></image-cropper>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <button mat-raised-button\r\n                (click)=\"onCloseDialog()\"\r\n                class=\"save-button mat-accent\"\r\n                aria-label=\"SAVE\">\r\n            SAVE\r\n        </button>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/img-cropper/img-cropper.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register/img-cropper/img-cropper.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-form-field {\n  padding-right: 10px; }\n.contact-form-dialog {\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .contact-form-dialog {\n      width: 100%; } }\n.contact-form-dialog .mat-dialog-container {\n    padding: 0; }\n.contact-form-dialog .mat-dialog-container .mat-toolbar {\n      -webkit-box-flex: 1;\n              flex: 1 0 auto;\n      min-height: initial; }\n.contact-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.contact-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/img-cropper/img-cropper.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register/img-cropper/img-cropper.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: ImgCropperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgCropperComponent", function() { return ImgCropperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ImgCropperComponent = /** @class */ (function () {
    function ImgCropperComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.imageChangedEvent = '';
        this.imageChangedEvent = data.action;
    }
    ImgCropperComponent.prototype.ngOnInit = function () {
    };
    ImgCropperComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
    };
    ImgCropperComponent.prototype.onCloseDialog = function () {
        this.dialogRef.close(this.croppedImage);
    };
    ImgCropperComponent.prototype.imageLoaded = function () {
        console.log('Image loaded');
    };
    ImgCropperComponent.prototype.cropperReady = function () {
        console.log('Cropper ready');
    };
    ImgCropperComponent.prototype.loadImageFailed = function () {
        console.log('Load failed');
    };
    ImgCropperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-img-cropper',
            template: __webpack_require__(/*! ./img-cropper.component.html */ "./src/app/main/content/pages/authentication/register/img-cropper/img-cropper.component.html"),
            styles: [__webpack_require__(/*! ./img-cropper.component.scss */ "./src/app/main/content/pages/authentication/register/img-cropper/img-cropper.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ImgCropperComponent);
    return ImgCropperComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/register.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register/register.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"register\" fxLayout=\"column\" fusePerfectScrollbar>\r\n    <div id=\"register-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div id=\"register-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\r\n            <div class=\"logo\">\r\n                <img src=\"assets/images/logos/logo.png\">\r\n            </div>\r\n            <div class=\"title\">CREATE AN ACCOUNT</div>\r\n            <form name=\"registerForm\" [formGroup]=\"registerForm\">\r\n            <!-- <div class=\"logo\">\r\n                <label for=\"upload-image\">\r\n                    <img src=\"assets/images/circle.png\"  *ngIf=\"!filePreviewPath\">\r\n                    <img [src]=\"croppedImage\" width=\"200\" class=\"cropped-image\" *ngIf=\"filePreviewPath\" />\r\n                </label>\r\n                <input type=\"file\" id=\"upload-image\" ng2FileSelect [uploader]=\"uploader\" formControlName=\"profile\" (change)=\"fileChangeEvent($event)\" (onFileSelected)=\"onFileSelected($event)\"\r\n                accept=\"image/png, image/jpeg\" style=\"display:none\" />\r\n            </div> -->\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"First Name\" name=\"first_name\" formControlName=\"first_name\" required>\r\n                    <mat-error *ngIf=\"registerFormErrors.first_name.required\">\r\n                        First Name is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Last Name\" name=\"last_name\" formControlName=\"last_name\" required>\r\n                    <mat-error *ngIf=\"registerFormErrors.last_name.required\">\r\n                        Last Name is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Company Name\" name=\"company_name\" formControlName=\"company_name\" required>\r\n                    <mat-error *ngIf=\"registerFormErrors.company_name.required\">\r\n                        Company Name is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" name=\"email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"registerFormErrors.email.required\">\r\n                        Email is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!registerFormErrors.email.required && registerFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input  matInput placeholder=\"Country Code\" name=\"country_code\" formControlName=\"country_code\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input  matInput placeholder=\"Mobile No\" name=\"contact_number\" formControlName=\"contact_number\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                    <mat-error *ngIf=\"registerFormErrors.password.required\">\r\n                        Password is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\r\n                    <mat-error *ngIf=\"registerFormErrors.passwordConfirm.required\">\r\n                        Password confirmation is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"registerFormErrors.passwordConfirm.passwordsNotMatch\">\r\n                        Passwords must match\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input  matInput placeholder=\"Address\" name=\"address\" formControlName=\"address\">\r\n                </mat-form-field>\r\n                \r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Website\" name=\"website\" formControlName=\"website\">\r\n                </mat-form-field>\r\n                \r\n                <mat-form-field>\r\n                    <input  matInput placeholder=\"Latitude\" name=\"latitude\" formControlName=\"latitude\">\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input  matInput placeholder=\"Longitude\" name=\"longitude\" formControlName=\"longitude\">\r\n                </mat-form-field>\r\n\r\n                <div class=\"terms-1\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                    <mat-checkbox name=\"terms\" formControlName=\"terms\" (change)=\"checkTerms($event.checked)\" aria-label=\"I read and accept\" required>\r\n                        <span><strong>I agree terms and conditions</strong></span>\r\n                    </mat-checkbox>\r\n                </div>\r\n\r\n                <button mat-raised-button class=\"submit-button\" (click)=\"registerClient(registerForm.value)\" aria-label=\"Sign Up\" \r\n                            [disabled]=\"registerForm.invalid || !agreeTerms\">\r\n                    Create Account\r\n                </button>\r\n\r\n                <div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <span class=\"text\">Already have an account?</span>\r\n                    <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Log In</a>\r\n                </div>\r\n\r\n        </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/register.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register/register.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #register {\n  width: 100%;\n  overflow: auto;\n  background: url('align-background.png') no-repeat;\n  background-size: cover; }\n:host #register #register-form-wrapper {\n    -webkit-box-flex: 1;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #register #register-form-wrapper {\n        padding: 16px; } }\n:host #register #register-form-wrapper #register-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 0px 32px;\n      background: #FFFFFF;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #register #register-form-wrapper #register-form {\n          padding: 24px;\n          width: 100%; } }\n:host #register #register-form-wrapper #register-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #register #register-form-wrapper #register-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n:host #register #register-form-wrapper #register-form form {\n        width: 100%;\n        text-align: left; }\n:host #register #register-form-wrapper #register-form form mat-form-field {\n          width: 100%;\n          padding-bottom: 10px; }\n:host #register #register-form-wrapper #register-form form mat-checkbox {\n          margin: 0; }\n:host #register #register-form-wrapper #register-form form .terms-1 {\n          margin: 16px 0 32px 0;\n          float: left; }\n:host #register #register-form-wrapper #register-form form .terms-1 a {\n            font-size: 16px;\n            margin-left: 4px; }\n:host #register #register-form-wrapper #register-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #register #register-form-wrapper #register-form form .submit-button {\n              width: 90%; } }\n:host #register #register-form-wrapper #register-form .register {\n        margin: 32px auto 24px auto;\n        font-weight: 500; }\n:host #register #register-form-wrapper #register-form .register .text {\n          margin-right: 8px; }\n:host #register #register-form-wrapper #register-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        color: rgba(0, 0, 0, 0.54); }\n:host #register #register-form-wrapper #register-form .separator .text {\n          display: -webkit-inline-box;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #register #register-form-wrapper #register-form .separator .text:before, :host #register #register-form-wrapper #register-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #register #register-form-wrapper #register-form .separator .text:before {\n            right: 100%; }\n:host #register #register-form-wrapper #register-form .separator .text:after {\n            left: 100%; }\n:host #register #register-form-wrapper #register-form button.google, :host #register #register-form-wrapper #register-form button.facebook {\n        width: 192px;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n        :host #register #register-form-wrapper #register-form button {\n          width: 80%; } }\n:host #register #register-form-wrapper #register-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #register #register-form-wrapper #register-form button.facebook {\n        background-color: #3f5c9a; }\n.cropped-image {\n  border-radius: 100%; }\n.submit-button {\n  background-color: #F57D3F;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/register.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register/register.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FuseRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseRegisterComponent", function() { return FuseRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img-cropper/img-cropper.component */ "./src/app/main/content/pages/authentication/register/img-cropper/img-cropper.component.ts");
/* harmony import */ var _terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terms-condition/terms-condition.component */ "./src/app/main/content/pages/authentication/register/terms-condition/terms-condition.component.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../authentication.service */ "./src/app/main/content/pages/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var FuseRegisterComponent = /** @class */ (function () {
    function FuseRegisterComponent(fuseConfig, formBuilder, dialog, sanitizer, authService, apiloader, toast, router) {
        var _this = this;
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.authService = authService;
        this.apiloader = apiloader;
        this.toast = toast;
        this.router = router;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.showCropper = false;
        this.agreeTerms = false;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({
            url: 'http://localhost/img/upload.php',
            disableMultipart: false,
            autoUpload: false
        });
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.registerFormErrors = {
            first_name: {},
            company_name: {},
            last_name: {},
            email: {},
            password: {},
            passwordConfirm: {}
        };
        this.uploader.onAfterAddingFile = function (fileItem) {
            _this.filePreviewPath = _this.sanitizer.bypassSecurityTrustUrl((window.URL.createObjectURL(fileItem._file)));
        };
    }
    FuseRegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            country_code: [''],
            contact_number: [''],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, confirmPassword]],
            address: [''],
            website: [''],
            latitude: [''],
            longitude: [''],
            terms: ['']
        });
        this.registerForm.valueChanges.subscribe(function () {
            _this.onRegisterFormValuesChanged();
        });
    };
    FuseRegisterComponent.prototype.fileChangeEvent = function (event) {
        var _this = this;
        this.imageChangedEvent = event;
        this.dialogRef = this.dialog.open(_img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_7__["ImgCropperComponent"], {
            panelClass: 'contact-form-dialog',
            data: {
                action: event,
                height: '400px'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                _this.filePreviewPath = undefined;
            }
            else {
                _this.croppedImage = response;
            }
        });
    };
    FuseRegisterComponent.prototype.imageLoaded = function () {
        this.showCropper = true;
        // show cropper
    };
    FuseRegisterComponent.prototype.cropperReady = function () {
        // cropper ready
    };
    FuseRegisterComponent.prototype.loadImageFailed = function () {
        // show message
    };
    FuseRegisterComponent.prototype.onFileSelected = function (event) {
        var file = event[0];
    };
    FuseRegisterComponent.prototype.onRegisterFormValuesChanged = function () {
        for (var field in this.registerFormErrors) {
            if (!this.registerFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.registerFormErrors[field] = {};
            // Get the control
            var control = this.registerForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.registerFormErrors[field] = control.errors;
            }
        }
    };
    FuseRegisterComponent.prototype.checkTerms = function (event) {
        var _this = this;
        if (event) {
            this.dialogRef = this.dialog.open(_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_8__["TermsConditionComponent"], {
                panelClass: 'terms-condition-dialog',
                data: {}
            });
            this.dialogRef.afterClosed()
                .subscribe(function (response) {
                if (response == true) {
                    _this.agreeTerms = true;
                }
                else {
                    _this.registerForm.patchValue({ 'terms': false });
                    _this.agreeTerms = false;
                }
            });
        }
        else {
            this.agreeTerms = false;
        }
    };
    FuseRegisterComponent.prototype.registerClient = function (formData) {
        var _this = this;
        this.apiloader.setLoader(true);
        delete formData['passwordConfirm'];
        delete formData['terms'];
        var body = new URLSearchParams();
        /* body.set('profile', this.croppedImage); */
        body.set('password', formData.password);
        body.set('email', formData.email);
        body.set('first_name', formData.first_name);
        body.set('last_name', formData.last_name);
        body.set('company_name', formData.company_name);
        body.set('website', formData.website);
        body.set('latitude', formData.latitude);
        body.set('longitude', formData.longitude);
        this.authService.postData('clients/register', body.toString()).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.toast.showSuccess('Client Registered Successfully!.');
                _this.router.navigate(['/pages/auth/login']);
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    FuseRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/main/content/pages/authentication/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/main/content/pages/authentication/register/register.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_3__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_11__["AuthenticationService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_9__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]])
    ], FuseRegisterComponent);
    return FuseRegisterComponent;
}());

function confirmPassword(control) {
    if (!control.parent || !control) {
        return;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return;
    }
    if (passwordConfirm.value === '') {
        return;
    }
    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}


/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/register.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register/register.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.component */ "./src/app/main/content/pages/authentication/register/register.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img-cropper/img-cropper.component */ "./src/app/main/content/pages/authentication/register/img-cropper/img-cropper.component.ts");
/* harmony import */ var _terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./terms-condition/terms-condition.component */ "./src/app/main/content/pages/authentication/register/terms-condition/terms-condition.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../authentication.service */ "./src/app/main/content/pages/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'auth/register',
        component: _register_component__WEBPACK_IMPORTED_MODULE_4__["FuseRegisterComponent"]
    }
];
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _register_component__WEBPACK_IMPORTED_MODULE_4__["FuseRegisterComponent"],
                _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_7__["ImgCropperComponent"],
                _terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_8__["TermsConditionComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            entryComponents: [_img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_7__["ImgCropperComponent"], _terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_8__["TermsConditionComponent"]],
            providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/terms-condition/terms-condition.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register/terms-condition/terms-condition.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n  <mat-toolbar class=\"mat-accent m-0\">\r\n      <mat-toolbar-row fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span class=\"title dialog-title\">Terms & Condition</span>\r\n          <button mat-icon-button (click)=\"dialogRef.close(false)\" aria-label=\"Close dialog\">\r\n              <mat-icon>close</mat-icon>\r\n          </button>\r\n      </mat-toolbar-row>\r\n  </mat-toolbar>\r\n\r\n  <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\r\n\r\n  </div>\r\n\r\n  <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n      <button mat-raised-button\r\n              (click)=\"dialogRef.close(true)\"\r\n              class=\"save-button mat-accent\"\r\n              aria-label=\"ACCEPT\">\r\n          Accept\r\n      </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/terms-condition/terms-condition.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register/terms-condition/terms-condition.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.terms-condition-dialog {\n  width: 480px; }\n@media screen and (max-width: 599px) {\n    .terms-condition-dialog {\n      width: 100%; } }\n.terms-condition-dialog .mat-dialog-container {\n    padding: 0; }\n.terms-condition-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n.terms-condition-dialog .primary-color-input,\n  .terms-condition-dialog .secondary-color-input {\n    padding: 6px 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/register/terms-condition/terms-condition.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/register/terms-condition/terms-condition.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: TermsConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionComponent", function() { return TermsConditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TermsConditionComponent = /** @class */ (function () {
    function TermsConditionComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TermsConditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-condition',
            template: __webpack_require__(/*! ./terms-condition.component.html */ "./src/app/main/content/pages/authentication/register/terms-condition/terms-condition.component.html"),
            styles: [__webpack_require__(/*! ./terms-condition.component.scss */ "./src/app/main/content/pages/authentication/register/terms-condition/terms-condition.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], TermsConditionComponent);
    return TermsConditionComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"reset-password\" fxLayout=\"row\" fxLayoutAlign=\"start\">\r\n\r\n    <div id=\"reset-password-intro\" fxFlex fxHide fxShow.gt-xs>\r\n\r\n        <div class=\"logo\" *fuseIfOnDom [@animate]=\"{value:'*',params:{scale:'0.2'}}\">\r\n            <img src=\"assets/images/logos/fuse.svg\">\r\n        </div>\r\n\r\n        <div class=\"title\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',y:'25px'}}\">\r\n            Welcome to the FUSE!\r\n        </div>\r\n\r\n        <div class=\"description\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',y:'25px'}}\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ullamcorper nisl erat,\r\n            vel convallis elit fermentum pellentesque. Sed mollis velit facilisis facilisis viverra.\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"reset-password-form-wrapper\" fusePerfectScrollbar *fuseIfOnDom\r\n         [@animate]=\"{value:'*',params:{delay:'300ms',x:'100%'}}\">\r\n\r\n        <div id=\"reset-password-form\">\r\n\r\n            <div class=\"logo\" fxHide.gt-xs>\r\n                <span>F</span>\r\n            </div>\r\n\r\n            <div class=\"title\">RESET YOUR PASSWORD</div>\r\n\r\n            <form name=\"resetPasswordForm\" [formGroup]=\"resetPasswordForm\" novalidate>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"resetPasswordFormErrors.email.required\">\r\n                        Email is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!resetPasswordFormErrors.email.required && resetPasswordFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                    <mat-error *ngIf=\"resetPasswordFormErrors.password.required\">\r\n                        Password is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\r\n                    <mat-error *ngIf=\"resetPasswordFormErrors.passwordConfirm.required\">\r\n                        Password confirmation is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"resetPasswordFormErrors.passwordConfirm.passwordsNotMatch\">\r\n                        Passwords must match\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <button mat-raised-button class=\"submit-button\" color=\"accent\"\r\n                        aria-label=\"RESET MY PASSWORD\" [disabled]=\"resetPasswordForm.invalid\">\r\n                    RESET MY PASSWORD\r\n                </button>\r\n            </form>\r\n\r\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login-2'\">Go back to login</a>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #reset-password {\n  width: 100%;\n  overflow: hidden;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #reset-password #reset-password-intro {\n    padding: 128px;\n    color: white; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #reset-password #reset-password-intro {\n        padding: 128px 64px; } }\n:host #reset-password #reset-password-intro .logo {\n      width: 128px;\n      margin-bottom: 32px; }\n:host #reset-password #reset-password-intro .title {\n      font-size: 42px;\n      font-weight: 300;\n      line-height: 1; }\n:host #reset-password #reset-password-intro .description {\n      padding-top: 16px;\n      font-size: 14px;\n      max-width: 600px;\n      color: rgba(255, 255, 255, 0.54); }\n:host #reset-password #reset-password-form-wrapper {\n    overflow: auto;\n    width: 400px;\n    min-width: 400px;\n    max-width: 400px;\n    background: #FFFFFF;\n    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #reset-password #reset-password-form-wrapper {\n        width: 360px;\n        min-width: 360px;\n        max-width: 360px; } }\n@media screen and (max-width: 599px) {\n      :host #reset-password #reset-password-form-wrapper {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form {\n      padding: 128px 48px 48px 48px; }\n@media screen and (max-width: 599px) {\n        :host #reset-password #reset-password-form-wrapper #reset-password-form {\n          text-align: center;\n          padding: 24px; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .logo {\n        width: 128px;\n        height: 128px;\n        line-height: 128px;\n        font-size: 86px;\n        font-weight: 500;\n        text-align: center;\n        margin: 32px auto;\n        color: #FFFFFF;\n        border-radius: 2px;\n        background: #039be5; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .title {\n        font-size: 21px; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .description {\n        padding-top: 8px; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form {\n        width: 100%;\n        padding-top: 32px; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form mat-form-field {\n          width: 100%; }\n@media screen and (max-width: 599px) {\n            :host #reset-password #reset-password-form-wrapper #reset-password-form form mat-form-field {\n              width: 80%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n          width: 100%;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n              width: 80%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .login .text {\n          margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: FuseResetPassword2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseResetPassword2Component", function() { return FuseResetPassword2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseResetPassword2Component = /** @class */ (function () {
    function FuseResetPassword2Component(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.resetPasswordFormErrors = {
            email: {},
            password: {},
            passwordConfirm: {}
        };
    }
    FuseResetPassword2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, confirmPassword]]
        });
        this.resetPasswordForm.valueChanges.subscribe(function () {
            _this.onResetPasswordFormValuesChanged();
        });
    };
    FuseResetPassword2Component.prototype.onResetPasswordFormValuesChanged = function () {
        for (var field in this.resetPasswordFormErrors) {
            if (!this.resetPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.resetPasswordFormErrors[field] = {};
            // Get the control
            var control = this.resetPasswordForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.resetPasswordFormErrors[field] = control.errors;
            }
        }
    };
    FuseResetPassword2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-reset-password-2',
            template: __webpack_require__(/*! ./reset-password-2.component.html */ "./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.html"),
            styles: [__webpack_require__(/*! ./reset-password-2.component.scss */ "./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FuseResetPassword2Component);
    return FuseResetPassword2Component;
}());

function confirmPassword(control) {
    if (!control.parent || !control) {
        return;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return;
    }
    if (passwordConfirm.value === '') {
        return;
    }
    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}


/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ResetPassword2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassword2Module", function() { return ResetPassword2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _reset_password_2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-password-2.component */ "./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'auth/reset-password-2',
        component: _reset_password_2_component__WEBPACK_IMPORTED_MODULE_4__["FuseResetPassword2Component"]
    }
];
var ResetPassword2Module = /** @class */ (function () {
    function ResetPassword2Module() {
    }
    ResetPassword2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _reset_password_2_component__WEBPACK_IMPORTED_MODULE_4__["FuseResetPassword2Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], ResetPassword2Module);
    return ResetPassword2Module;
}());



/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password/reset-password.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/reset-password/reset-password.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"reset-password\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <div id=\"reset-password-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\r\n         *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\r\n\r\n        <div id=\"reset-password-form\">\r\n\r\n            <div class=\"logo\">\r\n                <img src=\"assets/images/logos/logo.png\">\r\n            </div>\r\n\r\n            <div class=\"title\">RESET YOUR PASSWORD</div>\r\n\r\n            <form name=\"resetPasswordForm\" [formGroup]=\"resetPasswordForm\" novalidate>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"resetPasswordFormErrors.email.required\">\r\n                        Email is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!resetPasswordFormErrors.email.required && resetPasswordFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\">\r\n                    <mat-error *ngIf=\"resetPasswordFormErrors.password.required\">\r\n                        Password is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"password\" placeholder=\"Password (Confirm)\" formControlName=\"passwordConfirm\">\r\n                    <mat-error *ngIf=\"resetPasswordFormErrors.passwordConfirm.required\">\r\n                        Password confirmation is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"resetPasswordFormErrors.passwordConfirm.passwordsNotMatch\">\r\n                        Passwords must match\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <button mat-raised-button class=\"submit-button\" color=\"accent\" (click)=\"onSubmit(resetPasswordForm.value)\"\r\n                        aria-label=\"RESET MY PASSWORD\" [disabled]=\"resetPasswordForm.invalid\">\r\n                    RESET MY PASSWORD\r\n                </button>\r\n            </form>\r\n\r\n            <div class=\"login\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <a class=\"link\" [routerLink]=\"'/pages/auth/login'\">Go back to login</a>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password/reset-password.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/reset-password/reset-password.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #reset-password {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/align-background.png\") no-repeat;\n  background-size: cover; }\n:host #reset-password #reset-password-form-wrapper {\n    -webkit-box-flex: 1;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #reset-password #reset-password-form-wrapper {\n        padding: 16px; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form {\n      width: 400px;\n      max-width: 400px;\n      padding: 32px;\n      text-align: center;\n      background: #FFFFFF;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #reset-password #reset-password-form-wrapper #reset-password-form {\n          padding: 24px;\n          width: 100%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form {\n        width: 100%;\n        text-align: left; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form mat-form-field {\n          width: 100%; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #reset-password #reset-password-form-wrapper #reset-password-form form .submit-button {\n              width: 90%; } }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .login {\n        margin: 32px auto 24px auto;\n        width: 250px;\n        font-weight: 500; }\n:host #reset-password #reset-password-form-wrapper #reset-password-form .login .text {\n          margin-right: 8px; }\n.submit-button {\n  background-color: #F57D3F;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password/reset-password.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/reset-password/reset-password.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: FuseResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseResetPasswordComponent", function() { return FuseResetPasswordComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../authentication.service */ "./src/app/main/content/pages/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FuseResetPasswordComponent = /** @class */ (function () {
    function FuseResetPasswordComponent(fuseConfig, formBuilder, apiloader, toast, router, authService) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.apiloader = apiloader;
        this.toast = toast;
        this.router = router;
        this.authService = authService;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.resetPasswordFormErrors = {
            email: {},
            password: {},
            passwordConfirm: {}
        };
    }
    FuseResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPasswordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, confirmPassword]]
        });
        this.resetPasswordForm.valueChanges.subscribe(function () {
            _this.onResetPasswordFormValuesChanged();
        });
    };
    FuseResetPasswordComponent.prototype.onResetPasswordFormValuesChanged = function () {
        for (var field in this.resetPasswordFormErrors) {
            if (!this.resetPasswordFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.resetPasswordFormErrors[field] = {};
            // Get the control
            var control = this.resetPasswordForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.resetPasswordFormErrors[field] = control.errors;
            }
        }
    };
    FuseResetPasswordComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.apiloader.setLoader(true);
        var body = new URLSearchParams();
        body.set('email', formData.email);
        body.set('password', formData.password);
        this.authService.postData('clients/reset-password', body.toString(), 'reset').subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.toast.showSuccess('Your Password Reset Successfully!');
                _this.router.navigate(['/']);
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    FuseResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'fuse-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/main/content/pages/authentication/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.scss */ "./src/app/main/content/pages/authentication/reset-password/reset-password.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_1__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]])
    ], FuseResetPasswordComponent);
    return FuseResetPasswordComponent;
}());

function confirmPassword(control) {
    if (!control.parent || !control) {
        return;
    }
    var password = control.parent.get('password');
    var passwordConfirm = control.parent.get('passwordConfirm');
    if (!password || !passwordConfirm) {
        return;
    }
    if (passwordConfirm.value === '') {
        return;
    }
    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}


/***/ }),

/***/ "./src/app/main/content/pages/authentication/reset-password/reset-password.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/pages/authentication/reset-password/reset-password.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ResetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordModule", function() { return ResetPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reset-password.component */ "./src/app/main/content/pages/authentication/reset-password/reset-password.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ "./src/app/main/content/pages/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'auth/reset-password',
        component: _reset_password_component__WEBPACK_IMPORTED_MODULE_4__["FuseResetPasswordComponent"]
    }
];
var ResetPasswordModule = /** @class */ (function () {
    function ResetPasswordModule() {
    }
    ResetPasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _reset_password_component__WEBPACK_IMPORTED_MODULE_4__["FuseResetPasswordComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            providers: [_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]]
        })
    ], ResetPasswordModule);
    return ResetPasswordModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/coming-soon/coming-soon.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/coming-soon/coming-soon.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"coming-soon\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <div id=\"coming-soon-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div id=\"coming-soon-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\r\n\r\n            <div class=\"top\">\r\n\r\n                <div class=\"logo\">\r\n                    <img src=\"assets/images/logos/fuse.svg\">\r\n                </div>\r\n\r\n                <div class=\"title\">Hey! Thank you for checking out our app.</div>\r\n                <div class=\"subtitle\">It’s not quite ready yet, but we are working hard and it will be ready in\r\n                    approximately:\r\n                </div>\r\n\r\n                <fuse-countdown eventDate=\"2019-07-28\"></fuse-countdown>\r\n\r\n            </div>\r\n\r\n            <form name=\"comingSoonForm\" [formGroup]=\"comingSoonForm\" novalidate>\r\n\r\n                <div class=\"message\">\r\n                    If you would like to be notified when the app is ready, you can subscribe to our e-mail list.\r\n                </div>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"comingSoonFormErrors.email.required\">\r\n                        Email is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!comingSoonFormErrors.email.required && comingSoonFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <button mat-raised-button color=\"accent\" class=\"subscribe-button\" aria-label=\"SUBSCRIBE\"\r\n                        [disabled]=\"comingSoonForm.invalid\">\r\n                    SUBSCRIBE\r\n                </button>\r\n\r\n            </form>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/coming-soon/coming-soon.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/coming-soon/coming-soon.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #coming-soon {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #coming-soon #coming-soon-form-wrapper {\n    -webkit-box-flex: 1;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #coming-soon #coming-soon-form-wrapper {\n        padding: 16px; } }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form {\n      width: 384px;\n      max-width: 384px;\n      background: #FFFFFF;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #coming-soon #coming-soon-form-wrapper #coming-soon-form {\n          width: 100%; } }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form .top {\n        width: 100%;\n        padding: 32px; }\n@media screen and (max-width: 599px) {\n          :host #coming-soon #coming-soon-form-wrapper #coming-soon-form .top {\n            padding: 24px; } }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form .top .logo {\n          width: 128px;\n          margin: 32px auto; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form .top .title {\n          font-size: 17px;\n          margin-top: 16px; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form .top .subtitle {\n          margin: 16px auto 0 auto;\n          text-align: center;\n          max-width: 300px;\n          color: rgba(0, 0, 0, 0.54);\n          font-size: 15px; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form .top fuse-countdown {\n          margin: 48px auto 16px auto; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form form {\n        width: 100%;\n        padding: 32px;\n        text-align: center;\n        background: whitesmoke; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form form .message {\n          font-weight: 500;\n          margin: 8px auto 32px auto; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form form mat-form-field {\n          width: 320px;\n          margin: 8px auto 16px auto; }\n:host #coming-soon #coming-soon-form-wrapper #coming-soon-form form .subscribe-button {\n          width: 220px;\n          margin: 16px auto; }\n@media screen and (max-width: 599px) {\n            :host #coming-soon #coming-soon-form-wrapper #coming-soon-form form .subscribe-button {\n              width: 90%; } }\n"

/***/ }),

/***/ "./src/app/main/content/pages/coming-soon/coming-soon.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/pages/coming-soon/coming-soon.component.ts ***!
  \*************************************************************************/
/*! exports provided: FuseComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseComingSoonComponent", function() { return FuseComingSoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseComingSoonComponent = /** @class */ (function () {
    function FuseComingSoonComponent(fuseConfig, formBuilder) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.comingSoonFormErrors = {
            email: {}
        };
    }
    FuseComingSoonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comingSoonForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
        this.comingSoonForm.valueChanges.subscribe(function () {
            _this.onRegisterFormValuesChanged();
        });
    };
    FuseComingSoonComponent.prototype.onRegisterFormValuesChanged = function () {
        for (var field in this.comingSoonFormErrors) {
            if (!this.comingSoonFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.comingSoonFormErrors[field] = {};
            // Get the control
            var control = this.comingSoonForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.comingSoonFormErrors[field] = control.errors;
            }
        }
    };
    FuseComingSoonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-coming-soon',
            template: __webpack_require__(/*! ./coming-soon.component.html */ "./src/app/main/content/pages/coming-soon/coming-soon.component.html"),
            styles: [__webpack_require__(/*! ./coming-soon.component.scss */ "./src/app/main/content/pages/coming-soon/coming-soon.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_2__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FuseComingSoonComponent);
    return FuseComingSoonComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/coming-soon/coming-soon.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/content/pages/coming-soon/coming-soon.module.ts ***!
  \**********************************************************************/
/*! exports provided: ComingSoonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonModule", function() { return ComingSoonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _coming_soon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coming-soon.component */ "./src/app/main/content/pages/coming-soon/coming-soon.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'coming-soon',
        component: _coming_soon_component__WEBPACK_IMPORTED_MODULE_5__["FuseComingSoonComponent"]
    }
];
var ComingSoonModule = /** @class */ (function () {
    function ComingSoonModule() {
    }
    ComingSoonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _coming_soon_component__WEBPACK_IMPORTED_MODULE_5__["FuseComingSoonComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_4__["FuseCountdownModule"]
            ]
        })
    ], ComingSoonModule);
    return ComingSoonModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/errors/404/error-404.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/content/pages/errors/404/error-404.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"error-404\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n    <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div class=\"error-code\">404</div>\r\n\r\n        <div class=\"message\">Sorry but we could not find the page you are looking for</div>\r\n\r\n        <div class=\"search\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"icon s-24\">search</mat-icon>\r\n            <input placeholder=\"Search for anything\" fxFlex>\r\n        </div>\r\n\r\n        <a class=\"back-link\" [routerLink]=\"'/apps/dashboards/project'\">Go back to dashboard</a>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/errors/404/error-404.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/content/pages/errors/404/error-404.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #error-404 {\n  width: 100%;\n  overflow: auto; }\n:host #error-404 .content {\n    width: 90%;\n    max-width: 512px !important; }\n:host #error-404 .content .error-code {\n      font-size: 112px;\n      text-align: center;\n      line-height: 1;\n      margin-bottom: 16px;\n      font-weight: 500; }\n:host #error-404 .content .message {\n      font-size: 24px;\n      text-align: center;\n      color: rgba(0, 0, 0, 0.54); }\n:host #error-404 .content .search {\n      width: 100%;\n      height: 56px;\n      line-height: 56px;\n      margin: 48px auto 16px auto;\n      padding: 16px;\n      background: #FFFFFF;\n      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n:host #error-404 .content .search input {\n        padding: 0 0 0 16px; }\n:host #error-404 .content .back-link {\n      font-size: 15px;\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/errors/404/error-404.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/content/pages/errors/404/error-404.component.ts ***!
  \**********************************************************************/
/*! exports provided: FuseError404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseError404Component", function() { return FuseError404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseError404Component = /** @class */ (function () {
    function FuseError404Component(fuseConfig) {
        this.fuseConfig = fuseConfig;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
    }
    FuseError404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-error-404',
            template: __webpack_require__(/*! ./error-404.component.html */ "./src/app/main/content/pages/errors/404/error-404.component.html"),
            styles: [__webpack_require__(/*! ./error-404.component.scss */ "./src/app/main/content/pages/errors/404/error-404.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__["FuseConfigService"]])
    ], FuseError404Component);
    return FuseError404Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/errors/404/error-404.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/content/pages/errors/404/error-404.module.ts ***!
  \*******************************************************************/
/*! exports provided: Error404Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Module", function() { return Error404Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-404.component */ "./src/app/main/content/pages/errors/404/error-404.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'errors/error-404',
        component: _error_404_component__WEBPACK_IMPORTED_MODULE_4__["FuseError404Component"]
    }
];
var Error404Module = /** @class */ (function () {
    function Error404Module() {
    }
    Error404Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _error_404_component__WEBPACK_IMPORTED_MODULE_4__["FuseError404Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], Error404Module);
    return Error404Module;
}());



/***/ }),

/***/ "./src/app/main/content/pages/errors/500/error-500.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main/content/pages/errors/500/error-500.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"error-500\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n    <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div class=\"error-code\">500</div>\r\n\r\n        <div class=\"message\">Well, you broke the internet!</div>\r\n\r\n        <div class=\"sub-message\">\r\n            Just kidding, looks like we have an internal issue, please try again in couple minutes\r\n        </div>\r\n\r\n        <a class=\"report-link\" [routerLink]=\"'/apps/dashboards/project'\">Report this problem</a>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/errors/500/error-500.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/main/content/pages/errors/500/error-500.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #error-500 {\n  width: 100%;\n  overflow: auto; }\n:host #error-500 .content {\n    width: 90%;\n    max-width: 512px !important; }\n:host #error-500 .content .error-code {\n      font-size: 112px;\n      line-height: 1;\n      text-align: center;\n      margin-bottom: 16px;\n      font-weight: 500; }\n:host #error-500 .content .message {\n      font-size: 24px;\n      text-align: center;\n      color: rgba(0, 0, 0, 0.54); }\n:host #error-500 .content .sub-message {\n      font-size: 17px;\n      text-align: center;\n      color: rgba(0, 0, 0, 0.54);\n      margin: 16px auto 48px auto; }\n:host #error-500 .content .report-link {\n      text-align: center;\n      font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/errors/500/error-500.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/content/pages/errors/500/error-500.component.ts ***!
  \**********************************************************************/
/*! exports provided: FuseError500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseError500Component", function() { return FuseError500Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseError500Component = /** @class */ (function () {
    function FuseError500Component(fuseConfig) {
        this.fuseConfig = fuseConfig;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
    }
    FuseError500Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-error-500',
            template: __webpack_require__(/*! ./error-500.component.html */ "./src/app/main/content/pages/errors/500/error-500.component.html"),
            styles: [__webpack_require__(/*! ./error-500.component.scss */ "./src/app/main/content/pages/errors/500/error-500.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__["FuseConfigService"]])
    ], FuseError500Component);
    return FuseError500Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/errors/500/error-500.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/content/pages/errors/500/error-500.module.ts ***!
  \*******************************************************************/
/*! exports provided: Error500Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Module", function() { return Error500Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _error_500_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-500.component */ "./src/app/main/content/pages/errors/500/error-500.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'errors/error-500',
        component: _error_500_component__WEBPACK_IMPORTED_MODULE_3__["FuseError500Component"]
    }
];
var Error500Module = /** @class */ (function () {
    function Error500Module() {
    }
    Error500Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _error_500_component__WEBPACK_IMPORTED_MODULE_3__["FuseError500Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]
            ]
        })
    ], Error500Module);
    return Error500Module;
}());



/***/ }),

/***/ "./src/app/main/content/pages/faq/faq.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/content/pages/faq/faq.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"faq\" class=\"page-layout simple\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div class=\"hero-text mb-32\">\r\n            <h1>We're here to help</h1>\r\n            <h3>Frequently asked questions</h3>\r\n        </div>\r\n\r\n        <div class=\"search mat-white-bg mat-elevation-z7\" flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon>search</mat-icon>\r\n            <input [formControl]=\"searchInput\" placeholder=\"Search in faqs..\" fxFlex>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content px-16 py-24 px-sm-24 py-sm-32\">\r\n\r\n        <mat-accordion class=\"faqs-accordion\">\r\n\r\n            <mat-expansion-panel *ngFor=\"let faq of faqsFiltered; let i = index\" [expanded]=\"step === i\" (opened)=\"setStep(i)\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title flex fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <mat-icon class=\"mr-8\">help_outline</mat-icon>\r\n                        {{faq.question}}\r\n                    </mat-panel-title>\r\n                </mat-expansion-panel-header>\r\n                {{faq.answer}}\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/faq/faq.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/content/pages/faq/faq.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .header {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  height: 360px;\n  max-height: 360px;\n  background: #1A237E;\n  background: -webkit-gradient(linear, left top, right top, from(#0E2A3B), to(#34306B));\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media screen and (max-width: 599px) {\n    :host .header {\n      height: 240px;\n      padding: 16px; } }\n:host .header .hero-text {\n    margin-bottom: 32px; }\n:host .header .hero-text h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 400;\n      letter-spacing: 0.01em;\n      text-align: center;\n      margin-top: 0;\n      margin-bottom: 16px; }\n@media (max-width: 599px) {\n        :host .header .hero-text h1 {\n          font-size: 24px; } }\n:host .header .hero-text h3 {\n      color: rgba(255, 255, 255, 0.75);\n      max-width: 480px;\n      text-align: center;\n      font-weight: 300;\n      letter-spacing: 0.075em;\n      margin: 0; }\n@media (max-width: 599px) {\n        :host .header .hero-text h3 {\n          font-size: 14px; } }\n:host .header .search {\n    width: 100%;\n    max-width: 640px;\n    height: 56px;\n    line-height: 56px;\n    padding: 18px; }\n:host .header .search input {\n      height: 56px;\n      padding-left: 16px;\n      color: rgba(0, 0, 0, 0.54);\n      border: none;\n      outline: none; }\n:host .content {\n  max-width: 960px;\n  width: 100%;\n  margin: 0 auto; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/faq/faq.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/content/pages/faq/faq.component.ts ***!
  \*********************************************************/
/*! exports provided: FuseFaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseFaqComponent", function() { return FuseFaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var _faq_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq.service */ "./src/app/main/content/pages/faq/faq.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuseFaqComponent = /** @class */ (function () {
    function FuseFaqComponent(faqService) {
        this.faqService = faqService;
        this.step = 0;
        this.searchInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    }
    FuseFaqComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onFaqsChanged =
            this.faqService.onFaqsChanged
                .subscribe(function (response) {
                _this.faqs = response;
                _this.faqsFiltered = response;
            });
        this.searchInput.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (searchText) {
            _this.faqsFiltered = _fuse_utils__WEBPACK_IMPORTED_MODULE_3__["FuseUtils"].filterArrayByString(_this.faqs, searchText);
        });
    };
    FuseFaqComponent.prototype.ngOnDestroy = function () {
        this.onFaqsChanged.unsubscribe();
    };
    FuseFaqComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    FuseFaqComponent.prototype.nextStep = function () {
        this.step++;
    };
    FuseFaqComponent.prototype.prevStep = function () {
        this.step--;
    };
    FuseFaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/main/content/pages/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.scss */ "./src/app/main/content/pages/faq/faq.component.scss")]
        }),
        __metadata("design:paramtypes", [_faq_service__WEBPACK_IMPORTED_MODULE_4__["FaqService"]])
    ], FuseFaqComponent);
    return FuseFaqComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/faq/faq.module.ts":
/*!******************************************************!*\
  !*** ./src/app/main/content/pages/faq/faq.module.ts ***!
  \******************************************************/
/*! exports provided: FaqModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqModule", function() { return FaqModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _faq_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq.service */ "./src/app/main/content/pages/faq/faq.service.ts");
/* harmony import */ var _faq_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq.component */ "./src/app/main/content/pages/faq/faq.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'faq',
        component: _faq_component__WEBPACK_IMPORTED_MODULE_5__["FuseFaqComponent"],
        resolve: {
            faq: _faq_service__WEBPACK_IMPORTED_MODULE_4__["FaqService"]
        }
    }
];
var FaqModule = /** @class */ (function () {
    function FaqModule() {
    }
    FaqModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _faq_component__WEBPACK_IMPORTED_MODULE_5__["FuseFaqComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            providers: [
                _faq_service__WEBPACK_IMPORTED_MODULE_4__["FaqService"]
            ]
        })
    ], FaqModule);
    return FaqModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/faq/faq.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/main/content/pages/faq/faq.service.ts ***!
  \*******************************************************/
/*! exports provided: FaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqService", function() { return FaqService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaqService = /** @class */ (function () {
    function FaqService(http) {
        this.http = http;
        this.onFaqsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    FaqService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getFaqs()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get faqs
     */
    FaqService.prototype.getFaqs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/faq')
                .subscribe(function (response) {
                _this.faqs = response;
                _this.onFaqsChanged.next(_this.faqs);
                resolve(_this.faqs);
            }, reject);
        });
    };
    FaqService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FaqService);
    return FaqService;
}());



/***/ }),

/***/ "./src/app/main/content/pages/invoices/compact/compact.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/pages/invoices/compact/compact.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"invoice\" class=\"compact page-layout blank\" fxLayout=\"row\" fusePerfectScrollbar>\r\n\r\n    <div class=\"invoice-container\">\r\n\r\n        <!-- INVOICE -->\r\n        <div class=\"card\">\r\n\r\n            <div class=\"header\">\r\n                <div class=\"invoice-date\">{{invoice.date}}</div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n                    <div class=\"client\">\r\n                        <div class=\"invoice-number\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <span class=\"title\">INVOICE</span>\r\n                            <span class=\"number\">{{invoice.number}}</span>\r\n                        </div>\r\n\r\n                        <div class=\"due-date\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <span class=\"title\">DUE DATE</span>\r\n                            <span class=\"date\">{{invoice.dueDate}}</span>\r\n                        </div>\r\n\r\n                        <div class=\"info\">\r\n                            <div class=\"title\">{{invoice.client.title}}</div>\r\n                            <div *ngIf=\"invoice?.client.address\" class=\"address\">{{invoice.client.address}}</div>\r\n                            <div *ngIf=\"invoice?.client.phone\" class=\"phone\">{{invoice.client.phone}}</div>\r\n                            <div *ngIf=\"invoice?.client.email\" class=\"email\">{{invoice.client.email}}</div>\r\n                            <div *ngIf=\"invoice?.client.website\" class=\"website\">{{invoice.client.website}}</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"issuer mat-accent-bg\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <div class=\"logo\">\r\n                            <img src=\"assets/images/logos/fuse.svg\">\r\n                        </div>\r\n\r\n                        <div class=\"info\">\r\n                            <div class=\"title\">{{invoice.from.title}}</div>\r\n                            <div *ngIf=\"invoice?.from.address\" class=\"address\">{{invoice.from.address}}</div>\r\n                            <div *ngIf=\"invoice?.from.phone\" class=\"phone\">{{invoice.from.phone}}</div>\r\n                            <div *ngIf=\"invoice?.from.email\" class=\"email\">{{invoice.from.email}}</div>\r\n                            <div *ngIf=\"invoice?.from.website\" class=\"website\">{{invoice.from.website}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"content\">\r\n                <table class=\"simple invoice-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>SERVICE</th>\r\n                            <th>UNIT</th>\r\n                            <th class=\"text-right\">UNIT PRICE</th>\r\n                            <th class=\"text-right\">QUANTITY</th>\r\n                            <th class=\"text-right\">TOTAL</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let service of invoice.services\">\r\n                            <td>\r\n                                <div class=\"title\">\r\n                                    {{service.title}}\r\n                                </div>\r\n                            </td>\r\n                            <td>\r\n                                {{service.unit}}\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                {{service.unitPrice | currency:'USD':'symbol'}}\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                {{service.quantity}}\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                {{service.total | currency:'USD':'symbol'}}\r\n                            </td>\r\n                        </tr>\r\n                        <!-- Double the invoice data for demo purposes -->\r\n                        <tr *ngFor=\"let service of invoice.services\">\r\n                            <td>\r\n                                <div class=\"title\">\r\n                                    {{service.title}}\r\n                                </div>\r\n                            </td>\r\n                            <td>\r\n                                {{service.unit}}\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                {{service.unitPrice | currency:'USD':'symbol'}}\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                {{service.quantity}}\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                {{service.total | currency:'USD':'symbol'}}\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n                <table class=\"simple invoice-table-footer\">\r\n                    <tbody>\r\n                        <tr class=\"subtotal\">\r\n                            <td>SUBTOTAL</td>\r\n                            <td>{{invoice.subtotal | currency:'USD':'symbol'}}</td>\r\n                        </tr>\r\n                        <tr class=\"tax\">\r\n                            <td>TAX</td>\r\n                            <td>{{invoice.tax | currency:'USD':'symbol'}}</td>\r\n                        </tr>\r\n                        <tr class=\"discount\">\r\n                            <td>DISCOUNT</td>\r\n                            <td>-{{invoice.discount | currency:'USD':'symbol'}}</td>\r\n                        </tr>\r\n                        <tr class=\"total\">\r\n                            <td>TOTAL</td>\r\n                            <td>{{invoice.total | currency:'USD':'symbol'}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <div class=\"note\">Please pay within 15 days. Thank you for your business.</div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <div class=\"logo\">\r\n                        <img src=\"assets/images/logos/fuse.svg\">\r\n                    </div>\r\n                    <div class=\"small-note\">\r\n                        In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque\r\n                        scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit\r\n                        quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia.\r\n                        Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero\r\n                        tincidunt lacinia et eget eros.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!--\r\n\r\n            Use the following elements to add breaks to your pages. This will make sure that the section in between\r\n            these elements will be printed on a new page. The following two elements must be used before and after the\r\n            page content that you want to show as a new page. So, you have to wrap your content with them.\r\n\r\n            Elements:\r\n            ---------\r\n            <div class=\"page-break-after\"></div>\r\n            <div class=\"page-break-before\"></div>\r\n\r\n            -->\r\n\r\n            <!--\r\n\r\n            Example:\r\n            --------\r\n\r\n            Initial page content!\r\n\r\n            <div class=\"page-break-after\"></div>\r\n            <div class=\"page-break-before\"></div>\r\n\r\n            This is the second page!\r\n\r\n            <div class=\"page-break-after\"></div>\r\n            <div class=\"page-break-before\"></div>\r\n\r\n            This is the third page!\r\n\r\n            <div class=\"page-break-after\"></div>\r\n            <div class=\"page-break-before\"></div>\r\n\r\n            -->\r\n\r\n        </div>\r\n        <!-- / INVOICE -->\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/invoices/compact/compact.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/pages/invoices/compact/compact.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  /* PRINT STYLES */ }\n:host #invoice.compact {\n    padding: 0;\n    overflow: auto; }\n:host #invoice.compact .invoice-container {\n      padding: 64px; }\n:host #invoice.compact .invoice-container .card {\n        width: 1020px;\n        min-width: 1020px;\n        max-width: 1020px;\n        padding: 64px 88px;\n        overflow: hidden;\n        background: #FFFFFF;\n        box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n:host #invoice.compact .invoice-container .card .header .invoice-date {\n          font-size: 14px;\n          color: rgba(0, 0, 0, 0.54);\n          margin-bottom: 32px; }\n:host #invoice.compact .invoice-container .card .header .client .invoice-number {\n          font-size: 18px;\n          padding-bottom: 2px; }\n:host #invoice.compact .invoice-container .card .header .client .invoice-number .title {\n            color: rgba(0, 0, 0, 0.54); }\n:host #invoice.compact .invoice-container .card .header .client .invoice-number .number {\n            padding-left: 6px; }\n:host #invoice.compact .invoice-container .card .header .client .due-date {\n          font-size: 18px;\n          padding-bottom: 16px; }\n:host #invoice.compact .invoice-container .card .header .client .due-date .title {\n            color: rgba(0, 0, 0, 0.54); }\n:host #invoice.compact .invoice-container .card .header .client .due-date .date {\n            padding-left: 6px; }\n:host #invoice.compact .invoice-container .card .header .client .info {\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 22px; }\n:host #invoice.compact .invoice-container .card .header .issuer {\n          margin-right: -88px;\n          padding-right: 66px; }\n:host #invoice.compact .invoice-container .card .header .issuer .logo {\n            width: 96px;\n            padding: 0 8px;\n            border-right: 1px solid rgba(255, 255, 255, 0.7); }\n:host #invoice.compact .invoice-container .card .header .issuer .info {\n            padding: 16px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table {\n          margin-top: 64px;\n          font-size: 15px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n            padding-left: 8px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n            padding-right: 8px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n            padding-left: 8px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n            padding-right: 8px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table .title {\n            font-size: 16px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table .detail {\n            margin-top: 8px;\n            font-size: 12px;\n            color: rgba(0, 0, 0, 0.54);\n            max-width: 360px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table-footer {\n          margin: 32px 0 72px 0; }\n:host #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n            text-align: right;\n            font-size: 16px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            border-bottom: none;\n            padding: 4px 8px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n              text-align: left; }\n:host #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n            padding-bottom: 32px; }\n:host #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n            padding: 24px 8px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12);\n            font-size: 35px;\n            font-weight: 300;\n            color: black; }\n:host #invoice.compact .invoice-container .card .footer .note {\n          font-size: 15px;\n          font-weight: 500;\n          margin-bottom: 24px; }\n:host #invoice.compact .invoice-container .card .footer .logo, :host #invoice.compact .invoice-container .card .footer .small-note {\n          -ms-flex: 0 1 auto; }\n:host #invoice.compact .invoice-container .card .footer .logo {\n          width: 32px;\n          min-width: 32px;\n          margin-right: 24px; }\n:host #invoice.compact .invoice-container .card .footer .small-note {\n          font-size: 12px;\n          font-weight: 500;\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 18px; }\n@media print {\n    :host {\n      /* Invoice Specific Styles */ }\n      :host #invoice.compact .invoice-container {\n        padding: 0; }\n        :host #invoice.compact .invoice-container .card {\n          width: 100%;\n          min-width: 0;\n          background: none;\n          padding: 0;\n          box-shadow: none; }\n          :host #invoice.compact .invoice-container .card .header .invoice-date {\n            margin-bottom: 16pt; }\n          :host #invoice.compact .invoice-container .card .header .issuer {\n            padding-right: 0;\n            margin-right: 0; }\n          :host #invoice.compact .invoice-container .card .content .invoice-table {\n            margin-top: 16pt; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table thead tr th {\n              font-size: 10pt;\n              max-width: 60pt; }\n              :host #invoice.compact .invoice-container .card .content .invoice-table thead tr th:first-child {\n                padding-left: 0; }\n              :host #invoice.compact .invoice-container .card .content .invoice-table thead tr th:last-child {\n                padding-right: 0; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 0; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 0; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table .title {\n              font-size: 10pt; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table .detail {\n              margin-top: 4pt;\n              font-size: 9pt;\n              max-width: none; }\n          :host #invoice.compact .invoice-container .card .content .invoice-table-footer {\n            margin: 16pt 0; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr td {\n              font-size: 13pt;\n              padding: 4pt 4pt; }\n              :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                text-align: left;\n                padding-left: 0; }\n              :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                padding-right: 0; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr.discount td {\n              padding-bottom: 16pt; }\n            :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td {\n              padding: 16pt 4pt 0 4pt;\n              font-size: 16pt; }\n              :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                padding-left: 0; }\n              :host #invoice.compact .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                padding-right: 0; }\n          :host #invoice.compact .invoice-container .card .footer .note {\n            font-size: 10pt;\n            margin-bottom: 8pt; }\n          :host #invoice.compact .invoice-container .card .footer .logo {\n            margin-right: 8pt; }\n          :host #invoice.compact .invoice-container .card .footer .small-note {\n            font-size: 8pt;\n            line-height: normal; } }\n"

/***/ }),

/***/ "./src/app/main/content/pages/invoices/compact/compact.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/pages/invoices/compact/compact.component.ts ***!
  \**************************************************************************/
/*! exports provided: FuseInvoiceCompactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseInvoiceCompactComponent", function() { return FuseInvoiceCompactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../invoice.service */ "./src/app/main/content/pages/invoices/invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseInvoiceCompactComponent = /** @class */ (function () {
    function FuseInvoiceCompactComponent(invoiceService) {
        var _this = this;
        this.invoiceService = invoiceService;
        this.invoiceService.invoiceOnChanged
            .subscribe(function (invoice) {
            _this.invoice = invoice;
        });
    }
    FuseInvoiceCompactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-invoice-compact',
            template: __webpack_require__(/*! ./compact.component.html */ "./src/app/main/content/pages/invoices/compact/compact.component.html"),
            styles: [__webpack_require__(/*! ./compact.component.scss */ "./src/app/main/content/pages/invoices/compact/compact.component.scss")]
        }),
        __metadata("design:paramtypes", [_invoice_service__WEBPACK_IMPORTED_MODULE_1__["InvoiceService"]])
    ], FuseInvoiceCompactComponent);
    return FuseInvoiceCompactComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/invoices/compact/compact.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/pages/invoices/compact/compact.module.ts ***!
  \***********************************************************************/
/*! exports provided: InvoiceCompactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceCompactModule", function() { return InvoiceCompactModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../invoice.service */ "./src/app/main/content/pages/invoices/invoice.service.ts");
/* harmony import */ var _compact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compact.component */ "./src/app/main/content/pages/invoices/compact/compact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'invoices/compact',
        component: _compact_component__WEBPACK_IMPORTED_MODULE_4__["FuseInvoiceCompactComponent"],
        resolve: {
            search: _invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]
        }
    }
];
var InvoiceCompactModule = /** @class */ (function () {
    function InvoiceCompactModule() {
    }
    InvoiceCompactModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _compact_component__WEBPACK_IMPORTED_MODULE_4__["FuseInvoiceCompactComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]
            ],
            providers: [
                _invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]
            ]
        })
    ], InvoiceCompactModule);
    return InvoiceCompactModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/invoices/invoice.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/content/pages/invoices/invoice.service.ts ***!
  \****************************************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvoiceService = /** @class */ (function () {
    function InvoiceService(http) {
        this.http = http;
        this.invoiceOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    InvoiceService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getInvoice()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get invoice
     */
    InvoiceService.prototype.getInvoice = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/invoice')
                .subscribe(function (timeline) {
                _this.invoice = timeline;
                _this.invoiceOnChanged.next(_this.invoice);
                resolve(_this.invoice);
            }, reject);
        });
    };
    InvoiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InvoiceService);
    return InvoiceService;
}());



/***/ }),

/***/ "./src/app/main/content/pages/invoices/modern/modern.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/pages/invoices/modern/modern.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"invoice\" class=\"modern page-layout blank\" fxLayout=\"row\" fusePerfectScrollbar>\r\n\r\n    <div class=\"invoice-container\">\r\n\r\n        <!-- INVOICE -->\r\n        <div class=\"card\">\r\n\r\n            <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n\r\n                <div class=\"ids\" fxLayout=\"column\">\r\n\r\n                    <div fxLayout=\"row\" class=\"seller\" fxLayoutAlign=\"start center\">\r\n\r\n                        <div class=\"logo\">\r\n                            <img src=\"assets/images/logos/fuse.svg\">\r\n                        </div>\r\n\r\n                        <div class=\"divider\"></div>\r\n\r\n                        <div class=\"detail\">\r\n                            <div class=\"title\">{{invoice.from.title}}</div>\r\n                            <div *ngIf=\"invoice?.from.address\" class=\"address\">\r\n                                {{invoice.from.address}}\r\n                            </div>\r\n                            <div *ngIf=\"invoice?.from.phone\" class=\"phone\">\r\n                                <span>Phone:</span>\r\n                                {{invoice.from.phone}}\r\n                            </div>\r\n                            <div *ngIf=\"invoice?.from.email\" class=\"email\">\r\n                                <span>Email:</span>\r\n                                {{invoice.from.email}}\r\n                            </div>\r\n                            <div *ngIf=\"invoice?.from.website\" class=\"website\">\r\n                                <span>Web:</span>\r\n                                {{invoice.from.website}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div fxLayout=\"row\" class=\"client\" fxLayoutAlign=\"start center\">\r\n                        <div class=\"label\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                            <div>CLIENT</div>\r\n                        </div>\r\n\r\n                        <div class=\"divider\"></div>\r\n\r\n                        <div class=\"detail\">\r\n                            <div class=\"title\">{{invoice.client.title}}</div>\r\n                            <div *ngIf=\"invoice?.client.address\" class=\"address\">\r\n                                {{invoice.client.address}}\r\n                            </div>\r\n                            <div *ngIf=\"invoice?.client.phone\" class=\"phone\">\r\n                                <span>Phone:</span>\r\n                                {{invoice.client.phone}}\r\n                            </div>\r\n                            <div *ngIf=\"invoice?.client.email\" class=\"email\">\r\n                                <span>Email:</span>\r\n                                {{invoice.client.email}}\r\n                            </div>\r\n                            <div *ngIf=\"invoice?.client.website\" class=\"website\">\r\n                                <span>Web:</span>\r\n                                {{invoice.client.website}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <table class=\"summary\">\r\n                    <tr class=\"code\">\r\n                        <td class=\"label\">INVOICE</td>\r\n                        <td class=\"value\">{{invoice.number}}</td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td class=\"label\">INVOICE DATE</td>\r\n                        <td class=\"value\">{{invoice.date}}</td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td class=\"label\">DUE DATE</td>\r\n                        <td class=\"value\">{{invoice.dueDate}}</td>\r\n                    </tr>\r\n\r\n                    <tr>\r\n                        <td class=\"label\">TOTAL DUE</td>\r\n                        <td class=\"value\">{{invoice.total | currency:'USD':'symbol'}}</td>\r\n                    </tr>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"content\">\r\n                <table class=\"simple invoice-table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>SERVICE</th>\r\n                            <th>UNIT</th>\r\n                            <th class=\"text-right\">UNIT PRICE</th>\r\n                            <th class=\"text-right\">QUANTITY</th>\r\n                            <th class=\"text-right\">TOTAL</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let service of invoice.services\">\r\n                            <td>\r\n                                <div class=\"title\">{{service.title}}</div>\r\n                                <div class=\"detail\">{{service.detail}}</div>\r\n                            </td>\r\n                            <td>\r\n                                {{service.unit}}\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                {{service.unitPrice | currency:'USD':'symbol'}}\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                {{service.quantity}}\r\n                            </td>\r\n                            <td class=\"text-right\">\r\n                                {{service.total | currency:'USD':'symbol'}}\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n                <table class=\"simple invoice-table-footer\">\r\n                    <tbody>\r\n                        <tr class=\"subtotal\">\r\n                            <td>SUBTOTAL</td>\r\n                            <td>{{invoice.subtotal | currency:'USD':'symbol'}}</td>\r\n                        </tr>\r\n                        <tr class=\"tax\">\r\n                            <td>TAX</td>\r\n                            <td>{{invoice.tax | currency:'USD':'symbol'}}</td>\r\n                        </tr>\r\n                        <tr class=\"discount\">\r\n                            <td>DISCOUNT</td>\r\n                            <td>-{{invoice.discount | currency:'USD':'symbol'}}</td>\r\n                        </tr>\r\n                        <tr class=\"total\">\r\n                            <td>TOTAL</td>\r\n                            <td>{{invoice.total | currency:'USD':'symbol'}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n            <div class=\"footer\">\r\n                <div class=\"note\">Please pay within 15 days. Thank you for your business.</div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <div class=\"logo\">\r\n                        <img src=\"assets/images/logos/fuse.svg\">\r\n                    </div>\r\n                    <div class=\"small-note\">\r\n                        In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque\r\n                        scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit\r\n                        quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia.\r\n                        Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero\r\n                        tincidunt lacinia et eget eros.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!--\r\n\r\n            Use the following elements to add breaks to your pages. This will make sure that the section in between\r\n            these elements will be printed on a new page. The following two elements must be used before and after the\r\n            page content that you want to show as a new page. So, you have to wrap your content with them.\r\n\r\n            Elements:\r\n            ---------\r\n            <div class=\"page-break-after\"></div>\r\n            <div class=\"page-break-before\"></div>\r\n\r\n            -->\r\n\r\n            <!--\r\n\r\n            Example:\r\n            --------\r\n\r\n            Initial page content!\r\n\r\n            <div class=\"page-break-after\"></div>\r\n            <div class=\"page-break-before\"></div>\r\n\r\n            This is the second page!\r\n\r\n            <div class=\"page-break-after\"></div>\r\n            <div class=\"page-break-before\"></div>\r\n\r\n            This is the third page!\r\n\r\n            <div class=\"page-break-after\"></div>\r\n            <div class=\"page-break-before\"></div>\r\n\r\n            -->\r\n\r\n        </div>\r\n        <!-- / INVOICE -->\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/invoices/modern/modern.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/pages/invoices/modern/modern.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  /* PRINT STYLES */ }\n:host #invoice.modern {\n    padding: 0;\n    overflow: auto; }\n:host #invoice.modern .invoice-container {\n      padding: 64px; }\n:host #invoice.modern .invoice-container .card {\n        width: 1020px;\n        min-width: 1020px;\n        max-width: 1020px;\n        padding: 88px;\n        overflow: hidden;\n        background: #FFFFFF;\n        box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n:host #invoice.modern .invoice-container .card .header .ids {\n          line-height: 22px;\n          color: rgba(0, 0, 0, 0.54); }\n:host #invoice.modern .invoice-container .card .header .ids .detail {\n            width: 160px; }\n:host #invoice.modern .invoice-container .card .header .ids .seller {\n            margin-bottom: 80px; }\n:host #invoice.modern .invoice-container .card .header .ids .seller .logo {\n              width: 156px; }\n:host #invoice.modern .invoice-container .card .header .ids .client .label {\n            width: 156px;\n            font-size: 24px;\n            font-weight: 300; }\n:host #invoice.modern .invoice-container .card .header .ids .divider {\n            width: 1px;\n            margin: 0 48px;\n            background-color: rgba(0, 0, 0, 0.12);\n            height: 144px; }\n:host #invoice.modern .invoice-container .card .header .summary {\n          font-size: 15px; }\n:host #invoice.modern .invoice-container .card .header .summary .label {\n            color: rgba(0, 0, 0, 0.54);\n            text-align: right;\n            padding-right: 16px; }\n:host #invoice.modern .invoice-container .card .header .summary .value {\n            color: black; }\n:host #invoice.modern .invoice-container .card .header .summary .code {\n            font-size: 35px;\n            font-weight: 300; }\n:host #invoice.modern .invoice-container .card .header .summary .code td {\n              padding-bottom: 32px; }\n:host #invoice.modern .invoice-container .card .content .invoice-table {\n          margin-top: 96px;\n          font-size: 15px; }\n:host #invoice.modern .invoice-container .card .content .invoice-table .title {\n            font-size: 17px; }\n:host #invoice.modern .invoice-container .card .content .invoice-table .detail {\n            margin-top: 8px;\n            font-size: 12px;\n            color: rgba(0, 0, 0, 0.54);\n            max-width: 360px; }\n:host #invoice.modern .invoice-container .card .content .invoice-table-footer {\n          margin: 32px 0 96px 0; }\n:host #invoice.modern .invoice-container .card .content .invoice-table-footer tr td {\n            text-align: right;\n            font-size: 17px;\n            font-weight: 500;\n            color: rgba(0, 0, 0, 0.54);\n            border-bottom: none;\n            padding: 8px 8px; }\n:host #invoice.modern .invoice-container .card .content .invoice-table-footer tr td:first-child {\n              text-align: left; }\n:host #invoice.modern .invoice-container .card .content .invoice-table-footer tr.discount td {\n            padding-bottom: 32px; }\n:host #invoice.modern .invoice-container .card .content .invoice-table-footer tr.total td {\n            padding: 32px 8px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12);\n            font-size: 35px;\n            font-weight: 300;\n            color: black; }\n:host #invoice.modern .invoice-container .card .footer .note {\n          font-size: 15px;\n          font-weight: 500;\n          margin-bottom: 24px; }\n:host #invoice.modern .invoice-container .card .footer .logo, :host #invoice.modern .invoice-container .card .footer .small-note {\n          -ms-flex: 0 1 auto; }\n:host #invoice.modern .invoice-container .card .footer .logo {\n          width: 32px;\n          min-width: 32px;\n          margin-right: 24px; }\n:host #invoice.modern .invoice-container .card .footer .small-note {\n          font-size: 12px;\n          font-weight: 500;\n          color: rgba(0, 0, 0, 0.54);\n          line-height: 18px; }\n@media print {\n    :host {\n      /* Invoice Specific Styles */ }\n      :host #invoice.modern .invoice-container {\n        padding: 0; }\n        :host #invoice.modern .invoice-container .card {\n          width: 100%;\n          min-width: 0;\n          background: none;\n          padding: 0;\n          box-shadow: none; }\n          :host #invoice.modern .invoice-container .card .header .ids .detail {\n            width: 120pt; }\n          :host #invoice.modern .invoice-container .card .header .ids .seller {\n            margin-bottom: 8pt; }\n            :host #invoice.modern .invoice-container .card .header .ids .seller .logo {\n              width: 60pt; }\n          :host #invoice.modern .invoice-container .card .header .ids .client .label {\n            width: 60pt;\n            font-size: 16pt; }\n          :host #invoice.modern .invoice-container .card .header .ids .divider {\n            margin: 0 12pt;\n            height: 100pt; }\n          :host #invoice.modern .invoice-container .card .header .summary {\n            font-size: 10pt; }\n            :host #invoice.modern .invoice-container .card .header .summary .code {\n              font-size: 18pt; }\n              :host #invoice.modern .invoice-container .card .header .summary .code td {\n                padding-bottom: 10pt; }\n          :host #invoice.modern .invoice-container .card .content .invoice-table {\n            margin-top: 16pt; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table thead tr th {\n              font-size: 10pt;\n              max-width: 60pt; }\n              :host #invoice.modern .invoice-container .card .content .invoice-table thead tr th:first-child {\n                padding-left: 0; }\n              :host #invoice.modern .invoice-container .card .content .invoice-table thead tr th:last-child {\n                padding-right: 0; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table tbody tr td:first-child {\n              padding-left: 0; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table tbody tr td:last-child {\n              padding-right: 0; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table .title {\n              font-size: 10pt; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table .detail {\n              margin-top: 4pt;\n              font-size: 9pt;\n              max-width: none; }\n          :host #invoice.modern .invoice-container .card .content .invoice-table-footer {\n            margin: 16pt 0; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr td {\n              font-size: 13pt;\n              padding: 4pt 4pt; }\n              :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr td:first-child {\n                text-align: left;\n                padding-left: 0; }\n              :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr td:last-child {\n                padding-right: 0; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr.discount td {\n              padding-bottom: 16pt; }\n            :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr.total td {\n              padding: 16pt 4pt 0 4pt;\n              font-size: 16pt; }\n              :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr.total td:first-child {\n                padding-left: 0; }\n              :host #invoice.modern .invoice-container .card .content .invoice-table-footer tr.total td:last-child {\n                padding-right: 0; }\n          :host #invoice.modern .invoice-container .card .footer .note {\n            font-size: 10pt;\n            margin-bottom: 8pt; }\n          :host #invoice.modern .invoice-container .card .footer .logo {\n            font-size: 14pt;\n            margin-right: 8pt; }\n          :host #invoice.modern .invoice-container .card .footer .small-note {\n            font-size: 8pt;\n            line-height: normal; } }\n"

/***/ }),

/***/ "./src/app/main/content/pages/invoices/modern/modern.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/content/pages/invoices/modern/modern.component.ts ***!
  \************************************************************************/
/*! exports provided: FuseInvoiceModernComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseInvoiceModernComponent", function() { return FuseInvoiceModernComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _invoice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../invoice.service */ "./src/app/main/content/pages/invoices/invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseInvoiceModernComponent = /** @class */ (function () {
    function FuseInvoiceModernComponent(invoiceService) {
        var _this = this;
        this.invoiceService = invoiceService;
        this.invoiceService.invoiceOnChanged
            .subscribe(function (invoice) {
            _this.invoice = invoice;
        });
    }
    FuseInvoiceModernComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-invoice-modern',
            template: __webpack_require__(/*! ./modern.component.html */ "./src/app/main/content/pages/invoices/modern/modern.component.html"),
            styles: [__webpack_require__(/*! ./modern.component.scss */ "./src/app/main/content/pages/invoices/modern/modern.component.scss")]
        }),
        __metadata("design:paramtypes", [_invoice_service__WEBPACK_IMPORTED_MODULE_1__["InvoiceService"]])
    ], FuseInvoiceModernComponent);
    return FuseInvoiceModernComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/invoices/modern/modern.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/content/pages/invoices/modern/modern.module.ts ***!
  \*********************************************************************/
/*! exports provided: InvoiceModernModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModernModule", function() { return InvoiceModernModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../invoice.service */ "./src/app/main/content/pages/invoices/invoice.service.ts");
/* harmony import */ var _modern_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modern.component */ "./src/app/main/content/pages/invoices/modern/modern.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'invoices/modern',
        component: _modern_component__WEBPACK_IMPORTED_MODULE_4__["FuseInvoiceModernComponent"],
        resolve: {
            search: _invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]
        }
    }
];
var InvoiceModernModule = /** @class */ (function () {
    function InvoiceModernModule() {
    }
    InvoiceModernModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _modern_component__WEBPACK_IMPORTED_MODULE_4__["FuseInvoiceModernComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]
            ],
            providers: [
                _invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]
            ]
        })
    ], InvoiceModernModule);
    return InvoiceModernModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n\r\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n        <mat-toolbar-row>\r\n            <span class=\"title dialog-title\">{{data.article.title}}</span>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\r\n        <div [innerHTML]=\"data.article.content\"></div>\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n        <button mat-button (click)=\"dialogRef.close()\" class=\"mat-accent\" aria-label=\"Close\">\r\n            CLOSE\r\n        </button>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.knowledgebase-article-dialog {\n  width: 720px; }\n@media screen and (max-width: 599px) {\n    .knowledgebase-article-dialog {\n      width: 100%; } }\n.knowledgebase-article-dialog .mat-dialog-container {\n    padding: 0; }\n.knowledgebase-article-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FuseKnowledgeBaseArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseKnowledgeBaseArticleComponent", function() { return FuseKnowledgeBaseArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FuseKnowledgeBaseArticleComponent = /** @class */ (function () {
    function FuseKnowledgeBaseArticleComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    FuseKnowledgeBaseArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-knowledge-base-article',
            template: __webpack_require__(/*! ./article.component.html */ "./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.html"),
            styles: [__webpack_require__(/*! ./article.component.scss */ "./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], FuseKnowledgeBaseArticleComponent);
    return FuseKnowledgeBaseArticleComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/knowledge-base.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/main/content/pages/knowledge-base/knowledge-base.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"knowledgebase\" class=\"page-layout simple\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div class=\"hero-text mb-32\">\r\n            <h1>How can we help?</h1>\r\n            <h3>Welcome to our knowledge base</h3>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content p-24\">\r\n\r\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center\">\r\n\r\n            <mat-nav-list class=\"articles-list mat-white-bg mat-elevation-z4\" *ngFor=\"let category of knowledgeBase\">\r\n\r\n                <h3 mat-subheader>{{category.title}}</h3>\r\n\r\n                <a mat-list-item *ngFor=\"let article of category.featuredArticles\"\r\n                   (click)=\"readArticle(article)\">\r\n                    <mat-icon class=\"secondary-text mr-8\">note</mat-icon>\r\n                    {{ article.title }}\r\n                </a>\r\n\r\n                <a mat-list-item class=\"see-all-link accent-fg\" [routerLink]=\"category.path\">\r\n                    See all articles ({{category.articlesCount}})\r\n                </a>\r\n\r\n            </mat-nav-list>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/knowledge-base.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/content/pages/knowledge-base/knowledge-base.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#knowledgebase .header {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  height: 280px;\n  max-height: 280px;\n  background: #1A237E;\n  background: -webkit-gradient(linear, left top, right top, from(#0E2A3B), to(#34306B));\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media screen and (max-width: 599px) {\n    #knowledgebase .header {\n      height: 240px;\n      padding: 16px; } }\n#knowledgebase .header .hero-text h1 {\n    color: white;\n    font-size: 48px;\n    font-weight: 400;\n    letter-spacing: 0.01em;\n    text-align: center;\n    margin-top: 0;\n    margin-bottom: 16px; }\n@media (max-width: 599px) {\n      #knowledgebase .header .hero-text h1 {\n        font-size: 24px; } }\n#knowledgebase .header .hero-text h3 {\n    color: rgba(255, 255, 255, 0.75);\n    max-width: 480px;\n    text-align: center;\n    font-weight: 300;\n    letter-spacing: 0.075em;\n    margin: 0; }\n@media (max-width: 599px) {\n      #knowledgebase .header .hero-text h3 {\n        font-size: 14px; } }\n#knowledgebase .content {\n  max-width: 960px;\n  width: 100%;\n  margin: 0 auto; }\n#knowledgebase .content .articles-list {\n    width: 400px;\n    min-width: 400px;\n    margin: 16px;\n    padding: 16px; }\n@media (max-width: 599px) {\n      #knowledgebase .content .articles-list {\n        min-width: 300px;\n        margin: 16px 0; } }\n#knowledgebase .content .articles-list .mat-list-item {\n      text-decoration: none !important; }\n#knowledgebase .content .articles-list .see-all-link {\n      font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/knowledge-base.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/content/pages/knowledge-base/knowledge-base.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FuseKnowledgeBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseKnowledgeBaseComponent", function() { return FuseKnowledgeBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _knowledge_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knowledge-base.service */ "./src/app/main/content/pages/knowledge-base/knowledge-base.service.ts");
/* harmony import */ var _dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs/article/article.component */ "./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseKnowledgeBaseComponent = /** @class */ (function () {
    function FuseKnowledgeBaseComponent(knowledgeBaseService, matDialog) {
        this.knowledgeBaseService = knowledgeBaseService;
        this.matDialog = matDialog;
    }
    FuseKnowledgeBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onKnowledgeBaseChanged =
            this.knowledgeBaseService.onKnowledgeBaseChanged
                .subscribe(function (response) {
                _this.knowledgeBase = response;
            });
    };
    FuseKnowledgeBaseComponent.prototype.ngOnDestroy = function () {
        this.onKnowledgeBaseChanged.unsubscribe();
    };
    FuseKnowledgeBaseComponent.prototype.readArticle = function (article) {
        this.matDialog.open(_dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_3__["FuseKnowledgeBaseArticleComponent"], {
            panelClass: 'knowledgebase-article-dialog',
            data: { article: article }
        });
    };
    FuseKnowledgeBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-knowledge-base',
            template: __webpack_require__(/*! ./knowledge-base.component.html */ "./src/app/main/content/pages/knowledge-base/knowledge-base.component.html"),
            styles: [__webpack_require__(/*! ./knowledge-base.component.scss */ "./src/app/main/content/pages/knowledge-base/knowledge-base.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_knowledge_base_service__WEBPACK_IMPORTED_MODULE_2__["KnowledgeBaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], FuseKnowledgeBaseComponent);
    return FuseKnowledgeBaseComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/knowledge-base.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/pages/knowledge-base/knowledge-base.module.ts ***!
  \****************************************************************************/
/*! exports provided: KnowledgeBaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseModule", function() { return KnowledgeBaseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _knowledge_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./knowledge-base.service */ "./src/app/main/content/pages/knowledge-base/knowledge-base.service.ts");
/* harmony import */ var _knowledge_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./knowledge-base.component */ "./src/app/main/content/pages/knowledge-base/knowledge-base.component.ts");
/* harmony import */ var _dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialogs/article/article.component */ "./src/app/main/content/pages/knowledge-base/dialogs/article/article.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'knowledge-base',
        component: _knowledge_base_component__WEBPACK_IMPORTED_MODULE_5__["FuseKnowledgeBaseComponent"],
        resolve: {
            knowledgeBase: _knowledge_base_service__WEBPACK_IMPORTED_MODULE_4__["KnowledgeBaseService"]
        }
    }
];
var KnowledgeBaseModule = /** @class */ (function () {
    function KnowledgeBaseModule() {
    }
    KnowledgeBaseModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _knowledge_base_component__WEBPACK_IMPORTED_MODULE_5__["FuseKnowledgeBaseComponent"],
                _dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_6__["FuseKnowledgeBaseArticleComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            providers: [
                _knowledge_base_service__WEBPACK_IMPORTED_MODULE_4__["KnowledgeBaseService"]
            ],
            entryComponents: [
                _dialogs_article_article_component__WEBPACK_IMPORTED_MODULE_6__["FuseKnowledgeBaseArticleComponent"]
            ]
        })
    ], KnowledgeBaseModule);
    return KnowledgeBaseModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/knowledge-base/knowledge-base.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/pages/knowledge-base/knowledge-base.service.ts ***!
  \*****************************************************************************/
/*! exports provided: KnowledgeBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseService", function() { return KnowledgeBaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KnowledgeBaseService = /** @class */ (function () {
    function KnowledgeBaseService(http) {
        this.http = http;
        this.onKnowledgeBaseChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    KnowledgeBaseService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getKnowledgeBase()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get knowledge base
     */
    KnowledgeBaseService.prototype.getKnowledgeBase = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/knowledge-base')
                .subscribe(function (response) {
                _this.knowledgeBase = response;
                _this.onKnowledgeBaseChanged.next(_this.knowledgeBase);
                resolve(_this.knowledgeBase);
            }, reject);
        });
    };
    KnowledgeBaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], KnowledgeBaseService);
    return KnowledgeBaseService;
}());



/***/ }),

/***/ "./src/app/main/content/pages/maintenance/maintenance.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/maintenance/maintenance.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"maintenance\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <div id=\"maintenance-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div id=\"maintenance-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\r\n\r\n            <div class=\"logo\">\r\n                <img src=\"assets/images/logos/fuse.svg\">\r\n            </div>\r\n\r\n            <div class=\"title\">Closed for scheduled maintenance!</div>\r\n\r\n            <div class=\"subtitle\">\r\n                We're sorry for the inconvenience. <br> Please check back later.\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/maintenance/maintenance.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/maintenance/maintenance.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #maintenance {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat;\n  background-size: cover; }\n:host #maintenance #maintenance-form-wrapper {\n    -webkit-box-flex: 1;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #maintenance #maintenance-form-wrapper {\n        padding: 16px; } }\n:host #maintenance #maintenance-form-wrapper #maintenance-form {\n      max-width: 384px;\n      padding: 48px;\n      background: #FFFFFF;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #maintenance #maintenance-form-wrapper #maintenance-form {\n          padding: 24px;\n          width: 100%; } }\n:host #maintenance #maintenance-form-wrapper #maintenance-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #maintenance #maintenance-form-wrapper #maintenance-form .title {\n        font-size: 17px;\n        margin-top: 16px; }\n:host #maintenance #maintenance-form-wrapper #maintenance-form .subtitle {\n        margin: 16px 0;\n        max-width: 300px;\n        color: rgba(0, 0, 0, 0.54);\n        font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/maintenance/maintenance.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/pages/maintenance/maintenance.component.ts ***!
  \*************************************************************************/
/*! exports provided: FuseMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseMaintenanceComponent", function() { return FuseMaintenanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseMaintenanceComponent = /** @class */ (function () {
    function FuseMaintenanceComponent(fuseConfig) {
        this.fuseConfig = fuseConfig;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
    }
    FuseMaintenanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-maintenance',
            template: __webpack_require__(/*! ./maintenance.component.html */ "./src/app/main/content/pages/maintenance/maintenance.component.html"),
            styles: [__webpack_require__(/*! ./maintenance.component.scss */ "./src/app/main/content/pages/maintenance/maintenance.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__["FuseConfigService"]])
    ], FuseMaintenanceComponent);
    return FuseMaintenanceComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/maintenance/maintenence.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/content/pages/maintenance/maintenence.module.ts ***!
  \**********************************************************************/
/*! exports provided: MaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceModule", function() { return MaintenanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _maintenance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maintenance.component */ "./src/app/main/content/pages/maintenance/maintenance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'maintenance',
        component: _maintenance_component__WEBPACK_IMPORTED_MODULE_3__["FuseMaintenanceComponent"]
    }
];
var MaintenanceModule = /** @class */ (function () {
    function MaintenanceModule() {
    }
    MaintenanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _maintenance_component__WEBPACK_IMPORTED_MODULE_3__["FuseMaintenanceComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_2__["FuseSharedModule"]
            ]
        })
    ], MaintenanceModule);
    return MaintenanceModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/pages.module.ts":
/*!****************************************************!*\
  !*** ./src/app/main/content/pages/pages.module.ts ***!
  \****************************************************/
/*! exports provided: FusePagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FusePagesModule", function() { return FusePagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_login_login_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/login/login.module */ "./src/app/main/content/pages/authentication/login/login.module.ts");
/* harmony import */ var _authentication_login_2_login_2_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authentication/login-2/login-2.module */ "./src/app/main/content/pages/authentication/login-2/login-2.module.ts");
/* harmony import */ var _authentication_register_register_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication/register/register.module */ "./src/app/main/content/pages/authentication/register/register.module.ts");
/* harmony import */ var _authentication_register_2_register_2_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication/register-2/register-2.module */ "./src/app/main/content/pages/authentication/register-2/register-2.module.ts");
/* harmony import */ var _authentication_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authentication/forgot-password/forgot-password.module */ "./src/app/main/content/pages/authentication/forgot-password/forgot-password.module.ts");
/* harmony import */ var _authentication_forgot_password_2_forgot_password_2_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/forgot-password-2/forgot-password-2.module */ "./src/app/main/content/pages/authentication/forgot-password-2/forgot-password-2.module.ts");
/* harmony import */ var _authentication_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./authentication/reset-password/reset-password.module */ "./src/app/main/content/pages/authentication/reset-password/reset-password.module.ts");
/* harmony import */ var _authentication_reset_password_2_reset_password_2_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication/reset-password-2/reset-password-2.module */ "./src/app/main/content/pages/authentication/reset-password-2/reset-password-2.module.ts");
/* harmony import */ var _authentication_lock_lock_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication/lock/lock.module */ "./src/app/main/content/pages/authentication/lock/lock.module.ts");
/* harmony import */ var _authentication_mail_confirm_mail_confirm_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication/mail-confirm/mail-confirm.module */ "./src/app/main/content/pages/authentication/mail-confirm/mail-confirm.module.ts");
/* harmony import */ var _coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./coming-soon/coming-soon.module */ "./src/app/main/content/pages/coming-soon/coming-soon.module.ts");
/* harmony import */ var _errors_404_error_404_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./errors/404/error-404.module */ "./src/app/main/content/pages/errors/404/error-404.module.ts");
/* harmony import */ var _errors_500_error_500_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./errors/500/error-500.module */ "./src/app/main/content/pages/errors/500/error-500.module.ts");
/* harmony import */ var _invoices_compact_compact_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./invoices/compact/compact.module */ "./src/app/main/content/pages/invoices/compact/compact.module.ts");
/* harmony import */ var _invoices_modern_modern_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./invoices/modern/modern.module */ "./src/app/main/content/pages/invoices/modern/modern.module.ts");
/* harmony import */ var _maintenance_maintenence_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./maintenance/maintenence.module */ "./src/app/main/content/pages/maintenance/maintenence.module.ts");
/* harmony import */ var _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pricing/pricing.module */ "./src/app/main/content/pages/pricing/pricing.module.ts");
/* harmony import */ var _profile_profile_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/profile.module */ "./src/app/main/content/pages/profile/profile.module.ts");
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./search/search.module */ "./src/app/main/content/pages/search/search.module.ts");
/* harmony import */ var _faq_faq_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./faq/faq.module */ "./src/app/main/content/pages/faq/faq.module.ts");
/* harmony import */ var _knowledge_base_knowledge_base_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./knowledge-base/knowledge-base.module */ "./src/app/main/content/pages/knowledge-base/knowledge-base.module.ts");
/* harmony import */ var _verify_email_verify_email_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./verify-email/verify-email.module */ "./src/app/main/content/pages/verify-email/verify-email.module.ts");
/* harmony import */ var _verify_otp_verify_otp_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./verify-otp/verify-otp.module */ "./src/app/main/content/pages/verify-otp/verify-otp.module.ts");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./authentication/authentication.service */ "./src/app/main/content/pages/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var FusePagesModule = /** @class */ (function () {
    function FusePagesModule() {
    }
    FusePagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // Auth
                _authentication_login_login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"],
                _authentication_login_2_login_2_module__WEBPACK_IMPORTED_MODULE_2__["Login2Module"],
                _authentication_register_register_module__WEBPACK_IMPORTED_MODULE_3__["RegisterModule"],
                _authentication_register_2_register_2_module__WEBPACK_IMPORTED_MODULE_4__["Register2Module"],
                _authentication_forgot_password_forgot_password_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordModule"],
                _authentication_forgot_password_2_forgot_password_2_module__WEBPACK_IMPORTED_MODULE_6__["ForgotPassword2Module"],
                _authentication_reset_password_reset_password_module__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordModule"],
                _authentication_reset_password_2_reset_password_2_module__WEBPACK_IMPORTED_MODULE_8__["ResetPassword2Module"],
                _authentication_lock_lock_module__WEBPACK_IMPORTED_MODULE_9__["LockModule"],
                _authentication_mail_confirm_mail_confirm_module__WEBPACK_IMPORTED_MODULE_10__["MailConfirmModule"],
                // Coming-soon
                _coming_soon_coming_soon_module__WEBPACK_IMPORTED_MODULE_11__["ComingSoonModule"],
                // Errors
                _errors_404_error_404_module__WEBPACK_IMPORTED_MODULE_12__["Error404Module"],
                _errors_500_error_500_module__WEBPACK_IMPORTED_MODULE_13__["Error500Module"],
                // Invoices
                _invoices_modern_modern_module__WEBPACK_IMPORTED_MODULE_15__["InvoiceModernModule"],
                _invoices_compact_compact_module__WEBPACK_IMPORTED_MODULE_14__["InvoiceCompactModule"],
                // Maintenance
                _maintenance_maintenence_module__WEBPACK_IMPORTED_MODULE_16__["MaintenanceModule"],
                // Pricing
                _pricing_pricing_module__WEBPACK_IMPORTED_MODULE_17__["PricingModule"],
                // Profile
                _profile_profile_module__WEBPACK_IMPORTED_MODULE_18__["ProfileModule"],
                // Search
                _search_search_module__WEBPACK_IMPORTED_MODULE_19__["SearchModule"],
                // Faq
                _faq_faq_module__WEBPACK_IMPORTED_MODULE_20__["FaqModule"],
                // Knowledge base
                _knowledge_base_knowledge_base_module__WEBPACK_IMPORTED_MODULE_21__["KnowledgeBaseModule"],
                _verify_email_verify_email_module__WEBPACK_IMPORTED_MODULE_22__["VerifyEmailModule"],
                _verify_otp_verify_otp_module__WEBPACK_IMPORTED_MODULE_23__["VerifyOtpModule"]
            ],
            declarations: [],
            providers: [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_24__["AuthenticationService"]]
        })
    ], FusePagesModule);
    return FusePagesModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/pricing/pricing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/content/pages/pricing/pricing.module.ts ***!
  \**************************************************************/
/*! exports provided: PricingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingModule", function() { return PricingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _style_1_style_1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style-1/style-1.component */ "./src/app/main/content/pages/pricing/style-1/style-1.component.ts");
/* harmony import */ var _style_2_style_2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style-2/style-2.component */ "./src/app/main/content/pages/pricing/style-2/style-2.component.ts");
/* harmony import */ var _style_3_style_3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style-3/style-3.component */ "./src/app/main/content/pages/pricing/style-3/style-3.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'pricing/style-1',
        component: _style_1_style_1_component__WEBPACK_IMPORTED_MODULE_4__["FusePricingStyle1Component"]
    },
    {
        path: 'pricing/style-2',
        component: _style_2_style_2_component__WEBPACK_IMPORTED_MODULE_5__["FusePricingStyle2Component"]
    },
    {
        path: 'pricing/style-3',
        component: _style_3_style_3_component__WEBPACK_IMPORTED_MODULE_6__["FusePricingStyle3Component"]
    }
];
var PricingModule = /** @class */ (function () {
    function PricingModule() {
    }
    PricingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _style_1_style_1_component__WEBPACK_IMPORTED_MODULE_4__["FusePricingStyle1Component"],
                _style_2_style_2_component__WEBPACK_IMPORTED_MODULE_5__["FusePricingStyle2Component"],
                _style_3_style_3_component__WEBPACK_IMPORTED_MODULE_6__["FusePricingStyle3Component"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ]
        })
    ], PricingModule);
    return PricingModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-1/style-1.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/pricing/style-1/style-1.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"price-tables\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n\r\n        <div class=\"hero-text\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\r\n\r\n            <div class=\"h1\">Simple Pricing!</div>\r\n            <div class=\"h3\">\r\n                The most advanced customer support tools with a simple and affordable pricing. And you can always try\r\n                for 30 days, free!\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\" fxLayout=\"column\">\r\n\r\n        <!-- PRICE TABLES -->\r\n        <div class=\"price-tables\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n\r\n            <div class=\"price-table style-1 mat-elevation-z4\" fxLayout=\"column\">\r\n\r\n                <div class=\"package-type mat-primary-bg\">\r\n                    <span>BASIC</span>\r\n                </div>\r\n\r\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                    <div class=\"currency\">$</div>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\r\n                        <div class=\"value\">4</div>\r\n                        <div class=\"period\">/ month</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <mat-divider></mat-divider>\r\n\r\n                <div class=\"terms\" fxLayout=\"column\">\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">10</span>\r\n                        Projects\r\n                    </div>\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">10</span>\r\n                        Pages\r\n                    </div>\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">100</span>\r\n                        Mb Disk Space\r\n                    </div>\r\n                </div>\r\n\r\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">BUY NOW</button>\r\n\r\n            </div>\r\n\r\n            <div class=\"price-table style-1 mat-elevation-z12\" fxLayout=\"column\">\r\n\r\n                <div class=\"package-type mat-primary-bg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>STANDARD</span>\r\n                    <span class=\"sale mat-accent-color mat-hue-1\">Save 15%</span>\r\n                </div>\r\n\r\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                    <div class=\"currency\">$</div>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\r\n                        <div class=\"value\">8</div>\r\n                        <div class=\"period\">/ month</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <mat-divider></mat-divider>\r\n\r\n                <div class=\"terms\" fxLayout=\"column\">\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">20</span>\r\n                        Projects\r\n                    </div>\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">20</span>\r\n                        Pages\r\n                    </div>\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">200</span>\r\n                        Mb Disk Space\r\n                    </div>\r\n                </div>\r\n\r\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">BUY NOW</button>\r\n\r\n            </div>\r\n\r\n            <div class=\"price-table style-1 mat-elevation-z4\" fxLayout=\"column\">\r\n\r\n                <div class=\"package-type mat-primary-bg\" fxLayout=\"row\">\r\n                    <span>ADVANCED</span>\r\n                </div>\r\n\r\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                    <div class=\"currency\">$</div>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\r\n                        <div class=\"value\">12</div>\r\n                        <div class=\"period\">/ month</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <mat-divider></mat-divider>\r\n\r\n                <div class=\"terms\" fxLayout=\"column\">\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">40</span>\r\n                        Projects\r\n                    </div>\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">40</span>\r\n                        Pages\r\n                    </div>\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">500</span>\r\n                        Mb Disk Space\r\n                    </div>\r\n                </div>\r\n\r\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">BUY NOW</button>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / PRICE TABLES -->\r\n\r\n        <div class=\"faq\" fxLayout=\"row wrap\">\r\n\r\n            <div class=\"title\" fxFlex=\"100\">Frequently Asked Questions</div>\r\n\r\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <div class=\"question\">How does free trial work?</div>\r\n                <div class=\"answer\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\r\n                    accumsan. In dignissim laoreet ipsum eu interdum.\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <div class=\"question\">Can I cancel any time?</div>\r\n                <div class=\"answer\">\r\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\r\n                    Donec maximus ipsum in malesuada hendrerit.\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <div class=\"question\">What happens after my trial ended?</div>\r\n                <div class=\"answer\">\r\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\r\n                    Donec maximus ipsum in malesuada hendrerit.\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <div class=\"question\">Can I have a discount?</div>\r\n                <div class=\"answer\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\r\n                    accumsan. In dignissim laoreet ipsum eu interdum.\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-1/style-1.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/pricing/style-1/style-1.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #price-tables .header {\n  padding: 24px;\n  height: 600px;\n  min-height: 600px;\n  background: #1A237E;\n  background: -webkit-gradient(linear, left top, right top, from(#0E2A3B), to(#34306B));\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media (max-width: 599px) {\n    :host #price-tables .header {\n      height: 400px;\n      min-height: 400px; } }\n:host #price-tables .header .hero-text {\n    margin: 128px 24px; }\n@media (max-width: 599px) {\n      :host #price-tables .header .hero-text {\n        margin: 64px 24px; } }\n:host #price-tables .header .hero-text .h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 400;\n      letter-spacing: 0.01em;\n      text-align: center; }\n@media (max-width: 599px) {\n        :host #price-tables .header .hero-text .h1 {\n          font-size: 32px; } }\n:host #price-tables .header .hero-text .h3 {\n      color: rgba(255, 255, 255, 0.75);\n      max-width: 480px;\n      text-align: center;\n      margin-top: 16px;\n      font-weight: 300;\n      letter-spacing: 0.05em; }\n@media (max-width: 599px) {\n        :host #price-tables .header .hero-text .h3 {\n          font-size: 14px; } }\n:host #price-tables .price-tables {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  margin-top: -192px; }\n@media (max-width: 599px) {\n    :host #price-tables .price-tables {\n      margin-top: -128px; } }\n:host #price-tables .price-tables .price-table {\n    margin: 12px; }\n:host #price-tables .faq {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  margin: 96px auto;\n  max-width: 840px; }\n:host #price-tables .faq .title {\n    font-size: 32px;\n    font-weight: 300;\n    text-align: center;\n    margin-bottom: 64px;\n    padding: 0 16px; }\n:host #price-tables .faq .item {\n    padding: 24px; }\n:host #price-tables .faq .item .question {\n      font-size: 18px;\n      margin-bottom: 8px; }\n:host #price-tables .faq .item .answer {\n      font-size: 16px;\n      line-height: 1.5;\n      color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-1/style-1.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/pages/pricing/style-1/style-1.component.ts ***!
  \*************************************************************************/
/*! exports provided: FusePricingStyle1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FusePricingStyle1Component", function() { return FusePricingStyle1Component; });
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

var FusePricingStyle1Component = /** @class */ (function () {
    function FusePricingStyle1Component() {
    }
    FusePricingStyle1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-pricing-style-1',
            template: __webpack_require__(/*! ./style-1.component.html */ "./src/app/main/content/pages/pricing/style-1/style-1.component.html"),
            styles: [__webpack_require__(/*! ./style-1.component.scss */ "./src/app/main/content/pages/pricing/style-1/style-1.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FusePricingStyle1Component);
    return FusePricingStyle1Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-2/style-2.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/pricing/style-2/style-2.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"price-tables\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n\r\n        <div class=\"hero-text\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\r\n\r\n            <div class=\"h1\">Simple Pricing!</div>\r\n            <div class=\"h3\">\r\n                The most advanced customer support tools with a simple and affordable pricing. And you can always try\r\n                for 30 days, free!\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\" fxLayout=\"column\">\r\n\r\n        <!-- PRICE TABLES -->\r\n        <div class=\"price-tables\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n\r\n            <div class=\"price-table style-2 mat-elevation-z4\" fxLayout=\"column\">\r\n\r\n                <div class=\"package-type mat-accent-fg\">SILVER PACKAGE</div>\r\n\r\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                    <div class=\"currency\">$</div>\r\n                    <div class=\"value\">99</div>\r\n                </div>\r\n\r\n                <div class=\"period\">PER MONTH</div>\r\n\r\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">10</span>\r\n                        Projects\r\n                    </div>\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">10</span>\r\n                        Pages\r\n                    </div>\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">100</span>\r\n                        Mb Disk Space\r\n                    </div>\r\n                </div>\r\n\r\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED</button>\r\n\r\n            </div>\r\n\r\n            <div class=\"price-table style-2 mat-elevation-z12\" fxLayout=\"column\">\r\n\r\n                <div class=\"badge mat-warn-bg\">BEST VALUE</div>\r\n\r\n                <div class=\"package-type mat-accent-fg\">GOLD PACKAGE</div>\r\n\r\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                    <div class=\"currency\">$</div>\r\n                    <div class=\"value\">299</div>\r\n                </div>\r\n\r\n                <div class=\"period\">PER MONTH</div>\r\n\r\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">20</span>\r\n                        Projects\r\n                    </div>\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">20</span>\r\n                        Pages\r\n                    </div>\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">200</span>\r\n                        Mb Disk Space\r\n                    </div>\r\n                </div>\r\n\r\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED</button>\r\n\r\n            </div>\r\n\r\n            <div class=\"price-table style-2 mat-elevation-z4\" fxLayout=\"column\">\r\n\r\n                <div class=\"package-type mat-accent-fg\">PLATINUM PACKAGE</div>\r\n\r\n                <div class=\"price\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                    <div class=\"currency\">$</div>\r\n                    <div class=\"value\">499</div>\r\n                </div>\r\n\r\n                <div class=\"period\">PER MONTH</div>\r\n\r\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">40</span>\r\n                        Projects\r\n                    </div>\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">40</span>\r\n                        Pages\r\n                    </div>\r\n                    <div class=\"term\">\r\n                        <span class=\"text-bold\">500</span>\r\n                        Mb Disk Space\r\n                    </div>\r\n                </div>\r\n\r\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED</button>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / PRICE TABLES -->\r\n\r\n        <div class=\"faq\" fxLayout=\"row wrap\">\r\n\r\n            <div class=\"title\" fxFlex=\"100\">Frequently Asked Questions</div>\r\n\r\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <div class=\"question\">How does free trial work?</div>\r\n                <div class=\"answer\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\r\n                    accumsan. In dignissim laoreet ipsum eu interdum.\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <div class=\"question\">Can I cancel any time?</div>\r\n                <div class=\"answer\">\r\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\r\n                    Donec maximus ipsum in malesuada hendrerit.\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <div class=\"question\">What happens after my trial ended?</div>\r\n                <div class=\"answer\">\r\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\r\n                    Donec maximus ipsum in malesuada hendrerit.\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <div class=\"question\">Can I have a discount?</div>\r\n                <div class=\"answer\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\r\n                    accumsan. In dignissim laoreet ipsum eu interdum.\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-2/style-2.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/pricing/style-2/style-2.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #price-tables .header {\n  padding: 24px;\n  height: 600px;\n  min-height: 600px;\n  background: #1A237E;\n  background: -webkit-gradient(linear, left top, right top, from(#0E2A3B), to(#34306B));\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media (max-width: 599px) {\n    :host #price-tables .header {\n      height: 400px;\n      min-height: 400px; } }\n:host #price-tables .header .hero-text {\n    margin: 128px 24px; }\n@media (max-width: 599px) {\n      :host #price-tables .header .hero-text {\n        margin: 64px 24px; } }\n:host #price-tables .header .hero-text .h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 400;\n      letter-spacing: 0.01em;\n      text-align: center; }\n@media (max-width: 599px) {\n        :host #price-tables .header .hero-text .h1 {\n          font-size: 32px; } }\n:host #price-tables .header .hero-text .h3 {\n      color: rgba(255, 255, 255, 0.75);\n      max-width: 480px;\n      text-align: center;\n      margin-top: 16px;\n      font-weight: 300;\n      letter-spacing: 0.05em; }\n@media (max-width: 599px) {\n        :host #price-tables .header .hero-text .h3 {\n          font-size: 14px; } }\n:host #price-tables .price-tables {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  margin-top: -192px; }\n@media (max-width: 599px) {\n    :host #price-tables .price-tables {\n      margin-top: -128px; } }\n:host #price-tables .price-tables .price-table {\n    margin: 12px; }\n:host #price-tables .faq {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  margin: 96px auto;\n  max-width: 840px; }\n:host #price-tables .faq .title {\n    font-size: 32px;\n    font-weight: 300;\n    text-align: center;\n    margin-bottom: 64px;\n    padding: 0 16px; }\n:host #price-tables .faq .item {\n    padding: 24px; }\n:host #price-tables .faq .item .question {\n      font-size: 18px;\n      margin-bottom: 8px; }\n:host #price-tables .faq .item .answer {\n      font-size: 16px;\n      line-height: 1.5;\n      color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-2/style-2.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/pages/pricing/style-2/style-2.component.ts ***!
  \*************************************************************************/
/*! exports provided: FusePricingStyle2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FusePricingStyle2Component", function() { return FusePricingStyle2Component; });
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

var FusePricingStyle2Component = /** @class */ (function () {
    function FusePricingStyle2Component() {
    }
    FusePricingStyle2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-pricing-style-2',
            template: __webpack_require__(/*! ./style-2.component.html */ "./src/app/main/content/pages/pricing/style-2/style-2.component.html"),
            styles: [__webpack_require__(/*! ./style-2.component.scss */ "./src/app/main/content/pages/pricing/style-2/style-2.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FusePricingStyle2Component);
    return FusePricingStyle2Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-3/style-3.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/pricing/style-3/style-3.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"price-tables\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n\r\n        <div class=\"hero-text\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex>\r\n\r\n            <div class=\"h1\">Simple Pricing!</div>\r\n            <div class=\"h3\">\r\n                The most advanced customer support tools with a simple and affordable pricing. And you can always try\r\n                for 30 days, free!\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\" fxLayout=\"column\">\r\n\r\n        <!-- PRICE TABLES -->\r\n        <div class=\"price-tables\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n\r\n            <div class=\"price-table style-3 mat-elevation-z4\" fxLayout=\"column\">\r\n\r\n                <div class=\"package-type\">\r\n                    <div class=\"title\">Starter</div>\r\n                    <div class=\"subtitle\">For small teams</div>\r\n                </div>\r\n\r\n                <div class=\"price mat-primary-300-bg\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                    <div class=\"currency\">$</div>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\r\n                        <div class=\"value\">29</div>\r\n                        <div class=\"period\">monthly per user</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                    <div class=\"term\">Unlimited projects</div>\r\n                    <div class=\"term\">Unlimited pages</div>\r\n                    <div class=\"term\">Unlimited disk space</div>\r\n                    <div class=\"term\">24 / 7 Free support</div>\r\n                </div>\r\n\r\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED FREE</button>\r\n\r\n                <div class=\"note\">7 day free trial to start</div>\r\n\r\n            </div>\r\n\r\n            <div class=\"price-table style-3 mat-elevation-z12\" fxLayout=\"column\">\r\n\r\n                <div class=\"package-type\">\r\n                    <div class=\"title\">Pro</div>\r\n                    <div class=\"subtitle\">For larger teams</div>\r\n                </div>\r\n\r\n                <div class=\"price mat-primary-bg\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                    <div class=\"currency\">$</div>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\r\n                        <div class=\"value\">59</div>\r\n                        <div class=\"period\">monthly per user</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                    <div class=\"term\">Unlimited projects</div>\r\n                    <div class=\"term\">Unlimited pages</div>\r\n                    <div class=\"term\">Unlimited disk space</div>\r\n                    <div class=\"term\">24 / 7 Free support</div>\r\n                    <div class=\"term mat-warn-fg\">Advanced reporting</div>\r\n                    <div class=\"term mat-warn-fg\">Customizable interface</div>\r\n                    <div class=\"term mat-warn-fg\">CRM Integration</div>\r\n                </div>\r\n\r\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">GET STARTED FREE</button>\r\n\r\n                <div class=\"note\">30 day free trial to start</div>\r\n\r\n            </div>\r\n\r\n            <div class=\"price-table style-3 mat-elevation-z4\" fxLayout=\"column\">\r\n\r\n                <div class=\"package-type\">\r\n                    <div class=\"title\">Enterprise</div>\r\n                    <div class=\"subtitle\">For big teams</div>\r\n                </div>\r\n\r\n                <div class=\"price mat-primary-300-bg\" fxLayout=\"row\" fxLayoutAlign=\"center start\">\r\n                    <div class=\"currency\">$</div>\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\">\r\n                        <div class=\"value\">99</div>\r\n                        <div class=\"period\">monthly per user</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"terms\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n                    <div class=\"term\">Unlimited projects</div>\r\n                    <div class=\"term\">Unlimited pages</div>\r\n                    <div class=\"term\">Unlimited disk space</div>\r\n                    <div class=\"term\">For full feature list, call us</div>\r\n                </div>\r\n\r\n                <button mat-raised-button class=\"cta-button\" color=\"accent\">CALL US</button>\r\n\r\n                <div class=\"note\">90 day free trial to start</div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / PRICE TABLES -->\r\n\r\n        <div class=\"faq\" fxLayout=\"row wrap\">\r\n\r\n            <div class=\"title\" fxFlex=\"100\">Frequently Asked Questions</div>\r\n\r\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <div class=\"question\">How does free trial work?</div>\r\n                <div class=\"answer\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\r\n                    accumsan. In dignissim laoreet ipsum eu interdum.\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <div class=\"question\">Can I cancel any time?</div>\r\n                <div class=\"answer\">\r\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\r\n                    Donec maximus ipsum in malesuada hendrerit.\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <div class=\"question\">What happens after my trial ended?</div>\r\n                <div class=\"answer\">\r\n                    Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed quis neque tellus.\r\n                    Donec maximus ipsum in malesuada hendrerit.\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <div class=\"question\">Can I have a discount?</div>\r\n                <div class=\"answer\">\r\n                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec augue tincidunt\r\n                    accumsan. In dignissim laoreet ipsum eu interdum.\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-3/style-3.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/pricing/style-3/style-3.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #price-tables .header {\n  padding: 24px;\n  height: 600px;\n  min-height: 600px;\n  background: #1A237E;\n  background: -webkit-gradient(linear, left top, right top, from(#0E2A3B), to(#34306B));\n  background: linear-gradient(to right, #0E2A3B 0%, #34306B 100%); }\n@media (max-width: 599px) {\n    :host #price-tables .header {\n      height: 400px;\n      min-height: 400px; } }\n:host #price-tables .header .hero-text {\n    margin: 128px 24px; }\n@media (max-width: 599px) {\n      :host #price-tables .header .hero-text {\n        margin: 64px 24px; } }\n:host #price-tables .header .hero-text .h1 {\n      color: white;\n      font-size: 48px;\n      font-weight: 400;\n      letter-spacing: 0.01em;\n      text-align: center; }\n@media (max-width: 599px) {\n        :host #price-tables .header .hero-text .h1 {\n          font-size: 32px; } }\n:host #price-tables .header .hero-text .h3 {\n      color: rgba(255, 255, 255, 0.75);\n      max-width: 480px;\n      text-align: center;\n      margin-top: 16px;\n      font-weight: 300;\n      letter-spacing: 0.05em; }\n@media (max-width: 599px) {\n        :host #price-tables .header .hero-text .h3 {\n          font-size: 14px; } }\n:host #price-tables .price-tables {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  margin-top: -192px; }\n@media (max-width: 599px) {\n    :host #price-tables .price-tables {\n      margin-top: -128px; } }\n:host #price-tables .price-tables .price-table {\n    margin: 12px; }\n:host #price-tables .faq {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  margin: 96px auto;\n  max-width: 840px; }\n:host #price-tables .faq .title {\n    font-size: 32px;\n    font-weight: 300;\n    text-align: center;\n    margin-bottom: 64px;\n    padding: 0 16px; }\n:host #price-tables .faq .item {\n    padding: 24px; }\n:host #price-tables .faq .item .question {\n      font-size: 18px;\n      margin-bottom: 8px; }\n:host #price-tables .faq .item .answer {\n      font-size: 16px;\n      line-height: 1.5;\n      color: rgba(0, 0, 0, 0.54); }\n"

/***/ }),

/***/ "./src/app/main/content/pages/pricing/style-3/style-3.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/pages/pricing/style-3/style-3.component.ts ***!
  \*************************************************************************/
/*! exports provided: FusePricingStyle3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FusePricingStyle3Component", function() { return FusePricingStyle3Component; });
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

var FusePricingStyle3Component = /** @class */ (function () {
    function FusePricingStyle3Component() {
    }
    FusePricingStyle3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-pricing-style-3',
            template: __webpack_require__(/*! ./style-3.component.html */ "./src/app/main/content/pages/pricing/style-3/style-3.component.html"),
            styles: [__webpack_require__(/*! ./style-3.component.scss */ "./src/app/main/content/pages/pricing/style-3/style-3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FusePricingStyle3Component);
    return FusePricingStyle3Component;
}());



/***/ }),

/***/ "./src/app/main/content/pages/profile/profile.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main/content/pages/profile/profile.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"profile\" class=\"page-layout simple tabbed\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header p-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\r\n         fxLayoutAlign.gt-sm=\"space-between end\">\r\n\r\n        <div class=\"user-info\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\r\n             fxLayoutAlign.gt-sm=\"start center\">\r\n            <img class=\"profile-image avatar huge\" src=\"assets/images/avatars/katherine.jpg\"\r\n                 *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\r\n            <div class=\"name\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Katherine Wilson\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" *fuseIfOnDom\r\n             [@animate]=\"{value:'*',params:{delay:'200ms'}}\">\r\n            <button mat-raised-button color=\"accent\" aria-label=\"Follow\">Follow</button>\r\n            <button mat-raised-button color=\"primary\" aria-label=\"Send Message\">Send Message</button>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group dynamicHeight=\"true\">\r\n\r\n            <mat-tab label=\"Timeline\">\r\n                <fuse-profile-timeline></fuse-profile-timeline>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"About\">\r\n                <fuse-profile-about></fuse-profile-about>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Photos & Videos\">\r\n                <fuse-profile-photos-videos></fuse-profile-photos-videos>\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/profile.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/main/content/pages/profile/profile.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#profile .header {\n  height: 320px;\n  min-height: 320px;\n  max-height: 320px;\n  background: url(\"/assets/images/backgrounds/dark-material-bg.jpg\") no-repeat 0 45%;\n  background-size: cover; }\n#profile .header .profile-image {\n    margin-right: 24px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .profile-image {\n        margin: 0 0 16px 0; } }\n#profile .header .name {\n    font-size: 34px;\n    color: #FFFFFF; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .name {\n        margin-bottom: 32px; } }\n#profile .header .actions button {\n    text-transform: none;\n    padding: 0 16px;\n    height: 32px;\n    line-height: 32px;\n    margin: 0 0 0 8px; }\n#profile .content {\n  -webkit-box-flex: 1;\n          flex: 1; }\n#profile .content mat-tab-group {\n    height: 100%; }\n#profile .content mat-tab-group .mat-tab-body-wrapper {\n      -webkit-box-flex: 1;\n              flex-grow: 1; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/profile.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/content/pages/profile/profile.component.ts ***!
  \*****************************************************************/
/*! exports provided: FuseProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseProfileComponent", function() { return FuseProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseProfileComponent = /** @class */ (function () {
    function FuseProfileComponent() {
    }
    FuseProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/main/content/pages/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/main/content/pages/profile/profile.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [])
    ], FuseProfileComponent);
    return FuseProfileComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/profile/profile.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/main/content/pages/profile/profile.module.ts ***!
  \**************************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile.service */ "./src/app/main/content/pages/profile/profile.service.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.component */ "./src/app/main/content/pages/profile/profile.component.ts");
/* harmony import */ var _tabs_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/timeline/timeline.component */ "./src/app/main/content/pages/profile/tabs/timeline/timeline.component.ts");
/* harmony import */ var _tabs_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/about/about.component */ "./src/app/main/content/pages/profile/tabs/about/about.component.ts");
/* harmony import */ var _tabs_photos_videos_photos_videos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs/photos-videos/photos-videos.component */ "./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'profile',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_5__["FuseProfileComponent"],
        resolve: {
            profile: _profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
        }
    }
];
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _profile_component__WEBPACK_IMPORTED_MODULE_5__["FuseProfileComponent"],
                _tabs_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["FuseProfileTimelineComponent"],
                _tabs_about_about_component__WEBPACK_IMPORTED_MODULE_7__["FuseProfileAboutComponent"],
                _tabs_photos_videos_photos_videos_component__WEBPACK_IMPORTED_MODULE_8__["FuseProfilePhotosVideosComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            providers: [
                _profile_service__WEBPACK_IMPORTED_MODULE_4__["ProfileService"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/profile/profile.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/content/pages/profile/profile.service.ts ***!
  \***************************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.timelineOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.aboutOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.photosVideosOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ProfileService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getTimeline(),
                _this.getAbout(),
                _this.getPhotosVideos()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get timeline
     */
    ProfileService.prototype.getTimeline = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/profile-timeline')
                .subscribe(function (timeline) {
                _this.timeline = timeline;
                _this.timelineOnChanged.next(_this.timeline);
                resolve(_this.timeline);
            }, reject);
        });
    };
    /**
     * Get about
     */
    ProfileService.prototype.getAbout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/profile-about')
                .subscribe(function (about) {
                _this.about = about;
                _this.aboutOnChanged.next(_this.about);
                resolve(_this.about);
            }, reject);
        });
    };
    /**
     * Get photos & videos
     */
    ProfileService.prototype.getPhotosVideos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/profile-photos-videos')
                .subscribe(function (photosVideos) {
                _this.photosVideos = photosVideos;
                _this.photosVideosOnChanged.next(_this.photosVideos);
                resolve(_this.photosVideos);
            }, reject);
        });
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/about/about.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/pages/profile/tabs/about/about.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"about\" class=\"p-24\" fxLayout=\"row wrap\">\r\n\r\n    <div class=\"about-content\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"65\">\r\n\r\n        <div class=\"profile-box info-box general\" fxLayout=\"column\">\r\n\r\n            <header class=\"mat-accent-bg\">\r\n                <div class=\"title\">General Information</div>\r\n            </header>\r\n\r\n            <div class=\"content\">\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Gender</div>\r\n                    <div class=\"info\">{{about.general.gender}}</div>\r\n                </div>\r\n\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Birthday</div>\r\n                    <div class=\"info\">{{about.general.birthday}}</div>\r\n                </div>\r\n\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Locations</div>\r\n                    <div class=\"info location\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n                         *ngFor=\"let location of about.general.locations\">\r\n                        <span>{{location}}</span>\r\n                        <mat-icon class=\"s-16 ml-4\">location_on</mat-icon>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">About Me</div>\r\n                    <div class=\"info\">{{about.general.about}}</div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"profile-box info-box work\" fxLayout=\"column\">\r\n\r\n            <header class=\"mat-accent-bg\">\r\n                <div class=\"title\">Work</div>\r\n            </header>\r\n\r\n            <div class=\"content\">\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Occupation</div>\r\n                    <div class=\"info\">{{about.work.occupation}}</div>\r\n                </div>\r\n\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Skills</div>\r\n                    <div class=\"info\">{{about.work.skills}}</div>\r\n                </div>\r\n\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Jobs</div>\r\n                    <table class=\"info jobs\">\r\n                        <tr class=\"job\" *ngFor=\"let job of about.work.jobs\">\r\n                            <td class=\"company\">{{job.company}}</td>\r\n                            <td class=\"date\">{{job.date}}</td>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"profile-box info-box contact\" fxLayout=\"column\">\r\n\r\n            <header class=\"mat-accent-bg\">\r\n                <div class=\"title\">Contact</div>\r\n            </header>\r\n\r\n            <div class=\"content\">\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Address</div>\r\n                    <div class=\"info\">{{about.contact.address}}</div>\r\n                </div>\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Tel.</div>\r\n                    <div class=\"info\" *ngFor=\"let tel of about.contact.tel\">\r\n                        <span>{{tel}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Website</div>\r\n                    <div class=\"info\" *ngFor=\"let website of about.contact.websites\">\r\n                        <span>{{website}}</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"info-line\">\r\n                    <div class=\"title\">Emails</div>\r\n                    <div class=\"info\" *ngFor=\"let email of about.contact.emails\">\r\n                        <span>{{email}}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"about-sidebar\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"35\">\r\n\r\n        <div class=\"profile-box friends\" fxLayout=\"column\">\r\n\r\n            <header class=\"mat-accent-bg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div class=\"title\">Friends</div>\r\n                <div class=\"more secondary-text\">\r\n                    <span>See 454 more...</span>\r\n                </div>\r\n            </header>\r\n\r\n            <div class=\"content\" fxLayout=\"row wrap\">\r\n                <div class=\"friend\" fxFlex=\"20\" *ngFor=\"let friend of about.friends\">\r\n                    <img [src]=\"friend.avatar\">\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"profile-box groups\" fxLayout=\"column\">\r\n\r\n            <header class=\"mat-accent-bg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div class=\"title\">Joined Groups</div>\r\n                <div class=\"more secondary-text\">\r\n                    <span>See 6 more...</span>\r\n                </div>\r\n            </header>\r\n\r\n            <div class=\"content\">\r\n\r\n                <div class=\"group\" *ngFor=\"let group of about.groups\" fxLayout=\"row\"\r\n                     fxLayoutAlign=\"space-between center\">\r\n\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                        <img [src]=\"group.logo\" class=\"logo\" alt=\"{{group.name}}\"/>\r\n\r\n                        <div>\r\n                            <div class=\"name\">{{group.name}}</div>\r\n                            <div class=\"category\">{{group.category}}</div>\r\n                            <div class=\"members\">{{group.members}} people</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <button mat-icon-button aria-label=\"More\">\r\n                        <mat-icon>more_vert</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/about/about.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/pages/profile/tabs/about/about.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #about {\n  max-width: 1200px; }\n:host #about .about-content .general .location mat-icon {\n    line-height: 13px !important; }\n:host #about .about-content .work .job .company {\n    padding: 0 16px 0 0;\n    font-weight: 500; }\n:host #about .about-content .work .job .date {\n    color: rgba(0, 0, 0, 0.54); }\n:host #about .about-sidebar {\n    padding-left: 32px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      :host #about .about-sidebar {\n        padding: 8px; } }\n:host #about .about-sidebar .friends .content .friend {\n      padding: 4px; }\n:host #about .about-sidebar .groups .content .group {\n      margin-bottom: 16px; }\n:host #about .about-sidebar .groups .content .group:last-child {\n        margin-bottom: 0; }\n:host #about .about-sidebar .groups .content .group .logo {\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        margin-right: 16px; }\n:host #about .about-sidebar .groups .content .group .name {\n        font-weight: 500;\n        font-size: 15px; }\n:host #about .about-sidebar .groups .content .group .category,\n      :host #about .about-sidebar .groups .content .group .members {\n        color: rgba(0, 0, 0, 0.54); }\n:host #about .about-sidebar .groups .content .group .members {\n        margin-top: 16px; }\n:host .profile-box {\n  margin-bottom: 16px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n:host .profile-box header {\n    padding: 16px; }\n:host .profile-box header .title {\n      font-size: 17px; }\n:host .profile-box header .more {\n      cursor: pointer; }\n:host .profile-box .content {\n    padding: 16px;\n    background-color: #FFF; }\n:host .profile-box footer {\n    padding: 8px;\n    border-top: 1px solid rgba(0, 0, 0, 0.08);\n    background-color: rgba(0, 0, 0, 0.06); }\n:host .profile-box.info-box .info-line {\n    margin-bottom: 24px; }\n:host .profile-box.info-box .info-line .title {\n      font-size: 15px;\n      font-weight: 500;\n      padding-bottom: 4px; }\n:host .profile-box.info-box .info-line:last-child {\n      margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/about/about.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/pages/profile/tabs/about/about.component.ts ***!
  \**************************************************************************/
/*! exports provided: FuseProfileAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseProfileAboutComponent", function() { return FuseProfileAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../profile.service */ "./src/app/main/content/pages/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseProfileAboutComponent = /** @class */ (function () {
    function FuseProfileAboutComponent(profileService) {
        var _this = this;
        this.profileService = profileService;
        this.profileService.aboutOnChanged.subscribe(function (about) {
            _this.about = about;
        });
    }
    FuseProfileAboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-profile-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/main/content/pages/profile/tabs/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/main/content/pages/profile/tabs/about/about.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], FuseProfileAboutComponent);
    return FuseProfileAboutComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"photos-videos\" class=\"p-24\">\r\n    <div class=\"period\" *ngFor=\"let period of photosVideos\">\r\n\r\n        <div class=\"period-title\">\r\n            <span class=\"name\">{{period.name}}</span>\r\n            <span class=\"info\">{{period.info}}</span>\r\n        </div>\r\n\r\n        <div class=\"period-media\" fxLayout=\"row wrap\">\r\n            <div class=\"media\" *ngFor=\"let media of period.media\">\r\n                <img class=\"preview\" [src]=\"media.preview\" title=\"{{media.title}}\">\r\n                <div class=\"title\">{{media.title}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #photos-videos .period .period-title {\n  margin-bottom: 24px; }\n:host #photos-videos .period .period-title .name {\n    font-size: 20px; }\n:host #photos-videos .period .period-title .info {\n    margin-left: 16px;\n    font-size: 15px;\n    color: rgba(0, 0, 0, 0.54); }\n:host #photos-videos .period .period-media {\n  margin-bottom: 16px; }\n:host #photos-videos .period .period-media .media {\n    margin: 0 16px 16px 0;\n    position: relative; }\n:host #photos-videos .period .period-media .media .preview {\n      width: 256px;\n      height: 256px;\n      display: block; }\n:host #photos-videos .period .period-media .media .title {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: 10;\n      padding: 0 16px;\n      height: 48px;\n      line-height: 48px;\n      background: rgba(0, 0, 0, 0.54);\n      color: #FFF;\n      font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FuseProfilePhotosVideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseProfilePhotosVideosComponent", function() { return FuseProfilePhotosVideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../profile.service */ "./src/app/main/content/pages/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseProfilePhotosVideosComponent = /** @class */ (function () {
    function FuseProfilePhotosVideosComponent(profileService) {
        var _this = this;
        this.profileService = profileService;
        this.profileService.photosVideosOnChanged.subscribe(function (photosVideos) {
            _this.photosVideos = photosVideos;
        });
    }
    FuseProfilePhotosVideosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-profile-photos-videos',
            template: __webpack_require__(/*! ./photos-videos.component.html */ "./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.html"),
            styles: [__webpack_require__(/*! ./photos-videos.component.scss */ "./src/app/main/content/pages/profile/tabs/photos-videos/photos-videos.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], FuseProfilePhotosVideosComponent);
    return FuseProfilePhotosVideosComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/timeline/timeline.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/pages/profile/tabs/timeline/timeline.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"timeline\" class=\"p-24\" fxLayout=\"row wrap\">\r\n\r\n    <div class=\"timeline-content\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"55\" fxFlex.gt-md=\"65\">\r\n\r\n        <div class=\"profile-box add-post\">\r\n\r\n            <div class=\"form\" fxFlex>\r\n\r\n                <textarea placeholder=\"Write something..\"></textarea>\r\n\r\n                <footer fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                        <button mat-icon-button aria-label=\"Add photo\" matTooltip=\"Add Photo\">\r\n                            <mat-icon>photo</mat-icon>\r\n                        </button>\r\n\r\n                        <button mat-icon-button aria-label=\"Mention somebody\" matTooltip=\"Mention somebody\">\r\n                            <mat-icon>person</mat-icon>\r\n                        </button>\r\n\r\n                        <button mat-icon-button aria-label=\"Add location\" matTooltip=\"Add location\">\r\n                            <mat-icon>location_on</mat-icon>\r\n                        </button>\r\n\r\n                    </div>\r\n\r\n                    <button mat-raised-button color=\"accent\" class=\"post-button\" aria-label=\"POST\">POST</button>\r\n\r\n                </footer>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <mat-divider></mat-divider>\r\n\r\n        <div class=\"timeline-item\" *ngFor=\"let post of timeline.posts\">\r\n\r\n            <header fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                <div class=\"user\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                    <img class=\"avatar\" [src]=\"post.user.avatar\">\r\n\r\n                    <div fxLayout=\"column\">\r\n                        <div class=\"title\">\r\n                            <span class=\"username\">{{post.user.name}}</span>\r\n                            <span *ngIf=\"post.type === 'post'\">posted on your timeline</span>\r\n                            <span *ngIf=\"post.type === 'something'\">shared something with you</span>\r\n                            <span *ngIf=\"post.type === 'video'\">shared a video with you</span>\r\n                            <span *ngIf=\"post.type === 'article'\">shared an article with you</span>\r\n                        </div>\r\n                        <div class=\"time\">{{post.time}}</div>\r\n                    </div>\r\n                </div>\r\n\r\n                <button mat-icon-button aria-label=\"More\">\r\n                    <mat-icon>more_vert</mat-icon>\r\n                </button>\r\n            </header>\r\n\r\n            <div class=\"content\">\r\n                <div *ngIf=\"post.message\" class=\"message\">\r\n                    {{post.message}}\r\n                </div>\r\n\r\n                <div *ngIf=\"post.media\" class=\"media\">\r\n                    <img *ngIf=\"post.media.type === 'image'\" [src]=\"post.media.preview\">\r\n                    <div *ngIf=\"post.media.type === 'video'\" [innerHtml]=\"post.media.embed\"></div>\r\n                </div>\r\n\r\n                <div *ngIf=\"post.article\" fxLayout=\"column\" class=\"article\">\r\n                    <div class=\"media\">\r\n                        <img [src]=\"post.article.media.preview\">\r\n                    </div>\r\n                    <div class=\"title\">{{post.article.title}}</div>\r\n                    <div class=\"subtitle\">{{post.article.subtitle}}</div>\r\n                    <div class=\"excerpt\">{{post.article.excerpt}}</div>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                    <button mat-button class=\"like-button\">\r\n                        <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"s-16\">favorite</mat-icon>\r\n                            <span>Like</span>&nbsp;<span>({{post.like}})</span>\r\n                        </span>\r\n                    </button>\r\n                    <button mat-button class=\"share-button\">\r\n                        <span fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <mat-icon class=\"s-16\">share</mat-icon>\r\n                            <span>Share</span>&nbsp;<span>({{post.share}})</span>\r\n                        </span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            <footer class=\"\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n                <div *ngIf=\"post.comments\" class=\"comment-count\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                    {{post.comments.length}} comments\r\n                    <mat-icon class=\"s-16\">keyboard_arrow_down</mat-icon>\r\n                </div>\r\n\r\n                <div class=\"comment\" fxLayout=\"row\" fxFlexFill *ngFor=\"let comment of post.comments\">\r\n                    <img [src]=\"comment.user.avatar\" class=\"avatar\"/>\r\n\r\n                    <div fxLayout=\"column\" fxFlex>\r\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                            <span class=\"username\">{{comment.user.name}}</span>\r\n                            <span class=\"time\">{{comment.time}}</span>\r\n                        </div>\r\n                        <div class=\"message\">\r\n                            {{comment.message}}\r\n                        </div>\r\n                        <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                            <a href=\"#\" class=\"reply-button\">Reply</a>\r\n                            <mat-icon fxFlex class=\"report-button s-16\">flag</mat-icon>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"reply\" fxLayout=\"row\" fxFlexFill>\r\n                    <img src=\"assets/images/avatars/profile.jpg\" class=\"avatar\"/>\r\n\r\n                    <form fxFlex>\r\n                        <textarea placeholder=\"Add a comment...\"></textarea>\r\n                        <button mat-raised-button color=\"accent\" class=\"post-comment-button\" aria-label=\"Post Comment\">\r\n                            Post Comment\r\n                        </button>\r\n                    </form>\r\n                </div>\r\n            </footer>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"timeline-sidebar\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"45\" fxFlex.gt-md=\"35\">\r\n\r\n        <div class=\"profile-box latest-activity\" fxLayout=\"column\">\r\n\r\n            <header class=\"mat-accent-bg\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <div class=\"title\">Latest Activity</div>\r\n                <div class=\"more secondary-text\">See All</div>\r\n            </header>\r\n\r\n            <div class=\"content\" fxLayout=\"row wrap\">\r\n                <div class=\"activities\">\r\n                    <div class=\"activity\" fxLayout=\"row\" fxLayoutAlign=\"start start\"\r\n                         *ngFor=\"let activity of timeline.activities\">\r\n                        <img [src]=\"activity.user.avatar\" class=\"avatar\" alt=\"{{activity.user.name}}\"/>\r\n\r\n                        <div fxLayout=\"column\">\r\n                            <div>\r\n                                <span class=\"username\">{{activity.user.name}}</span>\r\n                                <span class=\"message\"> {{activity.message}}</span>\r\n                            </div>\r\n                            <span class=\"time secondary-text\">{{activity.time}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/timeline/timeline.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/pages/profile/tabs/timeline/timeline.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #timeline {\n  max-width: 1200px; }\n:host #timeline .timeline-content .add-post {\n    margin-bottom: 0;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n:host #timeline .timeline-content .add-post textarea {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-flex: 1;\n              flex: 1 0 auto;\n      font-size: 13px;\n      width: 100%;\n      height: 140px;\n      border: none;\n      padding: 16px;\n      resize: vertical; }\n:host #timeline .timeline-content .add-post footer {\n      padding: 8px;\n      border-top: 1px solid rgba(0, 0, 0, 0.08);\n      background: #F3F4F5; }\n:host #timeline .timeline-content .add-post footer .post-button {\n        margin: 0;\n        width: 64px;\n        min-width: 64px;\n        height: 30px;\n        line-height: 30px;\n        min-height: 30px; }\n:host #timeline .timeline-content mat-divider {\n    border-top-width: 1px;\n    border-top-style: solid;\n    margin: 32px 0; }\n:host #timeline .timeline-content .timeline-item {\n    margin-bottom: 32px;\n    overflow: hidden;\n    border-radius: 2px;\n    background: #FFFFFF;\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n:host #timeline .timeline-content .timeline-item:last-child {\n      margin-bottom: 0; }\n:host #timeline .timeline-content .timeline-item header {\n      padding: 16px 0 8px 16px; }\n:host #timeline .timeline-content .timeline-item header .title {\n        font-weight: 500; }\n:host #timeline .timeline-content .timeline-item header .title .username {\n          margin-right: 2px;\n          color: #039be5; }\n:host #timeline .timeline-content .timeline-item header .time {\n        color: rgba(0, 0, 0, 0.54); }\n:host #timeline .timeline-content .timeline-item .content .message {\n      padding: 16px; }\n:host #timeline .timeline-content .timeline-item .content .media {\n      padding: 16px; }\n:host #timeline .timeline-content .timeline-item .content .media img, :host #timeline .timeline-content .timeline-item .content .media iframe {\n        width: 100%; }\n:host #timeline .timeline-content .timeline-item .content .media a {\n        color: inherit; }\n:host #timeline .timeline-content .timeline-item .content .like-button,\n    :host #timeline .timeline-content .timeline-item .content .share-button {\n      padding: 4px 6px;\n      text-transform: inherit;\n      font-size: 13px;\n      font-weight: normal;\n      margin: 0 0 16px 8px;\n      min-width: inherit;\n      line-height: inherit; }\n:host #timeline .timeline-content .timeline-item .content .like-button:hover,\n      :host #timeline .timeline-content .timeline-item .content .share-button:hover {\n        background-color: transparent; }\n:host #timeline .timeline-content .timeline-item .content .like-button mat-icon,\n      :host #timeline .timeline-content .timeline-item .content .share-button mat-icon {\n        margin: 0 8px 0 0; }\n:host #timeline .timeline-content .timeline-item .content .article {\n      border: 1px solid rgba(0, 0, 0, 0.12);\n      margin: 16px; }\n:host #timeline .timeline-content .timeline-item .content .article .media {\n        padding: 0;\n        overflow: hidden;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host #timeline .timeline-content .timeline-item .content .article .media img {\n          display: block;\n          padding: 0; }\n:host #timeline .timeline-content .timeline-item .content .article .title {\n        font-size: 15px;\n        padding: 16px 16px 4px 16px; }\n:host #timeline .timeline-content .timeline-item .content .article .subtitle {\n        padding: 0 16px;\n        color: rgba(0, 0, 0, 0.54); }\n:host #timeline .timeline-content .timeline-item .content .article .excerpt {\n        padding: 16px 16px; }\n:host #timeline .timeline-content .timeline-item footer {\n      border-top: 1px solid rgba(0, 0, 0, 0.08);\n      background-color: rgba(0, 0, 0, 0.04);\n      padding: 16px; }\n:host #timeline .timeline-content .timeline-item footer .comment-count {\n        margin-bottom: 16px;\n        cursor: pointer; }\n:host #timeline .timeline-content .timeline-item footer .comment-count mat-icon {\n          margin-left: 8px; }\n:host #timeline .timeline-content .timeline-item footer .comment {\n        margin-bottom: 24px !important; }\n:host #timeline .timeline-content .timeline-item footer .comment .username {\n          font-weight: 500;\n          margin-right: 4px; }\n:host #timeline .timeline-content .timeline-item footer .comment .message {\n          color: rgba(0, 0, 0, 0.87); }\n:host #timeline .timeline-content .timeline-item footer .comment .time {\n          color: rgba(0, 0, 0, 0.54); }\n:host #timeline .timeline-content .timeline-item footer .comment .actions {\n          margin-top: 8px; }\n:host #timeline .timeline-content .timeline-item footer .comment .actions .reply-button {\n            margin-right: 16px;\n            cursor: pointer;\n            color: #039be5; }\n:host #timeline .timeline-content .timeline-item footer .comment .actions .report-button {\n            margin: 0;\n            cursor: pointer; }\n:host #timeline .timeline-content .timeline-item footer .reply form textarea {\n        width: 100% !important;\n        min-height: 72px;\n        padding: 8px;\n        margin-bottom: 8px;\n        font-size: 13px;\n        border: 1px solid rgba(0, 0, 0, 0.12); }\n:host #timeline .timeline-content .timeline-item footer .reply form .post-comment-button {\n        margin: 0;\n        text-transform: inherit;\n        font-weight: normal;\n        padding: 0 12px;\n        min-height: 30px;\n        min-width: inherit;\n        line-height: 30px; }\n:host #timeline .timeline-sidebar {\n    padding-left: 32px; }\n@media (max-width: 959px) {\n      :host #timeline .timeline-sidebar {\n        padding: 32px 0 0 0; } }\n:host #timeline .timeline-sidebar .latest-activity .content {\n      background-color: #FFF; }\n:host #timeline .timeline-sidebar .latest-activity .content .activities .activity {\n        padding: 16px 0; }\n:host #timeline .timeline-sidebar .latest-activity .content .activities .activity .avatar {\n          margin-right: 16px; }\n:host #timeline .timeline-sidebar .latest-activity .content .activities .activity .username {\n          font-weight: 500;\n          color: #039be5; }\n:host #timeline .timeline-sidebar .latest-activity .content .activities .activity .message {\n          font-weight: 500; }\n:host .profile-box {\n  margin-bottom: 16px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n:host .profile-box header {\n    padding: 16px; }\n:host .profile-box header .title {\n      font-size: 17px; }\n:host .profile-box header .more {\n      cursor: pointer; }\n:host .profile-box .content {\n    padding: 16px;\n    background-color: #FFF; }\n:host .profile-box footer {\n    padding: 8px;\n    border-top: 1px solid rgba(0, 0, 0, 0.08);\n    background-color: rgba(0, 0, 0, 0.06); }\n:host .profile-box.info-box .info-line {\n    margin-bottom: 24px; }\n:host .profile-box.info-box .info-line .title {\n      font-size: 15px;\n      font-weight: 500;\n      padding-bottom: 4px; }\n:host .profile-box.info-box .info-line:last-child {\n      margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/profile/tabs/timeline/timeline.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/content/pages/profile/tabs/timeline/timeline.component.ts ***!
  \********************************************************************************/
/*! exports provided: FuseProfileTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseProfileTimelineComponent", function() { return FuseProfileTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../profile.service */ "./src/app/main/content/pages/profile/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseProfileTimelineComponent = /** @class */ (function () {
    function FuseProfileTimelineComponent(profileService) {
        var _this = this;
        this.profileService = profileService;
        this.profileService.timelineOnChanged.subscribe(function (timeline) {
            _this.timeline = timeline;
        });
    }
    FuseProfileTimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-profile-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/main/content/pages/profile/tabs/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/main/content/pages/profile/tabs/timeline/timeline.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], FuseProfileTimelineComponent);
    return FuseProfileTimelineComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/search/search.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main/content/pages/search/search.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search\" class=\"page-layout simple tabbed\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\r\n         fxLayoutAlign.gt-sm=\"space-between end\">\r\n\r\n        <mat-form-field class=\"w-100-p\">\r\n            <input matInput name=\"search\" placeholder=\"Search...\">\r\n        </mat-form-field>\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\">\r\n\r\n        <mat-tab-group dynamicHeight=\"true\">\r\n\r\n            <mat-tab label=\"Classic\">\r\n                <fuse-search-classic></fuse-search-classic>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Table\">\r\n                <fuse-search-table></fuse-search-table>\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n    </div>\r\n    <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/search/search.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/main/content/pages/search/search.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n@media screen and (max-width: 599px) {\n  :host #search .header {\n    padding: 16px; } }\n:host #search .header .search {\n  position: relative;\n  max-width: 780px; }\n:host #search .header .search .search-icon {\n    margin: 0 -24px 0 0; }\n:host #search .header .search .search-input {\n    padding: 0 0 0 48px;\n    background: none;\n    font-size: 24px;\n    line-height: 48px;\n    height: 48px;\n    color: #FFFFFF;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.3);\n    -webkit-transition: border-color 300ms ease;\n    transition: border-color 300ms ease; }\n:host #search .header .search .search-input:focus {\n      border-color: white; }\n:host #search .header .search .search-input::-webkit-input-placeholder {\n      color: #FFFFFF; }\n:host #search .content .result-info {\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host #search .content .result-info .mat-title {\n    padding-right: 8px; }\n@media screen and (max-width: 599px) {\n    :host #search .content .result-info .pager {\n      margin-top: 16px; } }\n:host #search .content .result-info .pager .page-info {\n    font-weight: 500;\n    margin: 0 8px 0 0; }\n:host #search .content .simple-pagination {\n  margin: 32px 0; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/search/search.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/content/pages/search/search.component.ts ***!
  \***************************************************************/
/*! exports provided: FuseSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseSearchComponent", function() { return FuseSearchComponent; });
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

var FuseSearchComponent = /** @class */ (function () {
    function FuseSearchComponent() {
    }
    FuseSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/main/content/pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/main/content/pages/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseSearchComponent);
    return FuseSearchComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/search/search.module.ts":
/*!************************************************************!*\
  !*** ./src/app/main/content/pages/search/search.module.ts ***!
  \************************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.service */ "./src/app/main/content/pages/search/search.service.ts");
/* harmony import */ var _tabs_classic_classic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/classic/classic.component */ "./src/app/main/content/pages/search/tabs/classic/classic.component.ts");
/* harmony import */ var _tabs_table_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/table/table.component */ "./src/app/main/content/pages/search/tabs/table/table.component.ts");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search.component */ "./src/app/main/content/pages/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'search',
        component: _search_component__WEBPACK_IMPORTED_MODULE_8__["FuseSearchComponent"],
        resolve: {
            search: _search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]
        }
    }
];
var SearchModule = /** @class */ (function () {
    function SearchModule() {
    }
    SearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _search_component__WEBPACK_IMPORTED_MODULE_8__["FuseSearchComponent"],
                _tabs_classic_classic_component__WEBPACK_IMPORTED_MODULE_6__["FuseSearchClassicComponent"],
                _tabs_table_table_component__WEBPACK_IMPORTED_MODULE_7__["FuseSearchTableComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"]
            ],
            providers: [
                _search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]
            ]
        })
    ], SearchModule);
    return SearchModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/search/search.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/content/pages/search/search.service.ts ***!
  \*************************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.classicOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.tableOnChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    SearchService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getClassic(),
                _this.getTable()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    /**
     * Get classic
     */
    SearchService.prototype.getClassic = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/search-classic')
                .subscribe(function (classic) {
                _this.classic = classic;
                _this.classicOnChanged.next(_this.classic);
                resolve(_this.classic);
            }, reject);
        });
    };
    /**
     * Get table
     */
    SearchService.prototype.getTable = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/search-table')
                .subscribe(function (table) {
                _this.table = table;
                _this.tableOnChanged.next(_this.table);
                resolve(_this.table);
            }, reject);
        });
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/main/content/pages/search/tabs/classic/classic.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/main/content/pages/search/tabs/classic/classic.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"classic-tab p-24\">\r\n\r\n    <div class=\"result-info\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayout.xs=\"column\"\r\n         fxLayoutAlign.xs=\"start start\">\r\n\r\n        <span class=\"result-count h3 secondary-text\">\r\n            <span>54</span>\r\n            <span class=\"ml-4\">Results</span>\r\n        </span>\r\n\r\n        <div class=\"pager\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <span class=\"mr-4 secondary-text\">Results:</span>\r\n\r\n            <span class=\"page-info\">\r\n                <span>1</span>\r\n                <span class=\"mx-4\">-</span>\r\n                <span>10</span>\r\n                <span class=\"mx-4\">of</span>\r\n                <span>54</span>\r\n            </span>\r\n\r\n            <button mat-icon-button aria-label=\"Previous page\">\r\n                <mat-icon>chevron_left</mat-icon>\r\n            </button>\r\n\r\n            <button mat-icon-button aria-label=\"Next page\">\r\n                <mat-icon>chevron_right</mat-icon>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"results\">\r\n        <div class=\"result-item\" *ngFor=\"let item of classic\">\r\n            <div class=\"title blue-fg\">{{item.title}}</div>\r\n            <div class=\"url green-fg\">{{item.url}}</div>\r\n            <div class=\"excerpt\">{{item.excerpt}}</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"simple-pagination\">\r\n        <button mat-button class=\"pagination-item disabled\" disabled=\"disabled\"\r\n                aria-label=\"Go to previous page\">\r\n            <mat-icon>chevron_left</mat-icon>\r\n        </button>\r\n\r\n        <button mat-button class=\"pagination-item active\" [disableRipple]=\"true\" aria-label=\"Go to page 1\">\r\n            <span>1</span>\r\n        </button>\r\n\r\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 2\">\r\n            <span>2</span>\r\n        </button>\r\n\r\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 3\">\r\n            <span>3</span>\r\n        </button>\r\n\r\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 4\">\r\n            <span>4</span>\r\n        </button>\r\n\r\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 5\">\r\n            <span>5</span>\r\n        </button>\r\n\r\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 6\">\r\n            <span>6</span>\r\n        </button>\r\n\r\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 7\">\r\n            <span>7</span>\r\n        </button>\r\n\r\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 8\">\r\n            <span>8</span>\r\n        </button>\r\n\r\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 9\">\r\n            <span>9</span>\r\n        </button>\r\n\r\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to page 10\">\r\n            <span>10</span>\r\n        </button>\r\n\r\n        <button mat-button class=\"pagination-item\" aria-label=\"Go to next page\">\r\n            <mat-icon>chevron_right</mat-icon>\r\n        </button>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/search/tabs/classic/classic.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/main/content/pages/search/tabs/classic/classic.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host .classic-tab .result-info {\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .classic-tab .result-info .pager .page-info {\n    font-weight: 500;\n    margin: 0 8px 0 0; }\n:host .classic-tab .results .result-item {\n  margin-top: 32px;\n  max-width: 512px; }\n:host .classic-tab .results .result-item .title {\n    font-size: 17px;\n    font-weight: 500;\n    cursor: pointer; }\n:host .classic-tab .results .result-item .url {\n    margin-bottom: 4px; }\n:host .classic-tab .results .result-item .excerpt {\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n:host .classic-tab .results .result-item:last-child {\n    padding-bottom: 32px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .classic-tab .simple-pagination {\n  margin: 32px 0; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/search/tabs/classic/classic.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/pages/search/tabs/classic/classic.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FuseSearchClassicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseSearchClassicComponent", function() { return FuseSearchClassicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../search.service */ "./src/app/main/content/pages/search/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseSearchClassicComponent = /** @class */ (function () {
    function FuseSearchClassicComponent(searchService) {
        var _this = this;
        this.searchService = searchService;
        this.searchService.classicOnChanged.subscribe(function (classic) {
            _this.classic = classic;
        });
    }
    FuseSearchClassicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-search-classic',
            template: __webpack_require__(/*! ./classic.component.html */ "./src/app/main/content/pages/search/tabs/classic/classic.component.html"),
            styles: [__webpack_require__(/*! ./classic.component.scss */ "./src/app/main/content/pages/search/tabs/classic/classic.component.scss")]
        }),
        __metadata("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]])
    ], FuseSearchClassicComponent);
    return FuseSearchClassicComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/search/tabs/table/table.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/search/tabs/table/table.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-tab\">\r\n\r\n    <mat-table #table [dataSource]=\"dataSource\">\r\n\r\n        <!--- Note that these columns can be defined in any order.\r\n              The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n        <!-- ID Column -->\r\n        <ng-container cdkColumnDef=\"name\">\r\n            <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\r\n            <mat-cell *cdkCellDef=\"let row\"> {{row.name}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Progress Column -->\r\n        <ng-container cdkColumnDef=\"position\">\r\n            <mat-header-cell *cdkHeaderCellDef>Position</mat-header-cell>\r\n            <mat-cell *cdkCellDef=\"let row\"> {{row.position}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container cdkColumnDef=\"office\">\r\n            <mat-header-cell *cdkHeaderCellDef>Office</mat-header-cell>\r\n            <mat-cell *cdkCellDef=\"let row\"> {{row.office}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Color Column -->\r\n        <ng-container cdkColumnDef=\"salary\">\r\n            <mat-header-cell *cdkHeaderCellDef>Salary</mat-header-cell>\r\n            <mat-cell *cdkCellDef=\"let row\"> {{row.salary | currency:'USD':'symbol'}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n    </mat-table>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/pages/search/tabs/table/table.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/search/tabs/table/table.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n"

/***/ }),

/***/ "./src/app/main/content/pages/search/tabs/table/table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/pages/search/tabs/table/table.component.ts ***!
  \*************************************************************************/
/*! exports provided: FuseSearchTableComponent, SearchTableDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseSearchTableComponent", function() { return FuseSearchTableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTableDataSource", function() { return SearchTableDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../search.service */ "./src/app/main/content/pages/search/search.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseSearchTableComponent = /** @class */ (function () {
    function FuseSearchTableComponent(searchService) {
        var _this = this;
        this.searchService = searchService;
        this.displayedColumns = ['name', 'position', 'office', 'salary'];
        this.searchService.tableOnChanged
            .subscribe(function (table) {
            _this.table = table;
        });
    }
    FuseSearchTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new SearchTableDataSource(this.searchService);
    };
    FuseSearchTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-search-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/main/content/pages/search/tabs/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/main/content/pages/search/tabs/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
    ], FuseSearchTableComponent);
    return FuseSearchTableComponent;
}());

var SearchTableDataSource = /** @class */ (function (_super) {
    __extends(SearchTableDataSource, _super);
    function SearchTableDataSource(searchService) {
        var _this = _super.call(this) || this;
        _this.searchService = searchService;
        return _this;
    }
    SearchTableDataSource.prototype.connect = function () {
        return this.searchService.tableOnChanged;
    };
    SearchTableDataSource.prototype.disconnect = function () {
    };
    return SearchTableDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/main/content/pages/verify-email/verify-email.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/pages/verify-email/verify-email.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"verify-email\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <div id=\"verify-email-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div id=\"verify-email-block\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\r\n\r\n            <div class=\"top\">\r\n\r\n                <div class=\"logo\">\r\n                    <img src=\"assets/images/logos/logo.png\">\r\n                </div>\r\n\r\n                <div class=\"title\">Hey! Your email is verified successfully.</div>\r\n                <!-- <div class=\"subtitle\">It’s not quite ready yet, but we are working hard and it will be ready in\r\n                    approximately:\r\n                </div> -->\r\n\r\n                <button mat-raised-button class=\"submit-button m-24\" routerLink=\"/pages/auth/login\" aria-label=\"LOG IN\"> Log In </button>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/verify-email/verify-email.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/pages/verify-email/verify-email.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #verify-email {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/align-background.png\") no-repeat;\n  background-size: cover; }\n:host #verify-email #verify-email-wrapper {\n    -webkit-box-flex: 1;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #verify-email #verify-email-wrapper {\n        padding: 16px; } }\n:host #verify-email #verify-email-wrapper #verify-email-block {\n      width: 384px;\n      max-width: 384px;\n      background: #FFFFFF;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #verify-email #verify-email-wrapper #verify-email-block {\n          width: 100%; } }\n:host #verify-email #verify-email-wrapper #verify-email-block .top {\n        width: 100%;\n        padding: 32px; }\n@media screen and (max-width: 599px) {\n          :host #verify-email #verify-email-wrapper #verify-email-block .top {\n            padding: 24px; } }\n:host #verify-email #verify-email-wrapper #verify-email-block .top .logo {\n          width: 128px;\n          margin: 32px auto; }\n:host #verify-email #verify-email-wrapper #verify-email-block .top .title {\n          font-size: 17px;\n          margin-top: 16px; }\n:host #verify-email #verify-email-wrapper #verify-email-block .top .subtitle {\n          margin: 16px auto 0 auto;\n          text-align: center;\n          max-width: 300px;\n          color: rgba(0, 0, 0, 0.54);\n          font-size: 15px; }\n:host #verify-email #verify-email-wrapper #verify-email-block .top .submit-button {\n          background-color: #F57D3F;\n          color: #fff; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/verify-email/verify-email.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/pages/verify-email/verify-email.component.ts ***!
  \***************************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(fuseConfig) {
        this.fuseConfig = fuseConfig;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
    };
    VerifyEmailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/main/content/pages/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.scss */ "./src/app/main/content/pages/verify-email/verify-email.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_1__["FuseConfigService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/verify-email/verify-email.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/content/pages/verify-email/verify-email.module.ts ***!
  \************************************************************************/
/*! exports provided: VerifyEmailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailModule", function() { return VerifyEmailModule; });
/* harmony import */ var _verify_email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email.component */ "./src/app/main/content/pages/verify-email/verify-email.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/main/content/pages/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: 'verify-email',
        component: _verify_email_component__WEBPACK_IMPORTED_MODULE_0__["VerifyEmailComponent"]
    }
];
var VerifyEmailModule = /** @class */ (function () {
    function VerifyEmailModule() {
    }
    VerifyEmailModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseCountdownModule"]
            ],
            declarations: [_verify_email_component__WEBPACK_IMPORTED_MODULE_0__["VerifyEmailComponent"]],
            providers: [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]]
        })
    ], VerifyEmailModule);
    return VerifyEmailModule;
}());



/***/ }),

/***/ "./src/app/main/content/pages/verify-otp/verify-otp.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/pages/verify-otp/verify-otp.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"verify-otp\" fxLayout=\"column\" fusePerfectScrollbar>\r\n\r\n    <div id=\"verify-otp-form-wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n        <div id=\"verify-otp-form\" *fuseIfOnDom [@animate]=\"{value:'*',params:{duration:'300ms',y:'100px'}}\">\r\n\r\n            <div class=\"logo\">\r\n                <img src=\"assets/images/logos/logo.png\">\r\n            </div>\r\n\r\n            <div class=\"title\">Verify OTP</div>\r\n\r\n            <form name=\"verifyOtpForm\" [formGroup]=\"verifyOtpForm\" (ngSubmit)=\"onSubmit(verifyOtpForm.value)\" novalidate>\r\n                \r\n                <mat-form-field>\r\n                    <input matInput type=\"number\" placeholder=\"OTP\" formControlName=\"otp\">\r\n                    <mat-error *ngIf=\"verifyOtpFormErrors.otp.required\">\r\n                        OTP is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"verifyOtpFormErrors.email.required\">\r\n                        Email is required\r\n                    </mat-error>\r\n                    <mat-error *ngIf=\"!verifyOtpFormErrors.email.required && verifyOtpFormErrors.email.email\">\r\n                        Please enter a valid email address\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field>\r\n                    <input matInput type=\"number\" placeholder=\"Country Code\" formControlName=\"country_code\">\r\n                    <mat-error *ngIf=\"verifyOtpFormErrors.country_code.required\">\r\n                        Country Code is required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n\r\n                <button mat-raised-button class=\"submit-button\" aria-label=\"Verify OTP\" >\r\n                    Verify OTP\r\n                </button>\r\n\r\n            </form>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/pages/verify-otp/verify-otp.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/pages/verify-otp/verify-otp.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host #verify-otp {\n  width: 100%;\n  overflow: auto;\n  background: url(\"/assets/images/backgrounds/align-background.png\") no-repeat;\n  background-size: cover; }\n:host #verify-otp #verify-otp-form-wrapper {\n    -webkit-box-flex: 1;\n            flex: 1 0 auto;\n    padding: 32px; }\n@media screen and (max-width: 599px) {\n      :host #verify-otp #verify-otp-form-wrapper {\n        padding: 16px; } }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form {\n      width: 384px;\n      max-width: 384px;\n      padding: 32px;\n      background: #FFFFFF;\n      text-align: center;\n      box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n        :host #verify-otp #verify-otp-form-wrapper #verify-otp-form {\n          padding: 24px;\n          width: 100%; } }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form .logo {\n        width: 128px;\n        margin: 32px auto; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form .title {\n        font-size: 20px;\n        margin: 16px 0 32px 0; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form form {\n        width: 100%;\n        text-align: left; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form form mat-form-field {\n          width: 100%; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form form mat-checkbox {\n          margin: 0; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form form .remember-forgot-password {\n          font-size: 13px;\n          margin-top: 8px; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form form .remember-forgot-password .remember-me {\n            margin-bottom: 16px; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form form .remember-forgot-password .forgot-password {\n            font-size: 13px;\n            font-weight: 500;\n            margin-bottom: 16px; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form form .submit-button {\n          width: 220px;\n          margin: 16px auto;\n          display: block; }\n@media screen and (max-width: 599px) {\n            :host #verify-otp #verify-otp-form-wrapper #verify-otp-form form .submit-button {\n              width: 90%; } }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form .register {\n        margin: 32px auto 24px auto;\n        font-weight: 500; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form .register .text {\n          margin-right: 8px; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form .separator {\n        font-size: 15px;\n        font-weight: 600;\n        margin: 24px auto;\n        position: relative;\n        overflow: hidden;\n        width: 100px;\n        color: rgba(0, 0, 0, 0.54); }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form .separator .text {\n          display: -webkit-inline-box;\n          display: inline-flex;\n          position: relative;\n          padding: 0 8px;\n          z-index: 9999; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form .separator .text:before, :host #verify-otp #verify-otp-form-wrapper #verify-otp-form .separator .text:after {\n            content: '';\n            display: block;\n            width: 30px;\n            position: absolute;\n            top: 10px;\n            border-top: 1px solid rgba(0, 0, 0, 0.12); }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form .separator .text:before {\n            right: 100%; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form .separator .text:after {\n            left: 100%; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form button.google, :host #verify-otp #verify-otp-form-wrapper #verify-otp-form button.facebook {\n        width: 192px;\n        text-transform: none;\n        color: #FFFFFF;\n        font-size: 13px; }\n@media screen and (max-width: 599px) {\n        :host #verify-otp #verify-otp-form-wrapper #verify-otp-form button {\n          width: 80%; } }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form button.google {\n        background-color: #D73D32;\n        margin-bottom: 8px; }\n:host #verify-otp #verify-otp-form-wrapper #verify-otp-form button.facebook {\n        background-color: #3f5c9a; }\n.submit-button {\n  background-color: #F57D3F;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/main/content/pages/verify-otp/verify-otp.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/pages/verify-otp/verify-otp.component.ts ***!
  \***********************************************************************/
/*! exports provided: VerifyOtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyOtpComponent", function() { return VerifyOtpComponent; });
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/config.service */ "./src/@fuse/services/config.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/main/content/pages/authentication/authentication.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VerifyOtpComponent = /** @class */ (function () {
    function VerifyOtpComponent(fuseConfig, formBuilder, router, authService, apiloader, toast) {
        this.fuseConfig = fuseConfig;
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.apiloader = apiloader;
        this.toast = toast;
        this.fuseConfig.setConfig({
            layout: {
                navigation: 'none',
                toolbar: 'none',
                footer: 'none'
            }
        });
        this.verifyOtpFormErrors = {
            otp: {},
            email: {},
            country_code: {}
        };
    }
    VerifyOtpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.verifyOtpForm = this.formBuilder.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            country_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.verifyOtpForm.valueChanges.subscribe(function () {
            _this.onVerifyFormValuesChanged();
        });
    };
    VerifyOtpComponent.prototype.onVerifyFormValuesChanged = function () {
        for (var field in this.verifyOtpFormErrors) {
            if (!this.verifyOtpFormErrors.hasOwnProperty(field)) {
                continue;
            }
            // Clear previous errors
            this.verifyOtpFormErrors[field] = {};
            // Get the control
            var control = this.verifyOtpForm.get(field);
            if (control && control.dirty && !control.valid) {
                this.verifyOtpFormErrors[field] = control.errors;
            }
        }
    };
    VerifyOtpComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.apiloader.setLoader(true);
        var body = new URLSearchParams();
        body.set('email', formData.email);
        body.set('otp', formData.otp);
        body.set('country_code', formData.country_code);
        body.set('purpose', 'PASSWORD_RESET');
        this.authService.postData('verify', body.toString()).subscribe(function (response) {
            if (response.message == 'Verified') {
                sessionStorage.setItem('token', response.token);
                _this.apiloader.setLoader(false);
                _this.router.navigate(['/pages/auth/reset-password']);
            }
            _this.toast.showSuccess(response.message);
        }, function (error) {
            _this.apiloader.setLoader(false);
        });
    };
    VerifyOtpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'verify-otp',
            template: __webpack_require__(/*! ./verify-otp.component.html */ "./src/app/main/content/pages/verify-otp/verify-otp.component.html"),
            styles: [__webpack_require__(/*! ./verify-otp.component.scss */ "./src/app/main/content/pages/verify-otp/verify-otp.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_config_service__WEBPACK_IMPORTED_MODULE_4__["FuseConfigService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]])
    ], VerifyOtpComponent);
    return VerifyOtpComponent;
}());



/***/ }),

/***/ "./src/app/main/content/pages/verify-otp/verify-otp.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/content/pages/verify-otp/verify-otp.module.ts ***!
  \********************************************************************/
/*! exports provided: VerifyOtpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyOtpModule", function() { return VerifyOtpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _verify_otp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verify-otp.component */ "./src/app/main/content/pages/verify-otp/verify-otp.component.ts");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/main/content/pages/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'verify-otp',
        component: _verify_otp_component__WEBPACK_IMPORTED_MODULE_4__["VerifyOtpComponent"]
    }
];
var VerifyOtpModule = /** @class */ (function () {
    function VerifyOtpModule() {
    }
    VerifyOtpModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"]
            ],
            declarations: [_verify_otp_component__WEBPACK_IMPORTED_MODULE_4__["VerifyOtpComponent"]],
            providers: [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]]
        })
    ], VerifyOtpModule);
    return VerifyOtpModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-content-pages-pages-module.js.map