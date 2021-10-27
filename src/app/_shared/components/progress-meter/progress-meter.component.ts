import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-meter',
  templateUrl: './progress-meter.component.html',
  styleUrls: ['./progress-meter.component.scss'],
})
export class ProgressMeterComponent implements OnInit {
  @Input()
  coordinates: any;

  constructor() { }

  async ngOnInit(): Promise<void> {
    console.log(this.coordinates);
  }

}