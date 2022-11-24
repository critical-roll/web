import { Card, CardContent, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { CompendiumPageStore } from '@features/compendium/pages/compendium-page/compendium-page.store';
import { FiltersMonsters } from './filters-monsters';

export const Filters: FC = observer(() => {
  const store = CompendiumPageStore.useStore();

  const variant = () => {
    switch (store.category) {
      case 1:
        return <FiltersMonsters />;
    }
  };

  return (
    <Card variant="outlined" sx={{ background: 'none' }}>
      <CardContent>
        <Typography variant="button">Filters</Typography>
        {variant()}
      </CardContent>
    </Card>
  );
});
