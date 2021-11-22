import { Component, OnInit } from "@angular/core";
import { Data } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "src/app/core/user/user";
import { UserService } from "src/app/core/user/user.service";
import { DataService } from "../user-list/data/data.service";


@Component({
    selector: "app-user-list",
    templateUrl: "./skills-list.component.html",
    styleUrls: ["./skills-list.component.css"]
})

export class SkillsListComponent implements OnInit {

    dados: Data[] = [];
    user$: Observable<User>
    user: User

    constructor(
        userService: UserService,
        private dataService: DataService
    ){
        this.user$ = userService.getUser()
        this.user$.subscribe(user => {
        this.user = user})
    }

    ngOnInit(){
        this.carregarData()
    }
    carregarData(){
        this.dataService.listDataFromUser(this.user.id).subscribe(data => this.dados = data)
    }
    delete(skill: Data){
        this.dataService.deleteDataFromUser(skill.id_action)
        .subscribe(() => { 
        })
        alert('skill deleted')
        window.location.reload()
    }
    confirmDelete(){
        
    }
    denyDelete(){}
}