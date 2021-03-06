import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { NavigationLink, NavigationPaths, PATHS } from '@regshop/core/navigation/common';

export function getLinks(paths: NavigationPaths): NavigationLink[] {
  return [
    {
      route: paths.home,
      label: 'home',
      routerLinkActiveOptions: {
        exact: true,
      },
    },
    {
      route: paths.cart,
      label: 'shopping_basket',
    },
    {
      route: paths.support,
      label: 'chat',
    },
    {
      route: paths.terms,
      label: 'help',
    },
  ];
}

@Component({
  selector: 'regshop-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  links!: NavigationLink[];

  constructor(@Inject(PATHS) private readonly paths: NavigationPaths) { }

  ngOnInit(): void {
    this.links = getLinks(this.paths)
  }

  trackByFn(index: number, link: NavigationLink): string {
    return link.route;
  }
}
