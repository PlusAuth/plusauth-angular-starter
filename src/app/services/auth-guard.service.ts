import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  // Check user if logged in for routes that requires auth
  async canActivate(): Promise<boolean> {
    if (await this.authService.getIsLoggedIn()) {
      return true
    }
    this.router.navigate(['/unauthorized'])
    return false
  }
}
