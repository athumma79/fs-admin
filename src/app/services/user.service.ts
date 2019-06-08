import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  getAllUsers(assign: Function) {
    this.httpClient.get('http://localhost:3000/users').subscribe((response: Array<Person>) => {
      assign(response);
    });
  }

}
