import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  filter: string = '';
  user: string = '';

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
    ) {}
  
  ngOnInit(): void {

    this.user = this.activatedRoute.snapshot.params.user

    this.userService.listFromUser(this.user)
      .subscribe(users => {
      this.users = users})

  }
}      