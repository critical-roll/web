import { createTheme } from '@mui/material';

export const theme = createTheme({
  // typography: typography,
  // palette: palette,
  palette: {
    primary: {
      main: '#4458f5',
      dark: '#002fc1',
      light: '#8485ff',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#212121',
      dark: '#000000',
      light: '#484848',
      contrastText: '#ffffff',
    },
    background: {
      // default: '#F5F7FC',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: '#fff',
        },
      },
    },
  },
});
