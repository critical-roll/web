import { makeObservable, observable } from 'mobx';
import { createContext, FC, ReactNode, useContext } from 'react';
import { isBrowser } from '@common/utils';
import { SnackbarStore } from './snackbar.store';

let rootStore: RootStore;

class RootStore {
  @observable
  public snackbars: SnackbarStore;

  constructor() {
    this.snackbars = new SnackbarStore();
    makeObservable(this);
  }
}

const initRootStore = () => {
  // Check if we already declare store (client Store), otherwise create one
  const store = rootStore ?? new RootStore();

  // Create a store on every server request
  if (!isBrowser) return store;
  // Otherwise it's client, remember this store and return
  if (!rootStore) rootStore = store;
  return store;
};

interface Props {
  children: ReactNode;
}

const StoreContext = createContext<RootStore | undefined>(undefined);

export const RootStoreProvider: FC<Props> = ({ children }) => {
  const store = initRootStore();

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useRootStore = () => useContext(StoreContext) as RootStore;
