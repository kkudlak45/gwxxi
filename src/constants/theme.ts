import { createTheme } from "@mui/material";

const GREEN = "#687659";
const BLUE = "#396B92";
const CHARCOAL = "#2C2A29";
const RED = "#7F3E42";
const YELLOW = "#BB8346";

export const theme = createTheme({
  typography: {
    fontFamily: "Kollektif",
    allVariants: {
      color: CHARCOAL,
    },
    h1: {
      fontFamily: "San Andreas",
    },
    h2: {
      fontFamily: "San Andreas",
      color: BLUE,
    },
    h3: {
      fontFamily: "KGRedHands",
      color: GREEN,
    },
    h4: {
      fontFamily: "KGRedHands",
      color: BLUE,
    },
  },
  palette: {
    primary: {
      main: BLUE,
    },
    secondary: {
      main: GREEN,
    },
    text: {
      primary: "#ffffff",
    },
    error: {
      main: RED,
    },
    warning: {
      main: YELLOW,
    }
  },
})