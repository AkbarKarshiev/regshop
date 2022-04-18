import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[tablet]'
})
export class TabletDirective {
  private size!: string | number | undefined;

  @Input() set tablet(size: string | number | undefined) {
    this.size = size;
  }

  @HostBinding('class.tablet') get isTablet(): boolean {
    return typeof this.size === 'number' || typeof this.size === 'string';
  }
}
