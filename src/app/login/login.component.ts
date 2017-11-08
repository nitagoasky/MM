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
    this.http.post('/login', {username : 11, password : 11}).subscribe(data => {
      console.log(data);
    });
  }
  getUser() {
    this.http.get('/users/39').subscribe(data => {
      console.log(data);
    });
  }

}
