import { Component, OnInit } from '@angular/core';
import{Voiture} from '../voiture';
import { User2 } from '../User2';

import { UserService } from '../shared_service/user.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manyusers',
  templateUrl: './manyusers.component.html',
  styleUrls: ['./manyusers.component.scss']
})
export class ManyusersComponent implements OnInit {
 

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {

  }

   

}
