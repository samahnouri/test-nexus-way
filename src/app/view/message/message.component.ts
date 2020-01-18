import { Component, OnInit } from '@angular/core';

import {UserService } from '../../shared_service/user.service';
import  {User }  from '../../user';
import  {Message}  from '../../model/message';
import { Login } from '../../login';
import { CookieService } from 'ngx-cookie-service';
import { UserLogin } from '../../UserLogin';
import { ToastrService } from 'ngx-toastr';
import{Router} from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
 
  ngOnInit() {


  }
  
}