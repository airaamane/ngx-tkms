import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaxiModel } from '../config/taxi.model';

@Component({
  selector: 'app-taxi-list',
  templateUrl: './taxi-list.component.html',
  styleUrls: ['./taxi-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaxiListComponent implements OnInit {
  @Input() taxis: TaxiModel[];
  @Input() selectedTaxiId: string;

  @Output() public selectTaxi = new EventEmitter<TaxiModel>();

  constructor() {}

  ngOnInit(): void {}

  public _selectTaxi(taxi: TaxiModel): void {
    this.selectTaxi.emit(taxi);
  }
}
