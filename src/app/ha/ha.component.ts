import { Component, OnInit } from '@angular/core';
import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import{Router} from '@angular/router';
@Component({
  selector: 'app-ha',
  templateUrl: './ha.component.html',
  styleUrls: ['./ha.component.scss']
})
export class HaComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {

  }
 
}
