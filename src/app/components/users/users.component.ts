import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  public users: Array<Person> = new Array();

  constructor(private userService: UserService) {
    this.userService.getAllUsers((res) => {
      this.users = res;
    });
  }

  ngOnInit() {
  }

}
