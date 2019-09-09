(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-content-apps-apps-module"],{

/***/ "./src/app/main/content/apps/apps.module.ts":
/*!**************************************************!*\
  !*** ./src/app/main/content/apps/apps.module.ts ***!
  \**************************************************/
/*! exports provided: FuseAppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuseAppsModule", function() { return FuseAppsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/angular-material/angular-material.module */ "./src/app/main/content/components/angular-material/angular-material.module.ts");
/* harmony import */ var _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fuse/shared.module */ "./src/@fuse/shared.module.ts");
/* harmony import */ var _preload_preload_custom_startegy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preload/preload-custom-startegy */ "./src/app/main/content/apps/preload/preload-custom-startegy.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: 'dashboards/analytics',
        loadChildren: './dashboards/analytics/analytics.module#FuseAnalyticsDashboardModule',
        data: { preload: true }
    },
    {
        path: 'dashboards/project',
        loadChildren: './dashboards/project/project.module#FuseProjectDashboardModule'
    },
    {
        path: 'dashboards/align',
        loadChildren: './dashboards/align/align.module#AlignModule'
    },
    {
        path: 'mail',
        loadChildren: './mail/mail.module#FuseMailModule'
    },
    {
        path: 'mail-ngrx',
        loadChildren: './mail-ngrx/mail.module#FuseMailNgrxModule'
    },
    {
        path: 'chat',
        loadChildren: './chat/chat.module#FuseChatModule'
    },
    {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#FuseCalendarModule'
    },
    {
        path: 'align-calendar',
        loadChildren: './align-calendar/align-calendar.module#AlignCalendarModule'
    },
    {
        path: 'user-calendar/:id',
        loadChildren: './calendar-client/calendar-client.module#CalendarClientModule'
    },
    {
        path: 'e-commerce',
        loadChildren: './e-commerce/e-commerce.module#FuseEcommerceModule'
    },
    {
        path: 'academy',
        loadChildren: './academy/academy.module#FuseAcademyModule'
    },
    {
        path: 'todo',
        loadChildren: './todo/todo.module#FuseTodoModule'
    },
    {
        path: 'file-manager',
        loadChildren: './file-manager/file-manager.module#FuseFileManagerModule'
    },
    {
        path: 'user-contacts',
        loadChildren: './user-contacts/contacts.module#UserContactsModule'
    },
    {
        path: 'company-contacts',
        loadChildren: './company-contacts/contacts.module#CompanyContactsModule'
    },
    {
        path: 'scrumboard',
        loadChildren: './scrumboard/scrumboard.module#FuseScrumboardModule'
    },
    {
        path: 'organization-chart',
        loadChildren: './organization-chart/organization-chart.module#OrganizationChartModule'
    },
    {
        path: 'my-profile',
        loadChildren: './my-profile/my-profile.module#MyProfileModule'
    },
    {
        path: 'team-management',
        loadChildren: './team-management/team-management.module#TeamManagementModule'
    },
    {
        path: 'bulk-upload',
        loadChildren: './task-upload/task-upload.module#TaskUploadModule'
    },
    {
        path: 'handbook',
        loadChildren: './handbook/handbook.module#HandbookModule'
    },
    {
        path: 'company-details/:id',
        loadChildren: './company-details/company-details.module#CompanyDetailsModule'
    },
    {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
    },
    {
        path: 'subscription',
        loadChildren: './subscription/subscription.module#SubscriptionModule'
    },
    {
        path: 'performance',
        loadChildren: './performance/performance.module#PerformanceModule'
    },
];
var FuseAppsModule = /** @class */ (function () {
    function FuseAppsModule() {
    }
    FuseAppsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _fuse_shared_module__WEBPACK_IMPORTED_MODULE_4__["FuseSharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
                _components_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_3__["FuseAngularMaterialModule"]
            ],
            declarations: [],
            providers: [_preload_preload_custom_startegy__WEBPACK_IMPORTED_MODULE_5__["PreloadCustomStartegy"]]
        })
    ], FuseAppsModule);
    return FuseAppsModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-content-apps-apps-module.js.map