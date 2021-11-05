import { Component } from '@angular/core';
import { ThingspeakDataService } from '../_shared/services';
import { interval } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  returnedVal: any;
  data: any;
  dataString: string;
  //station1 variables
  station1Long: number; station1Lat: number; station1Dist: number; station1Perc: number; station1transit: boolean = true;
  Percentage1: number; loadingDisp1: boolean = true;
  //station2 variables
  station2Long: number; station2Lat: number; station2Dist: number; station2Perc: number; station2transit: boolean = true;
  Percentage2: number; loadingDisp2: boolean = true;

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

    //Station1
    if (this.data.slice(0, 1) === "0") {
      this.station1Lat = parseFloat(this.data.slice(1, 10));
      this.station1Long = parseFloat(this.data.slice(10, 20));
      console.log("station1 is at " + this.station1Lat + " , " + this.station1Long);

      if (this.station1Lat != 0 && this.station1Long != 0) {
        this.station1Dist = this.distanceFunc(this.station1Lat, this.station1Long, 14.564350, 121.097857); //station coordinates
        this.station1Perc = 1 - (this.station1Dist / 0.10778681124005579); //denominator is distance from other station
        this.Percentage1 = Math.round(this.station1Perc * 100);
        //prevents undershoot, no need for overshoot because of allowance
        if (this.Percentage1 <= 0) {
          this.Percentage1 = 0;
        }
        //shows awaiting data if null
        if (this.Percentage1 != null) {
          this.loadingDisp1 = false;
        }
        //controls status display
        if (this.station1Dist <= 0.006) { //display arrival when distance to station is less than 6m
          this.station1transit = false; //not in transit
          this.station1Perc = 1;
        }
        else {
          this.station1transit = true; //in transit
        }
        console.log("station1 distance from dest is " + this.station1Dist)
      }
    }

    //Station2
    else if (this.data.slice(0, 1) === "1") {
      this.station2Lat = parseFloat(this.data.slice(1, 10));
      this.station2Long = parseFloat(this.data.slice(10, 20));
      console.log("station2 is at " + this.station2Lat + " , " + this.station2Long);

      if (this.station2Lat != 0 && this.station1Long != 0) {
        this.station2Dist = this.distanceFunc(this.station2Lat, this.station2Long, 14.564636, 121.096900); //station coordinates
        this.station2Perc = 1 - (this.station2Dist / 0.10778681124005579); //denominator is distance from other station
        this.Percentage2 = Math.round(this.station2Perc * 100);
        //prevents undershoot
        if (this.Percentage2 <= 0) {
          this.Percentage2 = 0;
        }
        //shows awaiting data if null
        if (this.Percentage2 != null) {
          this.loadingDisp2 = false;
        }
        //controls status display
        if (this.station2Dist <= 0.006) {
          this.station2transit = false;
          this.station2Perc = 1;
        }
        else {
          this.station2transit = true;
        }
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



}
