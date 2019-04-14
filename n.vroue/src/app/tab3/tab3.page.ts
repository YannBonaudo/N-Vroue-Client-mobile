import { Component } from '@angular/core';
import { InfosService } from '../services/infos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public kmNumber = 0;

  public notifications : object[] = [];

  constructor(private infoService: InfosService) { }

  ngOnInit(): void {
      this.kmNumber = this.getKmNumber();
      this.notifications = this.getNotifications();
  }    
  getKmNumber(): number {
    return this.infoService.getKmNumber();
  }

  getNotifications(): object[] {
    return this.infoService.getNotifications();
  }
}
