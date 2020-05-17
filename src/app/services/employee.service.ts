import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  employeeCollection: AngularFirestoreCollection<Employee>;

  employeesDoc: AngularFirestoreDocument<Employee>;

  employees: Observable<Employee[]>;

  constructor(public afs: AngularFirestore) {
    // this.employees = this.afs.collection("employee").valueChanges();
    this.employeeCollection = afs.collection<Employee>('employee');
    this.employees = this.employeeCollection.snapshotChanges().pipe(
      map(snapshotArrayObject => snapshotArrayObject.map(snapObject => {
        const data = snapObject.payload.doc.data() as Employee;
        const id = snapObject.payload.doc.id;
        return { id, ...data }
      }
      )))
  }
  getEmployeesList() {
    return this.employees;
  }

  addEmployee(employee: Employee) {
    this.employeeCollection.add(employee)
  }

  deleteEmployee(employee: Employee) {
    this.employeesDoc = this.afs.doc(`employee/${employee.id}`);
    this.employeesDoc.delete();
  }

  updateEmployee(employee: Employee) {
    this.employeesDoc = this.afs.doc(`employee/${employee.id}`);
    this.employeesDoc.update(employee);
  }
}
