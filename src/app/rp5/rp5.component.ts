import { Component, OnInit } from '@angular/core';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import {FormBuilder,FormGroup} from '@angular/forms';
import {FileUploadService} from '../file-upload.service';
import {FileUploader} from 'ng2-file-upload';
import {ElementRef, ViewChild} from '@angular/core';
import { Demande } from '../apply/demande';
import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import { Login } from '../login';
import{Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-rp5',
  templateUrl: './rp5.component.html',
  styleUrls: ['./rp5.component.scss']
})
export class Rp5Component implements OnInit {

  constructor(private userService:UserService,private toastr: ToastrService,private datePipe: DatePipe) { }

  ngOnInit() {
     

  }



 









}
