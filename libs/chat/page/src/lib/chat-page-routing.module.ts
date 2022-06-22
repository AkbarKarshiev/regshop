import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteData } from '@regshop/core/navigation/common';

import { ChatPageComponent } from './chat-page.component';

const routes: Routes = [
  {
    path: '',
    component: ChatPageComponent,
    data: {
      sitemap: {
        loc: '/support',
        priority: '1.0',
      },
      meta: {
        title: $localize`:Chat meta|:Support | Online store Regshop`,
        description: $localize`:Chat meta|:Ask any question you are interested in by writing a message below.`,
        keywords: $localize`:Chat meta|:support, chat, feedback, regshop`,
      }
    } as Partial<RouteData>
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatPageRoutingModule { }
