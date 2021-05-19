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
    image: "http://svgur.com/i/7aS.svg",
}

  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(){
    if (this.newContact.image == "")
    {this.newContact.image = "http://svgur.com/i/7aS.svg"}


    {
    let tempContact = {...this.newContact}
      contactList.push(tempContact)
      // add contact to contacts list

      console.log('contactList',contactList);

      this.clearInputs()
  }
  }
  delContact(contact) {
    this.contacts = this.contacts.filter(c => c != contact)
  }

  // clear inputs
  clearInputs() {
    this.newContact.name = ""
    this.newContact.email = ""
    this.newContact.phoneNumber = ""
    this.newContact.image = ""
  }
}
