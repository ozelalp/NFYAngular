import { Injectable } from '@angular/core';
import { Country } from './model/model';

@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
  private readonly uri: string = 'http://localhost:5095/country';
  public countryList: Country[];

  constructor() {}

  public async getCountries(): Promise<Country[]> {
    if (!this.countryList) {
      let resp = await fetch(this.uri);
      await resp.json().then((r) => {
        this.countryList = r;
      });
    }

    return this.countryList;
  }
}
