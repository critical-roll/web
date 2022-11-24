import { FC, useEffect } from 'react';
import { autorun } from 'mobx';
import { useSnackbar } from 'notistack';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '@common/stores';

export const SnackbarHandler: FC = observer(() => {
  const store = useRootStore();
  const { enqueueSnackbar } = useSnackbar();

  let displayed: Array<number> = [];

  const storeDisplayed = (id: number) => {
    displayed = [...displayed, id];
  };

  useEffect(() => {
    autorun(() => {
      store.snackbars.list.forEach((snackbar) => {
        // Do nothing if snackbar is already displayed
        if (displayed.includes(snackbar.key)) return;
        // Display snackbar using notistack
        enqueueSnackbar(snackbar.message, { ...snackbar.options, autoHideDuration: 4000 });
        // Keep track of snackbars that we've displayed
        storeDisplayed(snackbar.key);
        // Dispatch action to remove snackbar from mobx store
        store.snackbars.removeSnackbar(snackbar.key);
      });
    });
  }, []);

  return null;
});
