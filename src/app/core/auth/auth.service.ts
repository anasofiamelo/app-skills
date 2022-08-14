import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { User } from "src/app/users/user/user";
import { UserService } from "../user/user.service";
import API from "../../API.js";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  authenticate(user: string, password: string) {
    return this.http
      .post(
        `${API.url}/login`,
        { user: user, senha: password },
        { responseType: "text", observe: "response" }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get("Authorization");
          this.userService.setToken(authToken);
          console.log(`User ${user} autenticado com o token ${authToken}`);
        })
      );
  }
}
