import { Component, OnInit } from '@angular/core';
import{UserService} from '../shared_service/user.service';
import{User} from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    
  }

}
