import { Injectable } from '@angular/core';
import { Icontact } from '../interfaces/icontact';

@Injectable({
  providedIn: 'root'
})
export class DbcontactService {

  public contacts: Icontact[] = []
    
  constructor() {
    this.get()
   }

   contactFav() {
    return this.contacts.filter(contact => contact.isFav == true)
   }

   save(contact: Icontact) {
    this.contacts.push(contact)
    this.store()
   }

   favorite(id: any) {
    const index: any = this.contacts.findIndex(contact => contact.id = id)
    this.contacts[index].isFav = !this.contacts[index].isFav
    this.store()
   }

   delete(id: any){
    const index: any = this.contacts.findIndex(contact => contact.id == id)
    this.contacts.splice(index, 1)
    this.store
   }

   store() {
    const contactsString: string = JSON.stringify(this.contacts);
    localStorage.setItem('contacts', contactsString)
   }


   get() {
    const contactsObject: string | any = localStorage.getItem('contacts');

    if (!contactsObject) {
      this.contacts = []
      return
    }

    this.contacts = JSON.parse(contactsObject)

    console.log(this.contacts)
  }
  
}
