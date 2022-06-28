(self["webpackChunkmrtsis"] = self["webpackChunkmrtsis"] || []).push([["src_app_tab2_tab2_module_ts"],{

/***/ 3092:
/*!*********************************************!*\
  !*** ./src/app/tab2/tab2-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageRoutingModule": () => (/* binding */ Tab2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page,
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ 7008:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2PageModule": () => (/* binding */ Tab2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.page */ 442);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2-routing.module */ 3092);








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
    })
], Tab2PageModule);



/***/ }),

/***/ 442:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab2.page.html */ 2477);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 2055);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_shared/services */ 2216);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 945);






let Tab2Page = class Tab2Page {
    constructor(dataService) {
        this.dataService = dataService;
        //STATION COORDINATES
        this.station1Lat = 14.564350;
        this.station1Long = 121.097857;
        this.station2Lat = 14.564503;
        this.station2Long = 121.097308;
        this.station3Lat = 14.564529;
        this.station3Long = 121.096972;
        this.totalDist = 0.09730;
        this.komi1 = false;
        this.komi2 = false;
        this.komi3 = false;
        this.toshio1 = false;
        this.toshio2 = false;
        this.toshio3 = false;
        //TRANSIT INDICATORS
        this.komiTransit = false;
        this.toshioTransit = false;
        this.komiEtaDisp1 = false;
        this.komiEtaDisp2 = false;
        this.komiEtaDisp3 = false;
        this.toshioEtaDisp1 = false;
        this.toshioEtaDisp2 = false;
        this.toshioEtaDisp3 = false;
        this.etaDisp1 = false;
        this.etaDisp2 = false;
        this.etaDisp3 = false;
        this.komiDisp = false;
        this.toshioDisp = false;
        //SPEED and ETA
        this.avgSpeed = 5 / 3600;
        this.komiSpeed = 0;
        this.toshioSpeed = 0;
    }
    ngOnInit() {
        const obs$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(1000);
        obs$.subscribe((d) => {
            this.getData();
            // this.number = this.number+1;
            // this.qwerty = this.number.toString().concat("%");
            // console.log(this.qwerty);
        });
    }
    //[direction][coordinates][ID][tachometer]
    //[0,1][1,10][10,20][21,22][22,23]
    //ETA = based sa 10km/h
    //speed = tachometer
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.returnedVal = yield this.dataService.getData();
            this.data = this.returnedVal.feeds[0].field1;
            console.log(this.data);
            this.algoSelector = this.data.slice(this.data.length - 1, this.data.length);
            if (this.algoSelector == "0") {
                //KOMI
                if (this.data.slice(this.data.length - 4, this.data.length - 3) == "K") {
                    console.log("Komi packet received");
                    this.komiLat = parseFloat("14.".concat(this.data.slice(1, 7)));
                    this.komiLong = parseFloat("121.".concat(this.data.slice(7, 14)));
                    this.komiSpeed = parseFloat(this.data.slice(this.data.length - 3, this.data.length - 1));
                    console.log("komi coordinates are " + this.komiLat + " and " + this.komiLong);
                    if (this.data.slice(0, 1) == 1) { //if komi is going right
                        this.komiDist = this.haversineFunction(this.komiLat, this.komiLong, this.station1Lat, this.station1Long);
                        console.log("komi is going right, distance from s1 is " + this.komiDist);
                        this.komiRightLogic();
                    }
                    else if (this.data.slice(0, 1) == 0) { //if komi is going left
                        this.komiDist = this.haversineFunction(this.komiLat, this.komiLong, this.station3Lat, this.station3Long);
                        console.log("komi is going left, distance from s3 is " + this.komiDist);
                        this.komiLeftLogic();
                    }
                    //publish percentage
                    this.komiDisp = true;
                    this.komiDotPosition = this.komiPerc.toString().concat("%");
                    console.log("Komi status is: " + this.komiStatus + "; Dot: " + this.komiDotPosition + "; Perc: " + this.komiPerc);
                }
                //TOSHIO
                else if (this.data.slice(this.data.length - 4, this.data.length - 3) == "T") {
                    console.log("Toshio packet received");
                    this.toshioLat = parseFloat("14.".concat(this.data.slice(1, 7)));
                    this.toshioLong = parseFloat("121.".concat(this.data.slice(7, 14)));
                    this.toshioSpeed = parseFloat(this.data.slice(this.data.length - 3, this.data.length - 1));
                    console.log("toshio coordinates are " + this.toshioLat + " and " + this.toshioLong);
                    if (this.data.slice(0, 1) == 1) { //if toshio is going right
                        this.toshioDist = this.haversineFunction(this.toshioLat, this.toshioLong, this.station1Lat, this.station1Long);
                        console.log("toshio is going right, distance from s1 is " + this.toshioDist);
                        this.toshioRightLogic();
                    }
                    else if (this.data.slice(0, 1) == 0) { //if toshio is going left
                        this.toshioDist = this.haversineFunction(this.toshioLat, this.toshioLong, this.station3Lat, this.station3Long);
                        console.log("toshio is going left, distance from s3 is " + this.toshioDist);
                        this.toshioLeftLogic();
                    }
                    //publish percentage
                    this.toshioDisp = true;
                    this.toshioDotPosition = this.toshioPerc.toString().concat("%");
                    console.log("Toshio status is: " + this.toshioStatus + "; Dot: " + this.toshioDotPosition + "; Perc: " + this.toshioPerc);
                }
                //-------------STATION DETAILS LOGIC----------------
                //A=arrived;  T=in transit;   1=station1;   2=station2;   3=station3
                //STATION 1
                if (this.komiStatus == "A1" || this.toshioStatus == "A1") { //either arrived
                    this.station1Sub = "Arrived";
                }
                else if (this.komiStatus == "T1" && this.toshioStatus != "A1") { //komi transit
                    this.station1Sub = "In Transit";
                }
                else if (this.komiStatus != "A1" && this.toshioStatus == "T1") { //toshio transit
                    this.station1Sub = "In Transit";
                }
                else if (this.komiStatus == "T1" && this.toshioStatus == "T1") { //both transit
                    this.station1Sub = "In Transit";
                    if (this.komiDist > this.toshioDist) {
                    }
                    else {
                    }
                }
                else { //neither arrived nor transit
                    this.station1Sub = "Awaiting";
                }
                //STATION 2
                if (this.komiStatus == "A2" || this.toshioStatus == "A2") { //either arrived
                    this.station2Sub = "Arrived";
                }
                else if (this.komiStatus == "T2" && this.toshioStatus != "A2") { //komi transit
                    this.station2Sub = "In Transit";
                }
                else if (this.komiStatus != "A2" && this.toshioStatus == "T2") { //toshio transit
                    this.station2Sub = "In Transit";
                }
                else if (this.komiStatus == "T2" && this.toshioStatus == "T2") { //both transit
                    this.station2Sub = "In Transit";
                }
                else { //neither arrived nor transit
                    this.station2Sub = "Awaiting";
                }
                //STATION 3
                if (this.komiStatus == "A3" || this.toshioStatus == "A3") { //either arrived
                    this.station3Sub = "Arrived";
                }
                else if (this.komiStatus == "T3" && this.toshioStatus != "A3") { //komi transit
                    this.station3Sub = "In Transit";
                }
                else if (this.komiStatus != "A3" && this.toshioStatus == "T3") { //toshio transit
                    this.station3Sub = "In Transit";
                }
                else if (this.komiStatus == "T3" && this.toshioStatus == "T3") { //both transit
                    this.station3Sub = "In Transit";
                    if (this.komiDist > this.toshioDist) {
                    }
                    else {
                    }
                }
                else { //neither arrived nor transit
                    this.station3Sub = "Awaiting";
                }
            }
            //------------------------UNDERGROUND ALGORITHM--------------------------
            else if (this.algoSelector == "1") {
                console.log("underground algorithm triggered");
                //KOMI
                if (this.data.slice(this.data.length - 4, this.data.length - 3) == "K") {
                    console.log("Komi packet received");
                    this.komiSpeed = parseFloat(this.data.slice(this.data.length - 3, this.data.length - 1));
                    // GOING RIGHT
                    if (this.data.slice(0, 1) == 1) {
                        if (this.komiDist > 0.009 && this.komiDist < 0.04500 || this.komiDist > 0.05500 && this.komiDist < 0.08830) { //LOST IN TRANSIT
                            this.komiDist = this.komiDist + 7 / 3600;
                            console.log("KOMI LOST IN TRANSIT");
                            console.log("Komi is going right, distance from s1 is " + this.komiDist);
                            this.komiRightLogic();
                        }
                        else if (this.komiDist < 0.009 && this.komiSpeed > 0 || this.komiDist >= 0.04500 && this.komiDist <= 0.05500 && this.komiSpeed > 0) { //LOST IN STATION
                            this.komiDist = this.komiDist + 7 / 3600;
                            console.log("KOMI LOST IN STATION " + this.komiStatus + ", STARTED MOVING");
                            console.log("Komi is going right, distance from s1 is " + this.komiDist);
                            this.komiRightLogic;
                        }
                        else if (this.komiDist >= 0.04500 && this.komiDist <= 0.05500 && this.komiSpeed == 0) {
                            this.komiDist = 0.05000;
                            this.komiRightLogic();
                        }
                        else if (this.komiDist >= 0.08830) {
                            this.komiDist = 0.09730;
                            this.komiRightLogic();
                        }
                    }
                    // GOING LEFT
                    else if (this.data.slice(0, 1) == 0) {
                        if (this.komiDist > 0.009 && this.komiDist < 0.04250 || this.komiDist > 0.05250 && this.komiDist < 0.08830) { //LOST IN TRANSIT
                            this.komiDist = this.komiDist + 7 / 3600;
                            console.log("KOMI LOST IN TRANSIT");
                            console.log("Komi is going left, distance from s3 is " + this.komiDist);
                            this.komiLeftLogic();
                        }
                        else if (this.komiDist < 0.009 && this.komiSpeed > 0 || this.komiDist >= 0.04250 && this.komiDist <= 0.05250 && this.komiSpeed > 0) { //LOST IN STATION
                            this.komiDist = this.komiDist + 7 / 3600;
                            console.log("KOMI LOST IN STATION " + this.komiStatus + ", STARTED MOVING");
                            console.log("Komi is going left, distance from s3 is " + this.komiDist);
                            this.komiLeftLogic();
                        }
                        else if (this.komiDist >= 0.04250 && this.komiDist <= 0.05250 && this.komiSpeed == 0) {
                            this.komiDist = 0.04750;
                            this.komiLeftLogic();
                        }
                        else if (this.komiDist >= 0.08830) {
                            this.komiDist = 0.09730;
                            this.komiLeftLogic();
                        }
                    }
                    this.komiDisp = true;
                    this.komiDotPosition = this.komiPerc.toString().concat("%");
                    console.log("Komi status is: " + this.komiStatus + "; Dot: " + this.komiDotPosition + "; Perc: " + this.komiPerc);
                }
                //TOSHIO
                else if (this.data.slice(this.data.length - 4, this.data.length - 3) == "T") {
                    console.log("Toshio packet received");
                    this.toshioSpeed = parseFloat(this.data.slice(this.data.length - 3, this.data.length - 1));
                    //GOING RIGHT
                    if (this.data.slice(0, 1) == 1) {
                        if (this.toshioDist > 0.009 && this.toshioDist < 0.04500 || this.toshioDist > 0.05500 && this.toshioDist < 0.08830) { //LOST IN TRANSIT
                            this.toshioDist = this.toshioDist + this.avgSpeed;
                            console.log("TOSHIO LOST IN TRANSIT");
                            console.log("Toshio is going right, distance from s1 is " + this.toshioDist);
                            this.toshioRightLogic();
                        }
                        else if (this.toshioDist < 0.009 && this.toshioSpeed > 0 || this.toshioDist > 0.04500 && this.toshioDist < 0.05500 && this.toshioSpeed > 0) { //LOST IN STATION
                            this.toshioDist = this.toshioDist + this.avgSpeed;
                            console.log("TOSHIO LOST IN STATION " + this.toshioStatus + ", STARTED MOVING");
                            console.log("Toshio is going right, distance from s1 is " + this.toshioDist);
                            this.toshioRightLogic;
                        }
                        else if (this.toshioDist >= 0.04500 && this.toshioDist <= 0.05500 && this.toshioSpeed == 0) {
                            this.toshioDist = 0.05000;
                            this.toshioRightLogic();
                        }
                        else if (this.toshioDist >= 0.08830) {
                            this.toshioDist = 0.09730;
                            this.toshioRightLogic();
                        }
                    }
                    //GOING LEFT
                    else if (this.data.slice(0, 1) == 0) {
                        if (this.toshioDist > 0.009 && this.toshioDist < 0.04250 || this.toshioDist > 0.05250 && this.toshioDist < 0.08830) { //LOST IN TRANSIT
                            this.toshioDist = this.toshioDist + this.avgSpeed;
                            console.log("TOSHIO LOST IN TRANSIT");
                            console.log("Toshio is going left, distance from s3 is " + this.toshioDist);
                            this.toshioLeftLogic();
                        }
                        else if (this.toshioDist < 0.009 && this.toshioSpeed > 0 || this.toshioDist >= 0.04250 && this.toshioDist <= 0.05250 && this.toshioSpeed > 0) { //LOST IN STATION
                            this.toshioDist = this.toshioDist + this.avgSpeed;
                            console.log("TOSHIO LOST IN STATION " + this.toshioStatus + ", STARTED MOVING");
                            console.log("Toshio is going left, distance from s3 is " + this.toshioDist);
                            this.toshioLeftLogic();
                        }
                        else if (this.toshioDist >= 0.04250 && this.toshioDist <= 0.05250 && this.toshioSpeed == 0) {
                            this.toshioDist = 0.04750;
                            this.toshioLeftLogic();
                        }
                        else if (this.toshioDist >= 0.08830) {
                            this.toshioDist = 0.09730;
                            this.toshioLeftLogic();
                        }
                    }
                    this.toshioDisp = true;
                    this.toshioDotPosition = this.toshioPerc.toString().concat("%");
                    console.log("Toshio status is: " + this.toshioStatus + "; Dot: " + this.toshioDotPosition + "; Perc: " + this.toshioPerc);
                }
                //-------------STATION DETAILS LOGIC----------------
                //A=arrived;  T=in transit;   1=station1;   2=station2;   3=station3
                //STATION 1
                if (this.komiStatus == "A1" || this.toshioStatus == "A1") { //either arrived
                    this.station1Sub = "Arrived";
                }
                else if (this.komiStatus == "T1" && this.toshioStatus != "A1") { //komi transit
                    this.station1Sub = "In Transit";
                }
                else if (this.komiStatus != "A1" && this.toshioStatus == "T1") { //toshio transit
                    this.station1Sub = "In Transit";
                }
                else if (this.komiStatus == "T1" && this.toshioStatus == "T1") { //both transit
                    this.station1Sub = "In Transit";
                    if (this.komiDist > this.toshioDist) {
                    }
                    else {
                    }
                }
                else { //neither arrived nor transit
                    this.station1Sub = "Awaiting";
                }
                //STATION 2
                if (this.komiStatus == "A2" || this.toshioStatus == "A2") { //either arrived
                    this.station2Sub = "Arrived";
                }
                else if (this.komiStatus == "T2" && this.toshioStatus != "A2") { //komi transit
                    this.station2Sub = "In Transit";
                }
                else if (this.komiStatus != "A2" && this.toshioStatus == "T2") { //toshio transit
                    this.station2Sub = "In Transit";
                }
                else if (this.komiStatus == "T2" && this.toshioStatus == "T2") { //both transit
                    this.station2Sub = "In Transit";
                }
                else { //neither arrived nor transit
                    this.station2Sub = "Awaiting";
                }
                //STATION 3
                if (this.komiStatus == "A3" || this.toshioStatus == "A3") { //either arrived
                    this.station3Sub = "Arrived";
                }
                else if (this.komiStatus == "T3" && this.toshioStatus != "A3") { //komi transit
                    this.station3Sub = "In Transit";
                }
                else if (this.komiStatus != "A3" && this.toshioStatus == "T3") { //toshio transit
                    this.station3Sub = "In Transit";
                }
                else if (this.komiStatus == "T3" && this.toshioStatus == "T3") { //both transit
                    this.station3Sub = "In Transit";
                    if (this.komiDist > this.toshioDist) {
                    }
                    else {
                    }
                }
                else { //neither arrived nor transit
                    this.station3Sub = "Awaiting";
                }
            }
        });
    }
    //------------------KOMI CONDITIONS-----------------------
    komiRightLogic() {
        //percentages and progress
        if (this.komiDist <= 0.009) { //at s1
            this.komiTransit = false;
            this.komiPerc = 0;
            this.komiStatus = "A1";
            this.komi1 = true;
            this.komi2 = false;
            this.komi3 = false;
            this.komiEtaDisp1 = false;
            this.komiEtaDisp2 = false;
            this.komiD1 = "Komi has arrived";
        }
        else if (this.komiDist > 0.009 && this.komiDist <= 0.04500) { //transit to s2
            this.komiTransit = true;
            this.komiPerc = Math.round(100 * this.komiDist / this.totalDist);
            this.komiStatus = "T2";
            this.komi1 = false;
            this.komi2 = true;
            this.komi3 = false;
            this.komiEtaDisp2 = true;
            this.komiD2 = "Komi is ".concat(Math.round(1000 * (0.04500 - this.komiDist)).toString().concat("m away"));
            this.station2EtaK = this.etaFunction(0.04500 - this.komiDist);
        }
        else if (this.komiDist > 0.04500 && this.komiDist <= 0.05500) { //at s2 
            this.komiTransit = false;
            this.komiPerc = 50;
            this.komiStatus = "A2";
            this.komi1 = false;
            this.komi2 = true;
            this.komi3 = false;
            this.komiEtaDisp2 = false;
            this.komiD2 = "Komi has arrived";
            console.log("komi arrived s2");
        }
        else if (this.komiDist > 0.05500 && this.komiDist < 0.08830) { //transit to s3
            this.komiTransit = true;
            this.komiPerc = Math.round(100 * this.komiDist / this.totalDist);
            this.komiStatus = "T3";
            this.komi1 = false;
            this.komi2 = false;
            this.komi3 = true;
            this.komiEtaDisp3 = true;
            this.komiD3 = "Komi is ".concat(Math.round(1000 * (0.08830 - this.komiDist)).toString().concat("m away"));
            this.station3EtaK = this.etaFunction(0.08830 - this.komiDist);
        }
        else if (this.komiDist >= 0.08830) {
            this.komiTransit = false;
            this.komiPerc = 100;
            this.komiStatus = "A3";
            this.komi1 = false;
            this.komi2 = false;
            this.komi3 = true;
            this.komiEtaDisp3 = false;
            this.komiD3 = "Komi has arrived";
        }
    }
    komiLeftLogic() {
        //percentages and progress
        if (this.komiDist <= 0.009) { //at s3
            this.komiTransit = false;
            this.komiPerc = 100;
            this.komiStatus = "A3";
            this.komi1 = false;
            this.komi2 = false;
            this.komi3 = true;
            this.komiEtaDisp3 = false;
            this.komiEtaDisp2 = false;
            this.komiD3 = "Komi has arrived";
        }
        else if (this.komiDist > 0.009 && this.komiDist < 0.04230) { //transit to s2
            this.komiTransit = true;
            this.komiPerc = Math.round(100 * (1 - (this.komiDist / this.totalDist)));
            this.komiStatus = "T2";
            this.komi1 = false;
            this.komi2 = true;
            this.komi3 = false;
            this.komiEtaDisp2 = true;
            this.komiD2 = "Komi is ".concat(Math.round(1000 * (0.04230 - this.komiDist)).toString().concat("m away"));
            this.station2EtaK = this.etaFunction(0.04250 - this.komiDist);
        }
        else if (this.komiDist >= 0.04230 && this.komiDist <= 0.05230) { //at s2
            this.komiTransit = false;
            this.komiPerc = 50;
            this.komiStatus = "A2";
            this.komi1 = false;
            this.komi2 = true;
            this.komi3 = false;
            this.komiEtaDisp2 = false;
            this.komiD2 = "Komi has arrived";
        }
        else if (this.komiDist > 0.05230 && this.komiDist < 0.08830) { //transit to s1
            this.komiTransit = true;
            this.komiPerc = Math.round(100 * (1 - (this.komiDist / this.totalDist)));
            this.komiStatus = "T1";
            this.komi1 = true;
            this.komi2 = false;
            this.komi3 = false;
            this.komiEtaDisp1 = true;
            this.komiD1 = "Komi is ".concat(Math.round(1000 * (0.08830 - this.komiDist)).toString().concat("m away"));
            this.station1EtaK = this.etaFunction(0.08830 - this.komiDist);
        }
        else if (this.komiDist >= 0.08830) { //at s1
            this.komiTransit = false;
            this.komiPerc = 0;
            this.komiStatus = "A1";
            this.komi1 = true;
            this.komi2 = false;
            this.komi3 = false;
            this.komiEtaDisp1 = false;
            this.komiD1 = "Komi has arrived";
        }
    }
    //------------------TOSHIO CONDITIONS---------------------
    toshioRightLogic() {
        //percentages and progress
        if (this.toshioDist <= 0.009) { //at s1
            this.toshioTransit = false;
            this.toshioPerc = 0;
            this.toshioStatus = "A1";
            this.toshio1 = true;
            this.toshio2 = false;
            this.toshio3 = false;
            this.toshioEtaDisp1 = false;
            this.toshioEtaDisp2 = false;
            this.toshioD1 = "Toshio has arrived";
        }
        else if (this.toshioDist > 0.009 && this.toshioDist <= 0.04500) { //transit to s2
            this.toshioTransit = true;
            this.toshioPerc = Math.round(100 * this.toshioDist / this.totalDist);
            this.toshioStatus = "T2";
            this.toshio1 = false;
            this.toshio2 = true;
            this.toshio3 = false;
            this.toshioEtaDisp2 = true;
            this.toshioD2 = "Toshio is ".concat(Math.round(Math.abs(1000 * (0.04500 - this.toshioDist))).toString().concat("m away"));
            this.station2EtaT = this.etaFunction(0.04500 - this.toshioDist);
        }
        else if (this.toshioDist > 0.04500 && this.toshioDist <= 0.05500) { //at s2
            this.toshioTransit = false;
            this.toshioPerc = 50;
            this.toshioStatus = "A2";
            this.toshio1 = false;
            this.toshio2 = true;
            this.toshio3 = false;
            this.toshioEtaDisp2 = false;
            this.toshioD2 = "Toshio has arrived";
        }
        else if (this.toshioDist > 0.05500 && this.toshioDist < 0.08830) { //transit to s3
            this.toshioTransit = true;
            this.toshioPerc = Math.round(100 * this.toshioDist / this.totalDist);
            this.toshioStatus = "T3";
            this.toshio1 = false;
            this.toshio2 = false;
            this.toshio3 = true;
            this.toshioEtaDisp3 = true;
            this.toshioD3 = "Toshio is ".concat(Math.round(Math.abs(1000 * (0.08830 - this.toshioDist))).toString().concat("m away"));
            this.station3EtaT = this.etaFunction(0.08830 - this.toshioDist);
        }
        else if (this.toshioDist >= 0.08830) { //at s3
            this.toshioTransit = false;
            this.toshioPerc = 100;
            this.toshioStatus = "A3";
            this.toshio1 = false;
            this.toshio2 = false;
            this.toshio3 = true;
            this.toshioEtaDisp3 = false;
            this.toshioD3 = "Toshio has arrived";
        }
    }
    toshioLeftLogic() {
        //percentages and progress
        if (this.toshioDist <= 0.009) { //at s3
            this.toshioTransit = false;
            this.toshioPerc = 100;
            this.toshioStatus = "A3";
            this.toshio1 = false;
            this.toshio2 = false;
            this.toshio3 = true;
            this.toshioEtaDisp3 = false;
            this.toshioEtaDisp2 = false;
            this.toshioD3 = "Toshio has arrived";
        }
        else if (this.toshioDist > 0.009 && this.toshioDist < 0.04230) { //transit to s2
            this.toshioTransit = true;
            this.toshioPerc = Math.round(100 * (1 - (this.toshioDist / this.totalDist)));
            this.toshioStatus = "T2";
            this.toshio1 = false;
            this.toshio2 = true;
            this.toshio3 = false;
            this.toshioEtaDisp2 = true;
            this.toshioD2 = "Toshio is ".concat(Math.round(Math.abs(1000 * (0.04230 - this.toshioDist))).toString().concat("m away"));
            this.station2EtaT = this.etaFunction(0.04230 - this.toshioDist);
        }
        else if (this.toshioDist >= 0.04230 && this.toshioDist <= 0.05230) { //at s2
            this.toshioTransit = false;
            this.toshioPerc = 50;
            this.toshioStatus = "A2";
            this.toshio1 = false;
            this.toshio2 = true;
            this.toshio3 = false;
            this.toshioEtaDisp2 = false;
            this.toshioD2 = "Toshio has arrived";
        }
        else if (this.toshioDist > 0.05230 && this.toshioDist < 0.08830) { //transit to s1
            this.toshioTransit = true;
            this.toshioPerc = Math.round(100 * (1 - (this.toshioDist / this.totalDist)));
            this.toshioStatus = "T1";
            this.toshio1 = true;
            this.toshio2 = false;
            this.toshio3 = false;
            this.toshioEtaDisp1 = true;
            this.toshioD1 = "Toshio is ".concat(Math.round(Math.abs(1000 * (0.08830 - this.toshioDist))).toString().concat("m away"));
            this.station1EtaT = this.etaFunction(0.08830 - this.toshioDist);
        }
        else if (this.toshioDist >= 0.08830) { //at s1
            this.toshioTransit = false;
            this.toshioPerc = 0;
            this.toshioStatus = "A1";
            this.toshio1 = true;
            this.toshio2 = false;
            this.toshio3 = false;
            this.toshioEtaDisp1 = false;
            this.toshioD1 = "Toshio has arrived";
        }
    }
    //------------------HAVERSINE FORMULA (COORDINATES TO KM)------------------------//
    haversineFunction(lat1, lon1, lat2, lon2) {
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
    //------------ETA FORMULA-------------
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
};
Tab2Page.ctorParameters = () => [
    { type: _shared_services__WEBPACK_IMPORTED_MODULE_2__.ThingspeakDataService }
];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab2Page);



/***/ }),

/***/ 2055:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".background-color {\n  --background: #DDF312;\n}\n\n.background-color-grey {\n  --background: #2b2b2b;\n}\n\n.black {\n  --color: #000000;\n}\n\n.bar {\n  height: 10px;\n}\n\n.iconbar {\n  height: 6px;\n  position: relative;\n  outline: none;\n  align-items: center;\n  margin-left: 16px;\n  margin-right: 16px;\n  margin-top: 8px;\n  border-radius: 4px;\n}\n\n.track {\n  height: 6px;\n  position: relative;\n  outline: none;\n  align-items: center;\n  margin-left: 25px;\n  margin-right: 25px;\n  margin-top: 2px;\n  background-color: #7c7c7c;\n  border-radius: 4px;\n  left: -2px;\n}\n\n.dot {\n  position: absolute;\n  display: inline-block;\n  top: -4px;\n}\n\n.legenddiv {\n  position: relative;\n}\n\n.komiDotInner {\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #ffffff;\n  position: absolute;\n  will-change: opacity, transform;\n  width: 14px;\n  height: 14px;\n  left: -4px;\n  background-color: #FF0000;\n}\n\n.toshioDotInner {\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #ffffff;\n  position: absolute;\n  will-change: opacity, transform;\n  width: 14px;\n  height: 14px;\n  left: -4px;\n  background-color: #3191ff;\n}\n\n.komiDotLegend {\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #ffffff;\n  position: relative;\n  width: 14px;\n  height: 14px;\n  background-color: #FF0000;\n  top: 7px;\n}\n\n.toshioDotLegend {\n  border-radius: 50%;\n  border-style: solid;\n  border-width: 2px;\n  border-color: #ffffff;\n  position: relative;\n  width: 14px;\n  height: 14px;\n  background-color: #3191ff;\n  top: 7px;\n}\n\n.stationDotInner {\n  border-radius: 50%;\n  position: absolute;\n  will-change: opacity, transform;\n  width: 14px;\n  height: 14px;\n  left: -4px;\n  background-color: #7c7c7c;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border-radius: 10px;\n  background-color: #000000;\n}\n\n.container1 {\n  display: flex;\n  align-items: flex-end;\n  justify-content: left;\n  overflow: hidden;\n  text-align: left;\n}\n\n.container2 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  text-align: center;\n}\n\n.container3 {\n  display: flex;\n  align-items: flex-end;\n  justify-content: right;\n  overflow: hidden;\n  text-align: right;\n}\n\nion-text {\n  color: #B3BABF;\n  font-size: medium;\n}\n\nion-icon {\n  color: #DDF312;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFDQTtFQUNJLHFCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksWUFBQTtBQUlKOztBQURBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUhBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7QUFNSjs7QUFKQTtFQUNJLGtCQUFBO0FBT0o7O0FBTEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQVFKOztBQU5BO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFTSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsUUFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxRQUFBO0FBV0o7O0FBVEE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBQVlKOztBQVRBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFZSjs7QUFWQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWFKOztBQVhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBY0o7O0FBWkE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFlSjs7QUFiQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQWdCSjs7QUFkQTtFQUNJLGNBQUE7QUFpQkoiLCJmaWxlIjoidGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1jb2xvcntcclxuICAgIC0tYmFja2dyb3VuZDogI0RERjMxMjtcclxufVxyXG4uYmFja2dyb3VuZC1jb2xvci1ncmV5e1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMmIyYjJiO1xyXG59XHJcbi5ibGFja3tcclxuICAgIC0tY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmJhcntcclxuICAgIGhlaWdodDogMTBweDtcclxufVxyXG4vL21ha2VzaGlmdCB0cmFjay9wcm9ncmVzcyBiYXIgY2xhc3Nlc1xyXG4uaWNvbmJhcntcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4udHJhY2t7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M3YzdjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgbGVmdDogLTJweDtcclxufVxyXG4uZG90e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdG9wOiAtNHB4O1xyXG59XHJcbi5sZWdlbmRkaXZ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmtvbWlEb3RJbm5lcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGxlZnQ6IC00cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG59XHJcbi50b3NoaW9Eb3RJbm5lcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XHJcbiAgICB3aWR0aDogMTRweDtcclxuICAgIGhlaWdodDogMTRweDtcclxuICAgIGxlZnQ6IC00cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE5MWZmO1xyXG59XHJcbi5rb21pRG90TGVnZW5ke1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwO1xyXG4gICAgdG9wOiA3cHg7XHJcbn1cclxuLnRvc2hpb0RvdExlZ2VuZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxOTFmZjtcclxuICAgIHRvcDogN3B4O1xyXG59XHJcbi5zdGF0aW9uRG90SW5uZXJ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtO1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBsZWZ0Oi00cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2M3YzdjO1xyXG59XHJcbi8vZ2VuZXJhbCBjbGFzc2VzXHJcbi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmNvbnRhaW5lcjF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNvbnRhaW5lcjJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY29udGFpbmVyM3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbmlvbi10ZXh0e1xyXG4gICAgY29sb3I6ICNCM0JBQkY7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxufVxyXG5pb24taWNvbntcclxuICAgIGNvbG9yOiAjRERGMzEyO1xyXG59Il19 */");

/***/ }),

/***/ 2477:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <!--style=\"background-color: --ion-color-warning;\"-->\n  <ion-toolbar>\n    <ion-title>\n      Node Tracking\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n<ion-card style=\"background-color: #121212\">\n  <ion-card-header>\n    <ion-card-title style=\"color:#DDF312;\">Overview</ion-card-title>\n    <ion-card-subtitle style=\"color: #B3BABF\">Node Tracking</ion-card-subtitle>\n  </ion-card-header>\n  <!--station indicators-->\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div class=\"container1\" style=\"color: white\">Station 1</div>\n      </ion-col>\n      <ion-col>\n        <div class=\"container2\" style=\"color: white\">Station 2</div>\n      </ion-col>\n      <ion-col>\n        <div class=\"container3\" style=\"color: white\">Station 3</div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div class=\"container1\"><ion-icon name=\"location-outline\" size=\"large\"></ion-icon></div>\n      </ion-col>\n      <ion-col>\n        <div class=\"container2\"><ion-icon name=\"location-outline\" size=\"large\"></ion-icon></div>\n      </ion-col>\n      <ion-col>\n        <div class=\"container3\"><ion-icon name=\"location-outline\" size=\"large\"></ion-icon></div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!--bar-->\n    <div class=\"track\">\n      <!--station markers-->\n      <div class=\"dot\">\n        <div class=\"stationDotInner\" style=\"opacity: 1; transform: scale(1);\"></div>\n      </div>\n      <div class=\"dot\" style=\"left: 50%\">\n        <div class=\"stationDotInner\" style=\"opacity: 1; transform: scale(1)\"></div>\n      </div>\n      <div class=\"dot\" style=\"left: 100%\">\n        <div class=\"stationDotInner\" style=\"opacity: 1; transform: scale(1);\"></div>\n      </div>\n      <!--node markers-->\n      <div class=\"dot\" *ngIf=\"komiDisp\" [ngStyle]=\"{'left': komiDotPosition}\">\n        <div class=\"komiDotInner\" style=\"opacity: 1; transform: scale(1);\"></div>\n      </div>\n      <div class=\"dot\" *ngIf=\"toshioDisp\" [ngStyle]=\"{'left': toshioDotPosition}\">\n        <div class=\"toshioDotInner\" style=\"opacity: 1; transform: scale(1);\"></div>\n      </div>      \n    </div>\n  <br>\n  <!--legend-->\n  <ion-card-content>\n    <ion-grid>\n      <ion-row>\n        <ion-text style=\"color: #B3BABF\">Legend</ion-text>\n        <br>\n      </ion-row>\n      <ion-row>\n        <div class=\"komiDotLegend\"></div><ion-col style=\"color: white\">Komi</ion-col>\n        <ion-col>{{komiSpeed}} km/h</ion-col><ion-col></ion-col>\n        <br>\n    </ion-row>\n      <ion-row>\n          <div class=\"toshioDotLegend\"></div><ion-col style=\"color: white\">Toshio</ion-col>\n          <ion-col>{{toshioSpeed}} km/h</ion-col><ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card-content>\n</ion-card>\n\n  <ion-card style=\"background-color:#121212;\">\n    <ion-card-content style=\"color: white\">\n      <ion-grid>\n        <ion-row>\n          <ion-col><h3 style=\"color: white\">Stations</h3></ion-col>\n          <ion-col size=\"5\"><h3 style=\"color: white\">Nearest Train</h3></ion-col>\n          <ion-col><h3 style=\"color: white\">ETA</h3></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <h2 style=\"color:#DDF312\">Station 1</h2>\n            <ion-card-subtitle>{{station1Sub}}</ion-card-subtitle>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-row *ngIf=\"komi1\"><h3>{{komiD1}}</h3></ion-row>\n            <ion-row *ngIf=\"toshio1\"><h3>{{toshioD1}}</h3></ion-row>\n          </ion-col>\n          <ion-col>\n            <ion-row *ngIf=\"komiEtaDisp1\"><h3>Komi: {{station1EtaK}}</h3></ion-row>\n            <ion-row *ngIf=\"toshioEtaDisp1\"><h3></h3>Toshio: {{station1EtaT}}</ion-row>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <h2 style=\"color:#DDF312\">Station 2</h2>\n            <ion-card-subtitle>{{station2Sub}}</ion-card-subtitle>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-row *ngIf=\"komi2\"><h3>{{komiD2}}</h3></ion-row>\n            <ion-row *ngIf=\"toshio2\"><h3>{{toshioD2}}</h3></ion-row>\n          </ion-col>\n          <ion-col>\n            <ion-row *ngIf=\"komiEtaDisp2\"><h3>Komi: {{station2EtaK}}</h3></ion-row>\n            <ion-row *ngIf=\"toshioEtaDisp2\"><h3>Toshio: {{station2EtaT}}</h3></ion-row>\n          </ion-col>\n        </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <h2 style=\"color:#DDF312\">Station 3</h2>\n          <ion-card-subtitle>{{station3Sub}}</ion-card-subtitle>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-row *ngIf=\"komi3\"><h3>{{komiD3}}</h3></ion-row>\n          <ion-row *ngIf=\"toshio3\"><h3>{{toshioD3}}</h3></ion-row>\n        </ion-col>\n        <ion-col>\n          <ion-row *ngIf=\"komiEtaDisp3\"><h3>Komi: {{station3EtaK}}</h3></ion-row>\n          <ion-row *ngIf =\"toshioEtaDisp3\"><h3>Toshio: {{station3EtaT}}</h3></ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab2_tab2_module_ts.js.map