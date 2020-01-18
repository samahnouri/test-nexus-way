import { Component, OnInit } from '@angular/core';
import {UserService } from '../../shared_service/user.service';
import  {User }  from '../../user';
import { Login } from '../../login';
import { CookieService } from 'ngx-cookie-service';
import { UserLogin } from '../../UserLogin';
import { ToastrService } from 'ngx-toastr';
import{Router} from '@angular/router';
import { Local } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-create-compte',
  templateUrl: './create-compte.component.html',
  styleUrls: ['./create-compte.component.scss']
})
export class  CreateCompteComponent implements OnInit {
  model:any={};
  //user =new User;
  userLogin= new UserLogin;
  login =new Login;

  private _sessionId: string;
  tt1:any;

user =new User;
user1:any;
usere:any;
useer:any;
isLogged :boolean;
lgout :boolean;
ttt5:any;

isLoged=false;
  constructor(private userService:UserService,private router:Router ,private toastr: ToastrService,private cookieService: CookieService) { }

  ngOnInit() {
   this.ttt5 = "null";
    this.model=this.user;
    console.log(this.user);
  }

  
  logout(){
    localStorage.clear();
    this.toastr.error("loggedout "+ "token:" +localStorage.getItem('token'));
    this.router.navigate(["login-admin"]);

 
  }
  

  onSubmit(user){
  
    this.user=this.model;
    
    //this.userService.createUserLogin(user);

    /******************************************** */
    /********************************************* */
   this.tt1 = localStorage.getItem('token');
    this.userService.popup11(this.tt1).subscribe((useer)=>{console.log(useer+"rrrrrrrrrrrrrrrrr");
    if(useer!=null){
      this.usere = useer;
    console.log(this.user.password);

    alert(JSON.stringify(this.model));

    console.log(JSON.stringify(this.model));
  
    this.toastr.success("Bienvenu ton mail est  "+ this.usere.email);
    this.ttt5= this.usere.email +"roles:" + this.usere.roles;
    this.toastr.success("Bienvenu ton roles sont  "+ this.usere.roles);


 
  
   
  
  }
    else{
      this.toastr.error("mail non encore enregistré");
    }
  })
    
  }
}
