import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url = 'https://retoolapi.dev/GFHqAV/getemployees';

  constructor(private http: HttpClient) {}

  getAllList() {
    return this.http.get(this.url);
  }
}
