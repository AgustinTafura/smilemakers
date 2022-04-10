import { jarallax, jarallaxVideo } from 'jarallax';
import { useEffect } from 'react';
import "./index.scss"

export const Parallax = () => {
    
    const imgPath = `${process.env.PUBLIC_URL}/images/girlSmiling.jpg`;
    
    useEffect(() => {
        const videoPath = `https://smilemakers-ar.s3.us-east-2.amazonaws.com/video/colocacion.mp4`;
        jarallaxVideo();

        jarallax(document.querySelectorAll('.jarallax-b'), {
            speed: 0.2,
            videoSrc: videoPath,
            type: "opacity",
            videoEndTime: 16.5,
            disableVideo: /iPad|iPhone|iPod/,
        });        
    }, [])
    
    
    return (
        <div id='parallax-b' style={{position:"relative"}}>
            
            <h1>QUEREMOS <strong>VERTE SONREIR</strong></h1>
            <div className="nk-awb-overlay" style={{backgroundColor: "rgba(0, 0, 0, 0.2)",height: "100%",zIndex: "10",width: "100%",position: "absolute"}} />
            <div className="jarallax-b" style={{height: '60vh', width: '100%', backgroundImage: `url(${imgPath}`}} muted />
        </div>
    )
}