import { Injectable } from '@angular/core'
import { OIDCClient } from '@plusauth/plusauth-oidc-client-js'
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
// Singleton AuthService
export class AuthService {

  private oidcClient
  private user: any = null

  constructor() {
    this.oidcClient = this.getOIDCClient()
    this.oidcClient.on('user_login', user => this.updateUser(user))
    this.oidcClient.on('user_logout', () => this.updateUser(null))
  }

  async getIsLoggedIn(): Promise<any> {
    return await this.oidcClient.isLoggedIn(true)
  }

  getClient(): OIDCClient {
    return this.oidcClient
  }

  getUser(): any {
    return this.user
  }

  updateUser(user: any): void {
    this.user = user
  }

  login(): void {
    this.oidcClient.login()
  }

  logout(): void {
    this.oidcClient.logout()
  }

  async loginCallback() {
    await this.oidcClient.loginCallback(window.location.href)
  }

  getOIDCClient(): OIDCClient {
    return new OIDCClient({
      issuer: environment.oidcIssuer,
      client_id: environment.clientId,
      redirect_uri: 'http://localhost:4200/callback',
      response_mode: 'form_post',
      response_type: 'id_token token',
      post_logout_redirect_uri: 'http://localhost:4200/',
      autoSilentRenew: true,
      checkSession: true,
      requestUserInfo: true,
      scope: 'openid profile',
      silent_redirect_uri: 'http://localhost:4200/silent-renew'
    })
  }

}

