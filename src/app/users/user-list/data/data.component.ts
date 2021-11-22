import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Observable } from "rxjs";

import { Data } from "./data";
import { DataService } from "./data.service";

import { User } from "../../user/user";
import { UserService } from "src/app/core/user/user.service";

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css']
})

export class DataComponent implements OnChanges {
    @Input() habilidade = '';
    @Input() user = '';
    @Input() nivel = '';
    @Input() icon = '';
    rows: any[] = [];
    dados: Data[] = [];
    user$: Observable<User>
    users: User

    constructor(
        private dataService: DataService,
        userService: UserService){
        this.user$ = userService.getUser()
        this.user$.subscribe(user => {
        this.users = user
      })
    }

    ngOnChanges(changes: SimpleChanges) {
        this.dataService.listDataFromUser(this.users.id).subscribe(data => this.dados = data)
        if(changes.dados){
            this.rows = this.groupColumns(this.dados)
        }
    }

    groupColumns(dados: Data[]){
        const newRows = [];
  
        for(let index = 0; index < dados.length; index+=3){
          newRows.push(dados.splice(index, index+3))
        }
  
        return newRows;
      }

} 