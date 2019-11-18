import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-crime-by-location',
  templateUrl: './crime-by-location.component.html',
  styleUrls: ['./crime-by-location.component.css']
})
export class CrimeByLocationComponent implements OnInit {

  apiUrl = environment.apiUrl;
  topCrimes:any = [];

  public doughnutChartLabels: Label[];
  public doughnutChartData: Number[];

  public doughnutChartType: ChartType = 'doughnut';

  @Input() property: string; 

  constructor(private http : HttpClient) { }

  ngOnInit() {

    this.getCrimesByLocation(this.property)
    .subscribe(crimes => {
      this.topCrimes = (<Object[]>crimes).slice(0,3);
      console.log(this.topCrimes);

      this.doughnutChartLabels = this.topCrimes.map(item => item['crime']);
      this.doughnutChartData = this.topCrimes.map(item => item['count']);
    });

  }

  getCrimesByLocation(location:string) {
    return this.http.get(`${this.apiUrl}/locationCrimeCount?location=${location}`);
  }

}
