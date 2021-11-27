import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AllUsersListComponent } from './users/all-users-list/all-users-list.component';
import { EditProfileFormComponent } from './users/edit-profile-form/edit-profile-form.component';
import { ProfileUserComponent } from './users/profile-user/profile-user.component';
import { SkillsFormComponent } from './users/skills-form/skills-form.component';
import { SkillsListComponent } from './users/skills-list/skills-list.component';
import { SkillsComponent } from './users/skills/skills.component';
import { UserListComponent } from './users/user-list/user-list.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },

    { 
        path: ':user', 
        component: UserListComponent 
    },

    { 
        path: 's/edit', 
        component: EditProfileFormComponent
    },

    { 
        path: 's/skills', 
        component: SkillsListComponent
    },

    { 
        path: 's/add', 
        component: SkillsFormComponent 
    },

    { 
        path: 'u/users', 
        component: AllUsersListComponent 
    },

    { 
        path: 'profile/:user', 
        component: ProfileUserComponent 
    },

    { 
        path: '**', 
        component: NotFoundComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true}) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}