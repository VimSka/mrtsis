import { TestBed } from '@angular/core/testing';

import { ThingspeakDataService } from './thingspeak-data.service';

describe('ThingspeakDataService', () => {
  let service: ThingspeakDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThingspeakDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
