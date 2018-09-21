import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url =
    'api/';
  constructor(private _http: HttpClient) {}

  dailyForecast() {

    return this._http.get(this.url).pipe(map(result => result));
  }
}
