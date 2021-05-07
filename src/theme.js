import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#d8e988",
      main: "#1F1F1F",
      dark: "#191919",
      contrastText: "#fff",
    },
    grey: {
      50: "#2a2b2c",
    },
    secondary: {
      main:"#d4e77b"
    },
    warning:{
      main:'#cfe56e'
    },
  },
});

export { darkTheme };
