import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import CarouselFade from '../components/carouselFade';
import CarouselSlide from '../components/carouselSlide';
import TiktokIcon from '../public/icons/tiktok';
import InstagramIcon from '../public/icons/instagram';
import LinkedInIcon from '../public/icons/linkedin';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {

  const [contents, setContents] = useState([
    {id:1,img:"/images/slide1.jpg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus ullamcorper erat, sed tincidunt dolor ullamcorper eget. Suspendisse potenti. Quisque maximus varius felis a convallis. Praesent aliquet arcu ac purus fringilla aliquet."},
    {id:2,img:"/images/slide2.jpg",desc:"Maecenas viverra justo in condimentum mattis. Integer fermentum interdum cursus. Phasellus dignissim, enim et iaculis sagittis, magna metus commodo dui, nec maximus augue tellus at nulla. Etiam erat massa, scelerisque eget ex vel, vestibulum porta purus. Pellentesque at lectus nibh. Nulla quis purus eget purus bibendum vehicula non sit amet sapien. Duis non vestibulum libero. Nulla at magna elementum, eleifend purus ac, finibus quam."},
    {id:3,img:"/images/slide3.jpg", desc:"Cras hendrerit lorem vitae libero finibus auctor ut ac nunc. Quisque facilisis ligula sit amet sem porta ornare. In ac dictum leo. Quisque maximus libero nec semper tempus. Mauris eleifend ex in nulla porttitor pharetra. Aliquam egestas non lorem eget ultricies. Suspendisse quis maximus ligula."},
    {id:4,img:"/images/slide4.jpg", desc:"Proin ut ligula id elit hendrerit luctus. Ut id cursus mi. Morbi vitae congue dolor, ut suscipit dui. Pellentesque blandit turpis in dolor facilisis, ac aliquam mauris imperdiet. Fusce tristique vehicula nisi. In sagittis feugiat nisl id scelerisque. Nulla sodales lobortis posuere. Pellentesque turpis lorem"},
    {id:5,img:"/images/slide1.jpg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus ullamcorper erat, sed tincidunt dolor ullamcorper eget. Suspendisse potenti. Quisque maximus varius felis a convallis. Praesent aliquet arcu ac purus fringilla aliquet."},
    {id:6,img:"/images/slide2.jpg",desc:"Maecenas viverra justo in condimentum mattis. Integer fermentum interdum cursus. Phasellus dignissim, enim et iaculis sagittis, magna metus commodo dui, nec maximus augue tellus at nulla. Etiam erat massa, scelerisque eget ex vel, vestibulum porta purus. Pellentesque at lectus nibh. Nulla quis purus eget purus bibendum vehicula non sit amet sapien. Duis non vestibulum libero. Nulla at magna elementum, eleifend purus ac, finibus quam."},
    {id:7,img:"/images/slide3.jpg", desc:"Cras hendrerit lorem vitae libero finibus auctor ut ac nunc. Quisque facilisis ligula sit amet sem porta ornare. In ac dictum leo. Quisque maximus libero nec semper tempus. Mauris eleifend ex in nulla porttitor pharetra. Aliquam egestas non lorem eget ultricies. Suspendisse quis maximus ligula."},
    {id:8,img:"/images/slide4.jpg", desc:"Proin ut ligula id elit hendrerit luctus. Ut id cursus mi. Morbi vitae congue dolor, ut suscipit dui. Pellentesque blandit turpis in dolor facilisis, ac aliquam mauris imperdiet. Fusce tristique vehicula nisi. In sagittis feugiat nisl id scelerisque. Nulla sodales lobortis posuere. Pellentesque turpis lorem"},
    {id:9,img:"/images/slide1.jpg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus ullamcorper erat, sed tincidunt dolor ullamcorper eget. Suspendisse potenti. Quisque maximus varius felis a convallis. Praesent aliquet arcu ac purus fringilla aliquet."},
    {id:10,img:"/images/slide2.jpg",desc:"Maecenas viverra justo in condimentum mattis. Integer fermentum interdum cursus. Phasellus dignissim, enim et iaculis sagittis, magna metus commodo dui, nec maximus augue tellus at nulla. Etiam erat massa, scelerisque eget ex vel, vestibulum porta purus. Pellentesque at lectus nibh. Nulla quis purus eget purus bibendum vehicula non sit amet sapien. Duis non vestibulum libero. Nulla at magna elementum, eleifend purus ac, finibus quam."},
    {id:11,img:"/images/slide3.jpg", desc:"Cras hendrerit lorem vitae libero finibus auctor ut ac nunc. Quisque facilisis ligula sit amet sem porta ornare. In ac dictum leo. Quisque maximus libero nec semper tempus. Mauris eleifend ex in nulla porttitor pharetra. Aliquam egestas non lorem eget ultricies. Suspendisse quis maximus ligula."},
    {id:12,img:"/images/slide4.jpg", desc:"Proin ut ligula id elit hendrerit luctus. Ut id cursus mi. Morbi vitae congue dolor, ut suscipit dui. Pellentesque blandit turpis in dolor facilisis, ac aliquam mauris imperdiet. Fusce tristique vehicula nisi. In sagittis feugiat nisl id scelerisque. Nulla sodales lobortis posuere. Pellentesque turpis lorem"}
  ])


  const loadClientsImg = () => {
    let images = [];
    for (let i = 0; i < Math.floor(contents.length/3); i++){
      images.push(
        <>
           <div className={styles['horizontal-imgs']}>
              <Image
                  src={contents[i*3].img} // Route of the image file
                  height={200} // Desired size with correct aspect ratio
                  width={300} // Desired size with correct aspect ratio
                  alt="Default Profile"
                  className={styles['horizontal-img']}
              />
              <Image
                  src={contents[(i*3)+1].img} // Route of the image file
                  height={200} // Desired size with correct aspect ratio
                  width={300} // Desired size with correct aspect ratio
                  alt="Default Profile"
                  className={styles['horizontal-img']}
              />
            
          </div>
          <Image
              src={contents[(i*3)+2].img} // Route of the image file
              height={350} // Desired size with correct aspect ratio
              width={230} // Desired size with correct aspect ratio
              alt="Default Profile"
              className={styles['vertical-img']}
          />
        </>
      )
    }
    return images
  }


  return (
    <>
     <Head>
        <title>Billingual Business Service</title>
        <link rel="icon" href="/images/logo-bbs.png" />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://bbstrans.vercel.app/"  key="canonical"/>
        <meta name="description" content="BBS Translation" />
        <meta name="keywords" content="sewa alat penerjemah, BBS translation, BBSTrans, alat penerjemah, alat interpreter, sewa alat interpreter, sewa delegate mic, interpreter equipment rental"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
      <Navbar/>
      <Layout reverse={false} id='home'>
        <div className={styles.home}>
          <div className={styles['home-txt']}>
            <h3>Your Trusted Sworn Translator & Interpreter in Jakarta, Indonesia</h3>
            <p>We offer certified translation service for various languanges and high-quality interpreting equipment rental, including Tour Guide Systems and Delegate Mic.</p>
            <p>Professional, efficient, and competitive prices!</p>
            <h6>Established Since 2000</h6>
          </div>
          <CarouselFade/>

        </div>
        
      </Layout>
      <Layout reverse={true} >
        <h1 className={styles["section-title"]}>BBS Values</h1>
        <div className={styles.values}>
          <div className={styles.value}>
            
          </div>
          <div className={styles.value}>
            
          </div>
          <div className={styles.value}>
            
          </div>
        </div>
      </Layout>
      <Layout reverse={false} id='portofolio'>
        <h1 className={styles["section-title"]}>Portofolio</h1>
        <div className={styles.portofolio}>
          <CarouselSlide/>
        </div>
        <h5 className={styles['portofolio-txt']}>Trusted for over Two Decades</h5>
      </Layout>
      <Layout reverse={true} id='service'>
        <h1 className={styles["section-title"]}>Service</h1>
        <div className={styles.services}>
          <div className={styles.service}>
            
          </div>
          <div className={styles.service}>
            
            </div>
        </div>
      </Layout>
      <Layout reverse={false} id='our-clients'>
        <h1 className={styles["section-title"]}>Our Clients</h1>
        <div className={styles.clients}>
          {loadClientsImg()}
        </div>
      </Layout>
      <Layout reverse={true}>
        <h1 className={styles["section-title"]}>Let's Collaborate!</h1>
        <div>
          <div>
            
          </div>
        </div>
      </Layout>
      <footer id='contact-us'>
        {/* <div className={`${styles["footer-sections"]} ${styles.titles}`}>
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

        </div> */}
        <div className={styles["footer-sections"]}>
          {/* <div> */}
            <div className={styles["footer-section"]}>
              <h2 className={styles["footer-section-title"]}>Our Office</h2>
              <p>Woodland Residence Tower Matoa, Jl. Raya Kalibata, RT.6/RW.7, Rawajati, Kec. Pancoran, Kota Jakarta Selatan, Daerah khusus Ibukota Jakarta 12750</p>
              <p>Phone:&nbsp;+62 887-3561-5623</p>
              <p>Email:&nbsp;info@bbstrans.com</p>
            </div>
            <div className={styles["footer-section"]}>
              <h2 className={styles["footer-section-title"]}>Follow us</h2>
              <Link href="https://www.tiktok.com/@bbstrans">
                <p className={styles["social-media"]}><TiktokIcon/>&nbsp;BBSTrans</p>
              </Link>
              <Link href="https://www.instagram.com/bbstrans/">
                <p className={styles["social-media"]}>
                    <InstagramIcon/>&nbsp;BBSTranslation
                </p>
              </Link>
              <Link href="https://www.linkedin.com/in/bilingual-business-services-b26a0b162/">
                <p className={styles["social-media"]}><LinkedInIcon/>&nbsp;BBSTranslation</p>
              </Link>
            </div>
            <div className={styles["footer-section"]}>
              <h2 className={styles["footer-section-title"]}>Tags</h2>
              <p>Alamat</p>
            </div>
            <div className={styles["footer-section"]}>
              <h2 className={styles["footer-section-title"]}>Help & Support</h2>
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
