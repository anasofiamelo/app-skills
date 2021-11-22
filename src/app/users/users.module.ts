import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

import { UserComponent } from '../users/user/user.component';
import { SkillsListComponent } from './skills-list/skills-list.component';



@NgModule({
    declarations: [ 
        UserComponent, 
        SkillsListComponent
    ],
    imports: [ 
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        VMessageModule,
        RouterModule
    ]

})

export class UsersModule {} 