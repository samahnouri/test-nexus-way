import { Component, OnInit } from '@angular/core';
import {UserService } from '../../shared_service/user.service';
import  {User }  from '../../user';
import { Login } from '../../login';
import { CookieService } from 'ngx-cookie-service';
import { UserLogin } from '../../UserLogin';
import { ToastrService } from 'ngx-toastr';
import{Router} from '@angular/router';

@Component({
  selector: 'app-tomodify',
  templateUrl: './Tomodify.component.html',
  styleUrls: ['./Tomodify.component.scss']
})
export class TomodifyComponent implements OnInit {
 
  ngOnInit() {

  }
  
}
