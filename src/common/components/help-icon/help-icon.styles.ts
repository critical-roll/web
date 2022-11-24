import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginLeft: 4,
    width: 20,
    height: 20,
  },
}));
