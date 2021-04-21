import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent, OneAgent } from 'src/app/Models/Agent';


@Injectable({
  providedIn: 'root'
})
export class AfficheListeService {

  constructor(private http: HttpClient) { }

  getAllAgent():Observable<Agent[]>{
    return this.http.get<Agent[]>('http://localhost:3000/super/all-agent');
  }

  getDeletedAgents():Observable<Agent[]>{
    return this.http.get<Agent[]>('http://localhost:3000/super/deleted');
  }

  findOneAgent(cin:number):Observable<OneAgent[]>{
    const formData = new OneAgent("","","",cin,true);
    return this.http.post<Agent[]>("http://localhost:3000/super/find-agent",formData);
  }
}