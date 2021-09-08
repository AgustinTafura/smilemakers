import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
        <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <img src={`images/logo.png`} alt="logo brand smilemakers"/>
                    <div className="site-mobile-menu-close">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>


            <div className="site-blocks-cover" style={{backgroundImage: "url(images/di6.gif)"}} data-aos="fade"
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <span className="sub-text">ALINEADORES INVISIBLES</span>
                            <h1>QUEREMOS <strong>VERTE SONREIR</strong></h1>
                        <button className="btn btn-outline-light">Quiero mis SM®</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-block-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="site-block-feature d-flex p-4 rounded mb-4">
                                <div className="me-3">
                                    <span className="icon flaticon-tooth fw-light text-white h2"></span>
                                </div>
                                <div className="text">
                                    <h3>Periontodology</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="site-block-feature d-flex p-4 rounded mb-4">
                                <div className="me-3">
                                    <span className="icon flaticon-tooth-whitening fw-light text-white h2"></span>
                                </div>
                                <div className="text">
                                    <h3>Tooth Whitening</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="site-block-feature d-flex p-4 rounded mb-4">
                                <div className="me-3">
                                    <span className="icon flaticon-tooth-pliers fw-light text-white h2"></span>
                                </div>
                                <div className="text">
                                    <h3>Preventative Care</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}