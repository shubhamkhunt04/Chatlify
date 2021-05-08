import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#d8e988',
      main: '#1F1F1F',
      dark: '#191919',
      contrastText: '#fff',
    },
    grey: {
      50: '#2a2b2c',
    },
    secondary: {
      main: '#d4e77b',
    },
    warning: {
      main: '#cfe56e',
    },
  },
});

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#eeeeee',
      main: '#d8d8d8',
      dark: '#cccccc',
      contrastText: '#000000',
    },
    grey: {
      50: '#e6e6e6',
    },
    text: {
      primary: '#000000',
    },
    secondary: lightBlue,
  },
});

export { darkTheme, lightTheme };
