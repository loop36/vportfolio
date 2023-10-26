import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    fontFamily: ["Nunito Sans", "sans-serif"].join(","),
    h1: {
      fontFamily: "Encode Sans Semi Expanded",
      fontWeight: 800,
      fontSize: 72,
    },
  },
  palette: {
    primary: { main: "#2E6CB6" },
    secondary: {
      main: "#2b363b",
    },
  },
});
