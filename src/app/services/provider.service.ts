import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private httpClient: HttpClient) {}

  getAllProviders(): Observable<Array<Person>> {
    return this.httpClient.get<Array<Person>>('http://localhost:3000/providers');
  }
}
