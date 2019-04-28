import { Component } from '@angular/core';
import { GPSService } from '../services/gps.service';
import { WeatherService} from '../services/weather.service';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public GPSCoordinate = 'sqdfrf';
  public weather = {};


  constructor(
    private GPSService: GPSService, 
    private WeatherService: WeatherService,
    ) { }

  ngOnInit() {
    this.GPSCoordinate = this.getGPSCoordinate();
    this.weather = this.getWeather();

    mapboxgl.accessToken = 'pk.eyJ1IjoieWFubmJvbmF1ZG8iLCJhIjoiY2p2MTEzcWp1MGxoOTQzbmI4enM4bndkbiJ9.rnYJsW_VoAL3vwvineh_0g';

    const map = new mapboxgl.Map({
      container: 'map',
      center: [4.85, 45.75],
      zoom: 12,
      style: 'mapbox://styles/mapbox/streets-v9'
    });  

    map.on('load', function () {
 
      map.addLayer({
      "id": "points",
      "type": "symbol",
      "source": {
        "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [4.854, 45.754]
              },
              "properties": {
                "title": "Vélo",
                "icon": "bicycle"
              }
            }, {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [4.85, 45.75]
              },
              "properties": {
                "title": "Moi",
                "icon": "information"
              }
            }]
        }
      },
      "layout": {
        "icon-image": "{icon}-15",
        "text-field": "{title}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top"
      }
    });
  });

    console.log (this.weather);
  }

  getGPSCoordinate() {
    return this.GPSService.getGPSCoordinate();
  }

  getWeather() {
    return this.WeatherService.getWeather();
  }
}

