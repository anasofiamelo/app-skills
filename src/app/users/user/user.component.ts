import { Component, Input } from "@angular/core";

@Component({
    selector: 'p-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent {

    @Input() user = '';
    @Input() nome = '';
    @Input() senha = '';
}