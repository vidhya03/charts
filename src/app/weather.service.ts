import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url =
    'https://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22';
  constructor(private _http: HttpClient) {}

  dailyForecast() {
    return this._http.get(this.url).pipe(map(result => result));
  }

  public getJSON() {
    return this._http.get('./assets/city.json').pipe(map(result => result));
  }
}
