import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Data } from "./data";
import API from "../../../API.js";

@Injectable({ providedIn: "root" })
export class DataService {
  constructor(private http: HttpClient) {}
  listDatas() {
    return this.http.get<Data[]>(`${API.url}/habilidades`);
  }
  listDataFromUser(user_id: number) {
    return this.http.get<Data[]>(`${API.url}"/users/"${user_id}"/habilidades"`);
  }
  deleteDataFromUser(id_action: number) {
    return this.http.delete<Data[]>(`${API.url}/${id_action}`);
  }
}
