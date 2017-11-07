import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  constructor(private http: HttpClient) { }
  ngOnInit() {
  }
  login() {
    this.http.get('https://api.github.com/orgs/angular/members?page=1&per_page=5').subscribe(data => {
      console.log(data);
    });
  }

}
