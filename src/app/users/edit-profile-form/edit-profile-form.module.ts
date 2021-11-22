import { NgModule } from "@angular/core";

//declarations
import { EditProfileFormComponent } from "./edit-profile-form.component";

//imports
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";

@NgModule({
    declarations: [
        EditProfileFormComponent
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

export class EditProfileFormModule {}