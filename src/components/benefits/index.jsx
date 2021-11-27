import './index.scss'

export const Benefits = () => {

    const benefits = [
        {
            title: 'eficacia',
            icon: 'flaticon-cheque',
            info: 'OK.'
        },
        {
            title: 'estética',
            icon: 'flaticon-ojo-1',
            info: 'Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam Laboriosam facilis.'
        },
        {
            title: 'removibles',
            icon: 'flaticon-actualizar-2',
            info: 'Flexibilidad comer, deporte.'
        },
        {
            title: 'higiene',
            icon: 'flaticon-cepillo-de-dientes',
            info: 'Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam Laboriosam facilis.'
        },
        {
            title: 'rapidez',
            icon: 'flaticon-calendario',
            info: 'Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam Laboriosam facilis.'
        },
        {
            title: 'flexibilidad',
            icon: 'flaticon-equipaje',
            info: 'Viajar vacaciones.'
        },

    ]

    return (
        <div className="site-section site-block-benefits" id='beneficios'>
        <div className="container">
            <div className="row mb-5 justify-content-center">
                <div className="col-md-6 text-center">
                    <h2 className="site-heading text-black mb-5">Beneficios <strong> Método </strong>SM<sup style={{fontVariant: 'all-small-caps'}}>®</sup></h2>
                </div>
            </div>
            <div className="row">
                {
                    benefits.map((benefit, index)=>
                        <div key={index+benefit.title} className="col-md-6 col-lg-4">
                            <div className="site-block-feature-2 d-flex rounded mb-5">
                                <div className="me-3">
                                    <i className={`flaticon ${benefit.icon} fw-light fs-2`}></i>
                                </div>
                                <div className="text">
                                    <h3>{benefit.title}</h3>
                                    <p>{benefit.info}</p>
                                </div>
                            </div>
                        </div>   
                    )
                }
            </div>
        </div>
    </div>
    )
}
