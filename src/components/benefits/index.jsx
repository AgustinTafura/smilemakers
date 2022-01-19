import './index.scss'

export const Benefits = () => {

    const benefits = [
        {
            title: 'eficacia',
            icon: 'flaticon-cheque',
            info: 'Hoy en día el 90 % de los problemas de alineacion dentaria pueden ser resueltos mediante ortodoncia invisible.'
        },
        {
            title: 'estética',
            icon: 'flaticon-ojo-1',
            info: 'Son totalmente imperceptibles, nadie notará que los llevas puestos.'
        },
        {
            title: 'comodidad',
            icon: 'flaticon-actualizar-2',
            info: 'Al ajustarse perfectamente a tus dientes permiten realizar tus actividades diarias sin complicaciones. Solo te los quitarás para comer o cepillar tus dientes.'
        },
        {
            title: 'higiene',
            icon: 'flaticon-cepillo-de-dientes',
            info: 'Al ser posible extraer facilmente los alineadores permite realizar una higiene bucodental más precisa.'
        },
        {
            title: 'flexibilidad',
            icon: 'flaticon-equipaje',
            info: 'No es necesario que el cambio se realice siempre en consultorio. Dependiendo del caso, podrás realizar el cambio de las placas por tu cuenta en la fecha pactada con el ortodoncista.'
        },
        {
            title: 'rapidez',
            icon: 'flaticon-calendario',
            info: 'Reduce los tiempos respecto al tratamiento de ortodoncia tradicional.'
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
                                    <i data-aos="zoom-in" data-aos-duration="2000" className={`flaticon ${benefit.icon} fw-light fs-2`}></i>
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
