import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'regshop-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselSlideComponent {
  @Input() image!: string;
  @Input() active = false;
  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}