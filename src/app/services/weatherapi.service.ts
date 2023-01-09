import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  private messageSource = new BehaviorSubject<string>("any");
  currentMess = this.messageSource.asObservable();
  constructor(private http:HttpClient) { }
  changeMessage(message:string){
    this.messageSource.next(message);
  }
  getWeatherData(): Observable<Object>{
    let headers = new HttpHeaders().set('X-RapidAPI-Key','930cca5a2bmshb01bada313f6500p1442b2jsnf4ca7ea43620')
    .set('X-RapidAPI-Host','weatherbit-v1-mashape.p.rapidapi.com');
    let apiUrl = "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon="+this.currentMess+"&lat=19.075&units=metric&lang=en";
    return this.http.get(apiUrl,{headers});
  }
}

