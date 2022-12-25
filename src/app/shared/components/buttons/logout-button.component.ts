import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-logout-button',
  template: `
    <a href="#"  (click)="handleLogout()">
      Logout
      <img
        class="ml-4 inline-block pb-1"
        src="/assets/img/svg/Logout icon.svg"
      />
    </a>
  `,
})
export class LogoutButtonComponent {
  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  handleLogout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}
