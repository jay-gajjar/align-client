(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-upload-task-upload-module"],{

/***/ "./src/app/main/content/apps/task-upload/bulk-task-upload/bulk-task-upload.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/main/content/apps/task-upload/bulk-task-upload/bulk-task-upload.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"task-upload\" class=\"page-layout simple left-sidenav inner-sidenav\">\r\n    <!-- HEADER -->\r\n    <div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayout.gt-xs=\"row\"\r\n        fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n        <!-- APP TITLE -->\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <mat-icon class=\"logo-icon mr-16\">publish</mat-icon>\r\n                <span class=\"logo-text h1\">Bulk Task Upload</span>\r\n            </div>\r\n\r\n        </div>\r\n        <!-- / APP TITLE -->\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <div class=\"bulk-upload p-24\">\r\n        <!-- <button mat-raised-button color=\"primary\" class=\"mt-16\" (click)=\"uploader.uploadAll()\">Upload</button> -->\r\n        <div class=\"title\">\r\n            <h1>\r\n                <i class=\"fa fa-upload\" aria-hidden=\"true\"></i> Import Data From Excel Sheet\r\n            </h1>\r\n        </div>\r\n        <div class=\"download\">\r\n            <span style=\"color: #949090; padding-right: 5px;\"> Download File : </span> Download Template <i\r\n                class=\"fa fa-download\" aria-hidden=\"true\"></i>\r\n        </div>\r\n        <div class=\"upload\">\r\n            <form>\r\n                <span style=\"color: #949090; padding-right: 5px;\"> Upload File : </span>\r\n                <label class=\"file\">\r\n                    <input type=\"file\" id=\"file\" ng2FileSelect [uploader]=\"uploader\" aria-label=\"File browser example\" (onFileSelected)=\"onFileSelected($event)\" />\r\n                    <span class=\"file-custom\">{{fileName}}</span>\r\n                </label>\r\n                <button mat-raised-button color=\"primary\" (click)=\"uploadFile()\">Save Changes</button>\r\n            </form>\r\n        </div>\r\n        <div class=\"history\">\r\n            <h2><strong>History :</strong></h2>\r\n            <div fxFlex.gt-md=\"98\" fxFlex=\"100\" class=\"set_height\">\r\n                <table mat-table [dataSource]=\"dataSource\" class=\"file-history\">\r\n\r\n                    <!-- Position Column -->\r\n                    <ng-container matColumnDef=\"position\">\r\n                        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"name\">\r\n                        <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Weight Column -->\r\n                    <ng-container matColumnDef=\"date\">\r\n                        <th mat-header-cell *matHeaderCellDef> Date </th>\r\n                        <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\r\n                    </ng-container>\r\n\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/task-upload/bulk-task-upload/bulk-task-upload.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/main/content/apps/task-upload/bulk-task-upload/bulk-task-upload.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bulk-upload i {\n  color: #000; }\n\n.bulk-upload .title i {\n  margin-right: 10px; }\n\n.bulk-upload .title h1 {\n  font-weight: 500; }\n\n.bulk-upload .download, .bulk-upload .upload {\n  font-size: 18px;\n  padding: 15px 0px; }\n\n.download i {\n  padding-left: 10px;\n  font-size: 20px; }\n\n.file {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  height: 2.5rem;\n  width: 400px; }\n\n@media only screen and (max-width: 767px) {\n    .file {\n      width: 320px;\n      margin: 15px 0px; } }\n\ninput {\n  min-width: 14rem;\n  margin: 0;\n  filter: alpha(opacity=0);\n  opacity: 0; }\n\n.file-custom {\n  position: absolute;\n  top: -5px;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  font-size: 16px;\n  height: 40px;\n  padding: .5rem 1rem;\n  line-height: 1.7;\n  color: #555;\n  background-color: #fff;\n  border: .075rem solid #ddd;\n  border-radius: .25rem;\n  box-shadow: inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n@media only screen and (max-width: 767px) {\n    .file-custom {\n      top: -10px; } }\n\nspan.file-custom:before {\n  position: absolute;\n  top: -.075rem;\n  right: -.075rem;\n  bottom: -.075rem;\n  z-index: 6;\n  font-size: 18px;\n  display: block;\n  content: \"Choose a File\";\n  height: 40px;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #000;\n  background: #F57D3F;\n  border: .075rem solid #ddd;\n  border-radius: 0 .25rem .25rem 0; }\n\n.file-history {\n  width: 100%;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.file-history th.mat-header-cell {\n  background: #f57d3f;\n  font-size: 14px;\n  font-weight: bold;\n  color: #000; }\n\n.upload button {\n  margin-left: 10px;\n  background-color: #006b48 !important; }\n\n@media only screen and (max-width: 767px) {\n    .upload button {\n      margin-left: 0px; } }\n\n.set_height {\n  overflow-y: scroll; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/task-upload/bulk-task-upload/bulk-task-upload.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/main/content/apps/task-upload/bulk-task-upload/bulk-task-upload.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: BulkTaskUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkTaskUploadComponent", function() { return BulkTaskUploadComponent; });
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _task_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-upload.service */ "./src/app/main/content/apps/task-upload/task-upload.service.ts");
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





var ELEMENT_DATA = [
    { position: 1, name: 'File00012334444545436565465476', date: '12/02/2019' },
    { position: 2, name: 'File00012334444546767567656576575646', date: '12/02/2019' },
    { position: 3, name: 'File000123356756767657654444546', date: '12/02/2019' }
];
var BulkTaskUploadComponent = /** @class */ (function () {
    function BulkTaskUploadComponent(taskupload, apiloader, toast) {
        this.taskupload = taskupload;
        this.apiloader = apiloader;
        this.toast = toast;
        this.displayedColumns = ['position', 'name', 'date'];
        this.dataSource = ELEMENT_DATA;
        this.fileName = 'Select';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: 'http://3.17.93.116/align/public/api/tasks/import',
            disableMultipart: false,
            autoUpload: false,
            method: 'post'
        });
    }
    BulkTaskUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onErrorItem = function (item, response) { return _this.onErrorItem(item, response); };
        this.uploader.onSuccessItem = function (item, response) { return _this.onSuccessItem(item, response); };
    };
    BulkTaskUploadComponent.prototype.uploadFile = function () {
        this.uploader.uploadAll();
    };
    BulkTaskUploadComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event[0];
        this.fileName = this.selectedFile.name;
    };
    BulkTaskUploadComponent.prototype.onSuccessItem = function (item, response) {
        var data = JSON.parse(response); //success server response
        console.log(data);
    };
    BulkTaskUploadComponent.prototype.onErrorItem = function (item, response) {
        console.log(response);
        /* let error = JSON.parse(response); //error server response
        console.log(error); */
    };
    BulkTaskUploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bulk-task-upload',
            template: __webpack_require__(/*! ./bulk-task-upload.component.html */ "./src/app/main/content/apps/task-upload/bulk-task-upload/bulk-task-upload.component.html"),
            styles: [__webpack_require__(/*! ./bulk-task-upload.component.scss */ "./src/app/main/content/apps/task-upload/bulk-task-upload/bulk-task-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [_task_upload_service__WEBPACK_IMPORTED_MODULE_3__["TaskUploadService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_0__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], BulkTaskUploadComponent);
    return BulkTaskUploadComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/task-upload/task-upload.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/content/apps/task-upload/task-upload.module.ts ***!
  \*********************************************************************/
/*! exports provided: TaskUploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskUploadModule", function() { return TaskUploadModule; });
/* harmony import */ var _task_upload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-upload.service */ "./src/app/main/content/apps/task-upload/task-upload.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bulk_task_upload_bulk_task_upload_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bulk-task-upload/bulk-task-upload.component */ "./src/app/main/content/apps/task-upload/bulk-task-upload/bulk-task-upload.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _bulk_task_upload_bulk_task_upload_component__WEBPACK_IMPORTED_MODULE_6__["BulkTaskUploadComponent"]
    }
];
var TaskUploadModule = /** @class */ (function () {
    function TaskUploadModule() {
    }
    TaskUploadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"]
            ],
            providers: [_task_upload_service__WEBPACK_IMPORTED_MODULE_0__["TaskUploadService"]],
            declarations: [_bulk_task_upload_bulk_task_upload_component__WEBPACK_IMPORTED_MODULE_6__["BulkTaskUploadComponent"]]
        })
    ], TaskUploadModule);
    return TaskUploadModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/task-upload/task-upload.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main/content/apps/task-upload/task-upload.service.ts ***!
  \**********************************************************************/
/*! exports provided: TaskUploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskUploadService", function() { return TaskUploadService; });
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






var TaskUploadService = /** @class */ (function () {
    function TaskUploadService(http) {
        this.http = http;
        this.baseUrl = _fuse_constant__WEBPACK_IMPORTED_MODULE_5__["apiUri"];
    }
    TaskUploadService.prototype.setHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    TaskUploadService.prototype.postData = function (url, data, type) {
        var headers = this.setHeaders();
        if (type = 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344');
        }
        var options = { headers: headers };
        return this.http.post(this.baseUrl + url, data, options).map(this.extractData).catch(this.handleError);
    };
    TaskUploadService.prototype.getData = function (url, data) {
        var headers = this.setHeaders();
        if (data) {
            var queryParams = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
            url += '?' + queryParams;
        }
        var options = { headers: headers };
        return this.http.get(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    TaskUploadService.prototype.deleteData = function (url) {
        var headers = this.setHeaders();
        var options = { headers: headers };
        return this.http.delete(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    TaskUploadService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    TaskUploadService.prototype.handleError = function (error) {
        var errMsg = error.error;
        if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) { return errMsg.message[k]; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
    };
    TaskUploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskUploadService);
    return TaskUploadService;
}());



/***/ })

}]);
//# sourceMappingURL=task-upload-task-upload-module.js.map