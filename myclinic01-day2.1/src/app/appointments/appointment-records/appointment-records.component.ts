import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
  selector: 'app-appointment-records',
  templateUrl: './appointment-records.component.html',
  styleUrl: './appointment-records.component.scss'
})
export class AppointmentRecordsComponent {
  appointmentList:any[]=[];
  constructor(private router: Router,
    private localStorageService: LocalStorageService){}
  goToAddOrScheduleAppointment(){
    this.router.navigate(['/appointments/add-or-schedule-appointment']);
  }
  ngOnInit(){
    this.readList();
  }
  readList(){
    let strAppt = this.localStorageService.get('appointments');
    let jsonAppt = JSON.parse(strAppt);
    if(jsonAppt){
      this.appointmentList = jsonAppt;
    }
  }
}
