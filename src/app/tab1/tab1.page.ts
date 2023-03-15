import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Icontact } from '../interfaces/icontact';
import { DbcontactService } from '../services/dbcontact.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private router: Router,
    public db: DbcontactService,
  ) { }

  tambah() {
    this.router.navigateByUrl('add')
  }

  favorite(item: Icontact) {
    item.isFav = !item.isFav;
  }

  edit(item: Icontact) {
    this.router.navigateByUrl('add/' + item.id)
  }

  delete(item: Icontact) {
    this.db.delete(item.isFav)
  }

}
