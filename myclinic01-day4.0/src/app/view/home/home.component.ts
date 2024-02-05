import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router){}
  goToAppointmentRecords(){
    this.router.navigate(['/appointments/appointment-records']);
  }
  goToPatients(){
    this.router.navigate(['/patients/search']);
  }
  goToLineChart(){
    this.router.navigate(['/echarts/line']);
  }
  goToGraphChart(){
    this.router.navigate(['/echarts/graph']);
  }
  goToPieChart(){
    this.router.navigate(['/echarts/pie']);
  }
  goToMalaysia(){
    this.router.navigate(['/echarts/malaysia']);
  }
  goToAppointmentGraph(){
    this.router.navigate(['/echarts/appointment-graph']);
  }
}