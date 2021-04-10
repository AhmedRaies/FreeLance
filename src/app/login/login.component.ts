import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agent } from '../Models/Agent';
import { Admin } from '../Models/Admin';
import { SuperAdmin } from '../Models/SuperAdmin';
import { AuthService } from '../Services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  users: SuperAdmin[];
  agent :Agent[];
  UserModel: Admin;
  constructor(private router: Router, private auth: AuthService) { 

  }

  ngOnInit(): void {
  }

  login(type){
    if(type.value=='super'){
    this.loginAsSuper();
    }
    else if(type.value=='agent') {
      this.loginAsAgent();
    }
    else{
      console.log("Not Yet !");
    }
  }

  loginAsSuper(): void {
    this.UserModel = new Admin(this.username, this.password);
    this.auth.sendParam(this.UserModel).subscribe(data => console.log("Success", data), error => console.error("Error", error))

    //pour le moment , c'est le super admin qui se connecte
    
      this.auth.getUser().subscribe((reponse: SuperAdmin[]) => {
        this.users = reponse;
        console.log("Data");
        for (let u of this.users) {
          u.type="super";
          localStorage.setItem('email', JSON.stringify({ EMAIL: u.email }));
          localStorage.setItem('type', JSON.stringify({ TYPE: u.type }));
          this.router.navigate(["sidenav"]);
        }
      });

  }

  loginAsAgent(): void {
    this.UserModel = new Admin(this.username, this.password);
    this.auth.sendParam(this.UserModel).subscribe(data => console.log("Success", data), error => console.error("Error", error))

    //pour le moment , c'est le super admin qui se connecte
    
      this.auth.getAgent().subscribe((reponse: Agent[]) => {
        this.agent = reponse;
        console.log("Data");
        for (let u of this.agent) {
          u.type="agent";
          localStorage.setItem('email', JSON.stringify({ EMAIL: u.email }));
          localStorage.setItem('type', JSON.stringify({ TYPE: u.type }));
          this.router.navigate(["sidenav"]);
        }
      });
    

    /*if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate([""]);
    }else {
      alert("Invalid credentials");
    }*/
  }


  exist() {
    for (let u of this.users) {
      if (u.email == this.username) {

        // Vérifier que login/mdp sont correctes, par exemple par une requête à un service REST
        setInterval(TimeRanges, 1000);
        localStorage.setItem('EMAIL', JSON.stringify({ EMAIL: u.email }));
        localStorage.setItem('NOM', JSON.stringify({ NOM: u.nom }));
        //console.log(this.model.username);
        return 1;
      }
    }
    return 0;
  }

}
