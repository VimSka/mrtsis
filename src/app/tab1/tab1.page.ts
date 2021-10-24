import { Component } from '@angular/core';
import { DataServiceService } from '../_shared/services';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;

  constructor(
    private dataService: DataServiceService
  ) {}

  async ionViewWillEnter(): Promise<void> {
    await this.getData();
    console.log(this.data);
  }

  async getData(): Promise<void> {
    this.data = await this.dataService.getData();
  }

}
