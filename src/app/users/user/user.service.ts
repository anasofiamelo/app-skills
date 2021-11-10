import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root' })

export class UserService {



    constructor(private http: HttpClient){

    }
        

    listFromUser(user: string){

        return this.http.get<User[]>(`${API}/${user}}`)
    }
}