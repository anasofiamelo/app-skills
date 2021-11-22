import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NewUser } from "./newuser";

const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root'})

export class SignUpService {
    constructor(private http: HttpClient){}

    checkUserTaken(user){
        return this.http.get(API + '/user/exists/' + user)
    }

    signup(newUser: NewUser) {
        return this.http.post(API + '/create-user/', newUser)
    }
} 