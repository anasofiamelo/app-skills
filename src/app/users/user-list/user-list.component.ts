import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { DataService } from './data/data.service';
import { Data } from './data/data';
import { UserService } from '../../core/user/user.service';
import { User } from '../user/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  dados$: Observable<Data[]>
  dados: Data[] = [];

  user$: Observable<User>
  user: User

  filter: string = '';

  constructor(
    userService: UserService,
    private dataService: DataService,
    private router: Router
    ) {
        this.user$ = userService.getUser()
        this.user$.subscribe(user => {
        this.user = user})
    }

    ngOnInit() {
      // this.dados$ = this.dataService.listDataFromUser(this.user.id)
      // console.log(this.dados.length)
      this.dataService.listDataFromUser(this.user.id).subscribe(data => this.dados = data)
    }

}  
 
 