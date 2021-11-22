import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";


import { User } from "src/app/users/user/user";
import { UserService } from "../user/user.service";

@Component({
    selector: 'app-footer', 
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

    user$: Observable<User>

    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.user$ = this.userService.getUser()
    }
    logout(){
        this.userService.logout();
        this.router.navigate(['']);
    }

}