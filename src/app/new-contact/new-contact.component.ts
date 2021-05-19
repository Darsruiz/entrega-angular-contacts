import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VariablesService } from '../variables.service';

interface Contact {
    name: String;
    email: String;
    phoneNumber: String;
    image: String ;
}

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {
  /* contacts: Object[];
 */


  newContact: Contact = {
    name: "",
    email: "",
    phoneNumber: "",
    image: "",
}


  constructor(private data: VariablesService) {
  }

  ngOnInit(): void {
    console.log('de new-contact',this.data.contacts);
  }

  addContact(){
    if (this.newContact.image == "")
    {this.newContact.image = "http://svgur.com/i/7aS.svg"}

    {
    let tempContact = {...this.newContact}
      this.data.contacts.push(tempContact)
      // add contact to contacts list

      console.log('contacts',this.data.contacts);

      this.clearInputs()
    }

    // clear inputs
  }
  clearInputs() {
    this.newContact.name = ""
    this.newContact.email = ""
    this.newContact.phoneNumber = ""
    this.newContact.image = ""
  }
}
