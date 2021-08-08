import { createAction, props } from '@ngrx/store';
import { TaxiModel } from '../config';

export const fetchTaxisSuccess = createAction(
  '[Taxis API] Fetch taxis success',
  props<{
    taxis: TaxiModel[];
  }>()
);

// TODO handle failure

export const TaxiAPIActions = {
  fetchTaxisSuccess,
};
