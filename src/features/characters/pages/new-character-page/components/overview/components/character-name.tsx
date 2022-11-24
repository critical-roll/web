import { ChangeEvent, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { Grid, TextField, Typography } from '@mui/material';
import { CharacterDetails } from '@features/characters/stores';

interface Props {
  details: CharacterDetails;
}

export const CharacterName: FC<Props> = observer(({ details }) => {
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    details.setName(event.target.value);
  };

  return (
    <Grid container direction="column">
      <Typography variant="overline">Character Name</Typography>
      <TextField variant="outlined" value={details.name} onChange={handleNameChange} />
    </Grid>
  );
});
