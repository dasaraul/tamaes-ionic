import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Icontact } from '../../interfaces/icontact';
import { DbcontactService } from '../../services/dbcontact.service';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.page.html',
  styleUrls: ['./add-contact.page.scss'],
})
export class AddContactPage implements OnInit {

  contact: Icontact | any = {
    name: '',
    address: '',
    email: '',
    gender: 1,
    telp: '',
    isFav: false,
  }

  isAdd: boolean = true

  constructor(
    public navCtrl: NavController,
    public route:ActivatedRoute,
    public db: DbcontactService,
  ) { 

    const id: any = this.route.snapshot.paramMap.get('id');

    if (!id) return

    this.contact = this.db.contacts.find(contact => contact.id == id)
    this.isAdd = false
    
  }

  ngOnInit() {}

  save() {

    if (this.isAdd == true) {
      this.contact.id = self.crypto.randomUUID();
      this.db.save(this.contact)
    }

    this.navCtrl.back();

   }

}
