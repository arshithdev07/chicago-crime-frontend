import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-crimes',
  templateUrl: './crimes.component.html',
  styleUrls: ['./crimes.component.css']
})
export class CrimesComponent implements OnInit {

  apiUrl = environment.apiUrl;
  districts: any;
  years = ['2019', '2018'];
  selectedDistrict: {
    districtNo: string,
    districtName: string
  };
  selectedYear = '2019';
  lowestCrimeDistricts: Array<object> = [];
  highestCrimeDistricts: Array<object> = [];

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

  // property="APARTMENT";
  properties = ["APARTMENT", "RESIDENT", "STREET", "SIDEWALK", "BANK", "AIRPORT"]


  constructor(private http : HttpClient) { 
    console.log(environment.apiUrl);
  }

  ngOnInit() {
    // this.getDistricts();
    this.groupCrimesByDistrict();
  }

  // getDistricts() {
  //     this.http.get(`${this.apiUrl}/districts`)
  //     .subscribe(districts => {
  //       console.log(districts);
  //       this.districts = districts;
  //       this.selectedDistrict = districts[0];
  //     });
  // }

  // changeDistrict(event, newDisctrict) {
  //   this.selectedDistrict = newDisctrict;
  // }

  changeYear(event, newYear) {
    this.selectedYear = newYear;
  }

  // filterRecordsByDistrictAndYear() {
  //   let date = this.selectedYear + "-01-01";
  //   this.http.get(`${this.apiUrl}/filteredCrimes?crimeDate=${date}&districtNo=${this.selectedDistrict.districtNo}`)
  //   .subscribe(crimes => {
  //     console.log("filtered crimes",crimes);
  //   });
  // }

  groupCrimesByDistrict() {
    let date = this.selectedYear + "-01-01";
    this.http.get(`${this.apiUrl}/crimeCount?crimeDate=${date}`)
    .subscribe(crimesCount => {
      console.log("Crime Count ",crimesCount);
      const items: Object[] = <Object[]>crimesCount;
      
      var districtArray: string[] = items.map(item => item['districtName']);
      const numberList: number[] = items.map(item => item['count']);
      
      console.log(districtArray);
      console.log(numberList);
      
      this.barChartLabels = districtArray;
      this.barChartData= numberList;

      this.lowestCrimeDistricts = items.slice(0, 5);
      this.highestCrimeDistricts = items.slice(Math.max(items.length - 5, 1))
    });
  }

}
