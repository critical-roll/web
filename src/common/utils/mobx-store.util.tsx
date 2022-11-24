import { FC, createContext, useContext, ReactNode, Context } from 'react';
import { Constructable } from '@common/models';

interface Props {
  children: ReactNode;
  hydration?: object;
}

export class MobxStore<StoreClass extends Constructable<StoreInstance>, StoreInstance = InstanceType<StoreClass>> {
  private context!: Context<StoreInstance>;
  private storeClass: StoreClass;

  constructor(storeClass: StoreClass) {
    this.storeClass = storeClass;
  }

  public useStore(): StoreInstance {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useContext(this.context);
  }

  get StoreProvider(): FC<Props> {
    const StoreContext = createContext<StoreInstance>({} as StoreInstance);
    this.context = StoreContext;

    const StoreProvider: FC<Props> = ({ children, hydration }: Props) => (
      <StoreContext.Provider value={new this.storeClass(hydration)}>{children}</StoreContext.Provider>
    );

    return StoreProvider;
  }
}
