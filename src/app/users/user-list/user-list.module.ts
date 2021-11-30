import { NgModule } from "@angular/core";

//declarations
import { UserListComponent } from "./user-list.component";
import { DataComponent } from "./data/data.component";
import { ProfileComponent } from "./profile/profile.component";

//imports
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { StatisticsComponent } from "./statistics/statistics.component";

@NgModule({ 
    declarations: [
        UserListComponent,
        DataComponent,
        ProfileComponent,
        StatisticsComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule,
        VMessageModule,
        RouterModule
    ], 
    exports: []
})

export class UserListModule {

}