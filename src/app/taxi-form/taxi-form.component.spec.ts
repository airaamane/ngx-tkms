import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiFormComponent } from './taxi-form.component';

describe('TaxiFormComponent', () => {
  let component: TaxiFormComponent;
  let fixture: ComponentFixture<TaxiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
