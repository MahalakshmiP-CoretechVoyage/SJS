import { createTheme } from "@mui/material/styles";
import "@fontsource/poppins";
import "@fontsource/montserrat";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#F9FBFF", light: "#ffffff" },
    blue: {
      main: "#4169E1",
      light: "#D5E0FF",
      lighter: "#EAEFFF",
      dark: "rgb(0, 123, 85)",
      darker: "rgb(0, 171, 85)",
    },
    yellow: { main: "#FEA602", light: "#E9DA04" },
    green: { main: "#149700", dark: "#009F25" },
    secondary: { main: "#333333", light: "#6E6D6D" },
    success: { main: "#0D9900" },
    error: { main: "#FF3B3B" },
    background: { default: "#fafafa", paper: "#ffffff" },
    text: { primary: "#000000", secondary: "#ffffff" },
  },

  typography: {
    h1: {
      fontFamily: "Poppins",
      fontWeight: 500,
      lineHeight: "54px",
      fontSize: "28px",
      "@media (min-width:600px)": { fontSize: "32px" },
      "@media (min-width:900px)": { fontSize: "36px" },
      "@media (min-width:1200px)": { fontSize: "42px" },
      "@media (min-width:1536px)": { fontSize: "48px" },
    },
    h2: {
      fontFamily: "Poppins",
      fontWeight: 300,
      lineHeight: "18px",
      fontSize: "12px",
      "@media (min-width:600px)": { fontSize: "14px" },
      "@media (min-width:900px)": { fontSize: "10px" },
      "@media (min-width:1200px)": { fontSize: "12px" },
      "@media (min-width:1536px)": { fontSize: "15px" },
    },
    h3: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      lineHeight: "30px",
      fontSize: "24px",
      "@media (min-width:600px)": { fontSize: "28px" },
      "@media (min-width:900px)": { fontSize: "32px" },
      "@media (min-width:1200px)": { fontSize: "36px" },
      "@media (min-width:1536px)": { fontSize: "40px" },
    },
    h4: {
      fontFamily: "Montserrat",
      fontWeight: 600,
      lineHeight: "25px",
      fontSize: "26px",
      "@media (min-width:600px)": { fontSize: "30px" },
      "@media (min-width:900px)": { fontSize: "34px" },
      "@media (min-width:1200px)": { fontSize: "40px" },
      "@media (min-width:1536px)": { fontSize: "44px" },
    },
    h5: {
      fontFamily: "Poppins",
      fontWeight: 500,
      lineHeight: "20px",
      fontSize: "16px",
      "@media (min-width:600px)": { fontSize: "18px" },
      "@media (min-width:900px)": { fontSize: "15px" },
      "@media (min-width:1200px)": { fontSize: "15px" },
      "@media (min-width:1536px)": { fontSize: "15px" },
    },
    h6: {
      fontFamily: "Poppins",
      fontWeight: 600,
      lineHeight: "20px",
      fontSize: "16px",
      "@media (min-width:600px)": { fontSize: "18px" },
      "@media (min-width:900px)": { fontSize: "20px" },
      "@media (min-width:1200px)": { fontSize: "22px" },
      "@media (min-width:1536px)": { fontSize: "24px" },
    },
    body1: {
      fontFamily: "Poppins",
      fontWeight: 300,
      lineHeight: "22.5px",
      fontSize: "14px",
      "@media (min-width:600px)": { fontSize: "16px" },
      "@media (min-width:900px)": { fontSize: "18px" },
      "@media (min-width:1200px)": { fontSize: "20px" },
      "@media (min-width:1536px)": { fontSize: "18px" },
    },
    body2: {
      fontFamily: "Poppins",
      fontWeight: 300,
      lineHeight: "21px",
      fontSize: "12px",
      "@media (min-width:600px)": { fontSize: "14px" },
      "@media (min-width:900px)": { fontSize: "16px" },
      "@media (min-width:1200px)": { fontSize: "20px" },
      "@media (min-width:1536px)": { fontSize: "15px" },
    },
  },

  shape: { borderRadius: 8 },

  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.h6,
          textTransform: "none",
        }),
      },
    },
  },
});

export default theme;
