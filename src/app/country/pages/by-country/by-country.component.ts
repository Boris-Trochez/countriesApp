import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `li {
      cursor: pointer;
    }`
  ]
})
export class ByCountryComponent implements OnInit {
  term: string = '';
  isError: boolean = false;
  countries: Country[] = [];

  suggestedCountries: Country[] = [];
  showSuggestions: boolean = false;
  
  constructor( private countryService: CountryService ) { }

  search( term: string ) {
    this.showSuggestions = false;
    this.isError = false;
    this.term = term;
    this.countryService.searchCountry( term )
      .subscribe( resp => {
        this.countries = resp;
        
      }, err => {
        this.isError = true;
        this.countries = [];
      });
  }

  suggestions( term: string ) {
    this.isError = false;
    this.term = term;
    this.showSuggestions = true;

    this.countryService.searchCountry( term )
      .subscribe( 
        countries => this.suggestedCountries = countries.splice(0,5),
        error => this.suggestedCountries = [
        ]  
      ); 
  }

  ngOnInit(): void {
  }

}
