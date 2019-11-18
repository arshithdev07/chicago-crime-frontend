import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-crime-by-community-area',
  templateUrl: './crime-by-community-area.component.html',
  styleUrls: ['./crime-by-community-area.component.css']
})
export class CrimeByCommunityAreaComponent implements OnInit {

  years = ['2019', '2018'];
  selectedYear = '2019';
  apiUrl = environment.apiUrl;

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              suggestedMin: 0
          }
      }]
    }
  };
  public chartColors: any[] = [
    { 
      backgroundColor:"#299BEC"
    }];
  public barChartLabels: any;
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartData:any;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.groupCrimesByCommunityAreas()
  }

  changeYear(event, newYear) {
    this.selectedYear = newYear;
  }

  groupCrimesByCommunityAreas() {
    let date = this.selectedYear + "-01-01";
    this.http.get(`${this.apiUrl}/areaCrimeCount?crimeDate=${date}`)
    .subscribe(crimesCount => {
      console.log("Crime Count ",crimesCount);
      const items: Object[] = <Object[]>crimesCount;
      
      var communityArray: string[] = items.map(item => item['community']);
      const numberList: number[] = items.map(item => item['count']);

      this.barChartLabels = communityArray;
      this.barChartData= numberList;
      
    });
  }

}
