
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from '../service/company.service';
import { ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  LogForm: FormGroup;
  submitted = false;
  PasswordType: string = "password";
  PasswordShown: boolean = false;
  constructor(public toastController: ToastController, private altercrl: AlertController, private route: Router, private fb: FormBuilder, private httpservice: CompanyService) {
    this.LogForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // login() {
  //     this.route.navigate(['/company']);
  // }
  onSubmit() {
    console.log("logdata", this.LogForm.value);
    let obj = {
      username: this.LogForm.value.email,
      Password: this.LogForm.value.Password
    }
    this.httpservice.log(obj).subscribe(data => {
      console.log("res coming from nodejs service", data);
      this.LogForm.reset();
      this.showtoast(data['message']);
      this.showalert(data['message']);
      localStorage.setItem("username", this.LogForm.value.username);
      if (data['message'] == "login success") {
        this.route.navigate(['/company']);
        this.showalert(data['message']);
      } else {
        alert("provide valid email and password");
      }
    }, err => {
      console.log(err['error']['message']);
      this.showtoast(err['error']['message'])
      this.showalert(err['error']['message'])
    });

  }
  async showtoast(data) {
    let toast = await this.toastController.create({
      message: data,
      duration: 2000,
      color: "dark",
      showCloseButton: true,
      closeButtonText: "close",
      position: "bottom"
    });
    toast.present();

    const dismiss = await toast.onDidDismiss();
    console.log('Dismissed toast', dismiss);
    if (dismiss.role === 'close') {
      console.log('Close button pressed!');
    }
  }
  // async showalert(data) {
  //   let alert = this.altercrl.create({
  //     message: 'data',

  //     buttons: ['Dismiss']
  //   });
  //   alert.present();
  // }
  async showalert(data){
    let alert = await this.altercrl.create({
      message:
      
       data,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  alert.present();
}
}