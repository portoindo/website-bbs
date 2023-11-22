import '../styles/global.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from 'next/head';

const theme = createTheme({
  palette: {
    primary: {
      main: "#3535FF",
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
      <>
        <Head>
          <title>Billingual Business Service</title>
          <link rel="icon" href="/images/logo-bbs.webp" />
          <meta name="robots" content="all" />
          <link rel="canonical" href="https://bbstrans.vercel.app/"  key="canonical"/>
          <meta name="description" content="BBS Translation" />
          <meta name="keywords" content="sewa alat penerjemah, BBS translation, BBSTrans, alat penerjemah, alat interpreter, sewa alat interpreter, sewa delegate mic, interpreter equipment rental"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preload" as="image" href="images/home2.webp"></link>
          <link rel="preload" as="image" href="/images/home3.webp"></link>
          <link rel="preload" as="image" href="/images/horizontal4.webp"></link>
        </Head>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
      </>
      );
  }