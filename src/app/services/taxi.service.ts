import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TAXIS } from '../config/data';
import { TaxiModel } from '../config/taxi.model';

@Injectable({
  providedIn: 'root'
})
export class TaxiService {

  constructor() { }

  all(): Observable<TaxiModel[]> {
    return of(TAXIS);
  }
}
