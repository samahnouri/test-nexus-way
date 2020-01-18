import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { Component, OnInit } from '@angular/core';

import{Voiture} from '../voiture';
import { User2 } from '../User2';

import { UserService } from '../shared_service/user.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import swal from 'sweetalert';
import {FileUploader} from 'ng2-file-upload';
import {ElementRef, ViewChild} from '@angular/core';

import { Uploader } from '@syncfusion/ej2-inputs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-m2',
  templateUrl: './m2.component.html',
  styleUrls: ['./m2.component.scss']
})
export class M2Component implements OnInit {

 @ViewChild('fileInput') fileInput: ElementRef;




  constructor(private userService:UserService,private router:Router,private toastr: ToastrService,private http:HttpClient) { }






   ngOnInit(): void {
    const headers = [{name: 'Accept', value: 'application/json'}];

  }
  
  
























  






 






}
