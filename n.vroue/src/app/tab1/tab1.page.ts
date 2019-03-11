import { Component, OnInit } from '@angular/core';
import { InfosService } from '../services/infos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit  {

  public systemActivated = true;
  public systemError = '';
  public systemBattery =0;

  constructor(private infoService: InfosService) { }

  ngOnInit() {
      this.systemBattery = this.getSystemBattery();
      this.systemActivated = this.getSystemStatus();
  }
  toggleSystemStatus() {
    // ToggleSystemStatus in InfoService
    this.infoService.modifySytemStatus(this.systemActivated);
      // If success, rien de special
      // If error, display error message
      this.systemError = "Système inaccessible";
      // this.systemActivated = true;

  }
  getSystemBattery() {
    return this.infoService.getSystemBattery();
  }
  getSystemStatus() {
    return this.infoService.getSystemStatus();
  }

}
