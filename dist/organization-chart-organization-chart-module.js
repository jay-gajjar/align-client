(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organization-chart-organization-chart-module"],{

/***/ "./src/app/main/content/apps/organization-chart/org-chart.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/main/content/apps/organization-chart/org-chart.service.ts ***!
  \***************************************************************************/
/*! exports provided: OrgChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgChartService", function() { return OrgChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _fuse_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/constant */ "./src/@fuse/constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrgChartService = /** @class */ (function () {
    function OrgChartService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = _fuse_constant__WEBPACK_IMPORTED_MODULE_5__["apiUri"];
    }
    OrgChartService.prototype.setHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    OrgChartService.prototype.postData = function (url, data, type) {
        var headers = this.setHeaders();
        if (type = 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344');
        }
        var options = { headers: headers };
        return this.http.post(this.baseUrl + url, data, options).map(this.extractData).catch(this.handleError);
    };
    OrgChartService.prototype.getData = function (url, data) {
        var headers = this.setHeaders();
        if (data) {
            var queryParams = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
            url += '?' + queryParams;
        }
        var options = { headers: headers };
        return this.http.get(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    OrgChartService.prototype.deleteData = function (url) {
        var headers = this.setHeaders();
        var options = { headers: headers };
        return this.http.delete(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    OrgChartService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    OrgChartService.prototype.handleError = function (error) {
        var errMsg = error.error;
        if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) { return errMsg.message[k]; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
    };
    OrgChartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], OrgChartService);
    return OrgChartService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/organization-chart/organization-chart.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/main/content/apps/organization-chart/organization-chart.module.ts ***!
  \***********************************************************************************/
/*! exports provided: OrganizationChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationChartModule", function() { return OrganizationChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_org_chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-org-chart */ "./node_modules/ng2-org-chart/ng2-org-chart.es5.js");
/* harmony import */ var _organization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organization.component */ "./src/app/main/content/apps/organization-chart/organization.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _org_chart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./org-chart.service */ "./src/app/main/content/apps/organization-chart/org-chart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _organization_component__WEBPACK_IMPORTED_MODULE_4__["OrganizationComponent"]
    }
];
var OrganizationChartModule = /** @class */ (function () {
    function OrganizationChartModule() {
    }
    OrganizationChartModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                ng2_org_chart__WEBPACK_IMPORTED_MODULE_3__["OrgChartModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            declarations: [_organization_component__WEBPACK_IMPORTED_MODULE_4__["OrganizationComponent"]],
            providers: [_org_chart_service__WEBPACK_IMPORTED_MODULE_6__["OrgChartService"]]
        })
    ], OrganizationChartModule);
    return OrganizationChartModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/organization-chart/organization.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/apps/organization-chart/organization.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"organization\" class=\"page-layout simple left-sidenav inner-sidenav\">\r\n<!-- HEADER -->\r\n<div class=\"header mat-accent-bg p-16 p-sm-24\" fxLayout=\"column\" fxLayoutAlign=\"start start\"\r\nfxLayout.gt-xs=\"row\" fxLayoutAlign.gt-xs=\"space-between center\">\r\n\r\n<!-- APP TITLE -->\r\n<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n  <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n       <mat-icon class=\"logo-icon mr-16\">insert_chart_outlined</mat-icon>\r\n       <span class=\"logo-text h1\">Organization Chart</span>\r\n   </div>\r\n\r\n</div>\r\n<!-- / APP TITLE -->\r\n</div>\r\n<!-- / HEADER -->\r\n<div class=\"org-chart\" *ngIf=\"data\">\r\n    <ng2-org-chart [topEmployee]=\"data\"></ng2-org-chart>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/organization-chart/organization.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/apps/organization-chart/organization.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ORGANIZATION CHART */\n.org-chart {\n  padding: 20px;\n  height: 100%;\n  background-color: #fbfdfe; }\n.oc-box {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: row !important;\n  border: none;\n  border-top-left-radius: 50px;\n  border-bottom-left-radius: 50px;\n  border-top-right-radius: 50px;\n  border-bottom-right-radius: 50px;\n  -webkit-appearance: unset;\n  padding: 0px 20px 0px 0px !important; }\n.oc-img img {\n  width: 45px;\n  height: 45px;\n  border: none;\n  border-radius: 50%; }\n.oc-background {\n  background-color: #fff; }\n.oc-border {\n  border: 1px solid #7e9191; }\n.oc-name, .oc-designation {\n  font-family: 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;\n  line-height: 1.4 !important;\n  letter-spacing: -0.1px !important;\n  font-style: normal; }\n/* ORGANIZATION CHART */\n.oc-h-bar {\n  height: 22px !important; }\n.oc-h-bar-container .oc-h-bar {\n  height: 0px !important; }\n.oc-border {\n  border-color: #f2ab13; }\n.oc-box {\n  border-color: rgba(0, 0, 0, 0.12);\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12); }\n.oc-name {\n  font-weight: bold;\n  font-size: 14px; }\n.oc-designation {\n  font-size: 12px;\n  font-style: italic;\n  color: #b5aeae; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/organization-chart/organization.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/main/content/apps/organization-chart/organization.component.ts ***!
  \********************************************************************************/
/*! exports provided: OrganizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationComponent", function() { return OrganizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _org_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./org-chart.service */ "./src/app/main/content/apps/organization-chart/org-chart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganizationComponent = /** @class */ (function () {
    function OrganizationComponent(apiloader, toast, orgService) {
        this.apiloader = apiloader;
        this.toast = toast;
        this.orgService = orgService;
        this.topEmployee = {
            name: 'Janis Martin',
            designation: 'CEO',
            img: '/assets/images/avatars/Abbott.jpg',
            subordinates: [
                {
                    name: 'Matthew Wikes',
                    designation: 'VP',
                    img: '/assets/images/avatars/Abbott.jpg',
                    subordinates: [
                        {
                            name: 'Tina Landry',
                            designation: 'Budget Analyst',
                            img: '/assets/images/avatars/Abbott.jpg',
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Patricia Lyons',
                    designation: 'VP',
                    img: '/assets/images/avatars/Abbott.jpg',
                    subordinates: [
                        {
                            name: 'Dylan Wilson',
                            designation: 'Web Manager',
                            img: '/assets/images/avatars/Abbott.jpg',
                            subordinates: []
                        },
                        {
                            name: 'Deb Curtis',
                            designation: 'Art Director',
                            img: '/assets/images/avatars/Abbott.jpg',
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Larry Phung',
                    designation: 'VP',
                    img: '/assets/images/avatars/Abbott.jpg',
                    subordinates: []
                }
            ]
        };
    }
    OrganizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        this.orgService.getData('organization-chart').subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                var chartData = _this.convertArray(response.data);
                _this.data = chartData[0];
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    OrganizationComponent.prototype.convertArray = function (data) {
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
    OrganizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organization',
            template: __webpack_require__(/*! ./organization.component.html */ "./src/app/main/content/apps/organization-chart/organization.component.html"),
            styles: [__webpack_require__(/*! ./organization.component.scss */ "./src/app/main/content/apps/organization-chart/organization.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_2__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_1__["ToasterService"],
            _org_chart_service__WEBPACK_IMPORTED_MODULE_3__["OrgChartService"]])
    ], OrganizationComponent);
    return OrganizationComponent;
}());



/***/ })

}]);
//# sourceMappingURL=organization-chart-organization-chart-module.js.map