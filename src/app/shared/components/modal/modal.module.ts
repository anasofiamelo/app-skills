import { NgModule } from "@angular/core";

//declarations
import { ModalComponent } from "./modal.component";

//imports
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "../vmessage/vmessage.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ModalComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        CommonModule
    ],
    exports: [
        ModalComponent
    ]
})

export class ModalModule {

}