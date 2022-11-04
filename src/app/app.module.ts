import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QueryService } from './query.service';
import { MaterialDesignModule } from './material-design/material-design.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    FormsModule,
    MaterialDesignModule
  ],
  providers: [QueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
