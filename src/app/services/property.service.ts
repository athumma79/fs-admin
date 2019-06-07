import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  public properties: Array<Property>;

  constructor(private httpClient: HttpClient) {
    this.loadAllProperties();
  }

  loadAllProperties() {
    this.httpClient.get('http://localhost:3000/properties').subscribe((response: Array<Property>) => {
      this.properties = response;
    });
  }

  getAllProperties(): Array<Property> {
    return this.properties;
  }

}
