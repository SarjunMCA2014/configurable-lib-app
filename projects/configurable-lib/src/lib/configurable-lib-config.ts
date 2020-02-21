import { InjectionToken } from '@angular/core';

export const CONFIG_INJ_TOK = new InjectionToken<string>('CONFIG_INJ_TOK');

export class LibConfig {
  static sayHello: string = "Hello from Lib";
  static sayHi: string = "Hi from Lib";
}