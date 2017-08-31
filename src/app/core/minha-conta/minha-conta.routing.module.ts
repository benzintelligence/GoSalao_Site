import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const minhaContaRoutes: Routes = [
    
];

@NgModule({
    imports: [RouterModule.forChild(minhaContaRoutes)],
    exports: [RouterModule]
})
export class MinhaContaRoutingModule { }