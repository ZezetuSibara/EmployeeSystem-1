import { Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import {  EmployeeComponentComponent } from './employee/employee.component';
import path from 'path';

export const routes: Routes = [
    {
        path:"",
        component:DepartmentComponent
    },
    {
        path:"fetchDepartment",
        component:DepartmentComponent
    },
    {
        path:"fetchEmployees",
        component:EmployeeComponentComponent
    },
];
