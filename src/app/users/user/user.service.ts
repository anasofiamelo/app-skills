import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../user-list/data/data';

const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root' })

export class UserService {
    constructor(private http: HttpClient){}
        
    
    
}