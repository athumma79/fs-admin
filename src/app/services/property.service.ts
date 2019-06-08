import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) {}

  getAllProperties(assign: Function) {
    this.httpClient.get('http://localhost:3000/properties').subscribe((response: Array<Property>) => {
      assign(response);
    });
  }

}
