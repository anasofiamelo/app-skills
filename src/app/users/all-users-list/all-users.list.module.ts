import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UserModule } from "../user/user.module";

//declarations
import { AllUsersListComponent } from "./all-users-list.component";
import { FilterByName } from "./filter-by-name.pipe";

//imports

@NgModule({
    declarations: [
        AllUsersListComponent,
        FilterByName
    ],
    imports: [
        BrowserModule,
        UserModule

    ]
})

export class AllUsersListModule {

}