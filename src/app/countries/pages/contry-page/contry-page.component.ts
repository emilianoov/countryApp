import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-contry-page',
  templateUrl: './contry-page.component.html',
  styles: ``
})
export class ContryPageComponent implements OnInit{

  public country?: Country;

  constructor( 
    private activatedRouter: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ){  }
  ngOnInit(): void {
    this.activatedRouter.params
    .pipe(
      switchMap( ({ id }) => this.countriesService.searchCountryByAlphacode( id ) )
    )
    
      .subscribe( country  => {
        if ( !country){
          return this.router.navigateByUrl('')
        }

        return this.country = country;
        
      });
  }

  

}
