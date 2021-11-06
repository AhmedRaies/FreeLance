import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  isSuper():boolean{
    if (localStorage.getItem('username')!=null) return true;
    else {
      return false;
    }
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
  }

}
