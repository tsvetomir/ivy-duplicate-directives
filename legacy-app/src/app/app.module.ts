import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LegacyLibModule } from 'legacy-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LegacyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
