import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icontact } from '../interfaces/icontact';
import { DbcontactService } from '../services/dbcontact.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(public router: Router, public db: DbcontactService) {}

  tambah() {
    this.router.navigateByUrl('add');
  }

  favorite(item: Icontact) {
    item.isFav = !item.isFav;
  }

  delete(item: Icontact) {
    this.db.delete(!item.id)
  }
}
