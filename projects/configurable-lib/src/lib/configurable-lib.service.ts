import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ConfigurableLibService {

  duration: number = 3000;

  constructor(private matSnackBar: MatSnackBar) { }

  sayHello() {
    this.matSnackBar.open("Hello from Lib", "Okay", { duration: this.duration });
  }

  sayHi() {
    this.matSnackBar.open("Hi from Lib", "Okay", { duration: this.duration });
  }
}
