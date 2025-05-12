import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentAddDialogComponent } from './department-add-dialog/department-add-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { Department } from './department';


@Component({
  selector: 'app-department',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']

})
export class DepartmentComponent implements OnInit{
departments: any[] = [];

constructor(private apiService: ApiserviceService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.apiService.getDepartmentList().subscribe(
      (data: any) => {
        this.departments = data;
      }
    );
  }
  addDepartment(){
    this.openAddDialog(new Department());
  }
  openAddDialog(department: Department): void {
    const dialogRef = this.dialog.open(DepartmentAddDialogComponent, {
      width: '400px',
      data: {...department}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result.id === 0) {
        this.apiService.addDepartment(result).subscribe(() => {
          this.loadDepartments(); // Reload after adding
        });
      }
      else{
        this.apiService.updateDepartment(result.id, result).subscribe(() => {
          this.loadDepartments(); // Reload after adding
        });
      }
    });
  }
  deleteDepartment(department: Department){
    this.apiService.deleteDepartment(department.id).subscribe((x: boolean) => {
      if(x){
        this.loadDepartments();
      }
      else{
        alert("ID does not exist");
      }
    })
  }
  updateDepartment(department: Department) {
    this.openAddDialog(department);
  }
}