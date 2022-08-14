import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Skills } from "./Skills";

import API from "../../API.js";

@Injectable({ providedIn: "root" })
export class SkillService {
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Skills[]>(`${API.url}/habilidades`);
  }
  checkHabilidade(habilidade: string) {
    return this.http.get(`${API.url}/habilidade/${habilidade}`);
  }
  upload(skills: Skills, id: number) {
    return this.http.post(`${API.url}/user/${id}/habilidade`, skills);
  }
  delete(id: number) {
    return this.http.delete(`${API.url}/habilidades/${id}`);
  }
}
