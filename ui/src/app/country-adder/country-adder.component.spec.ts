import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryAdderComponent } from './country-adder.component';

describe('CountryAdderComponent', () => {
  let component: CountryAdderComponent;
  let fixture: ComponentFixture<CountryAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryAdderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
