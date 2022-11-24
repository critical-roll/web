import { OptionsObject, SnackbarMessage } from 'notistack';

export interface Snackbar {
  key: number;
  message: SnackbarMessage;
  options?: OptionsObject;
}
