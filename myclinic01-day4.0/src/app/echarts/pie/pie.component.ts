import { Component, OnInit } from '@angular/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.scss'
})
export class PieComponent implements OnInit {
  readonly echartsExtentions: any[];
  chartOptions = {};
  constructor() {
    this.echartsExtentions = [PieChart, LineChart, BarChart, TooltipComponent, GridComponent, LegendComponent, CanvasRenderer, UniversalTransition];
  }
  ngOnInit() {
    const weatherIcons = {
      Sunny: 'https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-sun-icon-png-image_3996239.jpg',
      Cloudy: 'https://simpleicon.com/wp-content/uploads/cloudy.png',
      Showers: 'https://visualpharm.com/assets/857/Rain-595b40b65ba036ed117d22b2.svg'
    };
    this.chartOptions = {
      title: {
        text: 'Weather Statistics',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        bottom: 10,
        left: 'center',
        data: ['CityA', 'CityB', 'CityD', 'CityC', 'CityE']
      },
      series: [
        {
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: [
            {
              value: 1548,
              name: 'CityE',
              label: {
                formatter: [
                  '{title|{b}}{abg|}',
                  '  {weatherHead|Weather}{valueHead|Days}{rateHead|Percent}',
                  '{hr|}',
                  '  {Sunny|}{value|202}{rate|55.3%}',
                  '  {Cloudy|}{value|142}{rate|38.9%}',
                  '  {Showers|}{value|21}{rate|5.8%}'
                ].join('\n'),
                backgroundColor: '#eee',
                borderColor: '#777',
                borderWidth: 1,
                borderRadius: 4,
                rich: {
                  title: {
                    color: '#eee',
                    align: 'center'
                  },
                  abg: {
                    backgroundColor: '#333',
                    width: '100%',
                    align: 'right',
                    height: 25,
                    borderRadius: [4, 4, 0, 0]
                  },
                  Sunny: {
                    height: 30,
                    align: 'left',
                    backgroundColor: {
                      image: weatherIcons.Sunny
                    }
                  },
                  Cloudy: {
                    height: 30,
                    align: 'left',
                    backgroundColor: {
                      image: weatherIcons.Cloudy
                    }
                  },
                  Showers: {
                    height: 30,
                    align: 'left',
                    backgroundColor: {
                      image: weatherIcons.Showers
                    }
                  },
                  weatherHead: {
                    color: '#333',
                    height: 24,
                    align: 'left'
                  },
                  hr: {
                    borderColor: '#777',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  value: {
                    width: 20,
                    padding: [0, 20, 0, 30],
                    align: 'left'
                  },
                  valueHead: {
                    color: '#333',
                    width: 20,
                    padding: [0, 20, 0, 30],
                    align: 'center'
                  },
                  rate: {
                    width: 40,
                    align: 'right',
                    padding: [0, 10, 0, 0]
                  },
                  rateHead: {
                    color: '#333',
                    width: 40,
                    align: 'center',
                    padding: [0, 10, 0, 0]
                  }
                }
              }
            },
            { value: 735, name: 'CityC' },
            { value: 510, name: 'CityD' },
            { value: 434, name: 'CityB' },
            { value: 335, name: 'CityA' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}
