import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
const routes: Routes = [
  {
    path: "", component: PatientsComponent,
    children: [
      {
        path: "search",
        component: PatientSearchComponent,
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }