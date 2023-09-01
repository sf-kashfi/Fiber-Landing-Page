import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      light: "#fbf8f3",
      dark: "#4d13d1",
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: "Inter",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;