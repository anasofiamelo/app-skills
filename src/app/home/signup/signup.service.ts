import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NewUser } from "./newuser";
import API from "../../API.js";

@Injectable({ providedIn: "root" })
export class SignUpService {
  constructor(private http: HttpClient) {}

  checkUserTaken(user) {
    return this.http.get(`${API.url}/user/exists/${user}`);
  }

  signup(newUser: NewUser) {
    return this.http.post(`${API.url}/create-user/`, newUser);
  }
}
