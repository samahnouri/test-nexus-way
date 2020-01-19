import { Injectable } from '@angular/core';

import {Response,Http, Headers, RequestOptions} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

import {User} from '../user';

import {User2} from '../User2';

import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string='http://localhost:8096/api';
  private baseUrl1:string='https://pacific-caverns-84912.herokuapp.com/api/login';
  private baseUrl2:string= 'https://pacific-caverns-84912.herokuapp.com/api/profile'
  private user:User;


  private s:string;
  content: string;
  style: string;
  dismissed: boolean = false;
  user1=new User();

  id1:any;
  email:any;
  ttt1 :any;
 options1 = new RequestOptions;

  constructor(private http:HttpClient) { }



        


  postmail(user):Observable<any>{
    return this.http.post(this.baseUrl1, user);
  }

  getmailandroles(tt1):Observable<any>{
    this.ttt1 = tt1;
    console.log(this.ttt1+'**************************');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
        headers = headers.append('Authorization', 'Bearer ' + this.ttt1);
    

  
    return this.http.get(this.baseUrl2 ,{ headers});

    
    
  
  }


   
    


    
 

 
    

   


   


     




            logout(){

              localStorage.removeItem('tohen');
            }
  
}
