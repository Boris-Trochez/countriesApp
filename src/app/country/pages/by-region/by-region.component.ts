import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
    `button {
      margin-right : 5px;
    }`
  ]
})
export class ByRegionComponent implements OnInit {
  regions: string[] = ['americas', 'europe', 'asia', 'oceania', 'africa'];
  activatedRegion: string = '';
  countries: Country[] = [];
  
  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
  }

  getClassCss( region: string ): string {
    return ( this.activatedRegion === region ) 
      ? 'btn btn-primary' 
      : 'btn btn-outline-primary'
  }

  searchRegion( region ) {
    if( region === this.activatedRegion ) { return; }

    this.activatedRegion = region;
    this.countries = [];

    this.countryService.searchRegion( region )
      .subscribe( countries => {
        console.log(countries)
        this.countries = countries;
      });
  }

}
