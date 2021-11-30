import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import * as jwt_decode from 'jwt-decode'

import { User } from "./user";
import { TokenService } from "../token/token.service";
import { HttpClient } from "@angular/common/http";
import { Skills } from "src/app/users/skills/Skills";
import { DeclareFunctionStmt } from "@angular/compiler";
import { NewUser } from "src/app/home/signup/newuser";
import { Data } from "src/app/users/user-list/data/data";
import { FormGroup } from "@angular/forms";
import { tap } from "rxjs/operators";

const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root'})

export class UserService {
    public userSubject = new BehaviorSubject<User>(null)
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
            .pipe(tap(() => {
                this.userSubject.next({...this.userSubject.value, ...newUser})
            }))
    }
    listHabilidades(){
        return this.http.get<Skills[]>(`${API}/habilidades`)
    }
    listFromUser(user: string){
        return this.http.get<User[]>(`${API}/users/${user}`)
    }
    listUsers(){
        return this.http.get<User[]>(API + '/lista/') 
    }
    userById(id: number){
        return this.http.get<User>(API + '/users/' + id)
    }
} 