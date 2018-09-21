import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'charts';
  chart = []; // This will hold our charts info

  constructor(private _weather: WeatherService) {}
  public ngOnInit() {
    this._weather.dailyForecast().subscribe(res => {
      // console.log(res);

      let temp_max = res['list'].map(reslist => reslist.main.temp_max);
      let temp_min = res['list'].map(reslist => reslist.main.temp_min);
      let alldates = res['list'].map(reslist => reslist.dt);

      let weatherDates = [];
      alldates.forEach(iter => {
        let jsdate = new Date(iter * 1000);
        weatherDates.push(
          jsdate.toLocaleTimeString('en', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })
        );
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: weatherDates,
          datasets: [
            {
              data: temp_max,
              borderColor: '#3cba9f',
              fill: false
            },
            {
              data: temp_min,
              borderColor: '#ffcc00',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      });
    });
  }
}
