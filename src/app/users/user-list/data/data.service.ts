import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Data } from "./data";

const API = 'http://localhost:3000'

@Injectable({ providedIn: 'root'})

export class DataService {

    constructor( private http: HttpClient) {

    }

    listDataFromUser(user_id: number){
        return this.http.get<Data[]>(API + '/users/' + user_id + '/habilidades') 
    }
    deleteDataFromUser(id_action: number){
        return this.http.delete<Data[]>(API + '/' + id_action)
    }

}