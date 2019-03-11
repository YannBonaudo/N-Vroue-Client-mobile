import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfosService {

  constructor() { }

  // Get status of n.v-roue system
  getSystemStatus(){
    return false;
  }

  // Modify status of n.v-roue system
  modifySytemStatus(status){
    console.log (status); 
  }

  // Get Percentage Battery
  getSystemBattery(){
    return 40;
  }

}
