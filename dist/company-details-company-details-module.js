(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-details-company-details-module"],{

/***/ "./src/app/main/content/apps/company-details/company-details-dialog/company-details-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/company-details-dialog/company-details-dialog.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">Company Details</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-16 m-0\" fusePerfectScrollbar>\r\n\r\n        <form [formGroup]=\"myform\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"first-field\">\r\n                <mat-form-field fxFlex class=\"mat-first\" appearance=\"outline\">\r\n                    <mat-label>Company Name</mat-label>\r\n                    <input matInput placeholder=\"Company Name\" name=\"company_name\" formControlName=\"company_name\">\r\n                </mat-form-field>\r\n\r\n                <div class=\"profile-logo\">\r\n                    <label for=\"upload-image\">\r\n                        <img src=\"assets/images/circle.png\"  *ngIf=\"croppedImage == ''\">\r\n                        <img [src]=\"croppedImage\" width=\"200\" class=\"cropped-image\" *ngIf=\"croppedImage !== ''\" />\r\n                    </label>\r\n                    <input type=\"file\" id=\"upload-image\" ng2FileSelect [uploader]=\"uploader\" formControlName=\"logo\" (change)=\"fileChangeEvent($event)\"\r\n                    (onFileSelected)=\"onFileSelected($event)\" accept=\"image/png, image/jpeg\" style=\"display:none\" />\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-title\">\r\n                <h2>About Us :</h2>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex appearance=\"outline\">\r\n                    <mat-label>Company Description</mat-label>\r\n                    <input  matInput placeholder=\"Company Description\" name=\"description\" formControlName=\"description\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex appearance=\"outline\">\r\n                    <mat-label>Company Vision</mat-label>\r\n                    <input  matInput placeholder=\"Company Vision\" name=\"vision\" formControlName=\"vision\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex appearance=\"outline\">\r\n                    <mat-label>Company Mission</mat-label>\r\n                    <input  matInput placeholder=\"Company Mission\" name=\"mission\" formControlName=\"mission\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex appearance=\"outline\">\r\n                    <mat-label>Company Values</mat-label>\r\n                    <input  matInput placeholder=\"Company Values\" name=\"company_values\" formControlName=\"company_values\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"form-title\">\r\n                <h2>General Info :</h2>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex appearance=\"outline\">\r\n                    <mat-label>Company Start Date</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" name=\"start_date\" formControlName=\"start_date\" placeholder=\"Choose a date\">\r\n                    <mat-datepicker-toggle matPrefix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex appearance=\"outline\">\r\n                    <mat-label>UEN</mat-label>\r\n                    <input matInput placeholder=\"UEN\" name=\"uen\" formControlName=\"uen\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex appearance=\"outline\">\r\n                    <mat-label>Tax Number</mat-label>\r\n                    <input matInput placeholder=\"Tax Number\" name=\"tax_number\" formControlName=\"tax_number\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"form-title\">\r\n                <h2>Contact Info :</h2>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex appearance=\"outline\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput placeholder=\"Address\" name=\"address\" formControlName=\"address\" required></textarea>\r\n                </mat-form-field>\r\n            </div>\r\n            \r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex appearance=\"outline\">\r\n                    <mat-label>Mobile No</mat-label>\r\n                    <input  matInput placeholder=\"Mobile No\" formControlName=\"contact_number\">\r\n                </mat-form-field>\r\n            </div>\r\n            \r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex appearance=\"outline\">\r\n                    <mat-label>Website</mat-label>\r\n                    <input  matInput placeholder=\"Website\" formControlName=\"website\" required>\r\n                </mat-form-field>\r\n            </div>\r\n            \r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex appearance=\"outline\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input name=\"email\" formControlName=\"email\" matInput type=\"email\" placeholder=\"Email\" required>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-radio-group formControlName=\"is_paid\" aria-label=\"Select an option\">\r\n                    <h3>Subscription : </h3>\r\n                    <mat-radio-button value=\"paid\">Yes</mat-radio-button>\r\n                    <mat-radio-button value=\"free\">No</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>\r\n            \r\n        </form>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n        <button mat-raised-button\r\n                (click)=\"dialogRef.close(myform.value)\"\r\n                class=\"save-button mat-accent\"\r\n                [disabled]=\"myform.invalid\"\r\n                aria-label=\"SAVE\">\r\n            SAVE\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/company-details-dialog/company-details-dialog.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/company-details-dialog/company-details-dialog.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.contact-form-dialog {\n  width: 800px; }\n@media screen and (max-width: 599px) {\n    .contact-form-dialog {\n      width: 100%; } }\n.contact-form-dialog .mat-dialog-container {\n    padding: 0; }\n.contact-form-dialog .mat-dialog-container .mat-toolbar {\n      -webkit-box-flex: 1;\n              flex: 1 0 auto;\n      min-height: initial; }\n.contact-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.contact-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n.mat-form-field {\n  padding-right: 10px; }\n.mat-first {\n  padding: 30px 40px 0 0; }\n.contact-form-dialog mat-radio-group mat-radio-button {\n  padding-right: 10px; }\n.contact-form-dialog mat-radio-group h3 {\n  display: inline-block;\n  padding-right: 10px;\n  font-weight: 500; }\n.profile-logo {\n  width: 128px;\n  margin: 10px 20px; }\n.cropped-image {\n  border-radius: 100%; }\n.form-title h2 {\n  font-weight: 500;\n  color: #f2ab13; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/company-details-dialog/company-details-dialog.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/company-details-dialog/company-details-dialog.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: CompanyDetailsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsDialogComponent", function() { return CompanyDetailsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img-cropper/img-cropper.component */ "./src/app/main/content/apps/company-details/img-cropper/img-cropper.component.ts");
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





var CompanyDetailsDialogComponent = /** @class */ (function () {
    function CompanyDetailsDialogComponent(dialogRef, data, formBuilder, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({
            url: 'http://localhost/img/upload.php',
            disableMultipart: false,
            autoUpload: false
        });
        this.client_details = data.details;
        console.log(data);
        this.myform = this.createForm();
        this.myform.patchValue({ 'company_name': this.client_details.name, 'start_date': this.client_details.start_date, 'uen': this.client_details.uen,
            'tax_number': this.client_details.tax_number, 'address': this.client_details.address, 'mobile_no': this.client_details.contact_number,
            'website': this.client_details.website, 'email': this.client_details.email, 'description': this.client_details.description,
            'vision': this.client_details.vision, 'mission': this.client_details.mission, 'company_values': this.client_details.company_values,
            'contact_number': this.client_details.contact_number });
        if (this.client_details.is_paid === 1) {
            this.myform.patchValue({ 'is_paid': 'paid' });
        }
        else {
            this.myform.patchValue({ 'is_paid': 'free' });
        }
    }
    CompanyDetailsDialogComponent.prototype.createForm = function () {
        return this.formBuilder.group({
            logo: [''],
            company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: [''],
            vision: [''],
            mission: [''],
            company_values: [''],
            start_date: [''],
            uen: [''],
            tax_number: [''],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contact_number: [''],
            website: [''],
            is_paid: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CompanyDetailsDialogComponent.prototype.fileChangeEvent = function (event) {
        var _this = this;
        this.imageChangedEvent = event;
        this.cropDialog = this.dialog.open(_img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_4__["ImgCropperComponent"], {
            panelClass: 'image-cropper',
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
    CompanyDetailsDialogComponent.prototype.onFileSelected = function (event) {
        var file = event[0];
    };
    CompanyDetailsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-details-dialog',
            template: __webpack_require__(/*! ./company-details-dialog.component.html */ "./src/app/main/content/apps/company-details/company-details-dialog/company-details-dialog.component.html"),
            styles: [__webpack_require__(/*! ./company-details-dialog.component.scss */ "./src/app/main/content/apps/company-details/company-details-dialog/company-details-dialog.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CompanyDetailsDialogComponent);
    return CompanyDetailsDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-details/company-details.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/company-details.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"company-details\" class=\"page-layout simple tabbed\" fusePerfectScrollbar *ngIf=\"client\">\r\n\r\n  <!-- HEADER -->\r\n  <div class=\"header p-24\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\r\n       fxLayoutAlign.gt-sm=\"space-between end\">\r\n\r\n      <div class=\"user-info\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayout.gt-sm=\"row\"\r\n           fxLayoutAlign.gt-sm=\"start center\">\r\n          <img class=\"profile-image avatar huge\" src=\"assets/images/avatars/profile.jpg\"\r\n               *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\r\n          <div class=\"name\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">{{client.name}}\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"actions\" fxLayout=\"row\" fxLayoutAlign=\"end center\" *fuseIfOnDom\r\n           [@animate]=\"{value:'*',params:{delay:'200ms'}}\">\r\n           <ng-container *ngIf=\"tabIndex == 0\">\r\n            <mat-icon class=\"mat-icon edit-profile material-icons mr-16\" (click)=\"editDetails()\" role=\"img\" aria-hidden=\"true\">edit</mat-icon>\r\n           </ng-container>\r\n           \r\n      </div>\r\n\r\n  </div>\r\n  <!-- / HEADER -->\r\n\r\n  <!-- CONTENT -->\r\n  <div class=\"content\">\r\n\r\n      <mat-tab-group dynamicHeight=\"true\" (selectedTabChange)=\"tabChanged($event)\">\r\n\r\n          <mat-tab label=\"Company Profile\">\r\n              <company-details [details]=\"client\"></company-details>\r\n          </mat-tab>\r\n\r\n          <mat-tab label=\"Employee Details\">\r\n            <div class=\"employees\"><user-list></user-list></div>\r\n          </mat-tab>\r\n\r\n          <!-- <mat-tab label=\"Organization Chart\">\r\n            <org-chart></org-chart>\r\n          </mat-tab> -->\r\n\r\n      </mat-tab-group>\r\n\r\n  </div>\r\n  <!-- / CONTENT -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/company-details.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/company-details.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#company-details .header {\n  height: 150px;\n  background: -webkit-gradient(linear, left top, left bottom, from(#fb7215), to(#f49f14));\n  background: linear-gradient(#fb7215, #f49f14);\n  background-size: cover; }\n#company-details .header .profile-image {\n    margin-right: 24px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #company-details .header .profile-image {\n        margin: 0 0 16px 0; } }\n#company-details .header .name {\n    font-size: 34px;\n    color: #FFFFFF; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #company-details .header .name {\n        margin-bottom: 32px; } }\n#company-details .header .actions button {\n    text-transform: none;\n    padding: 0 16px;\n    height: 32px;\n    line-height: 32px;\n    margin: 0 0 0 8px; }\n#company-details .header .actions .edit-profile {\n    color: #FFFFFF; }\n#company-details .content {\n  -webkit-box-flex: 1;\n          flex: 1; }\n#company-details .content mat-tab-group {\n    height: 100%; }\n#company-details .content mat-tab-group .mat-tab-body-wrapper {\n      -webkit-box-flex: 1;\n              flex-grow: 1; }\n.mat-icon {\n  cursor: pointer; }\nmat-tab-body:nth-child(2) {\n  padding: 20px; }\n.employees {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/company-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/company-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: CompanyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsComponent", function() { return CompanyDetailsComponent; });
/* harmony import */ var _company_details_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-details.service */ "./src/app/main/content/apps/company-details/company-details.service.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _company_details_dialog_company_details_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-details-dialog/company-details-dialog.component */ "./src/app/main/content/apps/company-details/company-details-dialog/company-details-dialog.component.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
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









var CompanyDetailsComponent = /** @class */ (function () {
    function CompanyDetailsComponent(dialog, route, apiloader, toast, comService) {
        var _this = this;
        this.dialog = dialog;
        this.route = route;
        this.apiloader = apiloader;
        this.toast = toast;
        this.comService = comService;
        this.tabChanged = function (tabChangeEvent) {
            _this.tabIndex = tabChangeEvent.index;
        };
        this.tabIndex = 0;
    }
    CompanyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.client_id = params['id'];
            _this.getClientDetails(_this.client_id);
        });
    };
    CompanyDetailsComponent.prototype.getClientDetails = function (id) {
        var _this = this;
        this.apiloader.setLoader(true);
        this.comService.getData('clients/' + id).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.client = response.data;
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    CompanyDetailsComponent.prototype.editDetails = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(_company_details_dialog_company_details_dialog_component__WEBPACK_IMPORTED_MODULE_6__["CompanyDetailsDialogComponent"], {
            panelClass: 'contact-form-dialog',
            data: {
                details: this.client
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
    CompanyDetailsComponent.prototype.updateClient = function (formData) {
        var _this = this;
        console.log(formData);
        this.apiloader.setLoader(true);
        if (formData.is_paid === 'paid') {
            formData.is_paid = 1;
        }
        else {
            formData.is_paid = 0;
        }
        var sdate = moment__WEBPACK_IMPORTED_MODULE_8__(formData.start_date).format('YYYY-MM-DD');
        var body = new URLSearchParams();
        body.set('company_name', formData.company_name);
        body.set('email', formData.email);
        body.set('mission', formData.mission);
        body.set('vision', formData.vision);
        body.set('company_values', formData.company_values);
        body.set('description', formData.description);
        body.set('uen', formData.uen);
        body.set('tax_number', formData.tax_number);
        body.set('contact_number', formData.contact_number);
        body.set('website', formData.website);
        body.set('address', formData.address);
        body.set('start_date', sdate);
        body.set('is_paid', formData.is_paid);
        this.comService.postData('clients/' + this.client_id, body.toString()).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.getClientDetails(_this.client_id);
                _this.toast.showSuccess('Client Updated Successfully!.');
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('dialogContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"])
    ], CompanyDetailsComponent.prototype, "dialogContent", void 0);
    CompanyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-company-details',
            template: __webpack_require__(/*! ./company-details.component.html */ "./src/app/main/content/apps/company-details/company-details.component.html"),
            styles: [__webpack_require__(/*! ./company-details.component.scss */ "./src/app/main/content/apps/company-details/company-details.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_1__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"],
            _company_details_service__WEBPACK_IMPORTED_MODULE_0__["CompanyDetailsService"]])
    ], CompanyDetailsComponent);
    return CompanyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-details/company-details.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/company-details.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CompanyDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsModule", function() { return CompanyDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _company_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-details.component */ "./src/app/main/content/apps/company-details/company-details.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _company_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company-details.service */ "./src/app/main/content/apps/company-details/company-details.service.ts");
/* harmony import */ var _tabs_details_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabs/details/details.component */ "./src/app/main/content/apps/company-details/tabs/details/details.component.ts");
/* harmony import */ var _tabs_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs/user-list/user-list.component */ "./src/app/main/content/apps/company-details/tabs/user-list/user-list.component.ts");
/* harmony import */ var _tabs_org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/org-chart/org-chart.component */ "./src/app/main/content/apps/company-details/tabs/org-chart/org-chart.component.ts");
/* harmony import */ var _tabs_user_list_user_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabs/user-list/user-service.service */ "./src/app/main/content/apps/company-details/tabs/user-list/user-service.service.ts");
/* harmony import */ var _tabs_user_list_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tabs/user-list/user-dialog/user-dialog.component */ "./src/app/main/content/apps/company-details/tabs/user-list/user-dialog/user-dialog.component.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var ng2_org_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-org-chart */ "./node_modules/ng2-org-chart/ng2-org-chart.es5.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _company_details_dialog_company_details_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./company-details-dialog/company-details-dialog.component */ "./src/app/main/content/apps/company-details/company-details-dialog/company-details-dialog.component.ts");
/* harmony import */ var _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./img-cropper/img-cropper.component */ "./src/app/main/content/apps/company-details/img-cropper/img-cropper.component.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routes = [
    {
        path: '',
        component: _company_details_component__WEBPACK_IMPORTED_MODULE_2__["CompanyDetailsComponent"],
        resolve: {
            contacts: _tabs_user_list_user_service_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]
        }
    }
];
var CompanyDetailsModule = /** @class */ (function () {
    function CompanyDetailsModule() {
    }
    CompanyDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__["CdkTableModule"],
                ng2_org_chart__WEBPACK_IMPORTED_MODULE_13__["OrgChartModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_14__["FileUploadModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_17__["ImageCropperModule"]
            ],
            declarations: [_company_details_component__WEBPACK_IMPORTED_MODULE_2__["CompanyDetailsComponent"], _tabs_details_details_component__WEBPACK_IMPORTED_MODULE_7__["DetailsComponent"], _tabs_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_8__["UserListComponent"], _tabs_org_chart_org_chart_component__WEBPACK_IMPORTED_MODULE_9__["OrgChartComponent"], _tabs_user_list_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UserDialogComponent"], _company_details_dialog_company_details_dialog_component__WEBPACK_IMPORTED_MODULE_15__["CompanyDetailsDialogComponent"], _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_16__["ImgCropperComponent"]],
            providers: [_company_details_service__WEBPACK_IMPORTED_MODULE_6__["CompanyDetailsService"], _tabs_user_list_user_service_service__WEBPACK_IMPORTED_MODULE_10__["UserService"]],
            entryComponents: [_tabs_user_list_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_11__["UserDialogComponent"], _company_details_dialog_company_details_dialog_component__WEBPACK_IMPORTED_MODULE_15__["CompanyDetailsDialogComponent"], _img_cropper_img_cropper_component__WEBPACK_IMPORTED_MODULE_16__["ImgCropperComponent"]]
        })
    ], CompanyDetailsModule);
    return CompanyDetailsModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-details/company-details.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/company-details.service.ts ***!
  \******************************************************************************/
/*! exports provided: CompanyDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDetailsService", function() { return CompanyDetailsService; });
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






var CompanyDetailsService = /** @class */ (function () {
    function CompanyDetailsService(http) {
        this.http = http;
        this.baseUrl = _fuse_constant__WEBPACK_IMPORTED_MODULE_5__["apiUri"];
    }
    CompanyDetailsService.prototype.setHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    CompanyDetailsService.prototype.postData = function (url, data, type) {
        var headers = this.setHeaders();
        if (type = 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344');
        }
        var options = { headers: headers };
        return this.http.post(this.baseUrl + url, data, options).map(this.extractData).catch(this.handleError);
    };
    CompanyDetailsService.prototype.getData = function (url, data) {
        var headers = this.setHeaders();
        if (data) {
            var queryParams = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
            url += '?' + queryParams;
        }
        var options = { headers: headers };
        return this.http.get(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    CompanyDetailsService.prototype.deleteData = function (url) {
        var headers = this.setHeaders();
        var options = { headers: headers };
        return this.http.delete(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    CompanyDetailsService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    CompanyDetailsService.prototype.handleError = function (error) {
        var errMsg = error.error;
        if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) { return errMsg.message[k]; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
    };
    CompanyDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CompanyDetailsService);
    return CompanyDetailsService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-details/img-cropper/img-cropper.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/img-cropper/img-cropper.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">Image Cropper</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-16 m-0\" fusePerfectScrollbar>\r\n\r\n        <image-cropper\r\n            [imageChangedEvent]=\"imageChangedEvent\"\r\n            [maintainAspectRatio]=\"true\"\r\n            [aspectRatio]=\"3/ 3\"\r\n            [resizeToWidth]=\"128\"\r\n            [cropperMinWidth]=\"128\"\r\n            [onlyScaleDown]=\"true\"\r\n            [roundCropper]=\"true\"\r\n            format=\"png\"\r\n            outputType=\"base64\"\r\n            (imageCropped)=\"imageCropped($event)\"\r\n            (imageLoaded)=\"imageLoaded()\"\r\n            (cropperReady)=\"cropperReady()\"\r\n            (loadImageFailed)=\"loadImageFailed()\"\r\n            [style.display]=\"true\"\r\n        ></image-cropper>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <button mat-raised-button\r\n                (click)=\"onCloseDialog()\"\r\n                class=\"save-button mat-accent\"\r\n                aria-label=\"SAVE\">\r\n            SAVE\r\n        </button>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/img-cropper/img-cropper.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/img-cropper/img-cropper.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-form-field {\n  padding-right: 10px; }\n.image-cropper {\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .image-cropper {\n      width: 100%; } }\n.image-cropper .mat-dialog-container {\n    padding: 0; }\n.image-cropper .mat-dialog-container .mat-toolbar {\n      -webkit-box-flex: 1;\n              flex: 1 0 auto;\n      min-height: initial; }\n.image-cropper .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.image-cropper .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/img-cropper/img-cropper.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/img-cropper/img-cropper.component.ts ***!
  \****************************************************************************************/
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
            template: __webpack_require__(/*! ./img-cropper.component.html */ "./src/app/main/content/apps/company-details/img-cropper/img-cropper.component.html"),
            styles: [__webpack_require__(/*! ./img-cropper.component.scss */ "./src/app/main/content/apps/company-details/img-cropper/img-cropper.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ImgCropperComponent);
    return ImgCropperComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/details/details.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/details/details.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- CONTENT -->\r\n<div class=\"content\">\r\n\r\n        <div id=\"about\" class=\"p-24\" fxLayout=\"row wrap\">\r\n\r\n            <div class=\"about-content\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"65\">\r\n        \r\n                <div class=\"profile-box info-box general\" fxLayout=\"column\">\r\n        \r\n                    <header class=\"mat-accent-bg\">\r\n                        <div class=\"title\">About Us</div>\r\n                    </header>\r\n        \r\n                    <div class=\"content\">\r\n                        <div class=\"info-line\">\r\n                            <div class=\"title\">Company Description</div>\r\n                            <div class=\"info\">{{details.description}}</div>\r\n                        </div>\r\n\r\n                        <div class=\"info-line\">\r\n                            <div class=\"title\">Company Vision</div>\r\n                            <div class=\"info\">{{details.vision}}</div>\r\n                        </div>\r\n\r\n                        <div class=\"info-line\">\r\n                            <div class=\"title\">Company Mission</div>\r\n                            <div class=\"info\">{{details.mission}}</div>\r\n                        </div>\r\n\r\n                        <div class=\"info-line\">\r\n                            <div class=\"title\">Company Values</div>\r\n                            <div class=\"info\">{{details.company_values}}</div>\r\n                        </div>\r\n        \r\n                        \r\n                    </div>\r\n        \r\n                </div>\r\n        \r\n                <div class=\"profile-box info-box contact\" fxLayout=\"column\">\r\n        \r\n                    <header class=\"mat-accent-bg\">\r\n                        <div class=\"title\">General Information</div>\r\n                    </header>\r\n        \r\n                    <div class=\"content\">\r\n        \r\n                        <div class=\"info-line\">\r\n                            <div class=\"title\">Company Start Date</div>\r\n                            <div class=\"info\">{{details.start_date}}</div>\r\n                        </div>\r\n        \r\n                        <div class=\"info-line\">\r\n                            <div class=\"title\">UEN</div>\r\n                            <div class=\"info\">{{details.uen}}</div>\r\n                        </div>\r\n                        \r\n                        <div class=\"info-line\">\r\n                            <div class=\"title\">Tax Number</div>\r\n                            <div class=\"info\">{{details.tax_number}}</div>\r\n                        </div>\r\n                    </div>\r\n        \r\n                </div>\r\n        \r\n            </div>\r\n        \r\n            <div class=\"about-sidebar\" fxLayout=\"column\" fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"35\">\r\n        \r\n                <div class=\"profile-box info-box contact\" fxLayout=\"column\">\r\n        \r\n                    <header class=\"mat-accent-bg\">\r\n                        <div class=\"title\">Contact</div>\r\n                    </header>\r\n        \r\n                    <div class=\"content\">\r\n                        <div class=\"info-line\">\r\n                            <div class=\"title\">Address</div>\r\n                            <div class=\"info\">\r\n                                <p>{{details.address}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"info-line\">\r\n                            <div class=\"title\">Tel.</div>\r\n                            <div class=\"info\">\r\n                                <p>{{details.contact_number}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"info-line\">\r\n                            <div class=\"title\">Website</div>\r\n                            <div class=\"info\">\r\n                                <span>{{details.website}}</span>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"info-line\">\r\n                            <div class=\"title\">Emails</div>\r\n                            <div class=\"info\">\r\n                                <p>{{details.email}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n        \r\n                </div>\r\n        \r\n            </div>\r\n        \r\n        </div>\r\n        \r\n\r\n    </div>"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/details/details.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/details/details.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#profile .header {\n  height: 120px;\n  min-height: 120px;\n  max-height: 120px;\n  background-size: cover; }\n#profile .header .profile-image {\n    margin-right: 24px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .profile-image {\n        margin: 0 0 16px 0; } }\n#profile .header .name {\n    font-size: 34px;\n    color: #FFFFFF; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #profile .header .name {\n        margin-bottom: 32px; } }\n#profile .header .actions button {\n    text-transform: none;\n    padding: 0 16px;\n    height: 32px;\n    line-height: 32px;\n    margin: 0 0 0 8px; }\n#profile .content {\n  -webkit-box-flex: 1;\n          flex: 1; }\n#profile .content mat-tab-group {\n    height: 100%; }\n#profile .content mat-tab-group .mat-tab-body-wrapper {\n      -webkit-box-flex: 1;\n              flex-grow: 1; }\n#about {\n  max-width: 100%; }\n#about .about-content .general .location mat-icon {\n    line-height: 13px !important; }\n#about .about-content .work .job .company {\n    padding: 0 16px 0 0;\n    font-weight: 500; }\n#about .about-content .work .job .date {\n    color: rgba(0, 0, 0, 0.54); }\n#about .about-sidebar {\n    padding-left: 32px; }\n@media screen and (min-width: 600px) and (max-width: 959px) {\n      #about .about-sidebar {\n        padding: 8px; } }\n#about .about-sidebar .friends .content .friend {\n      padding: 4px; }\n#about .about-sidebar .groups .content .group {\n      margin-bottom: 16px; }\n#about .about-sidebar .groups .content .group:last-child {\n        margin-bottom: 0; }\n#about .about-sidebar .groups .content .group .logo {\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        margin-right: 16px; }\n#about .about-sidebar .groups .content .group .name {\n        font-weight: 500;\n        font-size: 15px; }\n#about .about-sidebar .groups .content .group .category,\n      #about .about-sidebar .groups .content .group .members {\n        color: rgba(0, 0, 0, 0.54); }\n#about .about-sidebar .groups .content .group .members {\n        margin-top: 16px; }\n.profile-box {\n  margin-bottom: 16px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.profile-box header {\n    padding: 16px; }\n.profile-box header .title {\n      font-size: 17px; }\n.profile-box header .more {\n      cursor: pointer; }\n.profile-box .content {\n    padding: 16px;\n    background-color: #FFF; }\n.profile-box footer {\n    padding: 8px;\n    border-top: 1px solid rgba(0, 0, 0, 0.08);\n    background-color: rgba(0, 0, 0, 0.06); }\n.profile-box.info-box .info-line {\n    margin-bottom: 24px; }\n.profile-box.info-box .info-line .title {\n      font-size: 15px;\n      font-weight: 500;\n      padding-bottom: 4px; }\n.profile-box.info-box .info-line .info p {\n      margin: 0px; }\n.profile-box.info-box .info-line:last-child {\n      margin-bottom: 0; }\n.mat-icon {\n  color: #fff;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/details/details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/details/details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
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

var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('details'),
        __metadata("design:type", Object)
    ], DetailsComponent.prototype, "details", void 0);
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'company-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/main/content/apps/company-details/tabs/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/main/content/apps/company-details/tabs/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/org-chart/org-chart.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/org-chart/org-chart.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"organization\" class=\"page-layout simple left-sidenav inner-sidenav\">\r\n  <div class=\"org-chart\" *ngIf=\"data\">\r\n    <ng2-org-chart [topEmployee]=\"data\"></ng2-org-chart>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/org-chart/org-chart.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/org-chart/org-chart.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ORGANIZATION CHART */\n.org-chart {\n  padding: 20px;\n  height: 100%;\n  background-color: #fbfdfe; }\n.oc-box {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: row !important;\n  border: none;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  -webkit-appearance: unset;\n  padding: 0px 20px 0px 0px !important; }\n.oc-img img {\n  width: 45px;\n  height: 45px;\n  border: none;\n  border-radius: 50%; }\n.oc-background {\n  background-color: #fff; }\n.oc-border {\n  border: 1px solid #0e0f0f; }\n.oc-name, .oc-designation {\n  font-family: 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;\n  line-height: 1.4 !important;\n  letter-spacing: -0.1px !important;\n  font-style: normal; }\n/* ORGANIZATION CHART */\n.oc-h-bar {\n  height: 22px !important; }\n.oc-h-bar-container .oc-h-bar {\n  height: 0px !important; }\n.oc-border {\n  border-color: #f2ab13; }\n.oc-box {\n  border-color: rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n.oc-name {\n  font-weight: bold;\n  font-size: 14px; }\n.oc-designation {\n  font-size: 12px;\n  font-style: italic;\n  color: #b5aeae; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/org-chart/org-chart.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/org-chart/org-chart.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OrgChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgChartComponent", function() { return OrgChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _company_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../company-details.service */ "./src/app/main/content/apps/company-details/company-details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrgChartComponent = /** @class */ (function () {
    function OrgChartComponent(apiloader, toast, comService) {
        this.apiloader = apiloader;
        this.toast = toast;
        this.comService = comService;
        this.orgChart = {
            'id': '2PAoqNL1q0',
            'first_name': 'Align',
            'last_name': 'Align',
            'designation': 'test',
            'department': null,
            'profile_image': '/assets/images/avatars/Abbott.jpg',
            'children': [
                {
                    'id': 'YB7obYjkDg',
                    'first_name': 'Sumit',
                    'last_name': 'Ahuja',
                    'designation': 'test',
                    'department': null,
                    'profile_image': '/assets/images/avatars/Abbott.jpg',
                    'children': [
                        {
                            'id': 'EBAonNo5PO',
                            'first_name': 'Sumit',
                            'last_name': 'Ahuja',
                            'designation': 'test',
                            'department': null,
                            'profile_image': '/assets/images/avatars/Abbott.jpg',
                            'children': []
                        },
                        {
                            'id': 'EBAonNo5PO',
                            'first_name': 'Sumit',
                            'last_name': 'Ahuja',
                            'designation': 'test',
                            'department': null,
                            'profile_image': '/assets/images/avatars/Abbott.jpg',
                            'children': []
                        }
                    ]
                },
                {
                    'id': 'YB7obYjkDg',
                    'first_name': 'Sumit',
                    'last_name': 'Ahuja',
                    'designation': 'test',
                    'department': null,
                    'profile_image': '/assets/images/avatars/Abbott.jpg',
                    'children': [
                        {
                            'id': 'EBAonNo5PO',
                            'first_name': 'Sumit',
                            'last_name': 'Ahuja',
                            'designation': 'test',
                            'department': null,
                            'profile_image': '/assets/images/avatars/Abbott.jpg',
                            'children': []
                        },
                        {
                            'id': 'EBAonNo5PO',
                            'first_name': 'Sumit',
                            'last_name': 'Ahuja',
                            'designation': 'test',
                            'department': null,
                            'profile_image': '/assets/images/avatars/Abbott.jpg',
                            'children': []
                        }
                    ]
                }
            ]
        };
    }
    OrgChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        this.comService.getData('organization-chart').subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                var chartData = _this.convertArray(response.data);
                _this.data = chartData[0];
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
        /* const chartData = this.convertArray(this.orgChart);
        this.data = chartData; */
    };
    OrgChartComponent.prototype.convertArray = function (data) {
        for (var i = 0; i < data.length; i++) {
            delete data[i].id;
            delete data[i].department;
            data[i].name = data[i]['first_name'] + ' ' + data[i]['last_name'];
            delete data[i].first_name;
            delete data[i].last_name;
            data[i].img = data[i].profile_image;
            delete data[i].profile_image;
            if (data[i].children) {
                data[i].subordinates = data[i].children;
                delete data[i].children;
                this.convertArray(data[i]['subordinates']);
            }
            else {
                data[i].subordinates = [];
            }
        }
        return data;
    };
    OrgChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'org-chart',
            template: __webpack_require__(/*! ./org-chart.component.html */ "./src/app/main/content/apps/company-details/tabs/org-chart/org-chart.component.html"),
            styles: [__webpack_require__(/*! ./org-chart.component.scss */ "./src/app/main/content/apps/company-details/tabs/org-chart/org-chart.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_2__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"],
            _company_details_service__WEBPACK_IMPORTED_MODULE_3__["CompanyDetailsService"]])
    ], OrgChartComponent);
    return OrgChartComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/user-list/user-dialog/user-dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/user-list/user-dialog/user-dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-16 m-0\" fusePerfectScrollbar>\r\n\r\n        <form [formGroup]=\"contactForm\">\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"first_name\" formControlName=\"first_name\" matInput placeholder=\"First Name\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"last_name\" formControlName=\"last_name\" matInput placeholder=\"Last Name\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"email\" formControlName=\"email\" matInput type=\"email\" placeholder=\"Email\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n            \r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input formControlName=\"phone\" matInput placeholder=\"Phone number\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"emergency_phone\" formControlName=\"emergency_phone\" matInput placeholder=\"Emergency Phone number\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <textarea name=\"address\" formControlName=\"address\" matInput placeholder=\"Address\" readonly></textarea>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"designation\" formControlName=\"designation\" matInput placeholder=\"Designation\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"department\" formControlName=\"department\" matInput placeholder=\"Department\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"employment_type\" formControlName=\"employment_type\" matInput placeholder=\"Employeement Type\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"education\" formControlName=\"education\" matInput placeholder=\"Education\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"past_experience\" formControlName=\"past_experience\" matInput placeholder=\"Past Experience\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"past_company\" formControlName=\"past_company\" matInput placeholder=\"Past Company\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <mat-label>Joining Date</mat-label>\r\n                    <input matInput [matDatepicker]=\"picker\" name=\"join_date\" formControlName=\"join_date\" placeholder=\"Choose a date\" readonly>\r\n                    <mat-datepicker-toggle matPrefix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"marital_status\" formControlName=\"marital_status\" matInput placeholder=\"Marital Status\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"gender\" formControlName=\"gender\" matInput placeholder=\"Gender\" readonly>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div  fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <mat-label>Date of Birth</mat-label>\r\n                    <input matInput [matDatepicker]=\"dob\" name=\"birth_date\" formControlName=\"birth_date\" placeholder=\"Choose a date\" readonly>\r\n                    <mat-datepicker-toggle matPrefix [for]=\"dob\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dob></mat-datepicker>\r\n                </mat-form-field>\r\n            </div>          \r\n            \r\n        </form>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/user-list/user-dialog/user-dialog.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/user-list/user-dialog/user-dialog.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.contact-form-dialog {\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .contact-form-dialog {\n      width: 100%; } }\n.contact-form-dialog .mat-dialog-container {\n    padding: 0; }\n.contact-form-dialog .mat-dialog-container .mat-toolbar {\n      -webkit-box-flex: 1;\n              flex: 1 0 auto;\n      min-height: initial; }\n.contact-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.contact-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n.data {\n  padding: 10px 0px; }\n.data .field {\n  font-size: 18px;\n  font-weight: 500;\n  display: inline-block; }\n.data .value {\n  font-size: 16px;\n  padding-left: 15px;\n  display: inline-block; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/user-list/user-dialog/user-dialog.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/user-list/user-dialog/user-dialog.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDialogComponent", function() { return UserDialogComponent; });
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



var UserDialogComponent = /** @class */ (function () {
    function UserDialogComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.user = data.contact;
        this.dialogTitle = 'Employee Details';
        this.contactForm = this.createContactForm();
    }
    UserDialogComponent.prototype.createContactForm = function () {
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
    UserDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-dialog',
            template: __webpack_require__(/*! ./user-dialog.component.html */ "./src/app/main/content/apps/company-details/tabs/user-list/user-dialog/user-dialog.component.html"),
            styles: [__webpack_require__(/*! ./user-dialog.component.scss */ "./src/app/main/content/apps/company-details/tabs/user-list/user-dialog/user-dialog.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], UserDialogComponent);
    return UserDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/user-list/user-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/user-list/user-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"dataSource\"\r\n           [@animateStagger]=\"{value:'50'}\">\r\n\r\n    <!-- Avatar Column -->\r\n    <ng-container cdkColumnDef=\"avatar\">\r\n        <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\">\r\n            <img class=\"avatar\" *ngIf=\"contact.avatar\" [alt]=\"contact.name\"\r\n                 [src]=\"contact.avatar\"/>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container cdkColumnDef=\"name\">\r\n        <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" (click)=\"openModal(contact)\">\r\n            <p class=\"text-truncate font-weight-600\">{{contact.first_name}} {{contact.last_name}}</p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Email Column -->\r\n    <ng-container cdkColumnDef=\"email\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Email</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\r\n            <p class=\"email text-truncate\">\r\n                {{contact.email}}\r\n            </p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Phone Column -->\r\n    <ng-container cdkColumnDef=\"phone\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Phone</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-sm>\r\n            <p class=\"phone text-truncate\">\r\n                {{contact.phone}}\r\n            </p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Status Column -->\r\n    <ng-container cdkColumnDef=\"status\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Status</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-md>     \r\n            <p class=\"status text-truncate pending\" *ngIf=\"!contact.is_verified\">Pending</p>\r\n            <p class=\"status text-truncate approved\" *ngIf=\"contact.is_verified\">Approved</p>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *cdkRowDef=\"let contact; columns: displayedColumns;\"\r\n             class=\"contact\"\r\n             [@animate]=\"{value:'*',params:{y:'100%'}}\">\r\n    </mat-row>\r\n</mat-table>"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/user-list/user-list.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/user-list/user-list.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nuser-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  width: 100%;\n  background: white; }\nuser-list .mat-table {\n    width: 100%;\n    background: transparent;\n    box-shadow: none; }\nuser-list .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n              flex: 0 1 64px;\n      padding-left: 18px; }\nuser-list .mat-table .mat-column-avatar {\n      -webkit-box-flex: 0;\n              flex: 0 1 64px; }\nuser-list .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n              flex: 0 1 80px; }\nuser-list .mat-table mat-cell:first-child {\n      padding-left: 15px !important; }\nuser-list .mat-table .pending {\n      color: red; }\nuser-list .mat-table .approved {\n      color: green; }\nuser-list .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px; }\nuser-list .mat-table .mat-row .mat-cell {\n        min-width: 0; }\nuser-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            user-list .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\n#add-contact-button {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  padding: 0;\n  z-index: 99; }\n.mat-header-cell {\n  display: -webkit-box !important;\n  display: flex !important; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/user-list/user-list.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/user-list/user-list.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: UserListComponent, FilesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDataSource", function() { return FilesDataSource; });
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-service.service */ "./src/app/main/content/apps/company-details/tabs/user-list/user-service.service.ts");
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-dialog/user-dialog.component */ "./src/app/main/content/apps/company-details/tabs/user-list/user-dialog/user-dialog.component.ts");
/* harmony import */ var _company_details_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../company-details.service */ "./src/app/main/content/apps/company-details/company-details.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
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











var UserListComponent = /** @class */ (function () {
    function UserListComponent(userservice, dialog, router, route, apiloader, toast, comService) {
        var _this = this;
        this.userservice = userservice;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.apiloader = apiloader;
        this.toast = toast;
        this.comService = comService;
        this.displayedColumns = ['avatar', 'name', 'email', 'phone', 'status'];
        this.onContactsChangedSubscription =
            this.userservice.onContactsChanged.subscribe(function (contacts) {
                _this.contacts = contacts;
                _this.checkboxes = {};
                contacts.map(function (contact) {
                    _this.checkboxes[contact.id] = false;
                });
            });
        this.onSelectedContactsChangedSubscription =
            this.userservice.onSelectedContactsChanged.subscribe(function (selectedContacts) {
                for (var id in _this.checkboxes) {
                    if (!_this.checkboxes.hasOwnProperty(id)) {
                        continue;
                    }
                    _this.checkboxes[id] = selectedContacts.includes(id);
                }
                _this.selectedContacts = selectedContacts;
            });
        this.onUserDataChangedSubscription =
            this.userservice.onUserDataChanged.subscribe(function (user) {
                _this.user = user;
            });
        this.onFilterChangedSubscription =
            this.userservice.onFilterChanged.subscribe(function () {
                _this.userservice.deselectContacts();
            });
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new FilesDataSource(this.userservice);
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getUsers(id);
        });
    };
    UserListComponent.prototype.getUsers = function (id) {
        var _this = this;
        this.apiloader.setLoader(true);
        this.comService.getData('users', { 'client_id': id }).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.dataSource = response.data;
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.onContactsChangedSubscription.unsubscribe();
        this.onFilterChangedSubscription.unsubscribe();
        this.onSelectedContactsChangedSubscription.unsubscribe();
        this.onUserDataChangedSubscription.unsubscribe();
    };
    UserListComponent.prototype.openModal = function (contact) {
        this.dialogRef = this.dialog.open(_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_8__["UserDialogComponent"], {
            panelClass: 'contact-form-dialog',
            data: {
                contact: contact
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
        });
    };
    /**
     * Delete Contact
     */
    UserListComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userservice.deleteContact(contact);
            }
            _this.confirmDialogRef = null;
        });
    };
    UserListComponent.prototype.onSelectedChange = function (contactId) {
        this.userservice.toggleSelectedContact(contactId);
    };
    UserListComponent.prototype.toggleStar = function (contactId) {
        if (this.user.starred.includes(contactId)) {
            this.user.starred.splice(this.user.starred.indexOf(contactId), 1);
        }
        else {
            this.user.starred.push(contactId);
        }
        this.userservice.updateUserData(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dialogContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], UserListComponent.prototype, "dialogContent", void 0);
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/main/content/apps/company-details/tabs/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/main/content/apps/company-details/tabs/user-list/user-list.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_4__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_user_service_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_10__["ToasterService"],
            _company_details_service__WEBPACK_IMPORTED_MODULE_9__["CompanyDetailsService"]])
    ], UserListComponent);
    return UserListComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    function FilesDataSource(userservice) {
        var _this = _super.call(this) || this;
        _this.userservice = userservice;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    FilesDataSource.prototype.connect = function () {
        return this.userservice.onContactsChanged;
    };
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/user-list/user-service.service.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/user-list/user-service.service.ts ***!
  \******************************************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.model */ "./src/app/main/content/apps/company-details/tabs/user-list/user.model.ts");
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





var UserService = /** @class */ (function () {
    function UserService(http) {
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
    UserService.prototype.resolve = function (route, state) {
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
    UserService.prototype.getContacts = function () {
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
                    return new _user_model__WEBPACK_IMPORTED_MODULE_4__["User"](contact);
                });
                _this.onContactsChanged.next(_this.contacts);
                resolve(_this.contacts);
            }, reject);
        });
    };
    UserService.prototype.getUserData = function () {
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
    UserService.prototype.toggleSelectedContact = function (id) {
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
    UserService.prototype.toggleSelectAll = function () {
        if (this.selectedContacts.length > 0) {
            this.deselectContacts();
        }
        else {
            this.selectContacts();
        }
    };
    UserService.prototype.selectContacts = function (filterParameter, filterValue) {
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
    UserService.prototype.updateContact = function (contact) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('api/contacts-contacts/' + contact.id, __assign({}, contact))
                .subscribe(function (response) {
                _this.getContacts();
                resolve(response);
            });
        });
    };
    UserService.prototype.updateUserData = function (userData) {
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
    UserService.prototype.deselectContacts = function () {
        this.selectedContacts = [];
        // Trigger the next event
        this.onSelectedContactsChanged.next(this.selectedContacts);
    };
    UserService.prototype.deleteContact = function (contact) {
        var contactIndex = this.contacts.indexOf(contact);
        this.contacts.splice(contactIndex, 1);
        this.onContactsChanged.next(this.contacts);
    };
    UserService.prototype.deleteSelectedContacts = function () {
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
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/company-details/tabs/user-list/user.model.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/content/apps/company-details/tabs/user-list/user.model.ts ***!
  \********************************************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");

var User = /** @class */ (function () {
    function User(contact) {
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
    return User;
}());



/***/ })

}]);
//# sourceMappingURL=company-details-company-details-module.js.map