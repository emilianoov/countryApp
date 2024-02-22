import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initalValue: string = '';

  constructor( private countriesServices: CountriesService) {}
  
  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStorage.byCapital.countries;
    this.initalValue = this.countriesServices.cacheStorage.byCapital.term;
  }

  searchByCapital( term: string ):void {

    this.isLoading = true;

    this.countriesServices.searchCapital( term )
      .subscribe( countries  => {
        this.countries = countries;
        this.isLoading = false;
      })

    console.log({term});
        
  }

}
