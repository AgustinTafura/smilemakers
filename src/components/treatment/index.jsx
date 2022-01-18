import { useEffect } from 'react';
import { jarallax, jarallaxVideo } from 'jarallax';
import './index.scss'
import { Link } from 'react-router-dom';

export const Treatment = () => {


    const imgPath = `${process.env.PUBLIC_URL}/images/colocacion.jpg`;
    useEffect(() => {        
        const videoPath = `mp4:${process.env.PUBLIC_URL}/video/escaneo.mp4`;
        jarallaxVideo();

        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.2,
            videoSrc: videoPath,
            type: "opacity",
            videoEndTime: 16.5,
            disableVideo: /iPad|iPhone|iPod/,
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
                    <div className="nk-awb-overlay"
                        style={{backgroundColor: "rgba(0, 0, 0, 0.2)",height: "100%", zIndex: '10', width: "100%",position: "absolute"}} />
                    <div className="jarallax"
                        style={{height: '100%', width: '100%', backgroundImage: `url(${imgPath}`}}>
                    </div>
                </div>
                <div className="text order-1">
                    <h2 className="site-heading text-black mb-5">Tratamiento <strong> ortodoncia invisible </strong>
                    </h2>
                    <p className="lead  text-black mb-5">El tratamiendo de Ortodoncia con Alineadores Invisibles SMILE MAKERS<span style={{fontSize: '0.7rem', verticalAlign: 'text-top'}}>®</span> puede durar entre 9 a 18 meses, aunque podrás notar resultados visibles a partir de los 3 meses de uso.</p>
                    <p>Luego del diseño de tu sonrisa, se generarán alineadores que serán intercambiados cada 15 o 20 días, según indicación del ortodoncista y dependiendo del avance cada tratamiento.</p>
                    <p>La cantidad de placas va a definir la duración del tratamiento y dependiendo del grado de complejidad puede hacerse en una o dos etapas.</p>
                    <Link to="#faq" >
                        <p className='small mb-5' style={{color:'var(--secondary)'}}> Más información en nuestras consultas frecuentes </p>
                    </Link>
                </div>
            </div>
        </>
        )
}
