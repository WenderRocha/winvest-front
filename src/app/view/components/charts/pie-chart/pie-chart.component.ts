import { Component, OnInit,ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;


  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'doughnut',

      data: {
        labels: [
          'Loss',
          'Win'
        ],

        datasets: [{

          label: 'Assertividade',

            data: [10, 20],
            backgroundColor: [
              'rgba(231, 76, 60, 0.5)',
              'rgba(46, 204, 113, 0.5)'
            ],
            borderColor: [
              'rgb(231, 76, 60)',
              'rgb(46, 204, 113)'
            ],
            borderWidth: 1
        }]
    },
    options:{
      responsive: true,
    }

    });
  }

}
