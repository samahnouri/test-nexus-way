import { Component, OnInit } from '@angular/core';
import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import{Router} from '@angular/router';
@Component({
  selector: 'app-ca',
  templateUrl: './ca.component.html',
  styleUrls: ['./ca.component.scss']
})
export class CaComponent implements OnInit {
id:string;
id2:any;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  
  }

}
