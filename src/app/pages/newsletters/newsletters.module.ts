import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewslettersRoutingModule} from './newsletters-routing.module';
import {NewslettersComponent} from './newsletters.component';
import {NewsletterService} from './newsletter.service';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {CKEditorModule} from 'ckeditor4-angular';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [NewslettersComponent],
  imports: [
    CommonModule,
    NewslettersRoutingModule,
    MatCardModule,
    HttpClientModule,
    CKEditorModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTabsModule,
  ],
  providers: [NewsletterService],
})
export class NewslettersModule {}
