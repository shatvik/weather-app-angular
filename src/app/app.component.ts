import { Component } from '@angular/core';
import { WeatherapiService } from './services/weatherapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Latiinput:string="";
  Loniinput:string="";
  constructor(private weatherapiservice:WeatherapiService){
    this.weatherapiservice.getWeatherData().subscribe(data=>{
      console.log(data);
    });
  }
  title = 'weatherapp';
}
