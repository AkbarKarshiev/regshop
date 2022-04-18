import { NgModule } from '@angular/core';

import { ColumnModule } from './components/column/column.module';
import { ColumnComponent } from './components/column/column.component';
import { RowModule } from './components/row/row.module';
import { RowComponent } from './components/row/row.component';
import { HandsetModule } from './directives/handset/handset.module';
import { HandsetDirective } from './directives/handset/handset.directive';
import { TabletModule } from './directives/tablet/tablet.module';
import { TabletDirective } from './directives/tablet/tablet.directive';
import { WebModule } from './directives/web/web.module';
import { WebDirective } from './directives/web/web.directive';

@NgModule({
  imports: [ColumnModule, RowModule, HandsetModule, TabletModule, WebModule],
  exports: [ColumnComponent, RowComponent, HandsetDirective, TabletDirective, WebDirective]
})
export class GridModule {}
