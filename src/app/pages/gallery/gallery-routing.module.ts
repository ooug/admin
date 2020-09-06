import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GalleryComponent} from './gallery.component';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
  },
];

@NgModule({
  declarations: [GalleryComponent],
  imports: [RouterModule.forChild(routes),
            MatCardModule,
            MatTabsModule,
          ],
  exports: [RouterModule,
            MatCardModule,
            MatTabsModule,
          ],
})
export class GalleryRoutingModule {}
