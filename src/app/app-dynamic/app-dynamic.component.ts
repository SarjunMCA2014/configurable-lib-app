import { Component } from '@angular/core';
import { LibDynamicComponent } from 'projects/configurable-lib/src/lib/lib-dynamic/lib-dynamic.component';

@Component({
  // selector: 'app-app-dynamic',
  templateUrl: './app-dynamic.component.html',
  styleUrls: ['./app-dynamic.component.scss']
})
export class AppDynamicComponent extends LibDynamicComponent {
}
