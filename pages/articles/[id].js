import { clientsData } from "../../components/data";
import Navbar from "../../components/navbar";
import styles from '../../styles/article.module.css';

const articles = clientsData

export function getAllArticlesId() {
    return articles.map((client) => {
        console.log(client)
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
    return(
        <>
        <Navbar/>
        <h1 className={styles.title}>{articleData.articleData.img}</h1>
        </>
    )
}