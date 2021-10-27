import { Component } from '@angular/core';
import { DataServiceService } from '../_shared/services';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  coordinates: any;

  constructor(
    private dataService: DataServiceService
  ) { }

  ionViewWillEnter() {
    //calls function below whenever page is loaded
    this.getData();
    console.log(this.coordinates);
  }

  // //OLD IONVIEWWILLENTER CODE
  // async ionViewWillEnter(): Promise<void> {
  //   //calls function below whenever page is loaded
  //   await this.getData();
  //   console.log(this.coordinates);
  // }

  async getData(): Promise<void> {
    //puts data returned from sql to coordinates var
    this.coordinates = JSON.stringify(await this.dataService.getData());
  }

}
