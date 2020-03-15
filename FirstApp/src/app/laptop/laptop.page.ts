import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular'; 


@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.page.html',
  styleUrls: ['./laptop.page.scss'],
})
export class LaptopPage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }
  async a() {
    const toast = await this.toastController.create({
      header: 'HB',
      message: 'RAM : 8GB <br> ROM : 500GB <br> Proccessor : i5 <br>2GB Graphics',
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
  async b() {
    const toast = await this.toastController.create({
      header: 'HP Yuoga',
      message: 'RAM : 8GB <br> ROM : 500GB <br> Proccessor : i5 <br>2GB Graphics',      position: 'middle',
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
  async c() {
    const toast = await this.toastController.create({
      header: 'HP Note',
      message: 'RAM : 8GB <br> ROM : 500GB <br> Proccessor : i5 <br>2GB Graphics',      position: 'middle',
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
  async d() {
    const toast = await this.toastController.create({
      header: 'Lenovo 1',
      message: 'RAM : 8GB <br> ROM : 500GB <br> Proccessor : i5 <br>2GB Graphics',      position: 'middle',
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
  async e() {
    const toast = await this.toastController.create({
      header: 'Lenovo 2',
      message: 'RAM : 8GB <br> ROM : 500GB <br> Proccessor : i5 <br>2GB Graphics',      position: 'middle',
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
  async f() {
    const toast = await this.toastController.create({
      header: 'Lenovo 3',
      message: 'RAM : 8GB <br> ROM : 500GB <br> Proccessor : i5 <br>2GB Graphics',      position: 'middle',
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
  async g() {
    const toast = await this.toastController.create({
      header: 'DELL 1',
      message: 'RAM : 8GB <br> ROM : 500GB <br> Proccessor : i5 <br>2GB Graphics',      position: 'middle',
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
  async h() {
    const toast = await this.toastController.create({
      header: 'DELL 2',
      message: 'RAM : 8GB <br> ROM : 500GB <br> Proccessor : i5 <br>2GB Graphics',      position: 'middle',
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
  async i() {
    const toast = await this.toastController.create({
      header: 'DELL 3',
      message: 'RAM : 8GB <br> ROM : 500GB <br> Proccessor : i5 <br>2GB Graphics',      position: 'middle',
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
  async j() {
    const toast = await this.toastController.create({
      header: 'Azus 1',
      message: 'RAM : 8GB <br> ROM : 500GB <br> Proccessor : i5 <br>2GB Graphics',      position: 'middle',
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
  async k() {
    const toast = await this.toastController.create({
      header: 'Azus 2',
      message: 'RAM : 8GB <br> ROM : 500GB <br> Proccessor : i5 <br>2GB Graphics',      position: 'middle',
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
  async l() {
    const toast = await this.toastController.create({
      header: 'Azus 3',
      message: 'RAM : 8GB <br> ROM : 500GB <br> Proccessor : i5 <br>2GB Graphics',      position: 'middle',
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
