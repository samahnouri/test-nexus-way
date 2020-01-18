import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{UserService} from './shared_service/user.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ListnerComponent } from './listner/listner.component';
import { from } from 'rxjs';
import { UserFormComponent } from './user-form/user-form.component';
import { ManyusersComponent } from './manyusers/manyusers.component';
import { Manyusers2Component } from './manyusers2/manyusers2.component';
import { ManyoComponent } from './manyo/manyo.component';
import { MComponent } from './m/m.component';
import { M2Component } from './m2/m2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
import{AuthGuard} from './auth.guard';
import { Login1Component } from './login1/login1.component';
import { CookieService } from 'ngx-cookie-service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ApplyComponent } from './apply/apply.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {Ng6O2ChartModule} from 'ng6-o2-chart';
import { UploadsComponent } from './uploads/uploads.component';
import {FileUploadModule} from 'ng2-file-upload';
import { ReversePipe } from './reverse.pipe';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { CaComponent } from './ca/ca.component';
import { SComponent } from './s/s.component';
import { NotifComponent } from './notif/notif.component';
import { DatePipe } from '@angular/common';
import { UserForm2Component } from './user-form2/user-form2.component';
import { HaComponent } from './ha/ha.component';
import { MdComponent } from './md/md.component';
import { AutComponent } from './aut/aut.component';
import { RpComponent } from './rp/rp.component';
import { Rp2Component } from './rp2/rp2.component';
import { Rp3Component } from './rp3/rp3.component';
import { Rp4Component } from './rp4/rp4.component';
import { Rp5Component } from './rp5/rp5.component';
import { Rp6Component } from './rp6/rp6.component';
import { Apply2Component } from './apply2/apply2.component';
import { Ca11Component } from './ca11/ca11.component';
import { ConfiComponent } from './confi/confi.component';
import { ConfiiComponent } from './confii/confii.component';
import { HomeAdminComponent } from './view/home-admin/home-admin.component';
import { LoginAdminComponent } from './view/login-admin/login-admin.component';
import { RegisterAdminComponent } from './view/register-admin/register-admin.component';
import { CreateCompteComponent } from './view/create-compte/create-compte.component';
import { UpdateCompteComponent } from './view/update-compte/update-compte.component';
import { DeleteCompteComponent } from './view/delete-compte/delete-compte.component';
import { CompteConsultComponent } from './view/compte-consult/compte-consult.component';
import { Viewh1Component } from './view/viewh1/viewh1.component';
import { AsciduiteComponent } from './view/asciduite/asciduite.component';
import { TomodifyComponent } from './view/tomodify/tomodify.component';
import { MessageComponent } from './view/message/message.component';
import { PublicationComponent } from './view/publication/publication.component';


const route: Routes = [



 
  {path:'login-admin' , component :  LoginAdminComponent},
  {path:'create-compte' , component :  CreateCompteComponent},

 
  

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ListnerComponent,
    UserFormComponent,
    ManyusersComponent,
    Manyusers2Component,
    ManyoComponent,
    MComponent,
    M2Component,
    Login1Component,
    SidebarComponent,
    FooterComponent,
    ApplyComponent,
    MydashboardComponent,
    UploadsComponent,
    ReversePipe,
    RecrutementComponent,
    CaComponent,
    SComponent,
    NotifComponent,
    UserForm2Component,
    HaComponent,
    MdComponent,
    AutComponent,
    RpComponent,
    Rp2Component,
    Rp3Component,
    Rp4Component,
    Rp5Component,
    Rp6Component,
    Apply2Component,
    Ca11Component,
    ConfiComponent,
    ConfiiComponent,
    HomeAdminComponent,
    LoginAdminComponent,
    RegisterAdminComponent,
    CreateCompteComponent,
    UpdateCompteComponent,
    DeleteCompteComponent,
    CompteConsultComponent,
    Viewh1Component,
    AsciduiteComponent,
    TomodifyComponent,
    MessageComponent,
    PublicationComponent,

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

