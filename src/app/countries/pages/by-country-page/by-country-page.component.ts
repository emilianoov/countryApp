import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';


  constructor( private countriesServices: CountriesService) {}
  
  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStorage.byCountries.countries;
    this.initialValue = this.countriesServices.cacheStorage.byCountries.term;
  }

  searchCountry( term: string ):void {
    this.isLoading = true;

    this.countriesServices.searchCountry( term )
      .subscribe( countries  => {
        this.countries = countries;
        this.isLoading = false;
      })

    console.log({term});
        
  }
}
