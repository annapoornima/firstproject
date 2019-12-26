import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  app: string[];
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
  
 
  }
add(){
  this.router.navigate(['/addstudentdata'])
}
// Products(){
//   this.router.navigate(['/products'])
// }
}
