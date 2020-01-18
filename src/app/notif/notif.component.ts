import { Component, OnInit } from '@angular/core';
import  {User }  from '../user';
import{Router} from '@angular/router';
import { Voiture } from '../voiture';
import {UserService } from '../shared_service/user.service';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.scss']
})

export class NotifComponent implements OnInit {


  ngOnInit() {


  }



}
