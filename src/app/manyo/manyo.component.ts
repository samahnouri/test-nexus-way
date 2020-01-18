import { Component, OnInit } from '@angular/core';

import{Voiture} from '../voiture';
import { User2 } from '../User2';

import { UserService } from '../shared_service/user.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manyo',
  templateUrl: './manyo.component.html',
  styleUrls: ['./manyo.component.scss']
})
export class ManyoComponent implements OnInit {

 

 
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {

  }
 









}