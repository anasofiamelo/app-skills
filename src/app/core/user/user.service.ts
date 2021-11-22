import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import * as jwt_decode from 'jwt-decode'

import { User } from "./user";
import { TokenService } from "../token/token.service";
import { HttpClient } from "@angular/common/http";
import { Skills } from "src/app/users/skills/Skills";
import { DeclareFunctionStmt } from "@angular/compiler";
import { NewUser } from "src/app/home/signup/newuser";

const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root'})

export class UserService {
    private userSubject = new BehaviorSubject<User>(null)
    private userName: string

    constructor(
        private http: HttpClient,
        private tokenService: TokenService){

        this.tokenService.hasToken() && this.decodeAndNotify()
    }
    setToken(token: string){
        this.tokenService.setToken(token)
        this.decodeAndNotify()
    }
    getUser(){
        return this.userSubject.asObservable();
    }
    getUserName(){
        return this.userName;
    }
    private decodeAndNotify(){
        const token = this.tokenService.getToken()
        const user = jwt_decode(token) as User;
        this.userName = user.user;
        this.userSubject.next(user)
    }
    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }
    isLogged(){
        return this.tokenService.hasToken();
    }
    upload(user: string, newUser: User){
        return this.http.put<any>(`${API}/user/${user}`, newUser)
    }
    listHabilidades(){
        return this.http.get<Skills[]>(`${API}/habilidades`)
    }
    listFromUser(user: string){
        return this.http.get<User[]>(`${API}/users/${user}`)
    }
    
} 