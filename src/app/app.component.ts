import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { QueryService } from './query.service';
import { Responsedis } from './interfaces/Responsedis';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private query : QueryService){}
  queryText: string = '';
  center!: google.maps.LatLngLiteral;
  array: google.maps.LatLngLiteral[]=[];
  drop =google.maps.Animation.DROP;
  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
  }
  onSubmit(){
    const text = 'query=PREFIX%20ns0%3A%20%3Chttp%3A%2F%2Fbicimad.com%2Fgroup07%2Fproperty%23%3E%20%0ASELECT%20%3Festacion%20%3Flat%20%3Flng%20WHERE%20%7B%0A%20%20%3Festacion%20ns0%3Atiene_distrito%20%3Fdistrito.%0A%20%20%3Fdistrito%20ns0%3Anombre_distrito%20%22'+this.queryText+'%22.%0A%20%20%3Festacion%20ns0%3Atiene_long%20%3Flng.%0A%20%20%3Festacion%20ns0%3Atiene_lat%20%3Flat.%0A%7D%20'
    this.query.query(text).subscribe((res)=>{
      this.array= []
      res.results.bindings.forEach(element => {
        this.array.push({lat:Number(element.lat.value), lng: Number(element.lng.value)})
      });
      if(this.array.length>1)
        this.center=this.array[0];
    })
  }
}
