import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route } from "@angular/router";

import { UserService } from "src/app/core/user/user.service";
import { Data } from "../user-list/data/data";
import { DataService } from "../user-list/data/data.service";
import { User } from "../user/user";

@Component({
    selector: 'app-profile-user',
    templateUrl: './profile-user.component.html',
    styleUrls: ['./profile-user.component.css']
})

export class ProfileUserComponent implements OnInit {

    dados: Data[] = [];
    user: User;
    filter: string = '';
    
    constructor(
        private dataService: DataService,
        private userService: UserService,
        private route: ActivatedRoute
        ){

    }

    ngOnInit(){
        const userId = this.route.snapshot.paramMap.get('user')
        this.userService.userById(+userId)
            .subscribe(user => {
                this.user = user
            })
        this.dataService.listDataFromUser(+userId)
            .subscribe(data => {
                this.dados = data
                console.log(this.dados[1])
            })
    }
}