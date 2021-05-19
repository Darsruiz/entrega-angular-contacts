import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../variables.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts = this.data.contacts

  constructor(private data: VariablesService) {
   }

  ngOnInit() {

    console.log('de contact-list',this.data.contacts);
  }

  delContact(contact) {
    this.data.contacts = this.data.contacts.filter(c => c != contact)
    this.contacts = this.data.contacts
    console.log(this.data.contacts);
  }
}
