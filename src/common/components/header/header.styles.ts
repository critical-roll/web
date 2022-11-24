import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  root: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  paper: {
    borderColor: theme.palette.divider,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 80,
    boxShadow: '0px 20px 70px 0px rgba(0,0,0,0.2)',
  },
  content: {
    height: '100%',
    padding: 16,
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: 16,
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  link: {
    fontSize: 15,
    textDecoration: 'none',
    color: theme.palette.text.primary,
    ':hover': {
      color: theme.palette.primary.light,
      transition: '0.2s',
    },
  },
}));
