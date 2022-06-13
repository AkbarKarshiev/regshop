import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'regshop-order-email',
  templateUrl: './order-email.component.html',
  styleUrls: ['./order-email.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderEmailComponent {
  @Input() control!: FormControl;
}
