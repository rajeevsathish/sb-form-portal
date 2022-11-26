import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormListComponent } from './modules/form-list/form-list.component';
import { FormDetailsComponent } from './modules/form-details/form-details.component'

const routes: Routes = [
  { path: '', redirectTo: 'form-list', pathMatch: 'full' },
  { path: 'form-list', component: FormListComponent, pathMatch: 'full' },
  { path: 'form-details', component: FormDetailsComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'form-list' }
];

@NgModule({
  declarations: [
    FormListComponent,
    FormDetailsComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
