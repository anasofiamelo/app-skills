import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { UserComponent } from '../users/user/user.component';
import { UserListComponent } from '../users/user-list/user-list.component';
import { FormComponent } from '../users/form/form.component';
import { UsersComponent } from './user-list/users/users.component';

@NgModule({
    declarations: [ 
        UserComponent, 
        UserListComponent,
        FormComponent,
        UsersComponent 
    ],
    imports: [ 
        HttpClientModule,
        CommonModule
    ]

})

export class UsersModule {

}