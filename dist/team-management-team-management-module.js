(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["team-management-team-management-module"],{

/***/ "./src/app/main/content/apps/team-management/add-team/add-team.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main/content/apps/team-management/add-team/add-team.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar matDialogTitle class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\r\n\r\n        <form [formGroup]=\"teamForm\">\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <input name=\"title\" formControlName=\"title\" placeholder=\"Title\" matInput required>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <mat-select formControlName=\"managerId\" name=\"managerId\" placeholder=\"Manager\" required>\r\n                      <mat-option *ngFor=\"let manager of members\" (onSelectionChange)=\"onSelectManager($event)\" [value]=\"manager.id\">\r\n                        {{manager.first_name}} {{manager.last_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"mb-24\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n                <mat-form-field fxFlex>\r\n                    <mat-select formControlName=\"employees\" multiple name=\"employees\" placeholder=\"Member\" required>\r\n                        <ng-container *ngFor=\"let mem of members\">\r\n                            <mat-option *ngIf=\"this.teamForm.get('managerId').value != mem.id\" (onSelectionChange)=\"selectedEmployee($event)\" [value]=\"mem.id\">{{mem.first_name}} {{mem.last_name}}</mat-option>\r\n                        </ng-container>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <button *ngIf=\"action === 'ADD'\"\r\n                mat-raised-button\r\n                (click)=\"closeModal(teamForm.value)\"\r\n                class=\"save-button mat-accent\"\r\n                [disabled]=\"teamForm.invalid\"\r\n                aria-label=\"SAVE\">\r\n            SAVE\r\n        </button>\r\n\r\n        <button *ngIf=\"action === 'EDIT'\"\r\n                mat-raised-button\r\n                (click)=\"closeModal(teamForm.value)\"\r\n                class=\"save-button mat-accent\"\r\n                [disabled]=\"teamForm.invalid\"\r\n                aria-label=\"Update\">\r\n            Update\r\n        </button>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/team-management/add-team/add-team.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/main/content/apps/team-management/add-team/add-team.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.contact-form-dialog {\n  width: 400px; }\n@media screen and (max-width: 599px) {\n    .contact-form-dialog {\n      width: 100%; } }\n.contact-form-dialog .mat-dialog-container {\n    padding: 0; }\n.contact-form-dialog .mat-dialog-container .mat-toolbar {\n      -webkit-box-flex: 1;\n              flex: 1 0 auto;\n      min-height: initial; }\n.contact-form-dialog .mat-dialog-container .toolbar-bottom {\n      height: auto; }\n.contact-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/team-management/add-team/add-team.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/apps/team-management/add-team/add-team.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeamComponent", function() { return AddTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _team_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../team.model */ "./src/app/main/content/apps/team-management/team.model.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var _team_management_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../team-management.service */ "./src/app/main/content/apps/team-management/team-management.service.ts");
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







var AddTeamComponent = /** @class */ (function () {
    function AddTeamComponent(dialogRef, data, formBuilder, apiloader, toast, teamService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.apiloader = apiloader;
        this.toast = toast;
        this.teamService = teamService;
        this.members = [];
        this.teamMembers = [];
        this.teamId = '';
        this.action = data.action;
        if (this.action === 'EDIT') {
            this.dialogTitle = 'Edit team';
            this.team = data.team_data;
            this.teamId = this.team.id;
            this.teamForm = this.createTeamForm();
            for (var i = 1; i < this.team.members.length; i++) {
                this.teamMembers.push(this.team.members[i].id);
            }
            this.teamForm.patchValue({ 'managerId': this.team.members[0].id });
        }
        else {
            this.dialogTitle = 'New team';
            this.team = new _team_model__WEBPACK_IMPORTED_MODULE_3__["Team"]({});
            this.teamForm = this.createTeamForm();
            this.teamId = '';
        }
        this.getAllUsers();
    }
    AddTeamComponent.prototype.createTeamForm = function () {
        return this.formBuilder.group({
            title: [this.team.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            employees: [this.teamMembers, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            managerId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    AddTeamComponent.prototype.getAllUsers = function () {
        var _this = this;
        var cli_id = sessionStorage.getItem('client_id');
        this.teamService.getData('users', { 'client_id': cli_id }).subscribe(function (response) {
            if (response.data) {
                var data = response.data;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].role !== 'CLIENT_ADMIN') {
                        _this.members.push(data[i]);
                    }
                }
            }
        }, function (error) {
            _this.toast.showError(error);
        });
    };
    AddTeamComponent.prototype.onSelectManager = function (event) {
        /* if (event.isUserInput) {
            console.log(event.source.value);
        } */
    };
    AddTeamComponent.prototype.selectedEmployee = function (event) {
        /* if (event.isUserInput) {
            console.log(event.source.value, event.source.selected);
        } */
    };
    AddTeamComponent.prototype.closeModal = function (data) {
        if (this.teamId !== '') {
            data['id'] = this.teamId;
        }
        this.dialogRef.close(data);
    };
    AddTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-team',
            template: __webpack_require__(/*! ./add-team.component.html */ "./src/app/main/content/apps/team-management/add-team/add-team.component.html"),
            styles: [__webpack_require__(/*! ./add-team.component.scss */ "./src/app/main/content/apps/team-management/add-team/add-team.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_4__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"],
            _team_management_service__WEBPACK_IMPORTED_MODULE_6__["TeamManagementService"]])
    ], AddTeamComponent);
    return AddTeamComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/team-management/manage-team/manage-team.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/team-management/manage-team/manage-team.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"manage-team\" class=\"page-layout simple left-sidenav inner-sidenav\">\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\"\r\n    fxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n    \r\n    <!-- APP TITLE -->\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n           <mat-icon class=\"logo-icon mr-16\">supervisor_account</mat-icon>\r\n           <span class=\"logo-text h1\">Team Management</span>\r\n       </div>\r\n    \r\n    </div>\r\n    <!-- / APP TITLE -->\r\n    <button mat-fab class=\"fab-add\" (click)=\"openModal('add')\" aria-label=\"Add event\"\r\n        *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'300ms',scale:'0.2'}}\">\r\n    <mat-icon>add</mat-icon>\r\n    </button>\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <mat-sidenav-container>\r\n\r\n            <!-- SIDENAV -->\r\n           <!--  <mat-sidenav class=\"sidenav\" position=\"start\" opened=\"true\" mode=\"side\"\r\n                         fuseMatSidenavHelper=\"contacts-main-sidenav\" mat-is-locked-open=\"gt-sm\">\r\n    \r\n                <fuse-contacts-main-sidenav *fuseIfOnDom [@animate]=\"{value:'*'}\"></fuse-contacts-main-sidenav>\r\n    \r\n            </mat-sidenav> -->\r\n            <!-- / SIDENAV -->\r\n    \r\n            <!-- CENTER -->\r\n            <div class=\"center p-24 pb-56 pr-sm-92\" fusePerfectScrollbar>\r\n    \r\n                <!-- CONTENT -->\r\n                <div class=\"content mat-white-bg mat-elevation-z4\">\r\n                        <mat-table #table [dataSource]=\"dataSource\"\r\n                                    [@animateStagger]=\"{value:'50'}\" *ngIf=\"dataSource\">\r\n                            <!-- Id Column -->\r\n                            <!-- <ng-container cdkColumnDef=\"id\">\r\n                                <mat-header-cell *cdkHeaderCellDef>Id</mat-header-cell>\r\n                                <mat-cell *cdkCellDef=\"let element\">\r\n                                    <p class=\"text-truncate font-weight-600\">{{element.id}}</p>\r\n                                </mat-cell>\r\n                            </ng-container> -->\r\n\r\n                            <ng-container matColumnDef=\"index\">\r\n                                <mat-header-cell *matHeaderCellDef>No.</mat-header-cell>\r\n                                <mat-cell *matCellDef=\"let element; let i = index;\">\r\n                                    <p class=\"text-truncate font-weight-600\">{{i}}</p>\r\n                                </mat-cell>\r\n                            </ng-container>\r\n\r\n                            <!-- Name Column -->\r\n                            <ng-container cdkColumnDef=\"name\">\r\n                                <mat-header-cell *cdkHeaderCellDef>Team Name</mat-header-cell>\r\n                                <mat-cell *cdkCellDef=\"let element\">\r\n                                    <p class=\"text-truncate font-weight-600\">{{element.title}}</p>\r\n                                </mat-cell>\r\n                            </ng-container>\r\n                        \r\n                            <!-- Member Column -->\r\n                            <ng-container cdkColumnDef=\"member\">\r\n                                <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-sm>Member</mat-header-cell>\r\n                                <mat-cell *cdkCellDef=\"let element\" fxHide fxShow.gt-sm>\r\n                                    <p class=\"email text-truncate\">\r\n                                        {{element.employees}}\r\n                                    </p>\r\n                                </mat-cell>\r\n                            </ng-container>\r\n                        \r\n                            <!-- Manager Column -->\r\n                            <ng-container cdkColumnDef=\"manager\">\r\n                                <mat-header-cell *cdkHeaderCellDef>Manager</mat-header-cell>\r\n                                <mat-cell *cdkCellDef=\"let element\">\r\n                                    <p class=\"manager text-truncate\" *ngIf=\"element.members.length\">\r\n                                        {{element.members[0].first_name}} {{element.members[0].last_name}}\r\n                                    </p>\r\n                                </mat-cell>\r\n                            </ng-container>\r\n\r\n                            <!-- Buttons Column -->\r\n                            <ng-container cdkColumnDef=\"buttons\">\r\n                                <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\r\n                                <mat-cell *cdkCellDef=\"let element\">\r\n                                    <div fxFlex=\"row\" fxLayoutAlign=\"end center\">\r\n\r\n                                        <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" aria-label=\"More\"\r\n                                                (click)=\"$event.stopPropagation();\">\r\n                                            <mat-icon class=\"secondary-text\">more_vert</mat-icon>\r\n                                        </button>\r\n                        \r\n                                        <mat-menu #moreMenu=\"matMenu\">\r\n                                            <button mat-menu-item aria-label=\"edit\" (click)=\"openModal(element)\">\r\n                                                <mat-icon>edit</mat-icon>\r\n                                                <span>Edit</span>\r\n                                            </button>\r\n                                            <button mat-menu-item aria-label=\"remove\" (click)=\"deleteTeam(element.id)\">\r\n                                                <mat-icon>delete</mat-icon>\r\n                                                <span>Delete</span>\r\n                                            </button>\r\n                                        </mat-menu>\r\n                                    </div>\r\n                        \r\n                                </mat-cell>\r\n                            </ng-container>\r\n                        \r\n                            <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                            <mat-row *cdkRowDef=\"let element; columns: displayedColumns; let i = index\"\r\n                                    class=\"contact\"\r\n                                    [@animate]=\"{value:'*',params:{y:'100%'}}\">\r\n                            </mat-row>\r\n                        </mat-table>             \r\n    \r\n                </div>\r\n                <!-- / CONTENT -->\r\n    \r\n            </div>\r\n            <!-- / CENTER -->\r\n    \r\n    </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/team-management/manage-team/manage-team.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/main/content/apps/team-management/manage-team/manage-team.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  width: 100%; }\n.content .mat-table {\n    width: 100%;\n    background: transparent;\n    box-shadow: none; }\n.content .mat-table .mat-column-checkbox {\n      -webkit-box-flex: 0;\n              flex: 0 1 64px;\n      padding-left: 18px; }\n.content .mat-table .mat-column-avatar {\n      -webkit-box-flex: 0;\n              flex: 0 1 64px; }\n.content .mat-table .mat-column-buttons {\n      -webkit-box-flex: 0;\n              flex: 0 1 80px; }\n.content .mat-table .mat-header-row {\n      padding: 8px; }\n.content .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      padding: 8px; }\n.content .mat-table .mat-row .mat-cell {\n        min-width: 0; }\n.content .mat-table .mat-row .mat-cell.mat-column-detail-button {\n          -webkit-box-flex: 0;\n                  flex: 0 1 auto;\n          padding: 0 24px 0 0; }\n@media screen and (min-width: 1280px) {\n            .content .mat-table .mat-row .mat-cell.mat-column-detail-button {\n              display: none; } }\n#add-contact-button {\n  position: absolute;\n  bottom: 12px;\n  right: 12px;\n  padding: 0;\n  z-index: 99; }\n/* .manager{\r\n    color: #F57D3F;\r\n} */\n"

/***/ }),

/***/ "./src/app/main/content/apps/team-management/manage-team/manage-team.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/apps/team-management/manage-team/manage-team.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ManageTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTeamComponent", function() { return ManageTeamComponent; });
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-team/add-team.component */ "./src/app/main/content/apps/team-management/add-team/add-team.component.ts");
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var _team_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../team-management.service */ "./src/app/main/content/apps/team-management/team-management.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ManageTeamComponent = /** @class */ (function () {
    function ManageTeamComponent(dialog, apiloader, toast, teamService) {
        this.dialog = dialog;
        this.apiloader = apiloader;
        this.toast = toast;
        this.teamService = teamService;
        this.displayedColumns = ['index', 'name', 'member', 'manager', 'buttons'];
    }
    ManageTeamComponent.prototype.ngOnInit = function () {
        this.getAllTeams();
    };
    ManageTeamComponent.prototype.openModal = function (type) {
        var _this = this;
        var data = {};
        if (type === 'add') {
            data = { action: 'ADD' };
        }
        else {
            data = { team_data: type, action: 'EDIT' };
        }
        this.dialogRef = this.dialog.open(_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_4__["AddTeamComponent"], {
            panelClass: 'contact-form-dialog',
            data: data
        });
        this.dialogRef.afterClosed()
            .subscribe(function (response) {
            if (!response) {
                return;
            }
            else {
                if (type === 'add') {
                    _this.createTeam(response);
                }
                else {
                    _this.updateTeam(response);
                }
            }
        });
    };
    ManageTeamComponent.prototype.getAllTeams = function () {
        var _this = this;
        this.teamService.getData('teams').subscribe(function (response) {
            if (response.data) {
                _this.dataSource = response.data;
                for (var i = 0; i < _this.dataSource.length; i++) {
                    var mem = [];
                    for (var j = 1; j < _this.dataSource[i].members.length; j++) {
                        mem.push(_this.dataSource[i].members[j]);
                    }
                    var employees = mem.map(function (e) { return e.first_name + ' ' + e.last_name; }).join(',');
                    _this.dataSource[i]['employees'] = employees;
                }
            }
        }, function (error) {
            _this.toast.showError(error);
        });
    };
    ManageTeamComponent.prototype.deleteTeam = function (id) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FuseConfirmDialogComponent"], {
            disableClose: true
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.apiloader.setLoader(true);
                _this.teamService.deleteData('teams/' + id).subscribe(function (response) {
                    if (response.status === 'success') {
                        _this.apiloader.setLoader(false);
                        _this.getAllTeams();
                        _this.toast.showSuccess('Team Deleted Successfully!.');
                    }
                }, function (error) {
                    _this.apiloader.setLoader(false);
                    _this.toast.showError(error);
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    ManageTeamComponent.prototype.createTeam = function (formData) {
        var _this = this;
        this.apiloader.setLoader(true);
        var data = {
            title: formData.title,
            managerId: formData.managerId,
            employees: formData.employees
        };
        this.teamService.postData('teams', data).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.getAllTeams();
                _this.toast.showSuccess('Team Created Successfully!.');
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    ManageTeamComponent.prototype.updateTeam = function (formData) {
        var _this = this;
        this.apiloader.setLoader(true);
        var id = formData.id;
        delete formData.id;
        this.teamService.postData('teams/' + id, formData).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.getAllTeams();
                _this.toast.showSuccess('Team Updated Successfully!.');
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    ManageTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-team',
            template: __webpack_require__(/*! ./manage-team.component.html */ "./src/app/main/content/apps/team-management/manage-team/manage-team.component.html"),
            styles: [__webpack_require__(/*! ./manage-team.component.scss */ "./src/app/main/content/apps/team-management/manage-team/manage-team.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_2__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_6__["ToasterService"],
            _team_management_service__WEBPACK_IMPORTED_MODULE_7__["TeamManagementService"]])
    ], ManageTeamComponent);
    return ManageTeamComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/team-management/team-management.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/apps/team-management/team-management.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TeamManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamManagementModule", function() { return TeamManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _manage_team_manage_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manage-team/manage-team.component */ "./src/app/main/content/apps/team-management/manage-team/manage-team.component.ts");
/* harmony import */ var _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-team/add-team.component */ "./src/app/main/content/apps/team-management/add-team/add-team.component.ts");
/* harmony import */ var _team_management_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./team-management.service */ "./src/app/main/content/apps/team-management/team-management.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _manage_team_manage_team_component__WEBPACK_IMPORTED_MODULE_7__["ManageTeamComponent"]
    }
];
var TeamManagementModule = /** @class */ (function () {
    function TeamManagementModule() {
    }
    TeamManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_5__["FuseConfirmDialogModule"]
            ],
            declarations: [_manage_team_manage_team_component__WEBPACK_IMPORTED_MODULE_7__["ManageTeamComponent"], _add_team_add_team_component__WEBPACK_IMPORTED_MODULE_8__["AddTeamComponent"]],
            entryComponents: [_add_team_add_team_component__WEBPACK_IMPORTED_MODULE_8__["AddTeamComponent"]],
            providers: [_team_management_service__WEBPACK_IMPORTED_MODULE_9__["TeamManagementService"]]
        })
    ], TeamManagementModule);
    return TeamManagementModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/team-management/team-management.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/main/content/apps/team-management/team-management.service.ts ***!
  \******************************************************************************/
/*! exports provided: TeamManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamManagementService", function() { return TeamManagementService; });
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






var TeamManagementService = /** @class */ (function () {
    function TeamManagementService(http) {
        this.http = http;
        this.baseUrl = _fuse_constant__WEBPACK_IMPORTED_MODULE_5__["apiUri"];
    }
    TeamManagementService.prototype.setHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        /* headers = headers.set('Content-Type', 'application/x-www-form-urlencoded'); */
        return headers;
    };
    TeamManagementService.prototype.postData = function (url, data, type) {
        var headers = this.setHeaders();
        headers.set('Content-Type', 'application/json');
        if (type = 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344');
        }
        var options = { headers: headers };
        return this.http.post(this.baseUrl + url, data, options).map(this.extractData).catch(this.handleError);
    };
    TeamManagementService.prototype.getData = function (url, data) {
        var headers = this.setHeaders();
        if (data) {
            var queryParams = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
            url += '?' + queryParams;
        }
        var options = { headers: headers };
        return this.http.get(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    TeamManagementService.prototype.deleteData = function (url) {
        var headers = this.setHeaders();
        var options = { headers: headers };
        return this.http.delete(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    TeamManagementService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    TeamManagementService.prototype.handleError = function (error) {
        var errMsg = error.error;
        if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) { return errMsg.message[k]; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
    };
    TeamManagementService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeamManagementService);
    return TeamManagementService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/team-management/team.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main/content/apps/team-management/team.model.ts ***!
  \*****************************************************************/
/*! exports provided: Team */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team", function() { return Team; });
var Team = /** @class */ (function () {
    function Team(team) {
        {
            this.id = team.id || '';
            this.title = team.title || '';
            this.members = team.members || [];
            this.manager = team.manager || '';
        }
    }
    return Team;
}());



/***/ })

}]);
//# sourceMappingURL=team-management-team-management-module.js.map