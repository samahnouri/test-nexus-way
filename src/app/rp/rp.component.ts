import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared_service/user.service';
import { ToastrService } from 'ngx-toastr';
import{Router} from '@angular/router';
@Component({
  selector: 'app-rp',
  templateUrl: './rp.component.html',
  styleUrls: ['./rp.component.scss']
})

export class RpComponent implements OnInit {

  constructor(private userService:UserService,private toastr: ToastrService , private router:Router) { }

  ngOnInit() {

  }



}
