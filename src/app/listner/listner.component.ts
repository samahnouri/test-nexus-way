import { Component, OnInit } from '@angular/core';
import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import{Router} from '@angular/router';
import { Voiture } from '../voiture';


@Component({
  selector: 'app-listner',
  templateUrl: './listner.component.html',
  styleUrls: ['./listner.component.scss']
})
export class ListnerComponent implements OnInit {


  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(){


   
    
  }





}
