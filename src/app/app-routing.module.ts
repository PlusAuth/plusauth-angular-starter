import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthCallbackComponent } from './auth-callback/auth-callback.component'
import { HomeComponent } from './home/home.component'
import { ProfileComponent } from './profile/profile.component'
import { AuthGuardService } from './services/auth-guard.service'
import { SilentRenewComponent } from './silent-renew/silent-renew.component'
import { UnauthorizedComponent } from './unauthorized/unauthorized.component'

const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'unauthorized', component: UnauthorizedComponent }, // Redirect to page if user not authorized
  { path: 'silent-renew', component: SilentRenewComponent },  // Token silent renew uri
  { path: 'callback', component: AuthCallbackComponent },     // Authentication redirect uri
  { path: '**', component: HomeComponent }                    // redirect to home if unhandled route entered
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
