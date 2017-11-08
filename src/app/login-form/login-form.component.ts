import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onSubmit(value: any ) {
    this.http.post('/login', value).subscribe(data => {
      console.log(data);
    });
  }
}
