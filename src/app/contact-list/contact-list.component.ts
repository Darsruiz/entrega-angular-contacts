import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

interface Contact {
    name: String;
    email: String;
    phoneNumber: String;
    image: String ;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];

  newContact: Contact = {
    name: "juan",
    email: "@",
    phoneNumber: "String",
    image: "String",
}

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    if (this.newContact.name != "") {
      contactList.push(this.newContact)
      // add contact to contacts list
      // clear inputs

      this.newContact.name = ""
      this.newContact.email = ""
      this.newContact.phoneNumber = ""
      this.newContact.image = ""
    } else {
      alert("please input stuff")
    }

  }

}
