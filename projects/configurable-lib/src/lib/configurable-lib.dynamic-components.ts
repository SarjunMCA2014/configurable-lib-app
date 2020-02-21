import { InjectionToken } from '@angular/core';
import { LibDynamicComponent } from './lib-dynamic/lib-dynamic.component';

export const DYNAMIC_COMPONENTS_INJ_TOK = new InjectionToken<string>('DYNAMIC_COMPONENTS_INJ_TOK');

export const LIB_DYNAMIC_COMPONENTS: any = [{
    LibDynamicComponent: LibDynamicComponent
}];