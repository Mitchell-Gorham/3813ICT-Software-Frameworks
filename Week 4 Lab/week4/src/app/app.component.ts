import { Component, OnInit } from '@angular/core';
import {UsersService} from '/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'datapersistence';

  ngOnInit(){
    console.log("Testing, DOM Ready");

    if (typeof(Storage) !== "undefined"){
      console.log('Storage ready');
      sessionStorage.setItem("username","UNfromarray");
      sessionStorage.setItem("birthdate","BDfromarray");
      sessionStorage.setItem("age","AGEfromarray");
      sessionStorage.setItem("email","EMfromarray");
      sessionStorage.setItem("valid","VALIDfromarray");
      //console.log(sessionStorage.getItem("username"));

    }else{
      console.log("No storage support");
    }
  }
}
