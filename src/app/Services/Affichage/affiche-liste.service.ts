import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from 'src/app/Models/Agent';

@Injectable({
  providedIn: 'root'
})
export class AfficheListeService {

  constructor(private http: HttpClient) { }

  getAllAgent():Observable<Agent[]>{
    return this.http.get<Agent[]>('http://localhost:3000/super/all-agent');
  }

}