import { Component, OnInit } from '@angular/core';
import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import{Router} from '@angular/router';
import { Voiture } from '../voiture';

@Component({
  selector: 'app-rp2',
  templateUrl: './rp2.component.html',
  styleUrls: ['./rp2.component.scss']
})
export class Rp2Component implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {

    
  }

 

  
}
