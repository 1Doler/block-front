import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./SideBlock.module.scss";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const theme = createTheme({
  shadows: [
    "none",
    "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  ],
});

export const SideBlock = ({ title, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Paper classes={{ root: styles.root }} elevation={1}>
        <Typography variant="h6" classes={{ root: styles.title }}>
          {title}
        </Typography>
        {children}
      </Paper>
    </ThemeProvider>
  );
};
