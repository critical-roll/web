import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import { FormControl, Grid, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { CharacterDetails } from '@features/characters/stores';
import { HelpIcon } from '@common/components';
import { Alignment } from '@features/alignments/models';

interface Props {
  details: CharacterDetails;
}

export const CharacterAlignment: FC<Props> = observer(({ details }) => {
  const handleAlignmentChange = (event: SelectChangeEvent) => {
    details.setAlignment(event.target.value as Alignment);
  };

  return (
    <Grid container direction="column">
      <Grid>
        <HelpIcon help="Alignment is your general temperament to others and the world around you.">
          <Typography variant="overline">Alignment</Typography>
        </HelpIcon>
      </Grid>
      <FormControl fullWidth>
        <Select value={details.alignment} onChange={handleAlignmentChange}>
          {Object.values(Alignment).map((alignment) => (
            <MenuItem key={alignment} value={alignment}>
              {alignment}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
});
