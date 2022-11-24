import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { NewCharacterPageStore } from '../../new-character-page.store';
import { Overview } from '../overview/overview';
import { Race } from '../race/race';

export const Steps: FC = observer(() => {
  const store = NewCharacterPageStore.useStore();

  switch (store.step) {
    case 0:
      return <Overview />;
    case 1:
      return <Race />;
    default:
      return <></>;
  }
});
