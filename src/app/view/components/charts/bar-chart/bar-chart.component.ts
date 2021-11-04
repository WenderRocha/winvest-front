import { Component, OnInit,ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

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
      type: 'bar',
      data: {
        labels: ['JAN', 'FEV', 'MAR', 'ABRI', 'MAI', 'JUN', 'JUL', 'AGOS', 'SET', 'OUT', 'NOV','DEZ'],

        datasets: [{

          label: 'Evolução da Banca',

            data: [0,0,0,0,0,0,0,0,0,0,157],
            backgroundColor: [
              'rgba(155, 89, 182, 0.5)',
            ],
            borderColor: [
              'rgb(155, 89, 182)',
            ],
            borderWidth: 1
        }]
    },

    options:{
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }

  });
  }

}
