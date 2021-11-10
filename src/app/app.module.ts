import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { UsersModule } from './users/users.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { CardModule } from './shared/components/card/card.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    AppRoutingModule,
    ErrorsModule,
    HomeModule,
    CoreModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
