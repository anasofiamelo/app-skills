import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skills } from '../skills/Skills';

import { User } from './user';

const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root' })

export class UserService {
    constructor(private http: HttpClient){}
        

    
}