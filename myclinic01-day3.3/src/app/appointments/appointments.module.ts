import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentRecordsComponent } from './appointment-records/appointment-records.component';
import { UserMenuModule } from '../user-menu/user-menu.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddOrScheduleAppointmentComponent } from './add-or-schedule-appointment/add-or-schedule-appointment.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentRecordsComponent,
    AddOrScheduleAppointmentComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppointmentsRoutingModule,
    UserMenuModule,
    SidebarModule,
    HttpClientModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
  ]
})
export class AppointmentsModule { }
