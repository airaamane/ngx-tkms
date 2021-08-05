import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SUPPORTED_CITIES } from '../config/data';
import { TaxiModel } from '../config/taxi.model';

@Component({
  selector: 'app-taxi-form',
  templateUrl: './taxi-form.component.html',
  styleUrls: ['./taxi-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxiFormComponent implements OnInit, OnChanges {
  @Input() public taxi: TaxiModel | null;
  @Output() public resetTaxi = new EventEmitter();
  @Output() public addTaxi = new EventEmitter<
    Pick<TaxiModel, 'origin' | 'destination' | 'tarrif'>
  >();
  @Output() public editTaxi = new EventEmitter<TaxiModel>();

  public form: FormGroup;

  public cities = new Set([...SUPPORTED_CITIES].sort());

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      tarrif: [0, Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.taxi.currentValue === null && !changes.taxi?.isFirstChange()) {
      this.form.reset();
    }
    if (changes.taxi?.currentValue && !changes.taxi?.isFirstChange()) {
      const { origin, destination, tarrif } = changes.taxi.currentValue;
      this.form.setValue({ origin, destination, tarrif });
    }
  }

  public submitForm(): void {
    this.taxi
      ? this.editTaxi.emit({ _id: this.taxi._id, ...this.form.value })
      : this.addTaxi.emit({ ...this.form.value });
  }

  public _resetTaxi(): void {
    this.resetTaxi.emit();
  }
}
