import { Component } from '@angular/core';
import { ThingspeakDataService } from '../_shared/services';
import { interval } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  returnedVal: any;
  data: any;
  dataString: string;
  komiLong: number;
  komiLat: number;
  toshioLong: number;
  toshioLat: number;
  komiDist: number;
  toshioDist: number;
  komiPerc: number;
  toshioPerc: number;

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
    console.log(this.data);

    if (this.data.slice(0,1) === "0") {
      this.komiLat = parseFloat(this.data.slice(1, 10));
      this.komiLong = parseFloat(this.data.slice(10, 20));
      console.log("komi is at " + this.komiLat + " , " + this.komiLong);
      if (this.komiLat != 0 && this.komiLong != 0) {
        this.komiDist = this.distanceFunc(this.komiLat, this.komiLong, 14, 121); //change start/dest coords
        this.komiPerc = 1 - (this.komiDist / 100);
        console.log("komi distance from dest is " + this.komiDist)
        console.log("komi percentage is " + this.komiPerc);
      }
    }

    else if (this.data.slice(0, 1) === "1") {
      this.toshioLat = parseFloat(this.data.slice(1, 10));
      this.toshioLong = parseFloat(this.data.slice(10, 20));
      console.log("toshio is at " + this.toshioLat + " , " + this.toshioLong);
      if (this.toshioLat != 0 && this.komiLong != 0) {
        this.toshioDist = this.distanceFunc(this.toshioLat, this.toshioLong, 14, 121); //change start/dest coords
        this.toshioPerc = 1 - (this.toshioDist / 100);
        console.log("toshio distance from dest is " + this.toshioDist);
        console.log("toshio percentage is " + this.toshioPerc);
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
