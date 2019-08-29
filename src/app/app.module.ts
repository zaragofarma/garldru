import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LightboxModule } from "ngx-lightbox";

import { AppComponent } from './app.component';
import { VerticalSliderComponent } from './global/vertical-slider/vertical-slider.component';
import { HorizontalSliderComponent } from './global/horizontal-slider/horizontal-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    VerticalSliderComponent,
    HorizontalSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
