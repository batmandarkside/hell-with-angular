import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Heroes {
  constructor(
    public http: HttpClient
  ) { }

  public getData() {
    console.log('Heroes#getData(): Get Data');
    return this.http.get('/assets/data.json');
  }
}
