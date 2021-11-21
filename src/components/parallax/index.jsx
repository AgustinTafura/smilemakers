import { jarallax, jarallaxVideo } from 'jarallax';
import { useEffect } from 'react';
import "./index.scss"


export const Parallax = () => {
    
    useEffect(() => {

        const videoPath = `mp4:${process.env.PUBLIC_URL}/video/colocacion.mp4`;

        jarallaxVideo();

        jarallax(document.querySelectorAll('.jarallax-b'), {
            speed: 0.2,
            videoSrc: videoPath,
            type: "opacity",
            videoEndTime: 16.5,
        });
    }, [])
    
    
    return (
        <div style={{position:"relative"}}>
            <div className="nk-awb-overlay" style={{backgroundColor: "rgba(0, 0, 0, 0.2)",height: "100%",zIndex: "1000",width: "100%",position: "absolute"}}/>
            <div className="jarallax-b" style={{height: '60vh', width: '100%'}}></div>
        </div>
    )
}