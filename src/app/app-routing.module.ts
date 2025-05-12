import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDepartmentComponent } from './department/show-department/show-department.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';

const routes: Routes = [
  { path: 'fetchDepartment', component: ShowDepartmentComponent },
  { path: 'fetchEmployee', component: ShowEmployeeComponent },
  { path: '', redirectTo: '/fetchDepartment', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
