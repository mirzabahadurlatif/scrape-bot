import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CardComponent } from "./card/card.component";
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { BaseChartDirective } from 'ng2-charts';
// import { ChartDataset, ChartOptions } from 'chart.js';
// import { NgChartsModule } from 'ng2-charts';
import { Chart, registerables } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

Chart.register(...registerables);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule,MatSelectModule, MatIconModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-bar-chart';

  // // Define the chart data
  // public barChartData: ChartData<'bar'> = {
  //   labels: ['January', 'February', 'March', 'April', 'May'],
  //   datasets: [
  //     {
  //       data: [65, 59, 80, 81, 56],
  //       label: 'Sales',
  //       backgroundColor: 'rgba(63, 81, 181, 0.2)',
  //       borderColor: 'rgba(63, 81, 181, 1)',
  //       borderWidth: 1
  //     }
  //   ]
  // };

  // // Chart options for customizing the chart
  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   scales: {
  //     x: {
  //       title: {
  //         display: true,
  //         text: 'Months'
  //       }
  //     },
  //     y: {
  //       title: {
  //         display: true,
  //         text: 'Sales'
  //       },
  //       beginAtZero: true
  //     }
  //   }
  // };

  // // Chart type
  // public barChartType: 'bar' = 'bar';
  yturl!:string;
  data!:any;
  posiCount=0
  negCount=0
  netCount=0
  loader:boolean=false;
  positiveData:any;
  negativeData:any;
  neturalData:any;
  chart:any;
  public config:any = {
    type: 'bar',
    data: {
      labels:['Positive','Negative','Neutral'],
      datasets:[
        {label:'Positive',data:[0,0,0],backgroundColor:'green'},
        {label:'Negative',data:[0,0,0],backgroundColor:'red'},
        {label:'Neutral',data:[0,0,0],backgroundColor:'blue'}

      ],
      
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

 
  // formurl=new FormControl();
  constructor(private http:HttpClient){

  }
  ngOnInit(){
    this.chart=new Chart('MyChart',this.config)
    // this.config.data.datasets[0].data=[0,10,0]
    // this.config.data.datasets[1].data=[0,0,20]
    // this.config.data.datasets[2].data=[40,0,0]
  }

  onClick(){
    this.loader=true
    this.http.get(`http://127.0.0.1:3002/api/youtube/comments?url=${this.yturl}`).subscribe(
      (response) => {
        this.data = response;
        this.posiCount=this.data.positiveComments.length
        this.positiveData=this.data.positiveComments
        this.negCount=this.data.negativeComments.length
        this.negativeData=this.data.negativeComments
        this.netCount=this.data.neutralComments.length
        this.neturalData=this.data.neutralComments
        this.loader=false
        console.log('Data received:', this.data);
        
        
    //     this.config.data.datasets[0].data=[0,10,0]
    // this.config.data.datasets[1].data=[0,0,20]
    // this.config.data.datasets[2].data=[40,0,0]
      },
      (error) => {
        console.error('Error:', error);
      }
    );

      this.config.data.datasets[0].data=[this.posiCount,0,0]
    this.config.data.datasets[1].data=[0,this.negCount,0]
    this.config.data.datasets[2].data=[0,0,this.netCount]
    this.chart=new Chart('MyChart',this.config)

    

  }

}