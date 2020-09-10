import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewslettersComponent} from './newsletters.component';

const routes: Routes = [
  {
    path: '',
    component: NewslettersComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewslettersRoutingModule {}
