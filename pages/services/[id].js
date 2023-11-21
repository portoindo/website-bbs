import Image from "next/image";
import { servicesData } from "../../components/data";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import styles from '../../styles/service.module.css';

const services = servicesData

export function getAllServicesId() {
    return services.map((client) => {
        return {
          params: {
            id: (client.id).toString(),
          },
        };
      });
}

export function getService(id) {
    const dataService = services.find(service => service.id == id);
    return dataService
}

export function getStaticPaths() {
    const paths = getAllServicesId()
    return {
      paths,
      fallback: false,
    };
}

export  function getStaticProps({params}) {
    const serviceData = getService(params.id)
  
    return {
      props: {
        serviceData,
      },
    }
}

  

export default function Service(serviceData) {
    return(
        <>
        <Navbar/>
        <Layout isblue={false} img="/images/horizontal4.webp">
          <div className={styles["service-content"]}>
            <div className={styles["service-title"]}>
              <h2>{serviceData.serviceData.title}</h2>
              <h3>OUR SERVICES</h3> 
            </div>
            <div className={styles["service-card-container"]}>
              <div className={styles["service-card"]}>
                <Image
                    src={serviceData.serviceData.alternative} // Route of the image file
                    height={200} // Desired size with correct aspect ratio
                    width={320} // Desired size with correct aspect ratio
                    alt="client"
                    className={styles['service-img']}
                  />
                  {/* <h3>{serviceData.serviceData.title}</h3> */}
                  <p>{serviceData.serviceData.desc}</p>
              </div>
            </div>
          </div>
        </Layout>
        <Footer/>
        </>
    )
}