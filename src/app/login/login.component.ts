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

  login(){
    if(this.username =='admin' && this.password == 'admin'){
      localStorage.setItem('username', this.username);
      this.router.navigate(["parks/affiche-park"]);
    }
    
  }

  // loginAsSuper(): void {
  //   this.UserModel = new Admin(this.username, this.password);
  //   this.auth.sendParam(this.UserModel).subscribe(data => console.log("Success", data), error => console.error("Error", error))

  //   //pour le moment , c'est le super admin qui se connecte
    
  //     this.auth.getUser().subscribe((reponse: SuperAdmin[]) => {
  //       this.users = reponse;
  //       console.log("Data");
  //       for (let u of this.users) {
  //         u.type="super";
  //         localStorage.setItem('email', JSON.stringify({ EMAIL: u.email }));
  //         localStorage.setItem('type', JSON.stringify({ TYPE: u.type }));
  //         this.router.navigate(["sidenav"]);
  //       }
  //     });

  // }

  // loginAsAgent(): void {
  //   this.UserModel = new Admin(this.username, this.password);
  //   this.auth.sendParam(this.UserModel).subscribe(data => console.log("Success", data), error => console.error("Error", error))

  //   //pour le moment , c'est le super admin qui se connecte
    
  //     this.auth.getAgent().subscribe((reponse: Agent[]) => {
  //       this.agent = reponse;
  //       console.log("Data");
  //       for (let u of this.agent) {
  //         u.type="agent";
  //         localStorage.setItem('email', JSON.stringify({ EMAIL: u.email }));
  //         localStorage.setItem('type', JSON.stringify({ TYPE: u.type }));
  //         this.router.navigate(["sidenav"]);
  //       }
  //     });
    

  //   /*if(this.username == 'admin' && this.password == 'admin'){
  //    this.router.navigate([""]);
  //   }else {
  //     alert("Invalid credentials");
  //   }*/
  // }

}
