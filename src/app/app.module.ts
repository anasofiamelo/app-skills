import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    ErrorsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
