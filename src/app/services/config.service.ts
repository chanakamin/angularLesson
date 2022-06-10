import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  get baseUrl() {
    return 'http://localhost:3000';
  }
}
