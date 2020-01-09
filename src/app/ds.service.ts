import { Injectable } from '@angular/core';
import { STORE } from '../models/store';


@Injectable({
  providedIn: 'root'
})
export class DsService {
  constructor() { 
    
  }

  public static inject(){
    return STORE;
  }
}
