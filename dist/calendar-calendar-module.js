(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "./src/app/main/content/apps/calendar/api-calendar.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/main/content/apps/calendar/api-calendar.service.ts ***!
  \********************************************************************/
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

/***/ "./src/app/main/content/apps/calendar/calendar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main/content/apps/calendar/calendar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"calendar\" class=\"page-layout simple fullwidth\" fusePerfectScrollbar>\r\n\r\n    <!-- HEADER -->\r\n    <div class=\"header p-16 p-sm-24\" [ngClass]=\"viewDate | date:'MMM'\">\r\n\r\n        <div class=\"header-content\" fxLayout=\"column\" fxLayoutAlign=\"space-between\">\r\n\r\n            <div class=\"header-top\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayout.xs=\"column\">\r\n\r\n                <div class=\"logo mb-16 mb-sm-0\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                    <mat-icon class=\"logo-icon\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'50ms',scale:'0.2'}}\">today</mat-icon>\r\n                    <span class=\"logo-text\" *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'100ms',x:'-25px'}}\">Calendar</span>\r\n                </div>\r\n\r\n                <!-- TOOLBAR -->\r\n                <div class=\"toolbar\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n\r\n                    <button mat-icon-button aria-label=\"Search\" matTooltip=\"Search\">\r\n                        <mat-icon>search</mat-icon>\r\n                    </button>\r\n\r\n                    <button mat-icon-button\r\n                            mwlCalendarToday\r\n                            [(viewDate)]=\"viewDate\"\r\n                            (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                            aria-label=\"Today\" matTooltip=\"Today\">\r\n                        <mat-icon>today</mat-icon>\r\n                    </button>\r\n\r\n                    <button mat-icon-button (click)=\"view='day'\" aria-label=\"Day\" matTooltip=\"Day\">\r\n                        <mat-icon>view_day</mat-icon>\r\n                    </button>\r\n\r\n                    <button mat-icon-button (click)=\"view='week'\" aria-label=\"Week\" matTooltip=\"Week\">\r\n                        <mat-icon>view_week</mat-icon>\r\n                    </button>\r\n\r\n                    <button mat-icon-button (click)=\"view='month'\" aria-label=\"Month\" matTooltip=\"Month\">\r\n                        <mat-icon>view_module</mat-icon>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <!-- / TOOLBAR -->\r\n\r\n            <!-- HEADER BOTTOM -->\r\n            <div class=\"header-bottom\" fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n                 *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'150ms'}}\">\r\n\r\n                <button mat-icon-button class=\"arrow\"\r\n                        mwlCalendarPreviousView\r\n                        [view]=\"view\"\r\n                        [(viewDate)]=\"viewDate\"\r\n                        (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                        aria-label=\"Previous\">\r\n                    <mat-icon>chevron_left</mat-icon>\r\n                </button>\r\n\r\n                <div class=\"title\">\r\n                    {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}\r\n                </div>\r\n\r\n                <button mat-icon-button class=\"arrow\"\r\n                        mwlCalendarNextView\r\n                        [view]=\"view\"\r\n                        [(viewDate)]=\"viewDate\"\r\n                        (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                        aria-label=\"Next\">\r\n                    <mat-icon>chevron_right</mat-icon>\r\n                </button>\r\n            </div>\r\n            <!-- / HEADER BOTTOM -->\r\n        </div>\r\n\r\n        <!-- ADD EVENT BUTTON -->\r\n        <button mat-fab class=\"add-event-button mat-warn\" (click)=\"addEvent()\" aria-label=\"Add event\"\r\n                *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'300ms',scale:'0.2'}}\">\r\n            <mat-icon>add</mat-icon>\r\n        </button>\r\n        <!-- / ADD EVENT BUTTON -->\r\n    </div>\r\n    <!-- / HEADER -->\r\n\r\n    <!-- CONTENT -->\r\n    <div class=\"content\" fusePerfectScrollbar *fuseIfOnDom [@animate]=\"{value:'*',params:{delay:'200ms',y:'50px'}}\">\r\n            <ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\r\n                <div class=\"cal-cell-top\" *ngIf=\"day.cssClass == 'holiday'\">\r\n                    <span class=\"cal-day-holiday\" *ngIf=\"day.events && day.events.length\">\r\n                        {{day.events[0].title}}\r\n                    </span>\r\n                    <span class=\"cal-day-number\">\r\n                        {{ day.date | calendarDate:'monthViewDayNumber':locale }}\r\n                    </span>\r\n                </div>\r\n                <div class=\"cal-cell-top\" *ngIf=\"!day.cssClass\">\r\n                    <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\"\r\n                    >{{ day.badgeTotal }}</span\r\n                    >\r\n                    <span class=\"cal-day-number\"\r\n                    >{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span\r\n                    >\r\n                </div>\r\n            </ng-template>\r\n        <div [ngSwitch]=\"view\">\r\n            <mwl-calendar-month-view\r\n                *ngSwitchCase=\"'month'\"\r\n                [viewDate]=\"viewDate\"\r\n                [events]=\"events\"\r\n                [refresh]=\"refresh\"\r\n                [activeDayIsOpen]=\"activeDayIsOpen\"\r\n                (dayClicked)=\"dayClicked($event.day)\"\r\n                (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n                [cellTemplate]=\"customCellTemplate\"\r\n                (beforeViewRender)=\"beforeMonthViewRender($event)\">\r\n            </mwl-calendar-month-view>\r\n            <mwl-calendar-week-view\r\n                *ngSwitchCase=\"'week'\"\r\n                [viewDate]=\"viewDate\"\r\n                (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                [events]=\"events\"\r\n                [refresh]=\"refresh\"\r\n                (dayClicked)=\"dayClicked($event.day)\"\r\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n            </mwl-calendar-week-view>\r\n            <mwl-calendar-day-view\r\n                *ngSwitchCase=\"'day'\"\r\n                [viewDate]=\"viewDate\"\r\n                (viewDateChange)=\"selectedDay = {date:$event}\"\r\n                [events]=\"events\"\r\n                [refresh]=\"refresh\"\r\n                (dayClicked)=\"dayClicked($event.day)\"\r\n                (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n            </mwl-calendar-day-view>\r\n        </div>\r\n    </div>\r\n    <!-- / CONTENT -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/calendar/calendar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/main/content/apps/calendar/calendar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  background-color: #ededed; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/calendar/calendar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main/content/apps/calendar/calendar.component.ts ***!
  \******************************************************************/
/*! exports provided: FuseCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseCalendarComponent", function() { return FuseCalendarComponent; });
/* harmony import */ var _api_calendar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-calendar.service */ "./src/app/main/content/apps/calendar/api-calendar.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/components/confirm-dialog/confirm-dialog.component */ "./src/@fuse/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _fuse_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/animations */ "./src/@fuse/animations/index.ts");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-form/event-form.component */ "./src/app/main/content/apps/calendar/event-form/event-form.component.ts");
/* harmony import */ var _event_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event.model */ "./src/app/main/content/apps/calendar/event.model.ts");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar.service */ "./src/app/main/content/apps/calendar/calendar.service.ts");
/* harmony import */ var _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fuse/services/api-loader.service */ "./src/@fuse/services/api-loader.service.ts");
/* harmony import */ var _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fuse/services/toaster-service.service */ "./src/@fuse/services/toaster-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var FuseCalendarComponent = /** @class */ (function () {
    function FuseCalendarComponent(http, dialog, calendarService, apiloader, toast, calService) {
        var _this = this;
        this.http = http;
        this.dialog = dialog;
        this.calendarService = calendarService;
        this.apiloader = apiloader;
        this.toast = toast;
        this.calService = calService;
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.view = 'month';
        this.viewDate = new Date();
        this.activeDayIsOpen = true;
        this.selectedDay = { date: Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["startOfDay"])(new Date()) };
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
    FuseCalendarComponent.prototype.ngOnInit = function () {
        /* this.http.get('api/calendar-client/events')
            .subscribe((response: any) => {
                this.events = response.data;
                for(let item of this.events) {
                    item.actions = this.actions;
                }
                this.setEvents();
        }); */
        var _this = this;
        this.getHolidays();
        this.calendarService.onEventsUpdated.subscribe(function (events) {
            _this.setEvents();
            _this.refresh.next();
        });
    };
    FuseCalendarComponent.prototype.setEvents = function () {
        this.events = this.events.map(function (item) {
            return new _event_model__WEBPACK_IMPORTED_MODULE_8__["CalendarEventModel"](item);
        });
    };
    FuseCalendarComponent.prototype.getHolidays = function () {
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
                _this.getEvents();
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    FuseCalendarComponent.prototype.getEvents = function () {
        var _this = this;
        var id = sessionStorage.getItem('user_id');
        this.apiloader.setLoader(true);
        this.calService.getData('events').subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.cliEvents = response.data;
                for (var i = 0; i < _this.cliEvents.length; i++) {
                    _this.cliEvents[i].color = {
                        primary: '#ad2121',
                        secondary: '#FAE3E3'
                    };
                    _this.cliEvents[i].actions = _this.actions;
                    _this.events.push(_this.cliEvents[i]);
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
    FuseCalendarComponent.prototype.beforeMonthViewRender = function (_a) {
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
    FuseCalendarComponent.prototype.dayClicked = function (day) {
        var date = day.date;
        var events = day.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_4__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0 || day.cssClass == 'holiday') {
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
    FuseCalendarComponent.prototype.eventTimesChanged = function (_a) {
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
    FuseCalendarComponent.prototype.deleteEvent = function (event) {
        var _this = this;
        this.confirmDialogRef = this.dialog.open(_fuse_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["FuseConfirmDialogComponent"], {
            disableClose: false
        });
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
        this.confirmDialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.apiloader.setLoader(true);
                _this.calService.deleteData('events/' + event.id).subscribe(function (response) {
                    if (response.status === 'success') {
                        _this.apiloader.setLoader(false);
                        _this.getHolidays();
                        _this.toast.showSuccess('Event Deleted Successfully!.');
                    }
                }, function (error) {
                    _this.apiloader.setLoader(false);
                    _this.toast.showError(error);
                });
            }
            _this.confirmDialogRef = null;
        });
    };
    FuseCalendarComponent.prototype.addEvent = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_7__["FuseCalendarEventFormDialogComponent"], {
            panelClass: 'event-form-dialog',
            disableClose: true,
            data: {
                action: 'add'
            }
        });
        this.dialogRef.afterClosed().subscribe(function (response) {
            if (!response) {
                return;
            }
            if (response) {
                _this.createEvent(response);
            }
        });
    };
    /**
     * Edit Event
     * @param {string} action
     * @param {CalendarEvent} event
     */
    FuseCalendarComponent.prototype.editEvent = function (action, event) {
        var _this = this;
        this.dialogRef = this.dialog.open(_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_7__["FuseCalendarEventFormDialogComponent"], {
            panelClass: 'event-form-dialog',
            disableClose: true,
            data: {
                event: event,
                action: action
            }
        });
        this.dialogRef.afterClosed().subscribe(function (response) {
            if (!response) {
                return;
            }
            if (response) {
                _this.updteEvent(response);
            }
        });
    };
    FuseCalendarComponent.prototype.createEvent = function (formData) {
        var _this = this;
        this.apiloader.setLoader(true);
        var body = new URLSearchParams();
        body.set('title', formData.title);
        body.set('description', formData.description);
        body.set('scope', formData.scope);
        body.set('priority', formData.priority);
        body.set('members', formData.members);
        body.set('start', formData.start);
        body.set('end', formData.end);
        this.calService.postData('events', body.toString()).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.toast.showSuccess('Event added Successfully!');
                _this.getHolidays();
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    FuseCalendarComponent.prototype.updteEvent = function (formData) {
        var _this = this;
        this.apiloader.setLoader(true);
        var body = new URLSearchParams();
        body.set('title', formData.title);
        body.set('description', formData.description);
        body.set('scope', formData.scope);
        body.set('priority', formData.priority);
        body.set('members', formData.members);
        body.set('start', formData.start);
        body.set('end', formData.end);
        this.calService.postData('events/' + formData.id, body.toString()).subscribe(function (response) {
            if (response.data) {
                _this.apiloader.setLoader(false);
                _this.toast.showSuccess('Event Updated Successfully!');
                _this.getHolidays();
            }
        }, function (error) {
            _this.apiloader.setLoader(false);
            _this.toast.showError(error);
        });
    };
    FuseCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fuse-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/main/content/apps/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/main/content/apps/calendar/calendar.component.scss")],
            animations: _fuse_animations__WEBPACK_IMPORTED_MODULE_6__["fuseAnimations"]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _calendar_service__WEBPACK_IMPORTED_MODULE_9__["CalendarService"],
            _fuse_services_api_loader_service__WEBPACK_IMPORTED_MODULE_10__["ApiLoaderService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_11__["ToasterService"],
            _api_calendar_service__WEBPACK_IMPORTED_MODULE_0__["ApiCalendarService"]])
    ], FuseCalendarComponent);
    return FuseCalendarComponent;
}());



/***/ }),

/***/ "./src/app/main/content/apps/calendar/calendar.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/content/apps/calendar/calendar.module.ts ***!
  \***************************************************************/
/*! exports provided: FuseCalendarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseCalendarModule", function() { return FuseCalendarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _fuse_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fuse/components */ "./src/@fuse/components/index.ts");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calendar.service */ "./src/app/main/content/apps/calendar/calendar.service.ts");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar.component */ "./src/app/main/content/apps/calendar/calendar.component.ts");
/* harmony import */ var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-form/event-form.component */ "./src/app/main/content/apps/calendar/event-form/event-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _calendar_component__WEBPACK_IMPORTED_MODULE_8__["FuseCalendarComponent"],
        children: [],
        resolve: {
            chat: _calendar_service__WEBPACK_IMPORTED_MODULE_7__["CalendarService"]
        }
    }
];
var FuseCalendarModule = /** @class */ (function () {
    function FuseCalendarModule() {
    }
    FuseCalendarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _calendar_component__WEBPACK_IMPORTED_MODULE_8__["FuseCalendarComponent"],
                _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__["FuseCalendarEventFormDialogComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_3__["CalendarModule"].forRoot(),
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_5__["FuseSharedModule"],
                _fuse_components__WEBPACK_IMPORTED_MODULE_6__["FuseConfirmDialogModule"]
            ],
            providers: [
                _calendar_service__WEBPACK_IMPORTED_MODULE_7__["CalendarService"]
            ],
            entryComponents: [_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__["FuseCalendarEventFormDialogComponent"]]
        })
    ], FuseCalendarModule);
    return FuseCalendarModule;
}());



/***/ }),

/***/ "./src/app/main/content/apps/calendar/event-form/event-form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/main/content/apps/calendar/event-form/event-form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content-wrapper\">\r\n    <mat-toolbar class=\"mat-accent m-0\">\r\n        <mat-toolbar-row fxFlex fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <span class=\"title dialog-title\">{{dialogTitle}}</span>\r\n            <button mat-icon-button (click)=\"dialogRef.close()\" aria-label=\"Close dialog\">\r\n                <mat-icon>close</mat-icon>\r\n            </button>\r\n        </mat-toolbar-row>\r\n    </mat-toolbar>\r\n\r\n    <div mat-dialog-content class=\"cli-calendar p-24 m-0\" fusePerfectScrollbar>\r\n\r\n            <form name=\"eventForm\" [formGroup]=\"eventForm\" class=\"event-form w-100-p\" fxLayout=\"column\" fxFlex>\r\n\r\n                    <mat-form-field class=\"w-100-p\">\r\n                        <input matInput\r\n                               name=\"title\"\r\n                               formControlName=\"title\"\r\n                               placeholder=\"Event Name\"\r\n                               required>\r\n                    </mat-form-field>\r\n        \r\n                    <mat-form-field class=\"w-100-p\">\r\n                        <textarea matInput\r\n                                    formControlName=\"description\"\r\n                                    placeholder=\"Please enter a meeting description\"\r\n                                    mat-maxlength=\"250\"\r\n                                    max-rows=\"4\">\r\n                        </textarea>\r\n                    </mat-form-field>\r\n        \r\n                    <div class=\"priority\">\r\n                        <div class=\"txt\">Priority</div>\r\n                        <div class=\"radiobtn\">\r\n                            <div *ngFor=\"let itm of radioBtns\" [class.active]=\"priority == itm.class\" (click)=\"priority = itm.class\" class=\"radio-square\">\r\n                                <span class=\"{{itm.class}}\"></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n        \r\n                    <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n        \r\n                        <mat-form-field class=\"mr-sm-24\" fxFlex>\r\n                            <input matInput [matDatepicker]=\"startDatePicker\" placeholder=\"Start Date\"\r\n                                   name=\"start\" formControlName=\"start\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"startDatePicker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #startDatePicker></mat-datepicker>\r\n                        </mat-form-field>\r\n\r\n                        <!-- <timepicker class=\"time-picker-event\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"sTime\" [showMeridian]=\"true\" [showSpinners]=\"false\"></timepicker> -->\r\n        \r\n                    </div>\r\n        \r\n                    <div fxFlex=\"1 0 auto\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n        \r\n                        <mat-form-field class=\"mr-sm-24 no-errors-spacer\" fxFlex mat-no-float>\r\n                            <input matInput [matDatepicker]=\"endDatePicker\" placeholder=\"End Date\"\r\n                            name=\"end\" formControlName=\"end\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"endDatePicker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #endDatePicker></mat-datepicker>\r\n                        </mat-form-field>\r\n\r\n                        <!-- <timepicker class=\"time-picker-event\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"eTime\" [showMeridian]=\"true\" [showSpinners]=\"false\"></timepicker> -->\r\n        \r\n                    </div>\r\n        \r\n                    <!-- <div class=\"dates\">\r\n                        <div class=\"top\">\r\n                            <div class=\"start\">\r\n                                <mat-icon>date_range</mat-icon>\r\n                                <span>Start</span>\r\n                            </div>\r\n                            <div class=\"end\">End</div>\r\n                        </div>\r\n                        <div class=\"bottom\" *ngIf=\"event\">\r\n                            <div class=\"start\">{{event.start}}</div>\r\n                            <div class=\"end\">{{event.end}}</div>\r\n                        </div>\r\n                    </div> -->\r\n        \r\n                    <mat-radio-group class=\"privacy\" formControlName=\"scope\" aria-label=\"Select an option\">\r\n                        <h3>Privacy : </h3>\r\n                        <mat-radio-button value=\"PRIVATE\">Default Private View</mat-radio-button>\r\n                        <mat-radio-button value=\"RESTRICTED\">Restricted View</mat-radio-button>\r\n                        <mat-radio-button value=\"PUBLIC\">Public View</mat-radio-button>\r\n                    </mat-radio-group>\r\n        \r\n                    <!-- <mat-form-field fxFlex>\r\n                        <mat-select formControlName=\"assignee\" name=\"assignee\" placeholder=\"Assign a Task to\" required>\r\n                          <mat-option *ngFor=\"let user of users\" [value]=\"user.id\">\r\n                            {{user.first_name}} {{user.last_name}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field> -->\r\n        \r\n                    <mat-form-field fxFlex>\r\n                        <mat-select formControlName=\"members\" multiple name=\"members\" placeholder=\"Share Event\" required>\r\n                        <mat-option *ngFor=\"let mem of users\" [value]=\"mem.id\">{{mem.first_name}} {{mem.last_name}}</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    \r\n                </form>\r\n\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"m-0 p-16\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\r\n        <button \r\n                mat-raised-button\r\n                (click)=\"closeDialog(eventForm.value)\"\r\n                class=\"save-button create mat-accent\"\r\n                aria-label=\"SAVE\">\r\n            Save\r\n        </button>\r\n\r\n       <!--  <button \r\n                mat-raised-button\r\n                (click)=\"dialogRef.close(['save',eventForm])\"\r\n                class=\"save-button in_progress mat-accent\"\r\n                aria-label=\"SAVE\">\r\n            In Progress\r\n        </button>\r\n\r\n        <button \r\n                mat-raised-button\r\n                (click)=\"dialogRef.close(['save',eventForm])\"\r\n                class=\"save-button complete mat-accent\"\r\n                aria-label=\"SAVE\">\r\n            Complete\r\n        </button> -->\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/content/apps/calendar/event-form/event-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/main/content/apps/calendar/event-form/event-form.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.event-form-dialog {\n  width: 480px; }\n@media screen and (max-width: 599px) {\n    .event-form-dialog {\n      width: 100%; } }\n.event-form-dialog .mat-dialog-container {\n    padding: 0; }\n.event-form-dialog .dialog-content-wrapper {\n    max-height: 85vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n.event-form-dialog .primary-color-input,\n  .event-form-dialog .secondary-color-input {\n    padding: 6px 8px; }\n.cli-calendar mat-radio-group {\n  padding-bottom: 13px; }\n.cli-calendar mat-radio-group mat-radio-button .mat-radio-label-content span {\n  width: 30px;\n  height: 30px;\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n.cli-calendar mat-radio-group mat-radio-button {\n  padding-right: 10px; }\n.cli-calendar mat-radio-group h3 {\n  padding-right: 10px;\n  font-weight: 500; }\n.cli-calendar .privacy mat-radio-button {\n  font-size: 14px !important; }\n.mat-raised-button.create {\n  background: #000;\n  color: #fff; }\n.mat-raised-button.in_progress {\n  background: #6BD5CB;\n  color: #000; }\n.mat-raised-button.complete {\n  background: #B4DFF2;\n  color: #000; }\n.selectedBtn {\n  border: 1px solid #000; }\n/* .cli-calendar mat-radio-group mat-radio-button .mat-radio-label-content span.violet{\r\n    background: #B39DDB;\r\n}\r\n.cli-calendar mat-radio-group mat-radio-button .mat-radio-label-content span.green{\r\n    background: #6BD5CB;\r\n}\r\n.cli-calendar mat-radio-group mat-radio-button .mat-radio-label-content span.blue{\r\n    background: #B4DFF2;\r\n} */\n.dates {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.dates .top {\n    display: inline-block;\n    border-bottom: 1px solid #ccc;\n    padding-bottom: 5px; }\n.dates .top .start {\n      display: inline-block;\n      width: 50%; }\n.dates .top .start .mat-icon {\n        vertical-align: bottom; }\n.dates .top .start span {\n        font-size: 16px;\n        font-weight: 500;\n        margin-left: 5px; }\n.dates .top .end {\n      display: inline-block;\n      width: 50%;\n      font-size: 16px;\n      font-weight: 500; }\n.dates .bottom {\n    padding-top: 8px; }\n.dates .bottom .start {\n      display: inline-block;\n      width: 50%; }\n.dates .bottom .end {\n      display: inline-block;\n      width: 50%; }\n.priority {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 0px 20px 0px; }\n.priority .txt {\n    font-size: 22px; }\n.priority .radiobtn {\n    display: -webkit-box;\n    display: flex; }\n.priority .radiobtn .radio-square {\n      margin: 0px 10px; }\n.priority .radiobtn .radio-square.active {\n        border: 1px solid #000; }\n.priority .radiobtn .radio-square span {\n        width: 25px;\n        height: 25px;\n        cursor: pointer;\n        display: block;\n        border: 2px solid #fff; }\n.priority .radiobtn .radio-square span.pink {\n          background: #ff6398; }\n.priority .radiobtn .radio-square span.purple {\n          background: #b49cd6; }\n.priority .radiobtn .radio-square span.green {\n          background: #3fd6ca; }\n"

/***/ }),

/***/ "./src/app/main/content/apps/calendar/event-form/event-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/main/content/apps/calendar/event-form/event-form.component.ts ***!
  \*******************************************************************************/
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
/* harmony import */ var _event_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event.model */ "./src/app/main/content/apps/calendar/event.model.ts");
/* harmony import */ var _api_calendar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api-calendar.service */ "./src/app/main/content/apps/calendar/api-calendar.service.ts");
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
        this.sTime = new Date();
        this.eTime = new Date();
        this.radioBtns = [
            { class: 'pink' },
            { class: 'purple' },
            { class: 'green' }
        ];
        this.action = data.action;
        if (this.action == 'edit') {
            this.event = data.event;
            this.sTime = this.event.start;
            this.eTime = this.event.end;
        }
        this.getAllUsers();
        if (this.action === 'edit') {
            this.dialogTitle = 'update Event';
        }
        else {
            this.dialogTitle = 'New Event';
            this.event = new _event_model__WEBPACK_IMPORTED_MODULE_5__["CalendarEventModel"]();
        }
        this.eventForm = this.createEventForm();
    }
    FuseCalendarEventFormDialogComponent.prototype.createEventForm = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.title, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.description),
            scope: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.scope, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            members: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.members),
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.start),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.event.end),
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
    FuseCalendarEventFormDialogComponent.prototype.closeDialog = function (data) {
        var stime = moment__WEBPACK_IMPORTED_MODULE_4__(this.sTime).format('HH:mm:ss');
        var etime = moment__WEBPACK_IMPORTED_MODULE_4__(this.eTime).format('HH:mm:ss');
        data.priority = 'RED';
        data.start = moment__WEBPACK_IMPORTED_MODULE_4__(data.start).format('YYYY-MM-DD') + ' ' + stime;
        data.end = moment__WEBPACK_IMPORTED_MODULE_4__(data.end).format('YYYY-MM-DD') + ' ' + etime;
        if (this.action == 'edit') {
            data.id = this.event.id;
            this.dialogRef.close(data);
        }
        else {
            this.dialogRef.close(data);
        }
    };
    FuseCalendarEventFormDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'fuse-calendar-event-form-dialog',
            template: __webpack_require__(/*! ./event-form.component.html */ "./src/app/main/content/apps/calendar/event-form/event-form.component.html"),
            styles: [__webpack_require__(/*! ./event-form.component.scss */ "./src/app/main/content/apps/calendar/event-form/event-form.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _api_calendar_service__WEBPACK_IMPORTED_MODULE_6__["ApiCalendarService"],
            _fuse_services_toaster_service_service__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]])
    ], FuseCalendarEventFormDialogComponent);
    return FuseCalendarEventFormDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.js.map