import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { User } from "../user/user";
import { UserService } from "../../core/user/user.service";
import { AuthService } from "src/app/core/auth/auth.service";



@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile-form.component.html',
    styleUrls: ['./edit-profile-form.component.css']
  })

export class EditProfileFormComponent implements OnInit {

  editForm: FormGroup;
  file: File;
  user$: Observable<User>
  user: User
  preview: string;

    constructor(
      private formBuilder: FormBuilder,
      private userService: UserService,
      private router: Router,
      private authService: AuthService
      ){
        this.user$ = userService.getUser()
        this.user$.subscribe(user => {
        this.user = user})
      }

    ngOnInit(){
      this.editForm = this.formBuilder.group({
        id: [this.user.id],
        user: [this.user.user],
        password: ['', Validators.required],
        nome: [this.user.nome],
        email: [this.user.email],
        profilePic: [''],
        profileDesc: ['']
      })
    }

    upload(){
        const user = this.editForm.get('user').value ;
        const password = this.editForm.get('password').value ;
        const newUser = this.editForm.getRawValue() as User;

        this.authService
        .authenticate(user, password)
        .subscribe(() => {
          this.userService.upload(this.user.user, newUser)
          .subscribe((res) => {
            const authToken = res.headers.get('Authorization')
            this.userService.setToken(authToken)
            alert('Conta alterada com sucesso!')
            window.location.reload()
          })
            
            this.router.navigateByUrl('/' + user)
        })  
    }

    handleFile(file: File){
      this.file = file
      const reader = new FileReader();
      reader.onload = (event: any) => this.preview = event.target.result;
      reader.readAsDataURL(file)
    } 
  

} 