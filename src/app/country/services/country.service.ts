import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  baseUrl: string = 'https://restcountries.eu/rest/v2';
  

  get httpParams () {
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');
  }

  constructor( private http: HttpClient ) { }

  searchCountry( term: String ): Observable<Country[]> {
    const url = `name/${ term }`
    return this.http.get<Country[]>(`${this.baseUrl}/${ url }`, { params: this.httpParams });
  }

  searchCapital( term: string ): Observable<Country[]> {
    const url = `${ this.baseUrl }/capital/${ term }`;
    return this.http.get<Country[]>( url,  { params: this.httpParams } );
  }

  searchCountryByAlpha( id: string ): Observable<Country> {
    const url = `${this.baseUrl}/alpha/${id}`
    return this.http.get<Country>( url );
  }

  searchRegion( region: string ): Observable<Country[]> {
    const url = `${this.baseUrl}/region/${region}`
    return this.http.get<Country[]>( url,  { params: this.httpParams } );
  }

}
