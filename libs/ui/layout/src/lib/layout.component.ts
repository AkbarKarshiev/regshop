import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { LayoutService } from '@regshop/core/layout/service';

@Component({
  selector: 'regshop-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  readonly breakpoints = Breakpoints;

  layoutTypes$!: Observable<string>

  constructor(private readonly layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutTypes$ = this.layoutService.layoutType$;
  }
}
