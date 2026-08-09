import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import App from "./App";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7c4dff",
    },
    secondary: {
      main: "#00d4ff",
    },
    background: {
      default: "#07070d",
      paper: "#10101a",
    },
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at 15% 10%, rgba(124,77,255,0.15), transparent 30%), radial-gradient(circle at 85% 20%, rgba(0,212,255,0.10), transparent 30%), #07070d",
          backgroundAttachment: "fixed",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "rgba(7, 7, 13, 0.75)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 8px 30px rgba(0,0,0,0.35)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.075), rgba(255,255,255,0.025))",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.35)",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            background: "rgba(255,255,255,0.035)",
            transition: "all 0.2s ease",
            "& fieldset": {
              borderColor: "rgba(255,255,255,0.12)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(124,77,255,0.6)",
            },
            "&.Mui-focused": {
              boxShadow: "0 0 20px rgba(124,77,255,0.18)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#7c4dff",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          fontWeight: 600,
          transition: "all 0.2s ease",
        },
        contained: {
          boxShadow: "0 0 20px rgba(124,77,255,0.25)",
          "&:hover": {
            boxShadow: "0 0 30px rgba(124,77,255,0.45)",
            transform: "translateY(-1px)",
          },
        },
        outlined: {
          borderColor: "rgba(255,255,255,0.15)",
          "&:hover": {
            borderColor: "#7c4dff",
            background: "rgba(124,77,255,0.08)",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.2s ease",
          "&:hover": {
            background: "rgba(255,70,90,0.12)",
            boxShadow: "0 0 15px rgba(255,70,90,0.15)",
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
