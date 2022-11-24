import { ChangeEvent, FC } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Card,
  CardContent,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { CharacterBackground as CharacterBackgroundStore } from '@features/characters/stores';
import { HelpIcon } from '@common/components';
import { Background } from '@features/backgrounds/models';

interface Props {
  background: CharacterBackgroundStore;
}

export const CharacterBackground: FC<Props> = observer(({ background }) => {
  const handleBackgroundChange = (event: SelectChangeEvent<number>) => {
    background.setType(Number(event.target.value));
  };

  const handleBackgroundTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    background.setText(event.target.value);
  };

  return (
    <>
      <Grid container direction="column">
        <HelpIcon help="Your character's background is simply your characters history. Where do they come from and what were they doing prior to the game you are about to play. ">
          <Typography variant="overline">Background</Typography>
        </HelpIcon>
        <FormControl fullWidth>
          <Select value={background.type} onChange={handleBackgroundChange}>
            <MenuItem value={Background.ACOLYTE}>Acolyte</MenuItem>
            <MenuItem value={Background.CUSTOM}>Custom</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {background.type === Background.ACOLYTE && (
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Acolyte
            </Typography>
            <Typography variant="body2" color="text.secondary">
              You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an
              intermediary between the realm of the holy and the mortal world, performing sacred rites and offering
              sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a
              cleric – performing sacred rites is not the same thing as channeling divine power.
            </Typography>
          </CardContent>
        </Card>
      )}
      {background.type === Background.CUSTOM && (
        <Card variant="outlined" sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Custom
            </Typography>
            <Typography variant="overline" color="text.secondary">
              Write your own background
            </Typography>
            <TextField
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              value={background.text}
              onChange={handleBackgroundTextChange}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
});
