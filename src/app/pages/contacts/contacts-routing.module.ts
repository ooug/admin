import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContactsComponent} from './contacts.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
