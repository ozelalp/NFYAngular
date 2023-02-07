import { Component } from '@angular/core';
import { Country, DEFAULTID } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  COUNTRIES: Country[] = [
    {
      id: 1,
      name: 'Russia',
      flag: 'f/f3/Flag_of_Russia.svg',
      area: 17075200,
      population: 146989754,
    },
    {
      id: 2,
      name: 'Canada',
      flag: 'c/cf/Flag_of_Canada.svg',
      area: 9976140,
      population: 36624199,
    },
    {
      id: 3,
      name: 'United States',
      flag: 'a/a4/Flag_of_the_United_States.svg',
      area: 9629091,
      population: 324459463,
    },
    {
      id: 4,
      name: 'China',
      flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
      area: 9596960,
      population: 1409517397,
    },
  ];

  fullName = 'Alper Ozel';
  title = 'NFYAngular';
  selectedCountry?: Country;

  public getCountry(): Country[] {
    return this.COUNTRIES;
  }

  public addCountryOutputEvent(newCountry: Country) {
    if (newCountry.id == DEFAULTID) {
      newCountry.id = Math.max(...this.COUNTRIES.map((o) => o.id)) + 1;
      this.COUNTRIES.push(newCountry);
    } else {
      let ind = this.COUNTRIES.findIndex((f) => f.id == newCountry.id);
      this.COUNTRIES[ind] = newCountry;
      // this.COUNTRIES[ind].name = newCountry.name;
      // this.COUNTRIES[ind].flag = newCountry.flag;
      // this.COUNTRIES[ind].area = newCountry.area;
      // this.COUNTRIES[ind].population = newCountry.population;
    }
  }

  // public addCountry(eventArgs: MouseEvent) {
  //   alert(`${eventArgs.offsetX}`);

  //   let newCountry: Country = {
  //     id: 99999,
  //     name: 'Turkey',
  //     flag: 'TurkishFlag',
  //     area: 15,
  //     population: 10000,
  //   };

  //   this.COUNTRIES.push(newCountry);
  // }

  onSelectCountryEvent(eventArg: number) {
    this.selectedCountry = this.COUNTRIES.find((f) => f.id == eventArg);
  }
}
