import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../model/model';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css'],
})
export class CountryTableComponent implements OnInit {
  @Input() countryList: Country[];

  constructor() {}

  ngOnInit(): void {}
}
