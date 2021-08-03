import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiListItemComponent } from './taxi-list-item.component';

describe('TaxiListItemComponent', () => {
  let component: TaxiListItemComponent;
  let fixture: ComponentFixture<TaxiListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
