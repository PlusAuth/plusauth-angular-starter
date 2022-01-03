import { Component } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    constructor(public authService: AuthService) { }

    getUserString(): string {
        return JSON.stringify(this.authService.getUser().user, null, 2)
    }

}
