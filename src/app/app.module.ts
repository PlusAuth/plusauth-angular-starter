import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { HomeComponent } from './views/home/home.component'
import { SilentRenewComponent } from './components/silent-renew/silent-renew.component'
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component'
import { AuthService } from './services/auth.service'
import { ProfileComponent } from './views/profile/profile.component'
import { UnauthorizedComponent } from './views/unauthorized/unauthorized.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SilentRenewComponent,
    AuthCallbackComponent,
    ProfileComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService]   // Make AuthService injected globally
})
export class AppModule implements DoBootstrap {

  constructor(private authService: AuthService) { } // inject auth service

  ngDoBootstrap(appRef: ApplicationRef) {
    // First initialize OIDC Client
    this.authService.getClient().initialize().then(() => {
      appRef.bootstrap(AppComponent)  // Then bootstrap App component
    })
      .catch(console.error)
  }

}
