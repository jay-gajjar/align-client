(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["performance-performance-module"],{

/***/ "./src/app/main/content/apps/performance/employee-performance/employee-performance.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/employee-performance/employee-performance.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HEADER -->\r\n<div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayout.gt-xs=\"row\"\r\n  fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n  <!-- APP TITLE -->\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <!-- <mat-icon class=\"logo-icon mr-16\">settings</mat-icon> -->\r\n      <span class=\"logo-text h1\">Employee Performance</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"search\">\r\n    <mat-form-field appearance=\"legacy\">\r\n      <mat-label>Legacy form field</mat-label>\r\n      <input matInput placeholder=\"Placeholder\">\r\n      <mat-icon matPrefix>search</mat-icon>\r\n    </mat-form-field>\r\n  </div>\r\n  <!-- / APP TITLE -->\r\n</div>\r\n<!-- / HEADER -->\r\n\r\n<div class=\"performance m-16\">\r\n  <div class=\"free\">\r\n\r\n    <!-- ============================================================== -->\r\n    <!-- Card Grid-->\r\n    <!-- ============================================================== -->\r\n    <div fxLayout=\"row wrap\">\r\n      <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\r\n        <table mat-table [dataSource]=\"dataSource1\" class=\"mat-elevation-z8\">\r\n\r\n          <!--- Note that these columns can be defined in any order.\r\n            The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n          <!-- Position Column -->\r\n          <!-- <ng-container matColumnDef=\"position\">\r\n        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n      </ng-container> -->\r\n\r\n          <!-- Name Column -->\r\n          <ng-container matColumnDef=\"name\">\r\n            <th mat-header-cell *matHeaderCellDef> Name </th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <img class=\"img_s\" src=\"assets/images/profile.png\"> {{element.first_name}} {{element.last_name}}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Weight Column -->\r\n          <ng-container matColumnDef=\"email\">\r\n            <th mat-header-cell *matHeaderCellDef> Email </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n          </ng-container>\r\n\r\n          <!-- Symbol Column -->\r\n          <ng-container matColumnDef=\"job_role\">\r\n            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Job Role </th>\r\n            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.job_role}} </td>\r\n          </ng-container>\r\n\r\n          <!-- Symbol Column -->\r\n          <ng-container matColumnDef=\"department\">\r\n            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Department </th>\r\n            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.department}} </td>\r\n          </ng-container>\r\n\r\n          <!-- Buttons Column -->\r\n          <ng-container matColumnDef=\"buttons\">\r\n            <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <button class=\"new_btn mr-lef\" (click)=\"redirect(element.id)\">\r\n                <mat-icon>visibility</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\"></tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/performance/employee-performance/employee-performance.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/employee-performance/employee-performance.component.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n@media screen and (max-width: 599px) {\n  :host .header {\n    padding: 16px; } }\n:host .header .search {\n  position: relative;\n  max-width: 780px; }\n:host .header .search .search-icon {\n    margin: 0 -24px 0 0; }\n:host .header .search .search-input {\n    padding: 0 0 0 48px;\n    background: none;\n    font-size: 24px;\n    line-height: 48px;\n    height: 48px;\n    color: #FFFFFF;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.3);\n    -webkit-transition: border-color 300ms ease;\n    transition: border-color 300ms ease; }\n:host .header .search .search-input:focus {\n      border-color: white; }\n:host .header .search .search-input::-webkit-input-placeholder {\n      color: #FFFFFF; }\n:host .content .result-info {\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .content .result-info .mat-title {\n    padding-right: 8px; }\n@media screen and (max-width: 599px) {\n    :host .content .result-info .pager {\n      margin-top: 16px; } }\n:host .content .result-info .pager .page-info {\n    font-weight: 500;\n    margin: 0 8px 0 0; }\n:host .content .simple-pagination {\n  margin: 32px 0; }\ntable.mat-elevation-z8 {\n  width: 95%;\n  margin: 10px 2%; }\n.page-layout.blank {\n  min-height: 50%; }\n.new_btn {\n  height: 24px;\n  width: 24px;\n  background-color: #f49f14;\n  border-radius: 50px;\n  padding-top: 4px;\n  cursor: pointer; }\n.mr-lef {\n  margin-right: 10px; }\n.new_btn .mat-icon {\n  height: 20px;\n  width: 20px;\n  font-size: 17px; }\n.img_s {\n  height: 25px;\n  width: 25px;\n  background-color: #f49f14;\n  border-radius: 50px;\n  margin-right: 6px; }\n.search {\n  position: relative;\n  top: 20px; }\n.search ::ng-deep .mat-form-field-flex {\n    -webkit-box-align: center;\n            align-items: center; }\n.search ::ng-deep .mat-form-field-flex .mat-form-field-infix {\n      border-top: 0; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/performance/employee-performance/employee-performance.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/employee-performance/employee-performance.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: EmployeePerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeePerformanceComponent", function() { return EmployeePerformanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/api.service */ "./src/@fuse/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    { name: 'John D', email: 'demo@gmail.com', job_role: 'Team Leader', department: 'Sales Manager' },
    { name: 'John D', email: 'demo@gmail.com', job_role: 'Team Leader', department: 'Research Manager' },
    { name: 'John D', email: 'demo@gmail.com', job_role: 'Team Leader', department: 'Research Manager' },
    { name: 'Beryllium', email: 'demo@gmail.com', job_role: 'Team Leader', department: 'Research Manager' },
    { name: 'Boron', email: 'demo@gmail.com', job_role: 'Team Leader', department: 'Research Manager' },
    { name: 'Carbon', email: 'demo@gmail.com', job_role: 'Team Leader', department: 'Research Manager' },
    { name: 'Nitrogen', email: 'demo@gmail.com', job_role: 'Team Leader', department: 'Research Manager' },
    { name: 'Oxygen', email: 'demo@gmail.com', job_role: 'Team Leader', department: 'Research Manager' },
    { name: 'Fluorine', email: 'demo@gmail.com', job_role: 'Team Leader', department: 'Research Manager' },
    { name: 'Neon', email: 'demo@gmail.com', job_role: 'Team Leader', department: 'Research Manager' },
];
var EmployeePerformanceComponent = /** @class */ (function () {
    function EmployeePerformanceComponent(router, apiService, apiloader) {
        this.router = router;
        this.apiService = apiService;
        this.apiloader = apiloader;
        this.displayedColumns1 = ['name', 'email', 'job_role', 'department', 'buttons'];
    }
    EmployeePerformanceComponent.prototype.ngOnInit = function () {
        this.getAllUsers();
    };
    EmployeePerformanceComponent.prototype.redirect = function (id) {
        this.router.navigate(['/apps/user-contacts/edit-employee', id]);
    };
    EmployeePerformanceComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        var id = sessionStorage.getItem('client_id');
        this.apiService.getData('users', { 'client_id': id }).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                var data = response.data;
                var users = [];
                for (var i = 0; i < data.length; i++) {
                    data[i].job_role = 'Manager';
                    //  data[i].department = 'Sales Manager';
                    if (data[i].role !== 'CLIENT_ADMIN') {
                        users.push(data[i]);
                    }
                }
                _this.dataSource1 = users;
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
        });
    };
    EmployeePerformanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-performance',
            template: __webpack_require__(/*! ./employee-performance.component.html */ "./src/app/main/content/apps/performance/employee-performance/employee-performance.component.html"),
            styles: [__webpack_require__(/*! ./employee-performance.component.scss */ "./src/app/main/content/apps/performance/employee-performance/employee-performance.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_1__["ApiLoaderService"]])
    ], EmployeePerformanceComponent);
    return EmployeePerformanceComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/performance/form-library/editpopup/editpopup.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/form-library/editpopup/editpopup.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mat-white-bg mat-elevation-z4\">\r\n    <div class=\"dialog-content-wrapper\">\r\n        <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n            <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n                <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                    <mat-icon>close</mat-icon>\r\n                </button>\r\n            </mat-toolbar-row>\r\n        </mat-toolbar>\r\n    \r\n        <div mat-dialog-content class=\"p-16 m-0\" fusePerfectScrollbar>\r\n            <form [formGroup]=\"myForm\">\r\n\r\n                <ng-container *ngIf=\"data.modalType == 'goal' || data.modalType == 'cvalue'\">\r\n                    <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\" *ngIf=\"data.modalType == 'goal'\">\r\n                        <mat-label class=\"label\">Category</mat-label>\r\n                        <mat-form-field appearance=\"outline\" fxFlex>\r\n                            <input formControlName=\"category\" matInput placeholder=\"Category\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\">\r\n                        <mat-label class=\"label\">Name</mat-label>\r\n                        <mat-form-field appearance=\"outline\" fxFlex>\r\n                            <input formControlName=\"name\" matInput placeholder=\"Name\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\">\r\n                        <mat-label class=\"label\">Description</mat-label>\r\n                        <mat-form-field appearance=\"outline\" fxFlex>\r\n                            <textarea  formControlName=\"description\" matInput placeholder=\"Description\" matAutosizeMinRows=5 matAutosizeMaxRows=10></textarea>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\">\r\n                        <mat-label class=\"label\">Measurement</mat-label>\r\n                        <mat-form-field appearance=\"outline\" fxFlex>\r\n                            <mat-select formControlName=\"measurement\"  placeholder=\"Measurement\" required>\r\n                                <mat-option value=\"$\">$</mat-option>\r\n                                <mat-option value=\"%\">%</mat-option>\r\n                                <mat-option value=\"number\">Number</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\">\r\n                        <mat-label class=\"label\">Weightage</mat-label>\r\n                        <mat-form-field appearance=\"outline\" fxFlex>\r\n                            <input type=\"number\" formControlName=\"weightage\" matInput placeholder=\"Weightage\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"data.modalType == 'tskill' || data.modalType == 'gskill'\">\r\n                    <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\">\r\n                        <mat-label class=\"label\">Name</mat-label>\r\n                        <mat-form-field appearance=\"outline\" fxFlex>\r\n                            <input formControlName=\"name\" matInput placeholder=\"Name\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\">\r\n                        <mat-label class=\"label\">Description</mat-label>\r\n                        <mat-form-field appearance=\"outline\" fxFlex>\r\n                            <textarea  formControlName=\"description\" matInput placeholder=\"Description\" matAutosizeMinRows=5 matAutosizeMaxRows=10></textarea>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\">\r\n                        <mat-label class=\"label\">Type</mat-label>                        \r\n                        <mat-form-field appearance=\"outline\" fxFlex>\r\n                            <input formControlName=\"type\" matInput placeholder=\"Type\" readonly>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\">\r\n                        <mat-label class=\"label\">Expected Proficiency Level</mat-label>\r\n                        <mat-form-field appearance=\"outline\" fxFlex>\r\n                            <input formControlName=\"expected_proficiency_level\" matInput placeholder=\"Expected Proficiency Level\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                </ng-container>\r\n\r\n            </form>    \r\n        </div>\r\n    \r\n        <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <button \r\n                  mat-raised-button\r\n                  [disabled]=\"myForm.invalid\"\r\n                  (click)=\"response(myForm.value)\"\r\n                  class=\"save-button mat-accent\"\r\n                  aria-label=\"SAVE\">\r\n              Submit\r\n          </button>    \r\n        </div>\r\n    </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/main/content/apps/performance/form-library/editpopup/editpopup.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/form-library/editpopup/editpopup.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label {\n  font-weight: 500px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/performance/form-library/editpopup/editpopup.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/form-library/editpopup/editpopup.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: EditpopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpopupComponent", function() { return EditpopupComponent; });
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



var EditpopupComponent = /** @class */ (function () {
    function EditpopupComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        if (data.modalType == "goal") {
            this.dialogTitle = "Goals";
            this.myForm = this.goalForm();
            if (data.details) {
                var formData = data.details;
                this.id = formData.id;
                this.myForm.patchValue({ category: formData.category, name: formData.name, description: formData.description,
                    measurement: formData.measurement, weightage: formData.weightage });
            }
        }
        else if (data.modalType == "cvalue") {
            this.dialogTitle = "Corporate Value";
            this.myForm = this.corValForm();
            if (data.details) {
                var formData = data.details;
                this.id = formData.id;
                this.myForm.patchValue({ name: formData.name, description: formData.description,
                    measurement: formData.measurement, weightage: formData.weightage });
            }
        }
        else if (data.modalType == "tskill") {
            this.dialogTitle = "Technical Skill";
            this.myForm = this.skillsForm();
            this.myForm.patchValue({ type: 'technical' });
            if (data.details) {
                var formData = data.details;
                this.id = formData.id;
                this.myForm.patchValue({ name: formData.name, description: formData.description,
                    expected_proficiency_level: formData.expected_proficiency_level });
            }
        }
        else {
            this.dialogTitle = "Generic Skill";
            this.myForm = this.skillsForm();
            this.myForm.patchValue({ type: 'generic' });
            if (data.details) {
                var formData = data.details;
                this.id = formData.id;
                this.myForm.patchValue({ name: formData.name, description: formData.description,
                    expected_proficiency_level: formData.expected_proficiency_level });
            }
        }
    }
    EditpopupComponent.prototype.ngOnInit = function () {
    };
    EditpopupComponent.prototype.goalForm = function () {
        return this.formBuilder.group({
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            measurement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            weightage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    EditpopupComponent.prototype.corValForm = function () {
        return this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            measurement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            weightage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    EditpopupComponent.prototype.skillsForm = function () {
        return this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            type: [''],
            expected_proficiency_level: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    };
    EditpopupComponent.prototype.response = function (data) {
        if (this.id) {
            data.id = this.id;
        }
        this.dialogRef.close(data);
    };
    EditpopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editpopup',
            template: __webpack_require__(/*! ./editpopup.component.html */ "./src/app/main/content/apps/performance/form-library/editpopup/editpopup.component.html"),
            styles: [__webpack_require__(/*! ./editpopup.component.scss */ "./src/app/main/content/apps/performance/form-library/editpopup/editpopup.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EditpopupComponent);
    return EditpopupComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/performance/form-library/form-library.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/form-library/form-library.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- HEADER -->\r\n <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\"\r\n fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n \r\n <!-- APP TITLE -->\r\n <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n   <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <!-- <mat-icon class=\"logo-icon mr-16\">settings</mat-icon> -->\r\n        <span class=\"logo-text h1\">Performance Form Library</span>\r\n    </div>\r\n \r\n </div>\r\n <!-- / APP TITLE -->\r\n </div>\r\n <!-- / HEADER -->\r\n\r\n <div class=\"performance m-16\">\r\n   <div class=\"free\">\r\n       \r\n          <!-- ============================================================== -->\r\n<!-- Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n   <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\r\n     <!-- <mat-card> -->\r\n       \r\n<mat-accordion class=\"example-headers-align\">\r\n       \r\n      <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\r\n         <mat-expansion-panel-header>\r\n           <mat-panel-title class=\"ch_color\">Performance Evaluation Form</mat-panel-title>\r\n           <mat-panel-description>\r\n             <mat-icon class=\"change_c\">arrow_drop_down</mat-icon>\r\n           </mat-panel-description>\r\n         </mat-expansion-panel-header>\r\n               \r\n         <form [formGroup]=\"firstFormGroup\">\r\n            <div fxLayout=\"row wrap\">\r\n                  <div fxFlex.gt-md=\"50\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Performance Evaluation Form</mat-label>\r\n                      <input matInput formControlName=\"name\" placeholder=\"( For i.e. Annual Review 2019 )\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div fxFlex.gt-md=\"23\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Industry</mat-label>\r\n                      <mat-select placeholder=\"Department\" formControlName=\"industry_id\">\r\n                          <mat-option *ngFor=\"let opt of industries\" [value]=\"opt.id\">{{opt.name}}</mat-option>\r\n                      </mat-select>\r\n                  </mat-form-field>\r\n                  </div>\r\n                  <div fxFlex.gt-md=\"23\" fxFlex=\"100\" class=\"mr_last change_height\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Job Role</mat-label>\r\n                          <mat-select placeholder=\"Job Role\" formControlName=\"job_role_id\">\r\n                              <mat-option *ngFor=\"let opt of jobRoles\" [value]=\"opt.id\">{{opt.name}}</mat-option>\r\n                            </mat-select>\r\n                      </mat-form-field>\r\n                  </div>\r\n                  \r\n               <!-- Start Goals Section -->   \r\n               <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"sect_ion\"> \r\n                  <div fxLayout=\"row wrap\"> \r\n                  <div fxFlex.gt-md=\"70\" fxFlex=\"100\">\r\n                      <mat-label class=\"lbl_cs\"><b>Section A : Goals</b></mat-label>\r\n                  </div>\r\n\r\n                  <div fxFlex.gt-md=\"30\" fxFlex=\"100\">\r\n                      <mat-label class=\"lbl_cs\">Total Section A Weightage : </mat-label>\r\n                      <input class=\"inp_change\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"goal_weightage\"\r\n                       value=\"\"> %\r\n                  </div>\r\n                </div> </div> \r\n                  <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"set_height\">\r\n                      <table mat-table [dataSource]=\"goalDataSource\" class=\"mat-elevation-z8\">\r\n\r\n                          <!-- goals Column -->\r\n                          <ng-container matColumnDef=\"category\">\r\n                              <th mat-header-cell *matHeaderCellDef> Category </th>\r\n                              <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\r\n                          </ng-container>\r\n                        \r\n                          <!-- goals Column -->\r\n                          <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Goal Name </th>\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                          </ng-container>\r\n                        \r\n                          <!-- goals_description Column -->\r\n                          <ng-container matColumnDef=\"description\">\r\n                            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Goals Description </th>\r\n                            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.description}} </td>\r\n                          </ng-container>\r\n                    \r\n                          <!-- mearsu_weight Column -->\r\n                          <ng-container matColumnDef=\"mearsu_weight\">\r\n                            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Measurement/Weightage </th>\r\n                            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.measurement}}/{{element.weightage}} </td>\r\n                          </ng-container>\r\n                    \r\n                    \r\n                          <!-- Buttons Column -->\r\n                          <ng-container matColumnDef=\"buttons\">\r\n                              <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                              <td mat-cell *matCellDef=\"let element\"> \r\n                                 \r\n                               <button class=\"new_btn mr-lef\" (click)=\"editpopup('goal', element, 'goals')\"><mat-icon>visibility</mat-icon></button>\r\n                               <button class=\"new_btn\" (click)=\"deleteItem('goal', element.id, 'goals')\"><mat-icon>delete</mat-icon></button>\r\n                               \r\n                               \r\n                                \r\n                              </td>\r\n                            </ng-container>\r\n                    \r\n                    \r\n                         \r\n                        \r\n                          <tr mat-header-row *matHeaderRowDef=\"goalColumns\"></tr>\r\n                          <tr mat-row *matRowDef=\"let row; columns: goalColumns;\"></tr>\r\n                        </table>\r\n                  </div>\r\n\r\n                  <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n                      <button mat-raised-button [matMenuTriggerFor]=\"goalMenu\" color=\"primary\" class=\"btn_new\">+   Select from Library Goals</button>\r\n                      <mat-menu #goalMenu=\"matMenu\" class=\"mm_menu\" xPosition=\"after\" [overlapTrigger]=\"false\">\r\n                        <h4 class=\"bg_cc\" mat-menu-item>Library Of Goals</h4>\r\n                        <div class=\"search\" (keydown.tab)=\"$event.stopPropagation()\" (click)=\"$event.stopPropagation(); false;\">\r\n                            <input class=\"search-txt\" (click)=\"$event.stopPropagation(); false;\" placeholder=\"Type here....\">\r\n                            <button class=\"btn-srch\"><mat-icon>search</mat-icon></button>\r\n                        </div>\r\n                        <div class=\"search-content\" (keydown.tab)=\"$event.stopPropagation()\">\r\n                            <form [formGroup]=\"goalListForm\">\r\n                              <div *ngFor=\"let data of goals\">\r\n                                <mat-checkbox [checked]=\"goalListForm.value.goalsArray.indexOf(data.id) != -1\" (change)=\"onChange('goal', data.id, $event.checked)\">{{data.name}}</mat-checkbox>\r\n                              </div>\r\n                            </form>\r\n                        </div>\r\n                      </mat-menu>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"openModal('goal', 'goals')\" class=\"btn_new\">+   Create New Goal (Free Text)</button>\r\n                  </div>\r\n\r\n\r\n                   <!-- Start Generic Skills Section -->  \r\n                   <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"sect_ion\"> \r\n                      <div fxLayout=\"row wrap\"> \r\n                        <div fxFlex.gt-md=\"70\" fxFlex=\"100\">\r\n                            <mat-label class=\"lbl_cs\"><b>Section B : Generic Skills</b></mat-label>\r\n                        </div>\r\n                       <div fxFlex.gt-md=\"30\" fxFlex=\"100\">\r\n                          <mat-label class=\"lbl_cs\">Total Section A Weightage : </mat-label>\r\n                          <input class=\"inp_change\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"generic_weightage\"\r\n                            value=\"\"> %\r\n                      </div>\r\n                  </div>\r\n                </div> \r\n\r\n                  <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"set_height\">\r\n                      <table mat-table [dataSource]=\"genericDataSource\" class=\"mat-elevation-z8\">\r\n                         <!-- title Column -->\r\n                          <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Title </th>\r\n                            <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n                          </ng-container>\r\n                        \r\n                          \r\n                        \r\n                          <!-- skills_description Column -->\r\n                          <ng-container matColumnDef=\"description\">\r\n                            <th mat-header-cell *matHeaderCellDef> Description Of Skills </th>\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                          </ng-container>\r\n                    \r\n                          <!-- level Column -->\r\n                          <ng-container matColumnDef=\"level\">\r\n                            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Expected Proficiency Level </th>\r\n                            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.expected_proficiency_level}} </td>\r\n                          </ng-container>\r\n                    \r\n                    \r\n                          <!-- Buttons Column -->\r\n                          <ng-container matColumnDef=\"buttons\">\r\n                              <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                              <td mat-cell *matCellDef=\"let element\"> \r\n                                 \r\n                               <button class=\"new_btn mr-lef\" (click)=\"editpopup('gskill', element, 'skills')\"><mat-icon>visibility</mat-icon></button>\r\n                               <button class=\"new_btn\" (click)=\"deleteItem('gskill', element.id, 'skills')\"><mat-icon>delete</mat-icon></button>\r\n                               \r\n                               \r\n                                \r\n                              </td>\r\n                            </ng-container>\r\n                    \r\n                    \r\n                         \r\n                        \r\n                          <tr mat-header-row *matHeaderRowDef=\"displayedColumns3\"></tr>\r\n                          <tr mat-row *matRowDef=\"let row; columns: displayedColumns3;\"></tr>\r\n                        </table>\r\n                  </div>\r\n\r\n\r\n                  <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n                      <button mat-raised-button [matMenuTriggerFor]=\"genericMenu\" color=\"primary\" class=\"btn_new\">+   Select from Library Of Generic Skill</button>\r\n                      <mat-menu #genericMenu=\"matMenu\" class=\"mm_menu\" xPosition=\"after\" [overlapTrigger]=\"false\">\r\n                          <h4 class=\"bg_cc\" mat-menu-item>Library Of Goals</h4>\r\n                          <div class=\"search\" (keydown.tab)=\"$event.stopPropagation()\" (click)=\"$event.stopPropagation(); false;\">\r\n                              <input class=\"search-txt\" (click)=\"$event.stopPropagation(); false;\" placeholder=\"Type here....\">\r\n                              <button class=\"btn-srch\"><mat-icon>search</mat-icon></button>\r\n                          </div>\r\n                          <div class=\"search-content\">\r\n                            <form [formGroup]=\"genericListForm\">\r\n                              <div *ngFor=\"let data of genericList\">\r\n                                <mat-checkbox [checked]=\"genericListForm.value.genericsArray.indexOf(data.id) != -1\" (change)=\"onChange('generic', data.id, $event.checked)\">{{data.name}}</mat-checkbox>\r\n                              </div>\r\n                            </form>                        \r\n                          </div>\r\n                        </mat-menu>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"openModal('gskill', 'skills')\" class=\"btn_new\">+   Create New Generic Skill (Free Text)</button>\r\n                  </div>\r\n\r\n\r\n                   <!-- Start Technical Skill Section --> \r\n                   <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"sect_ion\"> \r\n                      <div fxLayout=\"row wrap\">       \r\n                          <div fxFlex.gt-md=\"70\" fxFlex=\"100\">\r\n                              <mat-label class=\"lbl_cs\"><b>Section C : Technical Skills</b></mat-label>\r\n                          </div>\r\n\r\n                          <div fxFlex.gt-md=\"30\" fxFlex=\"100\">\r\n                              <mat-label class=\"lbl_cs\">Total Section A Weightage : </mat-label>\r\n                              <input class=\"inp_change\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"technical_weightage\"\r\n                                value=\"\"> %\r\n                          </div>\r\n                      </div>\r\n                    </div>  \r\n\r\n                  <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"set_height\">\r\n                      <table mat-table [dataSource]=\"techDataSource\" class=\"mat-elevation-z8\">\r\n                         <!-- title Column -->\r\n                          <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Title </th>\r\n                            <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n                          </ng-container>\r\n                        \r\n                          \r\n                        \r\n                          <!-- skills_description Column -->\r\n                          <ng-container matColumnDef=\"description\">\r\n                            <th mat-header-cell *matHeaderCellDef> Description Of Skills </th>\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                          </ng-container>\r\n                    \r\n                          <!-- level Column -->\r\n                          <ng-container matColumnDef=\"level\">\r\n                            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Expected Proficiency Level </th>\r\n                            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.expected_proficiency_level}} </td>\r\n                          </ng-container>\r\n                    \r\n                    \r\n                          <!-- Buttons Column -->\r\n                          <ng-container matColumnDef=\"buttons\">\r\n                              <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                              <td mat-cell *matCellDef=\"let element\"> \r\n                                 \r\n                               <button class=\"new_btn mr-lef\" (click)=\"editpopup('tskill', element, 'skills')\"><mat-icon>visibility</mat-icon></button>\r\n                               <button class=\"new_btn\" (click)=\"deleteItem('tskill', element.id, 'skills')\"><mat-icon>delete</mat-icon></button>\r\n                               \r\n                               \r\n                                \r\n                              </td>\r\n                            </ng-container>\r\n                    \r\n                    \r\n                         \r\n                        \r\n                          <tr mat-header-row *matHeaderRowDef=\"displayedColumns3\"></tr>\r\n                          <tr mat-row *matRowDef=\"let row; columns: displayedColumns3;\"></tr>\r\n                        </table>\r\n                  </div>\r\n\r\n                  <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n                      <button mat-raised-button [matMenuTriggerFor]=\"menu\" color=\"primary\" class=\"btn_new \">+   Select from Library Technical Skill</button>\r\n                      <mat-menu #menu=\"matMenu\" class=\"mm_menu\" xPosition=\"after\" [overlapTrigger]=\"false\">\r\n                        <h4 class=\"bg_cc\" mat-menu-item>Library Of Goals</h4>\r\n                        <div class=\"search\" (keydown.tab)=\"$event.stopPropagation()\" (click)=\"$event.stopPropagation(); false;\">\r\n                            <input class=\"search-txt\" (click)=\"$event.stopPropagation(); false;\" placeholder=\"Type here....\">\r\n                            <button class=\"btn-srch\"><mat-icon>search</mat-icon></button>\r\n                        </div>\r\n                        <div class=\"search-content\">\r\n                          <form [formGroup]=\"techListForm\">\r\n                            <div *ngFor=\"let data of techList\">\r\n                              <mat-checkbox [checked]=\"techListForm.value.techArray.indexOf(data.id) != -1\" (change)=\"onChange('tech', data.id, $event.checked)\">{{data.name}}</mat-checkbox>\r\n                            </div>\r\n                          </form>                      \r\n                        </div>\r\n                      </mat-menu>\r\n                      <!-- <button mat-raised-button color=\"primary\" class=\"btn_new\">+   Select from Library Technical Skill</button> -->\r\n                      <button mat-raised-button color=\"primary\"  (click)=\"openModal('tskill', 'skills')\" class=\"btn_new\">+   Create New Technical Skill (Free Text)</button>\r\n                  </div>\r\n\r\n\r\n\r\n                   <!-- Start Corporate Values Section -->\r\n                   <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"sect_ion\"> \r\n                      <div fxLayout=\"row wrap\"> \r\n                        <div fxFlex.gt-md=\"70\" fxFlex=\"100\">\r\n                            <mat-label class=\"lbl_cs\"><b>Section D : Corporate Values</b></mat-label>\r\n                        </div>\r\n                        <div fxFlex.gt-md=\"30\" fxFlex=\"100\">\r\n                            <mat-label class=\"lbl_cs\">Total Section D Weightage : </mat-label>\r\n                            <input class=\"inp_change\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"corporate_weightage\"\r\n                                value=\"\"> %\r\n                        </div>\r\n                      </div>\r\n                   </div>\r\n\r\n                  <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"set_height\">\r\n                      <table mat-table [dataSource]=\"corValDataSource\" class=\"mat-elevation-z8\">\r\n                         <!-- category Column -->\r\n                          <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Title </th>\r\n                            <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n                          </ng-container>\r\n                        \r\n                          <!-- goals_description Column -->\r\n                          <ng-container matColumnDef=\"description\">\r\n                            <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                          </ng-container>\r\n                    \r\n                          <!-- mearsu_weight Column -->\r\n                          <ng-container matColumnDef=\"mearsu_weight\">\r\n                            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Mearsurement/Weightage </th>\r\n                            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.measurement}}/{{element.weightage}} </td>\r\n                          </ng-container>\r\n                    \r\n                    \r\n                          <!-- Buttons Column -->\r\n                          <ng-container matColumnDef=\"buttons\">\r\n                              <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                              <td mat-cell *matCellDef=\"let element\">\r\n                                 \r\n                               <button class=\"new_btn mr-lef\" (click)=\"editpopup('cvalue', element, 'corporate-values')\"><mat-icon>visibility</mat-icon></button>\r\n                               <button class=\"new_btn\" (click)=\"deleteItem('cvalue', element.id, 'corporate-values')\"><mat-icon>delete</mat-icon></button>                                                             \r\n                                \r\n                              </td>\r\n                            </ng-container>\r\n                    \r\n                    \r\n                         \r\n                        \r\n                          <tr mat-header-row *matHeaderRowDef=\"calValColumns\"></tr>\r\n                          <tr mat-row *matRowDef=\"let row; columns: calValColumns;\"></tr>\r\n                        </table>\r\n                  </div>\r\n\r\n                  <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n                      <button mat-raised-button [matMenuTriggerFor]=\"corporateMenu\" color=\"primary\" class=\"btn_new\">+   Select from Library Corporate Values</button>\r\n                      <mat-menu #corporateMenu=\"matMenu\" class=\"mm_menu\" xPosition=\"after\" [overlapTrigger]=\"false\">\r\n                          <h4 class=\"bg_cc\" mat-menu-item>Library Of Goals</h4>\r\n                          <div class=\"search\" (keydown.tab)=\"$event.stopPropagation()\" (click)=\"$event.stopPropagation(); false;\">\r\n                              <input class=\"search-txt\" (click)=\"$event.stopPropagation(); false;\" placeholder=\"Type here....\">\r\n                              <button class=\"btn-srch\"><mat-icon>search</mat-icon></button>\r\n                          </div>\r\n                          <div class=\"search-content\">\r\n                            <form [formGroup]=\"cvalListForm\">\r\n                              <div *ngFor=\"let data of cvalList\">\r\n                                <mat-checkbox [checked]=\"cvalListForm.value.cvalArray.indexOf(data.id) != -1\" (change)=\"onChange('cval', data.id, $event.checked)\">{{data.name}}</mat-checkbox>\r\n                              </div>\r\n                            </form>\r\n                          </div>\r\n                      </mat-menu>\r\n                      <button mat-raised-button color=\"primary\" (click)=\"openModal('cvalue', 'corporate-values')\" class=\"btn_new\">+   Create New Corporate Values(Free Text)</button>\r\n                  </div>\r\n                  \r\n\r\n              </div>\r\n            </form>\r\n       \r\n     \r\n         <mat-action-row>\r\n          \r\n         </mat-action-row>\r\n       </mat-expansion-panel>\r\n\r\n\r\n       <mat-expansion-panel class=\"bg_c\" [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title class=\"ch_color\">Set Performance Appraisal Cycle</mat-panel-title>\r\n            <mat-panel-description>\r\n              <mat-icon class=\"change_c\">arrow_drop_down</mat-icon>\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <form [formGroup]=\"firstFormGroup\">\r\n      <div fxLayout=\"row wrap\">\r\n         \r\n        <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"change_height\">\r\n          <div class=\"top-btns\">\r\n            <button class=\"first\" mat-raised-button>\r\n              <mat-icon>add</mat-icon> Select from Library\r\n            </button>\r\n            <button class=\"second\" mat-raised-button>\r\n              <mat-icon>add</mat-icon> Create New Performance Management Cycle\r\n            </button>\r\n          </div>\r\n          <mat-form-field appearance=\"outline\">\r\n              <mat-label>Name Of Cycle</mat-label>\r\n            <input matInput placeholder=\"( For i.e. Annual Review 2019 )\">\r\n          </mat-form-field>\r\n          </div>\r\n         \r\n          <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"change_height\">\r\n            <mat-form-field appearance=\"outline\">\r\n                <mat-label>Description</mat-label>\r\n              <input matInput placeholder=\"Description\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n              <mat-label class=\"lbl_cs\"><b>Performance Management Period(for entire appraisal cycle)</b></mat-label>\r\n          </div>\r\n \r\n          <div fxFlex.gt-md=\"25\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Start Date</mat-label>\r\n                  <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" placeholder=\"Start Date\">\r\n                  <mat-icon class=\"mt_i\" matSuffix>calendar_today</mat-icon>\r\n              </mat-form-field>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n              \r\n          </div>\r\n \r\n          <div fxFlex.gt-md=\"25\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label>End Date</mat-label>\r\n                  <input matInput placeholder=\"Date\" [matDatepicker]=\"picker1\" (focus)=\"picker1.open()\" placeholder=\"End Date\">\r\n                  <mat-icon class=\"mt_i\" matSuffix>calendar_today</mat-icon>\r\n              </mat-form-field>\r\n              <mat-datepicker #picker1></mat-datepicker>\r\n          </div>\r\n \r\n          <div fxFlex.gt-md=\"47\" fxFlex=\"100\" class=\"mr_last change_height\">\r\n              <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Time Zone</mat-label>\r\n                <mat-select placeholder=\"Time Zone\">\r\n                  <mat-option value=\"option\">Option</mat-option>\r\n                  <mat-option value=\"option\">Option2</mat-option>\r\n                  <mat-option value=\"option\">Option3</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n \r\n            <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n                <mat-label class=\"lbl_cs\"><b>Performance Evaluation Period-User(for user to submit form)</b></mat-label>\r\n            </div>\r\n  \r\n            <div fxFlex.gt-md=\"22\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Start Date</mat-label>\r\n                    <input matInput placeholder=\"Date\" [matDatepicker]=\"picker2\" (focus)=\"picker2.open()\" placeholder=\"Start Date\">\r\n                    <mat-icon class=\"mt_i\" matSuffix>calendar_today</mat-icon>\r\n                </mat-form-field>\r\n                <mat-datepicker #picker2></mat-datepicker>\r\n                \r\n            </div>\r\n  \r\n            <div fxFlex.gt-md=\"22\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>End Date</mat-label>\r\n                    <input matInput placeholder=\"Date\" [matDatepicker]=\"picker3\" (focus)=\"picker3.open()\" placeholder=\"End Date\">\r\n                    <mat-icon class=\"mt_i\" matSuffix>calendar_today</mat-icon>\r\n                </mat-form-field>\r\n                <mat-datepicker #picker3></mat-datepicker>\r\n            </div>\r\n  \r\n            <div fxFlex.gt-md=\"26\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Time Zone</mat-label>\r\n                  <mat-select placeholder=\"Time Zone\">\r\n                    <mat-option value=\"option\">Option</mat-option>\r\n                    <mat-option value=\"option\">Option2</mat-option>\r\n                    <mat-option value=\"option\">Option3</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n \r\n              <div fxFlex.gt-md=\"26\" fxFlex=\"100\" class=\"mr_last change_height\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Reminder</mat-label>\r\n                    <mat-select placeholder=\"Reminder\">\r\n                        <mat-option value=\"1\">1 day before</mat-option>\r\n                        <mat-option value=\"2\">2 day before</mat-option>\r\n                        <mat-option value=\"3\">3 day before</mat-option>\r\n                        <mat-option value=\"7\">week</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n \r\n                <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n                <mat-label class=\"lbl_cs\"><b>Performance Evaluation Period-Manager Low(to review User's Form)</b></mat-label>\r\n                </div>\r\n      \r\n                <div fxFlex.gt-md=\"22\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Start Date</mat-label>\r\n                        <input matInput placeholder=\"Date\" [matDatepicker]=\"picker4\" (focus)=\"picker4.open()\" placeholder=\"Start Date\">\r\n                        <mat-icon class=\"mt_i\" matSuffix>calendar_today</mat-icon>\r\n                    </mat-form-field>\r\n                    <mat-datepicker #picker4></mat-datepicker>\r\n                    \r\n                </div>\r\n      \r\n                <div fxFlex.gt-md=\"22\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>End Date</mat-label>\r\n                        <input matInput placeholder=\"Date\" [matDatepicker]=\"picker5\" (focus)=\"picker5.open()\" placeholder=\"End Date\">\r\n                        <mat-icon class=\"mt_i\" matSuffix>calendar_today</mat-icon>\r\n                    </mat-form-field>\r\n                    <mat-datepicker #picker5></mat-datepicker>\r\n                </div>\r\n      \r\n                <div fxFlex.gt-md=\"26\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Time Zone</mat-label>\r\n                      <mat-select placeholder=\"Time Zone\">\r\n                        <mat-option value=\"option\">Option</mat-option>\r\n                        <mat-option value=\"option\">Option2</mat-option>\r\n                        <mat-option value=\"option\">Option3</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n    \r\n                  <div fxFlex.gt-md=\"26\" fxFlex=\"100\" class=\"mr_last change_height\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Reminder</mat-label>\r\n                        <mat-select placeholder=\"Reminder\">\r\n                          <mat-option value=\"1\">1 day before</mat-option>\r\n                          <mat-option value=\"2\">2 day before</mat-option>\r\n                          <mat-option value=\"3\">3 day before</mat-option>\r\n                          <mat-option value=\"7\">week</mat-option>\r\n                       </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n\r\n\r\n                    <div fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n                        <mat-label class=\"lbl_cs\"><b>Performance Evaluation Period- Manager High(to review User's Form with Manager Low's input)</b></mat-label>\r\n                        </div>\r\n              \r\n                        <div fxFlex.gt-md=\"22\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Start Date</mat-label>\r\n                                <input matInput placeholder=\"Date\" [matDatepicker]=\"picker6\" (focus)=\"picker6.open()\" placeholder=\"Start Date\">\r\n                                <mat-icon class=\"mt_i\" matSuffix>calendar_today</mat-icon>\r\n                            </mat-form-field>\r\n                            <mat-datepicker #picker6></mat-datepicker>\r\n                            \r\n                        </div>\r\n              \r\n                        <div fxFlex.gt-md=\"22\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>End Date</mat-label>\r\n                                <input matInput placeholder=\"Date\" [matDatepicker]=\"picker7\" (focus)=\"picker7.open()\" placeholder=\"End Date\">\r\n                                <mat-icon class=\"mt_i\" matSuffix>calendar_today</mat-icon>\r\n                            </mat-form-field>\r\n                            <mat-datepicker #picker7></mat-datepicker>\r\n                        </div>\r\n              \r\n                        <div fxFlex.gt-md=\"26\" fxFlex=\"100\" class=\"mr_tp change_height\">\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Time Zone</mat-label>\r\n                              <mat-select placeholder=\"Time Zone\">\r\n                                <mat-option value=\"option\">Option</mat-option>\r\n                                <mat-option value=\"option\">Option2</mat-option>\r\n                                <mat-option value=\"option\">Option3</mat-option>\r\n                              </mat-select>\r\n                            </mat-form-field>\r\n                          </div>\r\n            \r\n                          <div fxFlex.gt-md=\"26\" fxFlex=\"100\" class=\"mr_last change_height\">\r\n                              <mat-form-field appearance=\"outline\">\r\n                                  <mat-label>Reminder</mat-label>\r\n                                <mat-select placeholder=\"Reminder\">\r\n                                  <mat-option value=\"1\">1 day before</mat-option>\r\n                                  <mat-option value=\"2\">2 day before</mat-option>\r\n                                  <mat-option value=\"3\">3 day before</mat-option>\r\n                                  <mat-option value=\"7\">week</mat-option>\r\n                               </mat-select>\r\n                              </mat-form-field>\r\n                            </div>\r\n       \r\n          </div>\r\n          </form>\r\n        </mat-expansion-panel>\r\n     \r\n     </mat-accordion>\r\n     <!-- </mat-card> -->\r\n     <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"example-button-row\">                        \r\n        <button mat-raised-button *ngIf=\"formId\" (click)=\"deleteform()\" color=\"warn\">Delete</button>\r\n        <button mat-raised-button color=\"accent\">Save as Draft</button>\r\n        <button mat-raised-button (click)=\"onSubmit(firstFormGroup.value)\">Save & Confirm</button>\r\n      </div>\r\n   </div>\r\n </div>\r\n\r\n \r\n\r\n \r\n             \r\n       \r\n   </div>\r\n </div>"

/***/ }),

/***/ "./src/app/main/content/apps/performance/form-library/form-library.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/form-library/form-library.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#editemp {\n  width: 384px;\n  max-width: 384px;\n  padding: 0px;\n  text-align: center;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n    #editemp {\n      padding: 0px;\n      width: 100%; } }\n#editemp .logo {\n    width: 128px;\n    margin: 32px auto; }\n#editemp .title {\n    font-size: 12px;\n    color: #ccc;\n    margin: 16px 32px 32px 30px; }\n#editemp form {\n    width: 100%;\n    text-align: left; }\n#editemp form mat-form-field {\n      width: 100%; }\n#editemp form .submit-button {\n      width: 220px;\n      margin: 16px auto;\n      display: block; }\n@media screen and (max-width: 599px) {\n        #editemp form .submit-button {\n          width: 90%; } }\n#editemp .login {\n    margin: 32px auto 24px auto;\n    width: 250px;\n    font-weight: 500; }\n#editemp .login .text {\n      margin-right: 8px; }\n.reset {\n  display: block;\n  width: 100%;\n  left: 30%;\n  float: left;\n  position: relative; }\n.editemp .mat-card {\n  border: 1px solid #fa7915;\n  border-radius: 10px; }\n.editemp .mat-card-header {\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #f2ab13;\n  padding: 14px 0 0 0;\n  border-radius: 10px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n.editemp .mat-card-title {\n  font-size: 20px;\n  font-weight: 500; }\n.editemp .mat-card-subtitle {\n  font-size: 20px;\n  color: #000; }\n.editemp .mat-card-title, .editemp .mat-card-subtitle {\n  margin-bottom: 5px; }\n.editemp .mat-card-content {\n  text-align: left;\n  padding: 20px; }\n.editemp .mat-card-content ul {\n  list-style: none;\n  margin: 0; }\n.editemp .mat-card-content ul li {\n  font-size: 18px;\n  padding: 5px 0px; }\n.editemp .mat-card-content ul li:before {\n  font-weight: 100;\n  margin-left: -1em;\n  background-color: #fb7215;\n  border-radius: 50%;\n  content: \"\";\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 2px;\n  height: 8px;\n  width: 8px; }\n.editemp .free {\n  width: 100%;\n  display: block;\n  float: left;\n  padding: 20px; }\n.editemp .paid {\n  width: 60%;\n  display: block;\n  float: left;\n  padding: 20px; }\n.editemp .paid .left, .editemp .paid .right {\n    width: 50%;\n    display: block;\n    float: left; }\n.new_r {\n  float: left;\n  margin-left: 20px;\n  margin-top: 20px !important; }\ndiv.mat-horizontal-stepper-header-container {\n  display: none !important; }\n.rr_right {\n  float: right; }\n@media only screen and (max-width: 767px) {\n  .editemp {\n    margin: 0px !important; }\n    .editemp .free, .editemp .paid, .editemp .left, .editemp .right {\n      width: 100% !important; }\n    .editemp .free .mat-card-content {\n      height: 230px; }\n    .editemp .paid .mat-card-content {\n      height: 600px; } }\n.example-headers-align .mat-expansion-panel-header-description {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center; }\nmat-form-field {\n  display: block !important; }\n.mt_i {\n  font-size: 24px !important; }\n.mat-expansion-panel-header {\n  background-color: black !important;\n  margin-bottom: 10px;\n  border-radius: 11px; }\n.mat-expansion-panel-content {\n  background-color: white !important; }\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: none !important; }\n.mat-expansion-panel-header-title {\n  color: white !important; }\n.change_c {\n  color: white !important;\n  font-size: 36px;\n  height: 36px;\n  width: 36px; }\n.lbl_cs {\n  float: left; }\n.mr_tp {\n  margin-top: 15px;\n  margin-right: 10px; }\n.mr_last {\n  margin-top: 15px; }\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px; }\n.example-button-row button:last-child {\n  margin-top: 10px; }\n.example-button-row {\n  text-align: center;\n  margin-top: 10px; }\n.ch_color {\n  padding-top: 7px; }\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 10px 0 10px 0 !important;\n  margin-top: -10px !important; }\n.sect_ion {\n  margin-top: 20px;\n  background-color: antiquewhite;\n  padding: 13px;\n  border-radius: 12px; }\n.inp_change {\n  height: 25px;\n  width: 33px;\n  background-color: white;\n  margin-left: 20px;\n  padding: 5px; }\ntable {\n  width: 100%; }\n.page-layout.blank {\n  min-height: 50%; }\n.new_btn {\n  height: 24px;\n  width: 24px;\n  background-color: #f49f14;\n  border-radius: 50px;\n  padding-top: 4px; }\n.mr-lef {\n  margin-right: 10px; }\n.new_btn .mat-icon {\n  height: 20px;\n  width: 20px;\n  font-size: 17px; }\n.mr_ch {\n  margin-top: 50px;\n  height: 37px; }\n.img_s {\n  height: 25px;\n  width: 25px;\n  background-color: #f49f14;\n  border-radius: 50px;\n  margin-right: 6px; }\n.set_height {\n  max-height: 300px;\n  overflow-y: scroll;\n  margin-top: 10px; }\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 500; }\n.btn_new {\n  background-color: #000;\n  color: #FFFFFF;\n  margin-left: 20px;\n  margin-top: 20px;\n  border-radius: 50px; }\n.bg_cc {\n  background-color: #000;\n  color: #FFFFFF;\n  margin-top: -6px;\n  margin-bottom: 0px; }\n.change_se {\n  margin: 13px;\n  border-radius: 20px;\n  padding: 6px;\n  border: 1px ridge gray;\n  height: 49px; }\n.search {\n  padding: 15px 10px 10px 10px;\n  display: -webkit-box;\n  display: flex; }\n.search .search-txt {\n    padding: 10px;\n    font-size: 17px;\n    border: 1px solid black;\n    float: left;\n    width: 80%;\n    border-right: none;\n    background: #ffffff;\n    border-top-left-radius: 20px;\n    border-bottom-left-radius: 20px; }\n.search .btn-srch {\n    border: 1px solid;\n    border-left: none;\n    padding: 5px;\n    width: 20%;\n    border-bottom-right-radius: 20px;\n    border-top-right-radius: 20px;\n    cursor: pointer; }\n.search-content {\n  padding: 0px 10px; }\n.search-content .mat-radio-group {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n.search-content .mat-radio-group .srchrdio {\n      padding: 10px 5px; }\n.top-btns {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 0px 30px 0px; }\n.top-btns .first {\n    background-color: #f49f14;\n    width: 300px;\n    text-align: left; }\n.top-btns .second {\n    background-color: #ccc; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/performance/form-library/form-library.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/form-library/form-library.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FormLibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormLibraryComponent", function() { return FormLibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _editpopup_editpopup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editpopup/editpopup.component */ "./src/app/main/content/apps/performance/form-library/editpopup/editpopup.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/api.service */ "./src/@fuse/services/api.service.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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








var FormLibraryComponent = /** @class */ (function () {
    function FormLibraryComponent(toast, fb, apiService, dialog, apiloader, route, router) {
        var _this = this;
        this.toast = toast;
        this.fb = fb;
        this.apiService = apiService;
        this.dialog = dialog;
        this.apiloader = apiloader;
        this.route = route;
        this.router = router;
        this.goalColumns = ['category', 'name', 'description', 'mearsu_weight', 'buttons'];
        this.calValColumns = ['name', 'description', 'mearsu_weight', 'buttons'];
        this.displayedColumns3 = ['name', 'description', 'level', 'buttons'];
        this.isLinear = false;
        this.hide = false;
        this.step = 1;
        this.route.params.subscribe(function (params) {
            _this.formId = params['formId'];
        });
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'auto'
        });
    }
    FormLibraryComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    FormLibraryComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            industry_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            job_role_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.goalListForm = this.fb.group({
            goalsArray: this.fb.array([])
        });
        this.genericListForm = this.fb.group({
            genericsArray: this.fb.array([])
        });
        this.techListForm = this.fb.group({
            techArray: this.fb.array([])
        });
        this.cvalListForm = this.fb.group({
            cvalArray: this.fb.array([])
        });
        if (this.formId) {
            this.getGoalForm(this.formId);
        }
        this.getIndustries();
        this.getJobRoles();
        this.getGoals();
        this.getCorVals();
        this.getSkills();
    };
    FormLibraryComponent.prototype.onChange = function (type, id, isChecked) {
        if (type == 'goal') {
            var goalFormArray = this.goalListForm.controls.goalsArray;
            if (isChecked) {
                goalFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](id));
            }
            else {
                var index = goalFormArray.controls.findIndex(function (x) { return x.value == id; });
                goalFormArray.removeAt(index);
            }
            var data = [];
            for (var _i = 0, _a = this.goals; _i < _a.length; _i++) {
                var itm = _a[_i];
                for (var _b = 0, _c = this.goalListForm.value.goalsArray; _b < _c.length; _b++) {
                    var j = _c[_b];
                    if (j == itm.id) {
                        data.push(itm);
                    }
                }
            }
            this.goalDataSource = data;
        }
        else if (type == 'generic') {
            var genericFormArray = this.genericListForm.controls.genericsArray;
            if (isChecked) {
                genericFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](id));
            }
            else {
                var index = genericFormArray.controls.findIndex(function (x) { return x.value == id; });
                genericFormArray.removeAt(index);
            }
            var data = [];
            for (var _d = 0, _e = this.genericList; _d < _e.length; _d++) {
                var itm = _e[_d];
                for (var _f = 0, _g = this.genericListForm.value.genericsArray; _f < _g.length; _f++) {
                    var j = _g[_f];
                    if (j == itm.id) {
                        data.push(itm);
                    }
                }
            }
            this.genericDataSource = data;
        }
        else if (type == 'tech') {
            var techFormArray = this.techListForm.controls.techArray;
            if (isChecked) {
                techFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](id));
            }
            else {
                var index = techFormArray.controls.findIndex(function (x) { return x.value == id; });
                techFormArray.removeAt(index);
            }
            var data = [];
            for (var _h = 0, _j = this.techList; _h < _j.length; _h++) {
                var itm = _j[_h];
                for (var _k = 0, _l = this.techListForm.value.techArray; _k < _l.length; _k++) {
                    var j = _l[_k];
                    if (j == itm.id) {
                        data.push(itm);
                    }
                }
            }
            this.techDataSource = data;
        }
        else {
            var cvalFormArray = this.cvalListForm.controls.cvalArray;
            if (isChecked) {
                cvalFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](id));
            }
            else {
                var index = cvalFormArray.controls.findIndex(function (x) { return x.value == id; });
                cvalFormArray.removeAt(index);
            }
            var data = [];
            for (var _m = 0, _o = this.cvalList; _m < _o.length; _m++) {
                var itm = _o[_m];
                for (var _p = 0, _q = this.cvalListForm.value.cvalArray; _p < _q.length; _p++) {
                    var j = _q[_p];
                    if (j == itm.id) {
                        data.push(itm);
                    }
                }
            }
            this.corValDataSource = data;
        }
    };
    FormLibraryComponent.prototype.getGoalForm = function (id) {
        var _this = this;
        this.apiService.getData('goal-setting-form/' + id).subscribe(function (response) {
            if (response.status == 'success') {
                var data = response.data;
                _this.firstFormGroup.patchValue({ name: data.name, industry_id: data.industry, job_role_id: data.job_role });
                _this.goal_weightage = data.goal_weightage;
                _this.generic_weightage = data.generic_weightage;
                _this.technical_weightage = data.technical_weightage;
                _this.corporate_weightage = data.corporate_weightage;
                for (var _i = 0, _a = data.goals; _i < _a.length; _i++) {
                    var goal = _a[_i];
                    var goalFormArray = _this.goalListForm.controls.goalsArray;
                    goalFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](goal.id));
                }
                for (var _b = 0, _c = data.corporateValues; _b < _c.length; _b++) {
                    var cval = _c[_b];
                    var cvalFormArray = _this.cvalListForm.controls.cvalArray;
                    cvalFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](cval.id));
                }
                for (var _d = 0, _e = data.skills.genericSkills; _d < _e.length; _d++) {
                    var gskill = _e[_d];
                    var genericFormArray = _this.genericListForm.controls.genericsArray;
                    genericFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](gskill.id));
                }
                for (var _f = 0, _g = data.skills.technicalSkill; _f < _g.length; _f++) {
                    var tskill = _g[_f];
                    var techFormArray = _this.techListForm.controls.techArray;
                    techFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](tskill.id));
                }
                _this.goalDataSource = data.goals;
                _this.genericDataSource = data.skills.genericSkills;
                _this.techDataSource = data.skills.technicalSkill;
                _this.corValDataSource = data.corporateValues;
            }
        });
    };
    FormLibraryComponent.prototype.getIndustries = function () {
        var _this = this;
        this.apiService.getData('industry').subscribe(function (response) {
            if (response.status == 'success') {
                _this.industries = response.data;
            }
        });
    };
    FormLibraryComponent.prototype.getJobRoles = function () {
        var _this = this;
        this.apiService.getData('job-roles').subscribe(function (response) {
            if (response.status == 'success') {
                _this.jobRoles = response.data;
            }
        });
    };
    FormLibraryComponent.prototype.openModal = function (type, url) {
        var _this = this;
        this.dialogRef = this.dialog.open(_editpopup_editpopup_component__WEBPACK_IMPORTED_MODULE_2__["EditpopupComponent"], {
            panelClass: 'edit-perform-dialog',
            data: { modalType: type }
        });
        this.dialogRef.afterClosed().subscribe(function (response) {
            if (!response) {
                return;
            }
            else {
                _this.apiloader.setLoader(true);
                var data = _this.apiService.setData(response);
                _this.apiService.postData(url, data).subscribe(function (res) {
                    if (res.status == 'success') {
                        _this.apiloader.setLoader(false);
                        if (type == 'goal') {
                            _this.getGoals();
                            _this.toast.showSuccess('Goal added Successfully!.');
                        }
                        else if (type == 'cvalue') {
                            _this.getCorVals();
                            _this.toast.showSuccess('Corporate value added Successfully!.');
                        }
                        else {
                            _this.getSkills();
                            _this.toast.showSuccess('Skill added Successfully!.');
                        }
                    }
                }, function (error) {
                    _this.apiloader.setLoader(false);
                    _this.toast.showError(error);
                });
            }
        });
    };
    FormLibraryComponent.prototype.editpopup = function (type, row, url) {
        var _this = this;
        this.dialogRef = this.dialog.open(_editpopup_editpopup_component__WEBPACK_IMPORTED_MODULE_2__["EditpopupComponent"], {
            panelClass: 'edit-perform-dialog',
            data: { modalType: type, details: row }
        });
        this.dialogRef.afterClosed().subscribe(function (response) {
            if (!response) {
                return;
            }
            else {
                _this.apiloader.setLoader(true);
                var id = response.id;
                delete response.id;
                var data = _this.apiService.setData(response);
                _this.apiService.postData(url + '/' + id, data).subscribe(function (res) {
                    if (res.status == 'success') {
                        _this.apiloader.setLoader(false);
                        if (type == 'goal') {
                            _this.getGoals();
                            _this.toast.showSuccess('Goal updated Successfully!.');
                        }
                        else if (type == 'cvalue') {
                            _this.getCorVals();
                            _this.toast.showSuccess('Corporate value updated Successfully!.');
                        }
                        else {
                            _this.getSkills();
                            _this.toast.showSuccess('Skill updated Successfully!.');
                        }
                    }
                }, function (error) {
                    _this.apiloader.setLoader(false);
                    _this.toast.showError(error);
                });
            }
        });
    };
    FormLibraryComponent.prototype.getGoals = function () {
        var _this = this;
        this.apiService.getData('goals').subscribe(function (response) {
            if (response.status == 'success') {
                _this.goals = response.data;
            }
        });
    };
    FormLibraryComponent.prototype.getSkills = function () {
        var _this = this;
        this.genericDataSource = [];
        this.techDataSource = [];
        this.apiService.getData('skills').subscribe(function (response) {
            if (response.status == 'success') {
                var gdata = [];
                var tdata = [];
                for (var _i = 0, _a = response.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.type == 'generic') {
                        gdata.push(item);
                    }
                    else {
                        tdata.push(item);
                    }
                }
                _this.genericList = gdata;
                _this.techList = tdata;
            }
        });
    };
    FormLibraryComponent.prototype.getCorVals = function () {
        var _this = this;
        this.corValDataSource = [];
        this.apiService.getData('corporate-values').subscribe(function (response) {
            if (response.status == 'success') {
                _this.cvalList = response.data;
            }
        });
    };
    FormLibraryComponent.prototype.deleteItem = function (type, id, url) {
        var _this = this;
        this.apiloader.setLoader(true);
        this.apiService.deleteData(url + '/' + id).subscribe(function (response) {
            if (response.status == 'success') {
                _this.apiloader.setLoader(false);
                if (type == 'goal') {
                    _this.getGoals();
                    _this.toast.showSuccess('Goal deleted Successfully!.');
                }
                else if (type == 'cvalue') {
                    _this.getCorVals();
                    _this.toast.showSuccess('Corporate value deleted Successfully!.');
                }
                else {
                    _this.getSkills();
                    _this.toast.showSuccess('Skill deleted Successfully!.');
                }
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    FormLibraryComponent.prototype.deleteform = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        this.apiService.deleteData('goal-setting-form/' + this.formId).subscribe(function (response) {
            if (response.status == 'success') {
                _this.apiloader.setLoader(false);
                _this.toast.showSuccess('Goal Setting form deleted Successfully!.');
                _this.router.navigate(['/apps/performance/performance-management']);
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    FormLibraryComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (this.firstFormGroup.valid) {
            formData.client_id = sessionStorage.getItem('client_id');
            formData.goal_weightage = this.goal_weightage;
            formData.generic_weightage = this.generic_weightage;
            formData.technical_weightage = this.technical_weightage;
            formData.corporate_weightage = this.corporate_weightage;
            formData.goals_from_library = this.goalListForm.value.goalsArray;
            formData.generic_skills_from_library = this.genericListForm.value.genericsArray;
            formData.technical_skills_from_library = this.techListForm.value.techArray;
            formData.corporate_values_from_library = this.cvalListForm.value.cvalArray;
            if (!this.formId) {
                this.apiloader.setLoader(true);
                this.apiService.postData('goal-setting-form', formData).subscribe(function (response) {
                    if (response.data) {
                        _this.apiloader.setLoader(false);
                        _this.toast.showSuccess('Goal Setting form added Successfully!.');
                        _this.router.navigate(['/apps/performance/performance-management']);
                    }
                }, function (error) {
                    _this.apiloader.setLoader(false);
                    _this.toast.showError(error);
                });
            }
            else {
                formData.appraisal_cycle_id = 'gdh335X';
                this.apiloader.setLoader(true);
                this.apiService.postData('goal-setting-form/' + this.formId, formData).subscribe(function (response) {
                    if (response.data) {
                        _this.apiloader.setLoader(false);
                        _this.toast.showSuccess('Goal Setting form updated Successfully!.');
                        _this.router.navigate(['/apps/performance/performance-management']);
                    }
                }, function (error) {
                    _this.apiloader.setLoader(false);
                    _this.toast.showError(error);
                });
            }
        }
    };
    FormLibraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-library',
            template: __webpack_require__(/*! ./form-library.component.html */ "./src/app/main/content/apps/performance/form-library/form-library.component.html"),
            styles: [__webpack_require__(/*! ./form-library.component.scss */ "./src/app/main/content/apps/performance/form-library/form-library.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_5__["ApiLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], FormLibraryComponent);
    return FormLibraryComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/edit-evaluation.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/edit-evaluation.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- HEADER -->\r\n <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\"\r\n fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n \r\n <!-- APP TITLE -->\r\n <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n   <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <!-- <mat-icon class=\"logo-icon mr-16\">settings</mat-icon> -->\r\n        <span class=\"logo-text h1\" *ngIf=\"userFormData\">{{userFormData.goal_setting_form_name}}</span>\r\n    </div>\r\n \r\n </div>\r\n <!-- / APP TITLE -->\r\n </div>\r\n <!-- / HEADER -->\r\n\r\n <div class=\"performance m-16\">\r\n   <div class=\"free\">\r\n       \r\n          <!-- ============================================================== -->\r\n<!-- Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\" *ngIf=\"userFormData\">\r\n   <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\r\n     <!-- <mat-card> -->\r\n          \r\n        <form [formGroup]=\"firstFormGroup\">\r\n            <div fxLayout=\"row wrap\">\r\n                <div fxFlex.gt-md=\"100\" fxFlex.gt-sm=\"100\" fxFlex.gt-xs=\"100\" fxFlex=\"100\" class=\"h_editEv\">\r\n                    <div fxLayout=\"row wrap\"> \r\n                        <div fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-label><b>User: </b>Employee</mat-label>\r\n                        </div>\r\n                        <div fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-label><b>Job Role:</b> {{userFormData.job_role.name}}</mat-label>\r\n                        </div>\r\n                        <div fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-label><b>Department:</b> {{userFormData.industry.name}}</mat-label>\r\n                        </div>\r\n                        <div fxFlex.gt-md=\"25\" fxFlex.gt-xs=\"100\" fxFlex=\"100\">\r\n                            <mat-label><b>Period: </b>{{start}} To {{end}}</mat-label>\r\n                        </div>\r\n                      </div>\r\n                </div>\r\n               <!-- Start Goals Section -->   \r\n               <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"sect_ion\"> \r\n                 <div fxLayout=\"row wrap\"> \r\n                  <div fxFlex.gt-md=\"70\" fxFlex=\"100\">\r\n                      <mat-label class=\"lbl_cs\"><b>Section A : Goals</b></mat-label>\r\n                  </div>\r\n\r\n                  <div fxFlex.gt-md=\"30\" fxFlex=\"100\">\r\n                      <mat-label class=\"lbl_cs\">Total Section A Weightage : </mat-label>\r\n                      <input class=\"inp_change\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"goal_weightage\"\r\n                       value=\"\" readonly> %\r\n                  </div>\r\n                 </div> \r\n               </div> \r\n                  <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"set_height\">\r\n                      <table mat-table [dataSource]=\"goalDataSource\" class=\"mat-elevation-z8\">\r\n                         <!-- category Column -->\r\n                          <ng-container matColumnDef=\"category\">\r\n                            <th mat-header-cell *matHeaderCellDef> Category </th>\r\n                            <td mat-cell *matCellDef=\"let element\">{{element.category}}</td>\r\n                          </ng-container>\r\n                        \r\n                          <!-- goals Column -->\r\n                          <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Goal Name </th>\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                          </ng-container>\r\n                        \r\n                          <!-- goals_description Column -->\r\n                          <ng-container matColumnDef=\"description\">\r\n                            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Goals Description </th>\r\n                            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.description}} </td>\r\n                          </ng-container>\r\n                    \r\n                          <!-- mearsu_weight Column -->\r\n                          <ng-container matColumnDef=\"mearsu_weight\">\r\n                            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Mearsurement/Weightage </th>\r\n                            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.measurement}}/{{element.weightage}} </td>\r\n                          </ng-container>\r\n                    \r\n                    \r\n                          <!-- Buttons Column -->\r\n                          <ng-container matColumnDef=\"buttons\">\r\n                              <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                              <td mat-cell *matCellDef=\"let element\"> \r\n                                 \r\n                               <button class=\"new_btn mr-lef\" (click)=\"editpopup('goal', element, 'assigned-appraisal-cycle/goals/')\"><mat-icon>feedback</mat-icon></button>\r\n                               <button class=\"new_btn\" (click)=\"deleteItem('goal', element.id, 'assigned-appraisal-cycle/goals/')\"><mat-icon>delete</mat-icon></button>\r\n                               \r\n                               \r\n                                \r\n                              </td>\r\n                            </ng-container>\r\n                    \r\n                    \r\n                         \r\n                        \r\n                          <tr mat-header-row *matHeaderRowDef=\"goalColumns\"></tr>\r\n                          <tr mat-row *matRowDef=\"let row; columns: goalColumns;\"></tr>\r\n                        </table>\r\n                  </div>\r\n\r\n                  \r\n\r\n\r\n                   <!-- Start Generic Skills Section -->  \r\n                   <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"sect_ion\"> \r\n                      <div fxLayout=\"row wrap\"> \r\n                        <div fxFlex.gt-md=\"70\" fxFlex=\"100\">\r\n                            <mat-label class=\"lbl_cs\"><b>Section B : Generic Skills</b></mat-label>\r\n                        </div>\r\n                       <div fxFlex.gt-md=\"30\" fxFlex=\"100\">\r\n                          <mat-label class=\"lbl_cs\">Total Section A Weightage : </mat-label>\r\n                          <input class=\"inp_change\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"generic_weightage\"\r\n                            value=\"\" readonly> %\r\n                      </div>\r\n                  </div>\r\n                </div> \r\n\r\n                  <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"set_height\">\r\n                      <table mat-table [dataSource]=\"genericDataSource\" class=\"mat-elevation-z8\">\r\n                         <!-- title Column -->\r\n                          <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Title </th>\r\n                            <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n                          </ng-container>\r\n                        \r\n                          \r\n                        \r\n                          <!-- skills_description Column -->\r\n                          <ng-container matColumnDef=\"description\">\r\n                            <th mat-header-cell *matHeaderCellDef> Description Of Skills </th>\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                          </ng-container>\r\n                    \r\n                          <!-- level Column -->\r\n                          <ng-container matColumnDef=\"level\">\r\n                            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Expected Proficiency Level </th>\r\n                            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.expected_proficiency_level}} </td>\r\n                          </ng-container>\r\n                    \r\n                    \r\n                          <!-- Buttons Column -->\r\n                          <ng-container matColumnDef=\"buttons\">\r\n                              <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                              <td mat-cell *matCellDef=\"let element\"> \r\n                                 \r\n                               <button class=\"new_btn mr-lef\" (click)=\"editpopup('gskill', element, 'assigned-appraisal-cycle/skills/')\"><mat-icon>feedback</mat-icon></button>\r\n                               <button class=\"new_btn\" (click)=\"deleteItem('gskill', element.id, 'assigned-appraisal-cycle/skills/')\"><mat-icon>delete</mat-icon></button>\r\n                               \r\n                               \r\n                                \r\n                              </td>\r\n                            </ng-container>\r\n                    \r\n                    \r\n                         \r\n                        \r\n                          <tr mat-header-row *matHeaderRowDef=\"skillColums\"></tr>\r\n                          <tr mat-row *matRowDef=\"let row; columns: skillColums;\"></tr>\r\n                        </table>\r\n                  </div>\r\n\r\n\r\n                 \r\n\r\n\r\n                   <!-- Start Technical Skill Section --> \r\n                   <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"sect_ion\"> \r\n                      <div fxLayout=\"row wrap\">       \r\n                          <div fxFlex.gt-md=\"70\" fxFlex=\"100\">\r\n                              <mat-label class=\"lbl_cs\"><b>Section C : Technical Skills</b></mat-label>\r\n                          </div>\r\n\r\n                          <div fxFlex.gt-md=\"30\" fxFlex=\"100\">\r\n                              <mat-label class=\"lbl_cs\">Total Section A Weightage : </mat-label>\r\n                              <input class=\"inp_change\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"technical_weightage\"\r\n                                value=\"\" readonly> %\r\n                          </div>\r\n                      </div>\r\n                    </div>  \r\n\r\n                  <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"set_height\">\r\n                      <table mat-table [dataSource]=\"techDataSource\" class=\"mat-elevation-z8\">\r\n                         <!-- title Column -->\r\n                          <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Title </th>\r\n                            <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n                          </ng-container>\r\n                        \r\n                          \r\n                        \r\n                          <!-- skills_description Column -->\r\n                          <ng-container matColumnDef=\"description\">\r\n                            <th mat-header-cell *matHeaderCellDef> Description Of Skills </th>\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                          </ng-container>\r\n                    \r\n                          <!-- level Column -->\r\n                          <ng-container matColumnDef=\"level\">\r\n                            <th mat-header-cell *matHeaderCellDef> Expected Proficiency Level </th>\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.expected_proficiency_level}} </td>\r\n                          </ng-container>\r\n                    \r\n                    \r\n                          <!-- Buttons Column -->\r\n                          <ng-container matColumnDef=\"buttons\">\r\n                              <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                              <td mat-cell *matCellDef=\"let element\"> \r\n                                 \r\n                               <button class=\"new_btn mr-lef\" (click)=\"editpopup('tskill', element, 'assigned-appraisal-cycle/skills/')\"><mat-icon>feedback</mat-icon></button>\r\n                               <button class=\"new_btn\" (click)=\"deleteItem('tskill', element.id, 'assigned-appraisal-cycle/skills/')\"><mat-icon>delete</mat-icon></button>\r\n                               \r\n                               \r\n                                \r\n                              </td>\r\n                            </ng-container>\r\n                    \r\n                    \r\n                         \r\n                        \r\n                          <tr mat-header-row *matHeaderRowDef=\"skillColums\"></tr>\r\n                          <tr mat-row *matRowDef=\"let row; columns: skillColums;\"></tr>\r\n                        </table>\r\n                  </div>\r\n\r\n                  \r\n                  <!-- Start Corporate Values Section -->\r\n                   <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"sect_ion\"> \r\n                      <div fxLayout=\"row wrap\"> \r\n                        <div fxFlex.gt-md=\"70\" fxFlex=\"100\">\r\n                            <mat-label class=\"lbl_cs\"><b>Section D : Corporate Values</b></mat-label>\r\n                        </div>\r\n                        <div fxFlex.gt-md=\"30\" fxFlex=\"100\">\r\n                            <mat-label class=\"lbl_cs\">Total Section A Weightage : </mat-label>\r\n                            <input class=\"inp_change\" matInput [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"corporate_weightage\"\r\n                                value=\"\" readonly> %\r\n                        </div>\r\n                      </div>\r\n                   </div>\r\n\r\n                  <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"set_height\">\r\n                      <table mat-table [dataSource]=\"corValDataSource\" class=\"mat-elevation-z8\">\r\n                         <!-- category Column -->\r\n                          <ng-container matColumnDef=\"name\">\r\n                            <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                            <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n                          </ng-container>\r\n                        \r\n                          <!-- goals_description Column -->\r\n                          <ng-container matColumnDef=\"description\">\r\n                            <th mat-header-cell *matHeaderCellDef> Description </th>\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n                          </ng-container>\r\n                    \r\n                          <!-- mearsu_weight Column -->\r\n                          <ng-container matColumnDef=\"mearsu_weight\">\r\n                            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Mearsurement/Weightage </th>\r\n                            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.measurement}}/{{element.weightage}} </td>\r\n                          </ng-container>\r\n                    \r\n                    \r\n                          <!-- Buttons Column -->\r\n                          <ng-container matColumnDef=\"buttons\">\r\n                              <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                              <td mat-cell *matCellDef=\"let element\"> \r\n                                 \r\n                               <button class=\"new_btn mr-lef\" (click)=\"editpopup('cvalue', element, 'assigned-appraisal-cycle/corporate-values/')\"><mat-icon>feedback</mat-icon></button>\r\n                               <button class=\"new_btn\" (click)=\"deleteItem('cvalue', element.id, 'assigned-appraisal-cycle/corporate-values/')\"><mat-icon>delete</mat-icon></button>\r\n                               \r\n                               \r\n                                \r\n                              </td>\r\n                            </ng-container>\r\n                    \r\n                    \r\n                         \r\n                        \r\n                          <tr mat-header-row *matHeaderRowDef=\"calValColumns\"></tr>\r\n                          <tr mat-row *matRowDef=\"let row; columns: calValColumns;\"></tr>\r\n                      </table>\r\n                  </div>\r\n\r\n                 \r\n                  \r\n\r\n              </div>\r\n            </form>\r\n     <!-- </mat-card> -->\r\n   </div>\r\n </div>\r\n\r\n \r\n\r\n \r\n             \r\n       \r\n   </div>\r\n </div>"

/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/edit-evaluation.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/edit-evaluation.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#editemp {\n  width: 384px;\n  max-width: 384px;\n  padding: 0px;\n  text-align: center;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n    #editemp {\n      padding: 0px;\n      width: 100%; } }\n#editemp .logo {\n    width: 128px;\n    margin: 32px auto; }\n#editemp .title {\n    font-size: 12px;\n    color: #ccc;\n    margin: 16px 32px 32px 30px; }\n#editemp form {\n    width: 100%;\n    text-align: left; }\n#editemp form mat-form-field {\n      width: 100%; }\n#editemp form .submit-button {\n      width: 220px;\n      margin: 16px auto;\n      display: block; }\n@media screen and (max-width: 599px) {\n        #editemp form .submit-button {\n          width: 90%; } }\n#editemp .login {\n    margin: 32px auto 24px auto;\n    width: 250px;\n    font-weight: 500; }\n#editemp .login .text {\n      margin-right: 8px; }\n.reset {\n  display: block;\n  width: 100%;\n  left: 30%;\n  float: left;\n  position: relative; }\n.editemp .mat-card {\n  border: 1px solid #fa7915;\n  border-radius: 10px; }\n.editemp .mat-card-header {\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #f2ab13;\n  padding: 14px 0 0 0;\n  border-radius: 10px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n.editemp .mat-card-title {\n  font-size: 20px;\n  font-weight: 500; }\n.editemp .mat-card-subtitle {\n  font-size: 20px;\n  color: #000; }\n.editemp .mat-card-title, .editemp .mat-card-subtitle {\n  margin-bottom: 5px; }\n.editemp .mat-card-content {\n  text-align: left;\n  padding: 20px; }\n.editemp .mat-card-content ul {\n  list-style: none;\n  margin: 0; }\n.editemp .mat-card-content ul li {\n  font-size: 18px;\n  padding: 5px 0px; }\n.editemp .mat-card-content ul li:before {\n  font-weight: 100;\n  margin-left: -1em;\n  background-color: #fb7215;\n  border-radius: 50%;\n  content: \"\";\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 2px;\n  height: 8px;\n  width: 8px; }\n.editemp .free {\n  width: 100%;\n  display: block;\n  float: left;\n  padding: 20px; }\n.editemp .paid {\n  width: 60%;\n  display: block;\n  float: left;\n  padding: 20px; }\n.editemp .paid .left, .editemp .paid .right {\n    width: 50%;\n    display: block;\n    float: left; }\n.new_r {\n  float: left;\n  margin-left: 20px;\n  margin-top: 20px !important; }\ndiv.mat-horizontal-stepper-header-container {\n  display: none !important; }\n.rr_right {\n  float: right; }\n@media only screen and (max-width: 767px) {\n  .editemp {\n    margin: 0px !important; }\n    .editemp .free, .editemp .paid, .editemp .left, .editemp .right {\n      width: 100% !important; }\n    .editemp .free .mat-card-content {\n      height: 230px; }\n    .editemp .paid .mat-card-content {\n      height: 600px; } }\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n.example-headers-align .mat-expansion-panel-header-description {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center; }\nmat-form-field {\n  display: block !important; }\n.mat-icon {\n  height: 37px !important; }\n.mt_i {\n  font-size: 24px !important; }\n.mat-expansion-panel-header {\n  background-color: black !important;\n  margin-bottom: 10px;\n  border-radius: 11px; }\n.mat-expansion-panel-content {\n  background-color: white !important; }\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: none !important; }\n.mat-expansion-panel-header-title {\n  color: white !important; }\n.change_c {\n  color: white !important;\n  font-size: 44px; }\n.lbl_cs {\n  float: left; }\n.mr_tp {\n  margin-top: 15px;\n  margin-right: 10px; }\n.mr_last {\n  margin-top: 15px; }\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px; }\n.example-button-row {\n  text-align: center;\n  margin-top: 10px; }\n.ch_color {\n  padding-top: 7px; }\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 10px 0 10px 0 !important;\n  margin-top: -10px !important; }\n.sect_ion {\n  margin-top: 20px;\n  background-color: antiquewhite;\n  padding: 13px;\n  border-radius: 12px; }\n.inp_change {\n  height: 25px;\n  width: 33px;\n  background-color: white;\n  margin-left: 20px;\n  padding: 5px; }\ntable {\n  width: 100%; }\n.page-layout.blank {\n  min-height: 50%; }\n.new_btn {\n  height: 24px;\n  width: 24px;\n  background-color: #f49f14;\n  border-radius: 50px;\n  padding-top: 4px; }\n.mr-lef {\n  margin-right: 10px; }\n.new_btn .mat-icon {\n  height: 20px;\n  width: 20px;\n  font-size: 17px; }\n.mr_ch {\n  margin-top: 50px;\n  height: 37px; }\n.img_s {\n  height: 25px;\n  width: 25px;\n  background-color: #f49f14;\n  border-radius: 50px;\n  margin-right: 6px; }\n.set_height {\n  max-height: 300px;\n  overflow-y: scroll;\n  margin-top: 10px; }\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 500; }\n.btn_new {\n  background-color: #000;\n  color: #FFFFFF;\n  margin-left: 20px;\n  margin-top: 20px;\n  border-radius: 50px; }\n.h_editEv {\n  margin-top: -15px;\n  box-shadow: 0px 6px 10px grey;\n  padding: 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/edit-evaluation.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/edit-evaluation.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: EditEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEvaluationComponent", function() { return EditEvaluationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _evaluation_pop_evaluation_pop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./evaluation-pop/evaluation-pop.component */ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/evaluation-pop/evaluation-pop.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/services/api.service */ "./src/@fuse/services/api.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
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
    { category: 'Marketing', goals: 'Sales Target', goals_description: 'To achieve $20,000 in Sale', mearsu_weight: '$/10%' },
    { category: 'Marketing', goals: 'Sales Target', goals_description: 'To achieve $20,000 in Sale', mearsu_weight: '$/20%' },
    { category: 'Marketing', goals: 'Sales Target', goals_description: 'To achieve $20,000 in Sale', mearsu_weight: '$/20%' },
    { category: 'Marketing', goals: 'Sales Target', goals_description: 'To achieve $20,000 in Sale', mearsu_weight: '$/20%' },
    { category: 'Marketing', goals: 'Sales Target', goals_description: 'To achieve $20,000 in Sale', mearsu_weight: '$/20%' },
    { category: 'Marketing', goals: 'Sales Target', goals_description: 'To achieve $20,000 in Sale', mearsu_weight: '$/20%' },
    { category: 'Marketing', goals: 'Sales Target', goals_description: 'To achieve $20,000 in Sale', mearsu_weight: '$/20%' },
    { category: 'Marketing', goals: 'Sales Target', goals_description: 'To achieve $20,000 in Sale', mearsu_weight: '$/20%' },
    { category: 'Marketing', goals: 'Sales Target', goals_description: 'To achieve $20,000 in Sale', mearsu_weight: '$/20%' },
    { category: 'Marketing', goals: 'Sales Target', goals_description: 'To achieve $20,000 in Sale', mearsu_weight: '$/20%' },
];
var ELEMENT_DATA1 = [
    { title: 'Communication', skills_description: 'Convey and exchange thoughts', level: '[Level 3]Negotiate with otherto address issues' },
    { title: 'Marketing', skills_description: 'Convey and exchange thoughts', level: '[Level 3]Negotiate with otherto address issues' },
    { title: 'Marketing', skills_description: 'Convey and exchange thoughts', level: '[Level 3]Negotiate with otherto address issues' },
    { title: 'Marketing', skills_description: 'Convey and exchange thoughts', level: '[Level 3]Negotiate with otherto address issues' },
    { title: 'Marketing', skills_description: 'Convey and exchange thoughts', level: '[Level 3]Negotiate with otherto address issues' },
    { title: 'Marketing', skills_description: 'Convey and exchange thoughts', level: '[Level 3]Negotiate with otherto address issues' },
    { title: 'Marketing', skills_description: 'Convey and exchange thoughts', level: '[Level 3]Negotiate with otherto address issues' },
    { title: 'Marketing', skills_description: 'Convey and exchange thoughts', level: '[Level 3]Negotiate with otherto address issues' },
    { title: 'Marketing', skills_description: 'Convey and exchange thoughts', level: '[Level 3]Negotiate with otherto address issues' },
    { title: 'Marketing', skills_description: 'Convey and exchange thoughts', level: '[Level 3]Negotiate with otherto address issues' },
];
var EditEvaluationComponent = /** @class */ (function () {
    function EditEvaluationComponent(toast, _formBuilder, apiService, dialog, apiloader, route, router) {
        var _this = this;
        this.toast = toast;
        this._formBuilder = _formBuilder;
        this.apiService = apiService;
        this.dialog = dialog;
        this.apiloader = apiloader;
        this.route = route;
        this.router = router;
        this.goalColumns = ['category', 'name', 'description', 'mearsu_weight', 'buttons'];
        this.calValColumns = ['name', 'description', 'mearsu_weight', 'buttons'];
        this.skillColums = ['name', 'description', 'level', 'buttons'];
        this.goal_weightage = '10';
        this.generic_weightage = '56';
        this.technical_weightage = '15';
        this.corporate_weightage = '10';
        this.isLinear = false;
        // For form validator
        //email = new FormControl('', [Validators.required, Validators.email]);
        // Sufix and prefix
        this.hide = false;
        // getErrorMessage() {
        //   return this.email.hasError('required')
        //     ? 'You must enter a value'
        //     : this.email.hasError('email')
        //       ? 'Not a valid email'
        //       : '';
        // }
        this.step = 1;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getUserPerForm(_this.id);
        });
        this.options = _formBuilder.group({
            hideRequired: false,
            floatLabel: 'auto'
        });
    }
    EditEvaluationComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    // nextStep() {
    //   this.step++;
    // }
    // prevStep() {
    //   this.step--;
    // }
    EditEvaluationComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    EditEvaluationComponent.prototype.getUserPerForm = function (id) {
        var _this = this;
        this.apiService.getData('employees-performance-forms/' + id).subscribe(function (response) {
            if (response.status == 'success') {
                _this.userFormData = response.data;
                _this.goalDataSource = _this.userFormData.goals;
                _this.genericDataSource = _this.userFormData.genericSkills;
                _this.techDataSource = _this.userFormData.technicalSkills;
                _this.corValDataSource = _this.userFormData.corporateValues;
                _this.start = moment__WEBPACK_IMPORTED_MODULE_7__(_this.userFormData.appraisal_period_start).format('DD MMM YYYY');
                _this.end = moment__WEBPACK_IMPORTED_MODULE_7__(_this.userFormData.appraisal_period_end).format('DD MMM YYYY');
            }
        });
    };
    EditEvaluationComponent.prototype.deleteItem = function (type, id, url) {
        var _this = this;
        this.apiloader.setLoader(true);
        this.apiService.deleteData(url + id).subscribe(function (response) {
            if (response.status == 'success') {
                _this.apiloader.setLoader(false);
                if (type == 'goal') {
                    _this.getUserPerForm(_this.id);
                    _this.toast.showSuccess('Goal deleted Successfully!.');
                }
                else if (type == 'cvalue') {
                    _this.getUserPerForm(_this.id);
                    _this.toast.showSuccess('Corporate value deleted Successfully!.');
                }
                else {
                    _this.getUserPerForm(_this.id);
                    _this.toast.showSuccess('Skill deleted Successfully!.');
                }
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    EditEvaluationComponent.prototype.editpopup = function (type, row, url) {
        var _this = this;
        this.dialogRef = this.dialog.open(_evaluation_pop_evaluation_pop_component__WEBPACK_IMPORTED_MODULE_3__["EvaluationPopComponent"], {
            panelClass: 'evaluation-pop-dialog',
            data: { modalType: type, details: row }
        });
        this.dialogRef.afterClosed().subscribe(function (response) {
            if (!response) {
                return;
            }
            else {
                _this.apiloader.setLoader(true);
                _this.apiService.postData(url + row.id, response).subscribe(function (res) {
                    if (res.status == 'success') {
                        _this.apiloader.setLoader(false);
                        if (type == 'goal') {
                            _this.getUserPerForm(_this.id);
                            _this.toast.showSuccess('Goal updated Successfully!.');
                        }
                        else if (type == 'cvalue') {
                            _this.getUserPerForm(_this.id);
                            _this.toast.showSuccess('Corporate value updated Successfully!.');
                        }
                        else {
                            _this.getUserPerForm(_this.id);
                            _this.toast.showSuccess('Skill updated Successfully!.');
                        }
                    }
                }, function (error) {
                    _this.apiloader.setLoader(false);
                    _this.toast.showError(error);
                });
            }
        });
    };
    EditEvaluationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-evaluation',
            template: __webpack_require__(/*! ./edit-evaluation.component.html */ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/edit-evaluation.component.html"),
            styles: [__webpack_require__(/*! ./edit-evaluation.component.scss */ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/edit-evaluation.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_8__["ToasterService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_5__["ApiLoaderService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EditEvaluationComponent);
    return EditEvaluationComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/evaluation-pop/evaluation-pop.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/evaluation-pop/evaluation-pop.component.html ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content mat-white-bg mat-elevation-z4\">\r\n    <div class=\"dialog-content-wrapper\">\r\n        <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n            <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n                <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                    <mat-icon>close</mat-icon>\r\n                </button>\r\n            </mat-toolbar-row>\r\n        </mat-toolbar>\r\n\r\n        <div mat-dialog-content class=\"p-16 m-0\" fusePerfectScrollbar>\r\n\r\n\r\n            <!-- Start Goal & Corporate value Form -->\r\n            <form [formGroup]=\"editForm\">\r\n\r\n                <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\"  *ngIf=\"data.modalType == 'goal'\">\r\n                    <mat-label class=\"label\">Category</mat-label>\r\n                    <mat-form-field appearance=\"outline\" fxFlex>\r\n                        <input formControlName=\"category\" matInput placeholder=\"Category\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\">\r\n                    <mat-label class=\"label\">Name</mat-label>\r\n                    <mat-form-field appearance=\"outline\" fxFlex>\r\n                        <input formControlName=\"name\" matInput placeholder=\"Name\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\">\r\n                    <mat-label class=\"label\">Description</mat-label>\r\n                    <mat-form-field appearance=\"outline\" fxFlex>\r\n                        <textarea formControlName=\"description\" matInput placeholder=\"Description\"\r\n                            matAutosizeMinRows=5 matAutosizeMaxRows=10></textarea>\r\n                    </mat-form-field>\r\n                </div>\r\n                \r\n                <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\" *ngIf=\"data.modalType == 'tskill' || data.modalType == 'gskill'\">\r\n                    <mat-label class=\"label\">Type</mat-label>\r\n                    <mat-form-field appearance=\"outline\" fxFlex>\r\n                        <input formControlName=\"type\" matInput placeholder=\"Type\" readonly>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n\r\n                <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\" *ngIf=\"data.modalType == 'tskill' || data.modalType == 'gskill'\">\r\n                    <mat-label class=\"label\">Expected Proficiency Level</mat-label>\r\n                    <mat-form-field appearance=\"outline\" fxFlex>\r\n                        <input formControlName=\"expected_proficiency_level\" matInput placeholder=\"Expected Proficiency Level\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\" *ngIf=\"data.modalType == 'cvalue' || data.modalType == 'goal'\">\r\n                    <mat-label class=\"label\">Measurement</mat-label>\r\n                    <mat-form-field appearance=\"outline\" fxFlex>\r\n                        <mat-select formControlName=\"measurement\" placeholder=\"Measurement(Default)\">\r\n                            <mat-option value=\"$\">$</mat-option>\r\n                            <mat-option value=\"%\">%</mat-option>\r\n                            <mat-option value=\"number\">Number</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxFlex.gt-md=\"100\" fxFlex=\"100\" fxLayout=\"column\" *ngIf=\"data.modalType == 'cvalue' || data.modalType == 'goal'\">\r\n                    <mat-label class=\"label\">Weightage</mat-label>\r\n                    <mat-form-field appearance=\"outline\" fxFlex>\r\n                        <input formControlName=\"weightage\" matInput placeholder=\"Weightage(Default)\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"mr_bt\">\r\n                    <mat-label class=\"lbl_cs\"><b>My Achievement- by User</b></mat-label>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field appearance=\"outline\" fxFlex>\r\n                        <textarea formControlName=\"user_comments\" matInput placeholder=\"This is example comment- user\"\r\n                            matAutosizeMinRows=5 matAutosizeMaxRows=10 readonly></textarea>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n\r\n                <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"mr_bt\">\r\n                    <mat-label class=\"lbl_cs\"><b>Comment by Manager Low</b></mat-label>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field appearance=\"outline\" fxFlex>\r\n                        <input readonly formControlName=\"manager_low_rating\" matInput placeholder=\"My Performance Rating\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field appearance=\"outline\" fxFlex>\r\n                        <textarea readonly formControlName=\"manager_low_comments\" matInput placeholder=\"My Achievement\"\r\n                            matAutosizeMinRows=5 matAutosizeMaxRows=10></textarea>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"mr_bt\">\r\n                    <mat-label class=\"lbl_cs\"><b>Comment by Manager High</b></mat-label>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field appearance=\"outline\" fxFlex>\r\n                        <input readonly formControlName=\"manager_high_rating\" matInput placeholder=\"My Performance Rating\">\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                    <mat-form-field appearance=\"outline\" fxFlex>\r\n                        <textarea readonly formControlName=\"manager_high_comments\" matInput placeholder=\"My Achievement\"\r\n                            matAutosizeMinRows=5 matAutosizeMaxRows=10></textarea>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n            </form>\r\n\r\n            <!-- End Goals & Corporate Value Form -->\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n            <button mat-raised-button class=\"save-button mat-accent\" (click)=\"response(editForm.value)\" aria-label=\"SAVE\">\r\n                Submit\r\n            </button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/evaluation-pop/evaluation-pop.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/evaluation-pop/evaluation-pop.component.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lbl_cs {\n  color: #f49f14; }\n\n.mr_bt {\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/evaluation-pop/evaluation-pop.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/evaluation-pop/evaluation-pop.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: EvaluationPopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationPopComponent", function() { return EvaluationPopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



var EvaluationPopComponent = /** @class */ (function () {
    function EvaluationPopComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.editForm = this.createContactForm();
        if (data.modalType == "goal") {
            this.dialogTitle = "Goals";
            if (data.details) {
                var formData = data.details;
                this.id = formData.id;
                this.editForm.patchValue({ category: formData.category, name: formData.name, description: formData.description,
                    measurement: formData.measurement, weightage: formData.weightage });
                if (formData.review) {
                    this.editForm.patchValue({ user_comments: formData.review.user_comments,
                        manager_low_rating: formData.review.manager_low_rating, manager_high_rating: formData.review.manager_high_rating,
                        manager_low_comments: formData.review.manager_low_comments, manager_high_comments: formData.review.manager_high_comments });
                }
            }
        }
        else if (data.modalType == "cvalue") {
            this.dialogTitle = "Corporate Value";
            if (data.details) {
                var formData = data.details;
                this.id = formData.id;
                this.editForm.patchValue({ name: formData.name, description: formData.description,
                    measurement: formData.measurement, weightage: formData.weightage });
                this.editForm.patchValue({ name: formData.name, description: formData.description,
                    expected_proficiency_level: formData.expected_proficiency_level });
                if (formData.review) {
                    this.editForm.patchValue({ user_comments: formData.review.user_comments,
                        manager_low_rating: formData.review.manager_low_rating, manager_high_rating: formData.review.manager_high_rating,
                        manager_low_comments: formData.review.manager_low_comments, manager_high_comments: formData.review.manager_high_comments });
                }
            }
        }
        else if (data.modalType == "tskill") {
            this.dialogTitle = "Technical Skill";
            this.editForm.patchValue({ type: 'technical' });
            if (data.details) {
                var formData = data.details;
                this.id = formData.id;
                this.editForm.patchValue({ name: formData.name, description: formData.description,
                    expected_proficiency_level: formData.expected_proficiency_level });
                if (formData.review) {
                    this.editForm.patchValue({ user_comments: formData.review.user_comments,
                        manager_low_rating: formData.review.manager_low_rating, manager_high_rating: formData.review.manager_high_rating,
                        manager_low_comments: formData.review.manager_low_comments, manager_high_comments: formData.review.manager_high_comments });
                }
            }
        }
        else {
            this.dialogTitle = "Generic Skill";
            this.editForm.patchValue({ type: 'generic' });
            if (data.details) {
                var formData = data.details;
                this.id = formData.id;
                this.editForm.patchValue({ name: formData.name, description: formData.description,
                    expected_proficiency_level: formData.expected_proficiency_level });
                if (formData.review) {
                    this.editForm.patchValue({ user_comments: formData.review.user_comments,
                        manager_low_rating: formData.review.manager_low_rating, manager_high_rating: formData.review.manager_high_rating,
                        manager_low_comments: formData.review.manager_low_comments, manager_high_comments: formData.review.manager_high_comments });
                }
            }
        }
    }
    EvaluationPopComponent.prototype.ngOnInit = function () {
    };
    EvaluationPopComponent.prototype.createContactForm = function () {
        return this.formBuilder.group({
            category: [''],
            type: [''],
            name: [''],
            description: [''],
            measurement: [''],
            weightage: [''],
            user_comments: [''],
            manager_low_rating: [''],
            manager_low_comments: [''],
            manager_high_rating: [''],
            manager_high_comments: [''],
            expected_proficiency_level: [''],
        });
    };
    EvaluationPopComponent.prototype.response = function (formData) {
        delete formData.user_comments;
        delete formData.manager_low_rating;
        delete formData.manager_low_comments;
        delete formData.manager_high_rating;
        delete formData.manager_high_comments;
        if (this.data.modalType == "goal") {
            delete formData.type;
            delete formData.expected_proficiency_level;
        }
        else if (this.data.modalType == "cvalue") {
            delete formData.category;
            delete formData.type;
            delete formData.expected_proficiency_level;
        }
        else if (this.data.modalType == "tskill") {
            delete formData.category;
            delete formData.measurement;
            delete formData.weightage;
        }
        else {
            delete formData.category;
            delete formData.measurement;
            delete formData.weightage;
        }
        this.dialogRef.close(formData);
    };
    EvaluationPopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-evaluation-pop',
            template: __webpack_require__(/*! ./evaluation-pop.component.html */ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/evaluation-pop/evaluation-pop.component.html"),
            styles: [__webpack_require__(/*! ./evaluation-pop.component.scss */ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/evaluation-pop/evaluation-pop.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EvaluationPopComponent);
    return EvaluationPopComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-evaluation/performance-evaluation.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-evaluation/performance-evaluation.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HEADER -->\r\n<div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayout.gt-xs=\"row\"\r\n  fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n  <!-- APP TITLE -->\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <!-- <mat-icon class=\"logo-icon mr-16\">settings</mat-icon> -->\r\n      <span class=\"logo-text h1\">Performance Evaluation Forms Library</span>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n  <!-- / APP TITLE -->\r\n</div>\r\n<!-- / HEADER -->\r\n\r\n<div class=\"performance m-16\">\r\n  <div class=\"free\">\r\n\r\n    <!-- ============================================================== -->\r\n    <!-- Card Grid-->\r\n    <!-- ============================================================== -->\r\n    <div fxLayout=\"row wrap\">\r\n\r\n      <div class=\"switch-toggle\">\r\n        Current <input type=\"checkbox\" (change)=\"onChange($event)\" id=\"switch\"><label for=\"switch\">Toggle</label>\r\n        Archive\r\n      </div>\r\n\r\n      <div class=\"search-container\">\r\n        <div class=\"search\">\r\n          <input class=\"search-click\" placeholder=\"Type here....\">\r\n          <button class=\"srch-btn\">Search</button>\r\n        </div>\r\n        <div class=\"filter\">\r\n          <button mat-raised-button [matMenuTriggerFor]=\"menu\"><img class=\"imgSize\"\r\n              src=\"assets/images/funnel.png\"></button>\r\n          <mat-menu #menu=\"matMenu\" class=\"mm_menu filter-menu\" xPosition=\"before\">\r\n            <button class=\"bg_c\" mat-menu-item>By Default Shorting (A>Z)</button>\r\n            <button mat-menu-item>Short By Name</button>\r\n            <button mat-menu-item>Short By Department</button>\r\n            <button mat-menu-item>Short By Status</button>\r\n          </mat-menu>\r\n        </div>\r\n      </div>\r\n\r\n      <div fxFlex.gt-sm=\"100\" fxFlex.gt-md=\"100\" *ngIf=\"!chkToggle\" fxFlex=\"100\">\r\n\r\n      <div fxFlex.gt-sm=\"95\" fxFlex.gt-md=\"95\" fxFlex=\"100\" class=\"head_ing\">\r\n        <h4>Set Goal Setting Forms</h4>\r\n      </div>\r\n\r\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 radiusBottom\">\r\n\r\n          <!-- setting_form Column -->\r\n          <ng-container matColumnDef=\"setting_form\">\r\n            <th mat-header-cell *matHeaderCellDef> Name Of Goal Setting Forms </th>\r\n            <td mat-cell *matCellDef=\"let element\">{{element.performance_name}}</td>\r\n          </ng-container>\r\n\r\n          <!-- Weight Column -->\r\n          <ng-container matColumnDef=\"user\">\r\n            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Users </th>\r\n            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.first_name}} {{element.last_name}}\r\n            </td>\r\n          </ng-container>\r\n\r\n          <!-- Symbol Column -->\r\n          <ng-container matColumnDef=\"department\">\r\n            <th mat-header-cell *matHeaderCellDef> Department </th>\r\n            <td mat-cell *matCellDef=\"let element\"> {{element.department}} </td>\r\n          </ng-container>\r\n\r\n          <!-- Symbol Column -->\r\n          <ng-container matColumnDef=\"rating\">\r\n            <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Rating </th>\r\n            <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.rating}} </td>\r\n          </ng-container>\r\n\r\n\r\n          <!-- Buttons Column -->\r\n          <ng-container matColumnDef=\"buttons\">\r\n            <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n            <td mat-cell *matCellDef=\"let element\">\r\n              <button class=\"new_btn mr-lef\" (click)=\"editEvaluation(element.id)\">\r\n                <mat-icon>edit</mat-icon>\r\n              </button>\r\n            </td>\r\n          </ng-container>\r\n\r\n\r\n\r\n\r\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n        </table>\r\n\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"chkToggle\">\r\n\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-evaluation/performance-evaluation.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-evaluation/performance-evaluation.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n@media screen and (max-width: 599px) {\n  :host .header {\n    padding: 16px; } }\n:host .header .search {\n  position: relative;\n  max-width: 780px; }\n:host .header .search .search-icon {\n    margin: 0 -24px 0 0; }\n:host .header .search .search-input {\n    padding: 0 0 0 48px;\n    background: none;\n    font-size: 24px;\n    line-height: 48px;\n    height: 48px;\n    color: #FFFFFF;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.3);\n    -webkit-transition: border-color 300ms ease;\n    transition: border-color 300ms ease; }\n:host .header .search .search-input:focus {\n      border-color: white; }\n:host .header .search .search-input::-webkit-input-placeholder {\n      color: #FFFFFF; }\n:host .content .result-info {\n  padding-bottom: 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n:host .content .result-info .mat-title {\n    padding-right: 8px; }\n@media screen and (max-width: 599px) {\n    :host .content .result-info .pager {\n      margin-top: 16px; } }\n:host .content .result-info .pager .page-info {\n    font-weight: 500;\n    margin: 0 8px 0 0; }\n:host .content .simple-pagination {\n  margin: 32px 0; }\n.switch-toggle {\n  display: -webkit-box;\n  display: flex;\n  margin-left: 25px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center; }\ninput[type=checkbox] {\n  height: 0;\n  width: 0;\n  visibility: hidden; }\nlabel {\n  cursor: pointer;\n  text-indent: -9999px;\n  width: 90px;\n  height: 30px;\n  background: #ccc;\n  display: block;\n  border-radius: 100px;\n  position: relative;\n  margin: 0px 10px; }\nlabel:after {\n  content: '';\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 50px;\n  height: 30px;\n  background: #f2ab13;\n  border-radius: 50px;\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\ninput:checked + label {\n  background: #ccc; }\ninput:checked + label:after {\n  left: calc(100% - 0px);\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\nlabel:active:after {\n  width: 50px; }\n.search-container {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px;\n  flex-basis: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap; }\n.search-container .search {\n    display: -webkit-box;\n    display: flex;\n    flex-basis: 90%; }\n.search-container .search .search-click {\n      padding: 10px 20px;\n      font-size: 17px;\n      border: 1px solid grey;\n      float: left;\n      display: -webkit-box;\n      display: flex;\n      background: #ffffff;\n      flex-basis: 90%;\n      border-top-left-radius: 20px;\n      border-bottom-left-radius: 20px; }\n.search-container .search .srch-btn {\n      padding: 10px 20px;\n      background: #ccc;\n      color: white;\n      display: -webkit-box;\n      display: flex;\n      font-size: 17px;\n      border: 1px solid grey;\n      border-left: none;\n      cursor: pointer;\n      flex-basis: 10%;\n      position: relative;\n      right: 20px;\n      border-radius: 20px; }\n.search-container .filter {\n    display: -webkit-box;\n    display: flex;\n    flex-basis: 10%;\n    -webkit-box-align: center;\n            align-items: center; }\n@media only screen and (max-width: 767px) {\n      .search-container .filter {\n        padding: 20px 0px 0px 0px; } }\ntable {\n  width: 95%;\n  margin: 0px 2% 10px 2%; }\n.page-layout.blank {\n  min-height: 50%; }\n.new_btn {\n  height: 24px;\n  width: 24px;\n  background-color: #f49f14;\n  border-radius: 50px;\n  cursor: pointer;\n  padding-top: 4px; }\n.mr-lef {\n  margin-right: 10px; }\n.new_btn .mat-icon {\n  height: 20px;\n  width: 20px;\n  font-size: 17px; }\n.mr_ch {\n  margin-top: 50px;\n  height: 37px; }\n.img_s {\n  height: 25px;\n  width: 25px;\n  background-color: #f49f14;\n  border-radius: 50px;\n  margin-right: 6px; }\n.sl_toggle {\n  margin-left: 22px; }\n.inp_change {\n  height: 50px;\n  width: 100%;\n  background-color: white;\n  margin-left: 20px;\n  padding: 5px; }\n.head_ing {\n  margin: 0 2%;\n  background-color: black;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px; }\n.head_ing h4 {\n  color: white;\n  padding: 12px 12px 12px 22px;\n  margin: 0px 0; }\n.radiusBottom {\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px; }\n.change_se {\n  width: 98%;\n  border: 1px ridge grey;\n  height: 46px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n  border-radius: 50px;\n  background-color: white; }\n.change_bnt {\n  height: 44px;\n  width: 13%;\n  border-radius: 50px; }\n.txt_search {\n  width: 87%;\n  padding-left: 15px; }\n.change_se ::ng-deep .mat-form-field-underline {\n  height: 0px !important; }\n.mr_top {\n  margin-top: 20px; }\n.imgSize {\n  width: 20px;\n  height: 20px; }\n.bg_c {\n  background-color: bisque;\n  margin-top: -8px; }\n@media only screen and (min-width: 320px) and (max-width: 320px) {\n  .txt_search {\n    width: 70%;\n    padding-left: 15px; } }\n@media only screen and (max-width: 360px) {\n  .txt_search {\n    width: 70%;\n    padding-left: 15px; } }\n@media only screen and (max-width: 411px) {\n  .txt_search {\n    width: 74%;\n    padding-left: 15px; } }\n"

/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-evaluation/performance-evaluation.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-evaluation/performance-evaluation.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PerformanceEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceEvaluationComponent", function() { return PerformanceEvaluationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/api.service */ "./src/@fuse/services/api.service.ts");
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
    { setting_form: 'Annual Performance 2019', user: 'Employee 1', department: 'Sales Manager', rating: 'Team Leader' },
    { setting_form: 'Annual Performance 2019', user: 'Employee 1', department: 'Research Manager', rating: 'Team Leader' },
    { setting_form: 'Annual Performance 2019', user: 'Employee 1', department: 'Research Manager', rating: 'Team Leader' },
    { setting_form: 'Annual Review 2019', user: 'Employee 1', department: 'Research Manager', rating: 'Team Leader' },
    { setting_form: 'Annual Review 2019', user: 'Employee 1', department: 'Research Manager', rating: 'Team Leader' },
    { setting_form: 'Annual Review 2019', user: 'Employee 1', department: 'Research Manager', rating: 'Team Leader' },
    { setting_form: 'Annual Review 2019', user: 'Employee 1', department: 'Research Manager', rating: 'Team Leader' },
    { setting_form: 'Annual Review 2019', user: 'Employee 1', department: 'Research Manager', rating: 'Team Leader' },
    { setting_form: 'Annual Review 2019', user: 'Employee 1', department: 'Research Manager', rating: 'Team Leader', },
    { setting_form: 'Annual Review 2019', user: 'Employee 1', department: 'Research Manager', rating: 'Team Leader', },
];
var PerformanceEvaluationComponent = /** @class */ (function () {
    function PerformanceEvaluationComponent(router, apiloader, apiService) {
        this.router = router;
        this.apiloader = apiloader;
        this.apiService = apiService;
        this.displayedColumns = ['setting_form', 'user', 'department', 'rating', 'buttons'];
        this.dataSource = ELEMENT_DATA;
        this.chkToggle = false;
    }
    PerformanceEvaluationComponent.prototype.ngOnInit = function () {
        this.getAllPer();
    };
    PerformanceEvaluationComponent.prototype.getAllPer = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        var id = sessionStorage.getItem('client_id');
        this.apiService.getData('employees-performance-forms').subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                var data = response.data;
                _this.dataSource = data;
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
        });
    };
    PerformanceEvaluationComponent.prototype.onChange = function (e) {
        this.chkToggle = e.target.checked;
    };
    /**
    * Edit Evaluation
    */
    PerformanceEvaluationComponent.prototype.editEvaluation = function (id) {
        this.router.navigate(['/apps/performance/performance-evaluation/edit-evaluation', id]);
    };
    PerformanceEvaluationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance-evaluation',
            template: __webpack_require__(/*! ./performance-evaluation.component.html */ "./src/app/main/content/apps/performance/performance-evaluation/performance-evaluation.component.html"),
            styles: [__webpack_require__(/*! ./performance-evaluation.component.scss */ "./src/app/main/content/apps/performance/performance-evaluation/performance-evaluation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_2__["ApiLoaderService"], _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], PerformanceEvaluationComponent);
    return PerformanceEvaluationComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-management/performance-management.component.html":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-management/performance-management.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contacts\" class=\"page-layout simple left-sidenav inner-sidenav\">\r\n  <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"row\" \r\n    fxLayoutAlign=\"space-between center\">\r\n    <div class=\"title\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <mat-icon class=\"logo-icon mr-16\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">\r\n          perm_identity</mat-icon>\r\n        <span class=\"logo-text h1\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Performance\r\n          Management Form</span>\r\n      </div>\r\n    </div>\r\n    <button mat-fab routerLink=\"form-library\" class=\"fab-add\" *fuseIfOnDom [@animate]=\"{value:'*', params:{delay:'300ms',scale:'.2'}}\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n  </div>\r\n  <mat-sidenav-container>\r\n    <div class=\"center p-24 pb-56\" fusePerfectScrollbar>\r\n        <div class=\"search-container\">        \r\n            <div class=\"search\">\r\n                <input class=\"search-click\" placeholder=\"Type here....\">\r\n                <button class=\"srch-btn\">Search</button>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div fxFlex.gt-sm=\"95\" fxFlex.gt-md=\"95\" fxFlex=\"100\" class=\"head_ing\">\r\n            <h4>Set Goal Setting Forms</h4>\r\n        </div>\r\n\r\n        <div fxFlex.gt-sm=\"100\" fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n      \r\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 radiusBottom\">\r\n        \r\n              <!-- setting_form Column -->\r\n              <ng-container matColumnDef=\"name\">\r\n                <th mat-header-cell *matHeaderCellDef> Name Of Goal Setting Forms </th>\r\n                <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\r\n              </ng-container>\r\n            \r\n              <!-- Weight Column -->\r\n              <ng-container matColumnDef=\"industry\">\r\n                <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Industry </th>\r\n                <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.industry.name}} </td>\r\n              </ng-container>\r\n            \r\n              <!-- Symbol Column -->\r\n              <ng-container matColumnDef=\"job_role\">\r\n                <th mat-header-cell *matHeaderCellDef fxHide fxShow.gt-sm> Job Role </th>\r\n                <td mat-cell *matCellDef=\"let element\" fxHide fxShow.gt-sm> {{element.job_role.name}} </td>\r\n              </ng-container>        \r\n         \r\n              <!-- Buttons Column -->\r\n              <ng-container matColumnDef=\"buttons\">\r\n                  <th mat-header-cell *matHeaderCellDef>Actions</th>\r\n                  <td mat-cell *matCellDef=\"let element\"> \r\n                   <button class=\"new_btn mr-lef\" routerLink=\"form-library/{{element.id}}\"><mat-icon>edit</mat-icon></button>\r\n                   <button class=\"new_btn\" (click)=\"deleteForm(element.id)\"><mat-icon>delete</mat-icon></button>\r\n                   </td>\r\n               </ng-container>\r\n            \r\n              <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n              <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            </div>\r\n    </div>\r\n  </mat-sidenav-container>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-management/performance-management.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-management/performance-management.component.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px;\n  flex-basis: 100%;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap; }\n  @media screen and (max-width: 767px) {\n    .search-container {\n      padding: 10px; } }\n  .search-container .search {\n    display: -webkit-box;\n    display: flex;\n    flex-basis: 90%; }\n  .search-container .search .search-click {\n      padding: 10px 20px;\n      font-size: 17px;\n      border: 1px solid grey;\n      float: left;\n      display: -webkit-box;\n      display: flex;\n      background: #ffffff;\n      flex-basis: 90%;\n      border-top-left-radius: 20px;\n      border-bottom-left-radius: 20px; }\n  .search-container .search .srch-btn {\n      padding: 10px 20px;\n      background: #ccc;\n      color: white;\n      display: -webkit-box;\n      display: flex;\n      font-size: 17px;\n      border: 1px solid grey;\n      border-left: none;\n      cursor: pointer;\n      flex-basis: 10%;\n      position: relative;\n      right: 20px;\n      border-radius: 20px; }\n  @media screen and (max-width: 767px) {\n        .search-container .search .srch-btn {\n          right: 40px; } }\n  .head_ing {\n  margin: 0 2%;\n  background-color: black;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px; }\n  .head_ing h4 {\n  color: white;\n  padding: 12px 12px 12px 22px;\n  margin: 0px 0; }\n  table {\n  width: 96%;\n  margin: 0px 2% 10px 2%; }\n  table .new_btn {\n    height: 24px;\n    width: 24px;\n    background-color: #f49f14;\n    border-radius: 50px;\n    cursor: pointer;\n    padding-top: 4px; }\n  table .new_btn .mat-icon {\n      height: 20px;\n      width: 20px;\n      font-size: 17px; }\n  table .mr-lef {\n    margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-management/performance-management.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-management/performance-management.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PerformanceManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceManagementComponent", function() { return PerformanceManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/services/api.service */ "./src/@fuse/services/api.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerformanceManagementComponent = /** @class */ (function () {
    function PerformanceManagementComponent(toast, apiService, apiloader) {
        this.toast = toast;
        this.apiService = apiService;
        this.apiloader = apiloader;
        this.displayedColumns = ['name', 'industry', 'job_role', 'buttons'];
    }
    PerformanceManagementComponent.prototype.ngOnInit = function () {
        this.getForms();
    };
    PerformanceManagementComponent.prototype.getForms = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        this.apiService.getData('goal-setting-form').subscribe(function (response) {
            if (response.status == 'success') {
                _this.apiloader.setLoader(false);
                _this.dataSource = response.data;
            }
        }, function (error) { return _this.apiloader.setLoader(false); });
    };
    PerformanceManagementComponent.prototype.deleteForm = function (formId) {
        var _this = this;
        this.apiloader.setLoader(true);
        this.apiService.deleteData('goal-setting-form/' + formId).subscribe(function (response) {
            if (response.status == 'success') {
                _this.apiloader.setLoader(false);
                _this.getForms();
                _this.toast.showSuccess('Goal Setting Form Deleted Successfully!.');
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    PerformanceManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance-management',
            template: __webpack_require__(/*! ./performance-management.component.html */ "./src/app/main/content/apps/performance/performance-management/performance-management.component.html"),
            styles: [__webpack_require__(/*! ./performance-management.component.scss */ "./src/app/main/content/apps/performance/performance-management/performance-management.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_2__["ApiLoaderService"]])
    ], PerformanceManagementComponent);
    return PerformanceManagementComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-setting/performance-setting.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-setting/performance-setting.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HEADER -->\r\n<div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayout.gt-xs=\"row\"\r\n  fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n  <!-- APP TITLE -->\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <!-- <mat-icon class=\"logo-icon mr-16\">settings</mat-icon> -->\r\n      <span class=\"logo-text h1\">Performance Management Setting Up</span>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- / APP TITLE -->\r\n</div>\r\n<!-- / HEADER -->\r\n\r\n<div class=\"performance m-16\">\r\n  <div class=\"free\">\r\n\r\n    <!-- ============================================================== -->\r\n    <!-- Card Grid-->\r\n    <!-- ============================================================== -->\r\n    <div fxLayout=\"row wrap\">\r\n      <div fxFlex.gt-sm=\"100\" fxFlex=\"100\">\r\n\r\n        <div fxFlex.gt-sm=\"95\" fxFlex.gt-md=\"95\" fxFlex=\"100\" class=\"head_ing\">\r\n          <h4>Select Employees</h4>\r\n        </div>\r\n\r\n        <mat-card xFlex.gt-sm=\"95\" fxFlex.gt-md=\"95\" fxFlex=\"100\" class=\"mm_leftCard\">\r\n          <div fxFlex.gt-sm=\"100\" fxFlex.gt-md=\"100\" fxFlex=\"100\" class=\"mr_top\">\r\n            <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"selectionOption\">\r\n              <mat-radio-button class=\"w_idth\" name=\"AddList\" value=\"1\">Add by List</mat-radio-button>\r\n              <mat-radio-button class=\"w_idth\" name=\"BulkList\" value=\"2\">Bulk Upload List</mat-radio-button>\r\n            </mat-radio-group>\r\n          </div>\r\n          <div xFlex.gt-sm=\"95\" fxFlex.gt-md=\"95\" fxFlex=\"100\" class=\"mm_leftCard bulk-upload\"\r\n            *ngIf=\"selectionOption==2\">\r\n            <div class=\"upload\">\r\n              <form>\r\n                <span style=\"color: #949090; padding-right: 5px;\"> Upload File : </span>\r\n                <label class=\"file\">\r\n                  <input type=\"file\" id=\"file\" ng2FileSelect aria-label=\"File browser example\" />\r\n                  <span class=\"file-custom\"></span>\r\n                </label>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n\r\n        <div xFlex.gt-sm=\"95\" fxFlex.gt-md=\"95\" fxFlex=\"100\" class=\"mm_leftCard\" *ngIf=\"selectionOption==1\">\r\n          <mat-form-field class=\"example-chip-list mat_w\">\r\n            <mat-chip-list #chipList aria-label=\"Fruit selection\">\r\n              <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n                (removed)=\"remove(fruit)\">\r\n                {{fruit.name}}\r\n                <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n              </mat-chip>\r\n              <input placeholder=\"Search User...\" #fruitInput [formControl]=\"fruitCtrl\" [matAutocomplete]=\"auto\"\r\n                [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\">\r\n            </mat-chip-list>\r\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\r\n              <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\r\n                {{fruit.name}}\r\n              </mat-option>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"download\">\r\n          Download File : <span style=\"padding-left: 10px\"> <strong> Download Template </strong></span> <i\r\n            class=\"fa fa-download\"></i>\r\n        </div>\r\n\r\n        <div fxFlex.gt-sm=\"95\" fxFlex.gt-md=\"95\" fxFlex=\"100\" class=\"head_ing1\">\r\n          <h4>Select Goal Form</h4>\r\n        </div>\r\n\r\n        <!-- <div class=\"title\">\r\n           <div class=\"left\">\r\n              <h4>Select Goal Form</h4>\r\n           </div>\r\n           <div class=\"right\">+</div>\r\n         </div> -->\r\n\r\n        <div fxFlex.gt-sm=\"100\" fxFlex.gt-md=\"100\" fxFlex=\"100\">\r\n          <mat-card xFlex.gt-sm=\"95\" fxFlex.gt-md=\"95\" fxFlex=\"100\" class=\"mm_leftCard\">\r\n            <div class=\"data\">\r\n              <div class=\"change_se\">\r\n                <input class=\"txt_search\" placeholder=\"Type here....\">\r\n                <button class=\"change_bnt\">\r\n                  <mat-icon>search</mat-icon>\r\n                </button>\r\n              </div>\r\n              <div class=\"search-content\">\r\n                <mat-radio-group aria-label=\"Select an option\"  [(ngModel)]=\"enrollmentForm\">\r\n                  <mat-radio-button class=\"srchrdio\" [value]=\"eachVal.id\" *ngFor=\"let eachVal of totalGoals\">\r\n                    {{eachVal.name}}</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n            </div>\r\n          </mat-card>\r\n        </div>\r\n        <!-- <div class=\"change_se\">\r\n              <input class=\"txt_search\" placeholder=\"Type here....\">\r\n              <button class=\"change_bnt\"><mat-icon>search</mat-icon></button>\r\n          </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class = \"text-center\">\r\n  <button mat-raised-button (click)=\"onSubmit()\" color=\"primary\">Save & Confirm</button>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-setting/performance-setting.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-setting/performance-setting.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.head_ing {\n  margin: 0 2%;\n  background-color: black; }\n.head_ing h4 {\n  color: white;\n  padding: 12px 12px 12px 22px;\n  margin: 0px 0; }\n.mr_top {\n  margin: 20px 3% 10px 3%; }\n.mr_top1 {\n  margin: 20px 0px 10px 0px; }\n.w_idth {\n  width: 50%;\n  padding: 10px; }\n.mat_w {\n  width: 100%; }\n.mat_w ::ng-deep .mat-form-field-infix {\n    margin: 10px; }\n.download {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding-right: 4%;\n  margin-top: 15px; }\n.download i {\n    font-size: 20px;\n    color: #000;\n    padding-left: 10px; }\n.mat_w::ng-deep .mat-form-field-flex {\n  background: antiquewhite; }\n.head_ing1 {\n  margin: 10px 2% 0 2%;\n  background-color: black; }\n.head_ing1 h4 {\n  color: white;\n  padding: 12px 12px 12px 22px;\n  margin: 0px 0; }\n.data {\n  padding: 13px; }\n.change_se {\n  border-radius: 20px;\n  padding: 6px;\n  height: 36px;\n  width: 300px;\n  border: 1px ridge gray;\n  display: -webkit-box;\n  display: flex; }\n.txt_search {\n  width: 90%;\n  padding: 10px; }\n.mm_left {\n  margin-left: 10px; }\n.mm_leftCard {\n  margin: 0px 2.1%; }\n.mat-card {\n  padding: 0px !important; }\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  padding: 10px; }\n.search-content {\n  padding: 15px 0px; }\n.search-content .srchrdio {\n    display: block;\n    padding-bottom: 10px; }\n.bulk-upload {\n  padding-bottom: 20px; }\n.bulk-upload .bulk-upload i {\n    color: #000; }\n.bulk-upload .bulk-upload .download, .bulk-upload .bulk-upload .upload {\n    font-size: 18px;\n    padding: 15px 0px; }\n.bulk-upload .download i {\n    padding-left: 10px;\n    font-size: 20px; }\n.bulk-upload .file {\n    position: relative;\n    display: inline-block;\n    cursor: pointer;\n    height: 2.5rem;\n    width: 400px; }\n@media only screen and (max-width: 767px) {\n      .bulk-upload .file {\n        width: 320px;\n        margin: 15px 0px; } }\n.bulk-upload input {\n    min-width: 14rem;\n    margin: 0;\n    filter: alpha(opacity=0);\n    opacity: 0; }\n.bulk-upload .file-custom {\n    position: absolute;\n    top: -5px;\n    right: 0;\n    left: 0;\n    z-index: 5;\n    font-size: 16px;\n    height: 40px;\n    padding: .5rem 1rem;\n    line-height: 1.7;\n    color: #555;\n    background-color: antiquewhite;\n    border: .075rem solid #ddd;\n    border-radius: .25rem;\n    box-shadow: inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none; }\n@media only screen and (max-width: 767px) {\n      .bulk-upload .file-custom {\n        top: -10px; } }\n.bulk-upload span.file-custom:before {\n    position: absolute;\n    top: -.075rem;\n    right: -.075rem;\n    bottom: -.075rem;\n    z-index: 6;\n    font-size: 18px;\n    display: block;\n    content: \"Choose a File\";\n    height: 40px;\n    padding: .5rem 1rem;\n    line-height: 1.5;\n    color: #000;\n    background: #F57D3F;\n    border: .075rem solid #ddd;\n    border-radius: 0 .25rem .25rem 0; }\n.bulk-upload .file-history {\n    width: 100%;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.bulk-upload .file-history th.mat-header-cell {\n    background: #f57d3f;\n    font-size: 14px;\n    font-weight: bold;\n    color: #000; }\n.bulk-upload .upload button {\n    margin-left: 10px;\n    background-color: #006b48 !important; }\n@media only screen and (max-width: 767px) {\n      .bulk-upload .upload button {\n        margin-left: 0px; } }\n.bulk-upload .set_height {\n    overflow-y: scroll; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/performance/performance-setting/performance-setting.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance-setting/performance-setting.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PerformanceSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceSettingComponent", function() { return PerformanceSettingComponent; });
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/services/api.service */ "./src/@fuse/services/api.service.ts");
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








var PerformanceSettingComponent = /** @class */ (function () {
    function PerformanceSettingComponent(toast, apiService, apiloader) {
        var _this = this;
        this.toast = toast;
        this.apiService = apiService;
        this.apiloader = apiloader;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        this.enrollmentForm = '';
        this.fruitCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.fruits = [];
        //allFruits: string[] = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'];
        this.allFruits = [];
        this.selectionOption = '1';
        this.userType = sessionStorage.getItem('role');
        this.getAllUsers();
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fruit) { return fruit ? _this._filter(fruit) : _this.allFruits.slice(); }));
    }
    PerformanceSettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        this.apiService.getData('goal-setting-form').subscribe(function (response) {
            if (response.status === 'success') {
                _this.apiloader.setLoader(false);
                _this.totalGoals = response.data;
            }
        }, function (error) { return _this.apiloader.setLoader(false); });
    };
    PerformanceSettingComponent.prototype.add = function (event) {
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // Add our fruit
            if ((value || '').trim()) {
                this.fruits.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.fruitCtrl.setValue(null);
        }
    };
    PerformanceSettingComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit.name);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    // getAllUsers(){
    //   const id = sessionStorage.getItem('client_id');        
    //     this.apiService.getData('users', { 'client_id': id } ).subscribe(response => {
    //         if (response.data){
    //             let data = response.data;
    //             let users = [];
    //             for (let i = 0; i < data.length; i++){
    //                 if (data[i].role !== 'CLIENT_ADMIN'){
    //                     users.push(data[i]);
    //                 }
    //             }
    //         }
    //     });
    // }
    PerformanceSettingComponent.prototype.selected = function (event) {
        console.log(event);
        this.fruits.push(event.option.value);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    };
    PerformanceSettingComponent.prototype._filter = function (value) {
        var filterValue = '';
        if (value.name) {
            filterValue = value.name.toLowerCase();
        }
        else {
            filterValue = value.toLowerCase();
        }
        console.log(this.allFruits.filter(function (fruit) { return fruit.name.toLowerCase().indexOf(filterValue) === 0; }));
        return this.allFruits.filter(function (fruit) { return fruit.name.toLowerCase().indexOf(filterValue) === 0; });
        //return this.totalGoals.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
    };
    PerformanceSettingComponent.prototype.getAllUsers = function () {
        var _this = this;
        var id = sessionStorage.getItem('client_id');
        var role = sessionStorage.getItem('role');
        //alert(role);
        if (role === 'CLIENT_ADMIN') {
            this.apiService.getData('users', { 'client_id': id }).subscribe(function (response) {
                if (response.data) {
                    var data = response.data;
                    var users = [];
                    var usersName = [];
                    for (var i = 0; i < data.length; i++) {
                        var obj = { name: '', id: '' };
                        if (data[i].role !== 'CLIENT_ADMIN') {
                            users.push(data[i]);
                            obj.name = data[i].first_name + ' ' + data[i].last_name;
                            obj.id = data[i].id;
                            var obj1 = data[i].first_name + ' ' + data[i].last_name;
                            usersName.push(obj);
                        }
                    }
                    _this.allFruits = usersName;
                    console.log(_this.allFruits);
                }
            }, function (error) {
                //this.toast.showError(error);
            });
        }
    };
    PerformanceSettingComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.fruits);
        this.apiloader.setLoader(true);
        var users = this.fruits.map(function (eachFruit) {
            return eachFruit.id;
        });
        var id = sessionStorage.getItem('client_id');
        this.apiService.postData('appraisal-cycle/assign', { client_id: id, goal_setting_form_id: this.enrollmentForm, users: users }).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                var data = response.data;
                console.log(data);
                _this.dataSource = data;
                _this.toast.showSuccess('Goal Setting Form Assigned Successfully!.');
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fruitInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PerformanceSettingComponent.prototype, "fruitInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocomplete"])
    ], PerformanceSettingComponent.prototype, "matAutocomplete", void 0);
    PerformanceSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-performance-setting',
            template: __webpack_require__(/*! ./performance-setting.component.html */ "./src/app/main/content/apps/performance/performance-setting/performance-setting.component.html"),
            styles: [__webpack_require__(/*! ./performance-setting.component.scss */ "./src/app/main/content/apps/performance/performance-setting/performance-setting.component.scss")]
        }),
        __metadata("design:paramtypes", [_fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"], _fuse_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_5__["ApiLoaderService"]])
    ], PerformanceSettingComponent);
    return PerformanceSettingComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/performance/performance.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"performance\" class=\"page-layout simple tabbed perform\" fusePerfectScrollbar>\r\n   <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/performance/performance.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#editemp {\n  width: 384px;\n  max-width: 384px;\n  padding: 0px;\n  text-align: center;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n@media screen and (max-width: 599px) {\n    #editemp {\n      padding: 0px;\n      width: 100%; } }\n#editemp .logo {\n    width: 128px;\n    margin: 32px auto; }\n#editemp .title {\n    font-size: 12px;\n    color: #ccc;\n    margin: 16px 32px 32px 30px; }\n#editemp form {\n    width: 100%;\n    text-align: left; }\n#editemp form mat-form-field {\n      width: 100%; }\n#editemp form .submit-button {\n      width: 220px;\n      margin: 16px auto;\n      display: block; }\n@media screen and (max-width: 599px) {\n        #editemp form .submit-button {\n          width: 90%; } }\n#editemp .login {\n    margin: 32px auto 24px auto;\n    width: 250px;\n    font-weight: 500; }\n#editemp .login .text {\n      margin-right: 8px; }\n.reset {\n  display: block;\n  width: 100%;\n  left: 30%;\n  float: left;\n  position: relative; }\n.editemp .mat-card {\n  border: 1px solid #fa7915;\n  border-radius: 10px; }\n.editemp .mat-card-header {\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #f2ab13;\n  padding: 14px 0 0 0;\n  border-radius: 10px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n.editemp .mat-card-title {\n  font-size: 20px;\n  font-weight: 500; }\n.editemp .mat-card-subtitle {\n  font-size: 20px;\n  color: #000; }\n.editemp .mat-card-title, .editemp .mat-card-subtitle {\n  margin-bottom: 5px; }\n.editemp .mat-card-content {\n  text-align: left;\n  padding: 20px; }\n.editemp .mat-card-content ul {\n  list-style: none;\n  margin: 0; }\n.editemp .mat-card-content ul li {\n  font-size: 18px;\n  padding: 5px 0px; }\n.editemp .mat-card-content ul li:before {\n  font-weight: 100;\n  margin-left: -1em;\n  background-color: #fb7215;\n  border-radius: 50%;\n  content: \"\";\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 2px;\n  height: 8px;\n  width: 8px; }\n.editemp .free {\n  width: 100%;\n  display: block;\n  float: left;\n  padding: 20px; }\n.editemp .paid {\n  width: 60%;\n  display: block;\n  float: left;\n  padding: 20px; }\n.editemp .paid .left, .editemp .paid .right {\n    width: 50%;\n    display: block;\n    float: left; }\n.new_r {\n  float: left;\n  margin-left: 20px;\n  margin-top: 20px !important; }\ndiv.mat-horizontal-stepper-header-container {\n  display: none !important; }\n.rr_right {\n  float: right; }\n@media only screen and (max-width: 767px) {\n  .editemp {\n    margin: 0px !important; }\n    .editemp .free, .editemp .paid, .editemp .left, .editemp .right {\n      width: 100% !important; }\n    .editemp .free .mat-card-content {\n      height: 230px; }\n    .editemp .paid .mat-card-content {\n      height: 600px; } }\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n.example-headers-align .mat-expansion-panel-header-description {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center; }\nmat-form-field {\n  display: block !important; }\n.mat-icon {\n  height: 37px !important; }\n.mt_i {\n  font-size: 24px !important; }\n.mat-expansion-panel-header {\n  background-color: black !important;\n  margin-bottom: 10px;\n  border-radius: 11px; }\n.mat-expansion-panel-content {\n  background-color: white !important; }\n.mat-expansion-panel:not([class*=mat-elevation-z]) {\n  box-shadow: none !important; }\n.mat-expansion-panel-header-title {\n  color: white !important; }\n.change_c {\n  color: white !important;\n  font-size: 44px; }\n.lbl_cs {\n  float: left; }\n.mr_tp {\n  margin-top: 15px;\n  margin-right: 10px; }\n.mr_last {\n  margin-top: 15px; }\n.mat-form-field-infix {\n  padding: 5px 0 5px 0 !important; }\n.example-button-row button,\n.example-button-row a {\n  margin-right: 8px; }\n.example-button-row {\n  text-align: center; }\n.ch_color {\n  padding-top: 7px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/performance/performance.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance.component.ts ***!
  \************************************************************************/
/*! exports provided: PerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceComponent", function() { return PerformanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }
var PerformanceComponent = /** @class */ (function () {
    function PerformanceComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
        // For form validator
        //email = new FormControl('', [Validators.required, Validators.email]);
        // Sufix and prefix
        this.hide = false;
        // getErrorMessage() {
        //   return this.email.hasError('required')
        //     ? 'You must enter a value'
        //     : this.email.hasError('email')
        //       ? 'Not a valid email'
        //       : '';
        // }
        this.step = 1;
        this.options = _formBuilder.group({
            hideRequired: false,
            floatLabel: 'auto'
        });
    }
    PerformanceComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    // nextStep() {
    //   this.step++;
    // }
    // prevStep() {
    //   this.step--;
    // }
    PerformanceComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    PerformanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-performance',
            template: __webpack_require__(/*! ./performance.component.html */ "./src/app/main/content/apps/performance/performance.component.html"),
            styles: [__webpack_require__(/*! ./performance.component.scss */ "./src/app/main/content/apps/performance/performance.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PerformanceComponent);
    return PerformanceComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/performance/performance.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/content/apps/performance/performance.module.ts ***!
  \*********************************************************************/
/*! exports provided: PerformanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceModule", function() { return PerformanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _performance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performance.component */ "./src/app/main/content/apps/performance/performance.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _employee_performance_employee_performance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-performance/employee-performance.component */ "./src/app/main/content/apps/performance/employee-performance/employee-performance.component.ts");
/* harmony import */ var _form_library_form_library_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form-library/form-library.component */ "./src/app/main/content/apps/performance/form-library/form-library.component.ts");
/* harmony import */ var _form_library_editpopup_editpopup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-library/editpopup/editpopup.component */ "./src/app/main/content/apps/performance/form-library/editpopup/editpopup.component.ts");
/* harmony import */ var _performance_evaluation_performance_evaluation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./performance-evaluation/performance-evaluation.component */ "./src/app/main/content/apps/performance/performance-evaluation/performance-evaluation.component.ts");
/* harmony import */ var _performance_evaluation_edit_evaluation_edit_evaluation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./performance-evaluation/edit-evaluation/edit-evaluation.component */ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/edit-evaluation.component.ts");
/* harmony import */ var _performance_evaluation_edit_evaluation_evaluation_pop_evaluation_pop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./performance-evaluation/edit-evaluation/evaluation-pop/evaluation-pop.component */ "./src/app/main/content/apps/performance/performance-evaluation/edit-evaluation/evaluation-pop/evaluation-pop.component.ts");
/* harmony import */ var _performance_setting_performance_setting_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./performance-setting/performance-setting.component */ "./src/app/main/content/apps/performance/performance-setting/performance-setting.component.ts");
/* harmony import */ var _performance_management_performance_management_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./performance-management/performance-management.component */ "./src/app/main/content/apps/performance/performance-management/performance-management.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        component: _performance_component__WEBPACK_IMPORTED_MODULE_4__["PerformanceComponent"],
        children: [
            {
                path: 'performance-management',
                component: _performance_management_performance_management_component__WEBPACK_IMPORTED_MODULE_13__["PerformanceManagementComponent"],
            },
            {
                path: 'performance-management/form-library',
                component: _form_library_form_library_component__WEBPACK_IMPORTED_MODULE_7__["FormLibraryComponent"],
            },
            {
                path: 'performance-management/form-library/:formId',
                component: _form_library_form_library_component__WEBPACK_IMPORTED_MODULE_7__["FormLibraryComponent"],
            },
            {
                path: 'performance-evaluation',
                component: _performance_evaluation_performance_evaluation_component__WEBPACK_IMPORTED_MODULE_9__["PerformanceEvaluationComponent"],
            },
            {
                path: 'employee-performance',
                component: _employee_performance_employee_performance_component__WEBPACK_IMPORTED_MODULE_6__["EmployeePerformanceComponent"],
            },
            {
                path: 'performance-setting',
                component: _performance_setting_performance_setting_component__WEBPACK_IMPORTED_MODULE_12__["PerformanceSettingComponent"],
            },
            {
                path: 'performance-evaluation/edit-evaluation/:id',
                component: _performance_evaluation_edit_evaluation_edit_evaluation_component__WEBPACK_IMPORTED_MODULE_10__["EditEvaluationComponent"],
            }
        ]
    }
];
var PerformanceModule = /** @class */ (function () {
    function PerformanceModule() {
    }
    PerformanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_3__["FuseSharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"]
            ],
            declarations: [_performance_component__WEBPACK_IMPORTED_MODULE_4__["PerformanceComponent"], _employee_performance_employee_performance_component__WEBPACK_IMPORTED_MODULE_6__["EmployeePerformanceComponent"], _form_library_form_library_component__WEBPACK_IMPORTED_MODULE_7__["FormLibraryComponent"], _form_library_editpopup_editpopup_component__WEBPACK_IMPORTED_MODULE_8__["EditpopupComponent"], _performance_evaluation_performance_evaluation_component__WEBPACK_IMPORTED_MODULE_9__["PerformanceEvaluationComponent"], _performance_evaluation_edit_evaluation_edit_evaluation_component__WEBPACK_IMPORTED_MODULE_10__["EditEvaluationComponent"], _performance_evaluation_edit_evaluation_evaluation_pop_evaluation_pop_component__WEBPACK_IMPORTED_MODULE_11__["EvaluationPopComponent"], _performance_setting_performance_setting_component__WEBPACK_IMPORTED_MODULE_12__["PerformanceSettingComponent"], _performance_management_performance_management_component__WEBPACK_IMPORTED_MODULE_13__["PerformanceManagementComponent"]],
            entryComponents: [_form_library_editpopup_editpopup_component__WEBPACK_IMPORTED_MODULE_8__["EditpopupComponent"], _performance_evaluation_edit_evaluation_evaluation_pop_evaluation_pop_component__WEBPACK_IMPORTED_MODULE_11__["EvaluationPopComponent"]]
        })
    ], PerformanceModule);
    return PerformanceModule;
}());



/***/ })

}]);
//# sourceMappingURL=performance-performance-module.js.map