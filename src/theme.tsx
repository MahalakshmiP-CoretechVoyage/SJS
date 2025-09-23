import { createTheme } from '@mui/material/styles';
import "@fontsource/poppins";
import "@fontsource/montserrat"; // added since you use Montserrat for h3/h4

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#F9FBFF",
      light: "#ffffff",
    },
    blue: {
      main: "#4169E1",
      light: "#D5E0FF",
      lighter: "#EAEFFF",
      dark: "rgb(0, 123, 85)",
      darker: "rgb(0, 171, 85)",
    },
    yellow: {
      main: "#FEA602",
      light: "#E9DA04",
    },
    green: {
      main: "#149700",
      dark: "#009F25",
    },
    secondary: {
      main: '#333333',
      light: "#6E6D6D",
    },
    success: {
      main: "#0D9900",
    },
    error: {
      main: '#FF3B3B',
    },
    background: {
      default: '#fafafa',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
    },
  },

  typography: {
    h1: {
      fontSize: '36px',
      fontWeight: 500,
      lineHeight: "54px",
      fontFamily: "Poppins",
    },
    h2: {
      fontSize: '14px',
      fontWeight: 300,
      lineHeight: '18px',
      fontFamily: 'Poppins',
      wordWrap: 'break-word',
    },
    h3: {
      fontSize: '36px',
      fontWeight: 600,
      lineHeight: "30px",
      fontFamily: "Montserrat",
    },
    h4: {
      fontSize: '40px',
      fontWeight: 600,
      lineHeight: "25px",
      fontFamily: "Montserrat",
    },
    h5: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: "20px",
      fontFamily: "Poppins",
    },
    h6: {
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "20px",
      fontFamily: "Poppins",
    },
    body1: {
      fontSize: '20px',
      fontWeight: 300,
      lineHeight: "22.5px",
      fontFamily: "Poppins",
    },
    body2: {
      fontSize: '18px',
      fontWeight: 300,
      lineHeight: "21px",
      fontFamily: "Poppins",
    },
 
  },
  

  shape: {
    borderRadius: 8,
  },

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



