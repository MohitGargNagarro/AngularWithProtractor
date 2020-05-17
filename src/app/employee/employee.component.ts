import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
  editState: boolean = false;
  employeeToEdit: Employee;


  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployeesList().subscribe((employees)=>
    this.employees = employees
    );
  }

  deleteEmployee(event, employee: Employee){
    this.employeeService.deleteEmployee(employee) 
  }

  editEmployee(event, employee: Employee){
    this.editState = true;
    this.employeeToEdit = employee;
  }

  updateEmployeeDetails(employee: Employee){
    this.employeeService.updateEmployee(employee)
  }
}
