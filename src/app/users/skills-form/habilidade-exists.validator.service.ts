import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { SkillService } from "../skills/skills.service";

import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})

export class HabilidadeExistsValidatorService {

    constructor(private skillService: SkillService) {}

    checkHabilidade(){
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(habilidade =>
                    this.skillService.checkHabilidade(habilidade)
                ))
                .pipe(map(isTaken => !isTaken ? { habilidadeExists: true } : null))
                .pipe(first());
    }
    }
} 