import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import{Router} from '@angular/router';

import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {

  constructor(private userService:UserService,private router:Router,private cookieService: CookieService,private toastr: ToastrService) { 
 
  }
 

  ngOnInit() {
  
  }

 


}
