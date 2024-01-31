import { Component } from '@angular/core';
import { JavaApiService } from '../../services/java-api.service';

@Component({
  selector: 'app-patient-search',
  templateUrl: './patient-search.component.html',
  styleUrls: ['./patient-search.component.scss']
})
export class PatientSearchComponent {
  patientId="";
  constructor(private javaApiService: JavaApiService){}
  searchPatientById(){
    this.javaApiService.searchPatientsById(this.patientId).subscribe(response => {
      console.log(response);
    });
  }
}
