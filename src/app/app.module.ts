import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

//imports
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { ErrorsModule } from './errors/errors.module';
import { UserListModule } from './users/user-list/user-list.module';
import { HttpClientModule } from '@angular/common/http';
import { EditProfileFormModule } from './users/edit-profile-form/edit-profile-form.module';
import { SkillsFormModule } from './users/skills-form/skills-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports: [
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    CoreModule,
    EditProfileFormModule,
    ErrorsModule,
    UserListModule,
    UsersModule,
    SkillsFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
