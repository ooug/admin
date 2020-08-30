import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FirstInteractionRoutingModule} from './first-interaction-routing.module';
import {FirstInteractionComponent} from './first-interaction.component';

@NgModule({
  declarations: [FirstInteractionComponent],
  imports: [CommonModule, FirstInteractionRoutingModule],
})
export class FirstInteractionModule {}
