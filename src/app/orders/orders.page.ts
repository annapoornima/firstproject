import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../service/company.service';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  employeelist:any;
  // studentEmail= "annapoornima@gmail.com";
  stlastname:any;
  employeest:any;
  newdata:any;
  constructor(private router:Router, private httpservice:CompanyService, private actrouter:ActivatedRoute) { }

  ngOnInit() {

    // this.getemployeelist();
    
    var data=this.actrouter.snapshot.queryParamMap.get('empdata');
    console.log(JSON.parse( data));
    this.newdata=JSON.parse( data)
 
  }
}
// getemployeelist(){
  
//   this.httpservice.employeesdata().subscribe(data =>{
//     console.log(data);
//     this.employeelist =data ;
//     this.studentInfo(data,this.studentEmail);
//   })
// }

// studentInfo(data,stuemail){
//   console.log(data['data']);
//   console.log(stuemail);
//   var i;
//   for(i=0; i< data['data'].length; i++){
//     if(stuemail == data['data'] [i]['email']){
//     console.log(data['data'][i]); 
//   }
// }
// }

 

