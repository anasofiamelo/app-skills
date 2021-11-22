import { NgModule } from "@angular/core";

//declarations
import { FilterBySkill } from "./filter-by-skill.pipe";
import { SkillsFormComponent } from "./skills-form.component";


//imports
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { VMessageModule } from "src/app/shared/components/vmessage/vmessage.module";
import { SkillsModule } from "../skills/skills.module";

@NgModule({ 
    declarations: [
        FilterBySkill,
        SkillsFormComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        VMessageModule,
        RouterModule,
        SkillsModule
    ]
})

export class SkillsFormModule {

}