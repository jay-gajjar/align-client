(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-contacts-contacts-module"],{

/***/ "./src/app/main/content/apps/user-contacts/contact-form/contact-form.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/contact-form/contact-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mat-white-bg mat-elevation-z4\">\r\n<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-16 m-0\" fusePerfectScrollbar>\r\n\r\n        <form [formGroup]=\"contactForm\">\r\n            \r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"email\" formControlName=\"email\" matInput type=\"email\" placeholder=\"Email\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input formControlName=\"phone\" matInput placeholder=\"Phone number\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <mat-select formControlName=\"role\" name=\"role\" placeholder=\"Role\" required>\r\n                        <mat-option value=\"employee\">Employee</mat-option>\r\n                        <mat-option value=\"manager\">Manager</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n            \r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"country_code\" formControlName=\"country_code\" matInput type=\"text\" placeholder=\"Country Code\">\r\n                </mat-form-field>\r\n            </div>\r\n            \r\n            <!-- <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <span style=\"padding-right: 10px;\">Bulk Invite : </span><input type=\"file\" name=\"bulk-users\" >\r\n            </div> -->\r\n            \r\n        </form>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <button \r\n                mat-raised-button\r\n                (click)=\"inviteUser(contactForm.value)\"\r\n                class=\"save-button mat-accent\"\r\n                [disabled]=\"contactForm.invalid\"\r\n                aria-label=\"SAVE\">\r\n            Invite User\r\n        </button>\r\n\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/contact-form/contact-form.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/contact-form/contact-form.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.contact-form-dialog {\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .contact-form-dialog {\n      width: 100%; } }\n.contact-form-dialog .mat-dialog-container {\n    padding: 0; }\n.contact-form-dialog .mat-dialog-container .mat-toolbar {\n      -webkit-box-flex: 1;\n              flex: 1 0 auto;\n      min-height: initial; }\n.contact-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.contact-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/contact-form/contact-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/contact-form/contact-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FuseContactsContactFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseContactsContactFormDialogComponent", function() { return FuseContactsContactFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contact.model */ "./src/app/main/content/apps/user-contacts/contact.model.ts");
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
    function FuseContactsContactFormDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.dialogTitle = 'Invite User';
        this.contact = new _contact_model__WEBPACK_IMPORTED_MODULE_3__["Contact"]({});
        this.contactForm = this.createContactForm();
    }
    FuseContactsContactFormDialogComponent.prototype.createContactForm = function () {
        return this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phone: [''],
            role: [''],
            country_code: ['']
        });
    };
    FuseContactsContactFormDialogComponent.prototype.inviteUser = function (formData) {
        this.dialogRef.close(formData);
    };
    FuseContactsContactFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-contacts-contact-form-dialog',
            template: __webpack_require__(/*! ./contact-form.component.html */ "./src/app/main/content/apps/user-contacts/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.scss */ "./src/app/main/content/apps/user-contacts/contact-form/contact-form.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FuseContactsContactFormDialogComponent);
    return FuseContactsContactFormDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/contact-list/contact-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/contact-list/contact-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mat-white-bg mat-elevation-z4\">\r\n                \r\n        <!-- <fuse-contacts-contact-list></fuse-contacts-contact-list> -->\r\n<mat-table #table [dataSource]=\"dataSource\"\r\n           [@animateStagger]=\"{value:'50'}\" *ngIf=\"dataSource\">\r\n\r\n    <!-- Avatar Column -->\r\n    <ng-container cdkColumnDef=\"avatar\">\r\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\">\r\n            <img class=\"avatar\" *ngIf=\"contact.profile_image\" [alt]=\"contact.first_name\"\r\n                 [src]=\"contact.profile_image\"/>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container cdkColumnDef=\"name\">\r\n        <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" (click)=\"openModal(contact)\">\r\n            <p class=\"text-truncate font-weight-600\" style=\"cursor: pointer\">{{contact.first_name}} {{contact.last_name}}</p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Email Column -->\r\n    <ng-container cdkColumnDef=\"email\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-xs>Email</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-xs>\r\n            <p class=\"email text-truncate\">\r\n                {{contact.email}}\r\n            </p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Phone Column -->\r\n    <ng-container cdkColumnDef=\"phone\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-xs>Phone</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-xs>\r\n            <p class=\"phone text-truncate\">\r\n                {{contact.phone}}\r\n            </p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Status Column -->\r\n    <ng-container cdkColumnDef=\"status\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Status</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\r\n            <p class=\"status text-truncate pending\" *ngIf=\"!contact.is_verified\">Pending</p>\r\n            <p class=\"status text-truncate approved\" *ngIf=\"contact.is_verified\">Approved</p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Buttons Column -->\r\n    <ng-container cdkColumnDef=\"buttons\">\r\n        <mat-header-cell *cdkHeaderCellDef>Actions</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\">\r\n            <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\r\n              <button class=\"new_btn mr-lef\" aria-label=\"edit\" (click)=\"editContact(contact)\"><mat-icon>visibility</mat-icon></button>\r\n               <button class=\"new_btn mr-lef\" aria-label=\"remove\" (click)=\"deleteContact(contact)\"><mat-icon>delete</mat-icon></button>\r\n               <button class=\"new_btn\" aria-label=\"calendar\" (click)=\"calClick(contact)\"><mat-icon>calendar_today</mat-icon></button>\r\n            </div>\r\n\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *cdkRowDef=\"let contact; columns: displayedColumns;\"\r\n             class=\"contact\"\r\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\r\n    </mat-row>\r\n</mat-table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/contact-list/contact-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/contact-list/contact-list.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nfuse-contacts-contact-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  width: 100%; }\nfuse-contacts-contact-list .mat-table {\n    width: 100%;\n    background: transparent;\n    box-shadow: none; }\nfuse-contacts-contact-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n              flex: 0 1 64px;\n      padding-left: 18px; }\nfuse-contacts-contact-list .mat-table .mat-column-avatar {\n      -webkit-box-flex: 0;\n              flex: 0 1 64px; }\nfuse-contacts-contact-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n              flex: 0 1 100px; }\nfuse-contacts-contact-list .mat-table mat-cell:first-child {\n      padding-left: 15px !important; }\nfuse-contacts-contact-list .mat-table .pending {\n      color: red; }\nfuse-contacts-contact-list .mat-table .approved {\n      color: green; }\nfuse-contacts-contact-list .mat-table .mat-row {\n      position: relative;\n      padding: 8px; }\nfuse-contacts-contact-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nfuse-contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            fuse-contacts-contact-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\n#add-contact-button {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  padding: 0;\n  z-index: 99; }\n.new_btn {\n  height: 24px;\n  width: 24px;\n  background-color: #f49f14;\n  border-radius: 50px;\n  padding-top: 4px;\n  cursor: pointer; }\n.mr-lef {\n  margin-right: 10px; }\n.new_btn .mat-icon {\n  height: 20px;\n  width: 20px;\n  font-size: 17px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/contact-list/contact-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/contact-list/contact-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FuseContactsContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseContactsContactListComponent", function() { return FuseContactsContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contacts.service */ "./src/app/main/content/apps/user-contacts/contacts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../edit-user/edit-user.component */ "./src/app/main/content/apps/user-contacts/edit-user/edit-user.component.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/services/api.service */ "./src/@fuse/services/api.service.ts");
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
    function FuseContactsContactListComponent(contactsService, dialog, router, apiService, apiloader, toast) {
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.router = router;
        this.apiService = apiService;
        this.apiloader = apiloader;
        this.toast = toast;
        this.displayedColumns = ['avatar', 'name', 'email', 'phone', 'status', 'buttons'];
    }
    FuseContactsContactListComponent.prototype.ngOnInit = function () {
        this.userType = sessionStorage.getItem('role');
        this.getAllUsers();
    };
    FuseContactsContactListComponent.prototype.openModal = function (contact) {
        var _this = this;
        this.dialogRef = this.dialog.open(_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_6__["EditUserComponent"], {
            panelClass: 'edit-user-dialog',
            data: {
                contact: contact,
                role: this.userType,
                action: 'edit'
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            else {
                _this.updateUser(response);
            }
        });
    };
    FuseContactsContactListComponent.prototype.getAllUsers = function () {
        var _this = this;
        var id = sessionStorage.getItem('client_id');
        var role = sessionStorage.getItem('role');
        //alert(role);
        if (role === 'CLIENT_ADMIN') {
            this.apiService.getData('users', { 'client_id': id }).subscribe(function (response) {
                if (response.data) {
                    var data = response.data;
                    var users = [];
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].role !== 'CLIENT_ADMIN') {
                            users.push(data[i]);
                        }
                    }
                    //console.log(users);
                    _this.dataSource = users;
                }
            }, function (error) {
                _this.toast.showError(error);
            });
        }
        else {
            this.apiService.getData('users').subscribe(function (response) {
                if (response.data) {
                    _this.dataSource = response.data;
                }
            }, function (error) {
                _this.toast.showError(error);
            });
        }
    };
    FuseContactsContactListComponent.prototype.updateUser = function (formData) {
        var _this = this;
        this.apiloader.setLoader(true);
        formData.join_date = moment__WEBPACK_IMPORTED_MODULE_9__(formData.join_date).format('YYYY-MM-DD');
        formData.birth_date = moment__WEBPACK_IMPORTED_MODULE_9__(formData.birth_date).format('YYYY-MM-DD');
        var data = this.apiService.setData(formData);
        this.apiService.postData('users/' + formData.id, data).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.toast.showSuccess('User Updated Successfully!.');
                _this.getAllUsers();
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    /**
   * Edit Contact
   */
    FuseContactsContactListComponent.prototype.editContact = function (contact) {
        this.router.navigate(['/apps/user-contacts/edit-employee', contact.id]);
    };
    /**
     * Delete Contact
     */
    FuseContactsContactListComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to Delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.apiloader.setLoader(true);
                _this.apiService.deleteData('users/' + contact.id).subscribe(function (response) {
                    if (response.status === 'success') {
                        _this.apiloader.setLoader(false);
                        _this.getAllUsers();
                        _this.toast.showSuccess('User Deleted Successfully!.');
                    }
                }, function (error) {
                    _this.apiloader.setLoader(false);
                    _this.toast.showError(error);
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseContactsContactListComponent.prototype.calClick = function (contact) {
        this.router.navigate(['/apps/user-calendar', contact.id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dialogContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], FuseContactsContactListComponent.prototype, "dialogContent", void 0);
    FuseContactsContactListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-contacts-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/main/content/apps/user-contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.scss */ "./src/app/main/content/apps/user-contacts/contact-list/contact-list.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_contacts_service__WEBPACK_IMPORTED_MODULE_4__["ContactsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_7__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"]])
    ], FuseContactsContactListComponent);
    return FuseContactsContactListComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/contact.model.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/contact.model.ts ***!
  \******************************************************************/
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
            this.status = contact.status || '';
        }
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/contacts.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/contacts.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contacts\" class=\"page-layout simple left-sidenav inner-sidenav\">\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\"\r\n         fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n        <!-- APP TITLE -->\r\n        <div class=\"title\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">perm_identity</mat-icon>\r\n                <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">{{ title }}</span>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / APP TITLE -->\r\n\r\n        <!-- SEARCH -->\r\n        <!-- <div class=\"search-input-wrapper mt-16 ml-8 m-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <label for=\"search\" class=\"mr-8\">\r\n                <mat-icon>search</mat-icon>\r\n            </label>\r\n            <mat-form-field mat-no-float class=\"m-0\" floatLabel=\"never\">\r\n                <input matInput [formControl]=\"searchInput\" id=\"search\" placeholder=\"Search for anything\">\r\n            </mat-form-field>\r\n        </div> -->\r\n        <!-- / SEARCH -->\r\n\r\n        <ng-container *ngIf=\"userType == 'CLIENT_ADMIN' && title == 'User Contacts'\">\r\n            <button mat-fab class=\"fab-add\" (click)=\"openModal()\" aria-label=\"add contact\"\r\n                    *fuseIfOnDom [@animate]=\"{value:'*', params:{delay:'300ms',scale:'.2'}}\">\r\n                <mat-icon>person_add</mat-icon>\r\n            </button>\r\n        </ng-container>\r\n\r\n    </div>\r\n    <fuse-selected-bar class=\"mat-accent-600-bg\" *ngIf=\"hasSelectedContacts\" [@slideInTop]></fuse-selected-bar>\r\n\r\n    <mat-sidenav-container>        \r\n        <div class=\"center p-24 pb-56\" fusePerfectScrollbar>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </mat-sidenav-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/contacts.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/contacts.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contacts .title {\n  -webkit-box-flex: 1;\n          flex: 1; }\n\n#contacts .content {\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/contacts.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/contacts.component.ts ***!
  \***********************************************************************/
/*! exports provided: FuseContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseContactsComponent", function() { return FuseContactsComponent; });
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/main/content/apps/user-contacts/contact-form/contact-form.component.ts");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacts.service */ "./src/app/main/content/apps/user-contacts/contacts.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var _user_contacts_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-contacts.service */ "./src/app/main/content/apps/user-contacts/user-contacts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function FuseContactsComponent(route, contactsService, dialog, userService, apiloader, toast, router) {
        var _this = this;
        this.route = route;
        this.contactsService = contactsService;
        this.dialog = dialog;
        this.userService = userService;
        this.apiloader = apiloader;
        this.toast = toast;
        this.router = router;
        this.userType = sessionStorage.getItem('role');
        router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__["NavigationEnd"]) {
                if (_this.router.url == '/apps/user-contacts') {
                    _this.title = 'User Contacts';
                }
                else {
                    if (_this.router.url.indexOf('user-contacts/edit-employee/') != -1) {
                        _this.route.firstChild.params.subscribe(function (params) {
                            if (params['userId']) {
                                _this.getUserDetails(params['userId']);
                            }
                        });
                    }
                }
            }
        });
        this.searchInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    FuseContactsComponent.prototype.openModal = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(_contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_6__["FuseContactsContactFormDialogComponent"], {
            panelClass: 'contact-form-dialog',
            data: {}
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            else {
                _this.inviteUser(response);
            }
        });
    };
    FuseContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.onSelectedContactsChangedSubscription =
            this.contactsService.onSelectedContactsChanged
                .subscribe(function (selectedContacts) {
                _this.hasSelectedContacts = selectedContacts.length > 0;
            });
        this.searchInput.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(function (searchText) {
            _this.contactsService.onSearchTextChanged.next(searchText);
        });
    };
    FuseContactsComponent.prototype.inviteUser = function (formData) {
        var _this = this;
        this.apiloader.setLoader(true);
        var body = new URLSearchParams();
        body.set('email', formData.email);
        body.set('role', formData.role);
        body.set('phone', formData.phone);
        body.set('country_code', formData.country_code);
        this.userService.postData('clients/invite-user', body.toString()).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.toast.showSuccess('User Invited Successfully!');
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    FuseContactsComponent.prototype.getUserDetails = function (id) {
        var _this = this;
        this.userService.getData('users/' + id).subscribe(function (response) {
            if (response.data) {
                _this.title = response.data.first_name + ' ' + response.data.last_name;
            }
        });
    };
    FuseContactsComponent.prototype.ngOnDestroy = function () {
        this.onSelectedContactsChangedSubscription.unsubscribe();
    };
    FuseContactsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fuse-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/main/content/apps/user-contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.scss */ "./src/app/main/content/apps/user-contacts/contacts.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
            _contacts_service__WEBPACK_IMPORTED_MODULE_7__["ContactsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _user_contacts_service__WEBPACK_IMPORTED_MODULE_9__["UserContactsService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], FuseContactsComponent);
    return FuseContactsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/contacts.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/contacts.module.ts ***!
  \********************************************************************/
/*! exports provided: UserContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContactsModule", function() { return UserContactsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _sidenavs_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidenavs/main/main.component */ "./src/app/main/content/apps/user-contacts/sidenavs/main/main.component.ts");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contacts.component */ "./src/app/main/content/apps/user-contacts/contacts.component.ts");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contacts.service */ "./src/app/main/content/apps/user-contacts/contacts.service.ts");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/main/content/apps/user-contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _selected_bar_selected_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selected-bar/selected-bar.component */ "./src/app/main/content/apps/user-contacts/selected-bar/selected-bar.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/main/content/apps/user-contacts/contact-form/contact-form.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/main/content/apps/user-contacts/edit-user/edit-user.component.ts");
/* harmony import */ var _user_contacts_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-contacts.service */ "./src/app/main/content/apps/user-contacts/user-contacts.service.ts");
/* harmony import */ var _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-employee/edit-employee.component */ "./src/app/main/content/apps/user-contacts/edit-employee/edit-employee.component.ts");
/* harmony import */ var _edit_employee_emp_calendar_emp_calendar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-employee/emp-calendar/emp-calendar.component */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.component.ts");
/* harmony import */ var _edit_employee_emp_performance_emp_performance_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-employee/emp-performance/emp-performance.component */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/emp-performance.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _edit_employee_emp_calendar_emp_calendar_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./edit-employee/emp-calendar/emp-calendar.service */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.service.ts");
/* harmony import */ var _edit_employee_emp_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-employee/emp-calendar/event-form/event-form.component */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event-form/event-form.component.ts");
/* harmony import */ var _edit_employee_emp_calendar_api_calendar_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-employee/emp-calendar/api-calendar.service */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/api-calendar.service.ts");
/* harmony import */ var _edit_employee_emp_performance_analytics_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./edit-employee/emp-performance/analytics.service */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/analytics.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _edit_employee_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./edit-employee/edit-form/edit-form.component */ "./src/app/main/content/apps/user-contacts/edit-employee/edit-form/edit-form.component.ts");
/* harmony import */ var _edit_employee_attendence_attendence_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./edit-employee/attendence/attendence.component */ "./src/app/main/content/apps/user-contacts/edit-employee/attendence/attendence.component.ts");
/* harmony import */ var _edit_employee_leave_management_leave_management_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./edit-employee/leave-management/leave-management.component */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-management.component.ts");
/* harmony import */ var _edit_employee_leave_management_event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./edit-employee/leave-management/event-dialog/event-dialog.component */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/event-dialog/event-dialog.component.ts");
/* harmony import */ var _edit_employee_leave_management_leave_dialog_leave_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./edit-employee/leave-management/leave-dialog/leave-dialog.component */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-dialog/leave-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var routes = [
    {
        path: '',
        component: _contacts_component__WEBPACK_IMPORTED_MODULE_7__["FuseContactsComponent"],
        resolve: {
            contacts: _contacts_service__WEBPACK_IMPORTED_MODULE_8__["ContactsService"]
        },
        children: [
            {
                path: '',
                component: _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_9__["FuseContactsContactListComponent"]
            },
            {
                path: 'edit-employee/:userId',
                component: _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_14__["EditEmployeeComponent"],
                resolve: {
                    data: _edit_employee_emp_performance_analytics_service__WEBPACK_IMPORTED_MODULE_22__["AnalyticsDashboardService"],
                }
            }
        ]
    }
];
var UserContactsModule = /** @class */ (function () {
    function UserContactsModule() {
    }
    UserContactsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _edit_employee_emp_calendar_emp_calendar_component__WEBPACK_IMPORTED_MODULE_15__["EmpCalendarComponent"],
                _edit_employee_emp_performance_emp_performance_component__WEBPACK_IMPORTED_MODULE_16__["EmpPerformanceComponent"],
                _contacts_component__WEBPACK_IMPORTED_MODULE_7__["FuseContactsComponent"],
                _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_9__["FuseContactsContactListComponent"],
                _selected_bar_selected_bar_component__WEBPACK_IMPORTED_MODULE_10__["FuseContactsSelectedBarComponent"],
                _sidenavs_main_main_component__WEBPACK_IMPORTED_MODULE_6__["FuseContactsMainSidenavComponent"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_11__["FuseContactsContactFormDialogComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"],
                _edit_employee_edit_employee_component__WEBPACK_IMPORTED_MODULE_14__["EditEmployeeComponent"],
                _edit_employee_emp_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_20__["FuseCalendarEventFormDialogComponent"],
                _edit_employee_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_26__["EditFormComponent"],
                _edit_employee_attendence_attendence_component__WEBPACK_IMPORTED_MODULE_27__["AttendenceComponent"],
                _edit_employee_leave_management_leave_management_component__WEBPACK_IMPORTED_MODULE_28__["LeaveManagementComponent"],
                _edit_employee_leave_management_event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_29__["EventDialogComponent"],
                _edit_employee_leave_management_leave_dialog_leave_dialog_component__WEBPACK_IMPORTED_MODULE_30__["LeaveDialogComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_17__["CalendarModule"].forRoot(),
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_18__["ColorPickerModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseConfirmDialogModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_23__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
                }),
                ng2_charts__WEBPACK_IMPORTED_MODULE_24__["ChartsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_25__["NgxChartsModule"],
            ],
            providers: [
                _contacts_service__WEBPACK_IMPORTED_MODULE_8__["ContactsService"],
                _user_contacts_service__WEBPACK_IMPORTED_MODULE_13__["UserContactsService"],
                _edit_employee_emp_calendar_emp_calendar_service__WEBPACK_IMPORTED_MODULE_19__["EmpCalendarService"],
                _edit_employee_emp_calendar_api_calendar_service__WEBPACK_IMPORTED_MODULE_21__["ApiCalendarService"],
                _edit_employee_emp_performance_analytics_service__WEBPACK_IMPORTED_MODULE_22__["AnalyticsDashboardService"]
            ],
            entryComponents: [_edit_employee_leave_management_leave_dialog_leave_dialog_component__WEBPACK_IMPORTED_MODULE_30__["LeaveDialogComponent"], _edit_employee_leave_management_event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_29__["EventDialogComponent"], _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_11__["FuseContactsContactFormDialogComponent"], _edit_employee_emp_calendar_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_20__["FuseCalendarEventFormDialogComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"], _edit_employee_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_26__["EditFormComponent"]]
        })
    ], UserContactsModule);
    return UserContactsModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/contacts.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/contacts.service.ts ***!
  \*********************************************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var _contact_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.model */ "./src/app/main/content/apps/user-contacts/contact.model.ts");
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

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/attendence/attendence.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/attendence/attendence.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"attendance\">\r\n  <div class=\"calHeader\">\r\n    <div class=\"form-fields\">\r\n      <mat-form-field class=\"new_mr\">\r\n        <mat-select (selectionChange)=\"onChngMonth($event.value)\" [(ngModel)]=\"selectm\" placeholder=\"Month\">\r\n          <mat-option *ngFor=\"let month of months; let i=index\" [value]=\"i+1\">\r\n            {{month}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field style=\"padding-left: 10px;\">\r\n        <mat-select (selectionChange)=\"onChngYear($event.value)\" [(ngModel)]=\"selecty\" placeholder=\"Year\">\r\n          <mat-option *ngFor=\"let year of years\" [value]=\"year\">\r\n            {{year}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"total\">Total - 30 </div>\r\n    <div class=\"current\">June Attendance - 27 days </div>\r\n    <div class=\"leave\">Leave - 3 </div>\r\n    <div class=\"download\">\r\n      <i class=\"fa fa-download\"></i>\r\n    </div>\r\n  </div>\r\n  <div class=\"month-table\">\r\n    <table class='tableAtt' style=\"width:97%\">\r\n      <thead>\r\n        <tr>\r\n          <th></th>\r\n          <th style=\"text-align: center;\">Arrival</th>\r\n          <th style=\"text-align: center;\">Departure</th>\r\n          <th style=\"text-align: center;\">Extras</th>\r\n          <th style=\"text-align: center;\">Late</th>\r\n          <th style=\"text-align: center;\">Total</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"attendenceDetails\">\r\n        <tr class=\"TrPadding\" *ngFor=\"let item of attendenceDetails\">\r\n          <td style=\"width: 8%;\">{{item.curr_date}}</td>\r\n          <ng-container *ngIf=\"item.type == 'attended'\">\r\n              <td style=\"background-color: #ececec; text-align: center;\">{{item.arrival}}</td>\r\n              <td style=\"background-color: #ececec;text-align: center;\">{{item.departure}}</td>\r\n              <td style=\"background-color: #ececec;text-align: center;\">{{item.extras}}</td>\r\n              <td style=\"background-color: #ececec;text-align: center;\">{{item.late}}</td>\r\n              <td style=\"background-color: #ececec;text-align: center;\">{{item.total}}</td>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"item.type == 'weekend'\">\r\n              <td colspan=\"5\" style=\"background-color: #ececec;text-align: center;\">{{item.day}}</td>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"item.type == 'holiday'\">\r\n              <td colspan=\"5\" style=\"background-color: #ececec;text-align: center;\">{{item.holiday}}</td>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"item.type == 'leave'\">\r\n              <td colspan=\"5\" style=\"background-color: #ececec;color: red;text-align: center;\">Leave</td>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"item.type == 'other'\">\r\n              <td colspan=\"5\" style=\"background-color: #ececec;text-align: center;\"></td>\r\n          </ng-container>\r\n        </tr>\r\n      </tbody>\r\n\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/attendence/attendence.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/attendence/attendence.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".attendance .calHeader {\n  display: -webkit-box;\n  display: flex;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 16px;\n  font-weight: 500;\n  flex-wrap: wrap; }\n  .attendance .calHeader .form-fields .mat-form-field {\n    padding: 10px 10px 0px 0px; }\n  .attendance table {\n  border-collapse: unset; }\n  .attendance .month-table .TrPadding td {\n  padding: 6px;\n  font-size: 12px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/attendence/attendence.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/attendence/attendence.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AttendenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendenceComponent", function() { return AttendenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-contacts.service */ "./src/app/main/content/apps/user-contacts/user-contacts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttendenceComponent = /** @class */ (function () {
    function AttendenceComponent(userService, route, apiloader) {
        var _this = this;
        this.userService = userService;
        this.route = route;
        this.apiloader = apiloader;
        this.years = [];
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
        });
        this.viewDate = new Date();
        //---- DropDown for month and year -----//
        var date = new Date();
        var currentYear = date.getFullYear();
        //set values for year dropdown
        for (var i = 0; i <= 100; i++) {
            this.years.push(currentYear + i);
        }
        //set values for month dropdown
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.selectm = this.viewDate.getMonth() + 1;
        this.selecty = currentYear;
    }
    AttendenceComponent.prototype.ngOnInit = function () {
        this.getAttendenceData();
    };
    AttendenceComponent.prototype.getAttendenceData = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        var body = new URLSearchParams();
        var month = JSON.stringify(this.selectm).length > 1 ? this.selectm : '0' + this.selectm;
        body.set('date', this.selecty + '-' + month + '-' + '01');
        this.userService.postData('attendance/attPerformance/' + this.userId, body.toString()).subscribe(function (response) {
            if (response) {
                _this.apiloader.setLoader(false);
                _this.attendenceDetails = response.data;
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
        });
    };
    AttendenceComponent.prototype.onChngMonth = function (event) {
        this.selectm = event;
        this.getAttendenceData();
    };
    AttendenceComponent.prototype.onChngYear = function (event) {
        this.selecty = event;
        this.getAttendenceData();
    };
    AttendenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attendance',
            template: __webpack_require__(/*! ./attendence.component.html */ "./src/app/main/content/apps/user-contacts/edit-employee/attendence/attendence.component.html"),
            styles: [__webpack_require__(/*! ./attendence.component.scss */ "./src/app/main/content/apps/user-contacts/edit-employee/attendence/attendence.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_contacts_service__WEBPACK_IMPORTED_MODULE_1__["UserContactsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_3__["ApiLoaderService"]])
    ], AttendenceComponent);
    return AttendenceComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/edit-employee.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/edit-employee.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-white-bg mat-elevation-z4\">\r\n    <div fxLayout=\"row wrap\">\r\n        <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex=\"100\">\r\n            <!-- <mat-card> -->\r\n            <mat-tab-group [selectedIndex]=\"selectedTab\">\r\n                <mat-tab label=\"About\">\r\n                    <div id=\"about\" class=\"p-24\" fxLayout=\"row\" *ngIf=\"user\">\r\n                        <div class=\"about-content\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"90\">\r\n                            <div class=\"profile-box info-box general\" fxLayout=\"column\">\r\n                                <header class=\"mat-accent-bg\">\r\n                                    <div class=\"head\">\r\n                                        <div class=\"title\">General Information</div>\r\n                                        <div class=\"edit_t\">\r\n                                            <button mat-icon-button (click)=\"editform('general')\">\r\n                                                <mat-icon>edit</mat-icon>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div> \r\n                                </header>\r\n                                <div class=\"content\">\r\n                                    <mat-list>\r\n                                        <mat-list-item class=\"new_nn\">First Name</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.first_name}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Last Name</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.last_name}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Industry</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.industry}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Job Role</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.job_role}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Job Description</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.job_description}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Designation</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.designation}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Department</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.department}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Employment Type</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.employment_type}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Joining Date</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.joining_date}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Reporting To</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.reporting_to}}</mat-list-item>\r\n                                    </mat-list>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"about-sidebar\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"50\">\r\n\r\n                            <div class=\"profile-box info-box contact\" fxLayout=\"column\">\r\n\r\n                                <header class=\"mat-accent-bg\">\r\n                                    <div class=\"head\">\r\n                                        <div class=\"title\">Contact Information</div>\r\n                                        <div class=\"edit_t\">\r\n                                            <button mat-icon-button (click)=\"editform('contact')\">\r\n                                                <mat-icon>edit</mat-icon>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- <div class=\"title\">Contact Information</div> -->\r\n                                </header>\r\n\r\n                                <div class=\"content\">\r\n\r\n                                    <mat-list>\r\n                                        <mat-list-item class=\"new_nn\">Contact Number</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.phone}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Email Address</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.email}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Resident Address</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.address}}</mat-list-item>\r\n                                    </mat-list>\r\n\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"profile-box info-box contact\" fxLayout=\"column\">\r\n\r\n                                <header class=\"mat-accent-bg\">\r\n                                    <div class=\"head\">\r\n                                        <div class=\"title\">Work and Other Information</div>\r\n                                        <div class=\"edit_t\">\r\n                                            <button mat-icon-button (click)=\"editform('work')\">\r\n                                                <mat-icon>edit</mat-icon>\r\n                                            </button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- <div class=\"title\">Work and Other Information</div> -->\r\n                                </header>\r\n\r\n                                <div class=\"content\">\r\n\r\n                                    <mat-list>\r\n                                        <mat-list-item class=\"new_nn\">Education</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.education}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Past Experience</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.past_experience}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Previous Company</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.previous_company}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Marital Status</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.marital_status}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Gender</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.gender}}</mat-list-item>\r\n                                        <mat-list-item class=\"new_nn\">Birth Date</mat-list-item>\r\n                                        <mat-list-item class=\"new_n\">{{user.birth_date}}</mat-list-item>\r\n                                    </mat-list>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n                </mat-tab>\r\n                <mat-tab label=\"Calendar\">\r\n                    <app-emp-calendar></app-emp-calendar>\r\n                </mat-tab>\r\n                <mat-tab label=\"Performance\">\r\n                    <app-emp-performance></app-emp-performance>\r\n                </mat-tab>\r\n                <mat-tab label=\"Attendance\">\r\n                    <app-attendance></app-attendance>\r\n                </mat-tab>\r\n                <mat-tab label=\"Leave Management\">\r\n                    <app-leave-management></app-leave-management>\r\n                </mat-tab>\r\n            </mat-tab-group>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/edit-employee.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/edit-employee.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-elevation-z4 {\n  box-shadow: none !important;\n  margin-top: -22px;\n  margin-left: -22px; }\n.mat-white-bg {\n  background-color: none !important; }\n.head {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 5px 10px; }\n.head .title {\n    font-size: 14px;\n    font-weight: bold; }\n.head .mat-icon {\n    color: #000; }\n#profile .header {\n  height: 120px;\n  min-height: 120px;\n  max-height: 120px;\n  background-size: cover; }\n#profile .header .profile-image {\n    margin-right: 24px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .profile-image {\n        margin: 0 0 16px 0; } }\n#profile .header .name {\n    font-size: 34px;\n    color: #FFFFFF; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .name {\n        margin-bottom: 32px; } }\n#profile .header .actions button {\n    text-transform: none;\n    padding: 0 16px;\n    height: 32px;\n    line-height: 32px;\n    margin: 0 0 0 8px; }\n#profile .content {\n  -webkit-box-flex: 1;\n          flex: 1; }\n#profile .content mat-tab-group {\n    height: 100%; }\n#profile .content mat-tab-group .mat-tab-body-wrapper {\n      -webkit-box-flex: 1;\n              flex-grow: 1; }\n#about {\n  max-width: 100%; }\n@media only screen and (max-width: 768px) {\n    #about {\n      flex-wrap: wrap; } }\n#about .about-content .general .location mat-icon {\n    line-height: 13px !important; }\n#about .about-content .work .job .company {\n    padding: 0 16px 0 0;\n    font-weight: 500; }\n#about .about-content .work .job .date {\n    color: rgba(0, 0, 0, 0.54); }\n#about .about-sidebar {\n    padding-left: 13px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #about .about-sidebar {\n        padding: 8px; } }\n#about .about-sidebar .friends .content .friend {\n      padding: 4px; }\n#about .about-sidebar .groups .content .group {\n      margin-bottom: 16px; }\n#about .about-sidebar .groups .content .group:last-child {\n        margin-bottom: 0; }\n#about .about-sidebar .groups .content .group .logo {\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        margin-right: 16px; }\n#about .about-sidebar .groups .content .group .name {\n        font-weight: 500;\n        font-size: 15px; }\n#about .about-sidebar .groups .content .group .category,\n      #about .about-sidebar .groups .content .group .members {\n        color: rgba(0, 0, 0, 0.54); }\n#about .about-sidebar .groups .content .group .members {\n        margin-top: 16px; }\n.mat-icon {\n  color: #fff;\n  cursor: pointer; }\n.mat-accent-bg {\n  background-color: #fa791542 !important; }\n.mat-accent-bg .title {\n  color: rgba(0, 0, 0, 0.87); }\n.info-line {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  width: 250px; }\n.new_n {\n  margin-bottom: 10px; }\n.new_nn {\n  height: 10px;\n  font-weight: 600; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/edit-employee.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/edit-employee.component.ts ***!
  \******************************************************************************************/
/*! exports provided: EditEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmployeeComponent", function() { return EditEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-form/edit-form.component */ "./src/app/main/content/apps/user-contacts/edit-employee/edit-form/edit-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_contacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-contacts.service */ "./src/app/main/content/apps/user-contacts/user-contacts.service.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditEmployeeComponent = /** @class */ (function () {
    function EditEmployeeComponent(router, userService, dialog, apiloader, route, toast) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.dialog = dialog;
        this.apiloader = apiloader;
        this.route = route;
        this.toast = toast;
        this.selectedTab = 0;
        this.route.params.subscribe(function (params) {
            _this.userId = params['userId'];
            if (_this.userId) {
                _this.getUserDetails(_this.userId);
            }
        });
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(function (e) { return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["RoutesRecognized"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["pairwise"])()).subscribe(function (e) {
            if (e[0].urlAfterRedirects.indexOf('/performance/employee-performance') != -1) {
                _this.selectedTab = 2;
            }
            else {
                _this.selectedTab = 0;
            }
        });
    }
    EditEmployeeComponent.prototype.ngOnInit = function () {
    };
    EditEmployeeComponent.prototype.setIndex = function (event) {
        this.selectedTab = event;
    };
    EditEmployeeComponent.prototype.editform = function (title) {
        var _this = this;
        // console.log(custon);
        this.dialogRef = this.dialog.open(_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_1__["EditFormComponent"], {
            panelClass: 'edit-form-dialog',
            data: { dtitle: title, user: this.user }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            else {
                _this.updateUser(response);
            }
        });
    };
    EditEmployeeComponent.prototype.getUserDetails = function (id) {
        var _this = this;
        this.apiloader.setLoader(true);
        this.userService.getData('users/' + id).subscribe(function (response) {
            if (response.data) {
                _this.user = response.data;
                _this.apiloader.setLoader(false);
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
        });
    };
    EditEmployeeComponent.prototype.updateUser = function (formData) {
        var _this = this;
        if (formData.joining_date) {
            formData.joining_date = moment__WEBPACK_IMPORTED_MODULE_8__(formData.joining_date).format('YYYY-MM-DD');
        }
        if (formData.birth_date) {
            formData.birth_date = moment__WEBPACK_IMPORTED_MODULE_8__(formData.birth_date).format('YYYY-MM-DD');
        }
        this.apiloader.setLoader(true);
        this.userService.postData('users/' + this.userId, formData).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.toast.showSuccess('User Updated Successfully!.');
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    EditEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-employee',
            template: __webpack_require__(/*! ./edit-employee.component.html */ "./src/app/main/content/apps/user-contacts/edit-employee/edit-employee.component.html"),
            styles: [__webpack_require__(/*! ./edit-employee.component.scss */ "./src/app/main/content/apps/user-contacts/edit-employee/edit-employee.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _user_contacts_service__WEBPACK_IMPORTED_MODULE_3__["UserContactsService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_4__["ApiLoaderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"]])
    ], EditEmployeeComponent);
    return EditEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/edit-form/edit-form.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/edit-form/edit-form.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mat-white-bg mat-elevation-z4\">\r\n    <div class=\"dialog-content-wrapper\">\r\n        <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n            <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n                <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                    <mat-icon>close</mat-icon>\r\n                </button>\r\n            </mat-toolbar-row>\r\n        </mat-toolbar>\r\n    \r\n        <div mat-dialog-content class=\"p-16 m-0\" fusePerfectScrollbar>\r\n     \r\n\r\n          <!-- Start General Form -->\r\n            <form [formGroup]=\"editForm\" *ngIf=\"demoTitle == 'general'\">\r\n                \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field fxFlex>\r\n                        <input formControlName=\"first_name\" matInput placeholder=\"First Name\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field fxFlex>\r\n                        <input formControlName=\"last_name\" matInput placeholder=\"Last Name\">\r\n                    </mat-form-field>\r\n                </div>\r\n    \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field fxFlex>\r\n                        <input formControlName=\"industry\" matInput placeholder=\"Industry\">\r\n                    </mat-form-field>\r\n                </div>\r\n    \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field fxFlex>\r\n                        <mat-select formControlName=\"job_role\"  placeholder=\"Job Role\">\r\n                            <mat-option value=\"team_leader\">Team Leader</mat-option>\r\n                            <mat-option value=\"employee\">Employee</mat-option>\r\n                            <mat-option value=\"manager\">Manager</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field fxFlex>\r\n                        <textarea formControlName=\"job_description\" matInput placeholder=\"Job Description\"></textarea>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field fxFlex>\r\n                        <mat-select formControlName=\"designation\"  placeholder=\"Designation\">\r\n                            <mat-option value=\"team lead\">Team Leader</mat-option>\r\n                            <mat-option value=\"project_manager\">Project Manger</mat-option>\r\n                            <mat-option value=\"manager\">Manager</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field fxFlex>\r\n                        <mat-select formControlName=\"department\"  placeholder=\"Department\">\r\n                            <mat-option value=\"sales\">Sales</mat-option>\r\n                            <mat-option value=\"marketing\">Marketing</mat-option>\r\n                         </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field fxFlex>\r\n                        <mat-select formControlName=\"employment_type\"  placeholder=\"Employment Type\">\r\n                            <mat-option value=\"part-time\">Part Time</mat-option>\r\n                            <mat-option value=\"full-time\">Full Time</mat-option>\r\n                         </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field fxFlex>\r\n                        <input formControlName=\"joined_date\" matInput [matDatepicker]=\"picker1\" placeholder=\"Joined Date\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker1></mat-datepicker>\r\n                     </mat-form-field>\r\n                </div>\r\n                \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field fxFlex>\r\n                        <textarea formControlName=\"reporting_to\"  matInput placeholder=\"Reporting To\"></textarea>\r\n                    </mat-form-field>\r\n                </div>\r\n                \r\n            </form>\r\n\r\n             <!-- End General Form -->\r\n              <!-- Start Contact Form -->\r\n               \r\n              <form [formGroup]=\"editcontForm\" *ngIf=\"demoTitle == 'contact'\">\r\n                \r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                      <mat-form-field fxFlex>\r\n                          <input formControlName=\"phone\" matInput placeholder=\"Phone number\">\r\n                      </mat-form-field>\r\n                  </div>\r\n  \r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                      <mat-form-field fxFlex>\r\n                          <input name=\"email\" formControlName=\"email\" matInput type=\"email\" placeholder=\"Email\">\r\n                      </mat-form-field>\r\n                  </div>\r\n      \r\n                  <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                      <mat-form-field fxFlex>\r\n                          <textarea  formControlName=\"address\" matInput placeholder=\"Resident Address\" matAutosizeMinRows=5 matAutosizeMaxRows=10></textarea>\r\n                      </mat-form-field>\r\n                  </div>\r\n             </form>\r\n\r\n               <!-- End Contact Form -->\r\n                <!-- Start Work Form -->\r\n                <form [formGroup]=\"editworkForm\" *ngIf=\"demoTitle == 'work'\">\r\n                \r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                        <mat-form-field fxFlex>\r\n                            <input formControlName=\"education\" matInput placeholder=\"Education\">\r\n                        </mat-form-field>\r\n                    </div>\r\n    \r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                        <mat-form-field fxFlex>\r\n                            <mat-select formControlName=\"past_experience\"  placeholder=\"Past Experience\">\r\n                                <mat-option value=\"1\">1.0 Year</mat-option>\r\n                                <mat-option value=\"2\">2.0 Year</mat-option>\r\n                                <mat-option value=\"3\">3.0 Year</mat-option>\r\n                                <mat-option value=\"4\">4.0 Year</mat-option>\r\n                                <mat-option value=\"5\">5.0 Year</mat-option>\r\n                                <mat-option value=\">6\"> > 6.0 Year</mat-option>\r\n                             </mat-select>\r\n                         </mat-form-field>\r\n                    </div>\r\n\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                        <mat-form-field fxFlex>\r\n                            <input formControlName=\"previous_company\" matInput  placeholder=\"Previous Company\">\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                        <mat-form-field fxFlex>\r\n                            <mat-select formControlName=\"marital_status\"  placeholder=\"Marital Status\">\r\n                                <mat-option value=\"single\">Single</mat-option>\r\n                                <mat-option value=\"married\">Married</mat-option>\r\n                             </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                   <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                       \r\n                            <mat-radio-group formControlName=\"gender\"  aria-label=\"Select an option\">\r\n                                <mat-radio-button value=\"male\">Male</mat-radio-button>\r\n                                <mat-radio-button value=\"female\">Female</mat-radio-button>\r\n                              </mat-radio-group>\r\n                        \r\n                    </div> \r\n        \r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                      \r\n                        <mat-form-field fxFlex>\r\n                            <input formControlName=\"birth_date\" matInput [matDatepicker]=\"picker\" placeholder=\"Birth Date\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker></mat-datepicker>\r\n                         </mat-form-field>\r\n                    </div>\r\n               </form>\r\n                 <!-- End Work Form -->\r\n    \r\n        </div>\r\n    \r\n        <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n           \r\n            <button *ngIf=\"demoTitle == 'general'\"\r\n                  mat-raised-button\r\n                  (click)=\"updateUser(editForm.value)\"\r\n                  class=\"save-button mat-accent\"\r\n                  [disabled]=\"editForm.invalid\"\r\n                  aria-label=\"SAVE\">\r\n              Submit\r\n          </button>\r\n          <button *ngIf=\"demoTitle == 'contact'\"\r\n                          mat-raised-button\r\n                          (click)=\"updateUser(editcontForm.value)\"\r\n                          class=\"save-button mat-accent\"\r\n                          [disabled]=\"editcontForm.invalid\"\r\n                          aria-label=\"SAVE\">\r\n                      Submit\r\n            </button>\r\n            <button *ngIf=\"demoTitle == 'work'\"\r\n                    mat-raised-button\r\n                    (click)=\"updateUser(editworkForm.value)\"\r\n                    class=\"save-button mat-accent\"\r\n                    [disabled]=\"editworkForm.invalid\"\r\n                    aria-label=\"SAVE\">\r\n                Submit\r\n            </button>\r\n    \r\n        </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/edit-form/edit-form.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/edit-form/edit-form.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.edit-form-dialog {\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .edit-form-dialog {\n      width: 100%; } }\n.edit-form-dialog .mat-dialog-container {\n    padding: 0; }\n.edit-form-dialog .mat-dialog-container .mat-toolbar {\n      -webkit-box-flex: 1;\n              flex: 1 0 auto;\n      min-height: initial; }\n.edit-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.edit-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/edit-form/edit-form.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/edit-form/edit-form.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormComponent", function() { return EditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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



var EditFormComponent = /** @class */ (function () {
    function EditFormComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.user = data.user;
        if (data.dtitle == "general") {
            this.demoTitle = data.dtitle;
            this.dialogTitle = "General Information";
            this.editForm = this.createContactForm();
        }
        else if (data.dtitle == "contact") {
            this.demoTitle = data.dtitle;
            this.dialogTitle = "Contact Information";
            this.editcontForm = this.createContactDetailForm();
        }
        else {
            this.demoTitle = data.dtitle;
            this.dialogTitle = "Work and Other Information";
            this.editworkForm = this.createWorkForm();
        }
    }
    EditFormComponent.prototype.ngOnInit = function () { };
    EditFormComponent.prototype.createContactForm = function () {
        return this.formBuilder.group({
            first_name: [this.user.first_name],
            last_name: [this.user.last_name],
            industry: [this.user.industry],
            job_role: [this.user.job_role],
            job_description: [this.user.job_description],
            designation: [this.user.designation],
            department: [this.user.department],
            employment_type: [this.user.employment_type],
            joined_date: [this.user.joined_date],
            reporting_to: [this.user.reporting_to],
        });
    };
    EditFormComponent.prototype.createContactDetailForm = function () {
        return this.formBuilder.group({
            email: [this.user.email],
            phone: [this.user.phone],
            address: [this.user.address],
        });
    };
    EditFormComponent.prototype.createWorkForm = function () {
        return this.formBuilder.group({
            education: [this.user.education],
            past_experience: [this.user.past_experience],
            previous_company: [this.user.previous_company],
            marital_status: [this.user.marital_status],
            gender: [this.user.gender],
            birth_date: [this.user.birth_date],
        });
    };
    EditFormComponent.prototype.updateUser = function (formData) {
        this.dialogRef.close(formData);
    };
    EditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-form',
            template: __webpack_require__(/*! ./edit-form.component.html */ "./src/app/main/content/apps/user-contacts/edit-employee/edit-form/edit-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-form.component.scss */ "./src/app/main/content/apps/user-contacts/edit-employee/edit-form/edit-form.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditFormComponent);
    return EditFormComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/api-calendar.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/api-calendar.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: ApiCalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCalendarService", function() { return ApiCalendarService; });
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






var ApiCalendarService = /** @class */ (function () {
    function ApiCalendarService(http) {
        this.http = http;
        this.baseUrl = _fuse_constant__WEBPACK_IMPORTED_MODULE_5__["apiUri"];
    }
    ApiCalendarService.prototype.setHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    ApiCalendarService.prototype.postData = function (url, data, type) {
        var headers = this.setHeaders();
        if (type = 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344');
        }
        var options = { headers: headers };
        return this.http.post(this.baseUrl + url, data, options).map(this.extractData).catch(this.handleError);
    };
    ApiCalendarService.prototype.getData = function (url, data) {
        var headers = this.setHeaders();
        if (data) {
            var queryParams = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
            url += '?' + queryParams;
        }
        var options = { headers: headers };
        return this.http.get(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    ApiCalendarService.prototype.deleteData = function (url) {
        var headers = this.setHeaders();
        var options = { headers: headers };
        return this.http.delete(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    ApiCalendarService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiCalendarService.prototype.handleError = function (error) {
        var errMsg = error.error;
        if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) { return errMsg.message[k]; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
    };
    ApiCalendarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiCalendarService);
    return ApiCalendarService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"calendar\" class=\"emp-cal\">\r\n    <div class=\"calHeader\">\r\n      <div class=\"mr_top\">\r\n\r\n              <mat-form-field class=\"new_mr\">\r\n                  <mat-select (selectionChange)=\"onchange($event.value)\" [(ngModel)]=\"selectm\" placeholder=\"Month\">\r\n                    <mat-option *ngFor=\"let month of months\"  [value]=\"month\">\r\n                        {{month}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field style=\"padding-left: 10px;\">\r\n                  <mat-select  (selectionChange)=\"onchangey($event.value)\" [(ngModel)]=\"selecty\" placeholder=\"Year\">\r\n                      <mat-option *ngFor=\"let year of years\"  [value]=\"year\">\r\n                          {{year}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n          \r\n      </div>\r\n        <button mat-raised-button color=\"primary\" class=\"add-btn\">\r\n          <mat-icon>add</mat-icon>Add\r\n        </button>\r\n      </div>\r\n  <div>\r\n      <div class=\"pl-24 pr-24\">\r\n          <mwl-calendar-month-view\r\n              [viewDate]=\"viewDate\"\r\n              [events]=\"events\"\r\n              [refresh]=\"refresh\"\r\n              [activeDayIsOpen]=\"activeDayIsOpen\"\r\n              (dayClicked)=\"dayClicked($event.day)\"\r\n              (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n              (beforeViewRender)=\"beforeMonthViewRender($event)\">\r\n          </mwl-calendar-month-view>\r\n      </div>\r\n</div>\r\n<!-- CONTENT -->\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -webkit-box-flex: 1;\n          flex: 1; }\n.cal-month-view .cal-cell-row {\n  display: -webkit-box;\n  display: flex; }\n.cal-month-view .cal-cell {\n  float: left;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch; }\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n.cal-month-view .cal-events {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px;\n  background-color: #1e90ff;\n  border-color: #D1E8FF;\n  color: #fff; }\n.cal-month-view .cal-event-title:link {\n  color: currentColor; }\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n.cal-week-view .cal-day-headers {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n.cal-week-view .cal-day-headers .cal-header {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding: 5px; }\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px;\n  background-color: #D1E8FF;\n  border: 1px solid #1e90ff;\n  color: #1e90ff; }\n.cal-week-view .cal-event-title:link {\n  color: currentColor; }\n.cal-week-view .cal-draggable {\n  cursor: move; }\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n.cal-day-view .cal-hour-rows {\n    width: 100%;\n    border: solid 1px #e1e1e1;\n    overflow-x: scroll;\n    position: relative; }\n.cal-day-view .cal-hour:nth-child(odd) {\n    background-color: #fafafa; }\n.cal-day-view mwl-calendar-day-view-hour-segment,\n  .cal-day-view .cal-hour-segment {\n    display: block; }\n.cal-day-view .cal-hour-segment::after {\n    content: '\\00a0'; }\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed #e1e1e1; }\n.cal-day-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n.cal-day-view .cal-hour-segment:hover,\n  .cal-day-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n.cal-day-view .cal-event-container {\n    position: absolute; }\n.cal-day-view .cal-event {\n    padding: 5px;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 100%;\n    box-sizing: border-box;\n    background-color: #D1E8FF;\n    border: 1px solid #1e90ff;\n    color: #1e90ff; }\n.cal-day-view .cal-event-title:link {\n    color: currentColor; }\n.cal-day-view .cal-draggable {\n    cursor: move; }\n.cal-day-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n.cal-day-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n.cal-day-view .cal-all-day-event {\n    padding: 8px;\n    border: solid 1px; }\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n.cal-month-view .cal-header .cal-cell {\n  font-weight: 500; }\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  .cal-month-view .cal-day-cell {\n    min-height: 150px; } }\n@media screen and (min-width: 1920px) {\n  .cal-month-view .cal-day-cell {\n    min-height: 200px; } }\n.cal-month-view .cal-day-cell.cal-open {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.cal-month-view .holiday {\n  background-color: #e8fde7 !important; }\n.cal-month-view .cal-open-day-events {\n  background: #455A64;\n  box-shadow: inset 0 0 12px 0 rgba(0, 0, 0, 0.54);\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.cal-month-view .cal-open-day-events > div {\n    padding: 0 16px;\n    margin: 8px 16px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n            justify-content: start;\n    background-color: white;\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n    -webkit-transition: box-shadow 300ms ease;\n    transition: box-shadow 300ms ease; }\n.cal-month-view .cal-open-day-events > div:first-of-type {\n      margin-top: 16px; }\n.cal-month-view .cal-open-day-events > div:last-of-type {\n      margin-bottom: 16px; }\n.cal-month-view .cal-open-day-events > div:hover {\n      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.cal-month-view .cal-open-day-events > div .cal-event {\n      top: 0;\n      margin: 0; }\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title {\n      -webkit-box-flex: 1;\n              flex: 1; }\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title .cal-event-title {\n        display: block;\n        padding: 21px 24px;\n        line-height: 1;\n        text-decoration: none;\n        color: black; }\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-actions .cal-event-actions {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      -webkit-box-align: center;\n              align-items: center; }\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-actions .cal-event-actions .cal-event-action {\n        display: block;\n        line-height: 1;\n        padding: 8px; }\n#calendar {\n  background: #FFFFFF; }\n#calendar .calHeader {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    padding: 24px;\n    padding: 24px; }\n#calendar .calHeader .add-btn {\n      text-align: left;\n      width: 110px;\n      background-color: #000; }\n#calendar .calHeader .add-btn .mat-icon {\n        margin-right: 10px; }\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  background-color: #ededed; }\n/* Extra small devices (phones, 600px and down) */\n@media only screen and (max-width: 600px) {\n  .content {\n    margin-top: 30px;\n    overflow-x: scroll !important;\n    width: 393px; } }\n/* Small devices (portrait tablets and large phones, 600px and up) */\n/* Medium devices (landscape tablets, 768px and up) */\n/* Large devices (laptops/desktops, 992px and up) */\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EmpCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpCalendarComponent", function() { return EmpCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_calendar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-calendar.service */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/api-calendar.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-form/event-form.component */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event-form/event-form.component.ts");
/* harmony import */ var _event_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event.model */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event.model.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _emp_calendar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./emp-calendar.service */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var EmpCalendarComponent = /** @class */ (function () {
    function EmpCalendarComponent(http, fb, dialog, calendarService, apiloader, toast, calService) {
        var _this = this;
        this.http = http;
        this.fb = fb;
        this.dialog = dialog;
        this.calendarService = calendarService;
        this.apiloader = apiloader;
        this.toast = toast;
        this.calService = calService;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.years = [];
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.selectedDay = { date: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["startOfDay"])(new Date()) };
        //console.log(this.countryForm.get('month1'));
        this.actions = [
            {
                label: '<i class="material-icons s-16">edit</i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.editEvent('edit', event);
                }
            },
            {
                label: '<i class="material-icons s-16">delete</i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.deleteEvent(event);
                }
            }
        ];
        //---- DropDown for month and year -----//
        var date = new Date();
        var currentYear = date.getFullYear();
        //set values for year dropdown
        for (var i = 0; i <= 100; i++) {
            this.years.push(currentYear + i);
        }
        //set values for month dropdown
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.selectm = this.months[this.viewDate.getMonth()];
        this.selecty = currentYear;
    }
    EmpCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/calendar-client/events')
            .subscribe(function (response) {
            _this.events = response.data;
            for (var _i = 0, _a = _this.events; _i < _a.length; _i++) {
                var item = _a[_i];
                item.actions = _this.actions;
            }
            _this.setEvents();
        });
        // this.getHolidays();
        /**
         * Watch re-render-refresh for updating db
         */
        this.refresh.subscribe(function (updateDB) {
            // console.warn('REFRESH');
            if (updateDB) {
                // console.warn('UPDATE DB');
                _this.calendarService.updateEvents(_this.events);
            }
        });
        this.calendarService.onEventsUpdated.subscribe(function (events) {
            _this.setEvents();
            _this.refresh.next();
        });
    };
    EmpCalendarComponent.prototype.onchange = function (event) {
        console.log(event);
        this.selectm = event;
        var d = this.selecty + "-" + this.monthNameToNum(event) + "-01 00:00:00";
        this.viewDate = new Date(d);
    };
    EmpCalendarComponent.prototype.onchangey = function (event) {
        this.selecty = event;
        var d = event + "-" + this.monthNameToNum(this.selectm) + "-01 00:00:00";
        this.viewDate = new Date(d);
    };
    EmpCalendarComponent.prototype.monthNameToNum = function (monthname) {
        var month = this.months.indexOf(monthname);
        return month ? month + 1 : 0;
    };
    EmpCalendarComponent.prototype.setEvents = function () {
        this.events = this.events.map(function (item) {
            return new _event_model__WEBPACK_IMPORTED_MODULE_9__["CalendarEventModel"](item);
        });
    };
    EmpCalendarComponent.prototype.getHolidays = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        this.calService.getData('holidays').subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                var events = response.data;
                for (var i = 0; i < events.length; i++) {
                    events[i].title = events[i].details;
                    events[i].start = new Date(events[i].date);
                    events[i].color = {
                        primary: '#ad2121',
                        secondary: '#FAE3E3'
                    };
                    events[i].actions = [];
                    events[i].isHoliday = true;
                }
                _this.events = events;
                _this.getTasks();
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    EmpCalendarComponent.prototype.getTasks = function () {
        var _this = this;
        var id = sessionStorage.getItem('user_id');
        this.apiloader.setLoader(true);
        this.calService.getData('users/' + id).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.task = response.data.tasks;
                for (var i = 0; i < _this.task.length; i++) {
                    _this.task[i].color = {
                        primary: '#ad2121',
                        secondary: '#FAE3E3'
                    };
                    _this.task[i].actions = _this.actions;
                    _this.task[i].start = new Date(_this.task[i].start);
                    _this.events.push(_this.task[i]);
                }
                _this.setEvents();
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    /**
     * Before View Renderer
     * @param {any} header
     * @param {any} body
     */
    EmpCalendarComponent.prototype.beforeMonthViewRender = function (_a) {
        var header = _a.header, body = _a.body;
        body.forEach(function (day) {
            var event = day.events;
            if (event.length) {
                event.forEach(function (item) {
                    if (item.isHoliday) {
                        day.cssClass = 'holiday';
                    }
                });
            }
        });
    };
    /**
     * Day clicked
     * @param {MonthViewDay} day
     */
    EmpCalendarComponent.prototype.dayClicked = function (day) {
        var date = day.date;
        var events = day.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
        this.selectedDay = day;
        this.refresh.next();
    };
    /**
     * Event times changed
     * Event dropped or resized
     * @param {CalendarEvent} event
     * @param {Date} newStart
     * @param {Date} newEnd
     */
    EmpCalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        // console.warn('Dropped or resized', event);
        this.refresh.next(true);
    };
    /**
     * Delete Event
     * @param event
     */
    EmpCalendarComponent.prototype.deleteEvent = function (event) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.apiloader.setLoader(true);
                _this.calService.deleteData('tasks/' + event.id).subscribe(function (response) {
                    if (response.status === 'success') {
                        _this.apiloader.setLoader(false);
                        _this.getHolidays();
                        _this.toast.showSuccess('Task Deleted Successfully!.');
                    }
                }, function (error) {
                    _this.apiloader.setLoader(false);
                    _this.toast.showError(error);
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    /**
     * Edit Event
     * @param {string} action
     * @param {CalendarEvent} event
     */
    EmpCalendarComponent.prototype.editEvent = function (action, event) {
        var _this = this;
        this.dialogRef = this.dialog.open(_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_8__["FuseCalendarEventFormDialogComponent"], {
            panelClass: 'event-form-dialog',
            data: {
                event: event,
                action: action
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            if (response.type === 'edit') {
                _this.updteTask(response.data);
            }
        });
    };
    /**
     * Add Event
     */
    EmpCalendarComponent.prototype.addHoliday = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_8__["FuseCalendarEventFormDialogComponent"], {
            panelClass: 'event-form-dialog',
            data: {
                action: 'new',
                date: this.selectedDay.date
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            else {
                _this.createHoliday(response);
            }
        });
    };
    EmpCalendarComponent.prototype.createHoliday = function (formData) {
        var _this = this;
        this.apiloader.setLoader(true);
        var body = new URLSearchParams();
        body.set('details', formData.details);
        body.set('date', formData.date);
        this.calService.postData('holidays', body.toString()).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.getHolidays();
                _this.toast.showSuccess('Holiday Created Successfully!.');
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    EmpCalendarComponent.prototype.updteTask = function (formData) {
        var _this = this;
        var edate = moment__WEBPACK_IMPORTED_MODULE_12__(formData.end).format('YYYY-MM-DD');
        this.apiloader.setLoader(true);
        var body = new URLSearchParams();
        body.set('title', formData.title);
        body.set('description', formData.description);
        body.set('scope', formData.scope);
        body.set('members', formData.members);
        body.set('end', edate);
        this.calService.postData('tasks/' + formData.id, body.toString()).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.toast.showSuccess('Task Updated Successfully!');
                _this.getHolidays();
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    EmpCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-calendar',
            template: __webpack_require__(/*! ./emp-calendar.component.html */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.component.html"),
            styles: [__webpack_require__(/*! ./emp-calendar.component.scss */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_7__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _emp_calendar_service__WEBPACK_IMPORTED_MODULE_13__["EmpCalendarService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_10__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_11__["ToasterService"],
            _api_calendar_service__WEBPACK_IMPORTED_MODULE_1__["ApiCalendarService"]])
    ], EmpCalendarComponent);
    return EmpCalendarComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/emp-calendar.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: EmpCalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpCalendarService", function() { return EmpCalendarService; });
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



var EmpCalendarService = /** @class */ (function () {
    function EmpCalendarService(http) {
        this.http = http;
        this.onEventsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    EmpCalendarService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getEvents()
            ]).then(function (_a) {
                var events = _a[0];
                resolve();
            }, reject);
        });
    };
    EmpCalendarService.prototype.getEvents = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/calendar-client/events')
                .subscribe(function (response) {
                _this.events = response.data;
                _this.onEventsUpdated.next(_this.events);
                resolve(_this.events);
            }, reject);
        });
    };
    EmpCalendarService.prototype.updateEvents = function (events) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/calendar-client/events', {
                id: 'events',
                data: events.slice()
            })
                .subscribe(function (response) {
                _this.getEvents();
            }, reject);
        });
    };
    EmpCalendarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmpCalendarService);
    return EmpCalendarService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event-form/event-form.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event-form/event-form.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">Event</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"cli-calendar p-24 m-0\" fusePerfectScrollbar>\r\n\r\n        <form name=\"eventForm\" [formGroup]=\"eventForm\" class=\"event-form w-100-p\" fxLayout=\"column\" fxFlex>\r\n\r\n            <mat-form-field class=\"w-100-p\">\r\n                <input matInput\r\n                       name=\"title\"\r\n                       formControlName=\"title\"\r\n                       placeholder=\"Event Name\"\r\n                       required>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"w-100-p\">\r\n                <textarea matInput\r\n                            formControlName=\"description\"\r\n                            placeholder=\"Please enter a meeting description\"\r\n                            mat-maxlength=\"250\"\r\n                            max-rows=\"4\">\r\n                </textarea>\r\n            </mat-form-field>\r\n\r\n            <div class=\"priority\">\r\n                <div class=\"txt\">Priority</div>\r\n                <div class=\"radiobtn\">\r\n                    <div *ngFor=\"let itm of radioBtns\" [class.active]=\"priority == itm.class\" (click)=\"priority = itm.class\" class=\"radio-square\">\r\n                        <span class=\"{{itm.class}}\"></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n                <mat-form-field class=\"mr-sm-24\" fxFlex>\r\n                    <input matInput [matDatepicker]=\"startDatePicker\" placeholder=\"Start Date\"\r\n                           name=\"start\"\r\n                           formControlName=\"start\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #startDatePicker></mat-datepicker>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"no-errors-spacer\" fxFlex mat-no-float>\r\n                    <input matInput placeholder=\"Start Time\">\r\n                </mat-form-field>\r\n\r\n            </div> -->\r\n\r\n            <div class=\"dates\">\r\n                <div class=\"top\">\r\n                    <div class=\"start\">\r\n                        <mat-icon>date_range</mat-icon>\r\n                        <span>Start</span>\r\n                    </div>\r\n                    <div class=\"end\">End</div>\r\n                </div>\r\n                <div class=\"bottom\" *ngIf=\"event\">\r\n                    <div class=\"start\">{{event.start}}</div>\r\n                    <div class=\"end\">{{event.end}}</div>\r\n                </div>\r\n            </div>\r\n\r\n            <mat-radio-group class=\"privacy\" formControlName=\"scope\" aria-label=\"Select an option\">\r\n                <h3>Privacy : </h3>\r\n                <mat-radio-button value=\"PRIVATE\">Default Private View</mat-radio-button>\r\n                <mat-radio-button value=\"RESTRICTED\">Restricted View</mat-radio-button>\r\n                <mat-radio-button value=\"PUBLIC\">Public View</mat-radio-button>\r\n            </mat-radio-group>\r\n\r\n            <!-- <mat-form-field fxFlex>\r\n                <mat-select formControlName=\"assignee\" name=\"assignee\" placeholder=\"Assign a Task to\" required>\r\n                  <mat-option *ngFor=\"let user of users\" [value]=\"user.id\">\r\n                    {{user.first_name}} {{user.last_name}}\r\n                  </mat-option>\r\n                </mat-select>\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field fxFlex>\r\n                <mat-select formControlName=\"members\" multiple name=\"members\" placeholder=\"Share Event\" required>\r\n                <mat-option *ngFor=\"let mem of users\" [value]=\"mem.id\">{{mem.first_name}} {{mem.last_name}}</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            \r\n        </form>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\r\n        <!-- <button \r\n                mat-raised-button\r\n                (click)=\"dialogRef.close(['save',eventForm])\"\r\n                class=\"save-button in_progress mat-accent\"\r\n                aria-label=\"SAVE\">\r\n            In Progress\r\n        </button> -->\r\n\r\n        <button \r\n                mat-raised-button\r\n                (click)=\"closeDialog('edit', eventForm.value)\"\r\n                class=\"save-button create mat-accent\"\r\n                aria-label=\"SAVE\">\r\n            Save\r\n        </button>\r\n\r\n        <!-- <button \r\n                mat-raised-button\r\n                (click)=\"dialogRef.close(['save',eventForm])\"\r\n                class=\"save-button complete mat-accent\"\r\n                aria-label=\"SAVE\">\r\n            Complete\r\n        </button> -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event-form/event-form.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event-form/event-form.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.event-form-dialog {\n  width: 480px; }\n@media screen and (max-width: 599px) {\n    .event-form-dialog {\n      width: 100%; } }\n.event-form-dialog .mat-dialog-container {\n    padding: 0; }\n.event-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n.event-form-dialog .primary-color-input,\n  .event-form-dialog .secondary-color-input {\n    padding: 6px 8px; }\n.cli-calendar mat-radio-group {\n  padding-bottom: 13px; }\n.cli-calendar mat-radio-group mat-radio-button .mat-radio-label-content span {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n.cli-calendar mat-radio-group mat-radio-button {\n  padding-right: 10px; }\n.cli-calendar mat-radio-group h3 {\n  padding-right: 10px;\n  font-weight: 500; }\n.cli-calendar .privacy mat-radio-button {\n  font-size: 14px !important; }\n.mat-raised-button.create {\n  background: #000;\n  color: #fff; }\n.mat-raised-button.in_progress {\n  background: #6BD5CB;\n  color: #000; }\n.mat-raised-button.complete {\n  background: #B4DFF2;\n  color: #000; }\n.selectedBtn {\n  border: 1px solid #000; }\n/* .cli-calendar mat-radio-group mat-radio-button .mat-radio-label-content span.violet{\r\n    background: #B39DDB;\r\n}\r\n.cli-calendar mat-radio-group mat-radio-button .mat-radio-label-content span.green{\r\n    background: #6BD5CB;\r\n}\r\n.cli-calendar mat-radio-group mat-radio-button .mat-radio-label-content span.blue{\r\n    background: #B4DFF2;\r\n} */\n.dates {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.dates .top {\n    display: inline-block;\n    border-bottom: 1px solid #ccc;\n    padding-bottom: 5px; }\n.dates .top .start {\n      display: inline-block;\n      width: 50%; }\n.dates .top .start .mat-icon {\n        vertical-align: bottom; }\n.dates .top .start span {\n        font-size: 16px;\n        font-weight: 500;\n        margin-left: 5px; }\n.dates .top .end {\n      display: inline-block;\n      width: 50%;\n      font-size: 16px;\n      font-weight: 500; }\n.dates .bottom {\n    padding-top: 8px; }\n.dates .bottom .start {\n      display: inline-block;\n      width: 50%; }\n.dates .bottom .end {\n      display: inline-block;\n      width: 50%; }\n.priority {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 0px 20px 0px; }\n.priority .txt {\n    font-size: 22px; }\n.priority .radiobtn {\n    display: -webkit-box;\n    display: flex; }\n.priority .radiobtn .radio-square {\n      margin: 0px 10px; }\n.priority .radiobtn .radio-square.active {\n        border: 1px solid #000; }\n.priority .radiobtn .radio-square span {\n        width: 25px;\n        height: 25px;\n        cursor: pointer;\n        display: block;\n        border: 2px solid #fff; }\n.priority .radiobtn .radio-square span.pink {\n          background: #ff6398; }\n.priority .radiobtn .radio-square span.purple {\n          background: #b49cd6; }\n.priority .radiobtn .radio-square span.green {\n          background: #3fd6ca; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event-form/event-form.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event-form/event-form.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: FuseCalendarEventFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseCalendarEventFormDialogComponent", function() { return FuseCalendarEventFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/mat-colors */ "./src/@fuse/mat-colors/index.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _event_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event.model */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event.model.ts");
/* harmony import */ var _api_calendar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api-calendar.service */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/api-calendar.service.ts");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var FuseCalendarEventFormDialogComponent = /** @class */ (function () {
    function FuseCalendarEventFormDialogComponent(dialogRef, data, formBuilder, calService, toast) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.calService = calService;
        this.toast = toast;
        this.presetColors = _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_3__["MatColors"].presets;
        this.users = [];
        this.radioBtns = [
            { class: 'pink' },
            { class: 'purple' },
            { class: 'green' }
        ];
        this.event = data.event;
        this.event.start = moment__WEBPACK_IMPORTED_MODULE_4__(this.event.start).format('MMM DD, YYYY');
        this.event.end = moment__WEBPACK_IMPORTED_MODULE_4__(this.event.end).format('MMM DD, YYYY');
        this.action = data.action;
        this.getAllUsers();
        if (this.action === 'edit') {
            this.dialogTitle = 'update Task';
        }
        else {
            this.dialogTitle = 'New Event';
            this.event = new _event_model__WEBPACK_IMPORTED_MODULE_5__["CalendarEventModel"]({
                start: data.date,
                end: data.date
            });
        }
        this.eventForm = this.createEventForm();
    }
    FuseCalendarEventFormDialogComponent.prototype.createEventForm = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.description),
            scope: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.scope, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            members: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.members),
        });
    };
    FuseCalendarEventFormDialogComponent.prototype.getAllUsers = function () {
        var _this = this;
        var cli_id = sessionStorage.getItem('client_id');
        this.calService.getData('users', { 'client_id': cli_id }).subscribe(function (response) {
            if (response.data) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].role !== 'CLIENT_ADMIN') {
                        _this.users.push(data[i]);
                    }
                }
            }
        }, function (error) {
            _this.toast.showError(error);
        });
    };
    FuseCalendarEventFormDialogComponent.prototype.closeDialog = function (type, data) {
        data.id = this.event.id;
        this.dialogRef.close({ data: data, type: type });
    };
    FuseCalendarEventFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-calendar-event-form-dialog',
            template: __webpack_require__(/*! ./event-form.component.html */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event-form/event-form.component.html"),
            styles: [__webpack_require__(/*! ./event-form.component.scss */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event-form/event-form.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _api_calendar_service__WEBPACK_IMPORTED_MODULE_6__["ApiCalendarService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]])
    ], FuseCalendarEventFormDialogComponent);
    return FuseCalendarEventFormDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event.model.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-calendar/event.model.ts ***!
  \*******************************************************************************************/
/*! exports provided: CalendarEventModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventModel", function() { return CalendarEventModel; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

var CalendarEventModel = /** @class */ (function () {
    function CalendarEventModel(data) {
        data = data || {};
        this.id = data.id || '';
        this.start = new Date(data.start) || Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(new Date());
        this.end = new Date(data.end) || Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfDay"])(new Date());
        this.title = data.title || '';
        this.color = {
            primary: data.color && data.color.primary || '#1e90ff',
            secondary: data.color && data.color.secondary || '#D1E8FF'
        };
        this.description = data.description || '';
        this.scope = data.scope || '';
        this.actions = data.actions || [];
        this.isHoliday = data.isHoliday;
        this.cssClass = data.cssClass || '';
        this.assignee = data.assignee || '';
        this.members = data.members || [];
    }
    return CalendarEventModel;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/analytics.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/analytics.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: AnalyticsDashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsDashboardService", function() { return AnalyticsDashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsDashboardService = /** @class */ (function () {
    function AnalyticsDashboardService(http) {
        this.http = http;
    }
    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    AnalyticsDashboardService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getWidgets()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    AnalyticsDashboardService.prototype.getWidgets = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/analytics-dashboard-widgets')
                .subscribe(function (response) {
                _this.widgets = response;
                resolve(response);
            }, reject);
        });
    };
    AnalyticsDashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnalyticsDashboardService);
    return AnalyticsDashboardService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/emp-performance.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/emp-performance.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard-analytics\" class=\"page-layout blank grey-100-bg\" fusePerfectScrollbar *ngIf=\"widgets\">\r\n\r\n    <div class=\"main-widget\">\r\n\r\n        <div class=\"position-relative p-24 mat-blue-600-bg\"\r\n             fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n                <span class=\"h2\">Performance</span>\r\n                <span class=\"h5 secondary-text\">Unique performance by month</span>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div class=\"py-8 px-12 border-radius-2 line-height-1 mr-8 cursor-pointer\"\r\n                     (click)=\"widget1SelectedYear = '2015'\"\r\n                     [ngClass]=\"{'blue-300-bg': widget1SelectedYear === '2015'}\">\r\n                    2015\r\n                </div>\r\n                <div class=\"py-8 px-12 border-radius-2 line-height-1 mr-8 cursor-pointer\"\r\n                     (click)=\"widget1SelectedYear = '2016'\"\r\n                     [ngClass]=\"{'blue-300-bg': widget1SelectedYear === '2016'}\">\r\n                    2016\r\n                </div>\r\n                <div class=\"py-8 px-12 border-radius-2 line-height-1 cursor-pointer\"\r\n                     (click)=\"widget1SelectedYear = '2017'\"\r\n                     [ngClass]=\"{'blue-300-bg': widget1SelectedYear === '2017'}\">\r\n                    2017\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"position-relative h-256 pb-16 mat-blue-600-bg\">\r\n            <canvas baseChart\r\n                    [datasets]=\"widgets.widget1.datasets[widget1SelectedYear]\"\r\n                    [labels]=\"widgets.widget1.labels\"\r\n                    [colors]=\"widgets.widget1.colors\"\r\n                    [options]=\"widgets.widget1.options\"\r\n                    [chartType]=\"widgets.widget1.chartType\">\r\n            </canvas>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"calHeader\">\r\n        <div class=\"mr_top\">\r\n            <!-- <select (change)=\"onchange($event.value)\" [(ngModel)]=\"selectm\">\r\n                <option value=\"{{month}}\" *ngFor=\"let month of months\">{{month}}</option>\r\n            </select>\r\n\r\n            <select (change)=\"onchangey($event.value)\" [(ngModel)]=\"selecty\">\r\n                <option value=\"{{year}}\" *ngFor=\"let year of years\">{{year}}</option>\r\n            </select> -->\r\n\r\n            <mat-form-field class=\"new_mr\">\r\n                <mat-select   (selectionChange)=\"onchange($event.value)\"  [(ngModel)]=\"selectm\" placeholder=\"Month\">\r\n                  <mat-option *ngFor=\"let month of months\"  [value]=\"month\">\r\n                      {{month}}\r\n                  </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n              <mat-form-field style=\"padding-left: 10px;\">\r\n                <mat-select  (selectionChange)=\"onchangey($event.value)\" [(ngModel)]=\"selecty\" placeholder=\"Year\">\r\n                    <mat-option *ngFor=\"let year of years\"  [value]=\"year\">\r\n                        {{year}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field> \r\n        </div>\r\n\r\n            <div class=\"mr_topp\">\r\n                <!-- ADD EVENT BUTTON -->\r\n                    <button mat-raised-button color=\"primary\" class=\"add-btn\" routerLink=\"/apps/performance/performance-management/form-library\">\r\n                        <mat-icon>add</mat-icon>\r\n                        Add\r\n                    </button>\r\n                    \r\n            </div>\r\n         </div>\r\n\r\n\r\n\r\n    <table mat-table [dataSource]=\"performance\" class=\"perf-table mat-elevation-z8\">\r\n\r\n            <!--- Note that these columns can be defined in any order.\r\n                  The actual rendered columns are set as a property on the row definition\" -->\r\n          \r\n            <!-- Position Column -->\r\n            <ng-container matColumnDef=\"position\">\r\n              <th mat-header-cell *matHeaderCellDef> Sr.No. </th>\r\n              <td mat-cell *matCellDef=\"let element; let i = index;\"> {{i+1}} </td>\r\n            </ng-container>\r\n          \r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"performance_forms\">\r\n              <th mat-header-cell *matHeaderCellDef> Performance Forms </th>\r\n              <td mat-cell *matCellDef=\"let element\"> {{element.goal_setting_form_name}} </td>\r\n            </ng-container>\r\n          \r\n            <!-- Weight Column -->\r\n            <ng-container matColumnDef=\"status\">\r\n              <th mat-header-cell *matHeaderCellDef> Status </th>\r\n              <td mat-cell class=\"status\" *matCellDef=\"let element\"> \r\n                  <span></span><span></span><span></span><span></span><span></span>\r\n                  <div class=\"in-percentage\">100%</div>\r\n                  <div class=\"status-txt\">Review Completed</div>\r\n              </td>\r\n            </ng-container>\r\n          \r\n            <!-- Symbol Column -->\r\n            <ng-container matColumnDef=\"overall_rating\">\r\n              <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm style=\"display: table-cell;\"> Overall Rating </th>\r\n              <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm style=\"display: table-cell;\">\r\n                  <div class=\"star-ratings-css\">\r\n                      <div class=\"star-ratings-css-top\" style=\"width: 84%\"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>\r\n                      <div class=\"star-ratings-css-bottom\"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>\r\n                  </div>\r\n                  <div class=\"rating\">Excellent</div>\r\n                  <div class=\"point\">83 points</div>\r\n              </td>\r\n            </ng-container>\r\n      \r\n      \r\n            <!-- Buttons Column -->\r\n            <ng-container matColumnDef=\"buttons\">\r\n                <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                <td mat-cell *matCellDef=\"let element\"> \r\n                 <button class=\"new_btn mr-lef\"><mat-icon>visibility</mat-icon></button>\r\n                 <button class=\"new_btn\"><mat-icon>delete</mat-icon></button>\r\n                </td>\r\n              </ng-container>\r\n          \r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns1; let i = index\"></tr>\r\n          </table>\r\n\r\n    </div>\r\n    \r\n    \r\n      \r\n  \r\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/emp-performance.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/emp-performance.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -webkit-box-flex: 1;\n          flex: 1; }\n.cal-month-view .cal-cell-row {\n  display: -webkit-box;\n  display: flex; }\n.cal-month-view .cal-cell {\n  float: left;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch; }\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n.cal-month-view .cal-events {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px;\n  background-color: #1e90ff;\n  border-color: #D1E8FF;\n  color: #fff; }\n.cal-month-view .cal-event-title:link {\n  color: currentColor; }\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n.cal-week-view .cal-day-headers {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n.cal-week-view .cal-day-headers .cal-header {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding: 5px; }\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px;\n  background-color: #D1E8FF;\n  border: 1px solid #1e90ff;\n  color: #1e90ff; }\n.cal-week-view .cal-event-title:link {\n  color: currentColor; }\n.cal-week-view .cal-draggable {\n  cursor: move; }\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n.cal-day-view .cal-hour-rows {\n    width: 100%;\n    border: solid 1px #e1e1e1;\n    overflow-x: scroll;\n    position: relative; }\n.cal-day-view .cal-hour:nth-child(odd) {\n    background-color: #fafafa; }\n.cal-day-view mwl-calendar-day-view-hour-segment,\n  .cal-day-view .cal-hour-segment {\n    display: block; }\n.cal-day-view .cal-hour-segment::after {\n    content: '\\00a0'; }\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed #e1e1e1; }\n.cal-day-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n.cal-day-view .cal-hour-segment:hover,\n  .cal-day-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n.cal-day-view .cal-event-container {\n    position: absolute; }\n.cal-day-view .cal-event {\n    padding: 5px;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 100%;\n    box-sizing: border-box;\n    background-color: #D1E8FF;\n    border: 1px solid #1e90ff;\n    color: #1e90ff; }\n.cal-day-view .cal-event-title:link {\n    color: currentColor; }\n.cal-day-view .cal-draggable {\n    cursor: move; }\n.cal-day-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n.cal-day-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n.cal-day-view .cal-all-day-event {\n    padding: 8px;\n    border: solid 1px; }\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n#dashboard-analytics .main-widget {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n#dashboard-analytics .calHeader {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 24px; }\n#dashboard-analytics .content {\n  display: block;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 32px;\n  min-width: 0; }\n@media (max-width: 1279px) {\n    #dashboard-analytics .content {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column; } }\n#dashboard-analytics .content .left {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    min-width: 0; }\n#dashboard-analytics .content .left .widget {\n      -webkit-box-flex: 1;\n              flex: 1 1 auto;\n      min-width: 0; }\n#dashboard-analytics .content .right {\n    display: block;\n    width: 50%;\n    float: left;\n    padding-right: 10px; }\n@media (max-width: 1279px) {\n      #dashboard-analytics .content .right {\n        -webkit-box-flex: 1;\n                flex: 1 0 100%;\n        margin-top: 32px;\n        width: 100%;\n        min-width: 0;\n        max-width: none; } }\n#dashboard-analytics .content .right .user-list {\n      max-height: 440px;\n      overflow-x: hidden;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column; }\n#dashboard-analytics .content .right .nav {\n      overflow-y: auto; }\n#dashboard-analytics .content .right .user-table {\n      max-width: 100%; }\n#dashboard-analytics .content .right mat-cell:last-child, #dashboard-analytics .content .right mat-footer-cell:last-child, #dashboard-analytics .content .right mat-header-cell:last-child {\n      padding: 0px; }\n#dashboard-analytics .content .right .mat-column-avatar {\n      -webkit-box-flex: 0;\n              flex: 0 1 64px; }\n#dashboard-analytics .content .right mat-cell:first-child {\n      padding-left: 15px !important; }\n#dashboard-analytics .content .right .mat-form-field {\n      display: block;\n      width: 100%; }\n#dashboard-analytics .content .right .comp-logo {\n      text-align: center; }\n#dashboard-analytics .content .right .comp-logo img {\n        width: 128px;\n        border: none;\n        border-radius: 50%; }\n#dashboard-analytics .content .right .comp-details ul li {\n      padding: 10px 0px; }\n#dashboard-analytics .content .right .comp-desc {\n      max-height: 400px;\n      min-height: 400px; }\n@media (max-width: 1279px) {\n      #dashboard-analytics .content .right .fuse-card {\n        width: 100%;\n        min-width: 0;\n        max-width: none; } }\n.company-details {\n  margin: 0px 16px;\n  padding: 16px 0px;\n  border-bottom: 1px solid #000; }\n.company-details mat-icon {\n  color: #fa7915; }\ntable.mat-elevation-z8 {\n  width: 96%;\n  margin: 10px 2%; }\n.new_btn {\n  height: 24px;\n  width: 24px;\n  background-color: #f49f14;\n  border-radius: 50px;\n  padding-top: 4px; }\n.mr-lef {\n  margin-right: 10px; }\n.new_btn .mat-icon {\n  height: 20px;\n  width: 20px;\n  font-size: 17px; }\n.mat-column-status span {\n  width: 18px;\n  height: 8px;\n  border: 1px solid #000;\n  border-radius: 4px;\n  display: inline-block;\n  background: #fa7915;\n  margin-left: 2px; }\n.star-ratings-css {\n  unicode-bidi: bidi-override;\n  color: #c5c5c5;\n  font-size: 25px;\n  height: 25px;\n  display: inline-block;\n  width: 110px;\n  margin: 0 auto;\n  position: relative;\n  padding: 0;\n  text-shadow: 0px 1px 0 #a2a2a2; }\n.star-ratings-css-top {\n    color: #e7711b;\n    padding: 0;\n    position: absolute;\n    z-index: 1;\n    display: block;\n    top: 0;\n    left: 0;\n    overflow: hidden; }\n.star-ratings-css-bottom {\n    padding: 0;\n    display: block;\n    z-index: 0; }\n.add-btn {\n  text-align: left;\n  width: 110px;\n  background-color: #000 !important; }\n.add-btn .mat-icon {\n    margin-right: 10px; }\n.perf-table .mat-header-cell {\n  color: #000;\n  text-align: center; }\n.perf-table .mat-cell {\n  text-align: center; }\n.perf-table .mat-cell .in-percentage {\n    padding: 10px 0px 15px 0px; }\n.perf-table .mat-cell .status-txt {\n    padding-bottom: 10px; }\n.perf-table .mat-cell .rating {\n    padding-top: 10px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/emp-performance.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/emp-performance.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: EmpPerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpPerformanceComponent", function() { return EmpPerformanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.service */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/analytics.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_fake_db_contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../fuse-fake-db/contacts */ "./src/app/fuse-fake-db/contacts.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_contacts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../user-contacts.service */ "./src/app/main/content/apps/user-contacts/user-contacts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ELEMENT_DATA = [
    { position: 1, performance_forms: 'Hydrogen', status: 'Demo', overall_rating: 'H' },
    { position: 2, performance_forms: 'Helium', status: 'Demo', overall_rating: 'He' },
    { position: 3, performance_forms: 'Lithium', status: 'Demo', overall_rating: 'Li' },
    { position: 4, performance_forms: 'Beryllium', status: 'Test', overall_rating: 'Be' },
    { position: 5, performance_forms: 'Boron', status: 'Test', overall_rating: 'B' },
    { position: 6, performance_forms: 'Carbon', status: 'Test', overall_rating: 'C' },
    { position: 7, performance_forms: 'Nitrogen', status: 'Test', overall_rating: 'N' },
    { position: 8, performance_forms: 'Oxygen', status: 'Test', overall_rating: 'O' },
    { position: 9, performance_forms: 'Fluorine', status: 'Test', overall_rating: 'F' },
    { position: 10, performance_forms: 'Neon', status: 'Test', overall_rating: 'Ne' },
];
var EmpPerformanceComponent = /** @class */ (function () {
    function EmpPerformanceComponent(userService, analyticsDashboardService, route, dialog, apiloader, toast) {
        var _this = this;
        this.userService = userService;
        this.analyticsDashboardService = analyticsDashboardService;
        this.route = route;
        this.dialog = dialog;
        this.apiloader = apiloader;
        this.toast = toast;
        this.widget1SelectedYear = '2016';
        this.widget5SelectedDay = 'today';
        this.contacts = _fuse_fake_db_contacts__WEBPACK_IMPORTED_MODULE_4__["ContactsFakeDb"].contacts;
        this.displayedColumns = ['avatar', 'name', 'email', 'phone'];
        this.years = [];
        this.displayedColumns1 = ['position', 'performance_forms', 'status', 'overall_rating', 'buttons'];
        this.dataSource1 = ELEMENT_DATA;
        this.route.params.subscribe(function (params) {
            _this.id = params['userId'];
            _this.getPerformance(_this.id);
        });
        // Get the widgets from the service
        this.widgets = this.analyticsDashboardService.widgets;
        //console.log(this.widgets);
        // Register the custom chart.js plugin
        this.registerCustomChartJSPlugin();
        //---- DropDown for month and year -----//
        var date = new Date();
        var currentYear = date.getFullYear();
        //set values for year dropdown
        for (var i = 0; i <= 100; i++) {
            this.years.push(currentYear + i);
        }
        //set values for month dropdown
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // this.selectm = this.months[this.viewDate.getMonth()];
        // this.selecty = currentYear;
    }
    EmpPerformanceComponent.prototype.ngOnInit = function () {
    };
    EmpPerformanceComponent.prototype.onchange = function (event) {
        //console.log(event);
        this.selectm = event;
        var d = this.selecty + "-" + this.monthNameToNum(event) + "-01 00:00:00";
        this.viewDate = new Date(d);
    };
    EmpPerformanceComponent.prototype.getPerformance = function (id) {
        var _this = this;
        this.apiloader.setLoader(true);
        this.userService.getData('performance/' + id).subscribe(function (response) {
            if (response.data) {
                _this.performance = response.data;
                _this.apiloader.setLoader(false);
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
        });
    };
    EmpPerformanceComponent.prototype.onchangey = function (event) {
        this.selecty = event;
        var d = event + "-" + this.monthNameToNum(this.selectm) + "-01 00:00:00";
        this.viewDate = new Date(d);
    };
    EmpPerformanceComponent.prototype.monthNameToNum = function (monthname) {
        var month = this.months.indexOf(monthname);
        return month ? month + 1 : 0;
    };
    /**
      * Register a custom plugin
      */
    EmpPerformanceComponent.prototype.registerCustomChartJSPlugin = function () {
        window.Chart.plugins.register({
            afterDatasetsDraw: function (chart, easing) {
                // Only activate the plugin if it's made available
                // in the options
                if (!chart.options.plugins.xLabelsOnTop ||
                    (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)) {
                    return;
                }
                // To only draw at the end of animation, check for easing === 1
                var ctx = chart.ctx;
                chart.data.datasets.forEach(function (dataset, i) {
                    var meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach(function (element, index) {
                            // Draw the text in black, with the specified font
                            ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                            var fontSize = 13;
                            var fontStyle = 'normal';
                            var fontFamily = 'Roboto, Helvetica Neue, Arial';
                            ctx.font = window.Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                            // Just naively convert to string for now
                            var dataString = dataset.data[index].toString() + 'k';
                            // Make sure alignment settings are correct
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'middle';
                            var padding = 15;
                            var startY = 24;
                            var position = element.tooltipPosition();
                            ctx.fillText(dataString, position.x, startY);
                            ctx.save();
                            ctx.beginPath();
                            ctx.setLineDash([5, 3]);
                            ctx.moveTo(position.x, startY + padding);
                            ctx.lineTo(position.x, position.y - padding);
                            ctx.strokeStyle = 'rgba(255,255,255,0.12)';
                            ctx.stroke();
                            ctx.restore();
                        });
                    }
                });
            }
        });
    };
    EmpPerformanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emp-performance',
            template: __webpack_require__(/*! ./emp-performance.component.html */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/emp-performance.component.html"),
            styles: [__webpack_require__(/*! ./emp-performance.component.scss */ "./src/app/main/content/apps/user-contacts/edit-employee/emp-performance/emp-performance.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_user_contacts_service__WEBPACK_IMPORTED_MODULE_8__["UserContactsService"], _analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsDashboardService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_6__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]])
    ], EmpPerformanceComponent);
    return EmpPerformanceComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/cal-event.model.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/leave-management/cal-event.model.ts ***!
  \***************************************************************************************************/
/*! exports provided: CalEventModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalEventModel", function() { return CalEventModel; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

var CalEventModel = /** @class */ (function () {
    function CalEventModel(data) {
        data = data || {};
        this.id = data.id || '';
        this.start = new Date(data.start) || Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfDay"])(new Date());
        this.end = new Date(data.end) || Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfDay"])(new Date());
        this.title = data.title || '';
        this.color = {
            primary: data.color && data.color.primary || '#1e90ff',
            secondary: data.color && data.color.secondary || '#D1E8FF'
        };
        this.draggable = data.draggable || false;
        this.resizable = {
            beforeStart: data.resizable && data.resizable.beforeStart || true,
            afterEnd: data.resizable && data.resizable.afterEnd || true
        };
        this.actions = data.actions || [];
        this.allDay = data.allDay || false;
        this.isHoliday = data.isHoliday || false;
        this.cssClass = data.cssClass || '';
        this.meta = {
            location: data.meta && data.meta.location || '',
            notes: data.meta && data.meta.notes || ''
        };
    }
    return CalEventModel;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/event-dialog/event-dialog.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/leave-management/event-dialog/event-dialog.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n  <mat-toolbar class=\"mat-accent m-0\">\r\n      <mat-toolbar-row fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n          <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n              <mat-icon>close</mat-icon>\r\n          </button>\r\n      </mat-toolbar-row>\r\n  </mat-toolbar>\r\n\r\n  <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\r\n\r\n      <form name=\"eventForm\" [formGroup]=\"eventForm\" class=\"event-form w-100-p\" fxLayout=\"column\" fxFlex>\r\n\r\n          <mat-form-field class=\"w-100-p\">\r\n              <input matInput\r\n                     name=\"title\"\r\n                     formControlName=\"title\"\r\n                     placeholder=\"Title\"\r\n                     required>\r\n          </mat-form-field>\r\n\r\n          <div class=\"py-16\" fxFlex=\"1 0 auto\" fxLayout=\"row\">\r\n              <mat-slide-toggle\r\n                  name=\"allDay\"\r\n                  formControlName=\"allDay\"\r\n                  class=\"mr-24\"\r\n                  aria-label=\"All day\">\r\n                  All Day\r\n              </mat-slide-toggle>\r\n          </div>\r\n\r\n          <div class=\"py-16\" fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\" formGroupName=\"color\">\r\n\r\n              <mat-form-field class=\"mr-sm-24\" fxFlex>\r\n                  <input matInput\r\n                         class=\"primary-color-input\"\r\n                         name=\"primary color\"\r\n                         formControlName=\"primary\"\r\n                         placeholder=\"Primary color\"\r\n                         [(colorPicker)]=\"event.color.primary\"\r\n                         cpWidth=\"290px\"\r\n                         [cpPresetColors]=\"presetColors\"\r\n                         [style.background]=\"event.color.primary\"\r\n                         (colorPickerChange)=\"event.color.primary = $event; eventForm.patchValue({color:{primary:$event}})\"/>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field fxFlex>\r\n                  <input matInput\r\n                         class=\"secondary-color-input\"\r\n                         name=\"secondary color\"\r\n                         formControlName=\"secondary\"\r\n                         placeholder=\"Secondary color\"\r\n                         [(colorPicker)]=\"event.color.secondary\"\r\n                         cpWidth=\"290px\"\r\n                         [cpPresetColors]=\"presetColors\"\r\n                         [style.background]=\"event.color.secondary\"\r\n                         (colorPickerChange)=\"event.color.secondary = $event; eventForm.patchValue({color:{secondary:$event}})\"/>\r\n              </mat-form-field>\r\n\r\n          </div>\r\n\r\n          <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n              <mat-form-field class=\"mr-sm-24\" fxFlex>\r\n                  <input matInput [matDatepicker]=\"startDatePicker\" placeholder=\"Start Date\"\r\n                         name=\"start\"\r\n                         formControlName=\"start\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #startDatePicker></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"no-errors-spacer\" fxFlex mat-no-float>\r\n                  <input matInput placeholder=\"Start Time\">\r\n              </mat-form-field>\r\n\r\n          </div>\r\n\r\n          <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n              <mat-form-field class=\"mr-sm-24\" fxFlex>\r\n                  <input matInput [matDatepicker]=\"endDatePicker\" placeholder=\"End Date\"\r\n                         name=\"end\"\r\n                         formControlName=\"end\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #endDatePicker></mat-datepicker>\r\n              </mat-form-field>\r\n\r\n              <mat-form-field class=\"no-errors-spacer\" fxFlex mat-no-float>\r\n                  <input matInput placeholder=\"End Time\">\r\n              </mat-form-field>\r\n\r\n          </div>\r\n\r\n          <mat-form-field formGroupName=\"meta\" class=\"w-100-p\">\r\n              <input matInput\r\n                     name=\"location\"\r\n                     formControlName=\"location\"\r\n                     placeholder=\"Location\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field formGroupName=\"meta\" class=\"w-100-p\">\r\n\r\n              <textarea matInput\r\n                        formControlName=\"notes\"\r\n                        placeholder=\"Notes\"\r\n                        mat-maxlength=\"250\"\r\n                        max-rows=\"4\">\r\n              </textarea>\r\n          </mat-form-field>\r\n\r\n      </form>\r\n\r\n  </div>\r\n\r\n  <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n      <button *ngIf=\"action !=='edit'\"\r\n              mat-raised-button\r\n              (click)=\"dialogRef.close(eventForm)\"\r\n              class=\"save-button mat-accent\"\r\n              [disabled]=\"eventForm.invalid\"\r\n              aria-label=\"SAVE\">\r\n          SAVE\r\n      </button>\r\n\r\n      <button *ngIf=\"action ==='edit'\"\r\n              mat-raised-button\r\n              (click)=\"dialogRef.close(['save',eventForm])\"\r\n              class=\"save-button mat-accent\"\r\n              [disabled]=\"eventForm.invalid\"\r\n              aria-label=\"SAVE\">\r\n          SAVE\r\n      </button>\r\n\r\n      <button *ngIf=\"action ==='edit'\"\r\n              mat-icon-button\r\n              (click)=\"dialogRef.close(['delete',eventForm])\"\r\n              aria-label=\"Delete\"\r\n              matTooltip=\"Delete\">\r\n          <mat-icon>delete</mat-icon>\r\n      </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/event-dialog/event-dialog.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/leave-management/event-dialog/event-dialog.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.event-form-dialog {\n  width: 480px; }\n@media screen and (max-width: 599px) {\n    .event-form-dialog {\n      width: 100%; } }\n.event-form-dialog .mat-dialog-container {\n    padding: 0; }\n.event-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n.event-form-dialog .primary-color-input,\n  .event-form-dialog .secondary-color-input {\n    padding: 6px 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/event-dialog/event-dialog.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/leave-management/event-dialog/event-dialog.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: EventDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDialogComponent", function() { return EventDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/mat-colors */ "./src/@fuse/mat-colors/index.ts");
/* harmony import */ var _cal_event_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cal-event.model */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/cal-event.model.ts");
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





var EventDialogComponent = /** @class */ (function () {
    function EventDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.presetColors = _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_3__["MatColors"].presets;
        this.event = data.event;
        this.action = data.action;
        if (this.action === 'edit') {
            this.dialogTitle = this.event.title;
        }
        else {
            this.dialogTitle = 'New Event';
            this.event = new _cal_event_model__WEBPACK_IMPORTED_MODULE_4__["CalEventModel"]({
                start: data.date,
                end: data.date
            });
        }
        this.eventForm = this.createEventForm();
    }
    EventDialogComponent.prototype.createEventForm = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.title),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.start),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.end),
            allDay: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.allDay),
            color: this.formBuilder.group({
                primary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.color.primary),
                secondary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.color.secondary)
            }),
            meta: this.formBuilder.group({
                location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.meta.location),
                notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.meta.notes)
            })
        });
    };
    EventDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-dialog',
            template: __webpack_require__(/*! ./event-dialog.component.html */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/event-dialog/event-dialog.component.html"),
            styles: [__webpack_require__(/*! ./event-dialog.component.scss */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/event-dialog/event-dialog.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EventDialogComponent);
    return EventDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-dialog/leave-dialog.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-dialog/leave-dialog.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">Leave Details</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\r\n\r\n\r\n        <form name=\"leaveForm\" [formGroup]=\"leaveForm\" class=\"event-form w-100-p\" fxLayout=\"column\" fxFlex>\r\n\r\n            <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n                <mat-label class=\"lbl_cs\"><b>Leave Type</b></mat-label>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field appearance=\"outline\" fxFlex>\r\n                    <!-- <mat-label>Sick Leave</mat-label> -->\r\n                    <input matInput formControlName=\"leaveType\" placeholder=\"Sick Leave\" value=\"Sick Leave\" readonly>\r\n                </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n                <mat-label class=\"lbl_cs\"><b>Leave Comment</b></mat-label>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field appearance=\"outline\" fxFlex>\r\n                    <!-- <mat-label>I need leave bcoz I need to attend</mat-label> -->\r\n                    <textarea matInput formControlName=\"leaveComment\" placeholder=\"I need leave bcoz I need to attend\"\r\n                        matAutosizeMinRows=5 matAutosizeMaxRows=10\r\n                        readonly>I need leave bcoz I need to attend</textarea>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n\r\n            <div fxFlex.gt-md=\"100\" fxFlex=\"100\" style=\"padding-bottom: 10px\">\r\n                <mat-label class=\"lbl_cs\"><b>Leave Date</b></mat-label>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"mrBottom\" style=\"padding-bottom: 10px\">\r\n                <div fxFlex.gt-md=\"40\" fxFlex=\"100\">\r\n                    <mat-label class=\"lbl_cs\">Start Date :- 13-05-2019</mat-label>\r\n                </div>\r\n                <div fxFlex.gt-md=\"10\" fxFlex=\"100\">\r\n                    <mat-label class=\"lbl_cs\">|</mat-label>\r\n                </div>\r\n\r\n                <div fxFlex.gt-md=\"40\" fxFlex=\"100\">\r\n                    <mat-label class=\"lbl_cs\">End Date:- 20-05-2019</mat-label>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n                <mat-label class=\"lbl_cs\"><b>Status</b></mat-label>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field appearance=\"outline\" fxFlex>\r\n                    <!-- <mat-label>Status</mat-label> -->\r\n                    <input matInput formControlName=\"status\" placeholder=\"Not Approved\" readonly>\r\n                </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n                <mat-label class=\"lbl_cs\"><b>Management Comment or Reason</b></mat-label>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field appearance=\"outline\" fxFlex>\r\n                    <!-- <mat-label>Management Comment or Reason</mat-label> -->\r\n                    <input matInput formControlName=\"ManageComment\" placeholder=\"Not Approved\" readonly>\r\n                </mat-form-field>\r\n\r\n            </div>\r\n\r\n        </form>\r\n        <!-- <form name=\"leaveForm\" [formGroup]=\"leaveForm\" class=\"event-form w-100-p\" fxLayout=\"column\" fxFlex>\r\n\r\n            <mat-form-field class=\"w-100-p\">\r\n                <input matInput\r\n                       name=\"leaveType\"\r\n                       formControlName=\"leaveType\"\r\n                       placeholder=\"Leave Type\"\r\n                       required>\r\n            </mat-form-field>\r\n        </form> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-dialog/leave-dialog.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-dialog/leave-dialog.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-dialog/leave-dialog.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-dialog/leave-dialog.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: LeaveDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveDialogComponent", function() { return LeaveDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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



var LeaveDialogComponent = /** @class */ (function () {
    function LeaveDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
    }
    LeaveDialogComponent.prototype.ngOnInit = function () {
        this.leaveForm = this.createForm();
    };
    LeaveDialogComponent.prototype.createForm = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            leaveType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Sick Leave'),
            leaveComment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            ManageComment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    LeaveDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leave-dialog',
            template: __webpack_require__(/*! ./leave-dialog.component.html */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-dialog/leave-dialog.component.html"),
            styles: [__webpack_require__(/*! ./leave-dialog.component.scss */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-dialog/leave-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LeaveDialogComponent);
    return LeaveDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-management.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-management.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leave-management\">\r\n  <div class=\"leave-status\">\r\n    <div class=\"leave-content\">\r\n      <div class=\"total\">\r\n        <div>Total Leave</div>\r\n        <div>24</div>\r\n      </div>\r\n      <div class=\"taken\">\r\n        <div>Leave Taken</div>\r\n        <div>2</div>\r\n      </div>\r\n      <div class=\"pending\">\r\n        <div>Pending Leave</div>\r\n        <div>9</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"status\">\r\n    <div class=\"approved\">\r\n      <div class=\"circle\"></div> Approved\r\n    </div>\r\n    <div class=\"pending\">\r\n      <div class=\"circle\"></div> Pending\r\n    </div>\r\n    <div class=\"not-approved\">\r\n      <div class=\"circle\"></div> Not Approved\r\n    </div>\r\n    <div class=\"blackout-days\">\r\n      <div class=\"circle\"></div> Blackout Days\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cal-container pl-24\">\r\n    <div class=\"dates pb-24\">\r\n        <div class=\"mr_top\">\r\n          <mat-form-field class=\"new_mr\">\r\n            <mat-select (selectionChange)=\"onchange($event.value)\" [(ngModel)]=\"selectm\" placeholder=\"Month\">\r\n              <mat-option *ngFor=\"let month of months\"  [value]=\"month\">\r\n                  {{month}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field style=\"padding-left: 10px;\">\r\n            <mat-select  (selectionChange)=\"onchangey($event.value)\" [(ngModel)]=\"selecty\" placeholder=\"Year\">\r\n              <mat-option *ngFor=\"let year of years\"  [value]=\"year\">\r\n                  {{year}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>        \r\n        </div>\r\n    </div>\r\n\r\n    <mwl-calendar-month-view\r\n        [viewDate]=\"viewDate\"\r\n        [events]=\"events\"\r\n        [refresh]=\"refresh\"\r\n        [activeDayIsOpen]=\"activeDayIsOpen\"\r\n        (dayClicked)=\"dayClicked($event.day)\"\r\n        (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n        (beforeViewRender)=\"beforeMonthViewRender($event)\">\r\n    </mwl-calendar-month-view>\r\n  </div>\r\n\r\n\r\n  <div class=\"list-leaves pt-24\">\r\n      <div class=\"leave pending\" (click)=\"openLeave()\">\r\n        <div class=\"left\">\r\n          <div class=\"data\">\r\n            <div class=\"date\">25 - 06 - 18</div>\r\n            <div class=\"type\">Casual Leave</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"right\">\r\n          <div class=\"action\">Pending</div>\r\n          <div class=\"action\">Cancle</div>\r\n          <div class=\"action\">Delete</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"leave reject\" (click)=\"openLeave()\">\r\n        <div class=\"left\">\r\n          <div class=\"data\">\r\n            <div class=\"date\">25 - 06 - 18</div>\r\n            <div class=\"type\">Casual Leave</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"right\">\r\n          <div class=\"action\">Show Comment</div>\r\n          <div class=\"action\">Delete</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"leave approve\" (click)=\"openLeave()\">\r\n        <div class=\"left\">\r\n          <div class=\"data\">\r\n            <div class=\"date\">25 - 06 - 18  to  27 - 06 - 18</div>\r\n            <div class=\"type\">Sick leave for 2 days</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"right\">\r\n          <div class=\"approved\">Approve</div>\r\n          <div class=\"action\">Delete</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-management.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-management.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -webkit-box-flex: 1;\n          flex: 1; }\n.cal-month-view .cal-cell-row {\n  display: -webkit-box;\n  display: flex; }\n.cal-month-view .cal-cell {\n  float: left;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch; }\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n.cal-month-view .cal-events {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px;\n  background-color: #1e90ff;\n  border-color: #D1E8FF;\n  color: #fff; }\n.cal-month-view .cal-event-title:link {\n  color: currentColor; }\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n.cal-week-view .cal-day-headers {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n.cal-week-view .cal-day-headers .cal-header {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding: 5px; }\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px;\n  background-color: #D1E8FF;\n  border: 1px solid #1e90ff;\n  color: #1e90ff; }\n.cal-week-view .cal-event-title:link {\n  color: currentColor; }\n.cal-week-view .cal-draggable {\n  cursor: move; }\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n.cal-day-view .cal-hour-rows {\n    width: 100%;\n    border: solid 1px #e1e1e1;\n    overflow-x: scroll;\n    position: relative; }\n.cal-day-view .cal-hour:nth-child(odd) {\n    background-color: #fafafa; }\n.cal-day-view mwl-calendar-day-view-hour-segment,\n  .cal-day-view .cal-hour-segment {\n    display: block; }\n.cal-day-view .cal-hour-segment::after {\n    content: '\\00a0'; }\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed #e1e1e1; }\n.cal-day-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n.cal-day-view .cal-hour-segment:hover,\n  .cal-day-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n.cal-day-view .cal-event-container {\n    position: absolute; }\n.cal-day-view .cal-event {\n    padding: 5px;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 100%;\n    box-sizing: border-box;\n    background-color: #D1E8FF;\n    border: 1px solid #1e90ff;\n    color: #1e90ff; }\n.cal-day-view .cal-event-title:link {\n    color: currentColor; }\n.cal-day-view .cal-draggable {\n    cursor: move; }\n.cal-day-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n.cal-day-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n.cal-day-view .cal-all-day-event {\n    padding: 8px;\n    border: solid 1px; }\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n.cal-month-view .cal-header .cal-cell {\n  font-weight: 500; }\n@media screen and (min-width: 1280px) and (max-width: 1919px) {\n  .cal-month-view .cal-day-cell {\n    min-height: 150px; } }\n@media screen and (min-width: 1920px) {\n  .cal-month-view .cal-day-cell {\n    min-height: 200px; } }\n.cal-month-view .cal-day-cell.cal-open {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.cal-month-view .holiday {\n  background-color: #e8fde7 !important; }\n.cal-month-view .cal-open-day-events {\n  background: #455A64;\n  box-shadow: inset 0 0 12px 0 rgba(0, 0, 0, 0.54);\n  padding: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.cal-month-view .cal-open-day-events > div {\n    padding: 0 16px;\n    margin: 8px 16px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n            justify-content: start;\n    background-color: white;\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n    -webkit-transition: box-shadow 300ms ease;\n    transition: box-shadow 300ms ease; }\n.cal-month-view .cal-open-day-events > div:first-of-type {\n      margin-top: 16px; }\n.cal-month-view .cal-open-day-events > div:last-of-type {\n      margin-bottom: 16px; }\n.cal-month-view .cal-open-day-events > div:hover {\n      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.cal-month-view .cal-open-day-events > div .cal-event {\n      top: 0;\n      margin: 0; }\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title {\n      -webkit-box-flex: 1;\n              flex: 1; }\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-title .cal-event-title {\n        display: block;\n        padding: 21px 24px;\n        line-height: 1;\n        text-decoration: none;\n        color: black; }\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-actions .cal-event-actions {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n              flex-direction: row;\n      -webkit-box-align: center;\n              align-items: center; }\n.cal-month-view .cal-open-day-events > div mwl-calendar-event-actions .cal-event-actions .cal-event-action {\n        display: block;\n        line-height: 1;\n        padding: 8px; }\n.leave-management .leave-status {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 20px 0px;\n  flex-wrap: wrap; }\n.leave-management .leave-status .leave-content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    font-weight: bold;\n    font-size: 16px;\n    flex-wrap: wrap; }\n.leave-management .leave-status .leave-content .total {\n      color: #000;\n      padding: 0px 50px;\n      text-align: center;\n      border-right: 1px solid #ccc; }\n@media only screen and (max-width: 767px) {\n        .leave-management .leave-status .leave-content .total {\n          border-right: none;\n          padding: 16px 50px 0px 50px; } }\n.leave-management .leave-status .leave-content .taken {\n      color: red;\n      padding: 0px 50px;\n      text-align: center;\n      border-right: 1px solid #ccc; }\n@media only screen and (max-width: 767px) {\n        .leave-management .leave-status .leave-content .taken {\n          border-right: none;\n          padding: 16px 50px 0px 50px; } }\n.leave-management .leave-status .leave-content .pending {\n      color: green;\n      padding: 0px 50px;\n      text-align: center; }\n@media only screen and (max-width: 767px) {\n        .leave-management .leave-status .leave-content .pending {\n          padding: 16px 50px 0px 50px; } }\n.leave-management .status {\n  border-top: 1px solid #ccc;\n  border-bottom: 1px solid #ccc;\n  font-weight: bold;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 0px;\n  margin-bottom: 30px;\n  flex-wrap: wrap; }\n.leave-management .status .approved {\n    padding-right: 15px;\n    display: -webkit-box;\n    display: flex; }\n.leave-management .status .approved .circle {\n      margin-right: 5px;\n      width: 15px;\n      height: 15px;\n      border: none;\n      border-radius: 20px;\n      background-color: green; }\n.leave-management .status .pending {\n    padding-right: 15px;\n    display: -webkit-box;\n    display: flex; }\n.leave-management .status .pending .circle {\n      margin-right: 5px;\n      width: 15px;\n      height: 15px;\n      border: none;\n      border-radius: 20px;\n      background-color: #b8e980; }\n.leave-management .status .not-approved {\n    padding-right: 15px;\n    display: -webkit-box;\n    display: flex; }\n.leave-management .status .not-approved .circle {\n      margin-right: 5px;\n      width: 15px;\n      height: 15px;\n      border: none;\n      border-radius: 20px;\n      background-color: red; }\n.leave-management .status .blackout-days {\n    padding-right: 15px;\n    display: -webkit-box;\n    display: flex; }\n@media only screen and (max-width: 767px) {\n      .leave-management .status .blackout-days {\n        padding: 10px 0px; } }\n.leave-management .status .blackout-days .circle {\n      margin-right: 5px;\n      width: 15px;\n      height: 15px;\n      border: none;\n      border-radius: 20px;\n      background-color: #000; }\n.leave-management .list-leaves {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding-left: 10px; }\n.leave-management .list-leaves .leave {\n    display: -webkit-box;\n    display: flex;\n    border: 1px solid #ccc;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center;\n    margin-bottom: 10px;\n    flex-wrap: wrap;\n    padding: 10px 0px; }\n.leave-management .list-leaves .leave.pending {\n      border-left: 15px solid #b8e980; }\n.leave-management .list-leaves .leave.reject {\n      border-left: 15px solid red; }\n.leave-management .list-leaves .leave.approve {\n      border-left: 15px solid green; }\n.leave-management .list-leaves .leave .left {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center; }\n.leave-management .list-leaves .leave .left .data {\n        padding-left: 10px; }\n.leave-management .list-leaves .leave .left .data .date {\n          font-weight: bold; }\n.leave-management .list-leaves .leave .left .data .type {\n          font-weight: 300; }\n.leave-management .list-leaves .leave .right {\n      padding: 10px 0px;\n      font-weight: bold;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center;\n      display: -webkit-box;\n      display: flex; }\n.leave-management .list-leaves .leave .right .action {\n        padding: 0px 20px;\n        font-size: 12px;\n        border-right: 1px solid #000; }\n@media only screen and (max-width: 400px) {\n          .leave-management .list-leaves .leave .right .action {\n            padding: 0px 8px; } }\n.leave-management .list-leaves .leave .right .action:last-child {\n          border-right: none; }\n.leave-management .list-leaves .leave .right .approved {\n        padding: 0px 30px;\n        color: green;\n        font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-management.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-management.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: LeaveManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveManagementComponent", function() { return LeaveManagementComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event-dialog/event-dialog.component */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/event-dialog/event-dialog.component.ts");
/* harmony import */ var _cal_event_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cal-event.model */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/cal-event.model.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_contacts_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../user-contacts.service */ "./src/app/main/content/apps/user-contacts/user-contacts.service.ts");
/* harmony import */ var _leave_dialog_leave_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./leave-dialog/leave-dialog.component */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-dialog/leave-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var LeaveManagementComponent = /** @class */ (function () {
    function LeaveManagementComponent(http, dialog, calService, apiloader, toast, route) {
        var _this = this;
        this.http = http;
        this.dialog = dialog;
        this.calService = calService;
        this.apiloader = apiloader;
        this.toast = toast;
        this.route = route;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.years = [];
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = false;
        this.selectedDay = { date: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfDay"])(new Date()) };
        if (sessionStorage.getItem('role') === 'CLIENT_ADMIN') {
            this.actions = [
                {
                    label: '<i class="material-icons s-16">edit</i>',
                    onClick: function (_a) {
                        var event = _a.event;
                        _this.editEvent('edit', event);
                    }
                },
                {
                    label: '<i class="material-icons s-16">delete</i>',
                    onClick: function (_a) {
                        var event = _a.event;
                        _this.deleteEvent(event);
                    }
                }
            ];
        }
        else {
            this.actions = [];
        }
        //---- DropDown for month and year -----//
        var date = new Date();
        var currentYear = date.getFullYear();
        //set values for year dropdown
        for (var i = 0; i <= 100; i++) {
            this.years.push(currentYear + i);
        }
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.selectm = this.months[this.viewDate.getMonth()];
        this.selecty = currentYear;
    }
    LeaveManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/calendar-client/events')
            .subscribe(function (response) {
            _this.events = response.data;
            _this.setEvents();
        });
        this.route.params.subscribe(function (params) {
            _this.userId = params['id'];
        });
    };
    LeaveManagementComponent.prototype.onchange = function (event) {
        this.selectm = event;
        var d = this.selecty + "-" + this.monthNameToNum(event) + "-01 00:00:00";
        this.viewDate = new Date(d);
    };
    LeaveManagementComponent.prototype.onchangey = function (event) {
        this.selecty = event;
        var d = event + "-" + this.monthNameToNum(this.selectm) + "-01 00:00:00";
        this.viewDate = new Date(d);
    };
    LeaveManagementComponent.prototype.monthNameToNum = function (monthname) {
        var month = this.months.indexOf(monthname);
        return month ? month + 1 : 0;
    };
    LeaveManagementComponent.prototype.setEvents = function () {
        this.events = this.events.map(function (item) {
            return new _cal_event_model__WEBPACK_IMPORTED_MODULE_7__["CalEventModel"](item);
        });
    };
    LeaveManagementComponent.prototype.beforeMonthViewRender = function (_a) {
        var header = _a.header, body = _a.body;
        body.forEach(function (day) {
        });
    };
    LeaveManagementComponent.prototype.dayClicked = function (day) {
        var date = day.date;
        var events = day.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
        this.selectedDay = day;
        this.refresh.next();
    };
    LeaveManagementComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        // console.warn('Dropped or resized', event);
        this.refresh.next(true);
    };
    /**
     * Delete Event
     * @param event
     */
    LeaveManagementComponent.prototype.deleteEvent = function (event) {
        var _this = this;
        console.log(event);
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var eventIndex = _this.events.indexOf(event);
                _this.events.splice(eventIndex, 1);
                _this.refresh.next(true);
            }
            _this.confirmDialogRef = null;
        });
    };
    /**
     * Edit Event
     * @param {string} action
     * @param {CalendarEvent} event
     */
    LeaveManagementComponent.prototype.editEvent = function (action, event) {
        var _this = this;
        var eventIndex = this.events.indexOf(event);
        this.dialogRef = this.dialog.open(_event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EventDialogComponent"], {
            panelClass: 'event-form-dialog',
            data: {
                event: event,
                action: action
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            var actionType = response[0];
            var formData = response[1];
            switch (actionType) {
                /**
                 * Save
                 */
                case 'save':
                    _this.events[eventIndex] = Object.assign(_this.events[eventIndex], formData.getRawValue());
                    _this.refresh.next(true);
                    break;
                /**
                 * Delete
                 */
                case 'delete':
                    _this.deleteEvent(event);
                    break;
            }
        });
    };
    /**
     * Add Event
     */
    LeaveManagementComponent.prototype.addEvent = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(_event_dialog_event_dialog_component__WEBPACK_IMPORTED_MODULE_6__["EventDialogComponent"], {
            panelClass: 'event-form-dialog',
            data: {
                action: 'new',
                date: this.selectedDay.date
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            var newEvent = response.getRawValue();
            newEvent.actions = _this.actions;
            _this.events.push(newEvent);
            _this.refresh.next(true);
        });
    };
    LeaveManagementComponent.prototype.openLeave = function () {
        this.dialogRef = this.dialog.open(_leave_dialog_leave_dialog_component__WEBPACK_IMPORTED_MODULE_12__["LeaveDialogComponent"], {
            panelClass: 'leave-form-dialog',
            data: {
                event: event,
                action: 'details'
            }
        });
    };
    LeaveManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-management',
            template: __webpack_require__(/*! ./leave-management.component.html */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-management.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./leave-management.component.scss */ "./src/app/main/content/apps/user-contacts/edit-employee/leave-management/leave-management.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _user_contacts_service__WEBPACK_IMPORTED_MODULE_11__["UserContactsService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_8__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_9__["ToasterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]])
    ], LeaveManagementComponent);
    return LeaveManagementComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-user/edit-user.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-user/edit-user.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mat-white-bg mat-elevation-z4\">\r\n<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-16 m-0\" fusePerfectScrollbar>\r\n\r\n        <form [formGroup]=\"contactForm\">\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"first_name\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" formControlName=\"first_name\" matInput placeholder=\"First Name\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"last_name\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" formControlName=\"last_name\" matInput placeholder=\"Last Name\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"email\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" formControlName=\"email\" matInput type=\"email\" placeholder=\"Email\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n            \r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input formControlName=\"phone\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" matInput placeholder=\"Phone number\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"emergency_phone\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" formControlName=\"emergency_phone\" matInput placeholder=\"Emergency Phone number\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <textarea name=\"address\" formControlName=\"address\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" matInput placeholder=\"Address\"></textarea>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"designation\" formControlName=\"designation\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" matInput placeholder=\"Designation\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"department\" formControlName=\"department\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" matInput placeholder=\"Department\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"employment_type\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" formControlName=\"employment_type\" matInput placeholder=\"Employeement Type\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"education\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" formControlName=\"education\" matInput placeholder=\"Education\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"past_experience\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" formControlName=\"past_experience\" matInput placeholder=\"Past Experience\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"past_company\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" formControlName=\"past_company\" matInput placeholder=\"Past Company\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <mat-label>Joining Date</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" name=\"join_date\" formControlName=\"join_date\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matPrefix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"marital_status\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" formControlName=\"marital_status\" matInput placeholder=\"Marital Status\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"gender\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" formControlName=\"gender\" matInput placeholder=\"Gender\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <mat-label>Date of Birth</mat-label>\r\n                    <input matInput [matDatepicker]=\"dob\" [readonly]=\"data.role === 'ALIGN_ADMIN'\" name=\"birth_date\" formControlName=\"birth_date\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matPrefix [for]=\"dob\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dob></mat-datepicker>\r\n                </mat-form-field>\r\n            </div>          \r\n            \r\n        </form>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"data.role === 'CLIENT_ADMIN'\" mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <button mat-raised-button\r\n                (click)=\"closeDialog(contactForm.value)\"\r\n                class=\"save-button mat-accent\"\r\n                [disabled]=\"contactForm.invalid\"\r\n                aria-label=\"SAVE\">\r\n           Update\r\n        </button>\r\n\r\n    </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-user/edit-user.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-user/edit-user.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.edit-user-dialog {\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .edit-user-dialog {\n      width: 100%; } }\n.edit-user-dialog .mat-dialog-container {\n    padding: 0; }\n.edit-user-dialog .mat-dialog-container .mat-toolbar {\n      -webkit-box-flex: 1;\n              flex: 1 0 auto;\n      min-height: initial; }\n.edit-user-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.edit-user-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/edit-user/edit-user.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/edit-user/edit-user.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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



var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.user = data.contact;
        this.id = this.user.id;
        if (data.role === 'CLIENT_ADMIN') {
            this.dialogTitle = 'Edit User';
        }
        else {
            this.dialogTitle = 'User Details';
        }
        this.contactForm = this.createContactForm();
    }
    EditUserComponent.prototype.createContactForm = function () {
        return this.formBuilder.group({
            first_name: [this.user.first_name],
            last_name: [this.user.last_name],
            email: [this.user.email],
            phone: [this.user.phone],
            emergency_phone: [this.user.emergency_phone],
            address: [this.user.address],
            designation: [this.user.designation],
            department: [this.user.department],
            employment_type: [this.user.employment_type],
            education: [this.user.education],
            past_experience: [this.user.past_experience],
            past_company: [this.user.past_company],
            join_date: [this.user.join_date],
            marital_status: [this.user.marital_status],
            gender: [this.user.gender],
            birth_date: [this.user.birth_date],
        });
    };
    EditUserComponent.prototype.closeDialog = function (data) {
        data.id = this.id;
        this.dialogRef.close(data);
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/main/content/apps/user-contacts/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/main/content/apps/user-contacts/edit-user/edit-user.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/selected-bar/selected-bar.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/selected-bar/selected-bar.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"row\" fxLayoutAlign=\"start center\" class=\"p-24\">\r\n\r\n    <div class=\"close-button-wrapper\" fxFlex=\"0 1 auto\" fxFlex.gt-sm=\"220px\" (click)=\"deselectAll()\">\r\n        <button class=\"p-8\" mat-button fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <mat-icon class=\"mr-8\">arrow_back</mat-icon>\r\n            <span class=\"text-uppercase\">Back</span>\r\n        </button>\r\n    </div>\r\n\r\n    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutAlign.gt-sm=\"space-between center\">\r\n\r\n        <div>\r\n            <span class=\"selected-contacts-count\">\r\n                <span class=\"mr-4\">{{selectedContacts.length}}</span>\r\n                <span>selected</span>\r\n            </span>\r\n\r\n            <button mat-icon-button [matMenuTriggerFor]=\"selectMenu\">\r\n                <mat-icon>arrow_drop_down</mat-icon>\r\n            </button>\r\n            <mat-menu #selectMenu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"selectAll()\">Select all</button>\r\n                <button mat-menu-item (click)=\"deselectAll()\">Deselect all</button>\r\n            </mat-menu>\r\n\r\n        </div>\r\n\r\n        <div class=\"multi-select-actions\">\r\n            <button mat-icon-button (click)=\"deleteSelectedContacts()\" aria-label=\"delete selected\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/selected-bar/selected-bar.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/selected-bar/selected-bar.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  -webkit-box-flex: 1;\n          flex: 1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 120px;\n  z-index: 99; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/selected-bar/selected-bar.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/selected-bar/selected-bar.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FuseContactsSelectedBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseContactsSelectedBarComponent", function() { return FuseContactsSelectedBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contacts.service */ "./src/app/main/content/apps/user-contacts/contacts.service.ts");
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
            template: __webpack_require__(/*! ./selected-bar.component.html */ "./src/app/main/content/apps/user-contacts/selected-bar/selected-bar.component.html"),
            styles: [__webpack_require__(/*! ./selected-bar.component.scss */ "./src/app/main/content/apps/user-contacts/selected-bar/selected-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [_contacts_service__WEBPACK_IMPORTED_MODULE_3__["ContactsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], FuseContactsSelectedBarComponent);
    return FuseContactsSelectedBarComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/sidenavs/main/main.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/sidenavs/main/main.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-content\">\r\n\r\n    <div class=\"card mat-white-bg\">\r\n        <!-- SIDENAV HEADER -->\r\n        <div class=\"header p-24\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n            <!-- USER -->\r\n            <img [src]=\"user.avatar\" class=\"avatar mr-16\" [alt]=\"user.name\"/>\r\n            <span class=\"h5\">{{user.name}}</span>\r\n            <!-- / USER -->\r\n\r\n        </div>\r\n        <!-- / SIDENAV HEADER -->\r\n\r\n        <!-- SIDENAV CONTENT -->\r\n        <div class=\"content py-16\" fusePerfectScrollbar>\r\n\r\n            <div class=\"nav\">\r\n\r\n                <div class=\"nav-item\" aria-label=\"inbox\">\r\n                    <a class=\"nav-link\" matRipple (click)=\"changeFilter('all')\" [ngClass]=\"{'active':filterBy ==='all'}\">\r\n                        <span class=\"title\">All Contacts</span>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"nav-item\" aria-label=\"frequently contacted\" (click)=\"changeFilter('frequent')\">\r\n                    <a class=\"nav-link\" matRipple [ngClass]=\"{'active':filterBy ==='frequent'}\">\r\n                        <div class=\"title\">Freequently contacted</div>\r\n                    </a>\r\n                </div>\r\n\r\n                <div class=\"nav-item\" aria-label=\"starred\" (click)=\"changeFilter('starred')\">\r\n                    <a class=\"nav-link\" matRipple [ngClass]=\"{'active':filterBy ==='starred'}\">\r\n                        <div class=\"title\">Starred Contacts</div>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- / SIDENAV CONTENT -->\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/sidenavs/main/main.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/sidenavs/main/main.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  height: 100%; }\n:host .sidenav-content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 0; }\n@media screen and (min-width: 960px) {\n      :host .sidenav-content {\n        padding: 24px 4px 24px 24px; } }\n:host .sidenav-content .card {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-flex: 0;\n              flex: 0 1 auto;\n      padding: 0; }\n@media screen and (min-width: 960px) {\n        :host .sidenav-content .card {\n          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); } }\n:host .sidenav-content .card > .header {\n        -webkit-box-flex: 0;\n                flex: 0 1 auto;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .sidenav-content .card > .content {\n        -webkit-box-flex: 0;\n                flex: 0 1 auto; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/sidenavs/main/main.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/sidenavs/main/main.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FuseContactsMainSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseContactsMainSidenavComponent", function() { return FuseContactsMainSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contacts.service */ "./src/app/main/content/apps/user-contacts/contacts.service.ts");
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
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/content/apps/user-contacts/sidenavs/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/content/apps/user-contacts/sidenavs/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_contacts_service__WEBPACK_IMPORTED_MODULE_1__["ContactsService"]])
    ], FuseContactsMainSidenavComponent);
    return FuseContactsMainSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/user-contacts/user-contacts.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/apps/user-contacts/user-contacts.service.ts ***!
  \**************************************************************************/
/*! exports provided: UserContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContactsService", function() { return UserContactsService; });
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






var UserContactsService = /** @class */ (function () {
    function UserContactsService(http) {
        this.http = http;
        this.baseUrl = _fuse_constant__WEBPACK_IMPORTED_MODULE_5__["apiUri"];
    }
    UserContactsService.prototype.setHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    UserContactsService.prototype.postData = function (url, data, type) {
        var headers = this.setHeaders();
        if (type = 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344');
        }
        var options = { headers: headers };
        return this.http.post(this.baseUrl + url, data, options).map(this.extractData).catch(this.handleError);
    };
    UserContactsService.prototype.getData = function (url, data) {
        var headers = this.setHeaders();
        if (data) {
            var queryParams = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
            url += '?' + queryParams;
        }
        var options = { headers: headers };
        return this.http.get(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    UserContactsService.prototype.deleteData = function (url) {
        var headers = this.setHeaders();
        var options = { headers: headers };
        return this.http.delete(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    UserContactsService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    UserContactsService.prototype.handleError = function (error) {
        var errMsg = error.error;
        if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) { return errMsg.message[k]; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
    };
    UserContactsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserContactsService);
    return UserContactsService;
}());



/***/ })

}]);
//# sourceMappingURL=user-contacts-contacts-module.js.map