import { TaxiModel } from './taxi.model';
import { v4 as uuidv4 } from 'uuid';

export const TAXIS: TaxiModel[] = [
  {
    _id: uuidv4(),
    origin: 'Fez',
    destination: 'Kenitra',
    tarrif: 120,
  },
  {
    _id: uuidv4(),
    origin: 'Laayoune',
    destination: 'Agadir',
    tarrif: 380,
  },
  {
    _id: uuidv4(),
    origin: 'Rabat',
    destination: 'Dakhla',
    tarrif: 540,
  },
  {
    _id: uuidv4(),
    origin: 'Sidi Kacem',
    destination: 'Marrakech',
    tarrif: 200,
  },
  {
    _id: uuidv4(),
    origin: 'Tantan',
    destination: 'Howara',
    tarrif: 315,
  },
  {
    _id: uuidv4(),
    origin: 'Oujda',
    destination: 'Tanger',
    tarrif: 185,
  },
  {
    _id: uuidv4(),
    origin: 'Tiffelt',
    destination: 'Errachidia',
    tarrif: 460,
  },
  {
    _id: uuidv4(),
    origin: 'Taroudant',
    destination: 'Tata',
    tarrif: 85,
  },
  {
    _id: uuidv4(),
    origin: 'Ifrane',
    destination: 'Meknes',
    tarrif: 105,
  },
  {
    _id: uuidv4(),
    origin: 'Settat',
    destination: 'Casablanca',
    tarrif: 80,
  },
  {
    _id: uuidv4(),
    origin: 'Berchid',
    destination: 'Tetouan',
    tarrif: 445,
  },
  {
    _id: uuidv4(),
    origin: 'Smara',
    destination: 'Laayoune',
    tarrif: 125,
  },
  {
    _id: uuidv4(),
    origin: 'Boulmane',
    destination: 'Sale',
    tarrif: 260,
  },
  {
    _id: uuidv4(),
    origin: 'Meknes',
    destination: 'Ouarzazate',
    tarrif: 650,
  },
  {
    _id: uuidv4(),
    origin: 'Azrou',
    destination: 'Figuig',
    tarrif: 385,
  },
  {
    _id: uuidv4(),
    origin: 'Fez',
    destination: 'Casablanca',
    tarrif: 250,
  },
  {
    _id: uuidv4(),
    origin: 'Kalat Sraghna',
    destination: 'Chefchaouen',
    tarrif: 350,
  },
];

// export const getSupportedOrigins = new Set([
//   ...TAXIS.map((taxi) => taxi.origin),
// ]);
// export const getSupportedDestinations = new Set([
//   ...TAXIS.map((taxi) => taxi.destination),
// ]);
export const SUPPORTED_CITIES = [
  ...TAXIS.map((taxi) => taxi.origin),
  ...TAXIS.map((taxi) => taxi.destination),
];
