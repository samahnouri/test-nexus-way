import { Component, OnInit } from '@angular/core';
import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import{Router} from '@angular/router';
import {Ng6O2ChartModule} from 'ng6-o2-chart';
import { User2 } from '../User2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,private toastr: ToastrService) { }

  ngOnInit() {
    
  
    }
   
   

 


}
