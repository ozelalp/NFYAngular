import { Injectable } from '@angular/core';
import { Country } from './model/model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryApiHttpService {
  private readonly uri: string = 'http://localhost:5095/country';
  public countryList: Country[];

  constructor(private http: HttpClient) {}

  public getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.uri);
  }

  public getCountryById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.uri}/${id}`);
  }

  public addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.uri, country).pipe(
      map((r) => r),
      catchError(this.handleErrorObservable)
    );
  }

  public updateCountry(country: Country): Observable<Country> {
    return this.http.put<Country>(this.uri, country);
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
