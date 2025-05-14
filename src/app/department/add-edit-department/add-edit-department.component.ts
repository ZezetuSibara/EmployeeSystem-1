import { Component, OnInit, Input } from '@angular/core';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.css']
})
export class AddEditDepartmentComponent implements OnInit {

  constructor(private service: ApiserviceService) { }

  @Input() department: any;
  DepartmentId = "";
  DepartmentName = "";

  ngOnInit(): void {

    this.DepartmentId = this.department.DepartmentId;
    this.DepartmentName = this.department.DepartmentName;
  }

  addDepartment() {
    var department = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    /*this.service.addDepartment(dept).subscribe(res => {
      alert(res.toString());
    });*/
  }

  updateDepartment() {
    var department = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName
    };
    /*this.service.updateDepartment(dept).subscribe(res => {
      alert(res.toString());
    });*/
  }
}
