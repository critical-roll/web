import { makeStyles } from 'tss-react/mui';
import { palette } from './palette';

export const useBaseStyles = makeStyles()((theme) => ({
  gradient: {
    position: 'relative',
    ':before': {
      backgroundImage: `linear-gradient(to bottom,${palette.background},${theme.palette.background.default})`,
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      margin: [0, 'auto'],
      width: '100%',
      height: '100%',
      maxHeight: '320px',
      zIndex: -1,
    },
  },
  shadow: {
    boxShadow: '0px 20px 30px 0px rgba(0,0,0,0.2)',
  },
}));
