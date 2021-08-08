import { createReducer, on } from '@ngrx/store';
import { TaxiModel } from '../config';
import { TaxiAPIActions } from './taxis-api.actions';
import { TaxiPageActions } from './taxis.actions';

export interface TaxisState {
  taxis: TaxiModel[];
  selectedTaxiId: string | null;
}

export const taxisInitialState: TaxisState = {
  taxis: [],
  selectedTaxiId: null,
};

export const taxisReducer = createReducer(
  taxisInitialState,
  on(
    TaxiPageActions.enter,
    TaxiPageActions.clearSelctedTaxi,
    (state, action) => {
      return {
        ...state,
        selectedTaxiId: null,
      };
    }
  ),
  on(TaxiPageActions.selectTaxi, (state, action) => {
    return {
      ...state,
      selectedTaxiId: action.taxiId,
    };
  }),
  on(TaxiAPIActions.fetchTaxisSuccess, (state, action) => {
    return {
      ...state,
      taxis: action.taxis,
    };
  }),
  on(TaxiAPIActions.addTaxiSuccess, (state, action) => {
    return {
      ...state,
      taxis: [...state.taxis, action.taxi],
    };
  })
);
