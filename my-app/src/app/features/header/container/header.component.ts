import { Component } from "@angular/core";
import {faUser} from "@fortawesome/free-regular-svg-icons"

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    faUser = faUser;
}