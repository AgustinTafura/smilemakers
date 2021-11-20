import { jarallax, jarallaxVideo } from 'jarallax';
import { useEffect } from 'react';
import "./index.scss"


export const Parallax = () => {
    
    useEffect(() => {
        
        const videoPath = `mp4:${process.env.PUBLIC_URL}/video/escaneo.mp4`;
        // const videoPath = `https://www.youtube.com/watch?v=jfFrgzcoZWk`;

        jarallaxVideo();

        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.2,
            // videoSrc: 'https://www.youtube.com/watch?v=ab0TSkLe-E0',
            videoSrc: videoPath,
            // imgSrc: `${process.env.PUBLIC_URL}/images/braces.jpg`,
            type: "opacity",
            videoEndTime: 16.5,
        });
    }, [])
    
    
    return (
        <div style={{position:"relative"}}>
            <div className="nk-awb-overlay" style={{backgroundColor: "rgba(0, 0, 0, 0.2)",height: "100%",zIndex: "1000",width: "100%",position: "absolute"}}/>
            <div className="jarallax" style={{height: '60vh', width: '100%'}}></div>
        </div>
    )
}