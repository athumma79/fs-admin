import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) {}

  getAllProperties(): Observable<Array<Property>> {
    return this.httpClient.get<Array<Property>>('http://localhost:3000/properties');
  }
}
