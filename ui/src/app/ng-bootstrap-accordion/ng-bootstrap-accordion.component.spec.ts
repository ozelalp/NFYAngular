import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapAccordionComponent } from './ng-bootstrap-accordion.component';

describe('NgBootstrapAccordionComponent', () => {
  let component: NgBootstrapAccordionComponent;
  let fixture: ComponentFixture<NgBootstrapAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBootstrapAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
