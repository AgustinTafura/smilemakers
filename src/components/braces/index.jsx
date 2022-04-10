import { jarallax, jarallaxVideo } from 'jarallax';
import { useEffect, useState } from 'react';
import "./index.scss"

export const Braces = () => {

    const [windowWidth, setWindowWidth] = useState()

    const imgPath = `${process.env.PUBLIC_URL}/images/bracesSmiling.jpg`;
    useEffect(() => {
        const videoPath = `mp4:https://smilemakers-ar.s3.us-east-2.amazonaws.com/video/presentacion.mp4`;
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
                                        style={{fontSize:'0.7rem', verticalAlign: 'text-top'}}>®</span></b> son placas 
                                        <strong> transparentes</strong> que funcionan alineando progresivamente tus
                                dientes para ayudarte a lucir una sonrisa perfecta.</p>
                            <p className="">Son <strong>removibles</strong>, podés usarlas todo el
                                dia excepto para comer y cepillar tus dientes.</p>
                            <p className="">Podés realizar ejercicio, hablar, besar y no vas a
                                sentir que los llevas puestos.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 order-2 order-lg-2 mb-5 d-flex justify-content-center" style={{height: `${windowWidth  < 992? '60vh': ''}`,  borderRadius: '0.25rem'}}>
                        <div className="nk-awb-overlay"
                            style={{backgroundColor: "rgba(0, 0, 0, 0.2)",height: "100%",zIndex: "100",width: "0%",  borderRadius: '0.25rem'}} />
                        <div className="jarallax-braces"
                            style={{height: `${windowWidth < 992? '100%': '120%'}`, width: `${windowWidth < 992? '100%': '70%'}`, 
                            boxShadow: "0 10px 50px -5px #00000066", backgroundImage: `url(${imgPath})` , borderRadius: '0.25rem'}} />
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
                                <p>
                                    En la primera consulta realizaremos los controles iniciales y te solicitaremos los estudios pertinentes
                                    para realizar un diagnóstico preciso del caso, lo que permitirá determinar la complejidad y el valor final del tratamiento.
                                </p>
                                <p>
                                    Luego realizaremos un escaneo intraoral para obtener un modelo digital 3D de tu boca.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="process p-3">
                            <span className="number">02</span>
                            <div>
                                <i className="flaticon flaticon-escanear display-4 mb-4 d-inline-block"></i>
                                <h3>Diseño 3D</h3>
                                <p>
                                    A partir del modelo digital obtenido diseñaremos tu sonrisa mediante un software de precision, 
                                    donde replicaremos los diferentes estadíos en los que va a evolucionar tu boca a medida que cambies los alineadores.
                                </p>
                                <p>
                                    A través de impresoras 3D, obtendremos las piezas que se utilizaran para moldear cada alineador. 
                                </p>
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
                                <p>
                                    Finalmente te entregaremos el <strong> Kit Inicial </strong>de alineadores 
                                    SM<sup style={{fontVariant: 'all-small-caps'}}>®</sup> y 
                                    programaremos el calendario con
                                    futuras citas para los sucesivos cambios de las placas.
                                </p>
                                <p>
                                    ¡ Queremos verte sonreir y vamos a hacer todo lo posible para lograrlo !
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}