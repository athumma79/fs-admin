import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private httpClient: HttpClient) {}

  getAllProviders(assign: Function) {
    this.httpClient.get('http://localhost:3000/providers').subscribe((response: Array<Person>) => {
      assign(response);
    });
  }

}
