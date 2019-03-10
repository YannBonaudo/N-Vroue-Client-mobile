import { Component } from '@angular/core';
import { InfosService } from '../services/infos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public systemActivated = true;
  public systemError = '';

  constructor(private infoService: InfosService) { }

  toggleSystemStatus() {
    // ToggleSystemStatus in InfoService
    this.infoService.modifySytemStatus(this.systemActivated);
      // If success, rien de special
      // If error, display error message
      this.systemError = "Système inaccessible";
      // this.systemActivated = true;

  }

}
