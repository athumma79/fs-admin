import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Array<Person> {
    let users: Array<Person> = null;
    this.httpClient.get('http://localhost:3000/users')
      .subscribe((response) => {
        users = <Array<Person>> response;
        console.log(users);
    });
    console.log(users);
    return users;
  }
}
