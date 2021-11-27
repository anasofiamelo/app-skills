import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';
import { Skills } from '../skills/Skills';
import { SkillService } from '../skills/skills.service';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent implements OnInit {
  
  skills: Skills[];
  skillForm: FormGroup;
  user$: Observable<User>
  user: User
  filter: string = '';

  

  constructor(
    private userService: UserService,
    private router: Router,
    private skillService: SkillService,
    private formBuilder: FormBuilder,
    
  ) { 
    this.user$ = userService.getUser()
    this.user$.subscribe(user => {
      this.user = user
    })

  }


  ngOnInit() {
    this.skillService.list().subscribe(skill => this.skills = skill)
    
    this.skillForm = this.formBuilder.group({
      icon: [''],
      id: [''],
      nivel: ['', [
          Validators.required, 
          Validators.minLength(6), 
          Validators.maxLength(13),]],
      habilidade_id: ['', Validators.required]
    })
  }

  submit(){
    this.skillForm.controls['id'].setValue(this.user.id)
    this.skillForm.controls['icon'].setValue(this.skills[0].icon)
    const newSkill = this.skillForm.getRawValue() as Skills;
    this.skillService.upload(newSkill, this.user.id).subscribe(() => { alert('Habilidade adicionada com sucesso!')}, err => { console.log(err)})
}
  excluirHabilidade(skill){
    this.skillService.delete(skill.id).subscribe(() => {
      alert('Habilidade deletada com sucesso')
      window.location.reload()
    },
    err => { console.log(err)}
    )
  }
}
   