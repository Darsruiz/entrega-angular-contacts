import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../variables.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  contacts = this.data.contacts

  favorites = this.contacts.slice(0,3)

  constructor(private data: VariablesService) { }

  ngOnInit(): void {
    console.log(this.favorites);
  }

}
