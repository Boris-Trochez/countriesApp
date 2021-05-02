import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {
  countries: Country[] = [];
  term: string = '';
  isError: boolean = false;

  constructor( private countryService: CountryService ) { }

  ngOnInit(): void {
  }

  search( term: string ) {
    this.term = term;
    this.isError = false;
    this.countryService.searchCapital( term )
      .subscribe( countries => {
        this.countries = countries;     
      }, error => {
        this.isError = true;
        this.countries = []
      });
    
  }

  suggestions( event: any) {
    this.isError = false;
  }

}
