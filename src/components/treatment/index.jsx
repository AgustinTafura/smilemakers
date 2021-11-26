import { useEffect } from 'react';
import { jarallax, jarallaxVideo } from 'jarallax';
import './index.scss'

export const Treatment = () => {


    useEffect(() => {
        
        const videoPath = `mp4:${process.env.PUBLIC_URL}/video/escaneo.mp4`;

        jarallaxVideo();

        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.2,
            videoSrc: videoPath,
            type: "opacity",
            videoEndTime: 16.5,
        });

    }, [])

    return (
        <>
        <div className="promo py-5">
            <div className="container text-center">
                <span className="d-block h4 mb-3 fw-light text-white">
                    Programa de <strong className="fw-bold">Referidos</strong>.
                    Obtené hasta <strong className="fw-bold">10% OFF</strong> invitado amigos o familiares.
                </span>
            </div>
        </div>


        <div id="tratamiento" className="site-block-half d-block d-lg-flex site-block-video">
            <div className="image bg-image order-2 bg-secondary" style={{position:"relative"}}>
                    <div className="nk-awb-overlay" style={{backgroundColor: "rgba(0, 0, 0, 0.2)",height: "100%",zIndex: "10",width: "100%",position: "absolute"}}/>
                    <div className="jarallax" style={{height: '100%', width: '100%'}}></div>
            </div>
            <div className="text order-1">
                <h2 className="site-heading text-black mb-5">Tratamiento <strong> ortodoncia invisible </strong></h2>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cum vel, eius nulla
                    inventore aperiam excepturi molestias incidunt, culpa alias repudiandae, a nobis libero vitae
                    repellendus temporibus vero sit natus.</p>
                <p>Dolores perferendis ipsam animi fuga, dolor pariatur aliquam esse. Modi maiores minus velit iste
                    enim sunt iusto, dolore totam consequuntur incidunt illo voluptates vero quaerat excepturi.
                    Iusto dolor, cum et.</p>
            </div>
        </div>
        </>
        )
}
