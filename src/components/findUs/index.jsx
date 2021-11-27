import './index.scss'

export const FindUs = () => {
    return (
        <>
            <div className="site-section" id='encontranos'>
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-6 text-center">
                            <h2 className="site-heading text-black">Donde <strong>Encontrarnos</strong></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="site-block-testimony p-4 text-center">
                                <div className="mb-3">
                                    <img src={`${process.env.PUBLIC_URL}/images/logo3.jpg`} alt="smilemakers " className="img-fluid"/>
                                </div>
                                <div>
                                    <div><strong className="fw-bold">DR. A</strong></div>
                                    <div ><a href="/" className='link-dark'> <i className='flaticon flaticon-marcador-de-posicion-1'></i> Av. Corrientes 4924, Piso 6, CABA.</a></div>
                                    <button className='btn border-0 mb-3 '><a href="/" className='link-dark'> SOLICITAR TURNO <i className='flaticon-whatsapp'></i></a></button>
                                    {/* <button className='btn btn-light'> Reservar Turno Online</button> */}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="site-block-testimony p-4 text-center">
                                <div className="mb-3">
                                    <img src={`${process.env.PUBLIC_URL}/images/logo3.jpg`} alt="smilemakers " className="img-fluid"/>
                                </div>
                                <div>
                                    <div><strong className="fw-bold">LBN ODONTOLOGÍA</strong></div>
                                    <div ><a href="/" className='link-dark'> <i className='flaticon flaticon-marcador-de-posicion-1'></i> Av. Corrientes 4924, Piso 6, CABA.</a></div>
                                    <button className='btn border-0 mb-3 '><a href="/" className='link-dark'> SOLICITAR TURNO <i className='flaticon-whatsapp'></i></a></button>
                                    <button className='btn btn-light'> Reservar Turno Online</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="site-block-testimony p-4 text-center">
                                <div className="mb-3">
                                    <img src={`${process.env.PUBLIC_URL}/images/logo3.jpg`} alt="smilemakers " className="img-fluid"/>
                                </div>
                                <div>
                                    <div><strong className="fw-bold">DR. B</strong></div>
                                    <div ><a href="/" className='link-dark'> <i className='flaticon flaticon-marcador-de-posicion-1'></i> Av. Corrientes 4924, Piso 6, CABA.</a></div>
                                    <button className='btn border-0 mb-3 '><a href="/" className='link-dark'> SOLICITAR TURNO <i className='flaticon-whatsapp'></i></a></button>
                                    {/* <button className='btn btn-light'> Reservar Turno Online</button> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
