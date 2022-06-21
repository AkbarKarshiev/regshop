import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteData } from '@regshop/core/navigation/common';

import { TermsPageComponent } from './terms-page.component';

const routes: Routes = [
  {
    path: '',
    component: TermsPageComponent,
    data: {
      siteMap: {
        loc: '/terms',
        priority: '1.0'
      },
      meta: {
        title: $localize`:Terms page meta|:Terms | Regshop`,
        description: $localize`:Terms page meta|:Agreement on the terms of sale of goods of regshop.`,
        keywords: $localize`:Terms page meta|:terms, private and confidential, regshop`,
      }
    } as Partial<RouteData>
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsPageRoutingModule { }
