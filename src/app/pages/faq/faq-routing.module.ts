import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FaqComponent} from './faq.component';

const routes: Routes = [
  {
    path: '',
    component: FaqComponent,
  },
];

@NgModule({
  declarations: [FaqComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqRoutingModule {}
