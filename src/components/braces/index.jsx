import "./index.scss"

export const Braces = () => {
    return (
        
        <div id='alineadores' className="site-section site-block-braces">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 mb-5 order-2 order-lg-1">
                        <div className="ps-lg-5 ms-lg-5">
                            <h2 className="site-heading text-black">
                                Alineadores <strong>Invisibles</strong> SM<sup style={{fontVariant: 'all-small-caps'}}>®</sup>
                            </h2>
                            <p className="lead text-black">Los alineadores invisibles <b>SMILE MAKERS<span style={{fontSize:'0.7rem', verticalAlign: 'text-top'}}>®</span></b> son férulas plásticas <strong>transparentes</strong> que funcionan alineando progresivamente tus dientes para ayudarte a lucir una sonrisa perfecta.</p>
                            <p className="text-black-opacity-5">Son <strong>removibles</strong>, podés usarlas todo el dia excepto para comer y cepillar tus dientes.</p>
                            <p className="text-black-opacity-5">Podés realizar ejercicio, hablar, besar y no vas a sentir que los llevas puestos.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 mb-5 d-flex justify-content-center">
                        <img src={`${process.env.PUBLIC_URL}/images/braces.jpg`} alt="smilemakers braces alineadores invisibles " className="img-fluid"/>
                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="">
                        <div className="process p-3">
                        <span className="number">01</span>
                        <div>
                            <i className="flaticon flaticon-silla-dentista display-4 mb-4 d-inline-block"></i>
                            <h3>Diagnóstico y Escaneo</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                        </div>

                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="process p-3">
                        <span className="number">02</span>
                        <div>
                            <i className="flaticon flaticon-escanear display-4 mb-4 d-inline-block"></i>
                            <h3>Diseño 3D</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                        </div>

                        </div>
                    </div>
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="process p-3">
                        <span className="number">03</span>
                        <div>
                            
<i className="flaticon-actualizar-2"></i>
                            <i className="flaticon flaticon-ortodoncia display-4 mb-4 d-inline-block" style={{display: 'inline'}}></i>
                            <h3>Alineadores SM<sup style={{fontVariant: 'all-small-caps'}}>®</sup></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}