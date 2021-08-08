export interface TaxiModel {
  _id: string;
  origin: string;
  destination: string;
  tarrif: number;
}

export type TaxiModelRequired = Pick<TaxiModel, 'origin' | 'destination' | 'tarrif'>;
