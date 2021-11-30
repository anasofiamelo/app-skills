import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NewSkill } from "./NewSkill";

const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root'})

export class ModalService {
    constructor(private http: HttpClient){}

    checkSkillExists(skill){
        return this.http.get(API + '/habilidade/' + skill)
    }

    submitSkill(newSkill: NewSkill) {
        return this.http.post(API + '/cria-habilidade', newSkill)
    }
} 