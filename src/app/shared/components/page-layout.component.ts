import { Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  template: `
    <app-header></app-header>
    <ng-content></ng-content>
    <app-footer></app-footer>
  `,
})
export class PageLayoutComponent {}
