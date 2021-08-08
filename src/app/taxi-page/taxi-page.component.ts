import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TaxiModel, TaxiModelRequired } from '../config/taxi.model';
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
    this.getTaxis();
  }

  public select(taxi: TaxiModel | null): void {
    this.taxiService
      .oneById(taxi._id)
      .subscribe((res) => (this.selectedTaxi = res));
  }

  public getTaxis(): void {
    this.taxis$ = this.taxiService.all();
  }

  public clear(): void {
    this.selectedTaxi = null;
  }

  public add(taxi: TaxiModelRequired): void {
    this.taxiService
      .add(taxi)
      .pipe(
        tap(() => this.clear()),
        tap(() => this.getTaxis())
      )
      .subscribe();
  }

  public edit(taxi: TaxiModel): void {
    this.taxiService
      .update(taxi)
      .pipe(tap(() => this.getTaxis()))
      .subscribe();
  }

  public remove(id: string): void {
    this.taxiService
      .delete(id)
      .pipe(
        tap(() => this.clear()),
        tap(() => this.getTaxis())
      )
      .subscribe();
  }
}
