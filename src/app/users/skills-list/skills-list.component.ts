import { Component, OnInit, TemplateRef } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
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
    modalRef: BsModalRef;    
    dados: Data[] = [];
    skillClicada: Data;
    user$: Observable<User>
    user: User

    constructor(
        userService: UserService,
        private dataService: DataService,
        private modalService: BsModalService
    ){
        this.user$ = userService.getUser()
        this.user$.subscribe(user => {
        this.user = user})
    }

    ngOnInit(){
        this.carregarData()
    }

    carregarData(){
        this.dataService.listDataFromUser(this.user.id)
            .subscribe(data => {
                this.dados = data
            })
    }
    openModal(template: TemplateRef<any>, skill){
        this.skillClicada = skill;
        this.modalRef = this.modalService.show(template)
    }

    delete(){
        this.dataService.deleteDataFromUser(this.skillClicada.id_action)
        .subscribe(() => { 
        })
        window.location.reload()
    }
}