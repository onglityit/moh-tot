import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsRoutingModule } from './echarts-routing.module';
import { EchartsComponent } from './echarts.component';
import { LineComponent } from './line/line.component';
import { EchartsxModule } from 'echarts-for-angular';
import { GraphComponent } from './graph/graph.component';
import { PieComponent } from './pie/pie.component';
import { MalaysiaMapComponent } from './malaysia-map/malaysia-map.component';
import { MalaysiaStateData } from '../model/malaysia-state-data';
import { AppointmentGraphComponent } from './appointment-graph/appointment-graph.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    EchartsComponent,
    LineComponent,
    GraphComponent,
    PieComponent,
    MalaysiaMapComponent,
    AppointmentGraphComponent
  ],
  imports: [
    CommonModule,
    EchartsRoutingModule,
    EchartsxModule,
    FormsModule,
  ],
  providers: [
    MalaysiaStateData,
  ]
})
export class EchartsModule { }
