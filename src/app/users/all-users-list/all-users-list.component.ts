import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/core/user/user.service";

import { Data } from "../user-list/data/data";
import { User } from "../user/user";





@Component({
    selector: 'app-all-users', 
    templateUrl: './all-users-list.component.html',
    styleUrls: ['./all-users-list.component.css']
})

export class AllUsersListComponent implements OnInit{
    users: User[] = [];
    filter: string = '';
    
    constructor(
        private userService: UserService
        ){}

    ngOnInit(){
        this.carregarUsers()
    }
    
    carregarUsers(){
        this.userService.listUsers().subscribe(user => {this.users = user})
    }

}