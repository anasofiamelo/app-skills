import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { ModalService } from "./modal.service";

import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})

export class HabilidadeExistsValidatorService {

    constructor(private modalService: ModalService) {}

    checkHabilidade(){
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(habilidade =>
                    this.modalService.checkSkillExists(habilidade)
                ))
                .pipe(map(isTaken => isTaken ? { habilidadeExists: true } : null))
                .pipe(first());
    }
    }
} 