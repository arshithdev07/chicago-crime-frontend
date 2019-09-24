import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-crimes',
  templateUrl: './crimes.component.html',
  styleUrls: ['./crimes.component.css']
})
export class CrimesComponent implements OnInit {

  apiUrl = environment.apiUrl;
  districts: any;
  years = ['2019', '2018', '2017', '2016', '2015'];
  selectedDistrict: {
    districtNo: string,
    districtName: string
  };
  selectedYear = '2019';

  constructor(private http : HttpClient) { 
    console.log(environment.apiUrl);
  }

  ngOnInit() {
    this.getDistricts();
  }

  getDistricts() {
      this.http.get(`${this.apiUrl}/districts`)
      .subscribe(districts => {
        console.log(districts);
        this.districts = districts;
        this.selectedDistrict = districts[0];
      });
  }

  changeDistrict(event, newDisctrict) {
    this.selectedDistrict = newDisctrict;
  }

  changeYear(event, newYear) {
    this.selectedYear = newYear;
  }

  filterRecords() {
    let date = this.selectedYear + "-01-01";
    this.http.get(`${this.apiUrl}/filteredCrimes?crimeDate=${date}&districtNo=${this.selectedDistrict.districtNo}`)
    .subscribe(crimes => {
      console.log("filtered crimes",crimes);
    });
  }

}
