import { Component, OnInit } from '@angular/core';
import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import { Login } from '../login';
import { CookieService } from 'ngx-cookie-service';
import { UserLogin } from '../UserLogin';
import { ToastrService } from 'ngx-toastr';
import{Router} from '@angular/router';

@Component({
  selector: 'app-user-form2',
  templateUrl: './Ca11.component.html',
  styleUrls: ['./Ca11.component.scss']
})
export class Ca11Component implements OnInit {
 
  constructor(private userService:UserService,private router:Router ,private toastr: ToastrService) { }

  ngOnInit() {
  
  }
 

}
