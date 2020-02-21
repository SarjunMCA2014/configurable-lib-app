import { Component, OnInit, InjectionToken, ViewContainerRef, ViewChild, ComponentFactoryResolver, Inject } from '@angular/core';

import { ConfigurableLibService } from './configurable-lib.service';
import { DYNAMIC_COMPONENTS_INJ_TOK } from './configurable-lib.dynamic-components';
import { LIB_DYNAMIC_COMPONENTS } from './configurable-lib.dynamic-components';

export const COMPONENTS_INJ_TOK = new InjectionToken<string>('COMPONENTS_INJ_TOK');

@Component({
  selector: 'lib-configurable-lib',
  template: `
    <mat-card>
      <mat-card-content #dynamicComponents></mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="configurableLibService.sayHello()">Say Hello</button>
        <button mat-raised-button color="secondary" (click)="configurableLibService.sayHi()">Say Hi</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: []
})
export class ConfigurableLibComponent implements OnInit {
  @ViewChild('dynamicComponents', { read: ViewContainerRef, static: true }) viewContainerRef: ViewContainerRef;

  constructor(
    public configurableLibService: ConfigurableLibService,
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(DYNAMIC_COMPONENTS_INJ_TOK) private appDynamicComponents: any
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      (this.appDynamicComponents && this.appDynamicComponents[0].LibDynamicComponent) || LIB_DYNAMIC_COMPONENTS[0].LibDynamicComponent
    );

    this.viewContainerRef.createComponent(componentFactory);
  }

}
