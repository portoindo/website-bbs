import styles from './item.module.css';
import { Fade} from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Item(props) {
    const [check, setCheck] = useState(true)

    useEffect(()=> {
        setCheck(true)
        setTimeout(() => {
            setCheck(false)
          }, 5000);
    },[props])

    // useEffect(()=> {
    //     setInterval(() => {
    //         setCheck(true)
    //       }, 3000);
    // })

    return (
        <Fade in={check}  mountOnEnter unmountOnExit timeout={700}>
            <Image
                src={props.content.img} // Route of the image file
                height={400} // Desired size with correct aspect ratio
                width={600} // Desired size with correct aspect ratio
                alt="Default Profile"
                className={styles["img-item"]}
            />
        </Fade>
    );
}