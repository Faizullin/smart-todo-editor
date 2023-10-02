import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DocService } from '../../_core/services/doc.service';
import { DocFilters } from '../../_core/models/doc-filters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public forecasts?: WeatherForecast[];

  constructor(http: HttpClient, private docService: DocService) {
    //http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
    //  this.forecasts = result;
    //}, error => console.error(error));
  }

  ngOnInit() {
    this.docService.getDocs({} as DocFilters).subscribe((docs) => {
      console.log("Docs:",docs)
    })
  }

  title = 'angularapp';
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
