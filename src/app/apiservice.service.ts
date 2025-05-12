import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from './department/department';
import { Employee } from './employee/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  readonly apiUrl = 'https://localhost:7057/api/';
  readonly photoUrl = "http://localhost:50306/Photos/";

  constructor(private http: HttpClient) { }

  // Department
  getDepartmentList(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl + 'Department');
  }
  addDepartment(department: Department):Observable<Department> {
    return this.http.post<Department>(this.apiUrl+ 'Department', department);
  }
  deleteDepartment(id:number): Observable<boolean> {
    return this.http.delete<boolean>(this.apiUrl+ 'Department/'+id);
  }
  updateDepartment(id: number, department: any): Observable<boolean> {
    return this.http.put<boolean>(this.apiUrl + 'Department/' + id, department);
  }

  // Employee
  getEmployeeList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'Employee');
  }
  addEmployee(employee: Employee):Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl+ 'Employee', employee);
}
  deleteEmployee(EmployeeId:number): Observable<boolean> {
    return this.http.delete<boolean>(this.apiUrl+ 'Employee/'+ EmployeeId);
}
updateEmployee(EmployeeId: number, employee: any): Observable<boolean> {
  return this.http.put<boolean>(this.apiUrl+'Employee/'+ EmployeeId, employee);
}
}
