import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<Array<Person>> {
    return this.httpClient.get<Array<Person>>('http://localhost:3000/users');
  }
}
