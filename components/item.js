import styles from './item.module.css';
import { Fade} from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Item(props) {
    const [check, setCheck] = useState(true)

    useEffect(()=> {
        setCheck(true)
        const time =setTimeout(() => {
            setCheck(false)
          }, 9500);
        return () =>{
        clearInterval(time)
        }
    },[props])

    // useEffect(()=> {
    //     setInterval(() => {
    //         setCheck(true)
    //       }, 3000);
    // })

    return (
        <Fade in={check}  mountOnEnter unmountOnExit timeout={800}>
            <Image
                src={props.content.img} // Route of the image file
                height={1000} // Desired size with correct aspect ratio
                width={1500} // Desired size with correct aspect ratio
                alt="Default Profile"
                className={styles["img-item"]}
            />
        </Fade>
    );
}