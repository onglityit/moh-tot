import { Component, OnInit } from '@angular/core';
import { BarChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
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
  readonly echartsExtentions: any[];
  chartOptions = {};
  constructor(private router: Router,
    private apiService: ApiService){
      this.echartsExtentions = [LineChart, BarChart, TooltipComponent, GridComponent, LegendComponent, CanvasRenderer, UniversalTransition];
    }
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

    let dayOfAppointment = this.statisticsList.map(x => x.date);
    let countOfAppointment = this.statisticsList.map(x => x.count);
    this.chartOptions = {
      xAxis: {
        type: 'category',
        data: dayOfAppointment
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          formatter: '{value}'
        }
      },
      series: [
        {
          data: countOfAppointment,
          type: 'bar'
        }
      ]
    };
  }
}
