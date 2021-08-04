import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TAXIS } from '../config/data';
import { TaxiModel } from '../config/taxi.model';

@Injectable({
  providedIn: 'root',
})
export class TaxiService {
  constructor(private http: HttpClient) {}

  all(): Observable<TaxiModel[]> {
    return this.http.get<TaxiModel[]>('http://localhost:3000/taxis');
  }

  oneById(id: string): Observable<TaxiModel> {
    return this.http.get<TaxiModel>(`http://localhost:3000/taxis/${id}`);
  }

  add(
    taxi: Pick<TaxiModel, 'origin' | 'destination' | 'tarrif'>
  ): Observable<TaxiModel> {
    return this.http.post<TaxiModel>(`http://localhost:3000/taxis`, {
      ...taxi,
    });
  }

  update(taxi: TaxiModel): Observable<TaxiModel> {
    return this.http.patch<TaxiModel>(`http://localhost:3000/taxis`, {
      ...taxi,
    });
  }

  delete(id: string): Observable<TaxiModel[]> {
    return this.http.delete<TaxiModel[]>(`http://localhost:3000/taxis/${id}`);
  }
}
