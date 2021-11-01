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
    this.data = await this.dataService.getData();

    if (JSON.stringify(this.data).slice(286, 287) === "0") {
      this.komiLat = parseFloat(JSON.stringify(this.data).slice(287, 296));
      this.komiLong = parseFloat(JSON.stringify(this.data).slice(296, 306));
      console.log("komi is at " + this.komiLat + " , " + this.komiLong);
      this.komiDist = this.distanceFunc(this.komiLat, this.komiLong, 14, 121);
      this.komiPerc = 1-(this.komiDist/100);
      console.log("komi distance from dest is "+this.komiDist)
      console.log("komi percentage is "+this.komiPerc);
    }
    else if (JSON.stringify(this.data).slice(286, 287) === "1") {
      this.toshioLat = parseFloat(JSON.stringify(this.data).slice(287, 296));
      this.toshioLong = parseFloat(JSON.stringify(this.data).slice(296, 306));
      console.log("toshio is at " + this.toshioLat + " , " + this.toshioLong);
      this.toshioDist = this.distanceFunc(this.toshioLat, this.toshioLong, 14, 121);
      this.toshioPerc = 1-(this.toshioDist/100);
      console.log("toshio distance from dest is "+this.toshioDist);
      console.log("toshio percentage is "+this.toshioPerc);
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
