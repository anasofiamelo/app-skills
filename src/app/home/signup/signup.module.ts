import { NgModule } from "@angular/core";

//declarations
import { SignUpComponent } from "./signup.component";

//imports
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";

@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports: [
        RouterModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VMessageModule
    ]    
})

export class SignUpModule {}