import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {
app:any;
  constructor(private http:HttpClient,) { }

  ngOnInit() {
    
  
  this.http.get('./assets/service.json').subscribe(data =>{
    this.app = data as string[];
  }, (error:HttpErrorResponse) =>{
    console.log(error.message);
  });
}

ionViewDidEnter() {
  this.plotSimpleBarChart();
}
plotSimpleBarChart() {
  let myChart = HighCharts.chart('highcharts', {
    chart: {
      type: 'column'
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
        data: [1, 2, 8, 6, 5, 3,7]
      }]
  });
}

}
