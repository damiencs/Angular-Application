import { Component } from "@angular/core";
import {faCopyright} from '@fortawesome/free-regular-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    faCopyright = faCopyright;
}