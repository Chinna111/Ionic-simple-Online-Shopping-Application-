import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'; 



@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.page.html',
  styleUrls: ['./mobiles.page.scss'],
})
export class MobilesPage implements OnInit {

  constructor(public toastController: ToastController, private route: Router) { }

  home() {
    this.route.navigate(['./tap1']);
  }

  ngOnInit() {
  }
  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Samsung G',
      message: 'RAM: 4GB <br> RoM: 64 <br>Water proof<br>Battery: 3500 (mAh) ',
      position: 'middle',
      color: "secondary",
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async g1() {
    const toast = await this.toastController.create({
      header: 'Samsung G2',
      message: 'RAM: 4GB <br> RoM: 64 <br>Water proof<br>Battery: 3500 (mAh) ',
      position: 'middle',
      color: "secondary",
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async g2() {
    const toast = await this.toastController.create({
      header: 'Samsung G4',
      message: 'RAM: 4GB <br> RoM: 64 <br>Water proof<br>Battery: 3500 (mAh) ',
      position: 'middle',
      color: "secondary",
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async g3() {
    const toast = await this.toastController.create({
      header: 'Nokia 1',
      message: 'RAM: 4GB <br> RoM: 64 <br>Water proof<br>Battery: 3500 (mAh) ',
      position: 'middle',
      color: "secondary",
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async n1() {
    const toast = await this.toastController.create({
      header: 'Nokia 2',
      message: 'RAM: 4GB <br> RoM: 64 <br>Water proof<br>Battery: 3500 (mAh) ',
      position: 'middle',
      color: "secondary",
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async n2() {
    const toast = await this.toastController.create({
      header: 'Nokia 3',
      message: 'RAM: 4GB <br> RoM: 64 <br>Water proof<br>Battery: 3500 (mAh) ',
      position: 'middle',
      color: "secondary",
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async n3() {
    const toast = await this.toastController.create({
      header: 'RedMI 1',
      message: 'RAM: 4GB <br> RoM: 64 <br>Water proof<br>Battery: 3500 (mAh) ',
      position: 'middle',
      color: "secondary",
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async r1() {
    const toast = await this.toastController.create({
      header: 'RedMI 2',
      message: 'RAM: 4GB <br> RoM: 64 <br>Water proof<br>Battery: 3500 (mAh) ',
      position: 'middle',
      color: "secondary",
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async r2() {
    const toast = await this.toastController.create({
      header: 'RedMI 3',
      message: 'RAM: 4GB <br> RoM: 64 <br>Water proof<br>Battery: 3500 (mAh) ',
      position: 'middle',
      color: "secondary",
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }


}
