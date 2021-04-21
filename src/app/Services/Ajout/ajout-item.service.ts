import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OneAgent } from 'src/app/Models/Agent';
import { Result } from 'src/app/Models/Result';


@Injectable({
  providedIn: 'root'
})
export class AjoutItemService {

  constructor(private http : HttpClient) { }

  addAgent(agent:OneAgent):Observable<Result>{
    return this.http.post<Result>('http://localhost:3000/super/add-agent',agent);
  }
}
