import { Box, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { CompendiumPageStore } from '@features/compendium/pages/compendium-page/compendium-page.store';

export const FiltersMonsters: FC = observer(() => {
  const store = CompendiumPageStore.useStore();

  return (
    <>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="overline">Search</Typography>
        <TextField size="small" variant="outlined" fullWidth />
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="overline">Type</Typography>
        <FormControl fullWidth>
          <Select value={0} size="small">
            <MenuItem value={10}>Beast</MenuItem>
            <MenuItem value={20}>Elemental</MenuItem>
            <MenuItem value={30}>Giant</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
});
