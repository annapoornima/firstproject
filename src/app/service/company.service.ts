import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }
  log(data){
    return this.http.post("http://localhost:3000/schools/login",(data));

  }

  employeesdata(){
    return this.http.get('http://localhost:3000/schools/emplist');
  }
  deletestdata(email){
    return this.http.post('http://localhost:3000/schools/emaildelete',{Email:email});
  }
}


