import { Component, OnInit } from '@angular/core';
import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import{Router} from '@angular/router';
import { Voiture } from '../voiture';
@Component({
  selector: 'app-rp4',
  templateUrl: './rp4.component.html',
  styleUrls: ['./rp4.component.scss']
})
export class Rp4Component implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {



     
  }





}
