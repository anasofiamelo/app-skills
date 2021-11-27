import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

//imports
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';

import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { UserModule } from './users/user/user.module';
import { ErrorsModule } from './errors/errors.module';
import { UserListModule } from './users/user-list/user-list.module';
import { HttpClientModule } from '@angular/common/http';
import { EditProfileFormModule } from './users/edit-profile-form/edit-profile-form.module';
import { SkillsFormModule } from './users/skills-form/skills-form.module';
import { AllUsersListModule } from './users/all-users-list/all-users.list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    ModalModule.forRoot(),
    CoreModule,
    EditProfileFormModule,
    ErrorsModule,
    UsersModule,
    UserListModule,
    SkillsFormModule,
    AllUsersListModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
