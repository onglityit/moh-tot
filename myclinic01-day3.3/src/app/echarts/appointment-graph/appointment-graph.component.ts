import { Component } from '@angular/core';
import { ApiService } from '../../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-graph',
  templateUrl: './appointment-graph.component.html',
  styleUrl: './appointment-graph.component.scss'
})
export class AppointmentGraphComponent {
  appointmentList:any[] = [];
  statisticsList:any[] = [];
  constructor(private router: Router,
    private apiService: ApiService){}
  ngOnInit(){
    this.readList();
  }
  readList(){
    this.apiService.getAllAppointments().subscribe((appt:any) => {
      this.appointmentList = appt;
      this.convertToStatistics();
    });
  }
  convertToStatistics(){
    this.statisticsList = [];
    const appointmentsByDate: { [date: string]: number } = {};
    this.appointmentList.forEach((appointment:any) => {
      const dateKey = new Date(appointment.dateTimeSlot).toLocaleDateString();
      appointmentsByDate[dateKey] = (appointmentsByDate[dateKey] || 0) + 1;
    });
    Object.entries(appointmentsByDate).forEach(([date, count]) => {
      this.statisticsList.push({ date, count });
    });

    console.log(this.statisticsList);
  }
}
