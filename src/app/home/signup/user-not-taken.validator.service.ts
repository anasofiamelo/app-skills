import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { SignUpService } from "./signup.service";

import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})

export class UserNotTakenValidatorService {

    constructor(private signUpService: SignUpService) {}

    checkUserTaken(){
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(user =>
                    this.signUpService.checkUserTaken(user)
                ))
                .pipe(map(isTaken => isTaken ? { userTaken: true } : null))
                .pipe(first());
    }
    }
} 