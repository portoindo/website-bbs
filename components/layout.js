import Image from 'next/image';
import styles from './layout.module.css';

export default function Layout(props) {
    const containerStyle = {
        backgroundImage: `url(${props.img})`,
    };

  return (
    <>
    {props.isblue === false?
        <div className={styles.container} id={props.id}>
            {props.img?
                <Image
                    src={props.img} // Route of the image file
                    alt="bg-img"
                    className={styles['bg-img']}
                    layout='fill'
                    quality={100}
                />
            :<></>}
            <div className={styles["gradient-filter"]}>
            {props.children}
            </div>
        </div>
    :
        <div className={`${styles.container} ${styles["bg-img"]}`} id={props.id}>
              {props.img?
                <Image
                    src={props.img} // Route of the image file
                    alt="bg-img"
                    className={styles['bg-img']}
                    layout='fill'
                    quality={100}
                />
            :<></>}
             <div className={styles["blue-filter"]}>
                {props.children}
            </div>
        </div>
    }
    </>
 
      );
}