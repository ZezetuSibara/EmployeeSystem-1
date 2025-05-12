import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddEditEmployeeComponent } from "../employee/add-edit-employee/add-edit-employee.component";

@Component({
  selector: 'app-show-employee',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    AddEditEmployeeComponent
],
  templateUrl: './show-employee.component.html',
  styleUrl: './show-employee.component.css'
})
export class ShowEmployeeComponent {
@Input() employee: any;
EmployeeIdFilter: any;
ActivateAddEditEmployComp: any;
DepartmentList: any;
FilterFn() {
  throw new Error('Method not implemented.');
  }
addClick() {
throw new Error('Method not implemented.');
}
ModalTitle: any;
closeClick() {
throw new Error('Method not implemented.');
}
employ: any;
sortResult(arg0: string,arg1: boolean) {
throw new Error('Method not implemented.');
}
EmployeeNameFilter: any;
editClick(_t36: any) {
throw new Error('Method not implemented.');
}
deleteClick(_t36: any) {
throw new Error('Method not implemented.');
}

}
