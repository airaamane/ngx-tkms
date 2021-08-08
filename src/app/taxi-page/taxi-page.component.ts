import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, mergeMap, tap } from 'rxjs/operators';
import { TaxiModel, TaxiModelRequired } from '../config/taxi.model';
import { TaxiService } from '../services/taxi.service';
import { TaxiAPIActions } from '../state/taxis-api.actions';
import { TaxiPageActions } from '../state/taxis.actions';
import { AppState } from '../state/taxis.state';

@Component({
  selector: 'app-taxi-page',
  templateUrl: './taxi-page.component.html',
  styleUrls: ['./taxi-page.component.scss'],
})
export class TaxiPageComponent implements OnInit {
  public taxis$: Observable<TaxiModel[]>;
  public selectedTaxi: TaxiModel | null = null;

  constructor(
    private taxiService: TaxiService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(TaxiPageActions.enter());
    this.taxis$ = this.taxiService
      .all()
      .pipe(
        tap((taxis) =>
          this.store.dispatch(TaxiAPIActions.fetchTaxisSuccess({ taxis }))
        )
      );
  }

  public select(taxi: TaxiModel | null): void {
    this.store.dispatch(
      TaxiPageActions.selectTaxi({ taxiId: taxi?._id ?? null })
    );

    this.taxiService
      .oneById(taxi._id)
      .subscribe((res) => (this.selectedTaxi = res));
  }

  public clear(): void {
    this.selectedTaxi = null;
  }

  public add(taxi: TaxiModelRequired): void {
    this.store.dispatch(TaxiPageActions.addTaxi({ taxi }));
    this.taxis$ = this.taxiService.add(taxi).pipe(
      tap((taxiAdded) =>
        this.store.dispatch(TaxiAPIActions.addTaxiSuccess({ taxi: taxiAdded }))
      ),
      concatMap(() => this.taxiService.all())
    );
  }

  public edit(taxi: TaxiModel): void {
    this.taxis$ = this.taxiService
      .update(taxi)
      .pipe(concatMap(() => this.taxiService.all()));
  }

  public remove(id: string): void {
    this.taxis$ = this.taxiService.delete(id).pipe(
      tap(() => this.clear()),
      mergeMap(() => this.taxiService.all())
    );
  }
}
