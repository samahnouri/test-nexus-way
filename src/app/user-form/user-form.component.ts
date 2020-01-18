import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../shared_service/user.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Demande } from '../apply/demande';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
private user:User;
private demande:Demande;

  constructor(private userService:UserService,private router:Router,private datePipe: DatePipe , private toastr: ToastrService) { }

  ngOnInit() {

  }




}
