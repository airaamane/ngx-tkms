import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-taxi-list-item',
  templateUrl: './taxi-list-item.component.html',
  styleUrls: ['./taxi-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaxiListItemComponent implements OnInit {
  @Input() public origin: string;
  @Input() public destination: string;
  @Input() public tarrif: number;
  @Input() public selected: boolean;




  constructor() {}

  ngOnInit(): void {}

}
