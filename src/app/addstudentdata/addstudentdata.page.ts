import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addstudentdata',
  templateUrl: './addstudentdata.page.html',
  styleUrls: ['./addstudentdata.page.scss'],
})
export class AddstudentdataPage implements OnInit {

  constructor(private router:Router, private modalcontroller:ModalController) { }

  ngOnInit() {
  }

 async Dismiss() {
      const result: Date = new Date();
      await this.modalcontroller.dismiss(result);
    }
  
}
