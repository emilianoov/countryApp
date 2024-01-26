import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ContryPageComponent } from './pages/contry-page/contry-page.component';
import { ContriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    ContryPageComponent
  ],
  imports: [
    CommonModule,
    ContriesRoutingModule,
    SharedModule
  ]
})
export class CountriesModule { }
