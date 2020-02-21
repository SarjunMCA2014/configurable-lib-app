import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatSnackBarModule } from '@angular/material';

import { ConfigurableLibComponent } from './configurable-lib.component';

@NgModule({
  declarations: [ConfigurableLibComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [ConfigurableLibComponent]
})
export class ConfigurableLibModule { }
