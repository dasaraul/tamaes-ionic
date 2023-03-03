import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    profile: any = {
      name: 'Tamaes',
      email: 'tamaes@outlook.co.id',
      address: 'Caruban',
      desc: 'No Comment',
    }

  constructor() {}

}
