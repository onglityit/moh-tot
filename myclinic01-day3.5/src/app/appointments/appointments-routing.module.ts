import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentRecordsComponent } from './appointment-records/appointment-records.component';
import { AddOrScheduleAppointmentComponent } from './add-or-schedule-appointment/add-or-schedule-appointment.component';
const routes: Routes = [
  {
    path: "", component: AppointmentsComponent,
    children: [
      {
        path: "appointment-records",
        component: AppointmentRecordsComponent,
      },
      {
        path: "add-or-schedule-appointment",
        component: AddOrScheduleAppointmentComponent,
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }