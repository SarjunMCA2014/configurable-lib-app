import { Injectable, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CONFIG_INJ_TOK } from './configurable-lib-config';

@Injectable({
  providedIn: 'root'
})
export class ConfigurableLibService {

  duration: number = 3000;

  constructor(private matSnackBar: MatSnackBar, @Inject(CONFIG_INJ_TOK) private config: any) { }

  sayHello() {
    this.matSnackBar.open(this.config.sayHello, "Okay", { duration: this.duration });
  }

  sayHi() {
    this.matSnackBar.open(this.config.sayHi, "Okay", { duration: this.duration });
  }
}
