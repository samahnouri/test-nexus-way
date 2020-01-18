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
  /*onSubmit(user){
    this.user=user;
    console.log(this.user.password);
    localStorage.setItem('isLoggedIn',"true");
    localStorage.setItem('token',user.password);
    alert(JSON.stringify(this.model));
    console.log(JSON.stringify(this.model))
    this.router.navigate(["home"]);

     

    
  }*/
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
    this.userService.popup(user).subscribe((useer)=>{console.log( "aaaaaaaaaa" +useer.refresh_token+ "ùùùùùùùù");
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
    this.toastr.success("Bienvenu ton mail est  "+localStorage.getItem('token'));
    this.router.navigate(["create-compte"]);
    this.user1=useer;
    console.log(this.user1.autorisation+"auuuuuuuuuuuuuuut");
    if(this.user1.autorisation=="admin"){
      this.router.navigate(["home-admin"]);
    }
  
   
  
  }
    else{
      this.toastr.error("mail non encore enregistré");
    }
  })
    
  }


}
