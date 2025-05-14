import { Component, OnInit, Input, NgModule  } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-add-edit-employee',
  imports: [ 
    BrowserModule,
    FormsModule  
  ],
  templateUrl: './add-edit-employee.component.html',
  styleUrl: './add-edit-employee.component.css'
})

export class AddEditEmployeeComponent implements OnInit {
  @Input() employee: any; 
  EmployeeId: number = 0;  // Make sure to set a default value of 0 or any appropriate number
  EmployeeName: string = "";
  Department: string = "";
  DateOfJoining: string = "";
  emp: any;
  
  DepartmentList: any[] =[];

  constructor(private service: ApiserviceService) { }

  ngOnInit(): void {
    //this.loadEmployeeList();
  }

  addEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
    };

  }

  updateEmployee() {
    var val = {
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
    };
  }
}