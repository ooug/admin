import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FirstInteractionComponent} from './first-interaction.component';

const routes: Routes = [
  {
    path: '',
    component: FirstInteractionComponent,
  },
];

@NgModule({
  declarations: [FirstInteractionComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstInteractionRoutingModule {}
