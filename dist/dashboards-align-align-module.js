(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboards-align-align-module"],{

/***/ "./src/app/main/content/apps/dashboards/align/align-dash-cal-dialog/align-dash-cal-dialog.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/align/align-dash-cal-dialog/align-dash-cal-dialog.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n  <mat-toolbar class=\"mat-accent m-0\">\r\n      <mat-toolbar-row fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n          <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n          <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n              <mat-icon>close</mat-icon>\r\n          </button>\r\n      </mat-toolbar-row>\r\n  </mat-toolbar>\r\n\r\n  <div mat-dialog-content class=\"p-24 m-0\" fusePerfectScrollbar>\r\n\r\n      <form name=\"eventForm\" [formGroup]=\"eventForm\" class=\"event-form w-100-p\" fxLayout=\"column\" fxFlex>\r\n\r\n          <mat-form-field class=\"w-100-p\">\r\n              <input matInput\r\n                     name=\"title\"\r\n                     formControlName=\"title\"\r\n                     placeholder=\"Title\"\r\n                     required>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"mr-sm-24\" fxFlex>\r\n              <input matInput [matDatepicker]=\"startDatePicker\" placeholder=\"Date\"\r\n                      name=\"holiday_date\"\r\n                      formControlName=\"holiday_date\" required>\r\n              <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #startDatePicker></mat-datepicker>\r\n          </mat-form-field>\r\n\r\n      </form>\r\n\r\n  </div>\r\n\r\n  <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n      <button *ngIf=\"action !=='edit'\"\r\n              mat-raised-button\r\n              (click)=\"dialogRef.close(eventForm)\"\r\n              class=\"save-button mat-accent\"\r\n              [disabled]=\"eventForm.invalid\"\r\n              aria-label=\"SAVE\">\r\n          SAVE\r\n      </button>\r\n\r\n      <button *ngIf=\"action ==='edit'\"\r\n              mat-raised-button\r\n              (click)=\"dialogRef.close(['save',eventForm])\"\r\n              class=\"save-button mat-accent\"\r\n              [disabled]=\"eventForm.invalid\"\r\n              aria-label=\"SAVE\">\r\n          SAVE\r\n      </button>\r\n\r\n      <button *ngIf=\"action ==='edit'\"\r\n              mat-icon-button\r\n              (click)=\"dialogRef.close(['delete',eventForm])\"\r\n              aria-label=\"Delete\"\r\n              matTooltip=\"Delete\">\r\n          <mat-icon>delete</mat-icon>\r\n      </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/dashboards/align/align-dash-cal-dialog/align-dash-cal-dialog.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/align/align-dash-cal-dialog/align-dash-cal-dialog.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.event-form-dialog {\n  width: 480px; }\n@media screen and (max-width: 599px) {\n    .event-form-dialog {\n      width: 100%; } }\n.event-form-dialog .mat-dialog-container {\n    padding: 0; }\n.event-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n.event-form-dialog .primary-color-input,\n  .event-form-dialog .secondary-color-input {\n    padding: 6px 8px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/dashboards/align/align-dash-cal-dialog/align-dash-cal-dialog.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/align/align-dash-cal-dialog/align-dash-cal-dialog.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: AlignDashCalDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignDashCalDialogComponent", function() { return AlignDashCalDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _fuse_mat_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/mat-colors */ "./src/@fuse/mat-colors/index.ts");
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




var AlignDashCalDialogComponent = /** @class */ (function () {
    function AlignDashCalDialogComponent(dialogRef, data, formBuilder) {
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
            this.event = {
                title: data.title,
                start: data.date
            };
        }
        this.eventForm = this.createEventForm();
    }
    AlignDashCalDialogComponent.prototype.createEventForm = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.title),
            holiday_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.start)
        });
    };
    AlignDashCalDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-align-dash-cal-dialog',
            template: __webpack_require__(/*! ./align-dash-cal-dialog.component.html */ "./src/app/main/content/apps/dashboards/align/align-dash-cal-dialog/align-dash-cal-dialog.component.html"),
            styles: [__webpack_require__(/*! ./align-dash-cal-dialog.component.scss */ "./src/app/main/content/apps/dashboards/align/align-dash-cal-dialog/align-dash-cal-dialog.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AlignDashCalDialogComponent);
    return AlignDashCalDialogComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/align/align-dash.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/align/align-dash.service.ts ***!
  \**************************************************************************/
/*! exports provided: AlignDashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignDashService", function() { return AlignDashService; });
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






var AlignDashService = /** @class */ (function () {
    function AlignDashService(http) {
        this.http = http;
        this.baseUrl = _fuse_constant__WEBPACK_IMPORTED_MODULE_5__["apiUri"];
    }
    AlignDashService.prototype.setHeaders = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Accept', 'application/json');
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    AlignDashService.prototype.postData = function (url, data, type) {
        var headers = this.setHeaders();
        if (type = 'reset') {
            headers = headers.set('Authorization', 'Bearer 12344');
        }
        var options = { headers: headers };
        return this.http.post(this.baseUrl + url, data, options).map(this.extractData).catch(this.handleError);
    };
    AlignDashService.prototype.getData = function (url, data) {
        var headers = this.setHeaders();
        if (data) {
            var queryParams = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
            url += '?' + queryParams;
        }
        var options = { headers: headers };
        return this.http.get(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    AlignDashService.prototype.deleteData = function (url) {
        var headers = this.setHeaders();
        var options = { headers: headers };
        return this.http.delete(this.baseUrl + url, options).map(this.extractData).catch(this.handleError);
    };
    AlignDashService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    AlignDashService.prototype.handleError = function (error) {
        var errMsg = error.error;
        if (typeof errMsg.message === 'object') {
            var arr = Array.from(Object.keys(errMsg.message), function (k) { return errMsg.message[k]; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(arr);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errMsg.message);
    };
    AlignDashService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AlignDashService);
    return AlignDashService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/align/align.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/align/align.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"dashboard-align\" class=\"page-layout simple right-sidenav\" fxLayout=\"row\">\r\n\r\n    <mat-sidenav-container>\r\n        <!-- CENTER -->\r\n        <div class=\"center\" fusePerfectScrollbar>\r\n            <!-- CONTENT -->\r\n            <div class=\"content\">\r\n                <div class=\"widget-group grey-100-bg p-12\" fxLayout=\"row wrap\" fxFlex=\"100\" *fuseIfOnDom\r\n                    [@animateStagger]=\"{value:'50'}\">\r\n\r\n                    <!-- WIDGET 5 -->\r\n                    <fuse-widget [@animate]=\"{value:'*',params:{y:'100%'}}\" fxLayout=\"row\" fxFlex=\"100\"\r\n                        class=\"widget widget5\">\r\n\r\n                        <!-- Front -->\r\n                        <div class=\"fuse-widget-front mat-white-bg mat-elevation-z2\">\r\n\r\n                            <div class=\"px-16 border-bottom\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\">\r\n\r\n                                <div fxFlex class=\"py-16 h3\">{{widgets.widget5.title}}</div>\r\n\r\n                                <div fxFlex=\"0 1 auto\" class=\"py-16\" fxLayout=\"row\">\r\n                                    <button mat-button class=\"px-16\" *ngFor=\"let range of widgets.widget5.ranges | keys\"\r\n                                        (click)=\"widget5.currentRange = range.key\"\r\n                                        [disabled]=\"widget5.currentRange == range.key\">\r\n                                        {{range.value}}\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div fxLayout=\"row wrap\" fxLayoutAlign=\"start start\">\r\n\r\n                                <div class=\"h-420 my-16\" fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n                                    <ngx-charts-bar-vertical-stacked *fuseIfOnDom [scheme]=\"widget5.scheme\"\r\n                                        [results]=\"this.widgets.widget5.mainChart[this.widget5.currentRange]\"\r\n                                        [gradient]=\"widget5.gradient\" [xAxis]=\"widget5.xAxis\" [yAxis]=\"widget5.yAxis\"\r\n                                        [legend]=\"widget5.legend\" [showXAxisLabel]=\"widget5.showXAxisLabel\"\r\n                                        [showYAxisLabel]=\"widget5.showYAxisLabel\" [xAxisLabel]=\"widget5.xAxisLabel\"\r\n                                        [yAxisLabel]=\"widget5.yAxisLabel\" (select)=\"widget5.onSelect($event)\">\r\n                                    </ngx-charts-bar-vertical-stacked>\r\n                                </div>\r\n\r\n                                <div class=\"h-420 my-16\" fxLayout=\"row\" fxFlex=\"100\" fxFlex.gt-sm=\"50\">\r\n                                    <ngx-charts-bar-vertical-stacked *fuseIfOnDom [scheme]=\"widget5.scheme\"\r\n                                        [results]=\"this.widgets.widget5.mainChart[this.widget5.currentRange]\"\r\n                                        [gradient]=\"widget5.gradient\" [xAxis]=\"widget5.xAxis\" [yAxis]=\"widget5.yAxis\"\r\n                                        [legend]=\"widget5.legend\" [showXAxisLabel]=\"widget5.showXAxisLabel\"\r\n                                        [showYAxisLabel]=\"widget5.showYAxisLabel\" [xAxisLabel]=\"widget5.xAxisLabel\"\r\n                                        [yAxisLabel]=\"widget5.yAxisLabel\" (select)=\"widget5.onSelect($event)\">\r\n                                    </ngx-charts-bar-vertical-stacked>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- / Front -->\r\n\r\n                    </fuse-widget>\r\n                    <!-- / WIDGET 5 -->\r\n                    <div class=\"main-align\">\r\n                        <div class=\"left fuse-card auto-width\">\r\n                            <div id=\"calendar\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\r\n\r\n                                    <!-- HEADER -->\r\n                                    <div class=\"header p-16 p-sm-24\" [ngClass]=\"viewDate | date:'MMM'\">\r\n                                \r\n                                        <div class=\"header-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n                                \r\n                                            <div class=\"header-top\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayout.xs=\"column\">\r\n                                \r\n                                                <div class=\"logo mb-16 mb-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                                    <mat-icon class=\"logo-icon\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">today</mat-icon>\r\n                                                    <span class=\"logo-text\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Calendar</span>\r\n                                                </div>\r\n                                \r\n                                                <!-- TOOLBAR -->\r\n                                                <div class=\"toolbar\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                                \r\n                                                    <button mat-icon-button aria-label=\"Search\" matTooltip=\"Search\">\r\n                                                        <mat-icon>search</mat-icon>\r\n                                                    </button>\r\n                                \r\n                                                    <button mat-icon-button\r\n                                                            mwlCalendarToday\r\n                                                            [(viewDate)]=\"viewDate\"\r\n                                                            (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                                                            aria-label=\"Today\" matTooltip=\"Today\">\r\n                                                        <mat-icon>today</mat-icon>\r\n                                                    </button>\r\n                                \r\n                                                    <button mat-icon-button (click)=\"view='day'\" aria-label=\"Day\" matTooltip=\"Day\">\r\n                                                        <mat-icon>view_day</mat-icon>\r\n                                                    </button>\r\n                                \r\n                                                    <button mat-icon-button (click)=\"view='week'\" aria-label=\"Week\" matTooltip=\"Week\">\r\n                                                        <mat-icon>view_week</mat-icon>\r\n                                                    </button>\r\n                                \r\n                                                    <button mat-icon-button (click)=\"view='month'\" aria-label=\"Month\" matTooltip=\"Month\">\r\n                                                        <mat-icon>view_module</mat-icon>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <!-- / TOOLBAR -->\r\n                                \r\n                                            <!-- HEADER BOTTOM -->\r\n                                            <div class=\"header-bottom\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n                                                *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'150ms'}}\">\r\n                                \r\n                                                <button mat-icon-button class=\"arrow\"\r\n                                                        mwlCalendarPreviousView\r\n                                                        [view]=\"view\"\r\n                                                        [(viewDate)]=\"viewDate\"\r\n                                                        (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                                                        aria-label=\"Previous\">\r\n                                                    <mat-icon>chevron_left</mat-icon>\r\n                                                </button>\r\n                                \r\n                                                <div class=\"title\">\r\n                                                    {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}\r\n                                                </div>\r\n                                \r\n                                                <button mat-icon-button class=\"arrow\"\r\n                                                        mwlCalendarNextView\r\n                                                        [view]=\"view\"\r\n                                                        [(viewDate)]=\"viewDate\"\r\n                                                        (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                                                        aria-label=\"Next\">\r\n                                                    <mat-icon>chevron_right</mat-icon>\r\n                                                </button>\r\n                                            </div>\r\n                                            <!-- / HEADER BOTTOM -->\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- / HEADER -->\r\n                                \r\n                                    <!-- CONTENT -->\r\n                                    <div class=\"content analytics\" fusePerfectScrollbar *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'200ms',y:'50px'}}\">\r\n                                        <div [ngSwitch]=\"view\">\r\n                                            <mwl-calendar-month-view\r\n                                                *ngSwitchCase=\"'month'\"\r\n                                                [viewDate]=\"viewDate\"\r\n                                                [events]=\"events\"\r\n                                                [refresh]=\"refresh\"\r\n                                                [activeDayIsOpen]=\"activeDayIsOpen\"\r\n                                                (dayClicked)=\"dayClicked($event.day)\"\r\n                                                (beforeViewRender)=\"beforeMonthViewRender($event)\">\r\n                                            </mwl-calendar-month-view>\r\n                                            <mwl-calendar-week-view\r\n                                                *ngSwitchCase=\"'week'\"\r\n                                                [viewDate]=\"viewDate\"\r\n                                                (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                                                [events]=\"events\"\r\n                                                [refresh]=\"refresh\"\r\n                                                (dayClicked)=\"dayClicked($event.day)\"\r\n                                                (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n                                            </mwl-calendar-week-view>\r\n                                            <mwl-calendar-day-view\r\n                                                *ngSwitchCase=\"'day'\"\r\n                                                [viewDate]=\"viewDate\"\r\n                                                (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                                                [events]=\"events\"\r\n                                                [refresh]=\"refresh\"\r\n                                                (dayClicked)=\"dayClicked($event.day)\"\r\n                                                (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n                                            </mwl-calendar-day-view>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- / CONTENT -->\r\n                                </div>\r\n                            \r\n                        </div>\r\n                        <div class=\"right fuse-card auto-width\">\r\n                            <!-- CHAT -->\r\n                            <div class=\"chat\" fxFlex fxLayout=\"column\">\r\n\r\n                                <!-- CHAT TOOLBAR -->\r\n                                <mat-toolbar class=\"chat-toolbar\">\r\n\r\n                                    <div fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n\r\n                                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                                            <!-- CHAT CONTACT-->\r\n                                            <div class=\"chat-contact\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"selectContact()\">\r\n\r\n                                                <div class=\"avatar-wrapper\">\r\n\r\n                                                    <img src=\"assets/images/avatars/Lily.jpg\"\r\n                                                        class=\"avatar\"\r\n                                                        alt=\"\"/>\r\n\r\n                                                    <mat-icon class=\"s-16 status online\">\r\n                                                    </mat-icon>\r\n                                                </div>\r\n\r\n                                                <div class=\"chat-contact-name\">\r\n                                                    Jhon\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <!-- / CHAT CONTACT-->\r\n                                        </div>\r\n\r\n                                        <div>\r\n                                            <button mat-icon-button [matMenuTriggerFor]=\"contactMenu\" aria-label=\"more\">\r\n                                                <mat-icon>more_vert</mat-icon>\r\n                                            </button>\r\n\r\n                                            <mat-menu #contactMenu=\"matMenu\">\r\n                                                <button mat-menu-item (click)=\"selectContact()\">\r\n                                                    Contact Info\r\n                                                </button>\r\n                                            </mat-menu>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </mat-toolbar>\r\n                                <!-- / CHAT TOOLBAR -->\r\n\r\n                                <!-- CHAT CONTENT -->\r\n                                <div id=\"chat-content\" fxFlex fusePerfectScrollbar>\r\n\r\n                                    <!-- CHAT MESSAGES -->\r\n                                    <div class=\"chat-messages\">\r\n\r\n                                        <!-- MESSAGE -->\r\n                                        <div fxLayout=\"row\" *ngFor=\"let message of chatdialog\" class=\"message-row\"\r\n                                            [ngClass]=\"{'user' :message.who === user.id}\">\r\n\r\n                                            <img *ngIf=\"message.who === contact.id\"\r\n                                                src=\"{{contact.avatar}}\"\r\n                                                class=\"avatar\"\r\n                                                alt=\"{{contact.name}}\"/>\r\n\r\n                                            <img *ngIf=\"message.who ===user.id\" class=\"avatar\" src=\"{{user.avatar}}\">\r\n\r\n                                            <div class=\"bubble\">\r\n                                                <div class=\"message\">{{message.message}}</div>\r\n                                                <div class=\"time secondary-text\">{{message.time | date:'medium'}}</div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n                                        <!-- / MESSAGE -->\r\n\r\n                                    </div>\r\n                                    <!-- CHAT MESSAGES -->\r\n\r\n                                </div>\r\n                                <!-- / CHAT CONTENT -->\r\n\r\n                                <!-- CHAT FOOTER -->\r\n                                <div class=\"chat-footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\r\n                                    <!-- REPLY FORM -->\r\n                                    <form #replyForm=\"ngForm\"\r\n                                        (ngSubmit)=\"reply($event)\"\r\n                                        (keyup.enter)=\"reply($event)\"\r\n                                        fxFlex class=\"reply-form\"\r\n                                        fxLayout=\"row\"\r\n                                        fxLayoutAlign=\"start center\">\r\n\r\n                                        <mat-form-field class=\"\" fxFlex floatLabel=\"never\">\r\n                                            <input matInput #replyInput placeholder=\"Type here\"\r\n                                                    ngModel name=\"message\">\r\n                                        </mat-form-field>\r\n\r\n                                        <button mat-fab class=\"\" type=\"submit\" aria-label=\"Send message\">\r\n                                            <mat-icon>send</mat-icon>\r\n                                        </button>\r\n\r\n                                    </form>\r\n                                    <!-- / REPLY FORM -->\r\n                                </div>\r\n                                <!-- / CHAT FOOTER-->\r\n                            </div>\r\n                            <!-- / CHAT -->\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- / WIDGET GROUP -->\r\n            </div>\r\n            <!-- / CONTENT -->\r\n        </div>\r\n        <!-- / CENTER -->\r\n\r\n    </mat-sidenav-container>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/content/apps/dashboards/align/align.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/align/align.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -webkit-box-flex: 1;\n          flex: 1; }\n.cal-month-view .cal-cell-row {\n  display: -webkit-box;\n  display: flex; }\n.cal-month-view .cal-cell {\n  float: left;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch; }\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n.cal-month-view .cal-events {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px;\n  background-color: #1e90ff;\n  border-color: #D1E8FF;\n  color: #fff; }\n.cal-month-view .cal-event-title:link {\n  color: currentColor; }\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n.cal-week-view .cal-day-headers {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n.cal-week-view .cal-day-headers .cal-header {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n  padding: 5px; }\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px;\n  background-color: #D1E8FF;\n  border: 1px solid #1e90ff;\n  color: #1e90ff; }\n.cal-week-view .cal-event-title:link {\n  color: currentColor; }\n.cal-week-view .cal-draggable {\n  cursor: move; }\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n.cal-day-view .cal-hour-rows {\n    width: 100%;\n    border: solid 1px #e1e1e1;\n    overflow-x: scroll;\n    position: relative; }\n.cal-day-view .cal-hour:nth-child(odd) {\n    background-color: #fafafa; }\n.cal-day-view mwl-calendar-day-view-hour-segment,\n  .cal-day-view .cal-hour-segment {\n    display: block; }\n.cal-day-view .cal-hour-segment::after {\n    content: '\\00a0'; }\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed #e1e1e1; }\n.cal-day-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n.cal-day-view .cal-hour-segment:hover,\n  .cal-day-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n.cal-day-view .cal-event-container {\n    position: absolute; }\n.cal-day-view .cal-event {\n    padding: 5px;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 100%;\n    box-sizing: border-box;\n    background-color: #D1E8FF;\n    border: 1px solid #1e90ff;\n    color: #1e90ff; }\n.cal-day-view .cal-event-title:link {\n    color: currentColor; }\n.cal-day-view .cal-draggable {\n    cursor: move; }\n.cal-day-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n.cal-day-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n.cal-day-view .cal-all-day-event {\n    padding: 8px;\n    border: solid 1px; }\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n#dashboard-align mat-sidenav-container .mat-drawer-content,\n#dashboard-align mat-sidenav-container .mat-sidenav-content {\n  -webkit-box-flex: 1;\n          flex: 1 1 100%; }\n#dashboard-align mat-sidenav-container .center > .header {\n  height: 160px;\n  min-height: 160px;\n  max-height: 160px; }\n#dashboard-align mat-sidenav-container .center > .header .selected-project {\n    background: rgba(0, 0, 0, 0.12);\n    color: #FFFFFF;\n    padding: 8px 16px;\n    height: 40px;\n    line-height: 24px;\n    font-size: 16px; }\n#dashboard-align mat-sidenav-container .center > .header .project-selector {\n    margin-left: 1px;\n    border-radius: 0;\n    background: rgba(0, 0, 0, 0.12); }\n#dashboard-align mat-sidenav-container .center > .header .project-selector mat-icon {\n      color: #FFFFFF; }\n#dashboard-align mat-sidenav-container .center > .content {\n  -webkit-box-flex: 1;\n          flex: 1; }\n#dashboard-align mat-sidenav-container .center > .content mat-tab-group {\n    height: 100%; }\n#dashboard-align mat-sidenav-container .center > .content mat-tab-group .mat-tab-body-wrapper {\n      -webkit-box-flex: 1;\n              flex-grow: 1; }\n#dashboard-align mat-sidenav-container .center > .content .mat-tab-label-container {\n    padding: 0 24px; }\n#dashboard-align mat-sidenav-container .sidenav {\n  width: 250px !important;\n  min-width: 250px !important;\n  max-width: 250px !important; }\n#dashboard-align mat-sidenav-container .widget.widget5 .gridline-path.gridline-path-horizontal {\n  display: none; }\n.main-align {\n  width: 100%;\n  padding: 12px;\n  float: left; }\n.main-align .left {\n  width: 75%;\n  float: left; }\n.main-align .right {\n  width: 24%;\n  float: left;\n  margin-left: 10px; }\n.chat .chat-toolbar {\n  min-height: 64px;\n  background-color: #F3F4F5;\n  color: rgba(0, 0, 0, 0.87);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08); }\n.chat .chat-toolbar .responsive-chats-button {\n    padding: 0; }\n.chat .chat-toolbar .chat-contact {\n    cursor: pointer; }\n.chat .chat-toolbar .chat-contact .avatar {\n      margin-right: 16px; }\n.chat #chat-content {\n  background: transparent;\n  overflow: auto; }\n.chat #chat-content .message-row {\n    padding: 16px; }\n.chat #chat-content .message-row .bubble {\n      position: relative;\n      padding: 6px 7px 8px 9px;\n      background-color: #FFF;\n      box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);\n      border-radius: 6px; }\n.chat #chat-content .message-row .bubble:before {\n        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADGUExURQAAAP////b29vn5+f///wAAAP///wAAAAAAAP///9ra2v////j4+PHx8fv7++Hh4fHx8f////////////////39/QAAAP////////z8/P////39/f39/fz8/P////////////z8/P////////////z8/P////////////v7+/Hx8f///9bW1vz8/K2trf////39/f39/WJiYgAAAExMTFtbWwAAAN3d3cjIyPr6+vX19QAAAO7u7vz8/NTU1Ofn5zMzM////zGPlXsAAABBdFJOUwAcm/kREh4CCDWL1SneR6TfAQffhMYK/A5nRrLWfRc5DW2ih5f+19Kn+9v4g/1LCJuXHwQUKgahcXS6DNnlDMMKKzPoTgAAAKBJREFUKM+V08USwmAQA+C/0NIWd3d3d8/7vxTMcIPkQK7f7CG7s8bQAOY/SCuwFYQU1P+eiCqIK2gpWCmoCrAgoKQgJ8CHgIqAMjg0MxxSQ3DogEMWFBZtUPAHYGB1CyDQWE6AH7BrfXzlAxGAQhECTGAmwN1Okz0Gb/LW4fEItIfrOfNELMh3tck7u+PhcT2zQ7l77/K8iY8yJwV3BeYFqpc/uSyPGdAAAAAASUVORK5CYII=);\n        content: '';\n        position: absolute;\n        left: -11px;\n        bottom: 3px;\n        width: 12px;\n        height: 19px;\n        background-position: 50% 50%;\n        background-repeat: no-repeat;\n        background-size: contain; }\n.chat #chat-content .message-row .bubble .message {\n        white-space: pre-wrap; }\n.chat #chat-content .message-row .bubble .time {\n        font-size: 11px;\n        margin-top: 8px;\n        text-align: right; }\n.chat #chat-content .message-row.contact .avatar {\n      margin: 0 16px 0 0; }\n.chat #chat-content .message-row.user {\n      -webkit-box-align: end;\n              align-items: flex-end; }\n.chat #chat-content .message-row.user .avatar {\n        -webkit-box-ordinal-group: 3;\n                order: 2;\n        margin: 0 0 0 16px; }\n.chat #chat-content .message-row.user .bubble {\n        margin-left: auto;\n        background-color: #E8F5E9;\n        border: 1px solid #DFEBE0;\n        -webkit-box-ordinal-group: 2;\n                order: 1; }\n.chat #chat-content .message-row.user .bubble:before {\n          right: -11px;\n          left: auto;\n          background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAD2UExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRsXAAAANzwzNPmxNrtyau5oIWRedDkwNntyczgwdfpyJ+/n97wzsLWtNjsytvwzczfvtPmxau6nNjqxtrtyio1KtzwzNjryAAAANzwzgAAANzwzK7Aor/Us9Lnw8vevAAAAMzevtbpxrvMrX+IdwAAAEROOi45Lr3MrZGjf9LoxX+MctnqydLkwhgYGMzfv9vuyQAAANzwzNvuy9zxy7vMu7XGqNvtzKKykwAAANruzKq6nLnMriQkGMXXuL3PsNjsySgzKAAAANLkw83fvd3vy9z4xtzwzRpFmIEAAABQdFJOUwAXChEGBAMBAgwhDvJ7k0YqMc0Zmwj6apf2kjU0+dkw/swh/CP9j2Wr2gndvaYeBRoxQg6gUPt/FaHJGdTj9A9k7XQLeE6iFcN12xkSt9r4NKizowAAAMFJREFUKM+V0sdywlAMBVDbMX7PQCihQ+iQ0HsJvfem/P/PwBIzugu0PXNnNNJVyPmhsIPhhoB2COwIGuLdhAcl3AhCBoBoHUC6BCBbA0C/EkBFB5D/FjxQwQYg1RI8UKINgDoSAPUlAPqUAMgfAEBfXsEDBV0+Hogi4Zhg4THj9YwHoqEBYOrgYTI3GVgMNn8r+Qq94k9yZNosW/3Hy9VuTjWfHkOX6367bGZUU7de66ieHZrO1OGg8Z1WTgYAFLgD5S1PCkzo1B0AAAAASUVORK5CYII=); }\n.chat .chat-footer {\n  min-height: 64px;\n  max-height: 96px;\n  background-color: #F3F4F5;\n  color: rgba(0, 0, 0, 0.87);\n  border-top: 1px solid rgba(0, 0, 0, 0.08);\n  padding: 8px 8px 8px 16px; }\n.chat .chat-footer .reply-form mat-form-field {\n    margin: 0;\n    padding-right: 16px; }\n.chat .chat-footer .reply-form mat-form-field textarea {\n      overflow: auto;\n      max-height: 80px;\n      -webkit-transition: height 200ms ease;\n      transition: height 200ms ease; }\n.chat .chat-footer .reply-form mat-form-field textarea.grow {\n        height: 80px; }\n.chat .chat-footer .reply-form mat-form-field .mat-errors-spacer {\n      display: none; }\n.chat .chat-footer .reply-form .mat-button {\n    margin: 0; }\n.chat-messages {\n  height: 425px; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/dashboards/align/align.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/align/align.component.ts ***!
  \***********************************************************************/
/*! exports provided: AlignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignComponent", function() { return AlignComponent; });
/* harmony import */ var _align_dash_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./align-dash.service */ "./src/app/main/content/apps/dashboards/align/align-dash.service.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _align_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./align.service */ "./src/app/main/content/apps/dashboards/align/align.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-shape */ "./node_modules/d3-shape/index.js");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _align_dash_cal_dialog_align_dash_cal_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./align-dash-cal-dialog/align-dash-cal-dialog.component */ "./src/app/main/content/apps/dashboards/align/align-dash-cal-dialog/align-dash-cal-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive */ "./src/@fuse/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chat.service */ "./src/app/main/content/apps/dashboards/align/chat.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AlignComponent = /** @class */ (function () {
    function AlignComponent(alignservice, dialog, chatService, apiloader, toast, aligndashService) {
        var _this = this;
        this.alignservice = alignservice;
        this.dialog = dialog;
        this.chatService = chatService;
        this.apiloader = apiloader;
        this.toast = toast;
        this.aligndashService = aligndashService;
        this.widget5 = {};
        this.dateNow = Date.now();
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.projects = this.alignservice.projects;
        this.widgets = this.alignservice.widgets;
        this.widget5 = {
            currentRange: 'TW',
            xAxis: true,
            yAxis: true,
            gradient: false,
            legend: false,
            showXAxisLabel: false,
            xAxisLabel: 'Days',
            showYAxisLabel: false,
            yAxisLabel: 'Isues',
            scheme: {
                domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
            },
            onSelect: function (ev) {
                console.log(ev);
            },
            supporting: {
                currentRange: '',
                xAxis: false,
                yAxis: false,
                gradient: false,
                legend: false,
                showXAxisLabel: false,
                xAxisLabel: 'Days',
                showYAxisLabel: false,
                yAxisLabel: 'Isues',
                scheme: {
                    domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
                },
                curve: d3_shape__WEBPACK_IMPORTED_MODULE_4__["curveBasis"]
            }
        };
        setInterval(function () {
            _this.dateNow = Date.now();
        }, 1000);
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.selectedDay = { date: Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["startOfDay"])(new Date()) };
        this.actions = [];
    }
    AlignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getHolidays();
        this.user = this.chatService.user;
        this.chatService.onChatSelected
            .subscribe(function (chatData) {
            if (chatData) {
                _this.selectedChat = chatData;
                _this.contact = chatData.contacts;
                _this.chatdialog = chatData.dialog;
                _this.readyToReply();
            }
        });
    };
    AlignComponent.prototype.setEvents = function () {
        var _this = this;
        this.events = this.events.map(function (item) {
            item.actions = _this.actions;
            return item;
        });
    };
    AlignComponent.prototype.getHolidays = function () {
        var _this = this;
        this.apiloader.setLoader(true);
        this.aligndashService.getData('holidays').subscribe(function (response) {
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
                    events[i].actions = _this.actions;
                }
                _this.events = events;
                _this.setEvents();
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    AlignComponent.prototype.beforeMonthViewRender = function (_a) {
        var header = _a.header, body = _a.body;
        body.forEach(function (day) {
            var event = day.events;
            if (event.length) {
                event.forEach(function (item) {
                    day.cssClass = 'holiday';
                });
            }
        });
    };
    AlignComponent.prototype.dayClicked = function (day) {
        var date = day.date;
        var events = day.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_8__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
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
    AlignComponent.prototype.editEvent = function (action, event) {
        var _this = this;
        var eventIndex = this.events.indexOf(event);
        this.dialogRef = this.dialog.open(_align_dash_cal_dialog_align_dash_cal_dialog_component__WEBPACK_IMPORTED_MODULE_10__["AlignDashCalDialogComponent"], {
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
    AlignComponent.prototype.addEvent = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(_align_dash_cal_dialog_align_dash_cal_dialog_component__WEBPACK_IMPORTED_MODULE_10__["AlignDashCalDialogComponent"], {
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
    AlignComponent.prototype.deleteEvent = function (event) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_9__["FuseConfirmDialogComponent"], {
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
    //Chat
    AlignComponent.prototype.selectContact = function () {
        /* this.chatService.selectContact(this.contact); */
    };
    AlignComponent.prototype.readyToReply = function () {
        var _this = this;
        setTimeout(function () {
            _this.replyForm.reset();
            _this.focusReplyInput();
            _this.scrollToBottom();
        });
    };
    AlignComponent.prototype.focusReplyInput = function () {
        var _this = this;
        setTimeout(function () {
            _this.replyInput.focus();
        });
    };
    AlignComponent.prototype.scrollToBottom = function (speed) {
        var _this = this;
        speed = speed || 400;
        if (this.directiveScroll) {
            this.directiveScroll.update();
            setTimeout(function () {
                _this.directiveScroll.scrollToBottom(0, speed);
            });
        }
    };
    AlignComponent.prototype.reply = function (event) {
        /* // Message
        const message = {
            who    : this.user.id,
            message: this.replyForm.form.value.message,
            time   : new Date().toISOString()
        };

        // Add the message to the chat
        this.chatdialog.push(message);

        // Update the server
        this.chatService.updateDialog(this.selectedChat.chatId, this.chatdialog).then(response => {
            this.readyToReply();
        }); */
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_12__["FusePerfectScrollbarDirective"]),
        __metadata("design:type", _fuse_directives_fuse_perfect_scrollbar_fuse_perfect_scrollbar_directive__WEBPACK_IMPORTED_MODULE_12__["FusePerfectScrollbarDirective"])
    ], AlignComponent.prototype, "directiveScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"])('replyInput'),
        __metadata("design:type", Object)
    ], AlignComponent.prototype, "replyInputField", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('replyForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"])
    ], AlignComponent.prototype, "replyForm", void 0);
    AlignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-align',
            template: __webpack_require__(/*! ./align.component.html */ "./src/app/main/content/apps/dashboards/align/align.component.html"),
            styles: [__webpack_require__(/*! ./align.component.scss */ "./src/app/main/content/apps/dashboards/align/align.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_5__["fuseAnimations"],
            providers: [_align_dash_service__WEBPACK_IMPORTED_MODULE_0__["AlignDashService"]]
        }),
        __metadata("design:paramtypes", [_align_service__WEBPACK_IMPORTED_MODULE_2__["AlignService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _chat_service__WEBPACK_IMPORTED_MODULE_13__["ChatService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_1__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"],
            _align_dash_service__WEBPACK_IMPORTED_MODULE_0__["AlignDashService"]])
    ], AlignComponent);
    return AlignComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/align/align.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/align/align.module.ts ***!
  \********************************************************************/
/*! exports provided: AlignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignModule", function() { return AlignModule; });
/* harmony import */ var _align_dash_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./align-dash.service */ "./src/app/main/content/apps/dashboards/align/align-dash.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _align_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./align.component */ "./src/app/main/content/apps/dashboards/align/align.component.ts");
/* harmony import */ var _align_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./align.service */ "./src/app/main/content/apps/dashboards/align/align.service.ts");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fuse/components/widget/widget.module */ "./src/@fuse/components/widget/widget.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _align_dash_cal_dialog_align_dash_cal_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./align-dash-cal-dialog/align-dash-cal-dialog.component */ "./src/app/main/content/apps/dashboards/align/align-dash-cal-dialog/align-dash-cal-dialog.component.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chat.service */ "./src/app/main/content/apps/dashboards/align/chat.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    {
        path: '**',
        component: _align_component__WEBPACK_IMPORTED_MODULE_4__["AlignComponent"],
        resolve: {
            data: _align_service__WEBPACK_IMPORTED_MODULE_5__["AlignService"],
            chat: _chat_service__WEBPACK_IMPORTED_MODULE_14__["ChatService"]
        }
    }
];
var AlignModule = /** @class */ (function () {
    function AlignModule() {
    }
    AlignModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_6__["NgxChartsModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_7__["FuseSharedModule"],
                _fuse_components_widget_widget_module__WEBPACK_IMPORTED_MODULE_8__["FuseWidgetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"].forRoot(),
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_11__["ColorPickerModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_12__["FuseConfirmDialogModule"]
            ],
            declarations: [_align_component__WEBPACK_IMPORTED_MODULE_4__["AlignComponent"], _align_dash_cal_dialog_align_dash_cal_dialog_component__WEBPACK_IMPORTED_MODULE_13__["AlignDashCalDialogComponent"]],
            providers: [_align_service__WEBPACK_IMPORTED_MODULE_5__["AlignService"], _chat_service__WEBPACK_IMPORTED_MODULE_14__["ChatService"], _align_dash_service__WEBPACK_IMPORTED_MODULE_0__["AlignDashService"]],
            entryComponents: [_align_dash_cal_dialog_align_dash_cal_dialog_component__WEBPACK_IMPORTED_MODULE_13__["AlignDashCalDialogComponent"]]
        })
    ], AlignModule);
    return AlignModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/align/align.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/align/align.service.ts ***!
  \*********************************************************************/
/*! exports provided: AlignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignService", function() { return AlignService; });
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


var AlignService = /** @class */ (function () {
    function AlignService(http) {
        this.http = http;
    }
    AlignService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getProjects(),
                _this.getWidgets()
            ]).then(function () {
                resolve();
            }, reject);
        });
    };
    AlignService.prototype.getProjects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/project-dashboard-projects')
                .subscribe(function (response) {
                _this.projects = response;
                resolve(response);
            }, reject);
        });
    };
    AlignService.prototype.getWidgets = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/project-dashboard-widgets')
                .subscribe(function (response) {
                _this.widgets = response;
                resolve(response);
            }, reject);
        });
    };
    AlignService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AlignService);
    return AlignService;
}());



/***/ }),

/***/ "./src/app/main/content/apps/dashboards/align/chat.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/content/apps/dashboards/align/chat.service.ts ***!
  \********************************************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _fuse_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fuse/utils */ "./src/@fuse/utils/index.ts");
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




var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.onChatSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onContactSelected = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.onChatsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onUserUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onLeftSidenavViewChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onRightSidenavViewChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * Get chat
     * @param contactId
     * @returns {Promise<any>}
     */
    ChatService.prototype.getChat = function (contactId) {
        var _this = this;
        var chatItem = this.user.chatList.find(function (item) {
            return item.contactId === contactId;
        });
        /**
         * Create new chat, if it's not created yet.
         */
        if (!chatItem) {
            this.createNewChat(contactId).then(function (newChats) {
                _this.getChat(contactId);
            });
            return;
        }
        return new Promise(function (resolve, reject) {
            _this.http.get('api/chat-chats/' + chatItem.id)
                .subscribe(function (response) {
                var chat = response;
                var chatContact = _this.contacts.find(function (contact) {
                    return contact.id === contactId;
                });
                var chatData = {
                    chatId: chat.id,
                    dialog: chat.dialog,
                    contact: chatContact
                };
                _this.onChatSelected.next(__assign({}, chatData));
                console.log(_this.onChatSelected);
            }, reject);
        });
    };
    /**
     * Create New Chat
     * @param contactId
     * @returns {Promise<any>}
     */
    ChatService.prototype.createNewChat = function (contactId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var contact = _this.contacts.find(function (item) {
                return item.id === contactId;
            });
            var chatId = _fuse_utils__WEBPACK_IMPORTED_MODULE_3__["FuseUtils"].generateGUID();
            var chat = {
                id: chatId,
                dialog: []
            };
            var chatListItem = {
                contactId: contactId,
                id: chatId,
                lastMessageTime: '2017-02-18T10:30:18.931Z',
                name: contact.name,
                unread: null
            };
            /**
             * Add new chat list item to the user's chat list
             */
            _this.user.chatList.push(chatListItem);
            /**
             * Post the created chat
             */
            _this.http.post('api/chat-chats', __assign({}, chat))
                .subscribe(function (response) {
                /**
                 * Post the new the user data
                 */
                _this.http.post('api/chat-user/' + _this.user.id, _this.user)
                    .subscribe(function (newUserData) {
                    /**
                     * Update the user data from server
                     */
                    _this.getUser().then(function (updatedUser) {
                        _this.onUserUpdated.next(updatedUser);
                        resolve(updatedUser);
                    });
                });
            }, reject);
        });
    };
    /**
     * Select Contact
     * @param contact
     */
    ChatService.prototype.selectContact = function (contact) {
        this.onContactSelected.next(contact);
    };
    /**
     * Set user status
     * @param status
     */
    ChatService.prototype.setUserStatus = function (status) {
        this.user.status = status;
    };
    /**
     * Update user data
     * @param userData
     */
    ChatService.prototype.updateUserData = function (userData) {
        var _this = this;
        this.http.post('api/chat-user/' + this.user.id, userData)
            .subscribe(function (response) {
            _this.user = userData;
        });
    };
    /**
     * Update the chat dialog
     * @param chatId
     * @param dialog
     * @returns {Promise<any>}
     */
    ChatService.prototype.updateDialog = function (chatId, dialog) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var newData = {
                id: chatId,
                dialog: dialog
            };
            _this.http.post('api/chat-chats/' + chatId, newData)
                .subscribe(function (updatedChat) {
                resolve(updatedChat);
            }, reject);
        });
    };
    /**
     * The Chat App Main Resolver
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    ChatService.prototype.resolve = function (route, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            Promise.all([
                _this.getContacts(),
                _this.getChats(),
                _this.getUser()
            ]).then(function (_a) {
                var contacts = _a[0], chats = _a[1], user = _a[2];
                _this.contacts = contacts;
                _this.chats = chats;
                _this.user = user;
                resolve();
            }, reject);
        });
    };
    /**
     * Get Contacts
     * @returns {Promise<any>}
     */
    ChatService.prototype.getContacts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/chat-contacts')
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    /**
     * Get Chats
     * @returns {Promise<any>}
     */
    ChatService.prototype.getChats = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/chat-chats')
                .subscribe(function (response) {
                resolve(response);
            }, reject);
        });
    };
    /**
     * Get User
     * @returns {Promise<any>}
     */
    ChatService.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('api/chat-user')
                .subscribe(function (response) {
                resolve(response[0]);
            }, reject);
        });
    };
    ChatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ })

}]);
//# sourceMappingURL=dashboards-align-align-module.js.map