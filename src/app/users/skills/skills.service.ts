import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Skills } from "./Skills";



const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root'})

export class SkillService {
    constructor(private http: HttpClient){}

    list(){
        return this.http.get<Skills[]>(`${API}/habilidades`)
    }
    checkHabilidade(habilidade: string){
        return this.http.get(API + '/habilidade/' + habilidade)
    }
    upload(skills: Skills, id: number){
        return this.http.post(`${API}/user/${id}/habilidade`, skills)
    }   
    delete(id: number){
        return this.http.delete(`${API}/habilidades/${id}`)
    }
}