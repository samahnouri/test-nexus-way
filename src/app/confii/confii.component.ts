import { Component, OnInit } from '@angular/core';
import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import{Router} from '@angular/router';
import { Voiture } from '../voiture';


@Component({
  selector: 'app-confi',
  templateUrl: './confii.component.html',
  styleUrls: ['./confii.component.scss']
})
export class ConfiiComponent implements OnInit {


  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(){

   
  }

}
