import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    "3xs": true;
    "2xs": true;
    "2xl": true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      "3xs": 0,
      "2xs": 320,
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
  palette: {
    primary: {
      main: "#7f6000",
    },
    secondary: {
      main: "#f2df3b",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
