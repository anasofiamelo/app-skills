import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService,) {
    
  }

  authenticate(user: string, password: string){
      return this.http.post(`${API}/login`, 
        {user: user, senha: password},
        {responseType: 'text', observe: 'response'})
      .pipe(tap(res => {
        const authToken = res.headers.get('Authorization')
        this.userService.setToken(authToken)
        console.log(`User ${user} autenticado com o token ${authToken}`)
      }))
  }
}
