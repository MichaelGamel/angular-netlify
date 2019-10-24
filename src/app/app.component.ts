import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-netlify';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://mina-app.herokuapp.com/api')
      .subscribe(data => console.log);
  }
}
