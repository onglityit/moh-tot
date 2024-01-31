import { Component, OnInit } from '@angular/core';
import { BarChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss'
})
export class GraphComponent implements OnInit {
  readonly echartsExtentions: any[];
  chartOptions = {};
  constructor() {
    this.echartsExtentions = [LineChart, BarChart, TooltipComponent, GridComponent, LegendComponent, CanvasRenderer, UniversalTransition];
  }
  ngOnInit() {
    this.chartOptions = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line'
        }
      ]
    };
  }
}
