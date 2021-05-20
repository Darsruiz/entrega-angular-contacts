import { Component} from '@angular/core';
import { VariablesService } from '../variables.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {

  contacts = this.data.contacts
  showVar: boolean = false;

  constructor(private data: VariablesService) {
   }


  delContact(contact) {
    this.data.contacts = this.data.contacts.filter(c => c != contact)
    this.contacts = this.data.contacts
  }

  newContact() {
    console.log('button working')
  }

  toggleChild(){
    //delete button

    this.showVar = !this.showVar;
  }
}
