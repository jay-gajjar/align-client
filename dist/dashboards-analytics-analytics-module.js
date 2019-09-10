(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-analytics-analytics-module"],{

/***/ "./src/app/main/content/apps/dashboards/analytics/analytics-dash.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/analytics/analytics-dash.service.ts ***!
  \**********************************************************************************/
/*! exports provided: AnalyticsDashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsDashService", function() { return AnalyticsDashService; });
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






var AnalyticsDashService = /** @class */ (function () {
    function AnalyticsDashService(http) {
        this.http = http;
        this.baseUrl = _fuse_constant__WEBPACK_IMPORTED_MODULE_5__["apiUri"];
    }
    AnalyticsDashService.prototype.setHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    AnalyticsDashService.prototype.postData = function (url, data, type) {
        var headers = this.setHeaders();
        if (type = 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344');
        }
        var options = { headers: headers };
        return this.http.post(this.baseUrl + url, data, options).map(this.extractData).catch(this.handleError);
    };
    AnalyticsDashService.prototype.getData = function (url, data) {
        var headers = this.setHeaders();
        if (data) {
            var queryParams = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
            url += '?' + queryParams;
        }
        var options = { headers: headers };
        return this.http.get(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    AnalyticsDashService.prototype.deleteData = function (url) {
        var headers = this.setHeaders();
        var options = { headers: headers };
        return this.http.delete(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    AnalyticsDashService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    AnalyticsDashService.prototype.handleError = function (error) {
        var errMsg = error.error;
        if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) { return errMsg.message[k]; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
    };
    AnalyticsDashService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnalyticsDashService);
    return AnalyticsDashService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/analytics/analytics.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/analytics/analytics.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard-analytics\" class=\"page-layout blank grey-100-bg\" fusePerfectScrollbar>\r\n\r\n    <div class=\"main-widget\">\r\n\r\n        <div class=\"position-relative p-24 mat-blue-600-bg\"\r\n             fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n                <span class=\"h2\">Performance</span>\r\n                <span class=\"h5 secondary-text\">Unique performance by month</span>\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <div class=\"py-8 px-12 border-radius-2 line-height-1 mr-8 cursor-pointer\"\r\n                     (click)=\"widget1SelectedYear = '2015'\"\r\n                     [ngClass]=\"{'blue-300-bg': widget1SelectedYear === '2015'}\">\r\n                    2015\r\n                </div>\r\n                <div class=\"py-8 px-12 border-radius-2 line-height-1 mr-8 cursor-pointer\"\r\n                     (click)=\"widget1SelectedYear = '2016'\"\r\n                     [ngClass]=\"{'blue-300-bg': widget1SelectedYear === '2016'}\">\r\n                    2016\r\n                </div>\r\n                <div class=\"py-8 px-12 border-radius-2 line-height-1 cursor-pointer\"\r\n                     (click)=\"widget1SelectedYear = '2017'\"\r\n                     [ngClass]=\"{'blue-300-bg': widget1SelectedYear === '2017'}\">\r\n                    2017\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"position-relative h-256 pb-16 mat-blue-600-bg\">\r\n            <canvas baseChart\r\n                    [datasets]=\"widgets.widget1.datasets[widget1SelectedYear]\"\r\n                    [labels]=\"widgets.widget1.labels\"\r\n                    [colors]=\"widgets.widget1.colors\"\r\n                    [options]=\"widgets.widget1.options\"\r\n                    [chartType]=\"widgets.widget1.chartType\">\r\n            </canvas>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n\r\n        <div class=\"left mr-lg-32\">\r\n\r\n            <!-- Widget 5 -->\r\n            <!-- <div class=\"pt-48 pb-24 font-size-18 font-weight-300\">\r\n                How many pages your users visit?\r\n            </div> -->\r\n\r\n            <div class=\"fuse-card auto-width\">\r\n                <div id=\"calendar\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\r\n                <div class=\"header p-16 p-sm-24\" [ngClass]=\"viewDate | date:'MMM'\">\r\n\r\n                    <div class=\"header-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n            \r\n                        <div class=\"header-top\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayout.xs=\"column\">\r\n            \r\n                            <div class=\"logo mb-16 mb-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <mat-icon class=\"logo-icon\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">today</mat-icon>\r\n                                <span class=\"logo-text\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Calendar</span>\r\n                            </div>\r\n            \r\n                            <!-- TOOLBAR -->\r\n                            <div class=\"toolbar\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n            \r\n                                <button mat-icon-button aria-label=\"Search\" matTooltip=\"Search\">\r\n                                    <mat-icon>search</mat-icon>\r\n                                </button>\r\n            \r\n                                <button mat-icon-button\r\n                                        mwlCalendarToday\r\n                                        [(viewDate)]=\"viewDate\"\r\n                                        (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                                        aria-label=\"Today\" matTooltip=\"Today\">\r\n                                    <mat-icon>today</mat-icon>\r\n                                </button>\r\n            \r\n                                <button mat-icon-button (click)=\"view='day'\" aria-label=\"Day\" matTooltip=\"Day\">\r\n                                    <mat-icon>view_day</mat-icon>\r\n                                </button>\r\n            \r\n                                <button mat-icon-button (click)=\"view='week'\" aria-label=\"Week\" matTooltip=\"Week\">\r\n                                    <mat-icon>view_week</mat-icon>\r\n                                </button>\r\n            \r\n                                <button mat-icon-button (click)=\"view='month'\" aria-label=\"Month\" matTooltip=\"Month\">\r\n                                    <mat-icon>view_module</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <!-- / TOOLBAR -->\r\n            \r\n                        <!-- HEADER BOTTOM -->\r\n                        <div class=\"header-bottom\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n                             *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'150ms'}}\">\r\n            \r\n                            <button mat-icon-button class=\"arrow\"\r\n                                    mwlCalendarPreviousView\r\n                                    [view]=\"view\"\r\n                                    [(viewDate)]=\"viewDate\"\r\n                                    (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                                    aria-label=\"Previous\">\r\n                                <mat-icon>chevron_left</mat-icon>\r\n                            </button>\r\n            \r\n                            <div class=\"title\">\r\n                                {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}\r\n                            </div>\r\n            \r\n                            <button mat-icon-button class=\"arrow\"\r\n                                    mwlCalendarNextView\r\n                                    [view]=\"view\"\r\n                                    [(viewDate)]=\"viewDate\"\r\n                                    (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                                    aria-label=\"Next\">\r\n                                <mat-icon>chevron_right</mat-icon>\r\n                            </button>\r\n                        </div>\r\n                        <!-- / HEADER BOTTOM -->\r\n                    </div>\r\n                </div>\r\n                <!-- / HEADER -->\r\n            \r\n                <!-- CONTENT -->\r\n                <div class=\"content analytics\" fusePerfectScrollbar *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'200ms',y:'50px'}}\">\r\n                        <ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\r\n                            <div class=\"cal-cell-top\" *ngIf=\"day.cssClass == 'holiday'\">\r\n                                <span class=\"cal-day-holiday\" *ngIf=\"day.events && day.events.length\">\r\n                                    {{day.events[0].title}}\r\n                                </span>\r\n                                <span class=\"cal-day-number\">\r\n                                    {{ day.date | calendarDate:'monthViewDayNumber':locale }}\r\n                                </span>\r\n                            </div>\r\n                            <div class=\"cal-cell-top\" *ngIf=\"!day.cssClass\">\r\n                                <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\"\r\n                                >{{ day.badgeTotal }}</span\r\n                                >\r\n                                <span class=\"cal-day-number\"\r\n                                >{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span\r\n                                >\r\n                            </div>\r\n                        </ng-template>\r\n                    <div [ngSwitch]=\"view\">\r\n                        <mwl-calendar-month-view\r\n                            *ngSwitchCase=\"'month'\"\r\n                            [viewDate]=\"viewDate\"\r\n                            [events]=\"events\"\r\n                            [refresh]=\"refresh\"\r\n                            [activeDayIsOpen]=\"activeDayIsOpen\"\r\n                            (dayClicked)=\"dayClicked($event.day)\"\r\n                            [cellTemplate]=\"customCellTemplate\"\r\n                            (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n                            (beforeViewRender)=\"beforeMonthViewRender($event)\">\r\n                        </mwl-calendar-month-view>\r\n                        <mwl-calendar-week-view\r\n                            *ngSwitchCase=\"'week'\"\r\n                            [viewDate]=\"viewDate\"\r\n                            (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                            [events]=\"events\"\r\n                            [refresh]=\"refresh\"\r\n                            (dayClicked)=\"dayClicked($event.day)\"\r\n                            (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n                        </mwl-calendar-week-view>\r\n                        <mwl-calendar-day-view\r\n                            *ngSwitchCase=\"'day'\"\r\n                            [viewDate]=\"viewDate\"\r\n                            (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                            [events]=\"events\"\r\n                            [refresh]=\"refresh\"\r\n                            (dayClicked)=\"dayClicked($event.day)\"\r\n                            (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n                        </mwl-calendar-day-view>\r\n                    </div>\r\n                </div>\r\n                <!-- / CONTENT -->\r\n            </div>\r\n            </div>\r\n            <!-- / Widget 5 -->\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"content\">\r\n\r\n        <div class=\"right\">\r\n\r\n            <div class=\"right-1\">\r\n\r\n                <!-- Widget 7 -->\r\n                <div class=\"mb-48\" [ngClass.lt-lg]=\"'mr-32'\" [ngClass.xs]=\"'mr-0'\">\r\n\r\n                    <div class=\"fuse-card user-table\">\r\n\r\n                        <div class=\"user-list p-16\">\r\n                            <div class=\"search-input-wrapper mt-16 ml-8 m-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                <label for=\"search\" class=\"mr-8\">\r\n                                    <mat-icon>search</mat-icon>\r\n                                </label>\r\n                                <mat-form-field mat-no-float class=\"m-0\" floatLabel=\"never\">\r\n                                    <input matInput name=\"searchInput\" [(ngModel)]=\"query\" id=\"search\" placeholder=\"Search for anything\">\r\n                                </mat-form-field>\r\n                            </div>\r\n                            <div class=\"table-user\">\r\n                                    <mat-table #table [dataSource]=\"dataSource | searchFilter: 'dashboard' : query\"\r\n                                    [@animateStagger]=\"{value:'50'}\" *ngIf=\"dataSource\">\r\n                             <!-- Avatar Column -->\r\n                             <ng-container cdkColumnDef=\"avatar\">\r\n                                 <mat-header-cell *cdkHeaderCellDef></mat-header-cell>\r\n                                 <mat-cell *cdkCellDef=\"let contact\">\r\n                                     <img class=\"avatar\" *ngIf=\"contact.profile_image\" [alt]=\"contact.first_name\"\r\n                                          [src]=\"contact.profile_image\"/>\r\n                                 </mat-cell>\r\n                             </ng-container>\r\n                         \r\n                             <!-- Name Column -->\r\n                             <ng-container cdkColumnDef=\"name\">\r\n                                 <mat-header-cell *cdkHeaderCellDef>Name</mat-header-cell>\r\n                                 <mat-cell *cdkCellDef=\"let contact\">\r\n                                     <p class=\"text-truncate\">{{contact.first_name}} {{contact.last_name}}</p>\r\n                                 </mat-cell>\r\n                             </ng-container>\r\n                         \r\n                             <!-- Email Column -->\r\n                             <ng-container cdkColumnDef=\"email\">\r\n                                 <mat-header-cell *cdkHeaderCellDef fxHide fxShow.gt-xs>Email</mat-header-cell>\r\n                                 <mat-cell *cdkCellDef=\"let contact\" fxHide fxShow.gt-xs>\r\n                                     <p class=\"email text-truncate\">\r\n                                         {{contact.email}}\r\n                                     </p>\r\n                                 </mat-cell>\r\n                             </ng-container>\r\n                         \r\n                             <!-- Phone Column -->\r\n                             <ng-container cdkColumnDef=\"phone\">\r\n                                 <mat-header-cell *cdkHeaderCellDef>Phone</mat-header-cell>\r\n                                 <mat-cell *cdkCellDef=\"let contact\">\r\n                                     <p class=\"phone text-truncate\">\r\n                                         {{contact.phone}}\r\n                                     </p>\r\n                                 </mat-cell>\r\n                             </ng-container>\r\n\r\n                             <mat-header-row *cdkHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                             <mat-row *cdkRowDef=\"let contact; columns: displayedColumns;\"\r\n                                      class=\"contact\"\r\n                                      [@animate]=\"{value:'*',params:{y:'100%'}}\">\r\n                             </mat-row>\r\n                         </mat-table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <!-- / Widget 7 -->\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"right\">\r\n\r\n                <div class=\"right-1\">\r\n    \r\n                    <!-- Widget 7 -->\r\n                    <div class=\"mb-48\" [ngClass.lt-lg]=\"'mr-32'\" [ngClass.xs]=\"'mr-0'\">\r\n                        <div class=\"fuse-card auto-width comp-desc\" *ngIf=\"client\">\r\n                                <div class=\"company-details\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                                    <div class=\"h1 pr-16\">Company Details</div>\r\n                                    <div>\r\n                                        <div class=\"text-right\"><a href=\"javascript:;\" routerLink=\"/apps/my-profile\"><mat-icon>edit</mat-icon></a></div>\r\n                                    </div>\r\n                                </div>\r\n                            <div class=\"comp-logo p-16\">\r\n                                <img alt=\"\" src=\"assets/images/avatars/profile.jpg\"/>\r\n                            </div>\r\n                            <div class=\"comp-details\">\r\n                                <ul>\r\n                                    <li><span class=\"font-weight-600\">Company Name :</span> {{client.name}}</li>\r\n                                    <li><span class=\"font-weight-600\">Website :</span> {{client.website}}</li>\r\n                                    <li><span class=\"font-weight-600\">Email Address :</span> {{client.email}}</li>\r\n                                    <li><span class=\"font-weight-600\">Mobile No :</span> {{client.contact_number}}</li>\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/dashboards/analytics/analytics.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/analytics/analytics.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -webkit-box-flex: 1;\n          flex: 1; }\n.cal-month-view .cal-cell-row {\n  display: -webkit-box;\n  display: flex; }\n.cal-month-view .cal-cell {\n  float: left;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch; }\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n.cal-month-view .cal-events {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px;\n  background-color: #1e90ff;\n  border-color: #D1E8FF;\n  color: #fff; }\n.cal-month-view .cal-event-title:link {\n  color: currentColor; }\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n.cal-week-view .cal-day-headers {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n.cal-week-view .cal-day-headers .cal-header {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding: 5px; }\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px;\n  background-color: #D1E8FF;\n  border: 1px solid #1e90ff;\n  color: #1e90ff; }\n.cal-week-view .cal-event-title:link {\n  color: currentColor; }\n.cal-week-view .cal-draggable {\n  cursor: move; }\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n.cal-day-view .cal-hour-rows {\n    width: 100%;\n    border: solid 1px #e1e1e1;\n    overflow-x: scroll;\n    position: relative; }\n.cal-day-view .cal-hour:nth-child(odd) {\n    background-color: #fafafa; }\n.cal-day-view mwl-calendar-day-view-hour-segment,\n  .cal-day-view .cal-hour-segment {\n    display: block; }\n.cal-day-view .cal-hour-segment::after {\n    content: '\\00a0'; }\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed #e1e1e1; }\n.cal-day-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n.cal-day-view .cal-hour-segment:hover,\n  .cal-day-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n.cal-day-view .cal-event-container {\n    position: absolute; }\n.cal-day-view .cal-event {\n    padding: 5px;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 100%;\n    box-sizing: border-box;\n    background-color: #D1E8FF;\n    border: 1px solid #1e90ff;\n    color: #1e90ff; }\n.cal-day-view .cal-event-title:link {\n    color: currentColor; }\n.cal-day-view .cal-draggable {\n    cursor: move; }\n.cal-day-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n.cal-day-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n.cal-day-view .cal-all-day-event {\n    padding: 8px;\n    border: solid 1px; }\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n#dashboard-analytics .main-widget {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n#dashboard-analytics .content {\n  display: block;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 32px;\n  min-width: 0; }\n@media (max-width: 1279px) {\n    #dashboard-analytics .content {\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column; } }\n#dashboard-analytics .content .left {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    min-width: 0; }\n#dashboard-analytics .content .left .widget {\n      -webkit-box-flex: 1;\n              flex: 1 1 auto;\n      min-width: 0; }\n#dashboard-analytics .content .right {\n    display: block;\n    width: 50%;\n    float: left;\n    padding-right: 10px; }\n@media (max-width: 1279px) {\n      #dashboard-analytics .content .right {\n        -webkit-box-flex: 1;\n                flex: 1 0 100%;\n        margin-top: 32px;\n        width: 100%;\n        min-width: 0;\n        max-width: none; } }\n#dashboard-analytics .content .right .user-list {\n      max-height: 440px;\n      overflow-x: hidden;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column; }\n#dashboard-analytics .content .right .nav {\n      overflow-y: auto; }\n#dashboard-analytics .content .right .user-table {\n      max-width: 100%; }\n#dashboard-analytics .content .right mat-cell:last-child, #dashboard-analytics .content .right mat-footer-cell:last-child, #dashboard-analytics .content .right mat-header-cell:last-child {\n      padding: 0px; }\n#dashboard-analytics .content .right .mat-column-avatar {\n      -webkit-box-flex: 0;\n              flex: 0 1 64px; }\n#dashboard-analytics .content .right mat-cell:first-child {\n      padding-left: 15px !important; }\n#dashboard-analytics .content .right .mat-form-field {\n      display: block;\n      width: 100%; }\n#dashboard-analytics .content .right .comp-logo {\n      text-align: center; }\n#dashboard-analytics .content .right .comp-logo img {\n        width: 128px;\n        border: none;\n        border-radius: 50%; }\n#dashboard-analytics .content .right .comp-details ul li {\n      padding: 10px 0px; }\n#dashboard-analytics .content .right .comp-desc {\n      max-height: 400px;\n      min-height: 400px; }\n@media (max-width: 1279px) {\n      #dashboard-analytics .content .right .fuse-card {\n        width: 100%;\n        min-width: 0;\n        max-width: none; } }\n.company-details {\n  margin: 0px 16px;\n  padding: 16px 0px;\n  border-bottom: 1px solid #000; }\n.company-details mat-icon {\n  color: #fa7915; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/dashboards/analytics/analytics.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/analytics/analytics.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FuseAnalyticsDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseAnalyticsDashboardComponent", function() { return FuseAnalyticsDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.service */ "./src/app/main/content/apps/dashboards/analytics/analytics.service.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _fuse_fake_db_contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../fuse-fake-db/contacts */ "./src/app/fuse-fake-db/contacts.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-form/event-form.component */ "./src/app/main/content/apps/dashboards/analytics/event-form/event-form.component.ts");
/* harmony import */ var _calendar_event_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../calendar/event.model */ "./src/app/main/content/apps/calendar/event.model.ts");
/* harmony import */ var _calendar_calendar_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../calendar/calendar.service */ "./src/app/main/content/apps/calendar/calendar.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _analytics_dash_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./analytics-dash.service */ "./src/app/main/content/apps/dashboards/analytics/analytics-dash.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var FuseAnalyticsDashboardComponent = /** @class */ (function () {
    function FuseAnalyticsDashboardComponent(analyticsDashboardService, dialog, calendarService, apiloader, toast, analyics) {
        var _this = this;
        this.analyticsDashboardService = analyticsDashboardService;
        this.dialog = dialog;
        this.calendarService = calendarService;
        this.apiloader = apiloader;
        this.toast = toast;
        this.analyics = analyics;
        this.widget1SelectedYear = '2016';
        this.widget5SelectedDay = 'today';
        this.contacts = _fuse_fake_db_contacts__WEBPACK_IMPORTED_MODULE_4__["ContactsFakeDb"].contacts;
        this.displayedColumns = ['avatar', 'name', 'email', 'phone'];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        // Get the widgets from the service
        this.widgets = this.analyticsDashboardService.widgets;
        //console.log(this.widgets);
        // Register the custom chart.js plugin
        this.registerCustomChartJSPlugin();
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.selectedDay = { date: Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["startOfDay"])(new Date()) };
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
    FuseAnalyticsDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllUsers();
        this.getClientDetails();
        this.getHolidays();
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
    /**
     * Register a custom plugin
     */
    FuseAnalyticsDashboardComponent.prototype.registerCustomChartJSPlugin = function () {
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
    FuseAnalyticsDashboardComponent.prototype.getAllUsers = function () {
        var _this = this;
        var id = sessionStorage.getItem('client_id');
        this.analyics.getData('users', { 'client_id': id }).subscribe(function (response) {
            if (response.data) {
                _this.dataSource = response.data;
            }
        }, function (error) {
            _this.toast.showError(error);
        });
    };
    FuseAnalyticsDashboardComponent.prototype.getClientDetails = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        var id = sessionStorage.getItem('client_id');
        this.analyics.getData('clients/' + id).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.client = response.data;
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    FuseAnalyticsDashboardComponent.prototype.getHolidays = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        this.analyics.getData('holidays').subscribe(function (response) {
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
    FuseAnalyticsDashboardComponent.prototype.setEvents = function () {
        this.events = this.events.map(function (item) {
            return new _calendar_event_model__WEBPACK_IMPORTED_MODULE_9__["CalendarEventModel"](item);
        });
    };
    /**
     * Before View Renderer
     * @param {any} header
     * @param {any} body
     */
    FuseAnalyticsDashboardComponent.prototype.beforeMonthViewRender = function (_a) {
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
    FuseAnalyticsDashboardComponent.prototype.getTasks = function () {
        var _this = this;
        var id = sessionStorage.getItem('user_id');
        this.apiloader.setLoader(true);
        this.analyics.getData('users/' + id).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.task = response.data.tasks;
                for (var i = 0; i < _this.task.length; i++) {
                    _this.task[i].color = {
                        primary: '#ad2121',
                        secondary: '#FAE3E3'
                    };
                    /* this.task[i].actions = this.actions; */
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
     * Day clicked
     * @param {MonthViewDay} day
     */
    FuseAnalyticsDashboardComponent.prototype.dayClicked = function (day) {
        var date = day.date;
        var events = day.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_6__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0 || day.cssClass == 'holiday') {
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
    FuseAnalyticsDashboardComponent.prototype.eventTimesChanged = function (_a) {
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
    FuseAnalyticsDashboardComponent.prototype.deleteEvent = function (event) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["FuseConfirmDialogComponent"], {
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
    FuseAnalyticsDashboardComponent.prototype.editEvent = function (action, event) {
        var _this = this;
        var eventIndex = this.events.indexOf(event);
        this.dialogRef = this.dialog.open(_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_8__["FuseEventFormDialogComponent"], {
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
    FuseAnalyticsDashboardComponent.prototype.addEvent = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_8__["FuseEventFormDialogComponent"], {
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
    FuseAnalyticsDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-analytics-dashboard',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/main/content/apps/dashboards/analytics/analytics.component.html"),
            styles: [__webpack_require__(/*! ./analytics.component.scss */ "./src/app/main/content/apps/dashboards/analytics/analytics.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_3__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_analytics_service__WEBPACK_IMPORTED_MODULE_2__["AnalyticsDashboardService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _calendar_calendar_service__WEBPACK_IMPORTED_MODULE_10__["CalendarService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_12__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_11__["ToasterService"],
            _analytics_dash_service__WEBPACK_IMPORTED_MODULE_13__["AnalyticsDashService"]])
    ], FuseAnalyticsDashboardComponent);
    return FuseAnalyticsDashboardComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/analytics/analytics.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/analytics/analytics.module.ts ***!
  \****************************************************************************/
/*! exports provided: FuseAnalyticsDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseAnalyticsDashboardModule", function() { return FuseAnalyticsDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/index.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_charts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _calendar_calendar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../calendar/calendar.service */ "./src/app/main/content/apps/calendar/calendar.service.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/components/widget/widget.module */ "./src/@fuse/components/widget/widget.module.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _analytics_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./analytics.component */ "./src/app/main/content/apps/dashboards/analytics/analytics.component.ts");
/* harmony import */ var _analytics_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./analytics.service */ "./src/app/main/content/apps/dashboards/analytics/analytics.service.ts");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./event-form/event-form.component */ "./src/app/main/content/apps/dashboards/analytics/event-form/event-form.component.ts");
/* harmony import */ var _analytics_dash_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./analytics-dash.service */ "./src/app/main/content/apps/dashboards/analytics/analytics-dash.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: '**',
        component: _analytics_component__WEBPACK_IMPORTED_MODULE_13__["FuseAnalyticsDashboardComponent"],
        resolve: {
            data: _analytics_service__WEBPACK_IMPORTED_MODULE_14__["AnalyticsDashboardService"],
            chat: _calendar_calendar_service__WEBPACK_IMPORTED_MODULE_8__["CalendarService"]
        }
    }
];
var FuseAnalyticsDashboardModule = /** @class */ (function () {
    function FuseAnalyticsDashboardModule() {
    }
    FuseAnalyticsDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _analytics_component__WEBPACK_IMPORTED_MODULE_13__["FuseAnalyticsDashboardComponent"],
                _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_15__["FuseEventFormDialogComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_12__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
                }),
                ng2_charts__WEBPACK_IMPORTED_MODULE_4__["ChartsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_5__["NgxChartsModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot(),
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_10__["FuseSharedModule"],
                _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_11__["FuseWidgetModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_7__["FuseConfirmDialogModule"]
            ],
            providers: [
                _analytics_service__WEBPACK_IMPORTED_MODULE_14__["AnalyticsDashboardService"],
                _calendar_calendar_service__WEBPACK_IMPORTED_MODULE_8__["CalendarService"],
                _analytics_dash_service__WEBPACK_IMPORTED_MODULE_16__["AnalyticsDashService"]
            ],
            entryComponents: [_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_15__["FuseEventFormDialogComponent"]]
        })
    ], FuseAnalyticsDashboardModule);
    return FuseAnalyticsDashboardModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/analytics/analytics.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/analytics/analytics.service.ts ***!
  \*****************************************************************************/
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

/***/ "./src/app/main/content/apps/dashboards/analytics/event-form/event-form.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/analytics/event-form/event-form.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\r\n\r\n        <form name=\"eventForm\" [formGroup]=\"eventForm\" class=\"event-form w-100-p\" fxLayout=\"column\" fxFlex>\r\n\r\n            <mat-form-field class=\"w-100-p\">\r\n                <input matInput\r\n                       name=\"title\"\r\n                       formControlName=\"title\"\r\n                       placeholder=\"Title\"\r\n                       required>\r\n            </mat-form-field>\r\n\r\n            <div class=\"py-16\" fxFlex=\"1 0 auto\" fxLayout=\"row\">\r\n                <mat-slide-toggle\r\n                    name=\"allDay\"\r\n                    formControlName=\"allDay\"\r\n                    class=\"mr-24\"\r\n                    aria-label=\"All day\">\r\n                    All Day\r\n                </mat-slide-toggle>\r\n            </div>\r\n\r\n            <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n                <mat-form-field class=\"mr-sm-24\" fxFlex>\r\n                    <input matInput [matDatepicker]=\"startDatePicker\" placeholder=\"Start Date\"\r\n                           name=\"start\"\r\n                           formControlName=\"start\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #startDatePicker></mat-datepicker>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"no-errors-spacer\" fxFlex mat-no-float>\r\n                    <input matInput placeholder=\"Start Time\">\r\n                </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n                <mat-form-field class=\"mr-sm-24\" fxFlex>\r\n                    <input matInput [matDatepicker]=\"endDatePicker\" placeholder=\"End Date\"\r\n                           name=\"end\"\r\n                           formControlName=\"end\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #endDatePicker></mat-datepicker>\r\n                </mat-form-field>\r\n\r\n                <mat-form-field class=\"no-errors-spacer\" fxFlex mat-no-float>\r\n                    <input matInput placeholder=\"End Time\">\r\n                </mat-form-field>\r\n\r\n            </div>\r\n\r\n            <mat-form-field formGroupName=\"meta\" class=\"w-100-p\">\r\n                <input matInput\r\n                       name=\"location\"\r\n                       formControlName=\"location\"\r\n                       placeholder=\"Location\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field formGroupName=\"meta\" class=\"w-100-p\">\r\n\r\n                <textarea matInput\r\n                          formControlName=\"notes\"\r\n                          placeholder=\"Notes\"\r\n                          mat-maxlength=\"250\"\r\n                          max-rows=\"4\">\r\n                </textarea>\r\n            </mat-form-field>\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n        <button *ngIf=\"action !=='edit'\"\r\n                mat-raised-button\r\n                (click)=\"dialogRef.close(eventForm)\"\r\n                class=\"save-button mat-accent\"\r\n                [disabled]=\"eventForm.invalid\"\r\n                aria-label=\"SAVE\">\r\n            SAVE\r\n        </button>\r\n\r\n        <button *ngIf=\"action ==='edit'\"\r\n                mat-raised-button\r\n                (click)=\"dialogRef.close(['save',eventForm])\"\r\n                class=\"save-button mat-accent\"\r\n                [disabled]=\"eventForm.invalid\"\r\n                aria-label=\"SAVE\">\r\n            SAVE\r\n        </button>\r\n\r\n        <button *ngIf=\"action ==='edit'\"\r\n                mat-icon-button\r\n                (click)=\"dialogRef.close(['delete',eventForm])\"\r\n                aria-label=\"Delete\"\r\n                matTooltip=\"Delete\">\r\n            <mat-icon>delete</mat-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/dashboards/analytics/event-form/event-form.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/analytics/event-form/event-form.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.event-form-dialog {\n  width: 480px; }\n@media screen and (max-width: 599px) {\n    .event-form-dialog {\n      width: 100%; } }\n.event-form-dialog .mat-dialog-container {\n    padding: 0; }\n.event-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n.event-form-dialog .primary-color-input,\n  .event-form-dialog .secondary-color-input {\n    padding: 6px 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/dashboards/analytics/event-form/event-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/analytics/event-form/event-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: FuseEventFormDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseEventFormDialogComponent", function() { return FuseEventFormDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/mat-colors */ "./src/@fuse/mat-colors/index.ts");
/* harmony import */ var _calendar_event_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../calendar/event.model */ "./src/app/main/content/apps/calendar/event.model.ts");
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





var FuseEventFormDialogComponent = /** @class */ (function () {
    function FuseEventFormDialogComponent(dialogRef, data, formBuilder) {
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
            this.event = new _calendar_event_model__WEBPACK_IMPORTED_MODULE_4__["CalendarEventModel"]({
                start: data.date,
                end: data.date
            });
        }
        this.eventForm = this.createEventForm();
    }
    FuseEventFormDialogComponent.prototype.createEventForm = function () {
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
    FuseEventFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-calendar-event-form-dialog',
            template: __webpack_require__(/*! ./event-form.component.html */ "./src/app/main/content/apps/dashboards/analytics/event-form/event-form.component.html"),
            styles: [__webpack_require__(/*! ./event-form.component.scss */ "./src/app/main/content/apps/dashboards/analytics/event-form/event-form.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FuseEventFormDialogComponent);
    return FuseEventFormDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboards-analytics-analytics-module.js.map