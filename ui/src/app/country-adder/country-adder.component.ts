import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Country, DEFAULTID } from '../model/model';

@Component({
  selector: 'app-country-adder',
  templateUrl: './country-adder.component.html',
  styleUrls: ['./country-adder.component.css'],
})
export class CountryAdderComponent implements OnInit, OnChanges {
  @Input() countrySelection?: Country;
  @Output() newCountryEvent = new EventEmitter<Country>();

  inputForm = new FormGroup({
    Id: new FormControl(''),
    Name: new FormControl(''),
    Flag: new FormControl(''),
    Area: new FormControl(''),
    Population: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.countrySelection) {
      this.inputForm.get('Id')?.setValue(this.countrySelection.id);
      this.inputForm.get('Name')?.setValue(this.countrySelection.name);
      this.inputForm.get('Flag')?.setValue(this.countrySelection.flag);
      this.inputForm.get('Area')?.setValue(this.countrySelection.area);
      this.inputForm
        .get('Population')
        ?.setValue(this.countrySelection.population);
    }
  }

  onSubmit() {
    let newC: Country = {
      id: this.countrySelection ? this.countrySelection.id : DEFAULTID,
      name: this.inputForm.value['Name'],
      flag: this.inputForm.value['Flag'],
      area: this.inputForm.value['Area'],
      population: this.inputForm.value['Population'],
    };

    this.newCountryEvent.emit(newC);
    this.countrySelection = undefined;
    this.inputForm.reset();
    // alert(this.inputForm.value);
  }
}
