import { Component, OnInit } from "@angular/core"
import { IEmployee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    //private _employeeService: EmployeeService; Se puede inicializar y asignar la propiedad en el constructor con la sintaxis que ahí se ve.

    constructor(private _employeeService: EmployeeService) {
        //this._employeeService = _employeeService; //Es la forma antigua de inicializar.

        //this.employees = _employeeService.getEmployees(); //Todos los consumos de servicios es preferible que se hagan en ngOnInit();

    }

    ngOnInit() {
        this.employees = this._employeeService.getEmployees();
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender ==="Male").length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }


    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
    //getEmployees(): void {
    //    this.employees = [
    //        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
    //        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
    //        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
    //        { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
    //        { code: 'empl05', name: 'Nancy', gender: 'Female', annualSalary: 6700.826, dateOfBirth: '12/15/1982' },
    //    ];
    //}

    //trackByEmpCode(index: number, employee: any): string {
    //    return employee.code;
    //}

}