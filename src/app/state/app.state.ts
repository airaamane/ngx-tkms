import { ActionReducerMap } from '@ngrx/store';
import { taxisReducer, TaxisState } from './taxis.reducers';

export interface AppState {
  taxis: TaxisState;
}

// verify that we have a reducer per slice of state
export const reducers: ActionReducerMap<AppState> = {
  taxis: taxisReducer,
};
