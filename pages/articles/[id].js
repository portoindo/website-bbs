import Image from "next/image";
import { articlesData } from "../../components/data";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import styles from '../../styles/article.module.css';
import { useEffect, useState } from "react";

const articles = articlesData

export function getAllArticlesId() {
    return articles.map((client) => {
        return {
          params: {
            id: (client.id).toString(),
          },
        };
      });
}

export function getArticle(id) {
    const dataArticle = articles.find(art => art.id == id);
    return dataArticle
}

export function getStaticPaths() {
    const paths = getAllArticlesId()
    return {
      paths,
      fallback: false,
    };
}

export  function getStaticProps({params}) {
    const articleData = getArticle(params.id)
  
    return {
      props: {
        articleData,
      },
    }
}

  

export default function Article(articleData) {
  const [isLoding, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  },[articleData])
    return(
        <>
        {isLoding?
        <div>loading</div>
        :
        <>
          <Navbar/>
          <Layout isblue={false} img="/images/horizontal4.webp">
            <div className={styles["article-content"]}>
              <div className={styles["article-title"]}>
                <h2>Why Choose BBS?</h2>
                <h3>OUR VALUE</h3>
              </div>
              <div className={styles["article-card-container"]}>
                <div className={styles["article-card"]}>
                  <Image
                      src={articleData.articleData.alternative} // Route of the image file
                      height={200} // Desired size with correct aspect ratio
                      width={320} // Desired size with correct aspect ratio
                      alt="client"
                      className={styles['article-img']}
                    />
                    <p>{articleData.articleData.full}</p>
                </div>
              </div>
            </div>
          </Layout>
          <Footer/>
          </>
        }
        </>
    )
}