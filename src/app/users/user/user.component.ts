import { Component, Input } from "@angular/core";

@Component({
    selector: 'p-user',
    templateUrl: '../user/user.component.html',
    styleUrls: ['../user/user.component.css']
})

export class UserComponent {
    @Input() users =  '';
    @Input() nomes =  '';
    @Input() emails =  '';
}