import { Component, Input, OnInit } from "@angular/core"
import { Observable } from "rxjs";
import { User } from "./user";

import { Data } from "../user-list/data/data";
import { DataService } from "../user-list/data/data.service";
import { Router } from "@angular/router";

@Component({
    selector: 'p-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
    @Input() nome = '';
    @Input() email = '';
    @Input() userName = '';
    @Input() id = '';
    @Input() viewProfile = '';

    user$: Observable<User>
    user: User

    data$: Observable<Data[]>

    constructor(
        private dataService: DataService,
        public router: Router){
    }

    ngOnInit(){
        // this.dataService.listDatas().subscribe(data => this.dados = data)
    }
}