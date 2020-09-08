import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {ActivityRoutingModule} from './activity-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
  ],
})
export class ActivityModule {}
