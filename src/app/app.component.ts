import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CardComponent } from "./card/card.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { BaseChartDirective } from 'ng2-charts';
import { ChartDataset, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FlexLayoutModule,MatSelectModule, RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scrape-bot';

  // constructor(private chart: BaseChartDirective){
    
  // }
//   barChartOptions: ChartOptions = {
//     responsive: true,
//     scales: {
//         xAxes: [{
//             gridLines: {
//                 display: true
//             },
//             scaleLabel: {
//                 display: true,
//                 labelString: "Portfolio",
//             },
//         }],
//         yAxes: [{
//             gridLines: {
//                 display: true
//             },
//             scaleLabel: {
//                 display: true,
//                 labelString: "Amount",
//             },
//             ticks: {
//                 callback: function (value, index, values) {
//                     return Number(value).toFixed(2);
//                 }
//             }
//         }]
//     },
// };

// barChartLabels: Label[] = ['Total Comment', 'Positive',  'Negative', 'Neutral'];
// barChartLegend = false;

// barChartData: ChartDataset[] = [
//     {
//         data: [], label: 'Series 1',
//         backgroundColor: ['#3d8cec', '#004089', '#021F41', '#315C8F'],
//     },
// ];

// getBarChartData() {

//   this.barChartData[0].data = [];
//   let low = 35000;
//   let medium = 55000;
//   let high = 27000;
//   let total_contribuions = low + high + medium;
//   this.barChartData[0].data.push(total_contribuions, high, medium, low);
  
// }
}
