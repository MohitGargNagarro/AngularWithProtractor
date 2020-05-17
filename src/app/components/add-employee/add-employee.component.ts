import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee ={
    name: '',
    age: ''
  }

  constructor(public employeeSerive: EmployeeService) { }

  ngOnInit(): void {
  }

  resetFields(){
    this.employee.name = '';
    this.employee.age = '';
  }

  onSubmit(){
    if(this.employee.name !== '' && this.employee.age !== '')
    this.employeeSerive.addEmployee(this.employee);
    this.resetFields();
  }

 

}
