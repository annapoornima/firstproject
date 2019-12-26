import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AdditemPage implements OnInit {

  constructor(private router:Router , private modalController:ModalController) { }

  ngOnInit() {
  }
  
  // back(){
  //   this.router.navigate(['/crm'])

  // }
  async Dismiss() {
    const result: Date = new Date();
    await this.modalController.dismiss(result);
  }

}
