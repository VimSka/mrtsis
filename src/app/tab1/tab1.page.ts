import { Component } from '@angular/core';
import { ThingspeakDataService } from '../_shared/services';
import { interval } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  returnedVal: any;
  data: any;
  dataString: string;
  tachometerBit: number;
  komiDist1: number = 200;
  toshioDist1: number = 200;
  komiDist2: number = 200;
  toshioDist2: number = 200;
  //station1 variables
  station1Long: number; station1Lat: number; station1Dist: number; station1Perc: number; station1transit: boolean = true;
  Percentage1: number; loadingDisp1: boolean = true; station1Speed: number; station1DistDisp: string; station1Eta: string;
  station1Dot: string; station1SpeedStr: string;
  //station2 variables
  station2Long: number; station2Lat: number; station2Dist: number; station2Perc: number; station2transit: boolean = true;
  Percentage2: number; loadingDisp2: boolean = true; station2Speed: number; station2DistDisp: string; station2Eta: string;
  station2Dot: string; station2SpeedStr: string;
  //constants
  avgSpeed: number = 5/3600;

  constructor(
    private dataService: ThingspeakDataService
  ) { }

  ngOnInit(): void {
    const obs$ = interval(1000);
    obs$.subscribe((d) => {
      this.getData();
    }
    )
  }

  async getData(): Promise<void> {
    this.returnedVal = await this.dataService.getData();
    this.data = this.returnedVal.feeds[0].field1;
    this.tachometerBit = 1; //simulates moving train TACHOMETER OUTPUT
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
          this.station1Dot = (100*this.station1Perc).toString().concat("%");
          console.log("distance from station1 is " + this.station1Dist)
          this.station1DistDisp = Math.round(1000 * (this.station1Dist)).toString().concat("m away");
          this.station1Eta = this.etaFunction(this.station1Dist);
          console.log(this.station1Eta);
        }
      }

      //Station2
      else if (this.data.slice(0, 1) === "1") {
        this.station2Lat = parseFloat(this.data.slice(1, 10));
        this.station2Long = parseFloat(this.data.slice(10, 20));
        console.log("station2 is at " + this.station2Lat + " , " + this.station2Long);
        this.station2Speed = parseFloat(this.data.slice(this.data.length - 3, this.data.length - 1));
        this.station2SpeedStr = " - Incoming train moving at ".concat(this.station2Speed.toString().concat("km/h"));
        if (this.station2Lat != 0 && this.station1Long != 0) {
          this.station2CompareDist();
          this.station2Function();
          this.station2Dot = this.station2Perc.toString().concat("%");
          console.log("distance from station2 is " + this.station2Dist);
          this.station2DistDisp = Math.round(1000* (this.station1Dist)).toString().concat("m away");
          this.station2Eta = this.etaFunction(this.station2Dist);
        }
      }
    }

    //----------------UNDERGROUND ALGORITHM--------------------------
    else if (this.data.slice(this.data.length - 1, this.data.length) == "1") {
      console.log("underground mode");
      console.log(this.station1Dist == undefined);
      //STATION 1 lost in between
      if (this.data.slice(0, 1) == 0 && this.station1Dist != undefined) {
        console.log("station 1 lost during transit");
        this.station1Dist = this.station1Dist - (5 / 3600); //5km/h in km/s
        this.station1Function();
        this.station1DistDisp = Math.round(1000 * (this.station1Dist)).toString().concat("m away");
        this.station1Eta = this.etaFunction(this.station1Dist);
        console.log("station1 distance from dest is " + this.station1Dist);
      }
      //STATION 2 lost in between
      else if (this.data.slice(0, 1) == 1 && this.station1Dist != undefined) {
        console.log("station 2 lost during transit");
        this.station2Dist = this.station2Dist - (5 / 3600);
        this.station2Function();
        this.station2DistDisp = Math.round(1000* (this.station2Dist)).toString().concat("m away");
        this.station2Eta = this.etaFunction(this.station2Dist);
        console.log("station2 distance from dest is " + this.station2Dist);
      }
      //STATION 1 lost from the start
      else if (this.data.slice(0, 1) == 0 && this.station1Dist == undefined) {
        console.log("station 1 lost from start");
        this.station1Dist = 0.09730;  //REVIEW CODE !!!! <<
        this.station1Dist = this.station1Dist - (5 / 3600); //5km/h in km/s
        this.station1Function();
        this.station1DistDisp = Math.round(1000 * (this.station1Dist)).toString().concat("m away");
        this.station1Eta = this.etaFunction(this.station1Dist);
        console.log("station1 distance from dest is " + this.station1Dist)
      }
      //STATION 2 lost from the start
      else if (this.data.slice(0, 1) == 1 && this.station2Dist == undefined) {
        console.log("station 2 lost from start");
        this.station2Dist = 0.09730;  //REVIEW CODE !!!! <<
        this.station2Dist = this.station2Dist - (5 / 3600);
        this.station2Function();
        this.station2DistDisp = Math.round(1000* (this.station2Dist)).toString().concat("m away");
        this.station2Eta = this.etaFunction(this.station2Dist);
        console.log("station2 distance from dest is " + this.station2Dist);

      }
    }

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
      dist = dist * 1.609344
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
    if (ret.slice(0,2) == "0m") {
      ret = ret.slice(3);
      if (ret.slice(0,1) == "0") {
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
    if (this.station1Dist <= 0.009) { //display arrival when distance to station is less than 6m
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
    if (this.station2Dist <= 0.009) {
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
      this.komiDist2 = 200;
      this.komiDist1 = this.distanceFunc(this.station1Lat, this.station1Long, 14.564350, 121.097857);
    }
    else if (this.data.slice(this.data.length - 4, this.data.length - 3) == "T") {
      this.toshioDist2 = 200;
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
    if (this.data.slice(20, 21) == "K") {
      this.komiDist1 = 200;
      this.komiDist2 = this.distanceFunc(this.station2Lat, this.station2Long, 14.564529, 121.096972);
    }
    else if (this.data.slice(20, 21) == "T") {
      this.toshioDist1 = 200;
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

}
