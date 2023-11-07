import { useEffect, useState, useRef } from 'react';
import styles from './layout.module.css';
import { Fade, Box} from '@mui/material';
import Image from 'next/image';
import Item from './item';

let index = 0
export default function CarouselFade(props) {
    const [contents, setContents] = useState([
        {id:1,img:"/images/slide1.jpg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus ullamcorper erat, sed tincidunt dolor ullamcorper eget. Suspendisse potenti. Quisque maximus varius felis a convallis. Praesent aliquet arcu ac purus fringilla aliquet. Integer rutrum semper ante, id vehicula lectus pellentesque ac. Sed tristique quam nunc, ut convallis lectus pharetra eget. Donec a diam non ipsum sollicitudin hendrerit."},
        {id:2,img:"/images/slide2.jpg",desc:"Maecenas viverra justo in condimentum mattis. Integer fermentum interdum cursus. Phasellus dignissim, enim et iaculis sagittis, magna metus commodo dui, nec maximus augue tellus at nulla. Etiam erat massa, scelerisque eget ex vel, vestibulum porta purus. Pellentesque at lectus nibh. Nulla quis purus eget purus bibendum vehicula non sit amet sapien. Duis non vestibulum libero. Nulla at magna elementum, eleifend purus ac, finibus quam."},
        {id:3,img:"/images/slide3.jpg", desc:"Cras hendrerit lorem vitae libero finibus auctor ut ac nunc. Quisque facilisis ligula sit amet sem porta ornare. In ac dictum leo. Quisque maximus libero nec semper tempus. Mauris eleifend ex in nulla porttitor pharetra. Aliquam egestas non lorem eget ultricies. Suspendisse quis maximus ligula."},
        {id:4,img:"/images/slide4.jpg", desc:"Proin ut ligula id elit hendrerit luctus. Ut id cursus mi. Morbi vitae congue dolor, ut suscipit dui. Pellentesque blandit turpis in dolor facilisis, ac aliquam mauris imperdiet. Fusce tristique vehicula nisi. In sagittis feugiat nisl id scelerisque. Nulla sodales lobortis posuere. Pellentesque turpis lorem"}
    ])
    const containerLeftRef = useRef(null);
    const [showContent, setShowContent] = useState(contents[0])
    // const [check, setCheck] = useState(true)
    // const [isChange, setIsChange] = useState(false)
    // var time = setTimeout(() => {
    //                 changeContent()
    //             }, 5500);

    useEffect(() => {
        // time
        // clearTimeout(time);
        const time =  setTimeout(() => {
            changeContent()
          }, 3500);
          return () =>{
            clearInterval(time)
          }
    })

    // useEffect(() => {
    //     setShowContent(contents[0])
    // }, [])

    const changeContent = () => {
        if (index === contents.length-1){
            index = 0
        }else {
            index++
        }
        setShowContent(contents[index])
    }

  return (
    // <div className="carousel">
        <Box sx={{width:"100vw", overflow: 'hidden'}} ref={containerLeftRef}>
           <Item content={showContent}/>
            {/* <Slide direction={inOutDirection} in={check} mountOnEnter unmountOnExit container={containerLeftRef.current} timeout={500}>
                <div className={styles["slide-left"]} onClick={()=> setDirection("left")} >
                <Image
                    src={leftSlide.img} // Route of the image file
                    height={500} // Desired size with correct aspect ratio
                    width={500} // Desired size with correct aspect ratio
                    alt="Default Profile"
                    className={styles['slide-img']}
                />
                </div>
            </Slide> */}
        </Box>
    // </div>
    );
}