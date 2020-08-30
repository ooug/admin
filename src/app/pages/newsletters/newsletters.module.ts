import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewslettersRoutingModule} from './newsletters-routing.module';
import {NewslettersComponent} from './newsletters.component';

@NgModule({
  declarations: [NewslettersComponent],
  imports: [CommonModule, NewslettersRoutingModule],
})
export class NewslettersModule {}
