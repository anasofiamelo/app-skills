import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";
import { NewUser } from "./newuser";

import { SignUpService } from "./signup.service";
import { UserNotTakenValidatorService } from "./user-not-taken.validator.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignUpComponent {

    signupForm: FormGroup;
    @ViewChild('inputUser') userInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        ){}

    ngOnInit(): void {
        
        this.signupForm = this.formBuilder.group({
            user: ['', [
                Validators.required, 
                Validators.minLength(2), 
                Validators.maxLength(20), 
                Validators.pattern(/^[a-z0-9_\-]+$/)],
                this.userNotTakenValidatorService.checkUserTaken()
            ],

            nome: ['', [
                Validators.required, 
                Validators.minLength(2), 
                Validators.maxLength(60)]
            ],

            senha: ['', [
                Validators.required, 
                Validators.minLength(8), 
                Validators.maxLength(14)]
            ],
                
            email: ['', [
                Validators.required, 
                Validators.email]
            ]
        })

        this.platformDetectorService.isPlatformBrowser() 
                    && 
                this.userInput.nativeElement.focus()
    }
    signup(){
        const newUser = this.signupForm.getRawValue() as NewUser;
        this.signUpService
        .signup(newUser)
        .subscribe(
            () => {
                this.router.navigate([''])
                alert('Conta criada com sucesso!')
            },
            err => console.log(err))
    }
} 