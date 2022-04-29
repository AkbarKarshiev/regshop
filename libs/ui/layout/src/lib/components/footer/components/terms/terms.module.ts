import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkModule } from '@regshop/ui/link';
import { RouterModule } from '@angular/router';
import { TermsComponent } from './terms.component';
import { NavigationPipesModule } from '@regshop/core/navigation/ui/pipes';



@NgModule({
  declarations: [TermsComponent],
  imports: [CommonModule, LinkModule, RouterModule, NavigationPipesModule],
  exports: [TermsComponent]
})
export class TermsModule { }
