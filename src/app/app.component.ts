import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiserviceService } from './apiservice.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'AngularCRUD';
  department: any[] = [];
  employee: any[] = [];

  constructor(private apiService: ApiserviceService, private router:Router) {}

  ngOnInit(): void {
    // Optionally load data when the component initializes
  }
  navigateToDepartment(){
    this.router.navigate(["fetchDepartment"])
  }
  navigateToEmployees(){
    this.router.navigate(["fetchEmployees"])
  }
}
