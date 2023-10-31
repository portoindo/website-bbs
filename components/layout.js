import styles from './layout.module.css';
import Head from 'next/head';

export default function Layout(props) {

  return (
    <>
     <Head>
        <title>Website BBS</title>
        <link rel="icon" href="/images/logo-bbs.png" />
    </Head>
    {props.reverse === false?
        <div className={`${styles.container} ${styles["bg-normal"]}`} id={props.id}>
            {props.children}
        </div>
    :
        <div className={`${styles.container} ${styles["bg-reverse"]}`} id={props.id}>
            {props.children}
        </div>
    }
    </>
 
      );
}