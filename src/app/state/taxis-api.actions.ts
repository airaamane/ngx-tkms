import { createAction, props } from '@ngrx/store';
import { TaxiModel } from '../config';

export const fetchTaxisSuccess = createAction(
  '[Taxis API] Fetch taxis success',
  props<{
    taxis: TaxiModel[];
  }>()
);

export const addTaxiSuccess = createAction(
  '[Taxis API] Add taxi success',
  props<{
    taxi: TaxiModel;
  }>()
);

// TODO handle failure

export const TaxiAPIActions = {
  fetchTaxisSuccess,
  addTaxiSuccess
};
