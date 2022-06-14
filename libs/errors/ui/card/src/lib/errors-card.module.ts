import { NgModule } from '@angular/core';

import { ErrorCardComponent } from './error-card.component';
import { ErrorCodeModule } from './components/error-code/error-code.module';
import { ErrorDescriptionModule } from './components/error-description/error-description.module';
import { ErrorLinksModule } from './components/error-links/error-links.module';
import { ErrorMessageModule } from './components/error-message/error-message.module';
import { ErrorTitleModule } from './components/error-title/error-title.module';
import { ErrorCodeComponent } from './components/error-code/error-code.component';
import { ErrorDescriptionComponent } from './components/error-description/error-description.component';
import { ErrorLinksComponent } from './components/error-links/error-links.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ErrorTitleComponent } from './components/error-title/error-title.component';

@NgModule({
  imports: [ErrorCodeModule, ErrorDescriptionModule, ErrorLinksModule, ErrorMessageModule, ErrorTitleModule],
  declarations: [ErrorCardComponent],
  exports: [
    ErrorCardComponent,
    ErrorCodeComponent,
    ErrorDescriptionComponent,
    ErrorLinksComponent,
    ErrorMessageComponent,
    ErrorTitleComponent
  ]
})
export class ErrorsCardModule {}
