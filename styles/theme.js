import { createTheme } from '@material-ui/core';

export const theme = createTheme({
  typography: {
    fontFamily: 'Kabel Book',
    color: '#3a5a40',
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          fontSize: '3rem',
          color: 'red',
          backgroundColor: '#d4a373',
        },
      },
    },
  },
  palette: {
    tree: {
      light: '#81C784',
      dark: '#4CAF50',
      trunk: '#795548',
    },
    background: {
      main: '#FFF8E1',
      light: '#F8E5B5',
    },
    text: { main: '#EFEBE9' },
    ocean: {
      main: '#264653',
      light: '#168aad',
    },
  },
});
