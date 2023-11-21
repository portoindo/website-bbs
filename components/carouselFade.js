import { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Item from './item';

let index = 0
export default function CarouselFade(props) {
    const [contents, setContents] = useState([
        {id:1,img:"/images/home1.webp",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus ullamcorper erat, sed tincidunt dolor ullamcorper eget. Suspendisse potenti. Quisque maximus varius felis a convallis. Praesent aliquet arcu ac purus fringilla aliquet. Integer rutrum semper ante, id vehicula lectus pellentesque ac. Sed tristique quam nunc, ut convallis lectus pharetra eget. Donec a diam non ipsum sollicitudin hendrerit."},
        {id:2,img:"/images/home2.webp",desc:"Maecenas viverra justo in condimentum mattis. Integer fermentum interdum cursus. Phasellus dignissim, enim et iaculis sagittis, magna metus commodo dui, nec maximus augue tellus at nulla. Etiam erat massa, scelerisque eget ex vel, vestibulum porta purus. Pellentesque at lectus nibh. Nulla quis purus eget purus bibendum vehicula non sit amet sapien. Duis non vestibulum libero. Nulla at magna elementum, eleifend purus ac, finibus quam."},
        {id:3,img:"/images/home3.webp", desc:"Cras hendrerit lorem vitae libero finibus auctor ut ac nunc. Quisque facilisis ligula sit amet sem porta ornare. In ac dictum leo. Quisque maximus libero nec semper tempus. Mauris eleifend ex in nulla porttitor pharetra. Aliquam egestas non lorem eget ultricies. Suspendisse quis maximus ligula."},
    ])
    const containerLeftRef = useRef(null);
    const [showContent, setShowContent] = useState(contents[0])

    useEffect(() => {
        const time =  setInterval(() => {
            changeContent()
          }, 10500);
          return () =>{
            clearInterval(time)
          }
    })

    const changeContent = () => {
        if (index === contents.length-1){
            index = 0
        }else {
            index++
        }
        setShowContent(contents[index])
    }

  return (
        <Box sx={{width:"100vw",height:"100vh"}} ref={containerLeftRef}>
           <Item content={showContent}/>
        </Box>
    );
}