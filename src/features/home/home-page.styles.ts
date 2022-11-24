import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()({
  root: {
    position: 'relative',
    height: '100vh',
  },
  background: {
    position: 'absolute',
    height: '100%',
    top: 0,
    width: '100%',
    backgroundImage: "url('./assets/img/homepage-background.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: -1,
    ':before': {
      backgroundImage: 'linear-gradient(to bottom,rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.7) 100%)',
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
    },
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '30%',
    color: '#ffffff',
    textShadow: '0 2px 20px rgba(0,0,0,.7)',
  },
});
