import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent} from './department/department.component';
import { AddEditDepartmentComponent } from './department/add-edit-department/add-edit-department.component';
import { ApiserviceService } from './apiservice.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentAddDialogComponent } from './department/department-add-dialog/department-add-dialog.component';
import { EmployeeComponentComponent } from './employee/employee.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmployeeAddDialogComponent } from './employee/employee-add-dialog/employee-add-dialog.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    DepartmentComponent,
    AddEditDepartmentComponent,
    DepartmentAddDialogComponent,
    EmployeeAddDialogComponent,
    EmployeeComponentComponent,
    AppComponent
  ],
  providers: [ApiserviceService],
})
export class AppModule { }
