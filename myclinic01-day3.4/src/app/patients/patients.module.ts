import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PatientsComponent,
    PatientSearchComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule
  ]
})
export class PatientsModule { }
