import { NgModule, ModuleWithProviders } from '@angular/core';
import { MatCardModule, MatButtonModule, MatSnackBarModule } from '@angular/material';

import { ConfigurableLibComponent } from './configurable-lib.component';
import { CONFIG_INJ_TOK, LibConfig } from './configurable-lib-config';

@NgModule({
  declarations: [ConfigurableLibComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: CONFIG_INJ_TOK,
      useValue: LibConfig
    }
  ],
  exports: [ConfigurableLibComponent]
})
export class ConfigurableLibModule {
  static doOverride(overrides: any): ModuleWithProviders {
    return {
      ngModule: ConfigurableLibModule,
      providers: [
        {
          provide: CONFIG_INJ_TOK,
          useValue: overrides && overrides.config || LibConfig
        }
      ]
    };
  }
}
