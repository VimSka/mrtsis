(self["webpackChunkmrtsis"] = self["webpackChunkmrtsis"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 1005:
/*!*********************************************!*\
  !*** ./src/app/_shared/components/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressMeterComponent": () => (/* reexport safe */ _progress_meter_progress_meter_component__WEBPACK_IMPORTED_MODULE_0__.ProgressMeterComponent)
/* harmony export */ });
/* harmony import */ var _progress_meter_progress_meter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress-meter/progress-meter.component */ 9944);



/***/ }),

/***/ 9944:
/*!*******************************************************************************!*\
  !*** ./src/app/_shared/components/progress-meter/progress-meter.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressMeterComponent": () => (/* binding */ ProgressMeterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_progress_meter_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./progress-meter.component.html */ 4567);
/* harmony import */ var _progress_meter_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progress-meter.component.scss */ 6059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let ProgressMeterComponent = class ProgressMeterComponent {
    constructor() { }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.coordinates);
        });
    }
};
ProgressMeterComponent.ctorParameters = () => [];
ProgressMeterComponent.propDecorators = {
    coordinates: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
ProgressMeterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-progress-meter',
        template: _raw_loader_progress_meter_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_progress_meter_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProgressMeterComponent);



/***/ }),

/***/ 3223:
/*!**********************************!*\
  !*** ./src/app/_shared/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule),
/* harmony export */   "components": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_0__.components),
/* harmony export */   "directives": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_0__.directives),
/* harmony export */   "exportModules": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_0__.exportModules),
/* harmony export */   "importModules": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_0__.importModules)
/* harmony export */ });
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ 8855);



/***/ }),

/***/ 8855:
/*!******************************************!*\
  !*** ./src/app/_shared/shared.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "components": () => (/* binding */ components),
/* harmony export */   "directives": () => (/* binding */ directives),
/* harmony export */   "importModules": () => (/* binding */ importModules),
/* harmony export */   "exportModules": () => (/* binding */ exportModules),
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ 1005);






const components = [
    _components__WEBPACK_IMPORTED_MODULE_0__.ProgressMeterComponent
];
const directives = [];
const importModules = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule
];
const exportModules = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule
];
let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            ...components,
            ...directives
        ],
        entryComponents: [],
        imports: [
            ...importModules
        ],
        providers: [],
        exports: [
            ...components,
            ...directives,
            ...exportModules
        ]
    })
], SharedModule);



/***/ }),

/***/ 2580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": () => (/* binding */ Tab1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": () => (/* binding */ Tab1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 2501);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 2580);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_shared */ 3223);









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule,
            _shared__WEBPACK_IMPORTED_MODULE_3__.SharedModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 2501:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": () => (/* binding */ Tab1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 9474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/services */ 2216);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 945);






let Tab1Page = class Tab1Page {
    constructor(dataService) {
        this.dataService = dataService;
        this.komiDist1 = 0.09730;
        this.toshioDist1 = 0.09730;
        this.komiDist2 = 0.09730;
        this.toshioDist2 = 0.09730;
        this.station1transit = true;
        this.loadingDisp1 = true;
        this.station2transit = true;
        this.loadingDisp2 = true;
        //constants
        this.avgSpeed = 10 / 3600;
    }
    ngOnInit() {
        const obs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(1000);
        obs$.subscribe((d) => {
            this.getData();
        });
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.returnedVal = yield this.dataService.getData();
            this.data = this.returnedVal.feeds[0].field1;
            console.log(this.komiDist1);
            console.log(this.komiDist2);
            console.log(this.toshioDist1);
            console.log(this.toshioDist2);
            //trigger function if coordinates are valid
            if (this.data.slice(this.data.length - 1, this.data.length) == "0") {
                //Station1
                if (this.data.slice(0, 1) === "0") {
                    this.station1Lat = parseFloat("14.".concat(this.data.slice(1, 7)));
                    this.station1Long = parseFloat("121.".concat(this.data.slice(7, 14)));
                    console.log("station1 is at " + this.station1Lat + " , " + this.station1Long);
                    this.station1Speed = parseFloat(this.data.slice(this.data.length - 3, this.data.length - 1));
                    this.station1SpeedStr = " - Incoming train moving at ".concat(this.station1Speed.toString().concat("km/h"));
                    if (this.station1Lat != 0 && this.station1Long != 0) {
                        this.station1CompareDist();
                        this.station1Function();
                        this.station1Dot = (100 * this.station1Perc).toString().concat("%");
                        console.log("distance from station1 is " + this.station1Dist);
                        this.station1DistDisp = Math.round(1000 * (this.station1Dist)).toString().concat("m away");
                        this.station1Eta = this.etaFunction(this.station1Dist);
                    }
                }
                //Station2
                else if (this.data.slice(0, 1) === "1") {
                    this.station2Lat = parseFloat("14.".concat(this.data.slice(1, 7)));
                    this.station2Long = parseFloat("121.".concat(this.data.slice(7, 14)));
                    console.log("station2 is at " + this.station2Lat + " , " + this.station2Long);
                    this.station2Speed = parseFloat(this.data.slice(this.data.length - 3, this.data.length - 1));
                    this.station2SpeedStr = " - Incoming train moving at ".concat(this.station2Speed.toString().concat("km/h"));
                    if (this.station2Lat != 0 && this.station1Long != 0) {
                        this.station2CompareDist();
                        this.station2Function();
                        this.station2Dot = (100 * this.station2Perc).toString().concat("%");
                        console.log("distance from station2 is " + this.station2Dist);
                        this.station2DistDisp = Math.round(1000 * (this.station2Dist)).toString().concat("m away");
                        this.station2Eta = this.etaFunction(this.station2Dist);
                    }
                }
            }
            //----------------UNDERGROUND ALGORITHM--------------------------
            else if (this.data.slice(this.data.length - 1, this.data.length) == "1") {
                console.log("underground mode");
                console.log(this.station1Dist);
                console.log(this.station2Dist);
                //STATION 1 lost in between
                if (this.data.slice(0, 1) == 0) {
                    console.log("station 1 lost during transit");
                    this.station1Dist = this.station1Dist - this.avgSpeed;
                    this.station1Function();
                    this.station1Dot = (100 * this.station1Perc).toString().concat("%");
                    this.station1DistDisp = Math.round(1000 * (this.station1Dist)).toString().concat("m away");
                    this.station1Eta = this.etaFunction(this.station1Dist);
                    console.log("station1 distance from dest is " + this.station1Dist);
                }
                //STATION 2 lost in between
                else if (this.data.slice(0, 1) == 1 && this.station2Dist < 0.09730 - 0.012) {
                    console.log("station 2 lost during transit");
                    this.station2Dist = this.station2Dist - this.avgSpeed;
                    this.station2Function();
                    this.station2Dot = (100 * this.station2Perc).toString().concat("%");
                    this.station2DistDisp = Math.round(1000 * (this.station2Dist)).toString().concat("m away");
                    this.station2Eta = this.etaFunction(this.station2Dist);
                    console.log("station2 distance from dest is " + this.station2Dist);
                }
                //STATION 1 lost from the start
                else if (this.data.slice(0, 1) == 0 && this.station1Dist >= 0.09730 - 0.012) {
                    console.log("station 1 lost from start");
                    this.station1Dist = this.station1Dist - this.avgSpeed;
                    this.station1Function();
                    this.station1Dot = (100 * this.station1Perc).toString().concat("%");
                    this.station1DistDisp = Math.round(1000 * (this.station1Dist)).toString().concat("m away");
                    this.station1Eta = this.etaFunction(this.station1Dist);
                    console.log("station1 distance from dest is " + this.station1Dist);
                }
                //STATION 2 lost from the start
                else if (this.data.slice(0, 1) == 1 && this.station2Dist >= 0.09730 - 0.012) {
                    console.log("station 2 lost from start");
                    this.station2Dist = this.station2Dist - this.avgSpeed;
                    this.station2Function();
                    this.station2Dot = (100 * this.station2Perc).toString().concat("%");
                    this.station2DistDisp = Math.round(1000 * (this.station2Dist)).toString().concat("m away");
                    this.station2Eta = this.etaFunction(this.station2Dist);
                    console.log("station2 distance from dest is " + this.station2Dist);
                }
            }
        });
    }
    //------------------HAVERSINE FORMULA (COORDINATES TO KM)------------------------//
    //source: https://www.geodatasource.com/developers/javascript
    distanceFunc(lat1, lon1, lat2, lon2) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;
            return dist;
        }
    }
    etaFunction(dist) {
        var time = dist / this.avgSpeed;
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;
        // Output like "1m 01s" or "4:03:59" or "123:03:59"
        var ret = "";
        if (hrs > 0) {
            ret += "" + hrs + "h " + (mins < 10 ? "0" : "");
        }
        ret += "" + mins + "m " + (secs < 10 ? "0" : "");
        ret += "" + secs + "s";
        //Remove m when 0
        if (ret.slice(0, 2) == "0m") {
            ret = ret.slice(3);
            if (ret.slice(0, 1) == "0") {
                ret.slice(1);
            }
        }
        return ret;
    }
    //-------------Common functions--------------------//
    station1Function() {
        this.station1Perc = 1 - (this.station1Dist / 0.09730); //denominator is distance from other station
        this.Percentage1 = Math.round(this.station1Perc * 100);
        //prevents undershoot, no need for overshoot because of allowance
        if (this.Percentage1 <= 5) { //prevents from immediately becoming greater than 0% after switching bit
            this.Percentage1 = 0;
        }
        //shows awaiting data if null
        if (this.Percentage1 != null) {
            this.loadingDisp1 = false; //not loading
        }
        //controls status display
        if (this.station1Dist <= 0.012) { //display arrival when distance to station is less than 6m
            this.station1transit = false; //not in transit
            this.station1Perc = 1;
        }
        else {
            this.station1transit = true; //in transit
        }
    }
    station2Function() {
        this.station2Perc = 1 - (this.station2Dist / 0.09730); //denominator is distance from other station
        this.Percentage2 = Math.round(this.station2Perc * 100);
        //prevents undershoot
        if (this.Percentage2 <= 5) {
            this.Percentage2 = 0;
        }
        //shows awaiting data if null
        if (this.Percentage2 != null) {
            this.loadingDisp2 = false;
        }
        //controls status display
        if (this.station2Dist <= 0.012) {
            this.station2transit = false;
            this.station2Perc = 1;
        }
        else {
            this.station2transit = true;
        }
    }
    //-------------Nearest Node Algorithm--------------//
    station1CompareDist() {
        if (this.data.slice(this.data.length - 4, this.data.length - 3) == "K") {
            this.komiDist2 = 0.09730;
            this.komiDist1 = this.distanceFunc(this.station1Lat, this.station1Long, 14.564350, 121.097857);
        }
        else if (this.data.slice(this.data.length - 4, this.data.length - 3) == "T") {
            this.toshioDist2 = 0.09730;
            this.toshioDist1 = this.distanceFunc(this.station1Lat, this.station1Long, 14.564350, 121.097857);
        }
        //compares distances and sets nearest node for progress bar
        if (this.komiDist1 <= this.toshioDist1) {
            this.station1Dist = this.komiDist1;
        }
        else {
            this.station1Dist = this.toshioDist1;
        }
    }
    station2CompareDist() {
        if (this.data.slice(this.data.length - 4, this.data.length - 3) == "K") {
            this.komiDist1 = 0.09730;
            this.komiDist2 = this.distanceFunc(this.station2Lat, this.station2Long, 14.564529, 121.096972);
        }
        else if (this.data.slice(this.data.length - 4, this.data.length - 3) == "T") {
            this.toshioDist1 = 0.09730;
            this.toshioDist2 = this.distanceFunc(this.station2Lat, this.station2Long, 14.564529, 121.096972);
        }
        //compares distances and sets nearest node for progress bar
        if (this.komiDist2 <= this.toshioDist2) {
            this.station2Dist = this.komiDist2;
        }
        else {
            this.station2Dist = this.toshioDist2;
        }
    }
};
Tab1Page.ctorParameters = () => [
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__.ThingspeakDataService }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 6059:
/*!*********************************************************************************!*\
  !*** ./src/app/_shared/components/progress-meter/progress-meter.component.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmVzcy1tZXRlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 9474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background-color {\n  --background: #DDF312;\n}\n\n.background-color-grey {\n  --background: #2b2b2b;\n}\n\n.black {\n  --color: #000000;\n}\n\n.bar {\n  height: 10px;\n}\n\n.iconbar {\n  height: 6px;\n  position: relative;\n  outline: none;\n  align-items: center;\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 8px;\n  border-radius: 4px;\n}\n\n.track {\n  height: 6px;\n  position: relative;\n  outline: none;\n  align-items: center;\n  margin-left: 25px;\n  margin-right: 25px;\n  margin-top: 2px;\n  background-color: #7c7c7c;\n  border-radius: 4px;\n  left: -2px;\n}\n\n.dot {\n  position: absolute;\n  display: inline-block;\n  top: -4px;\n}\n\n.legenddiv {\n  position: relative;\n}\n\n.komiDotInner {\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #ffffff;\n  position: absolute;\n  will-change: opacity, transform;\n  width: 14px;\n  height: 14px;\n  left: -4px;\n  background-color: #FF0000;\n}\n\n.toshioDotInner {\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #ffffff;\n  position: absolute;\n  will-change: opacity, transform;\n  width: 14px;\n  height: 14px;\n  left: -4px;\n  background-color: #3191ff;\n}\n\n.komiDotLegend {\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #ffffff;\n  position: relative;\n  width: 14px;\n  height: 14px;\n  background-color: #FF0000;\n  top: 7px;\n}\n\n.toshioDotLegend {\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #ffffff;\n  position: relative;\n  width: 14px;\n  height: 14px;\n  background-color: #3191ff;\n  top: 7px;\n}\n\n.stationDotInner {\n  border-radius: 50%;\n  position: absolute;\n  will-change: opacity, transform;\n  width: 14px;\n  height: 14px;\n  left: -4px;\n  background-color: #7c7c7c;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 10px;\n  background-color: #000000;\n}\n\n.container1 {\n  display: flex;\n  align-items: flex-end;\n  justify-content: left;\n  overflow: hidden;\n  text-align: left;\n}\n\n.container2 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  text-align: center;\n}\n\n.container3 {\n  display: flex;\n  align-items: flex-end;\n  justify-content: right;\n  overflow: hidden;\n  text-align: right;\n}\n\nion-text {\n  color: #B3BABF;\n  font-size: medium;\n}\n\nion-icon {\n  color: #DDF312;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNJLHFCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0FBV0o7O0FBVEE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQVlKOztBQVRBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFZSjs7QUFWQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWFKOztBQVhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBY0o7O0FBWkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFlSjs7QUFiQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGNBQUE7QUFpQkoiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDogI0RERjMxMjtcclxufVxyXG4uYmFja2dyb3VuZC1jb2xvci1ncmV5e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMmIyYjJiO1xyXG59XHJcbi5ibGFja3tcclxuICAgIC0tY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmJhcntcclxuICAgIGhlaWdodDogMTBweDtcclxufVxyXG4vL21ha2VzaGlmdCB0cmFjay9wcm9ncmVzcyBiYXIgY2xhc3Nlc1xyXG4uaWNvbmJhcntcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4udHJhY2t7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M3YzdjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbGVmdDogLTJweDtcclxufVxyXG4uZG90e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdG9wOiAtNHB4O1xyXG59XHJcbi5sZWdlbmRkaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmtvbWlEb3RJbm5lcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGxlZnQ6IC00cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG59XHJcbi50b3NoaW9Eb3RJbm5lcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGxlZnQ6IC00cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE5MWZmO1xyXG59XHJcbi5rb21pRG90TGVnZW5ke1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG4gICAgdG9wOiA3cHg7XHJcbn1cclxuLnRvc2hpb0RvdExlZ2VuZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxOTFmZjtcclxuICAgIHRvcDogN3B4O1xyXG59XHJcbi5zdGF0aW9uRG90SW5uZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBsZWZ0Oi00cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M3YzdjO1xyXG59XHJcbi8vZ2VuZXJhbCBjbGFzc2VzXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmNvbnRhaW5lcjF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNvbnRhaW5lcjJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyM3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbmlvbi10ZXh0e1xyXG4gICAgY29sb3I6ICNCM0JBQkY7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiAjRERGMzEyO1xyXG59Il19 */");

/***/ }),

/***/ 4567:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_shared/components/progress-meter/progress-meter.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!--<div id=\"container\">-->\n<ion-card>\n  <ion-card-header>\n    Current Location\n  </ion-card-header>\n  <ion-card-content>\n    <ion-text>\n      display coordinates here\n    </ion-text>\n  </ion-card-content>\n</ion-card>\n<!--</div>-->");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      MRT Stations\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <!--STATION 1-->\r\n  <ion-card style=\"background-color:#121212;\">\r\n    <ion-card-header>\r\n      <ion-card-title style=\"color:#DDF312\">Station 1</ion-card-title>\r\n      <ion-card-subtitle *ngIf=\"station1transit && !loadingDisp1\">In Transit{{station1SpeedStr}}</ion-card-subtitle>\r\n      <ion-card-subtitle *ngIf=\"!station1transit\" style=\"color: #50C8FF\">Arrived</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content *ngIf=\"loadingDisp1\">\r\n      <h2>Awaiting Data...</h2>\r\n    </ion-card-content>\r\n    <ion-card-content style=\"color:#ffffff\" *ngIf=\"!loadingDisp1\">\r\n      <!--station indicators-->\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"container1\" style=\"color: white\">Station 2</div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div class=\"container3\" style=\"color: white\">Station 1</div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"container1\">\r\n              <ion-icon name=\"location-outline\" size=\"large\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div class=\"container3\">\r\n              <ion-icon name=\"location-outline\" size=\"large\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <!--bar-->\r\n      <div class=\"track\">\r\n        <!--station markers-->\r\n        <div class=\"dot\">\r\n          <div class=\"stationDotInner\" style=\"opacity: 1; transform: scale(1);\"></div>\r\n        </div>\r\n        <div class=\"dot\" style=\"left: 100%\">\r\n          <div class=\"stationDotInner\" style=\"opacity: 1; transform: scale(1);\"></div>\r\n        </div>\r\n        <!--node markers-->\r\n        <div class=\"dot\" [ngStyle]=\"{'left': station1Dot}\">\r\n          <div class=\"toshioDotInner\" style=\"opacity: 1; transform: scale(1);\"></div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <h3 *ngIf=\"station1transit\" style=\"color: #b3babf\">Nearest Train is {{station1DistDisp}}</h3>\r\n      <h3 *ngIf=\"station1transit\" style=\"color: #b3babf\">ETA: {{station1Eta}}</h3>\r\n      <ion-icon *ngIf=\"!station1transit\" name=\"checkmark-circle-outline\" style=\"zoom:1.5;\"></ion-icon>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <!--STATION 2-->\r\n  <ion-card style=\"background-color:#121212;\">\r\n    <ion-card-header>\r\n      <ion-card-title style=\"color:#DDF312\">Station 2</ion-card-title>\r\n      <ion-card-subtitle *ngIf=\"station2transit && !loadingDisp2\">In Transit{{station2SpeedStr}}</ion-card-subtitle>\r\n      <ion-card-subtitle *ngIf=\"!station2transit\" style=\"color:#50C8FF\">Arrived</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-card-content *ngIf=\"loadingDisp2\">\r\n      <h2>Awaiting Data...</h2>\r\n    </ion-card-content>\r\n    <ion-card-content style=\"color:#ffffff\" *ngIf=\"!loadingDisp2\">\r\n      <!--station indicators-->\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"container1\" style=\"color: white\">Station 1</div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div class=\"container3\" style=\"color: white\">Station 2</div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <div class=\"container1\">\r\n              <ion-icon name=\"location-outline\" size=\"large\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div class=\"container3\">\r\n              <ion-icon name=\"location-outline\" size=\"large\"></ion-icon>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n      <!--bar-->\r\n      <div class=\"track\">\r\n        <!--station markers-->\r\n        <div class=\"dot\">\r\n          <div class=\"stationDotInner\" style=\"opacity: 1; transform: scale(1);\"></div>\r\n        </div>\r\n        <div class=\"dot\" style=\"left: 100%\">\r\n          <div class=\"stationDotInner\" style=\"opacity: 1; transform: scale(1);\"></div>\r\n        </div>\r\n        <!--node markers-->\r\n        <div class=\"dot\" [ngStyle]=\"{'left': station2Dot}\">\r\n          <div class=\"toshioDotInner\" style=\"opacity: 1; transform: scale(1);\"></div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <h3 *ngIf=\"station2transit\" style=\"color:#b3babf\">Nearest Train is {{station2DistDisp}}</h3>\r\n      <h3 *ngIf=\"station2transit\" style=\"color: #b3babf\">ETA: {{station2Eta}}</h3>\r\n      <ion-icon *ngIf=\"!station2transit\" name=\"checkmark-circle-outline\" style=\"zoom:1.5;\"></ion-icon>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <!--<app-explore-container name=\"Tab 1 page\"></app-explore-container>-->\r\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts.js.map