import { LibConfig } from 'configurable-lib';

export class AppConfig extends LibConfig {
    static sayHello: string = "Hello from Library - Overridden by App";
}