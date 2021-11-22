import { Component, Input, OnInit } from "@angular/core";
import { Skills } from "./Skills";
import { SkillService } from "./skills.service";

@Component({ 
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
    skills: Skills[] = [];
    //@Input() skill = '';
    constructor(
        private skillService: SkillService
    ){}
    ngOnInit(){
        this.skillService.list().subscribe(skill => this.skills = skill)
    }
} 