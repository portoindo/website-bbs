import styles from './layout.module.css';
import Head from 'next/head';

export default function Layout(props) {

  return (
    <>
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