import { Injectable } from '@angular/core';
import contacts from './contacts';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {

  contacts = contacts;

  constructor() { }
}
