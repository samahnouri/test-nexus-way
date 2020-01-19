import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{UserService} from './shared_service/user.service';
import { AppComponent } from './app.component';


import {RouterModule, Routes} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';






import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr';

import{AuthGuard} from './auth.guard';

import { CookieService } from 'ngx-cookie-service';


import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {Ng6O2ChartModule} from 'ng6-o2-chart';

import {FileUploadModule} from 'ng2-file-upload';
import { DatePipe } from '@angular/common';


import { LoginAdminComponent } from './view/login-admin/login-admin.component';
import { RegisterAdminComponent } from './view/register-admin/register-admin.component';
import { HomeAdminComponent } from './view/home-admin/home-admin.component';


const route: Routes = [



 
  {path:'login-admin' , component :  LoginAdminComponent},
  {path:'home-admin' , component :  HomeAdminComponent},

 
  

]

@NgModule({
  declarations: [
    AppComponent,
  
    
   
   
   
    LoginAdminComponent,
    RegisterAdminComponent,
    HomeAdminComponent,
    
  
 
  
  
 

    //Ng6O2ChartModule
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FileUploadModule,
    
    
    

    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    Ng6O2ChartModule,
    ReactiveFormsModule

  ],
  providers: [HttpClientModule,UserService,AuthGuard,CookieService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

