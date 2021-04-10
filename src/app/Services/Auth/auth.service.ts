import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperAdmin } from 'src/app/Models/SuperAdmin';
import { Admin } from 'src/app/Models/Admin';

import { isNull } from 'util';
import { Agent } from 'src/app/Models/Agent';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  public users:Admin[]=[];
  constructor(private http: HttpClient) {
    //this.All_Users();
  }

  
  
  sendParam(user:Admin){
    return this.http.post<any>("http://localhost:3000/send-coord",user);
  }
  getUser() :Observable<SuperAdmin[]>{

    return this.http.get<SuperAdmin[]>('http://localhost:3000/super');
  }

  getAgent(): Observable<Agent[]>{
    return this.http.get<Agent[]>('http://localhost:3000/agent');
  }
}
