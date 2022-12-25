import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-signup-button',
  template: `
        <div (click)="handleSignUp()"
        class="std-block std-block-red mb-4 p-4 lg:flex lg:items-center lg:justify-center"
      >
        <img
          class="mx-auto h-20 lg:mr-4 lg:ml-0 lg:h-10 lg:w-10"
          src="/assets/img/svg/New Customer.svg"
        />
        <p class="hidden text-red lg:block">
          New Customer</p>
      </div>
      <p class="text-center text-red lg:hidden" (click)="handleSignUp()">New Customer</p>
  `,
})
export class SignupButtonComponent {
  constructor(
    private auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  handleSignUp(): void {
    this.auth.loginWithRedirect({
      prompt: "login",
      screen_hint: 'signup',
      appState: {
        target: '/profile',
      },
    });
  }
}
