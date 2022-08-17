import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeDetails } from '../models/employee-details.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EmployeedetailsService {
  private url = 'https://retoolapi.dev/H2F0Ui/getemployedetail/';
  employeedetails: any;
  constructor(private http: HttpClient) {}

  getEmployeeDetails() {
    return this.http.get(this.url);
  }

  getOne(id: any) {
    return this.http
      .get('https://retoolapi.dev/H2F0Ui/getemployedetail/' + id)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
