import { FC, MouseEvent, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Paper } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Race } from '@features/races/models';
import { RacesQuery } from '@features/races/graphql';
import { NewCharacterPageStore } from '../../../new-character-page.store';

export const RaceList: FC = observer(() => {
  const store = NewCharacterPageStore.useStore();

  const handleItemClick = (race: Race) => {
    store.race.setValue(race);
  };

  const handleInfoIconClick = (event: MouseEvent<HTMLButtonElement>, race: Race) => {
    alert(race);
    event.stopPropagation();
  };

  const isSelected = (race: Race) => {
    return store.race.value === race;
  };

  const loadRaces = async () => {
    await RacesQuery.query();
  };

  useEffect(() => {
    loadRaces();
  }, []);

  return (
    <Paper variant="outlined">
      <List disablePadding>
        {Object.values(Race).map((race) => (
          <ListItemButton
            key={race}
            disableTouchRipple={isSelected(race)}
            selected={isSelected(race)}
            onClick={() => handleItemClick(race)}
          >
            <ListItem
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="info"
                  color={isSelected(race) ? 'primary' : 'default'}
                  onClick={(event) => handleInfoIconClick(event, race)}
                >
                  <InfoIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar
                  alt={race}
                  variant="rounded"
                  src="https://www.dndbeyond.com/avatars/9/364/636327456390157492.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"
                />
              </ListItemAvatar>
              <ListItemText
                primary={race}
                secondary="Dwarves are short and stout and tend to be skilled warriors and craftmen in stone and metal."
              />
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
});
