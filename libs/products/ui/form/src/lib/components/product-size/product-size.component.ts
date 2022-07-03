import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'regshop-product-size',
  templateUrl: './product-size.component.html',
  styleUrls: ['./product-size.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSizeComponent {
  @Input() control!: FormControl;
  @Input() sizes: string[] = [];
}
