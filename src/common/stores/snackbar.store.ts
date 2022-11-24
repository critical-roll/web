import { action, makeObservable, observable } from 'mobx';
import { OptionsObject, SnackbarMessage } from 'notistack';
import { Snackbar } from '@common/models';

export class SnackbarStore {
  @observable
  public list: Array<Snackbar> = [];

  constructor() {
    makeObservable(this);
  }

  @action
  public enqueueSnackbar(message: SnackbarMessage, options?: OptionsObject): void {
    this.list.push({
      key: new Date().getTime() + Math.random(),
      message,
      options,
    });
  }

  @action
  public removeSnackbar(key: number): void {
    this.list = this.list.filter((snackbar) => snackbar.key !== key);
  }
}
