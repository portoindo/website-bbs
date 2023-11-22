import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import CarouselFade from '../components/carouselFade';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { clientsData, portofoliosData, articlesData, servicesData } from '../components/data';
import Footer from '../components/footer';
import { useIsVisible } from '../components/useIsVisible';
import ArrowForward  from '@mui/icons-material/ArrowForward';
import CircularProgress from '@mui/material/CircularProgress';

export default function Home() {
  const [portofolio, setPortofolio] = useState(portofoliosData)
  const [clients, setClients] = useState(clientsData)
  const [articles, setArticles] = useState(articlesData)
  const [services, setServices] = useState(servicesData)
  const [isLoading, setIsLoading] = useState(false)
  const refArticles = useRef();
  const isArticleVisible = useIsVisible(refArticles);
  const refService = useRef();
  const isServiceVisible = useIsVisible(refService);

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
                {/* <div className={styles['img-desc']}> asdfa sd</div> */}
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
               {/* <div className={styles['img-desc']}> asdfa sd</div> */}
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
              {/* <div className={styles['img-desc']}> zzzzzzzzzzz zzzzzz</div> */}
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
          <div className={styles["sub-clients"]}>
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
    {isLoading?
    <div className='loading-container'>
      <CircularProgress/>
      <p>Getting Ready</p>
    </div>
    :
    <>
      <Navbar/>

      <Layout isblue={false} id='home'>
        <div className={styles.home} >
          <div className={styles['home-txt']}>
            <h1>Your Trusted Sworn Translator & Interpreter.</h1>
            <p>We offer certified translation service for various languanges and high-quality interpreting equipment rental, including Tour Guide Systems and Delegate Mic.</p>
            <p>Professional, efficient, and competitive prices!</p>
          </div>
          <CarouselFade/>
        </div>
      </Layout>

      <Layout isblue={false} img="/images/horizontal4.webp">
        <div className={styles["articles-content"]} ref={refArticles}>
          <div className={styles["article-section-title"]}>
            <h2>Why Choose BBS?</h2>
            <h3>OUR VALUE</h3>
          </div>
          <div className={styles.values}>
            {articles.map((article) => 
                <div className={`${styles["card-article"]} ${isArticleVisible ? styles.appear: styles.disappear}`}>
                  {/* <Link href={"/"}> */}
                  <Image
                    src={article.img} // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={320} // Desired size with correct aspect ratio
                    alt="client"
                    className={styles['article-img']}
                  />
                  <div className={styles['article-txt']}>
                    <h4>{article.title}</h4>
                    <p className={styles['article-desc']}>{article.desc}</p>
                    <Link className={styles["article-link"]} href={`/articles/${article.id}`} onClick={() => setIsLoading(true)}>
                      <p>more reading <ArrowForward/></p>
                    </Link>
                  </div>
                  {/* </Link> */}
                </div>
            )}
          </div>
        </div>
      </Layout>

      <Layout isblue={true} id='portofolio' img="/images/home3.webp">
        <div className={styles["portofolio-content"]}>
          <h2>PORTOFOLIO</h2>
          <h3>OUR EVENTS</h3>
          <div className={styles.portofolio}>
            {loadPortofolioImg()}
          </div>
        </div>
      </Layout>
        
      <Layout isblue={false} id='service' img='/images/home2.webp'>
        <div className={styles["our-services-content"]}>
          <h2>OUR SERVICES</h2>
          <div className={styles.services} ref={refService}>
            {services.map((service) => 
            <div className={`${styles["card-service"]} ${isServiceVisible ? styles.appear: styles.disappear}`}>
              <Link  href={`/services/${service.id}`} onClick={() => setIsLoading(true)}>
                <Image
                  src={service.img} // Route of the image file
                  height={200} // Desired size with correct aspect ratio
                  width={320} // Desired size with correct aspect ratio
                  alt="client"
                  className={styles['service-img']}
                />
                <h2 className={styles["service-card-title"]}>{service.title}</h2>
              </Link>
              <Link className={styles["service-link"]} href={`/`}><p>pesan sekarang</p></Link>
              </div>
            )}
          
          </div>
        </div>
      </Layout>

      <Layout isblue={false} id='our-clients' img="/images/home3.webp">
        <div className={styles["our-clients-content"]}>
          <h2>OUR CLIENTS</h2>
          <h3>OUR HAPPY COSTOMERS</h3>
          <div className={styles.clients}>
            {loadClientsImg()}
          </div>
        </div>
      </Layout>
      <Layout isblue={true} img="/images/home3.webp">
        <div className={styles.collaborate}>
          <div className={styles["collaborate-content"]}>
            <Image
              src={"/images/horizontal1.webp"} // Route of the image file
              height={350} // Desired size with correct aspect ratio
              width={500} // Desired size with correct aspect ratio
              alt="collaborate"
              className={styles['collaborate-img']}
            />
            <div className={styles['collaborate-txt']}>
              <h1>Let's Collaborate!</h1>
              <h3>ONE STOP SERVICE FOR YOUR LANGUAGE NEEDS</h3>
              <p>
              Seiring dengan perkembangan teknologi yang sedemikian cepatnya, kini telah banyak bermunculan tipe dan jenis alat-alat interpreting system yang semakin canggih. Bersamaan dengan itu pula, permintaan klien pun semakin kritis.
Guna menjawab kebutuhan klien-klien kami, kami telah memperoleh LISENSI DAELER RESMI dari sebuah produsen perangkat interpreter system terkemuka di dunia. Kami juga telah mempersiapkan katalog yang berisi contoh-contoh dari alat-alat interpreter terbaru dan teranyar saat ini. Klien-klien kami dapat menentukan pilihannya dengan mudah sesuai kebutuhannya.
Dengan kelengkapan peralatan interpreter system yang kami miliki, kami selalu berupaya untuk memberikan yang terbaik bagi klien-klien kami.
Hubungi kami untuk informasi sewa alat interpreter seperti <Link href={"https://www.alatinterpreter.com/tentang.html"}><mark>Tour Guide System</mark></Link>, <Link href={"https://www.alatinterpreter.com/tentang.html"}><mark>Delegate Mic</mark></Link>, dll di +62 877-3561-5623 (Quick Response).
              </p>
              
            </div>
          </div>
        </div>
      </Layout>

      <Footer/>
      </>
      }
    </>
  );
}
