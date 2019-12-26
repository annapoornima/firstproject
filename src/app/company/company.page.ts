import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.page.html',
  styleUrls: ['./company.page.scss'],
})
export class CompanyPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  settings(){
    this.router.navigate(['/setting']);
  }
  crm(){
    this.router.navigate(['/crm']);
  }
  products(){
    this.router.navigate(['/products']);
  }
  stocks(){
    this.router.navigate(['/stocks']);
  }
  orders(){
    this.router.navigate(['/orders']);
  }
  sales(){
    this.router.navigate(['/sales']);
  }
  marketing(){
    this.router.navigate(['/marketing']);
  }
  finanse(){
    this.router.navigate(['/finanse']);
  }
  employees(){
    this.router.navigate(['/employees']);
  }
}
