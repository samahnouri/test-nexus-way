import { Component, OnInit } from '@angular/core';
import { Login } from '../../login';
import{Router} from '@angular/router';

import {UserService } from '../../shared_service/user.service';
import  {User }  from '../../user';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  login =new Login;
  model:any={};
user =new User;
user1:any;
usere:any;
useer:any;
isLogged :boolean;
lgout :boolean;

isLoged=false;
private _sessionId: string;
  constructor(private userService:UserService,private router:Router,private cookieService: CookieService,private toastr: ToastrService) { 
    this._sessionId = cookieService.get("sessionId");
  }
  public set sessionId(value: string) {
   this._sessionId = value;
   this.cookieService.set("sessionId", value);
 }

  ngOnInit() {
  
  }

  createSession(login:Login){
    localStorage.setItem('isLoggedIn',"true");
    localStorage.setItem('tokon',login.email);
    this.router.navigate(["home-admin"]);

  }

  logout(){
    localStorage.clear();
    this.toastr.error("loggedout "+ "token:" +localStorage.getItem('token'));
    this.lgout=true;

 
  }
  onSubmit(user){
  
    this.user=this.model;
    
    //this.userService.createUserLogin(user);

    /******************************************** */
    /********************************************* */
    this.userService.postmail(user).subscribe((useer)=>{console.log( "" +useer.refresh_token+ "");
    if(useer!=null){
      this.usere = useer;
    console.log(this.user.password);
    localStorage.setItem('isLoggedIn',"true");
    localStorage.setItem('token',this.usere.token );
    alert(JSON.stringify(this.model));
    this._sessionId = this.user.email;
    this.cookieService.set("sessionId", this.user.password);
    console.log(JSON.stringify(this.model));
    this.isLogged=true;
    console.log(this.isLogged+'*************');
    this.toastr.success("Hello your token  is  "+localStorage.getItem('token'));
    this.router.navigate(["home-admin"]);
    this.user1=useer;
    console.log(this.user1.autorisation+"");
  
  
   
  
  }
    else{
      this.toastr.error("mail not reistered !");
    }
  })
    
  }


}
