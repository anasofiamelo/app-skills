import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { UserComponent } from "./user.component";


@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [ 
        CommonModule,
        HttpClientModule
    ],
    exports: [
        UserComponent
    ]
})

export class UserModule {

} 