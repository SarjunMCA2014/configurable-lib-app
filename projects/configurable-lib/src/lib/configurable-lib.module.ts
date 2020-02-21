import { NgModule, ModuleWithProviders, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { MatCardModule, MatButtonModule, MatSnackBarModule } from '@angular/material';

import { ConfigurableLibComponent } from './configurable-lib.component';
import { CONFIG_INJ_TOK, LibConfig } from './configurable-lib-config';
import { LibDynamicComponent } from './lib-dynamic/lib-dynamic.component';
import { DYNAMIC_COMPONENTS_INJ_TOK } from './configurable-lib.dynamic-components';

@NgModule({
  declarations: [ConfigurableLibComponent, LibDynamicComponent],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: CONFIG_INJ_TOK,
      useValue: LibConfig
    },
    {
      provide: DYNAMIC_COMPONENTS_INJ_TOK,
      useValue: null
    }
  ],
  entryComponents: [LibDynamicComponent],
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
        },
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          useValue: overrides.components,
          multi: true
        },
        {
          provide: DYNAMIC_COMPONENTS_INJ_TOK,
          useValue: overrides.components
        }
      ]
    };
  }
}
