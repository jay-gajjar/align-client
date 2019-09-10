(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/ng2-org-chart/ng2-org-chart.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-org-chart/ng2-org-chart.es5.js ***!
  \*********************************************************/
/*! exports provided: OrgChartComponent, OrgChartModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgChartComponent", function() { return OrgChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgChartModule", function() { return OrgChartModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return EmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var OrgChartComponent = (function () {
    function OrgChartComponent() {
        this.hasManager = false;
    }
    return OrgChartComponent;
}());
OrgChartComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ng2-org-chart',
                template: "<oc-employee *ngIf=\"topEmployee\" [employee]=\"topEmployee\" [hasManager]=\"hasManager\"></oc-employee> <div class=\"oc-reports\"> <ng-container *ngFor=\"let employee of topEmployee?.subordinates; first as isFirst; last as isLast\"> <div class=\"oc-org-container\"> <div class=\"oc-h-bar-container\"> <div class=\"oc-h-bar oc-border\" [style.border-color]=\"isFirst?'transparent':''\"></div> <div class=\"oc-border\"></div> <div class=\"oc-h-bar oc-border\" [style.border-color]=\"isLast?'transparent':''\"></div> </div> <ng2-org-chart [topEmployee]=\"employee\" [hasManager]=\"true\"></ng2-org-chart> </div> </ng-container> </div> ",
                styles: [":host { display: flex; flex-direction: column; align-items: center; } .oc-reports { display: flex; flex: 1; } .oc-org-container { display: flex; flex-direction: column; } .oc-h-bar-container { display: flex; } .oc-h-bar { flex: 1; } "]
            },] },
];
/**
 * @nocollapse
 */
OrgChartComponent.ctorParameters = function () { return []; };
OrgChartComponent.propDecorators = {
    'topEmployee': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'hasManager': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};

var EmployeeComponent = (function () {
    function EmployeeComponent() {
        this.hasManager = false;
    }
    return EmployeeComponent;
}());
EmployeeComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'oc-employee',
                template: "<div class=\"oc-h-bar oc-border\" *ngIf=\"hasManager\"></div> <div class=\"oc-box oc-border oc-background\"> <div class=\"oc-img\"><img src=\"{{employee?.img}}\"/></div> <div class=\"oc-content\"><div class=\"oc-name\">{{employee?.name}}</div> <div class=\"oc-designation\">{{employee?.designation}}</div> </div> </div> <div class=\"oc-h-bar oc-border\" *ngIf=\"employee?.subordinates.length\"></div> ",
                styles: [":host { margin: 0 1em; display: flex; flex-direction: column; align-items: center; } .oc-box { padding: 0.25em 1em; display: flex; flex-direction: row; align-items: center; } .oc-h-bar { height: 0.5em; } .oc-content{ display:flex; flex-direction:column; padding: 0.25em 0.5em; } "]
            },] },
];
/**
 * @nocollapse
 */
EmployeeComponent.ctorParameters = function () { return []; };
EmployeeComponent.propDecorators = {
    'employee': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'hasManager': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};

var OrgChartModule = (function () {
    function OrgChartModule() {
    }
    return OrgChartModule;
}());
OrgChartModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [OrgChartComponent, EmployeeComponent],
                exports: [OrgChartComponent]
            },] },
];
/**
 * @nocollapse
 */
OrgChartModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng2-org-chart.es5.js.map


/***/ }),

/***/ "./src/@fuse/services/api.service.ts":
/*!*******************************************!*\
  !*** ./src/@fuse/services/api.service.ts ***!
  \*******************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constant */ "./src/@fuse/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUrl = _constant__WEBPACK_IMPORTED_MODULE_5__["apiUri"];
    }
    ApiService.prototype.setHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        return headers;
    };
    ApiService.prototype.postData = function (url, data, type) {
        var headers = this.setHeaders();
        if (type = 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344');
        }
        var options = { headers: headers };
        return this.http.post(this.baseUrl + url, data, options).map(this.extractData).catch(this.handleError);
    };
    ApiService.prototype.getData = function (url, data) {
        var headers = this.setHeaders();
        if (data) {
            var queryParams = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
            url += '?' + queryParams;
        }
        var options = { headers: headers };
        return this.http.get(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    ApiService.prototype.deleteData = function (url) {
        var headers = this.setHeaders();
        var options = { headers: headers };
        return this.http.delete(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.setData = function (data) {
        var key = '';
        var body = new URLSearchParams();
        for (key in data) {
            body.set(key, data[key]);
        }
        return body.toString();
    };
    ApiService.prototype.handleError = function (error) {
        var errMsg = error.error;
        if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) { return errMsg.message[k]; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/calendar/calendar.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/main/content/apps/calendar/calendar.service.ts ***!
  \****************************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
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



var CalendarService = /** @class */ (function () {
    function CalendarService(http) {
        this.http = http;
        this.onEventsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CalendarService.prototype.resolve = function (route, state) {
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
    CalendarService.prototype.getEvents = function () {
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
    CalendarService.prototype.updateEvents = function (events) {
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
    CalendarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/calendar/event.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/content/apps/calendar/event.model.ts ***!
  \***********************************************************/
/*! exports provided: CalendarEventModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventModel", function() { return CalendarEventModel; });
var CalendarEventModel = /** @class */ (function () {
    function CalendarEventModel(data) {
        data = data || {};
        this.id = data.id || '';
        this.start = new Date(data.start);
        this.end = new Date(data.end);
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



/***/ })

}]);
//# sourceMappingURL=common.js.map