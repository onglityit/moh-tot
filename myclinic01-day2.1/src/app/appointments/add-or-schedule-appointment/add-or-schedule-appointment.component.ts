import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
  selector: 'app-add-or-schedule-appointment',
  templateUrl: './add-or-schedule-appointment.component.html',
  styleUrl: './add-or-schedule-appointment.component.scss'
})
export class AddOrScheduleAppointmentComponent {
  selectedDate: Date | null = new Date();
  formattedDate: string | null = this.datePipe.transform(this.selectedDate, 'yyyy-MM-dd');
  selectedTime: string = "09:00";
  patientName: string = '';
  nricPassport: string = '';
  constructor(private datePipe: DatePipe, 
    private localStorageService: LocalStorageService,
    private router: Router) {}
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
    this.localStorageService.appendToArray('appointments', 
      {
        appointmentId: uuidv4(),
        dateTimeSlot: this.selectedDate,
        patientName: this.patientName,
        patientNric: this.nricPassport,
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
}
