(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-contacts-contacts-module"],{

/***/ "./src/app/main/content/apps/company-contacts/company-contacts.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/company-contacts.service.ts ***!
  \********************************************************************************/
/*! exports provided: CompanyContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyContactsService", function() { return CompanyContactsService; });
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






var CompanyContactsService = /** @class */ (function () {
    function CompanyContactsService(http) {
        this.http = http;
        this.baseUrl = _fuse_constant__WEBPACK_IMPORTED_MODULE_5__["apiUri"];
    }
    CompanyContactsService.prototype.setHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    CompanyContactsService.prototype.postData = function (url, data, type) {
        var headers = this.setHeaders();
        if (type = 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344');
        }
        var options = { headers: headers };
        return this.http.post(this.baseUrl + url, data, options).map(this.extractData).catch(this.handleError);
    };
    CompanyContactsService.prototype.getData = function (url, data) {
        var headers = this.setHeaders();
        if (data) {
            var queryParams = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
            url += '?' + queryParams;
        }
        var options = { headers: headers };
        return this.http.get(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    CompanyContactsService.prototype.deleteData = function (url) {
        var headers = this.setHeaders();
        var options = { headers: headers };
        return this.http.delete(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    CompanyContactsService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    CompanyContactsService.prototype.handleError = function (error) {
        var errMsg = error.error;
        if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) { return errMsg.message[k]; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
    };
    CompanyContactsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanyContactsService);
    return CompanyContactsService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/contact-form/contact-form.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/contact-form/contact-form.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <form [formGroup]=\"contactForm\">\r\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n\r\n        <mat-toolbar-row class=\"toolbar-bottom py-16\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n            <div class=\"logo\">\r\n                <label for=\"upload-image\">\r\n                    <img src=\"assets/images/circle.png\"  *ngIf=\"croppedImage == ''\">\r\n                    <img [src]=\"croppedImage\" width=\"200\" class=\"cropped-image\" *ngIf=\"croppedImage !== ''\" />\r\n                </label>\r\n                <input type=\"file\" id=\"upload-image\" ng2FileSelect [uploader]=\"uploader\" formControlName=\"company_logo\" (change)=\"fileChangeEvent($event)\"\r\n                (onFileSelected)=\"onFileSelected($event)\" accept=\"image/png, image/jpeg\" style=\"display:none\" />\r\n            </div>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"company_name\" formControlName=\"company_name\" placeholder=\"Company Name\" matInput required>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"email\" formControlName=\"email\" matInput type=\"email\" placeholder=\"Email\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input formControlName=\"phone\" matInput placeholder=\"Phone number\">\r\n                </mat-form-field>\r\n            </div>\r\n            \r\n            <mat-radio-group formControlName=\"subscription\" aria-label=\"Select an option\">\r\n                <h3>Subscription : </h3>\r\n                <mat-radio-button value=\"free\">Free</mat-radio-button>\r\n                <mat-radio-button value=\"paid\">Paid</mat-radio-button>\r\n            </mat-radio-group>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <button mat-raised-button\r\n                (click)=\"dialogRef.close(contactForm)\"\r\n                class=\"save-button mat-accent\"\r\n                [disabled]=\"contactForm.invalid\"\r\n                aria-label=\"SAVE\">\r\n            SAVE\r\n        </button>\r\n\r\n    </div>\r\n\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/contact-form/contact-form.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/contact-form/contact-form.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.contact-form-dialog {\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .contact-form-dialog {\n      width: 100%; } }\n.contact-form-dialog .mat-dialog-container {\n    padding: 0; }\n.contact-form-dialog .mat-dialog-container .mat-toolbar {\n      -webkit-box-flex: 1;\n              flex: 1 0 auto;\n      min-height: initial; }\n.contact-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.contact-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n.contact-form-dialog mat-radio-group mat-radio-button {\n  padding-right: 10px; }\n.contact-form-dialog mat-radio-group h3 {\n  display: inline-block;\n  padding-right: 10px;\n  font-weight: 500; }\n.logo {\n  width: 128px; }\n.cropped-image {\n  border-radius: 100%; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/contact-form/contact-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/contact-form/contact-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FuseContactsContactFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseContactsContactFormDialogComponent", function() { return FuseContactsContactFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img-cropper/img-cropper.component */ "./src/app/main/content/apps/company-contacts/img-cropper/img-cropper.component.ts");
/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contact.model */ "./src/app/main/content/apps/company-contacts/contact.model.ts");
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





var FuseContactsContactFormDialogComponent = /** @class */ (function () {
    function FuseContactsContactFormDialogComponent(dialogRef, data, formBuilder, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.uploader.onBeforeUploadItem = function (fileItem) {
            console.log(fileItem);
        };
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = 'Edit Contact';
            this.contact = data.contact;
        }
        else {
            this.dialogTitle = 'New Contact';
            this.contact = new _contact_model__WEBPACK_IMPORTED_MODULE_4__["Contact"]({});
        }
        this.contactForm = this.createContactForm();
    }
    FuseContactsContactFormDialogComponent.prototype.createContactForm = function () {
        return this.formBuilder.group({
            company_logo: [''],
            company_name: [''],
            email: [''],
            phone: [''],
            subscription: [''],
        });
    };
    FuseContactsContactFormDialogComponent.prototype.fileChangeEvent = function (event) {
        var _this = this;
        this.imageChangedEvent = event;
        this.cropDialog = this.dialog.open(_img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_3__["ImgCropperComponent"], {
            panelClass: 'contact-form-dialog',
            data: {
                action: event,
                height: '400px'
            }
        });
        this.cropDialog.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return '';
            }
            else {
                _this.croppedImage = response;
            }
        });
    };
    FuseContactsContactFormDialogComponent.prototype.onFileSelected = function (event) {
        var file = event[0];
    };
    FuseContactsContactFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-contacts-contact-form-dialog',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/main/content/apps/company-contacts/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.scss */ "./src/app/main/content/apps/company-contacts/contact-form/contact-form.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], FuseContactsContactFormDialogComponent);
    return FuseContactsContactFormDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/contact-list/contact-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/contact-list/contact-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"dataSource\"\r\n           [@animateStagger]=\"{value:'50'}\" *ngIf=\"dataSource\">\r\n\r\n    <!-- Avatar Column -->\r\n    <ng-container cdkColumnDef=\"avatar\">\r\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\">\r\n            <img class=\"avatar\" *ngIf=\"contact.avatar\" [alt]=\"contact.name\"\r\n                 [src]=\"contact.avatar\"/>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container cdkColumnDef=\"name\">\r\n        <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" (click)=\"getDetails(contact.id)\">\r\n            <p class=\"text-truncate font-weight-600\">{{contact.name}}</p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Email Column -->\r\n    <ng-container cdkColumnDef=\"email\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Email</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\r\n            <p class=\"email text-truncate\">\r\n                {{contact.email}}\r\n            </p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Phone Column -->\r\n    <ng-container cdkColumnDef=\"phone\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Phone</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\r\n            <p class=\"phone text-truncate\">\r\n                {{contact.contact_number}}\r\n            </p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Phone Column -->\r\n    <ng-container cdkColumnDef=\"subscription\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Subscription</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-md>\r\n            <p class=\"subscription text-truncate\">\r\n                free\r\n            </p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Buttons Column -->\r\n    <ng-container cdkColumnDef=\"buttons\">\r\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\">\r\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\r\n                <!-- <button mat-icon-button (click)=\"$event.stopPropagation();toggleStar(contact.id)\" aria-label=\"Toggle star\">\r\n                    <mat-icon class=\"amber-fg\" *ngIf=\"user.starred.includes(contact.id)\">star</mat-icon>\r\n                    <mat-icon class=\"secondary-text\">calendar_today</mat-icon>\r\n                </button> -->\r\n\r\n                <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\r\n                        (click)=\"$event.stopPropagation();\">\r\n                    <mat-icon class=\"secondary-text\">more_vert</mat-icon>\r\n                </button>\r\n\r\n                <mat-menu #moreMenu=\"matMenu\">\r\n                    <button mat-menu-item aria-label=\"remove\" (click)=\"deleteContact(contact.id)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                        <span>Remove</span>\r\n                    </button>\r\n                </mat-menu>\r\n            </div>\r\n\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *cdkRowDef=\"let contact; columns: displayedColumns;\"\r\n             class=\"contact\"\r\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\r\n    </mat-row>\r\n</mat-table>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/contact-list/contact-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/contact-list/contact-list.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-contacts-contact-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  width: 100%; }\nfuse-contacts-contact-list .mat-table {\n    width: 100%;\n    background: transparent;\n    box-shadow: none; }\nfuse-contacts-contact-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n              flex: 0 1 64px;\n      padding-left: 18px; }\nfuse-contacts-contact-list .mat-table .mat-column-avatar {\n      -webkit-box-flex: 0;\n              flex: 0 1 64px; }\nfuse-contacts-contact-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n              flex: 0 1 80px; }\nfuse-contacts-contact-list .mat-table mat-cell:first-child {\n      padding-left: 15px !important; }\nfuse-contacts-contact-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px; }\nfuse-contacts-contact-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nfuse-contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            fuse-contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\n#add-contact-button {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  padding: 0;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/contact-list/contact-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/contact-list/contact-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FuseContactsContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseContactsContactListComponent", function() { return FuseContactsContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _company_contacts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../company-contacts.service */ "./src/app/main/content/apps/company-contacts/company-contacts.service.ts");
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








var FuseContactsContactListComponent = /** @class */ (function () {
    function FuseContactsContactListComponent(dialog, router, companyService, apiloader, toast) {
        this.dialog = dialog;
        this.router = router;
        this.companyService = companyService;
        this.apiloader = apiloader;
        this.toast = toast;
        this.displayedColumns = ['avatar', 'name', 'email', 'phone', 'subscription', 'buttons'];
    }
    FuseContactsContactListComponent.prototype.ngOnInit = function () {
        this.getAllClients();
    };
    FuseContactsContactListComponent.prototype.getAllClients = function () {
        var _this = this;
        this.companyService.getData('clients').subscribe(function (response) {
            if (response.data) {
                _this.dataSource = response.data;
            }
        }, function (error) {
            _this.toast.showError(error);
        });
    };
    /**
     * Delete Contact
     */
    FuseContactsContactListComponent.prototype.deleteContact = function (id) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["FuseConfirmDialogComponent"], {
            disableClose: true
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.apiloader.setLoader(true);
                _this.companyService.deleteData('clients/' + id).subscribe(function (response) {
                    if (response.status === 'success') {
                        _this.apiloader.setLoader(false);
                        _this.toast.showSuccess('Client Deleted Successfully!.');
                    }
                }, function (error) {
                    _this.apiloader.setLoader(false);
                    _this.toast.showError(error);
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseContactsContactListComponent.prototype.getDetails = function (id) {
        this.router.navigate(['/apps/company-details', id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialogContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], FuseContactsContactListComponent.prototype, "dialogContent", void 0);
    FuseContactsContactListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-contacts-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/main/content/apps/company-contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.scss */ "./src/app/main/content/apps/company-contacts/contact-list/contact-list.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"],
            providers: [_company_contacts_service__WEBPACK_IMPORTED_MODULE_5__["CompanyContactsService"]]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _company_contacts_service__WEBPACK_IMPORTED_MODULE_5__["CompanyContactsService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_6__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]])
    ], FuseContactsContactListComponent);
    return FuseContactsContactListComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/contact.model.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/contact.model.ts ***!
  \*********************************************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

var Contact = /** @class */ (function () {
    function Contact(contact) {
        {
            this.id = contact.id || _fuse_utils__WEBPACK_IMPORTED_MODULE_0__["FuseUtils"].generateGUID();
            this.name = contact.name || '';
            this.lastName = contact.lastName || '';
            this.avatar = contact.avatar || 'assets/images/avatars/profile.jpg';
            this.nickname = contact.nickname || '';
            this.company = contact.company || '';
            this.jobTitle = contact.jobTitle || '';
            this.email = contact.email || '';
            this.phone = contact.phone || '';
            this.address = contact.address || '';
            this.birthday = contact.birhday || '';
            this.notes = contact.notes || '';
            this.subscription = contact.subscription || '';
        }
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/contacts.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/contacts.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contacts\" class=\"page-layout simple left-sidenav inner-sidenav\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\"\r\n         fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n        <!-- APP TITLE -->\r\n        <div class=\"title\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <button mat-icon-button class=\"sidenav-toggle mr-12\"\r\n                    fuseMatSidenavToggler=\"contacts-main-sidenav\"\r\n                    fxHide.gt-md>\r\n                <mat-icon>menu</mat-icon>\r\n            </button>\r\n\r\n            <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">account_box</mat-icon>\r\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Clients</span>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / APP TITLE -->\r\n\r\n        <!-- SEARCH -->\r\n        <!-- <div class=\"search-input-wrapper mt-16 ml-8 m-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <label for=\"search\" class=\"mr-8\">\r\n                <mat-icon>search</mat-icon>\r\n            </label>\r\n            <mat-form-field mat-no-float class=\"m-0\" floatLabel=\"never\">\r\n                <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for anything\">\r\n            </mat-form-field>\r\n        </div> -->\r\n        <!-- / SEARCH -->\r\n\r\n        <!-- <button mat-fab class=\"fab-add\" (click)=\"openModal()\" aria-label=\"Add event\"\r\n            *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'300ms',scale:'0.2'}}\">\r\n            <mat-icon>add</mat-icon>\r\n        </button> -->\r\n\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- SELECTED BAR -->\r\n    <fuse-selected-bar class=\"mat-accent-600-bg\" *ngIf=\"hasSelectedContacts\" [@slideInTop]></fuse-selected-bar>\r\n    <!-- / SELECTED BAR -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- SIDENAV -->\r\n       <!--  <mat-sidenav class=\"sidenav\" position=\"start\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"contacts-main-sidenav\" mat-is-locked-open=\"gt-sm\">\r\n\r\n            <fuse-contacts-main-sidenav *fuseIfOnDom [@animate]=\"{value:'*'}\"></fuse-contacts-main-sidenav>\r\n\r\n        </mat-sidenav> -->\r\n        <!-- / SIDENAV -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center p-24 pb-56 pr-sm-92\" fusePerfectScrollbar>\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content mat-white-bg mat-elevation-z4\">\r\n\r\n                <fuse-contacts-contact-list></fuse-contacts-contact-list>\r\n\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/contacts.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/contacts.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contacts .content {\n  overflow: hidden; }\n\n.title {\n  -webkit-box-flex: 1;\n          flex: 1; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/contacts.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/contacts.component.ts ***!
  \**************************************************************************/
/*! exports provided: FuseContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseContactsComponent", function() { return FuseContactsComponent; });
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _company_contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-contacts.service */ "./src/app/main/content/apps/company-contacts/company-contacts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/main/content/apps/company-contacts/contact-form/contact-form.component.ts");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts.service */ "./src/app/main/content/apps/company-contacts/contacts.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FuseContactsComponent = /** @class */ (function () {
    function FuseContactsComponent(contactsService, dialog, companyService, apiloader, toast) {
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.companyService = companyService;
        this.apiloader = apiloader;
        this.toast = toast;
        this.searchInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
    }
    FuseContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectedContactsChangedSubscription =
            this.contactsService.onSelectedContactsChanged
                .subscribe(function (selectedContacts) {
                _this.hasSelectedContacts = selectedContacts.length > 0;
            });
        this.searchInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])())
            .subscribe(function (searchText) {
            _this.contactsService.onSearchTextChanged.next(searchText);
        });
    };
    FuseContactsComponent.prototype.openModal = function () {
        this.dialogRef = this.dialog.open(_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_7__["FuseContactsContactFormDialogComponent"], {
            panelClass: 'contact-form-dialog',
            data: { action: 'ADD' }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            else {
                console.log(response);
                /* this.createClient(response); */
            }
        });
    };
    FuseContactsComponent.prototype.createClient = function (formData) {
        var _this = this;
        this.apiloader.setLoader(true);
        var body = new URLSearchParams();
        body.set('name', formData.name);
        body.set('email', formData.email);
        body.set('phone', formData.phone);
        this.companyService.postData('clients/register', body.toString()).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.toast.showSuccess('Client Created Successfully!.');
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    FuseContactsComponent.prototype.ngOnDestroy = function () {
        this.onSelectedContactsChangedSubscription.unsubscribe();
    };
    FuseContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'fuse-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/main/content/apps/company-contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/main/content/apps/company-contacts/contacts.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_6__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_contacts_service__WEBPACK_IMPORTED_MODULE_8__["ContactsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _company_contacts_service__WEBPACK_IMPORTED_MODULE_1__["CompanyContactsService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_9__["ToasterService"]])
    ], FuseContactsComponent);
    return FuseContactsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/contacts.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/contacts.module.ts ***!
  \***********************************************************************/
/*! exports provided: CompanyContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyContactsModule", function() { return CompanyContactsModule; });
/* harmony import */ var _company_contacts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-contacts.service */ "./src/app/main/content/apps/company-contacts/company-contacts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _sidenavs_main_main_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidenavs/main/main.component */ "./src/app/main/content/apps/company-contacts/sidenavs/main/main.component.ts");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contacts.component */ "./src/app/main/content/apps/company-contacts/contacts.component.ts");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contacts.service */ "./src/app/main/content/apps/company-contacts/contacts.service.ts");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/main/content/apps/company-contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _selected_bar_selected_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selected-bar/selected-bar.component */ "./src/app/main/content/apps/company-contacts/selected-bar/selected-bar.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/main/content/apps/company-contacts/contact-form/contact-form.component.ts");
/* harmony import */ var _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./img-cropper/img-cropper.component */ "./src/app/main/content/apps/company-contacts/img-cropper/img-cropper.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '**',
        component: _contacts_component__WEBPACK_IMPORTED_MODULE_10__["FuseContactsComponent"],
        resolve: {
            contacts: _contacts_service__WEBPACK_IMPORTED_MODULE_11__["ContactsService"]
        }
    }
];
var CompanyContactsModule = /** @class */ (function () {
    function CompanyContactsModule() {
    }
    CompanyContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _contacts_component__WEBPACK_IMPORTED_MODULE_10__["FuseContactsComponent"],
                _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_15__["ImgCropperComponent"],
                _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_12__["FuseContactsContactListComponent"],
                _selected_bar_selected_bar_component__WEBPACK_IMPORTED_MODULE_13__["FuseContactsSelectedBarComponent"],
                _sidenavs_main_main_component__WEBPACK_IMPORTED_MODULE_9__["FuseContactsMainSidenavComponent"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_14__["FuseContactsContactFormDialogComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_6__["FuseConfirmDialogModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_8__["ImageCropperModule"]
            ],
            providers: [
                _contacts_service__WEBPACK_IMPORTED_MODULE_11__["ContactsService"],
                _company_contacts_service__WEBPACK_IMPORTED_MODULE_0__["CompanyContactsService"]
            ],
            entryComponents: [_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_14__["FuseContactsContactFormDialogComponent"], _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_15__["ImgCropperComponent"]]
        })
    ], CompanyContactsModule);
    return CompanyContactsModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/contacts.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/contacts.service.ts ***!
  \************************************************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.model */ "./src/app/main/content/apps/company-contacts/contact.model.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactsService = /** @class */ (function () {
    function ContactsService(http) {
        this.http = http;
        this.onContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onSelectedContactsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onUserDataChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.onSearchTextChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onFilterChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedContacts = [];
    }
    /**
     * The Contacts App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ContactsService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getContacts(),
                _this.getUserData()
            ]).then(function (_a) {
                var files = _a[0];
                _this.onSearchTextChanged.subscribe(function (searchText) {
                    _this.searchText = searchText;
                    _this.getContacts();
                });
                _this.onFilterChanged.subscribe(function (filter) {
                    _this.filterBy = filter;
                    _this.getContacts();
                });
                resolve();
            }, reject);
        });
    };
    ContactsService.prototype.getContacts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/contacts-contacts')
                .subscribe(function (response) {
                _this.contacts = response;
                if (_this.filterBy === 'starred') {
                    _this.contacts = _this.contacts.filter(function (_contact) {
                        return _this.user.starred.includes(_contact.id);
                    });
                }
                if (_this.filterBy === 'frequent') {
                    _this.contacts = _this.contacts.filter(function (_contact) {
                        return _this.user.frequentContacts.includes(_contact.id);
                    });
                }
                if (_this.searchText && _this.searchText !== '') {
                    _this.contacts = _fuse_utils__WEBPACK_IMPORTED_MODULE_3__["FuseUtils"].filterArrayByString(_this.contacts, _this.searchText);
                }
                _this.contacts = _this.contacts.map(function (contact) {
                    return new _contact_model__WEBPACK_IMPORTED_MODULE_4__["Contact"](contact);
                });
                _this.onContactsChanged.next(_this.contacts);
                resolve(_this.contacts);
            }, reject);
        });
    };
    ContactsService.prototype.getUserData = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/contacts-user/5725a6802d10e277a0f35724')
                .subscribe(function (response) {
                _this.user = response;
                _this.onUserDataChanged.next(_this.user);
                resolve(_this.user);
            }, reject);
        });
    };
    /**
     * Toggle selected contact by id
     * @param id
     */
    ContactsService.prototype.toggleSelectedContact = function (id) {
        // First, check if we already have that contact as selected...
        if (this.selectedContacts.length > 0) {
            var index = this.selectedContacts.indexOf(id);
            if (index !== -1) {
                this.selectedContacts.splice(index, 1);
                // Trigger the next event
                this.onSelectedContactsChanged.next(this.selectedContacts);
                // Return
                return;
            }
        }
        // If we don't have it, push as selected
        this.selectedContacts.push(id);
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    /**
     * Toggle select all
     */
    ContactsService.prototype.toggleSelectAll = function () {
        if (this.selectedContacts.length > 0) {
            this.deselectContacts();
        }
        else {
            this.selectContacts();
        }
    };
    ContactsService.prototype.selectContacts = function (filterParameter, filterValue) {
        var _this = this;
        this.selectedContacts = [];
        // If there is no filter, select all todos
        if (filterParameter === undefined || filterValue === undefined) {
            this.selectedContacts = [];
            this.contacts.map(function (contact) {
                _this.selectedContacts.push(contact.id);
            });
        }
        else {
            /* this.selectedContacts.push(...
                 this.contacts.filter(todo => {
                     return todo[filterParameter] === filterValue;
                 })
             );*/
        }
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    ContactsService.prototype.updateContact = function (contact) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/contacts-contacts/' + contact.id, __assign({}, contact))
                .subscribe(function (response) {
                _this.getContacts();
                resolve(response);
            });
        });
    };
    ContactsService.prototype.updateUserData = function (userData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/contacts-user/' + _this.user.id, __assign({}, userData))
                .subscribe(function (response) {
                _this.getUserData();
                _this.getContacts();
                resolve(response);
            });
        });
    };
    ContactsService.prototype.deselectContacts = function () {
        this.selectedContacts = [];
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    ContactsService.prototype.deleteContact = function (contact) {
        var contactIndex = this.contacts.indexOf(contact);
        this.contacts.splice(contactIndex, 1);
        this.onContactsChanged.next(this.contacts);
    };
    ContactsService.prototype.deleteSelectedContacts = function () {
        var _loop_1 = function (contactId) {
            var contact = this_1.contacts.find(function (_contact) {
                return _contact.id === contactId;
            });
            var contactIndex = this_1.contacts.indexOf(contact);
            this_1.contacts.splice(contactIndex, 1);
        };
        var this_1 = this;
        for (var _i = 0, _a = this.selectedContacts; _i < _a.length; _i++) {
            var contactId = _a[_i];
            _loop_1(contactId);
        }
        this.onContactsChanged.next(this.contacts);
        this.deselectContacts();
    };
    ContactsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/img-cropper/img-cropper.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/img-cropper/img-cropper.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">Image Cropper</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-16 m-0\" fusePerfectScrollbar>\r\n\r\n        <image-cropper\r\n            [imageChangedEvent]=\"imageChangedEvent\"\r\n            [maintainAspectRatio]=\"true\"\r\n            [aspectRatio]=\"3/ 3\"\r\n            [resizeToWidth]=\"128\"\r\n            [cropperMinWidth]=\"128\"\r\n            [onlyScaleDown]=\"true\"\r\n            [roundCropper]=\"true\"\r\n            format=\"png\"\r\n            outputType=\"base64\"\r\n            (imageCropped)=\"imageCropped($event)\"\r\n            (imageLoaded)=\"imageLoaded()\"\r\n            (cropperReady)=\"cropperReady()\"\r\n            (loadImageFailed)=\"loadImageFailed()\"\r\n            [style.display]=\"true\"\r\n        ></image-cropper>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <button mat-raised-button\r\n                (click)=\"onCloseDialog()\"\r\n                class=\"save-button mat-accent\"\r\n                aria-label=\"SAVE\">\r\n            SAVE\r\n        </button>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/img-cropper/img-cropper.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/img-cropper/img-cropper.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-form-field {\n  padding-right: 10px; }\n.contact-form-dialog {\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .contact-form-dialog {\n      width: 100%; } }\n.contact-form-dialog .mat-dialog-container {\n    padding: 0; }\n.contact-form-dialog .mat-dialog-container .mat-toolbar {\n      -webkit-box-flex: 1;\n              flex: 1 0 auto;\n      min-height: initial; }\n.contact-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.contact-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/img-cropper/img-cropper.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/img-cropper/img-cropper.component.ts ***!
  \*****************************************************************************************/
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
        /* let crop = this.dataURItoBlob(this.croppedImage); */
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
    ImgCropperComponent.prototype.dataURItoBlob = function (dataURI) {
        var binary = atob(dataURI.split(',')[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i));
        }
        return new Blob([new Uint8Array(array)], {
            type: 'image/png'
        });
    };
    ImgCropperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-img-cropper',
            template: __webpack_require__(/*! ./img-cropper.component.html */ "./src/app/main/content/apps/company-contacts/img-cropper/img-cropper.component.html"),
            styles: [__webpack_require__(/*! ./img-cropper.component.scss */ "./src/app/main/content/apps/company-contacts/img-cropper/img-cropper.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ImgCropperComponent);
    return ImgCropperComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/selected-bar/selected-bar.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/selected-bar/selected-bar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-24\">\r\n\r\n    <div class=\"close-button-wrapper\" fxFlex=\"0 1 auto\" fxFlex.gt-sm=\"220px\" (click)=\"deselectAll()\">\r\n        <button class=\"p-8\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"mr-8\">arrow_back</mat-icon>\r\n            <span class=\"text-uppercase\">Back</span>\r\n        </button>\r\n    </div>\r\n\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutAlign.gt-sm=\"space-between center\">\r\n\r\n        <div>\r\n            <span class=\"selected-contacts-count\">\r\n                <span class=\"mr-4\">{{selectedContacts.length}}</span>\r\n                <span>selected</span>\r\n            </span>\r\n\r\n            <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\r\n                <mat-icon>arrow_drop_down</mat-icon>\r\n            </button>\r\n            <mat-menu #selectMenu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"selectAll()\">Select all</button>\r\n                <button mat-menu-item (click)=\"deselectAll()\">Deselect all</button>\r\n            </mat-menu>\r\n\r\n        </div>\r\n\r\n        <div class=\"multi-select-actions\">\r\n            <button mat-icon-button (click)=\"deleteSelectedContacts()\" aria-label=\"delete selected\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/selected-bar/selected-bar.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/selected-bar/selected-bar.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  -webkit-box-flex: 1;\n          flex: 1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 120px;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/selected-bar/selected-bar.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/selected-bar/selected-bar.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FuseContactsSelectedBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseContactsSelectedBarComponent", function() { return FuseContactsSelectedBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contacts.service */ "./src/app/main/content/apps/company-contacts/contacts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuseContactsSelectedBarComponent = /** @class */ (function () {
    function FuseContactsSelectedBarComponent(contactsService, dialog) {
        var _this = this;
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.contactsService.onSelectedContactsChanged
            .subscribe(function (selectedContacts) {
            _this.selectedContacts = selectedContacts;
            setTimeout(function () {
                _this.hasSelectedContacts = selectedContacts.length > 0;
                _this.isIndeterminate = (selectedContacts.length !== _this.contactsService.contacts.length && selectedContacts.length > 0);
            }, 0);
        });
    }
    FuseContactsSelectedBarComponent.prototype.selectAll = function () {
        this.contactsService.selectContacts();
    };
    FuseContactsSelectedBarComponent.prototype.deselectAll = function () {
        this.contactsService.deselectContacts();
    };
    FuseContactsSelectedBarComponent.prototype.deleteSelectedContacts = function () {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete all selected contacts?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.contactsService.deleteSelectedContacts();
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseContactsSelectedBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-selected-bar',
            template: __webpack_require__(/*! ./selected-bar.component.html */ "./src/app/main/content/apps/company-contacts/selected-bar/selected-bar.component.html"),
            styles: [__webpack_require__(/*! ./selected-bar.component.scss */ "./src/app/main/content/apps/company-contacts/selected-bar/selected-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_contacts_service__WEBPACK_IMPORTED_MODULE_3__["ContactsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], FuseContactsSelectedBarComponent);
    return FuseContactsSelectedBarComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/sidenavs/main/main.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/sidenavs/main/main.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-content\">\r\n\r\n    <div class=\"card mat-white-bg\">\r\n        <!-- SIDENAV HEADER -->\r\n        <div class=\"header p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <!-- USER -->\r\n            <img [src]=\"user.avatar\" class=\"avatar mr-16\" [alt]=\"user.name\"/>\r\n            <span class=\"h5\">{{user.name}}</span>\r\n            <!-- / USER -->\r\n\r\n        </div>\r\n        <!-- / SIDENAV HEADER -->\r\n\r\n        <!-- SIDENAV CONTENT -->\r\n        <div class=\"content py-16\" fusePerfectScrollbar>\r\n\r\n            <div class=\"nav\">\r\n\r\n                <div class=\"nav-item\" aria-label=\"inbox\">\r\n                    <a class=\"nav-link\" matRipple (click)=\"changeFilter('all')\" [ngClass]=\"{'active':filterBy ==='all'}\">\r\n                        <span class=\"title\">All Contacts</span>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"nav-item\" aria-label=\"frequently contacted\" (click)=\"changeFilter('frequent')\">\r\n                    <a class=\"nav-link\" matRipple [ngClass]=\"{'active':filterBy ==='frequent'}\">\r\n                        <div class=\"title\">Freequently contacted</div>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"nav-item\" aria-label=\"starred\" (click)=\"changeFilter('starred')\">\r\n                    <a class=\"nav-link\" matRipple [ngClass]=\"{'active':filterBy ==='starred'}\">\r\n                        <div class=\"title\">Starred Contacts</div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- / SIDENAV CONTENT -->\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/sidenavs/main/main.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/sidenavs/main/main.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  height: 100%; }\n:host .sidenav-content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 0; }\n@media screen and (min-width: 960px) {\n      :host .sidenav-content {\n        padding: 24px 4px 24px 24px; } }\n:host .sidenav-content .card {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-flex: 0;\n              flex: 0 1 auto;\n      padding: 0; }\n@media screen and (min-width: 960px) {\n        :host .sidenav-content .card {\n          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); } }\n:host .sidenav-content .card > .header {\n        -webkit-box-flex: 0;\n                flex: 0 1 auto;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .sidenav-content .card > .content {\n        -webkit-box-flex: 0;\n                flex: 0 1 auto; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-contacts/sidenavs/main/main.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-contacts/sidenavs/main/main.component.ts ***!
  \************************************************************************************/
/*! exports provided: FuseContactsMainSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseContactsMainSidenavComponent", function() { return FuseContactsMainSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contacts.service */ "./src/app/main/content/apps/company-contacts/contacts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FuseContactsMainSidenavComponent = /** @class */ (function () {
    function FuseContactsMainSidenavComponent(contactsService) {
        var _this = this;
        this.contactsService = contactsService;
        this.filterBy = this.contactsService.filterBy || 'all';
        this.onUserDataChangedSubscription =
            this.contactsService.onUserDataChanged.subscribe(function (user) {
                _this.user = user;
            });
    }
    FuseContactsMainSidenavComponent.prototype.changeFilter = function (filter) {
        this.filterBy = filter;
        this.contactsService.onFilterChanged.next(this.filterBy);
    };
    FuseContactsMainSidenavComponent.prototype.ngOnDestroy = function () {
        this.onUserDataChangedSubscription.unsubscribe();
    };
    FuseContactsMainSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-contacts-main-sidenav',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/content/apps/company-contacts/sidenavs/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/content/apps/company-contacts/sidenavs/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_contacts_service__WEBPACK_IMPORTED_MODULE_1__["ContactsService"]])
    ], FuseContactsMainSidenavComponent);
    return FuseContactsMainSidenavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=company-contacts-contacts-module.js.map