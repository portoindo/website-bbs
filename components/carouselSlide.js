import { useEffect, useState, useRef } from 'react';
import styles from './carouselSlide.module.css';
import { Slide, Box, Fade } from '@mui/material';
import Image from 'next/image';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChevronRight,ChevronLeft } from '@mui/icons-material';

let index = 0
export default function CarouselSlide(props) {
    const [contents, setContents] = useState([
        {id:1,img:"/images/slide1.jpg",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus ullamcorper erat, sed tincidunt dolor ullamcorper eget. Suspendisse potenti. Quisque maximus varius felis a convallis. Praesent aliquet arcu ac purus fringilla aliquet."},
        {id:2,img:"/images/slide2.jpg",desc:"Maecenas viverra justo in condimentum mattis. Integer fermentum interdum cursus. Phasellus dignissim, enim et iaculis sagittis, magna metus commodo dui, nec maximus augue tellus at nulla. Etiam erat massa, scelerisque eget ex vel, vestibulum porta purus. Pellentesque at lectus nibh. Nulla quis purus eget purus bibendum vehicula non sit amet sapien. Duis non vestibulum libero. Nulla at magna elementum, eleifend purus ac, finibus quam."},
        {id:3,img:"/images/slide3.jpg", desc:"Cras hendrerit lorem vitae libero finibus auctor ut ac nunc. Quisque facilisis ligula sit amet sem porta ornare. In ac dictum leo. Quisque maximus libero nec semper tempus. Mauris eleifend ex in nulla porttitor pharetra. Aliquam egestas non lorem eget ultricies. Suspendisse quis maximus ligula."},
        {id:4,img:"/images/slide4.jpg", desc:"Proin ut ligula id elit hendrerit luctus. Ut id cursus mi. Morbi vitae congue dolor, ut suscipit dui. Pellentesque blandit turpis in dolor facilisis, ac aliquam mauris imperdiet. Fusce tristique vehicula nisi. In sagittis feugiat nisl id scelerisque. Nulla sodales lobortis posuere. Pellentesque turpis lorem"}
    ])
    // const [index, setIndex] = useState(0)
    const [direction, setDirection] = useState("")
    const [leftSlide, setLeftSlide] = useState({})
    const [middleSlide, setMiddleSlide] = useState({})
    const [rightSlide, setRightSlide] = useState({})
    const [check, setCheck] = useState(true)
    const [inOutDirection, setInOutDirection] = useState("") //for sliding in and out direction
    // const [interval, setInterval] = useState(9000)
    const containerLeftRef = useRef(null);
    const containerRightRef = useRef(null);
    const containerMiddleRef = useRef(null);
    const containerMiddleDescRef = useRef(null);
    // var initial  = setTimeout(() => {
    //     setDirection('right')
    //   }, 10000);

    useEffect(() => {
        setLeftSlide(contents[contents.length-1])
        setMiddleSlide(contents[index])
        setRightSlide(contents[index+1])
    },[])

    useEffect(() => {
        // time
        // clearTimeout(time);
        const time =  setTimeout(() => {
            setDirection("right")
          }, 10000);
          return () =>{
            clearInterval(time)
          }
    })

    useEffect(() => {
        // clearTimeout(initial)
        if (direction == 'right'){
            setInOutDirection('right')
            setCheck(false)
            setTimeout(() => {
                changeSlide()
            }, 700);
        }else if (direction == 'left'){
            setInOutDirection('left')
            setCheck(false)
            setTimeout(() => {
                changeSlide()
            }, 700);
        }
    },[direction])

    const changeSlide = () => {
        if (direction == "right") {
            setInOutDirection('left')
            setLeftSlide(middleSlide)
            setMiddleSlide(rightSlide)
            if (index === contents.length-1){
                index = 0
                setRightSlide(contents[index+1])
            }else if (index === contents.length-2){
                index ++
                setRightSlide(contents[0])
            }else{
                index++
                setRightSlide(contents[index+1])
            }    
        }else if (direction == "left") {
            setInOutDirection('right')
            setRightSlide(middleSlide)
            setMiddleSlide(leftSlide)
            if (index === 0){
                index = contents.length-1
                setLeftSlide(contents[index-1])
            }else if (index === 1){
                index--
                setLeftSlide(contents[contents.length-1])
            }
            else {
                index--
                setLeftSlide(contents[index-1])
            }
        }
        setCheck(true)
        setDirection("")
    } 

    return (
        <div className={styles.carousel}>
            <div className={styles.slides}>
                <Box sx={{width:"40%", height: 320, overflow: 'hidden', marginTop:5, '@media (max-width: 600px)': {display:'none'}}} ref={containerLeftRef}>
                    <Slide direction={inOutDirection} in={check} mountOnEnter unmountOnExit container={containerLeftRef.current} timeout={600}>
                        <div className={styles["slide"]} onClick={()=> setDirection("left")} >
                        <Image
                            src={leftSlide.img} // Route of the image file
                            height={500} // Desired size with correct aspect ratio
                            width={500} // Desired size with correct aspect ratio
                            alt="Default Profile"
                            className={styles['slide-img']}
                        />
                        </div>
                    </Slide>
                </Box>
                {/* <div className={styles['container-middle']}> */}
                    <Box sx={{width:"50%", height: 400, overflow: 'hidden', position:'absolute', zIndex:20, marginLeft:'auto', marginRight:'auto', left:0, right:0, bgcolor:"white",
                    '@media (max-width: 600px)': {width: '100%', position:'relative'}}} ref={containerMiddleRef}>
                        <Slide direction={inOutDirection} in={check} mountOnEnter unmountOnExit container={containerMiddleRef.current} timeout={600}>
                            <div className={styles["slide-middle"]} >
                                <Image
                                    src={middleSlide.img} // Route of the image file
                                    height={500} // Desired size with correct aspect ratio
                                    width={500} // Desired size with correct aspect ratio
                                    alt="Default Profile"
                                    className={styles['slide-img']}
                                />
                            </div>
                        </Slide>
                         <div className={styles['slide-desc']}>
                            <Box sx={{width:'100%', maxHeight:110,minHeight:110, overflowX: 'hidden',overflowY:'auto',
                                '@media (max-width: 768px)': {width: '100%'}}}  ref={containerMiddleDescRef} >
                                <Fade direction={inOutDirection} in={check} mountOnEnter unmountOnExit container={containerMiddleDescRef.current} timeout={600}>
                                    <p className={styles['desc-txt']}>
                                        {middleSlide.desc}
                                    </p>
                                </Fade>
                            </Box>
                        </div>
                        <div className={styles['button-container']}>
                            <div className={styles.buttons}>
                                <button className={styles['carousel-btn']} onClick={()=> setDirection("left")}>
                                    <ChevronLeft fontSize='medium' />
                                </button>
                                <button className={styles['carousel-btn']} onClick={()=> setDirection("right")}>
                                    <ChevronRight fontSize='medium'/>
                                </button>

                            </div>
                        </div>
                    </Box>
                {/* </div> */}
                 <Box sx={{width:"40%", height: 320, overflow: 'hidden',  marginTop:5, '@media (max-width: 600px)': {display:'none'} }} ref={containerRightRef}>
                    <Slide direction={inOutDirection} in={check} mountOnEnter unmountOnExit container={containerRightRef.current} timeout={600}>
                        <div className={styles["slide"]} onClick={()=> setDirection("right")}>
                            <Image
                                src={rightSlide.img} // Route of the image file
                                height={500} // Desired size with correct aspect ratio
                                width={500} // Desired size with correct aspect ratio
                                alt="Default Profile"
                                className={styles['slide-img']}
                            />
                        </div>
                    </Slide>
                </Box>
            </div>
            {/* <div className={styles['slide-desc']}>
                <Box sx={{width:'100%', maxHeight:130,minHeight:130, overflowX: 'hidden',overflowY:'hidden',
                  '@media (max-width: 768px)': {width: '100%'}}}  ref={containerMiddleDescRef} >
                    <Fade direction={inOutDirection} in={check} mountOnEnter unmountOnExit container={containerMiddleDescRef.current} timeout={500}>
                        <p className={styles['desc-txt']}>
                            {middleSlide.desc}
                        </p>
                    </Fade>
                </Box>
            </div> */}
        </div>
    );
  }
  