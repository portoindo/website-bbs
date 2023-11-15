import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import CarouselFade from '../components/carouselFade';
import CarouselSlide from '../components/carouselSlide';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { clientsData, portofoliosData, articlesData, servicesData } from '../components/data';
import Footer from '../components/footer';

export default function Home() {
  const [portofolio, setPortofolio] = useState(portofoliosData)
  const [clients, setClients] = useState(clientsData)
  const [articles, setArticles] = useState(articlesData)
  const [services, setServices] = useState(servicesData)

  const imgContainer = useRef()

  const loadPortofolioImg = () => {
    let images = [];
    for (let i = 0; i < Math.round(portofolio.length/3); i++){
      images.push(
        <>
           <div>
            {portofolio[i*3]?
              <div className={styles['img-container']} ref={imgContainer}>
                <Image
                    src={portofolio[i*3].img} // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={300} // Desired size with correct aspect ratio
                    alt="portofolio"
                    className={`${styles['horizontal-img']} ${styles.porto}`}
                />
                <div className={styles['img-desc']}> asdfa sd</div>
              </div>
            :<></>}
            {portofolio[(i*3)+1]?
              <div className={styles['img-container']} ref={imgContainer}>
                <Image
                    src={portofolio[(i*3)+1].img} // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={300} // Desired size with correct aspect ratio
                    alt="portofolio"
                    className={`${styles['horizontal-img']} ${styles.proto}`}
                />
               <div className={styles['img-desc']}> asdfa sd</div>
              </div>
            :<></>}
            
          </div>
          <div className={styles['vertical-center']}>
          {portofolio[(i*3)+2]?
            <div className={styles['img-container']} ref={imgContainer}>
              <Image
                  src={portofolio[(i*3)+2].img} // Route of the image file
                  height={350} // Desired size with correct aspect ratio
                  width={230} // Desired size with correct aspect ratio
                  alt="portofolio"
                  className={`${styles['vertical-img']} ${styles.proto}`}
              />
              <div className={styles['img-desc']}> zzzzzzzzzzz zzzzzz</div>
              </div>  
          :<></>}
          </div>
        </>
      )
    }
    return images
  }

  const loadClientsImg = () => {
    let images = [];
    for (let i = 0; i < Math.round(clients.length/2); i++){
      if (i%2 !== 0){
        images.push(
          <div>
            {clients[i*2]?
             <Image
                 src={clients[i*2].img} // Route of the image file
                 height={150} // Desired size with correct aspect ratio
                 width={200} // Desired size with correct aspect ratio
                 alt="client"
                 className={`${styles['square-img']} ${styles.client}`}
             />
             :<></>}
             {clients[(i*2)+1]?
              <Image
                  src={clients[(i*2)+1].img} // Route of the image file
                  height={200} // Desired size with correct aspect ratio
                  width={200} // Desired size with correct aspect ratio
                  alt="client"
                  className={`${styles['square-img']} ${styles.client}`}
              />
            :<></>}
           
         </div>
       )
      }else{
        images.push(
          <div className={styles['horizontal-imgs']}>
             <Image
                 src={clients[i*2].img} // Route of the image file
                 height={200} // Desired size with correct aspect ratio
                 width={300} // Desired size with correct aspect ratio
                 alt="client"
                 className={`${styles['horizontal-img-sm']} ${styles.client}`}
             />
             <Image
                 src={clients[(i*2)+1].img} // Route of the image file
                 height={200} // Desired size with correct aspect ratio
                 width={300} // Desired size with correct aspect ratio
                 alt="client"
                 className={`${styles['horizontal-img-sm']} ${styles.client}`}
             />
           
         </div>
       )

      }
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

      <Layout isblue={false} id='home'>
        <div className={styles.home}>
          <div className={styles['home-txt']}>
            <h1>Your Trusted Sworn Translator & Interpreter.</h1>
            <p>We offer certified translation service for various languanges and high-quality interpreting equipment rental, including Tour Guide Systems and Delegate Mic.</p>
            <p>Professional, efficient, and competitive prices!</p>
            <h6>Established Since 2000</h6>
          </div>
          <CarouselFade/>
        </div>
      </Layout>

      <Layout isblue={false} img="images/background2.jpg">
        <div className={styles["article-section-title"]}>
          <h2>Why Choose BBS?</h2>
          <h3>OUR VALUE</h3>
        </div>
        <div className={styles.values}>
          {articles.map((article) => 
              <div className={styles.card}>
                <Image
                  src={article.img} // Route of the image file
                  height={200} // Desired size with correct aspect ratio
                  width={320} // Desired size with correct aspect ratio
                  alt="client"
                  className={styles['article-img']}
                />
                <div className={styles['article-txt']}>
                  <h4>{article.title}</h4>
                  <p>{article.desc}</p>
                  <Link className={styles["article-link"]} href={`/articles/${article.id}`}><p>more reading</p></Link>
                </div>
              
              </div>
          )}
        </div>
      </Layout>

      <Layout isblue={true} id='portofolio' img="images/home3.png">
        <div className={styles["portofolio-content"]}>
          <h2>PORTOFOLIO</h2>
          <h3>OUR EVENTS</h3>
          <div className={styles.portofolio}>
            {/* <CarouselSlide/> */}
            {loadPortofolioImg()}
          </div>
          {/* <h5 className={styles['portofolio-txt']}>Trusted for over Two Decades</h5> */}
        </div>
      </Layout>

      <Layout isblue={false} id='service' img='/images/home2.png'>
        {/* <h1 className={styles["section-title"]}>Service</h1> */}
        <div className={styles.services}>
          {services.map((service) => 
           <div className={styles.card}>
              <Image
                src={service.img} // Route of the image file
                height={200} // Desired size with correct aspect ratio
                width={320} // Desired size with correct aspect ratio
                alt="client"
                className={styles['service-img']}
              />
              <h2 className={styles["service-card-title"]}>{service.title}</h2>
              <Link className={styles["service-link"]} href={`/`}><p>pesan sekarang</p></Link>
            </div>
          )}
          <div className={styles["service-txt"]}>
            <h2>OUR SERVICE</h2>
            <h3>ONE STOP SERVICE FOR YOUR LANGUAGE NEEDS</h3>
          </div>
        </div>
      </Layout>

      <Layout isblue={false} id='our-clients' img="images/home3.png">
        <div className={styles["our-clients-content"]}>
          <h2>OUR CLIENTS</h2>
          <h3>OUR HAPPY COSTOMERS</h3>
          <div className={styles.clients}>
            {loadClientsImg()}
          </div>
        </div>
      </Layout>
      <Layout isblue={true} img="images/home3.png">
        <div className={styles.collaborate}>
          <div className={styles["collaborate-content"]}>
            <Image
              src={"/images/team.jpeg"} // Route of the image file
              height={350} // Desired size with correct aspect ratio
              width={500} // Desired size with correct aspect ratio
              alt="collaborate"
              className={styles['collaborate-img']}
            />
            <div className={styles['collaborate-txt']}>
              <h1>Let's Collaborate!</h1>
              <h3>BILLINGUAL BUSINESS SERVICE</h3>
              <p>
                Seiring dengan perkembangan teknologi yang sedemikian cepatnya, kini telah banyak bermunculan tipe dan jenis alat-alat interpreting system yang semakin canggih. Bersamaan dengan itu pula, permintaan klien pun semakin kritis.
                Guna menjawab kebutuhan klien-klien kami, kami telah memperoleh <mark>LISENSI DAELER RESMI</mark> dari sebuah produsen perangkat interpreter system terkemuka di dunia. Kami juga telah mempersiapkan katalog yang berisi contoh-contoh dari alat-alat interpreter terbaru dan teranyar saat ini. Klien-klien kami dapat menentukan pilihannya dengan mudah sesuai kebutuhannya.
                Dengan kelengkapan peralatan interpreter system yang kami miliki, kami selalu berupaya untuk memberikan yang terbaik bagi klien-klien kami.
                Hubungi kami untuk informasi sewa alat interpreter seperti <mark>Tour Guide System, Delegate Mic, dll</mark> di <mark>+62 877-3561-5623</mark> (Quick Response).
              </p>
              
            </div>
          </div>
        </div>
      </Layout>
      <Footer/>
    </>
  );
}
