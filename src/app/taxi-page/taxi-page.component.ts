import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
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

  public select(taxi: TaxiModel | null): void {
    if (taxi === null) {
      this.selectedTaxi = null;
    } else {
      this.taxiService
        .oneById(taxi._id)
        .subscribe((res) => (this.selectedTaxi = res));
    }
  }

  public add(taxi: Pick<TaxiModel, 'origin' | 'destination' | 'tarrif'>): void {
    this.taxis$ = this.taxiService.add(taxi).pipe(
      tap(() => this.select(null)),
      switchMap(() => this.taxiService.all())
    );
  }

  public edit(taxi: TaxiModel): void {
    this.taxis$ = this.taxiService
      .update(taxi)
      .pipe(switchMap(() => this.taxiService.all()));
  }

  public remove(id: string): void {
    this.taxis$ = this.taxiService.delete(id).pipe(
      tap(() => this.select(null)),
      switchMap(() => this.taxiService.all())
    );
  }
}
