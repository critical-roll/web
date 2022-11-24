import { Card, CardContent, Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useBaseStyles } from '@styles';
import { CompendiumPageStore } from '@features/compendium/pages/compendium-page/compendium-page.store';
import { Filters } from '../filters/filters';

export const Content: FC = observer(() => {
  const { classes: baseClasses } = useBaseStyles();
  const store = CompendiumPageStore.useStore();

  if (store.category < 0) {
    return <>No Category</>;
  }

  return (
    <Grid container gap={4}>
      <Grid item>
        <Filters />
      </Grid>
      <Grid item xs>
        <Card className={baseClasses.shadow} variant="outlined">
          <CardContent>Test</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
});
