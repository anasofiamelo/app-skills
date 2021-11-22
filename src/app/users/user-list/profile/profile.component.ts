import { Component, Input } from "@angular/core";

@Component(
    {
        selector: 'app-profile',
        templateUrl: 'profile.component.html',
        styleUrls: ['./profile.component.css']
    })

export class ProfileComponent {
    @Input() nome = '';
    @Input() desc = '';
    @Input() photo = '';
    @Input() user = '';
    @Input() email = '';
}