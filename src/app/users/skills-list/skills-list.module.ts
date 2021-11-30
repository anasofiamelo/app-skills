import { NgModule } from "@angular/core";
import { SkillsListComponent } from "./skills-list.component";
import { ModalsModule } from '../../shared/components/modals/modals.module';
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [
        SkillsListComponent
    ],
    imports: [
        BrowserModule,
        ModalsModule
    ],
    exports: [
        SkillsListComponent
    ]
})

export class SkillsListModule {

}