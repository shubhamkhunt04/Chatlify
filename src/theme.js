import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#1A1D24',
      main: '#0F131A',
      dark: '#222831',
      contrastText: '#fff',
    },
    grey: {
      50: '#2a2b2c',
    },
    secondary: red,
  },
});

export { darkTheme };
