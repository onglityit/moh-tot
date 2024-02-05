import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
@Component({
  selector: 'app-appointment-records',
  templateUrl: './appointment-records.component.html',
  styleUrl: './appointment-records.component.scss'
})
export class AppointmentRecordsComponent {
  appointmentList:any[]=[];
  constructor(private router: Router,
    private apiService: ApiService){}
  goToAddOrScheduleAppointment(){
    this.router.navigate(['/appointments/add-or-schedule-appointment']);
  }
  ngOnInit(){
    this.readList();
  }
  readList(){
    this.apiService.getAllAppointments().subscribe((appt:any) => {
      this.appointmentList = appt;
    })
  }
  redirectToAddAppointment(appointmentId: string): void {
    this.router.navigate(['/appointments/add-or-schedule-appointment'], { queryParams: { appointmentId } });
  }
}
