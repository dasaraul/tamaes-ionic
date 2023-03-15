import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  profile: any = {
    jeneng: 'Tamaes',
    hape: '092210819939',
    mail: 'wibuelite@wernes.com',
    negoro: 'Caruban',
    aranane: 'Atomic !'
  }
  
  constructor() {}

}
