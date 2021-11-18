import { Component } from '@angular/core';
import { ThingspeakDataService } from '../_shared/services';
import { interval } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  returnedVal: any;
  data: any;
  dataString: string;
  tachometerBit: number;
  //DIRECTION BITS
  komiDest: number; toshioDest: number;
  komiDir: number; toshioDir: number;
  komiGoingRight: boolean; toshioGoingRight: boolean;
  //STATION COORDINATES
  station1Lat: number = 14.564350; station1Long: number = 121.097857;
  station2Lat: number = 14.564503; station2Long: number = 121.097308;
  station3Lat: number = 14.564529; station3Long: number = 121.096972;
  totalDist: number = 0.09730;
  //NODE COORDINATES
  komiLat: number; komiLong: number;
  toshioLat: number; toshioLong: number;
  //DISTANCE VARIABLES
  komiDist: number; toshioDist: number;
  //TRANSIT INDICATORS
  komiTransit: boolean = false; toshioTransit: boolean = false;
  komiStatus: string; toshioStatus: string;
  station1Sub: string; station2Sub: string; station3Sub: string;
  //PERCENTAGE VARIABLES
  komiPerc: number; toshioPerc: number;
  komiDisp: boolean = false; toshioDisp: boolean = false;
  //DOT MOVEMENT VARIABLES
  komiDotPosition: string; toshioDotPosition: string;
  //SPEED and ETA
  avgSpeed: number = 10/3600;
  komiSpeed: number; toshioSpeed: number;
  komiEta: string; toshioEta: string;

  constructor(
    private dataService: ThingspeakDataService
  ) { }

  ngOnInit(): void {
    const obs$ = interval(1000);
    obs$.subscribe((d) => {
      this.getData();
      // this.number = this.number+1;
      // this.qwerty = this.number.toString().concat("%");
      // console.log(this.qwerty);
    }
    )
  }
  //[direction][coordinates][ID][tachometer]
  //[0,1][1,10][10,20][21,22][22,23]

  //ETA = based sa 10km/h
  //speed = tachometer

  async getData(): Promise<void> {
    this.returnedVal = await this.dataService.getData();
    this.data = this.returnedVal.feeds[0].field1;
    console.log(this.data);
    this.tachometerBit = this.data.slice(this.data.length - 2, this.data.length);

    if (this.tachometerBit > 0 && this.data.length > 5) {
      //KOMI
      if (this.data.slice(this.data.length - 3, this.data.length - 2) == "K") {
        console.log("Komi packet received");
        this.komiLat = parseFloat(this.data.slice(1, 10));
        this.komiLong = parseFloat(this.data.slice(10, 20));
        this.komiSpeed = parseFloat(this.data.slice(this.data.length - 2, this.data.length));
        console.log("komi coordinates are " + this.komiLat + " and " + this.komiLong);

        if (this.data.slice(0, 1) == 0) { //if komi is going right
          this.komiDist = this.haversineFunction(this.komiLat, this.komiLong, this.station1Lat, this.station1Long);
          console.log("komi is going right, distance from s1 is " + this.komiDist);
          //percentages and progress
          if (this.komiDist <= 0.009) {  //at s1
            this.komiTransit = false;
            this.komiPerc = 0;
            this.komiStatus = "A1";
          }
          else if (this.komiDist > 0.009 && this.komiDist <= 0.05388) { //transit to s2
            this.komiTransit = true;
            this.komiPerc = Math.round(100 * this.komiDist / this.totalDist)
            this.komiStatus = "T2";
          }
          else if (this.komiDist > 0.05388 && this.komiDist <= 0.06288) { //at s2
            this.komiTransit = false;
            this.komiPerc = 50;
            this.komiStatus = "A2";
          }
          else if (this.komiDist > 0.06288 && this.komiDist < 0.08830) { //transit to s3
            this.komiTransit = true;
            this.komiPerc = Math.round(100 * this.komiDist / this.totalDist);
            this.komiStatus = "T3";
          }
          else if (this.komiDist >= 0.08830) {
            this.komiTransit = false;
            this.komiPerc = 100;
            this.komiStatus = "A3";
          }
        }

        else if (this.data.slice(0, 1) == 1) { //if komi is going left
          this.komiDist = this.haversineFunction(this.komiLat, this.komiLong, this.station3Lat, this.station3Long);
          console.log("komi is going left, distance from s3 is " + this.komiDist);
          //percentages and progress
          if (this.komiDist <= 0.009) { //at s3
            this.komiTransit = false;
            this.komiPerc = 100;
            this.komiStatus = "A3";
          }
          else if (this.komiDist > 0.009 && this.komiDist <= 0.03442) { //transit to s2
            this.komiTransit = true;
            this.komiPerc = Math.round(100 * (1 - (this.komiDist / this.totalDist)));
            this.komiStatus = "T2";
          }
          else if (this.komiDist > 0.03442 && this.komiDist <= 0.04342) { //at s2
            this.komiTransit = false;
            this.komiPerc = 50;
            this.komiStatus = "A2";
          }
          else if (this.komiDist > 0.04342 && this.komiDist < 0.08830) { //transit to s1
            this.komiTransit = true;
            this.komiPerc = Math.round(100 * (1 - (this.komiDist / this.totalDist)));
            this.komiStatus = "T1";
          }
          else if (this.komiDist >= 0.08830) { //at s1
            this.komiTransit = false;
            this.komiPerc = 0;
            this.komiStatus = "A1";
          }
        }

        //publish percentage
        this.komiDisp = true;
        this.komiDotPosition = this.komiPerc.toString().concat("%");

      }

      //TOSHIO
      else if (this.data.slice(this.data.length - 3, this.data.length - 2) == "T") {
        console.log("Toshio packet received");
        this.toshioLat = parseFloat(this.data.slice(1, 10));
        this.toshioLong = parseFloat(this.data.slice(10, 20));
        this.toshioSpeed = parseFloat(this.data.slice(this.data.length - 2, this.data.length));
        console.log("toshio coordinates are " + this.toshioLat + " and " + this.toshioLong);

        if (this.data.slice(0, 1) == 0) { //if toshio is going right
          this.toshioDist = this.haversineFunction(this.toshioLat, this.toshioLong, this.station1Lat, this.station1Long);
          console.log("toshio is going right, distance from s1 is " + this.toshioDist);
          //percentages and progress
          if (this.toshioDist <= 0.009) {  //at s1
            this.toshioTransit = false;
            this.toshioPerc = 0;
            this.toshioStatus = "A1";
          }
          else if (this.toshioDist > 0.009 && this.toshioDist <= 0.05388) { //transit to s2
            this.toshioTransit = true;
            this.komiPerc = Math.round(100 * this.toshioDist / this.totalDist)
            this.toshioStatus = "T2";
          }
          else if (this.toshioDist > 0.05388 && this.toshioDist <= 0.06288) { //at s2
            this.toshioTransit = false;
            this.toshioPerc = 50;
            this.toshioStatus = "A2";
          }
          else if (this.toshioDist > 0.06288 && this.toshioDist < 0.08830) { //transit to s3
            this.toshioTransit = true;
            this.toshioPerc = Math.round(100 * this.toshioDist / this.totalDist);
            this.toshioStatus = "T3";
          }
          else if (this.toshioDist >= 0.08830) {
            this.toshioTransit = false;
            this.toshioPerc = 100;
            this.toshioStatus = "A3";
          }
        }

        else if (this.data.slice(0, 1) == 1) { //if toshio is going left
          this.toshioDist = this.haversineFunction(this.toshioLat, this.toshioLong, this.station3Lat, this.station3Long);
          console.log("toshio is going left, distance from s3 is " + this.toshioDist);
          //percentages and progress
          if (this.toshioDist <= 0.009) { //at s3
            this.toshioTransit = false;
            this.toshioPerc = 100;
            this.toshioStatus = "A3";
          }
          else if (this.toshioDist > 0.009 && this.toshioDist <= 0.03442) { //transit to s2
            this.toshioTransit = true;
            this.toshioPerc = Math.round(100 * (1 - (this.toshioDist / this.totalDist)));
            this.toshioStatus = "T2";
          }
          else if (this.toshioDist > 0.03442 && this.toshioDist <= 0.04342) { //at s2
            this.toshioTransit = false;
            this.toshioPerc = 50;
            this.toshioStatus = "A2";
          }
          else if (this.toshioDist > 0.04342 && this.toshioDist < 0.08830) { //transit to s1
            this.toshioTransit = true;
            this.toshioPerc = Math.round(100 * (1 - (this.komiDist / this.totalDist)));
            this.toshioStatus = "T1";
          }
          else if (this.toshioDist >= 0.08830) { //at s1
            this.toshioTransit = false;
            this.toshioPerc = 0;
            this.toshioStatus = "A1";
          }
        }

        //publish percentage
        this.toshioDisp = true;
        this.toshioDotPosition = this.toshioPerc.toString().concat("%");

      }

      //-------------STATION SUBTITLE LOGIC----------------
      //A=arrived;  T=in transit;   1=station1;   2=station2;   3=station3
      //STATION 1
      if (this.komiStatus == "A1" || this.toshioStatus == "A1") {
        this.station1Sub = "Arrived";
        this.station2Sub = "Awaiting";
        this.station3Sub = "Awaiting";
      }
      else if (this.komiStatus == "T1" && this.toshioStatus != "A1") {
        this.station1Sub = "In Transit";
        this.station2Sub = "Awaiting";
        this.station3Sub = "Awaiting";
      }
      else if (this.komiStatus != "A1" && this.toshioStatus == "T1") {
        this.station1Sub = "In Transit";
        this.station2Sub = "Awaiting";
        this.station3Sub = "Awaiting";
      }
      //STATION 2
      else if (this.komiStatus == "A2" || this.toshioStatus == "A2") {
        this.station1Sub = "Awaiting";
        this.station2Sub = "Arrived";
        this.station3Sub = "Awaiting";
      }
      else if (this.komiStatus == "T2" && this.toshioStatus != "A2") {
        this.station1Sub = "Awaiting";
        this.station2Sub = "In Transit";
        this.station3Sub = "Awaiting";
      }
      else if (this.komiStatus != "A2" && this.toshioStatus == "T2") {
        this.station1Sub = "Awaiting";
        this.station2Sub = "In Transit";
        this.station3Sub = "Awaiting";
      }
      //STATION 3
      else if (this.komiStatus == "A3" || this.toshioStatus == "A3") {
        this.station1Sub = "Awaiting";
        this.station2Sub = "Awaiting";
        this.station3Sub = "Arrived";
      }
      else if (this.komiStatus == "T3" && this.toshioStatus != "A3") {
        this.station1Sub = "Awaiting";
        this.station2Sub = "Awaiting";
        this.station3Sub = "In Transit";
      }
      else if (this.komiStatus != "A3" && this.toshioStatus == "T3") {
        this.station1Sub = "Awaiting";
        this.station2Sub = "Awaiting";
        this.station3Sub = "In Transit";
      }

      //---------------------STATION INFO LOGIC---------------------


    }

    console.log(this.komiSpeed+ 10);

  }


  //------------------HAVERSINE FORMULA (COORDINATES TO KM)------------------------//
  //source: https://www.geodatasource.com/developers/javascript

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
      dist = dist * 1.609344
      return dist;
    }
  }

  //------------ETA FORMULA-------------
  etaFunction(dist) {
    var time = dist/this.avgSpeed;
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }


}
