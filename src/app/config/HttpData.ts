import {Injectable} from '@angular/core';

@Injectable()
export class HttpData {
  HOST: string;
  constructor() {
    this.HOST = 'http://127.0.0.1:8080';
  }
}
