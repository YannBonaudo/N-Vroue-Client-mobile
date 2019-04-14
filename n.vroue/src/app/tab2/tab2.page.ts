import { Component } from '@angular/core';
import { GPSService } from '../services/gps.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public GPSCoordinate = 'sqdfrf';

  constructor(private GPSService: GPSService) { }

  ngOnInit() {
    this.GPSCoordinate = this.getGPSCoordinate();
  }
  getGPSCoordinate() {
    return this.GPSService.getGPSCoordinate();
  }

}

