import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing.module';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    HomeComponent,
    NotFoundComponent,
    FaqComponent
  ]
})
export class PagesModule { }
