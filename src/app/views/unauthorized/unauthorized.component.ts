import { Component } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Component({
    selector: 'app-unauthorized',
    templateUrl: './unauthorized.component.html',
    styleUrls: ['./unauthorized.component.css']
})
export class UnauthorizedComponent {

    constructor(public authService: AuthService) { }

}
