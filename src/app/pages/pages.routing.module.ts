import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { NotFoundComponent } from './not-found/not-found.component';

const pagesRoutes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'faq', component: FaqComponent  },
    { path: '**', component: NotFoundComponent  }
];

@NgModule({
    imports: [RouterModule.forChild(pagesRoutes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}