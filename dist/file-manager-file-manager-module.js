(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["file-manager-file-manager-module"],{

/***/ "./src/app/main/content/apps/file-manager/file-list/file-list.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-list/file-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table #table [dataSource]=\"dataSource\" *fuseIfOnDom [@animateStagger]=\"{value:'50'}\">\r\n\r\n    <!-- Type Column -->\r\n    <ng-container cdkColumnDef=\"icon\">\r\n        <mat-header-cell *cdkHeaderCellDef fxFlex=\"64px\"></mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let row\" fxFlex=\"64px\">\r\n            <mat-icon class=\"type-icon\" [ngClass]=\"row.type\"></mat-icon>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container cdkColumnDef=\"name\">\r\n        <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let row\"> {{row.name}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Type Column -->\r\n    <ng-container cdkColumnDef=\"type\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Type</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let row\" fxHide fxShow.gt-md> {{row.type}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Owner Column -->\r\n    <ng-container cdkColumnDef=\"owner\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide.xs>Owner</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let row\" fxHide.xs> {{row.owner}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Size Column -->\r\n    <ng-container cdkColumnDef=\"size\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide.xs>Size</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let row\" fxHide.xs>{{row.size === '' ? '-': row.size}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Modified Column -->\r\n    <ng-container cdkColumnDef=\"modified\">\r\n        <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-md>Modified</mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let row\" fxHide fxShow.gt-md>{{row.modified}}</mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Detail Button Column -->\r\n    <ng-container cdkColumnDef=\"detail-button\">\r\n        <mat-header-cell *cdkHeaderCellDef fxFlex=\"48px\" fxHide.gt-md></mat-header-cell>\r\n        <mat-cell *cdkCellDef=\"let row\" fxFlex=\"48px\" fxHide.gt-md>\r\n            <button mat-icon-button class=\"sidenav-toggle\"\r\n                    fuseMatSidenavToggler=\"file-manager-right-sidenav\">\r\n                <mat-icon class=\"secondary-text\">info</mat-icon>\r\n            </button>\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *cdkRowDef=\"let row; columns: displayedColumns;\"\r\n             (click)=\"onSelect(row)\"\r\n             [ngClass]=\"{'mat-light-blue-50-bg':row == selected}\"\r\n             matRipple\r\n             [@animate]=\"{value:'*',params:{y:'100%'}}\"\r\n    >\r\n    </mat-row>\r\n</mat-table>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-list/file-list.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-list/file-list.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n:host {\n  width: 100%; }\n:host .mat-table {\n    background: transparent;\n    box-shadow: none; }\n:host .mat-table .mat-row {\n      position: relative;\n      cursor: pointer;\n      min-height: 64px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-list/file-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-list/file-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: FuseFileManagerFileListComponent, FilesDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseFileManagerFileListComponent", function() { return FuseFileManagerFileListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDataSource", function() { return FilesDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _file_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../file-manager.service */ "./src/app/main/content/apps/file-manager/file-manager.service.ts");
/* harmony import */ var _fuse_animations_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations/index */ "./src/@fuse/animations/index.ts");
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




var FuseFileManagerFileListComponent = /** @class */ (function () {
    function FuseFileManagerFileListComponent(fileManagerService) {
        var _this = this;
        this.fileManagerService = fileManagerService;
        this.displayedColumns = ['icon', 'name', 'type', 'owner', 'size', 'modified', 'detail-button'];
        this.fileManagerService.onFilesChanged.subscribe(function (files) {
            _this.files = files;
        });
        this.fileManagerService.onFileSelected.subscribe(function (selected) {
            _this.selected = selected;
        });
    }
    FuseFileManagerFileListComponent.prototype.ngOnInit = function () {
        this.dataSource = new FilesDataSource(this.fileManagerService);
    };
    FuseFileManagerFileListComponent.prototype.onSelect = function (selected) {
        this.fileManagerService.onFileSelected.next(selected);
    };
    FuseFileManagerFileListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-file-list',
            template: __webpack_require__(/*! ./file-list.component.html */ "./src/app/main/content/apps/file-manager/file-list/file-list.component.html"),
            styles: [__webpack_require__(/*! ./file-list.component.scss */ "./src/app/main/content/apps/file-manager/file-list/file-list.component.scss")],
            animations: _fuse_animations_index__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_file_manager_service__WEBPACK_IMPORTED_MODULE_2__["FileManagerService"]])
    ], FuseFileManagerFileListComponent);
    return FuseFileManagerFileListComponent;
}());

var FilesDataSource = /** @class */ (function (_super) {
    __extends(FilesDataSource, _super);
    function FilesDataSource(fileManagerService) {
        var _this = _super.call(this) || this;
        _this.fileManagerService = fileManagerService;
        return _this;
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    FilesDataSource.prototype.connect = function () {
        return this.fileManagerService.onFilesChanged;
    };
    FilesDataSource.prototype.disconnect = function () {
    };
    return FilesDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["DataSource"]));



/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-manager.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-manager.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"file-manager\" class=\"page-layout simple right-sidenav\" fusePerfectScrollbar>\r\n\r\n    <mat-sidenav-container>\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav left-sidenav\" position=\"start\" opened=\"false\" mode=\"over\"\r\n                     fuseMatSidenavHelper=\"file-manager-left-sidenav\">\r\n            <fuse-file-manager-main-sidenav></fuse-file-manager-main-sidenav>\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n        <!-- CENTER -->\r\n        <div class=\"center\" fxFlex>\r\n\r\n            <!-- HEADER -->\r\n            <div class=\"header mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"space-between start\">\r\n\r\n                <!-- TOOLBAR -->\r\n                <div class=\"toolbar w-100-p\" fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n\r\n                    <div class=\"left-side\" fxLayout=\"row\">\r\n                        <button mat-icon-button class=\"sidenav-toggle\"\r\n                                fuseMatSidenavToggler=\"file-manager-left-sidenav\">\r\n                            <mat-icon>menu</mat-icon>\r\n                        </button>\r\n                    </div>\r\n\r\n                    <div class=\"right-side\" fxLayout=\"row\">\r\n                        <button mat-icon-button aria-label=\"Search\" matTooltip=\"Search\">\r\n                            <mat-icon>search</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <!-- / TOOLBAR -->\r\n\r\n                <!-- BREADCRUMB -->\r\n                <div class=\"breadcrumb text-truncate h1 pl-72\" fxLayout=\"row\" fxLayoutAlign=\"start center\"\r\n                     *fuseIfOnDom [@animate]=\"{value:'*',params:{x:'50px'}}\">\r\n                    <div *ngFor=\"let path of pathArr; last  as isLast\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                        <span>{{path}}</span>\r\n                        <mat-icon *ngIf=\"!isLast\" class=\"separator\">chevron_right</mat-icon>\r\n                    </div>\r\n                </div>\r\n                <!-- / BREADCRUMB -->\r\n\r\n                <!-- ADD FILE BUTTON -->\r\n                <div class=\"file-uploader\">\r\n                    <input hidden type=\"file\" #fileInput/>\r\n                    <button mat-fab\r\n                            class=\"add-file-button mat-warn\"\r\n                            (click)=\"fileInput.click()\"\r\n                            aria-label=\"Add file\"\r\n                            *fuseIfOnDom [@animate]=\"{value:'*', params:{delay:'300ms',scale:'0.2'}}\">\r\n                        <mat-icon>add</mat-icon>\r\n                    </button>\r\n                </div>\r\n                <!-- / ADD FILE BUTTON -->\r\n\r\n            </div>\r\n            <!-- / HEADER -->\r\n\r\n            <!-- CONTENT -->\r\n            <div class=\"content mat-white-bg\" fusePerfectScrollbar>\r\n                <fuse-file-list></fuse-file-list>\r\n            </div>\r\n            <!-- / CONTENT -->\r\n\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n        <!-- SIDENAV -->\r\n        <mat-sidenav class=\"sidenav right-sidenav \" position=\"end\" opened=\"true\" mode=\"side\"\r\n                     fuseMatSidenavHelper=\"file-manager-right-sidenav\" mat-is-locked-open=\"gt-md\">\r\n            <fuse-file-manager-details-sidenav></fuse-file-manager-details-sidenav>\r\n        </mat-sidenav>\r\n        <!-- / SIDENAV -->\r\n\r\n    </mat-sidenav-container>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-manager.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-manager.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n#file-manager mat-sidenav-container .sidenav {\n  width: 320px !important;\n  min-width: 320px !important;\n  max-width: 320px !important; }\n@media screen and (min-width: 1280px) {\n    #file-manager mat-sidenav-container .sidenav.right-sidenav {\n      z-index: 0; } }\n#file-manager mat-sidenav-container > .mat-sidenav-content,\n#file-manager mat-sidenav-container > .mat-drawer-content {\n  z-index: 1; }\n#file-manager mat-sidenav-container > .mat-sidenav-content .center .header,\n  #file-manager mat-sidenav-container > .mat-drawer-content .center .header {\n    position: relative;\n    height: 160px;\n    min-height: 160px;\n    max-height: 160px; }\n@media (max-width: 959px) {\n      #file-manager mat-sidenav-container > .mat-sidenav-content .center .header,\n      #file-manager mat-sidenav-container > .mat-drawer-content .center .header {\n        height: 120px;\n        min-height: 120px;\n        max-height: 120px; } }\n#file-manager mat-sidenav-container > .mat-sidenav-content .center .header .add-file-button,\n    #file-manager mat-sidenav-container > .mat-drawer-content .center .header .add-file-button {\n      position: absolute;\n      bottom: -28px;\n      left: 16px;\n      z-index: 999; }\n#file-manager .type-icon.folder:before {\n  content: 'folder';\n  color: #FFB300; }\n#file-manager .type-icon.document:before {\n  content: 'insert_drive_file';\n  color: #1565C0; }\n#file-manager .type-icon.spreadsheet:before {\n  content: 'insert_chart';\n  color: #4CAF50; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-manager.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-manager.component.ts ***!
  \**************************************************************************/
/*! exports provided: FuseFileManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseFileManagerComponent", function() { return FuseFileManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _file_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-manager.service */ "./src/app/main/content/apps/file-manager/file-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseFileManagerComponent = /** @class */ (function () {
    function FuseFileManagerComponent(fileManagerService) {
        this.fileManagerService = fileManagerService;
    }
    FuseFileManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileManagerService.onFileSelected.subscribe(function (selected) {
            _this.selected = selected;
            _this.pathArr = selected.location.split('>');
        });
    };
    FuseFileManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-file-manager',
            template: __webpack_require__(/*! ./file-manager.component.html */ "./src/app/main/content/apps/file-manager/file-manager.component.html"),
            styles: [__webpack_require__(/*! ./file-manager.component.scss */ "./src/app/main/content/apps/file-manager/file-manager.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_file_manager_service__WEBPACK_IMPORTED_MODULE_2__["FileManagerService"]])
    ], FuseFileManagerComponent);
    return FuseFileManagerComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-manager.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-manager.module.ts ***!
  \***********************************************************************/
/*! exports provided: FuseFileManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseFileManagerModule", function() { return FuseFileManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _file_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-manager.component */ "./src/app/main/content/apps/file-manager/file-manager.component.ts");
/* harmony import */ var _file_manager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./file-manager.service */ "./src/app/main/content/apps/file-manager/file-manager.service.ts");
/* harmony import */ var _file_list_file_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./file-list/file-list.component */ "./src/app/main/content/apps/file-manager/file-list/file-list.component.ts");
/* harmony import */ var _sidenavs_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidenavs/main/main.component */ "./src/app/main/content/apps/file-manager/sidenavs/main/main.component.ts");
/* harmony import */ var _sidenavs_details_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidenavs/details/details.component */ "./src/app/main/content/apps/file-manager/sidenavs/details/details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '**',
        component: _file_manager_component__WEBPACK_IMPORTED_MODULE_5__["FuseFileManagerComponent"],
        children: [],
        resolve: {
            files: _file_manager_service__WEBPACK_IMPORTED_MODULE_6__["FileManagerService"]
        }
    }
];
var FuseFileManagerModule = /** @class */ (function () {
    function FuseFileManagerModule() {
    }
    FuseFileManagerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _file_manager_component__WEBPACK_IMPORTED_MODULE_5__["FuseFileManagerComponent"],
                _file_list_file_list_component__WEBPACK_IMPORTED_MODULE_7__["FuseFileManagerFileListComponent"],
                _sidenavs_main_main_component__WEBPACK_IMPORTED_MODULE_8__["FuseFileManagerMainSidenavComponent"],
                _sidenavs_details_details_component__WEBPACK_IMPORTED_MODULE_9__["FuseFileManagerDetailsSidenavComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"]
            ],
            providers: [
                _file_manager_service__WEBPACK_IMPORTED_MODULE_6__["FileManagerService"]
            ]
        })
    ], FuseFileManagerModule);
    return FuseFileManagerModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/file-manager/file-manager.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/file-manager.service.ts ***!
  \************************************************************************/
/*! exports provided: FileManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileManagerService", function() { return FileManagerService; });
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



var FileManagerService = /** @class */ (function () {
    function FileManagerService(http) {
        this.http = http;
        this.onFilesChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.onFileSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    /**
     * The File Manager App Main Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    FileManagerService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getFiles()
            ]).then(function (_a) {
                var files = _a[0];
                resolve();
            }, reject);
        });
    };
    FileManagerService.prototype.getFiles = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/file-manager')
                .subscribe(function (response) {
                _this.onFilesChanged.next(response);
                _this.onFileSelected.next(response[0]);
                resolve(response);
            }, reject);
        });
    };
    FileManagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileManagerService);
    return FileManagerService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/file-manager/sidenavs/details/details.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/sidenavs/details/details.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\r\n<div class=\"header mat-accent-bg p-24\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n\r\n    <div class=\"toolbar\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n\r\n        <button mat-icon-button matTooltip=\"Delete\">\r\n            <mat-icon>delete</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button class=\"\" aria-label=\"Download\" matTooltip=\"Download\">\r\n            <mat-icon>file_download</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button aria-label=\"More\" matTooltip=\"More\">\r\n            <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n    </div>\r\n\r\n    <div>\r\n        <div class=\"title mb-8\">{{selected.name}}</div>\r\n        <div class=\"subtitle secondary-text\">\r\n            <span>Edited</span>\r\n            <span>: {{selected.modified}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- / SIDENAV HEADER -->\r\n\r\n<!-- SIDENAV CONTENT -->\r\n<div class=\"content p-24 mat-white-bg\" fusePerfectScrollbar>\r\n\r\n    <div class=\"file-details\"\r\n         *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'200ms'}}\">\r\n\r\n        <div class=\"preview file-icon\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <mat-icon class=\"type-icon s-48\" [ngClass]=\"selected.type\"></mat-icon>\r\n        </div>\r\n\r\n        <div class=\"offline-switch\">\r\n            <mat-slide-toggle ([ngModel])=\"selected.offline\" labelPosition=\"before\">Available Offline</mat-slide-toggle>\r\n        </div>\r\n\r\n        <div class=\"title\">Info</div>\r\n\r\n        <table>\r\n            <tr class=\"type\">\r\n                <th>Type</th>\r\n                <td>{{selected.type}}</td>\r\n            </tr>\r\n\r\n            <tr class=\"size\">\r\n                <th>Size</th>\r\n                <td>{{selected.size === '' ? '-': selected.size}}</td>\r\n            </tr>\r\n\r\n            <tr class=\"location\">\r\n                <th>Location</th>\r\n                <td>{{selected.location}}</td>\r\n            </tr>\r\n\r\n            <tr class=\"owner\">\r\n                <th>Owner</th>\r\n                <td>{{selected.owner}}</td>\r\n            </tr>\r\n\r\n            <tr class=\"modified\">\r\n                <th>Modified</th>\r\n                <td>{{selected.modified}}</td>\r\n            </tr>\r\n\r\n            <tr class=\"opened\">\r\n                <th>Opened</th>\r\n                <td>{{selected.opened}}</td>\r\n            </tr>\r\n\r\n            <tr class=\"created\">\r\n                <th>Created</th>\r\n                <td>{{selected.created}}</td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n\r\n</div>\r\n<!-- / SIDENAV CONTENT -->\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/sidenavs/details/details.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/sidenavs/details/details.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  height: 100%; }\n  :host > .header {\n    -webkit-box-flex: 0;\n            flex: 0 1 auto;\n    height: 160px;\n    min-height: 160px;\n    max-height: 160px; }\n  :host > .content {\n    -webkit-box-flex: 1;\n            flex: 1; }\n  :host > .content .file-details .preview {\n      height: 240px; }\n  :host > .content .file-details .offline-switch {\n      padding-bottom: 16px;\n      font-weight: 500; }\n  :host > .content .file-details .title {\n      padding: 16px 0; }\n  :host > .content .file-details table {\n      width: 100%;\n      text-align: left; }\n  :host > .content .file-details table tr th, :host > .content .file-details table tr td {\n        padding: 16px 0; }\n  :host > .content .file-details table tr.type {\n        text-transform: capitalize; }\n  :host > .content .file-details table tr.owner {\n        text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/sidenavs/details/details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/sidenavs/details/details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FuseFileManagerDetailsSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseFileManagerDetailsSidenavComponent", function() { return FuseFileManagerDetailsSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_animations_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/animations/index */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _file_manager_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../file-manager.service */ "./src/app/main/content/apps/file-manager/file-manager.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FuseFileManagerDetailsSidenavComponent = /** @class */ (function () {
    function FuseFileManagerDetailsSidenavComponent(fileManagerService) {
        this.fileManagerService = fileManagerService;
    }
    FuseFileManagerDetailsSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileManagerService.onFileSelected.subscribe(function (selected) {
            _this.selected = selected;
        });
    };
    FuseFileManagerDetailsSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-file-manager-details-sidenav',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/main/content/apps/file-manager/sidenavs/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/main/content/apps/file-manager/sidenavs/details/details.component.scss")],
            animations: _fuse_animations_index__WEBPACK_IMPORTED_MODULE_1__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_file_manager_service__WEBPACK_IMPORTED_MODULE_2__["FileManagerService"]])
    ], FuseFileManagerDetailsSidenavComponent);
    return FuseFileManagerDetailsSidenavComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/file-manager/sidenavs/main/main.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/sidenavs/main/main.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SIDENAV HEADER -->\r\n<div class=\"header p-24\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n\r\n    <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <mat-icon class=\"logo-icon mr-16\">folder</mat-icon>\r\n        <span class=\"logo-text h1\">File Manager</span>\r\n    </div>\r\n\r\n</div>\r\n<!-- / SIDENAV HEADER -->\r\n\r\n<!-- SIDENAV CONTENT -->\r\n<div class=\"content py-16\" fusePerfectScrollbar>\r\n\r\n    <div class=\"nav\">\r\n\r\n        <div class=\"nav-item\" aria-label=\"inbox\">\r\n            <a class=\"nav-link\" matRipple>\r\n                <mat-icon class=\"nav-link-icon\">folder</mat-icon>\r\n                <span class=\"title\">My Files</span>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"nav-item\" aria-label=\"starred\">\r\n            <a class=\"nav-link\" matRipple>\r\n                <mat-icon class=\"nav-link-icon\">star</mat-icon>\r\n                <div class=\"title\">Starred</div>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"nav-item\" aria-label=\"starred\">\r\n            <a class=\"nav-link\" matRipple>\r\n                <mat-icon class=\"nav-link-icon\">folder_shared</mat-icon>\r\n                <div class=\"title\">Sharred with me</div>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"nav-item\" aria-label=\"starred\">\r\n            <a class=\"nav-link\" matRipple>\r\n                <mat-icon class=\"nav-link-icon\">access_time</mat-icon>\r\n                <div class=\"title\">Recent</div>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"nav-item\" aria-label=\"starred\">\r\n            <a class=\"nav-link\" matRipple>\r\n                <mat-icon class=\"nav-link-icon\">not_interested</mat-icon>\r\n                <div class=\"title\">Offline</div>\r\n            </a>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n<!-- / SIDENAV CONTENT -->\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/sidenavs/main/main.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/sidenavs/main/main.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  height: 100%; }\n  :host > .header {\n    -webkit-box-flex: 0;\n            flex: 0 1 auto;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n"

/***/ }),

/***/ "./src/app/main/content/apps/file-manager/sidenavs/main/main.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/content/apps/file-manager/sidenavs/main/main.component.ts ***!
  \********************************************************************************/
/*! exports provided: FuseFileManagerMainSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseFileManagerMainSidenavComponent", function() { return FuseFileManagerMainSidenavComponent; });
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

var FuseFileManagerMainSidenavComponent = /** @class */ (function () {
    function FuseFileManagerMainSidenavComponent() {
    }
    FuseFileManagerMainSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-file-manager-main-sidenav',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/content/apps/file-manager/sidenavs/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/content/apps/file-manager/sidenavs/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FuseFileManagerMainSidenavComponent);
    return FuseFileManagerMainSidenavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=file-manager-file-manager-module.js.map