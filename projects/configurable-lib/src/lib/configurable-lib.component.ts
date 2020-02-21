import { Component, OnInit, InjectionToken } from '@angular/core';

import { ConfigurableLibService } from './configurable-lib.service';

export const COMPONENTS_INJ_TOK = new InjectionToken<string>('COMPONENTS_INJ_TOK');

@Component({
  selector: 'lib-configurable-lib',
  template: `
    <mat-card>
      <mat-card-content #dynamicComponentPh></mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="configurableLibService.sayHello()">Say Hello</button>
        <button mat-raised-button color="secondary" (click)="configurableLibService.sayHi()">Say Hi</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: []
})
export class ConfigurableLibComponent implements OnInit {

  constructor(public configurableLibService: ConfigurableLibService) { }

  ngOnInit() {
  }

}
