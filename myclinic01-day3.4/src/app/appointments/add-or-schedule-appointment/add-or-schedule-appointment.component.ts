import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api-service.service';
import { json } from 'stream/consumers';
import { response } from 'express';
@Component({
  selector: 'app-add-or-schedule-appointment',
  templateUrl: './add-or-schedule-appointment.component.html',
  styleUrl: './add-or-schedule-appointment.component.scss'
})
export class AddOrScheduleAppointmentComponent {
  currentRecordId = "";
  selectedDate: Date | null = new Date();
  formattedDate: string | null = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
  selectedTime: string = "09:00";
  patientName: string = '';
  nricPassport: string = '';
  currentAppointmentId="";
  constructor(private datePipe: DatePipe, 
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const appointmentId = params['appointmentId'];
      this.currentAppointmentId = appointmentId;
      this.apiService.getAppointmentById(appointmentId).subscribe(appt => {
        if(appt && appt.length){
          this.selectedDate = appt[0].dateTimeSlot.substring(0,10);
          this.selectedTime = appt[0].dateTimeSlot.substring(11,16);
          this.formattedDate = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
          this.patientName = appt[0].patientName;
          this.nricPassport = appt[0].patientNric;
          this.currentRecordId = appt[0].id;
        }
      });
    });
  }
  onDateSelected(event: any) {
    this.selectedDate = event.value;
    this.formattedDate = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
  }
  convertPatientToUppercase(model: string) {
    this.patientName = model.toUpperCase();
  }
  convertICPassportToUppercase(model: string) {
    this.nricPassport = model.toUpperCase();
  }
  addAppointment(){
    let appointmentData =
    {
      appointmentId: uuidv4(),
      dateTimeSlot: this.selectedDate,
      patientName: this.patientName,
      patientNric: this.nricPassport,
    };
    this.apiService.addAppointment(appointmentData).subscribe(
      (response) => {
        console.log('Appointment added successfully:', response);
      },
      (error) => {
        console.error('Error adding appointment:', error);
      }
    );
  }
  addAndClose(){
    this.addAppointment();
    this.router.navigate(['/appointments/appointment-records']);
  }
  addAnother(){
    this.addAppointment();
    this.clearInput();
  }
  clearInput(){
    this.selectedDate = new Date();
    this.formattedDate = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
    this.selectedTime = "09:00";
    this.patientName = '';
    this.nricPassport = '';
  }
  updateOnly(){
    let jsonItem = {
      "id": this.currentRecordId,
      "appointmentId": this.currentAppointmentId,
      "dateTimeSlot": this.formattedDate + "T" + this.selectedTime + ":00.000Z",
      "patientName": this.patientName,
      "patientNric": this.nricPassport
    };
    this.apiService.updateAppointmentById(this.currentRecordId, jsonItem).subscribe(response => {
      const statusCode = response.status;
      console.log('HTTP Status Code:', statusCode);
    });
  }
  updateAndClose(){
    this.updateOnly();
    this.router.navigate(['/appointments/appointment-records']);
  }
}
