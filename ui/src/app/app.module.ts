import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBootstrapAccordionComponent } from './ng-bootstrap-accordion/ng-bootstrap-accordion.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { CountryAdderComponent } from './country-adder/country-adder.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgBootstrapAccordionComponent,
    CountryTableComponent,
    CountryAdderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
