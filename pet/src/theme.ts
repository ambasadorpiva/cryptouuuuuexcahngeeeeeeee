import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f7931a",
    },
    background: {
      default: "#0a0e17",
      paper: "rgb(22 26 35)",
    },
  },
});

export default darkTheme;
