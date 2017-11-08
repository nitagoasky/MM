import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Code} from '../../module/Code';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public codes: Code[];
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(value: any ) {
    this.http.post('/login', value, {
      headers : {'Accept': 'application/json'}
    }).subscribe(data => {
      if ( data['code'] === 0) {
        this.router.navigate(['/admin/']);
      }
    });
  }
}
