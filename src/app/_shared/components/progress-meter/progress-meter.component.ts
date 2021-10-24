import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../../services';

@Component({
  selector: 'app-progress-meter',
  templateUrl: './progress-meter.component.html',
  styleUrls: ['./progress-meter.component.scss'],
})
export class ProgressMeterComponent implements OnInit {
  data: any;

  constructor(
    private dataService: DataServiceService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getData();
    console.log(this.data);
  }

  async getData(): Promise<void> {
    this.data = await this.dataService.getData();
  }

}