import { Directive } from '@angular/core';

import { DestroyService } from '@regshop/core/utils/destroy';

@Directive({
  selector: '[regshopExtractTouched]',
  providers: [DestroyService]
})
export class ExtractTouchedDirective {

  constructor() { }

}
