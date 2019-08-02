import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  email=""
  pass=""
  valid= [
    {username:"abc@com", pwd:"123"},
    {username:"def@com", pwd:"456"},
    {username:"ghi@com", pwd:"789"}
  ]

  loginClick() {
    this.router.navigate(["/account"]);
    for (var i = 0; i < this.valid.length; i++) {
      if( this.email == this.valid[i].username && this.pass == this.valid[i].pwd ){

      }

    }
  }
  ngOnInit() {
  }
}


