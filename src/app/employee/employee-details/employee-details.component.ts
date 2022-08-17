import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployeedetailsService } from 'src/app/services/employeedetails.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employeedetail: any
  id: any
  constructor(private http: HttpClient,private emplyeeDetailsServices: EmployeedetailsService, private services: EmployeeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.params['id']);
    this.getOne();
  }
  getOne(){
      this.emplyeeDetailsServices.getOne(this.id)
  }



}
