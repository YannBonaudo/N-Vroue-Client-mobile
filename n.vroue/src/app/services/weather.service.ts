import { Injectable, APP_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  private lyonIdApi = 6454573;
  private APPID = '97c4d367c8731b06a86ff22d1622e4b5';
  private HTTPurl = 'http://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) { }

  getWeather() : any {
    let weatherInfos = {
      status : [],
      time : [],
      temp : [],
    };
     this.http.get(
      this.HTTPurl + '?id=' + this.lyonIdApi + '&APPID=' + this.APPID)
      .subscribe((res: any) => {

        weatherInfos.status.push(res.list[0].weather[0].description);
        weatherInfos.status.push(res.list[1].weather[0].description);
        weatherInfos.status.push(res.list[2].weather[0].description);

        weatherInfos.time.push(res.list[0].dt_txt.substring(11,16));
        weatherInfos.time.push(res.list[1].dt_txt.substring(11,16));
        weatherInfos.time.push(res.list[2].dt_txt.substring(11,16));

        weatherInfos.temp.push(Math.round(res.list[0].main.temp - 273.15 ));
        weatherInfos.temp.push(Math.round(res.list[1].main.temp - 273.15 ));
        weatherInfos.temp.push(Math.round(res.list[2].main.temp - 273.15 ));
      });
    
    return weatherInfos;
  }

}
