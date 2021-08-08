import { createAction, props } from '@ngrx/store';
import { TaxiModelRequired } from '../config';

const enter = createAction('[Taxis Page] Enter');

const addTaxi = createAction(
  '[Taxis Page] Add taxi',
  props<{ taxi: TaxiModelRequired }>()
);

const selectTaxi = createAction(
  '[Taxis Page] Select taxi',
  props<{ taxiId: string | null }>()
);

// TODO handle edit and delete

export const TaxiPageActions = {
  enter,
  addTaxi,
  selectTaxi,
};
