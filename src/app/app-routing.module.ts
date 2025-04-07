import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HurricaneCListComponent } from './hurricane-list/hurricane-clist.component';

const routes: Routes = [
  {
    path: "",
    component: HurricaneCListComponent,
  },
];

@NgModule({
  imports: [MaterialModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

