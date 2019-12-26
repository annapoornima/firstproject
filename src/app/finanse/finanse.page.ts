import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
@Component({
  selector: 'app-finanse',
  templateUrl: './finanse.page.html',
  styleUrls: ['./finanse.page.scss'],
})
export class FinansePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.plotSimpleBarChart();
  }
  plotSimpleBarChart() {
    let myChart = HighCharts.chart('highcharts', {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Error code-description remedy'
      },
      xAxis: {
        title:{ text:'X-error code '} 
      
      },
      yAxis: {
        title: {
          text: 'Y-count'
        },
       gridLineWidth: 0,
       visible: true,
      },
    
      series: [
        {  
          type: undefined,
          data: [6, 5, 3, 4, 2, 1,7]
        }]
    });
  }
}
