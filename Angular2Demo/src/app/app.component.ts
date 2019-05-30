import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    //template: `<list-employee></list-employee>`
    template: `Your text: <input type='text' [(ngModel)]='userText' />
               <br/><br/>
               <simple [simpleInput] = 'userText'></simple>`

})
export class AppComponent {
    userText: string = 'Pragim';
}
