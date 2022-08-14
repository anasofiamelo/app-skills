import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NewSkill } from "./NewSkill";
import API from "../../../../API.js";

@Injectable({ providedIn: "root" })
export class ModalService {
  constructor(private http: HttpClient) {}

  checkSkillExists(skill) {
    return this.http.get(`${API.url}/habilidade/${skill}`);
  }

  submitSkill(newSkill: NewSkill) {
    return this.http.post(`${API.url}/cria-habilidade`, newSkill);
  }
}
