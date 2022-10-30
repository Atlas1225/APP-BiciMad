import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { QueryService } from './query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private query : QueryService){}
  test: any = 'nothing';
  array = [{lat: 40.4171107, lng: -3.701998},{lat: 40.42058, lng: -3.7056739},{lat: 40.428362, lng: -3.7020743}]
  center!: google.maps.LatLngLiteral;
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    this.query.query().subscribe((res)=>{
      this.test=res
    })
  }
  onSubmit(){}
}
