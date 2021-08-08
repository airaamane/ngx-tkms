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

const clearSelctedTaxi = createAction(
  '[Taxis Page] Clear selected taxi'
);

// TODO handle edit and delete

export const TaxiPageActions = {
  enter,
  addTaxi,
  selectTaxi,
  clearSelctedTaxi
};
