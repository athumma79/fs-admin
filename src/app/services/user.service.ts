import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: Array<Person>;

  constructor(private httpClient: HttpClient) {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.httpClient.get('http://localhost:3000/users').subscribe((response: Array<Person>) => {
      this.users = response;
    });
  }

  getAllUsers(): Array<Person> {
    return this.users;
  }
}
