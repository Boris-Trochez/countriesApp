import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from '@angular/router';
import { ByCountryComponent } from './country/pages/by-country/by-country.component';
import { ByRegionComponent } from './country/pages/by-region/by-region.component';
import { ByCapitalComponent } from './country/pages/by-capital/by-capital.component';
import { CountryDetailsComponent } from './country/pages/country-details/country-details.component';

const routes: Routes  = [
    {
        path: '',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: ByRegionComponent,
    },
    {
        path: 'capital',
        component: ByCapitalComponent
    },
    {
        path: 'countryDetail/:id',
        component: CountryDetailsComponent,
    },
    {
        path: '**',
        redirectTo: '',
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes) 
    ],
    exports:[
        RouterModule
    ]
})

//forRoot(routes)  --> because they are the main routes in the application. can not exit more than one .forRoute();
export class AppRoutingModule {}