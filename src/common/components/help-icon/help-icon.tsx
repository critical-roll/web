import { FC, ReactNode } from 'react';
import Help from '@mui/icons-material/Help';
import { Grid, Tooltip } from '@mui/material';
import { useStyles } from './help-icon.styles';

interface Props {
  help: string;
  children: ReactNode;
}

export const HelpIcon: FC<Props> = ({ children, help }) => {
  const { classes } = useStyles();

  return (
    <Grid container alignItems="center">
      {children}
      <Tooltip title={help}>
        <Help className={classes.icon}></Help>
      </Tooltip>
    </Grid>
  );
};
