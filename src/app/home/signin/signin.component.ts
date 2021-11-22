
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "src/app/core/auth/auth.service";
import { PlatformDetectorService } from "src/app/core/platform-detector/platform-detector.service";


@Component({
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})

export class SignInComponent implements OnInit {

    loginForm: FormGroup;
    @ViewChild('userInput') userInput: ElementRef<HTMLInputElement>;
    
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        ){

    }

    ngOnInit(){
        this.loginForm = this.formBuilder.group({
            user: ['', Validators.required],
            password: ['', Validators.required]
        })
        this.platformDetectorService.isPlatformBrowser() 
                    && 
        this.userInput.nativeElement.focus()
    }
    
    login(){
        const user = this.loginForm.get('user').value ;
        const password = this.loginForm.get('password').value ;

        this.authService
        .authenticate(user, password)
        .subscribe(() => this.router.navigateByUrl('/' + user),
            err => { 
                console.log(err.message)
                this.loginForm.reset() 
                this.platformDetectorService.isPlatformBrowser() 
                    && 
                this.userInput.nativeElement.focus()
                alert('Invalid username or password')
            }
        )
    }   
}