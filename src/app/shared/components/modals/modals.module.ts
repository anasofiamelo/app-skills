import { NgModule } from "@angular/core";

//declarations
import { ModalAddSkillComponent } from "./modal-add-skill/modal-add-skill.component";

//imports
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "../vmessage/vmessage.module";
import { CommonModule } from "@angular/common";
import { ModalConfirmComponent } from "./modal-confirm/modal-confirm.component";


@NgModule({
    declarations: [
        ModalAddSkillComponent,
        ModalConfirmComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        VMessageModule,
        CommonModule
    ],
    exports: [
        ModalAddSkillComponent,
        ModalConfirmComponent
    ]
})

export class ModalsModule {

}