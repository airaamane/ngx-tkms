import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiPageComponent } from '../taxi-page.component';

describe('TaxiPageComponent', () => {
  let component: TaxiPageComponent;
  let fixture: ComponentFixture<TaxiPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
