import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/Models/country';
import { HttpService } from 'src/app/Services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  constructor(private router:Router) { }



  ngOnInit() {
    
  }
  login(){
this.router.navigate(['excel']);
  }

}
