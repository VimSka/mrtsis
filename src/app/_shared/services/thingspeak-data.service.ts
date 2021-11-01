import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ThingspeakDataService {

  constructor() { }

  async getData() {
    const response = await axios({
      url: `https://api.thingspeak.com/channels/1424218/feeds.json?results=1`,
      method: 'GET'
    })
    return Promise.resolve(response.data)
  }
}
