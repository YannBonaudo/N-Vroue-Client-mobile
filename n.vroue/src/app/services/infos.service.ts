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

    // Get Km Number
    getKmNumber() : number {
      return 1000;
    }

    // Get Notifications
    getNotifications() : object[] {
      return [{ type:   'Alerte',  
        date:   '07/02',
        description: 'fsqokfpqosf' },
        { type:   'Stop',  
        date:   '07/04',
        description: 'fqds' }
      ];
    }


}
