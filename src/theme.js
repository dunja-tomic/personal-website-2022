import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#629677", // green
    },
    secondary: {
      main: "#FAC8CD", // pink
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      textTransform: "none",
    },
    h1: {
      fontSize: "3.75rem",
      fontWeight: "700",
    },
    h2: {
      fontWeight: "700",
    },
    // h3: {
    //   fontWeight: "700",
    // },
  },
});

export default theme;
