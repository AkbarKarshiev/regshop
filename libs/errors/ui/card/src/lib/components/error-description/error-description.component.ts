import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'regshop-error-description',
  templateUrl: './error-description.component.html',
  styleUrls: ['./error-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorDescriptionComponent {}
