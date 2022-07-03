import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'regshop-product-sizes',
  templateUrl: './product-sizes.component.html',
  styleUrls: ['./product-sizes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSizesComponent {
  @Input() sizes!: string[];
  @Input() control!: FormControl;

  active!: string;

  onSelect(size: string): void {
    this.control.patchValue(size);
    this.active = size;
  }
}
