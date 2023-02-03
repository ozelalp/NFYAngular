import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Country } from '../model/model';

@Component({
  selector: 'app-country-adder',
  templateUrl: './country-adder.component.html',
  styleUrls: ['./country-adder.component.css'],
})
export class CountryAdderComponent implements OnInit {
  @Output() newCountryEvent = new EventEmitter<Country>();

  inputForm = new FormGroup({
    Name: new FormControl(''),
    Flag: new FormControl(''),
    Area: new FormControl(''),
    Population: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    let newC: Country = {
      name: this.inputForm.value['Name'],
      flag: this.inputForm.value['Flag'],
      area: this.inputForm.value['Area'],
      population: this.inputForm.value['Population'],
    };

    this.newCountryEvent.emit(newC);

    // alert(this.inputForm.value);
  }
}
