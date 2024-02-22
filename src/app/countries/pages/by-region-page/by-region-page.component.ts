import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})

export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];    
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor( private countriesServices: CountriesService) {}
  
  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStorage.byRegion.countries;
    this.selectedRegion = this.countriesServices.cacheStorage.byRegion.region;
  }

  searchRegion( region: Region ):void {

    this.selectedRegion = region;

    this.isLoading = true;

    this.countriesServices.searchRegion( region )
      .subscribe( countries  => {
        this.countries = countries;
        this.isLoading = false;
      })      
        
  }
}
