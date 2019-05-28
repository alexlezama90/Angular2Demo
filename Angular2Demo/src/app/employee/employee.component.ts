import { Component } from "@angular/core"

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent {
    columnSpan: number = 2
    firstName: string = "Alejandro"
    lastName: string = "Lezama"
    gender: string = "Male"
    age: number = 28

    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}
