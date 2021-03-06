import { Injectable } from '@angular/core';
import axios, { Axios } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  async getData() {
    const response = await axios({
      url: `https://rt.pipedream.com/sql`,
      method: 'POST',
      headers: {
        Authorization: `Bearer 85249bc3b5867ac9a9eae5b0864529fd`,
      },
      data: {
        query: "SELECT coordinates FROM test_data3 ORDER BY createdat DESC LIMIT 1",
      }
    })
    return Promise.resolve(response.data)
  }

}
