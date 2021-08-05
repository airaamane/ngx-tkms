import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TAXIS } from '../config/data';
import { TaxiModel } from '../config/taxi.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaxiService {
  constructor(private http: HttpClient) {}

  all(): Observable<TaxiModel[]> {
    return this.http
      .get<TaxiModel[]>(`${environment.base_url}`)
      .pipe(map((res) => res.reverse()));
  }

  oneById(id: string): Observable<TaxiModel> {
    return this.http.get<TaxiModel>(`${environment.base_url}/${id}`);
  }

  add(
    taxi: Pick<TaxiModel, 'origin' | 'destination' | 'tarrif'>
  ): Observable<TaxiModel> {
    return this.http.post<TaxiModel>(`${environment.base_url}`, {
      ...taxi,
    });
  }

  update(taxi: TaxiModel): Observable<TaxiModel> {
    return this.http.patch<TaxiModel>(`${environment.base_url}`, {
      ...taxi,
    });
  }

  delete(id: string): Observable<TaxiModel[]> {
    return this.http.delete<TaxiModel[]>(`${environment.base_url}/${id}`);
  }
}
