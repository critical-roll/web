import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Grid } from '@mui/material';
import { NewCharacterPageStore } from '../../new-character-page.store';
import { CharacterAlignment, CharacterBackground, CharacterName } from './components';

export const Overview: FC = observer(() => {
  const store = NewCharacterPageStore.useStore();

  const handleNextClick = () => {
    store.nextStep();
  };

  return (
    <Grid container direction="column" gap={3} sx={{ width: 600, margin: [0, 'auto'] }}>
      <Grid>
        <CharacterName details={store.details} />
      </Grid>

      <Grid>
        <CharacterAlignment details={store.details} />
      </Grid>

      <Grid>
        <CharacterBackground background={store.background} />
      </Grid>

      <Grid item textAlign="right">
        <Button variant="contained" onClick={handleNextClick}>
          Next
        </Button>
      </Grid>
    </Grid>
  );
});
