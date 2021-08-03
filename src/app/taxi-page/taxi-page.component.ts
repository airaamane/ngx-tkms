import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaxiModel } from '../config/taxi.model';
import { TaxiService } from '../services/taxi.service';

@Component({
  selector: 'app-taxi-page',
  templateUrl: './taxi-page.component.html',
  styleUrls: ['./taxi-page.component.scss'],
})
export class TaxiPageComponent implements OnInit {
  public taxis$: Observable<TaxiModel[]>;
  public selectedTaxi: TaxiModel | null = null;

  constructor(private taxiService: TaxiService) {}

  ngOnInit(): void {
    this.taxis$ = this.taxiService.all();
  }

  public selectTaxi(taxi: TaxiModel | null): void {
    if (taxi === null) {
      this.selectedTaxi = null;
    } else { this.selectedTaxi = { ...taxi }; }
  }
}
