import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Department } from '../department';

@Component({
  selector: 'app-department-add-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
 templateUrl: './department-add-dialog.component.html',
})
export class DepartmentAddDialogComponent {
  departmentForm: FormGroup;
  data: Department;
  constructor(
    private dialogRef: MatDialogRef<DepartmentAddDialogComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public departmentData: Department
  ) {
    console.log(departmentData);
    this.data = departmentData;
    this.departmentForm = new FormGroup({
      id: new FormControl(this.data.id, [Validators.required]),
      departmentName: new FormControl(this.data.departmentName, [Validators.required, Validators.minLength(2)])
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.departmentForm.valid) {
      this.dialogRef.close(this.departmentForm.value);
      this.snackBar.open('Department was added successfully', 'Close', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['success-snackbar']
      });
    }
  }
}