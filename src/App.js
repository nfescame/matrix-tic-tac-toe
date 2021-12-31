import React from "react";
import Router from "./router";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { green, lightGreen } from "@material-ui/core/colors";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: "Noto Serif Display",
    },
    spacing: 4,
    palette: {
      primary: green,
      secondary: lightGreen,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router />;
    </ThemeProvider>
  );
}
export default App;
