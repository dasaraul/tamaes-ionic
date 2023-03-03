import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  contact: Array<any> = [
    {
      name: 'Tama',
      telp: '099292',
      email: 'tamaes@outlook.co.id',
      address: 'Diponegoro',
    },
    {
      name: 'Raka',
      telp: '9929',
      email: 'wibu@outlook.co.id',
      address: 'Madiun',
    },
    {
      name: 'Yuf',
      telp: '999900',
      email: 'yudds@outlook.co.id',
      address: 'Klegen',
    },
    {
      name: 'DC',
      telp: '666363',
      email: 'DC@outlook.co.id',
      address: 'Jakarta',
    },
  ]
  constructor() {}

}
