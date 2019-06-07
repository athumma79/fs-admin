import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Array<Person>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe((response) => {
      this.users = response;
    });
  }

}
