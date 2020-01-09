import { Component } from '@angular/core';
import { DsService } from '../ds.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  value1: number;
  percentage: number;
  value2: number;
  value21: number;
  percentage2: number;
  value22: number;
  constructor(private store: DsService) {
    store.findAll("user").then((d)=>{
      console.log(d)
    }) 
  
  }

  calculateOnChange(curPoint){
    switch(curPoint){
      case '0':
      case '1':
        this.value2 = parseFloat((this.value1/(1-(this.percentage/100))).toFixed(2));
        break;
      case '2':
        let a =  ((this.value1/this.value2));
        this.percentage = parseFloat(((1-a)*100).toFixed(4));
        break;
        
    }
  }

  calculateOnChange2(curPoint){
    switch(curPoint){
      case '0':
      case '1':
        this.value22 = parseFloat((this.value21 + this.value21*(this.percentage2/100)).toFixed(2));
        break;
      case '2':
        let a =  ((this.value22- this.value21)/this.value21);
        this.percentage2 = parseFloat(((a)*100).toFixed(6));
        
        break;
        
    }
  }

}
