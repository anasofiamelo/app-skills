import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignInComponent } from './home/signin/signin.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
    { path: '', component: SignInComponent},
    { path: 'users', component: UserListComponent },
    { path: '**', component: UserListComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}