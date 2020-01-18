import { Component, OnInit } from '@angular/core';
import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import { Login } from '../login';
import{Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserLogin } from '../UserLogin';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-m',
  templateUrl: './m.component.html',
  styleUrls: ['./m.component.scss']
})
export class MComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,private cookieService: CookieService,private toastr: ToastrService) {
 
   }


  ngOnInit() {
    
  }


 
}
