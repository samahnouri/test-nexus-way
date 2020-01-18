import { Component, OnInit } from '@angular/core';
import { User2 } from '../User2';
import { UserService } from '../shared_service/user.service';
import { Router } from '@angular/router';
import { Voiture } from '../voiture';
import { d } from '@angular/core/src/render3';
@Component({
  selector: 'app-manyusers2',
  templateUrl: './manyusers2.component.html',
  styleUrls: ['./manyusers2.component.scss']
})
export class Manyusers2Component implements OnInit {
  
 
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() { 
  }





}
