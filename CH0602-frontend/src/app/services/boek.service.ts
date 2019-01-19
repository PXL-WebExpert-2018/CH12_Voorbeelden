import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boek } from '../models/boek.model';

@Injectable()
export class BoekService {
    private apiUrl: string;

    constructor(private http: HttpClient) { 
        this.apiUrl = 'http://localhost:3000/api/boeken';
    }

    getBoeken(): Observable<Boek[]>{
        return this.http.get<Boek[]>(this.apiUrl);
    }

    addBoek(boek: Boek): Observable<Object>{
        return this.http.post(this.apiUrl, boek);
    }

    removeBoek(boek: Boek): Observable<Object>{
        return this.http.delete(`${this.apiUrl}/${boek._id}`);
    }

    editBoek(boek: Boek): Observable<Object>{
        return this.http.put(this.apiUrl, boek);
    }
}