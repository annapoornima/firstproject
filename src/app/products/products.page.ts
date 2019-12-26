import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  // employees = [
  //   {
  //     firstname:"kavitha",
  //     lastname:"kavi",
  //     email: "kavith@gamil.com",
  //     Mobile: "9875621206"
  //   },
  //   {
  //     firstname: "Haritha",
  //     lastname: "hari",
  //     email:"haritha@gamil.com",
  //     Mobile: "9877456321"
  //   },
  //   {
  //     firstname: "kavya",
  //     lastname: "asi",
  //     email:"kavya@gamil.com",
  //     Mobile: "123456"
  //   },
  //   {
  //     firstname: "vanaja",
  //     lastname: "vanu",
  //     email:"vanaja@gamil.com",
  //     Mobile: "987456321"
  //   }
  // ]
  employee: any;
  employeelist:any = [];
  employeedetails:any;
  constructor( private httpservice:CompanyService, private router:Router ) { }

  ngOnInit() {
    this.getemployeelistData();
  }

  getemployeelistData(){
    this.httpservice.employeesdata().subscribe(data =>{
      this.employeelist =data['data'] ;
      console.log(this.employeelist);
    });

  }

  getemployeelist(event){
    console.log(event.detail.value);
    var i;
    for( i=0; i < this.employeelist.length; i++){
      if(event.detail.value == this.employeelist[i]['email']){
        console.log(this.employeelist[i]);
        // this.newdata.push(this.employees[i]);
this.employeedetails=this.employeelist[i];
      }
    }
  }
  gotoemployee(item){
    console.log(item);
    console.log(JSON.stringify(item));
    this.router.navigate(['/orders'] ,{
      queryParams:{empdata:JSON.stringify(item), emp:"asi"}
    })
  }
  
}
