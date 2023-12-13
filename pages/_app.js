import '../styles/global.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from 'next/head';

const theme = createTheme({
  palette: {
    primary: {
      main: "#F8841C",
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
          <link rel="canonical" href="https://www.bbstrans.id/"  key="canonical"/>
          <meta name="description" content="Dengan kemajuan teknologi yang pesat, hadirnya beragam interpreter system yang canggih 
          semakin memenuhi kebutuhan klien yang kian eksklusif. Sebagai upaya memenuhi harapan klien, kami telah mendapatkan 
          LISENSI DEALER RESMI dari produsen perangkat interpreter system terkemuka dunia. Kini, kami hadir dengan katalog 
          lengkap berisi contoh-contoh alat interpreter terbaru. Klien-klien kami dapat dengan mudah memilih sesuai kebutuhan. 
          Dengan kelengkapan peralatan interpreter system yang dimiliki, kami berkomitmen memberikan yang terbaik. 
          Hubungi kami di +62 877-3561-5623 9 (Phone & Whatsapp) untuk informasi sewa alat interpreter seperti 
          Tour Guide System, Delegate Mic, dan lainnya." />
          <meta name="keywords" content="sewa alat penerjemah, BBS translation, BBSTrans, alat penerjemah, alat interpreter,
           sewa alat interpreter, sewa delegate mic, interpreter equipment rental, alat interpreter jakarta, Rental Tour Guide System
           Interpreter Equipment Jakarta"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="preload" as="image" href="images/home2.webp"></link>
          <link rel="preload" as="image" href="/images/home3.webp"></link>
          <link rel="preload" as="image" href="/images/horizontal4.webp"></link>
          <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Billingual Business Service",
            "url": "https://www.bbstrans.id/",
            "logo": "https://www.bbstrans.id/images/logo-gradient.webp"
          })}
        </script>
        </Head>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
      </>
      );
  }