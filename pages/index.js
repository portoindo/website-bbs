import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import CarouselFade from '../components/carouselFade';
import CarouselSlide from '../components/carouselSlide';
import TiktokIcon from '../public/icons/tiktok';
import InstagramIcon from '../public/icons/instagram';
import LinkedInIcon from '../public/icons/linkedin';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Layout reverse={false}>
        <div className={styles.home}>
          <div className={styles['home-txt']}>
            <h3>Your Trusted Sworn Translator & Interpreter in Jakarta, Indonesia</h3>
            <p>We offer certified translation service for various languanges and high-quality interpreting equipment rental, including Tour Guide Systems and Delegate Mic.</p>
            <p>Professional, efficient, and competitive prices!</p>
            <h6>Established since 2000</h6>
          </div>
          <CarouselFade/>

        </div>
        
      </Layout>
      <Layout reverse={true}>
        <h1>BBS Values</h1>
        <div>
          <div>
            
          </div>
        </div>
      </Layout>
      <Layout reverse={false}>
        <h1>Portofolio</h1>
        <div className={styles.portofolio}>
          <CarouselSlide/>
        </div>
        <h5 className={styles['portofolio-txt']}>Trusted for over Two Decades</h5>
      </Layout>
      <Layout reverse={true}>
        <h1>Service</h1>
        <div>
          <div>
            
          </div>
        </div>
      </Layout>
      <Layout reverse={false}>
        <h1>Our Clients</h1>
        <div>
          <div>
            
          </div>
        </div>
      </Layout>
      <Layout reverse={true}>
        <h1>Let's Collaborate!</h1>
        <div>
          <div>
            
          </div>
        </div>
      </Layout>
      <footer>
        <div className={`${styles["footer-sections"]} ${styles.titles}`}>
            <div className={styles["footer-section-lg"]}>
              <h2 className={styles["footer-section-title"]}>Our Office</h2>
            </div>
            <div className={styles["footer-section"]}>
              <h2 className={styles["footer-section-title"]}>Follow us</h2>
            </div>
            <div className={styles["footer-section"]}>
              <h2 className={styles["footer-section-title"]}>Tags</h2>
            </div>
            <div className={styles["footer-section-lg"]}>
              <h2 className={styles["footer-section-title"]}>Help & Support</h2>
            </div>

        </div>
        <div className={styles["footer-sections"]}>
          {/* <div> */}
            <div className={styles["footer-section-lg"]}>
              {/* <h2 className={styles["footer-section-title"]}>Our Office</h2> */}
              <p>alamat</p>
              <p>phone</p>
              <p>email</p>
            </div>
            <div className={styles["footer-section"]}>
              {/* <h2 className={styles["footer-section-title"]}>Follow us</h2> */}
              <p className={styles["social-media"]}><TiktokIcon/>&nbsp;Tiktok</p>
              <p className={styles["social-media"]}><InstagramIcon/>&nbsp;Instagram</p>
              <p className={styles["social-media"]}><LinkedInIcon/>&nbsp;LinkedIn</p>
            </div>
            <div className={styles["footer-section"]}>
              {/* <h2 className={styles["footer-section-title"]}>Tags</h2> */}
              <p>Alamat</p>
            </div>
            <div className={styles["footer-section-lg"]}>
              {/* <h2 className={styles["footer-section-title"]}>Help & Support</h2> */}
              <p>terms & conditions</p>
              <p>Contact Us</p>
            </div>
          {/* </div> */}
        </div>
        <p className={styles.copyright}>Ⓒ Copyright 2023 Billingual Business Service</p>
      </footer>
      
    </>
  );
}
