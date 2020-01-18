import { Component, OnInit } from '@angular/core';
import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import{Router} from '@angular/router';
import { Voiture } from '../voiture';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-md',
  templateUrl: './md.component.html',
  styleUrls: ['./md.component.scss']
})
export class MdComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,private toastr: ToastrService) { }

  ngOnInit() {

      
    
    
  
  }





  

}
