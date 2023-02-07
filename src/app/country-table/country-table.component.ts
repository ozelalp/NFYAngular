import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Country } from '../model/model';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css'],
})
export class CountryTableComponent implements OnInit {
  @Input() countryList: Country[];
  @Output() selectCountryEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  onDoubleClick(eventArg: number) {
    this.selectCountryEvent.emit(eventArg);
  }
}
