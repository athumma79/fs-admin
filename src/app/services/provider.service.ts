import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  public providers: Array<Person>;

  constructor(private httpClient: HttpClient) {
    this.loadAllProviders();
  }

  loadAllProviders() {
    this.httpClient.get('http://localhost:3000/providers').subscribe((response: Array<Person>) => {
      this.providers = response;
    });
  }

  getAllProviders(): Array<Person> {
    return this.providers;
  }

}
