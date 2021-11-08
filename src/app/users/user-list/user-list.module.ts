import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { UsersComponent } from "./users/users.component"
import { UserListComponent } from "./user-list.component"
import { FilterBySkill } from './filter-by-skill.pipe'
import { UserModule } from '../user/user.module'
import { HomeModule } from 'src/app/home/home.module'

@NgModule({
    declarations: [
        UserListComponent,
        UsersComponent,
        FilterBySkill
    ],
    imports: [
        CommonModule,
        UserModule,
        HomeModule
    ]
})

export class UserListModule {

}