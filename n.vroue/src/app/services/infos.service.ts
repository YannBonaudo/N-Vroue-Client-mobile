import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfosService {

  constructor() { }

  // Get status of n.v-roue system
  getSystemStatus(): boolean {
    return false;
  }

  // Modify status of n.v-roue system
  modifySytemStatus(status) : void {
    console.log (status); 
  }

  // Get Percentage Battery
  getSystemBattery() : number {
    return 40;
  }

}
