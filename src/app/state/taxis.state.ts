import { TaxiModel } from '../config';

export interface AppState {
  taxis: TaxiModel[];
  selectedTaxiId: string;
}

export const initialState: AppState = {
  taxis: [],
  selectedTaxiId: null,
};
