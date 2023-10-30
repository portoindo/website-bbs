import '../styles/global.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: "#01013F",
    },
    secondary:{
      main:"#F5E8B7"
    },
    error: {
      main: "#AB0D0E",
    },
  },
});

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
      );
  }