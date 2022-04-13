import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MetaService } from '@regshop/core/meta/service';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { fetch } from '@nrwl/angular';

type NavigationAction = RouterNavigatedAction;

@Injectable()
export class MetaEffects {
  routerNavigated$ = createEffect(() => {
    return this.action$.pipe(
      ofType(ROUTER_NAVIGATED),
      fetch({
        run: (action: NavigationAction) => {
          const { meta, metaOg } = action.payload.routerState?.data ?? {};
          this.metaService.update(
            {
              url: action.payload.routerState.url,
              ...meta
            },
            metaOg
          );
        },
      })
    );
  });

  constructor(private readonly action$: Actions, private readonly metaService: MetaService) {
  }
}