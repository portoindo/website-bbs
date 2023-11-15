import styles from './layout.module.css';
import Head from 'next/head';

export default function Layout(props) {
    const containerStyle = {
        backgroundImage: `url(${props.img})`,
    };

  return (
    <>
    {props.isblue === false?
        <div className={`${styles.container} ${styles["bg-img"]}`} id={props.id} style={containerStyle}>
            <div className={styles["gradient-filter"]}>
            {props.children}
            </div>
        </div>
    :
        <div className={`${styles.container} ${styles["bg-img"]}`} id={props.id} style={containerStyle}>
             <div className={styles["blue-filter"]}>
                {props.children}
            </div>
        </div>
    }
    </>
 
      );
}