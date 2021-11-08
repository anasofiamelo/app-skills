import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { TokenService } from '../token/token.service';

const API = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) {
    
  }

  authenticate(user:string, password: string){
      return this.http.post(`${API}/login`, 
        {user: user, senha: password},
        {responseType: 'text', observe: 'response'})
      .pipe(tap(res => {
        const authToken = res.headers.get('Authorization')
        this.tokenService.setToken(authToken)
        console.log(`User ${user} autenticado com o token ${authToken}`)
      }))
  }
}
