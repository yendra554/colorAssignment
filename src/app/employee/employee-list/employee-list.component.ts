import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: any;

  constructor(private services: EmployeeService) {}

  ngOnInit(): void {
    this.services.getAllList().subscribe((response) => {
      this.employees = response;
    });
  }
}
