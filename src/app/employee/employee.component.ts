import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiserviceService } from '../apiservice.service';
import { Employee } from './employee';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeAddDialogComponent } from './employee-add-dialog/employee-add-dialog.component';


@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
],

  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponentComponent implements OnInit{
    employees: Employee[] = [];
  
  constructor(private apiService: ApiserviceService, private dialog: MatDialog) {}
  
   ngOnInit(): void {
       this.loadEmployees();
     }
   
     loadEmployees(): void {
       this.apiService.getEmployeeList().subscribe(
         (data: Employee[]) => {
           this.employees = data;
         }
       );
     }
     addEmployee(){
       this.openAddDialog(new Employee());
     }
     openAddDialog(employee: Employee): void {
       const dialogRef = this.dialog.open(EmployeeAddDialogComponent, {
         width: '400px',
         data: {...employee}
       });
   
       dialogRef.afterClosed().subscribe((result: Employee) => {
         console.log(result);
         if (result.employeeId === 0) {
           this.apiService.addEmployee(result).subscribe(() => {
             this.loadEmployees(); // Reload after adding
           });
         }
         else{
           this.apiService.updateEmployee(result.employeeId, result).subscribe(() => {
             this.loadEmployees(); // Reload after adding
           });
         }
       });
     }
     deleteEmployee(employee: Employee){
       this.apiService.deleteEmployee(employee.employeeId).subscribe((x: boolean) => {
         if(x){
           this.loadEmployees();
         }
         else{
           alert("ID does not exist");
         }
       })
     }
     updateEmployee(employee: Employee) {
       this.openAddDialog(employee);
     }
  }