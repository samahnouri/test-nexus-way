import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';
import{Router} from '@angular/router';

import {UserService } from '../../shared_service/user.service';
import  {User }  from '../../user';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {



  
  
  ngOnInit() {
  
  }



}
