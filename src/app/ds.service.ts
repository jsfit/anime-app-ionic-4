import { Injectable } from '@angular/core';
import { STORE } from '../models/store';


@Injectable({
  providedIn: 'root'
})
export class DsService {
  DS = STORE;
  constructor() { }

  findAll(query){
    return this.DS.findAll(query);
  }
}
