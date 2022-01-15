import { jarallax, jarallaxVideo } from 'jarallax';
import { useEffect } from 'react';
import "./index.scss"

export const Parallax = () => {
    
    useEffect(() => {
        // const video = document.querySelector('#lala');
        // video.play()
        const videoPath = `mp4:${process.env.PUBLIC_URL}/video/colocacion.mp4`;

        jarallaxVideo();

        jarallax(document.querySelectorAll('.jarallax-b'), {
            speed: 0.2,
            videoSrc: videoPath,
            type: "opacity",
            videoEndTime: 16.5,
            disableVideo: /iPad|iPhone|iPod/,
        });

        
        document.querySelectorAll("video").forEach((v,i)=>{
            // v.setAttribute('muted','')
            // v.setAttribute('autoPlay','')
            // v.setAttribute('loop','')
            // v.setAttribute('playsinline','true')
            // v.setAttribute('controls','')
            // v.onloadeddata = (event) => {
            //     alert(`${v.id} Hurra!`);
            //     v.play()
            //   };
        //     // Playing event
        // v.addEventListener("playing", function() {
        //     alert(`${v.id} 'playing'`)
        // });

        // // Pause event
        // v.addEventListener("pause", function() { 
        //     console.log(`${v.id} 'pause'`)
        // });

        // // Seeking event
        // v.addEventListener("seeking", function() { 
        //     console.log(`${v.id} 'seeeking'`)
        // });

        // Volume changed event
        // v.addEventListener("volumechange", function(e) { 
        //     console.log(`${v.id} 'volumechange'`)
        // });
        })
    }, [])
    
    
    return (
        <div id='parallax-b' style={{position:"relative"}}>
            
            <h1>QUEREMOS <strong>VERTE SONREIR</strong></h1>
            <div className="nk-awb-overlay" style={{backgroundColor: "rgba(0, 0, 0, 0.2)",height: "100%",zIndex: "10",width: "100%",position: "absolute"}} />
            <div className="jarallax-b" style={{height: '60vh', width: '100%'}} muted poster={`${process.env.PUBLIC_URL}/images/test1.jpg`} />
        </div>
    )
}