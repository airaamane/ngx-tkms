import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TaxiModel } from '../config/taxi.model';

@Component({
  selector: 'app-taxi-list',
  templateUrl: './taxi-list.component.html',
  styleUrls: ['./taxi-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxiListComponent implements OnInit {
  @Input() taxis: TaxiModel[];
  @Input() selectedTaxiId: string;

  @Output() public selectTaxi = new EventEmitter<TaxiModel>();
  @Output() public removeTaxi = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public _selectTaxi(taxi: TaxiModel): void {
    this.selectTaxi.emit(taxi);
  }

  public _removeTaxi(taxiId: string): void {
    this.removeTaxi.emit(taxiId);
  }
}
