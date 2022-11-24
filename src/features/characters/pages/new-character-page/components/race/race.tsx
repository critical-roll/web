import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Grid } from '@mui/material';
import { useRootStore } from '@common/stores';
import { NewCharacterPageStore } from '../../new-character-page.store';
import { RaceList } from './components';

export const Race: FC = observer(() => {
  const store = NewCharacterPageStore.useStore();
  const rootStore = useRootStore();

  const handleNextClick = () => {
    store.nextStep();
    rootStore.snackbars.enqueueSnackbar('Test');
  };

  const handleBackClick = () => {
    store.previousStep();
  };

  return (
    <Grid container direction="column" gap={3} sx={{ width: 600, margin: [0, 'auto'] }}>
      <Grid item>
        <RaceList />
      </Grid>
      <Grid item>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button variant="contained" onClick={handleBackClick}>
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleNextClick}>
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
});
