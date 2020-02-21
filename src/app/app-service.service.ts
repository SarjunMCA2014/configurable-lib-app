import { ConfigurableLibService } from 'configurable-lib';
import { AppConfig } from './app-config';

export class AppServiceService extends ConfigurableLibService {
  sayHi() {
    this.matSnackBar.open("This method is overridden by App", "Okay", { duration: this.duration });
  }
}
