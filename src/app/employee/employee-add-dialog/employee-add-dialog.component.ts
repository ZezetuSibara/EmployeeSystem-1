import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-add-dialog',
  imports: [
    MatDialogActions,
    MatFormField,
    MatLabel,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './employee-add-dialog.component.html',
  styleUrl: './employee-add-dialog.component.css'
})
export class EmployeeAddDialogComponent {
  employeeForm!: FormGroup;
  employee: Employee = new Employee();

constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EmployeeAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public employeeData: Employee
  ) {
    this.employee = employeeData;
    this.employeeForm = this.fb.group({
      employeeId: [this.employee.employeeId, Validators.required],
      employeeName: [this.employee.employeeName, Validators.required],
      department: [this.employee.department, Validators.required],
      dateofJoining: [this.employee.dateofJoining, Validators.required],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.dialogRef.close(this.employeeForm.value);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
}
