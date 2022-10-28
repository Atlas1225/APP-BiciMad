import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  array = [{lat: 40.4171107, lng: -3.701998},{lat: 40.42058, lng: -3.7056739},{lat: 40.428362, lng: -3.7020743}]
  center!: google.maps.LatLngLiteral;
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
}
