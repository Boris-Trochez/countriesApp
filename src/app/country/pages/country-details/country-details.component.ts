import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styles: [
  ]
})
export class CountryDetailsComponent implements OnInit {
  country: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.searchCountryByAlpha( id )),
        tap( console.log )
      )
      .subscribe( country => {
        this.country = country;
      });

    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.countryService.searchCountryByAlpha( id )
    //       .subscribe( country => {
    //         console.log(country);
    //       })
    //   })
  }

}
