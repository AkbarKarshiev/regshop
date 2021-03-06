import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteData } from '@regshop/core/navigation/common';

import { HomePageComponent } from './home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      sitemap: {
        loc: '/',
        priority: '1.0',
      },
      meta: {
        title: $localize`:Home page meta|:Online store Regshop`,
        // eslint-disable-next-line max-len
        description: $localize`:Home page meta|:Regshop t-shirts, tank-tops. Free delivery in Tashkent and all over Uzbekistan when paying on the website.`,
        keywords: $localize`:Home page meta|:online store, t-shirts, tank-tops, regshop`,
      }
    } as Partial<RouteData>
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
