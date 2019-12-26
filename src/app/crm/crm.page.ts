import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AdditemPage } from '../additem/additem.page';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.page.html',
  styleUrls: ['./crm.page.scss'],
})
export class CrmPage implements OnInit {
app:any;
  constructor(private http:HttpClient, private router:Router, private modalController: ModalController) { }

  ngOnInit() {
    this.http.get('./assets/service.json').subscribe(data =>{
      this.app = data as string[];
    }, (error:HttpErrorResponse) =>{
      console.log(error.message);
    });
  }

  // add(){
  //   this.router.navigate(['/additem'])
  //   }
  async add() {
    const modal = await this.modalController.create({
      component: AdditemPage
    });
    return await modal.present();
  }
  
}
