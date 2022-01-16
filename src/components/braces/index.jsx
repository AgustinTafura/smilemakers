import { jarallax, jarallaxVideo } from 'jarallax';
import { useEffect, useState } from 'react';
import "./index.scss"

export const Braces = () => {

    const [windowWidth, setWindowWidth] = useState()

    const imgPath = `${process.env.PUBLIC_URL}/images/bracesSmiling.jpg`;
    useEffect(() => {
        const videoPath = `mp4:${process.env.PUBLIC_URL}/video/presentacion.mp4`;
        jarallaxVideo();

        jarallax(document.querySelectorAll('.jarallax-braces'), {
            speed: 0.2,
            videoSrc: videoPath,
            type: "opacity",
            videoEndTime: 16.5,
            disableVideo: /iPad|iPhone|iPod/
        });

        setWindowWidth(window.innerWidth)

        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
          })
    }, [])

    return (
        
        <div id='alineadores' className="site-section site-block-braces">
            <div className="container">
                <div className="row pb-3">

                    <div className="col-lg-6 mb-5 order-1 order-lg-1">
                        <div className="ps-lg-5 ms-lg-5">
                            <h2 className="site-heading text-black mb-5">
                                Alineadores <strong>Invisibles</strong> SM<sup
                                    style={{fontVariant: 'all-small-caps'}}>®</sup>
                            </h2>
                            <p className="lead text-black">Los alineadores invisibles <b>SMILE MAKERS<span
                                        style={{fontSize:'0.7rem', verticalAlign: 'text-top'}}>®</span></b> son férulas
                                plásticas <strong>transparentes</strong> que funcionan alineando progresivamente tus
                                dientes para ayudarte a lucir una sonrisa perfecta.</p>
                            <p className="text-black-opacity-5">Son <strong>removibles</strong>, podés usarlas todo el
                                dia excepto para comer y cepillar tus dientes.</p>
                            <p className="text-black-opacity-5">Podés realizar ejercicio, hablar, besar y no vas a
                                sentir que los llevas puestos.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 order-2 order-lg-2 mb-5 d-flex justify-content-center" style={{height: `${windowWidth  < 992? '60vh': ''}`}}>
                        <div className="nk-awb-overlay"
                            style={{backgroundColor: "rgba(0, 0, 0, 0.2)",height: "100%",zIndex: "100",width: "0%"}} />
                        <div className="jarallax-braces"
                            style={{height: `${windowWidth < 992? '100%': '120%'}`, width: `${windowWidth < 992? '100%': '70%'}`, 
                            boxShadow: "0 10px 50px -5px #00000066", backgroundImage: `url(${imgPath})`}} />
                    </div>

                </div>

                <div className="row pt-5">
                    <h3 className="site-heading text-black mb-5" style={{fontSize:'1.8rem'}}>Obtenelos en <strong>3
                            pasos</strong></h3>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay=""
                        data-aos-anchor-placement="top-bottom">
                        <div className="process p-3">
                            <span className="number">01</span>
                            <div>
                                <i className="flaticon flaticon-silla-dentista display-4 mb-4 d-inline-block"></i>
                                <h3>Diagnóstico y Escaneo</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
                                    Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
                                    temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="process p-3">
                            <span className="number">02</span>
                            <div>
                                <i className="flaticon flaticon-escanear display-4 mb-4 d-inline-block"></i>
                                <h3>Diseño 3D</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
                                    Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
                                    temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="process p-3">
                            <span className="number">03</span>
                            <div>
                                <i className="flaticon flaticon-ortodoncia display-4 mb-4 d-inline-block"
                                    style={{display: 'inline'}}></i>
                                <h3>Alineadores SM<sup style={{fontVariant: 'all-small-caps'}}>®</sup></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex.
                                    Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
                                    temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}