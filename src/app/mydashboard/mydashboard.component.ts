import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import *as ChartConst from 'ng6-o2-chart';
import {UserService } from '../shared_service/user.service';
import  {User }  from '../user';
import{Router} from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
})
export class MydashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  
  
  
}
