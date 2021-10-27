import { Component } from '@angular/core';
import { DataServiceService } from '../_shared/services';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;
  longitude: number;
  latitude: number;

  constructor(
    private dataService: DataServiceService
  ) { }

  async ionViewWillEnter(): Promise<void> {
    //calls function below whenever page is loaded
    await this.getData();
    // console.log(this.longitude);
    // console.log(this.latitude);
  }

  async getData(): Promise<void> {
    //puts data returned from sql to coordinates var
    this.data = await this.dataService.getData();

    //change slice range when payload is finalized
    this.longitude = parseFloat(JSON.stringify(this.data).slice(105,115));
    this.latitude = parseFloat(JSON.stringify(this.data).slice(90,99));
  }

}
