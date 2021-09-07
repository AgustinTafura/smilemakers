import './index.scss'

export const Benefits = () => {

    const benefits = [
        {
            title: 'eficacia',
            info: 'Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam Laboriosam facilis.'
        },
        {
            title: 'estética',
            info: 'Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam Laboriosam facilis.'
        },
        {
            title: 'comodidad',
            info: 'Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam Laboriosam facilis.'
        },
        {
            title: 'higiene',
            info: 'Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam Laboriosam facilis.'
        },
        {
            title: 'rapidez',
            info: 'Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam Laboriosam facilis.'
        },
        {
            title: 'inperceptible',
            info: 'Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam Laboriosam facilis.'
        },

    ]

    return (
        <div className="site-section bg-light">
        <div className="container">
            <div className="row mb-5 justify-content-center">
                <div className="col-md-6 text-center">
                    <h2 className="site-heading text-black mb-5">Beneficios <strong> Método </strong>SM<sup style={{fontVariant: 'all-small-caps'}}>®</sup></h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4">
                    <div className="site-block-feature-2 d-flex rounded mb-5">
                        <div className="me-3">
                            <i className="flaticon flaticon-scan-1 fw-light "></i>
                        </div>
                        <div className="text">
                            <h3>Tooth Whitening</h3>
                            <p>Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam
                                Laboriosam facilis.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="site-block-feature-2 d-flex rounded mb-5">
                        <div className="me-3">
                            <i className="flaticon flaticon-scan-1 fw-light "></i>
                        </div>
                        <div className="text">
                            <h3>Stethoscope</h3>
                            <p>Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam
                                Laboriosam facilis.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="site-block-feature-2 d-flex rounded mb-5">
                        <div className="me-3">
                            <i className="flaticon flaticon-scan-1 fw-light "></i>
                        </div>
                        <div className="text">
                            <h3>Dentist Chair</h3>
                            <p>Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam
                                Laboriosam facilis.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="site-block-feature-2 d-flex rounded mb-5">
                        <div className="me-3">
                            <i className="flaticon flaticon-scan-1 fw-light "></i>
                        </div>
                        <div className="text">
                            <h3>Tooth Pliers</h3>
                            <p>Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam
                                Laboriosam facilis.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="site-block-feature-2 d-flex rounded mb-5">
                        <div className="me-3">
                            <i className="flaticon flaticon-scan-1 fw-light "></i>
                        </div>
                        <div className="text">
                            <h3>First Aid Kit</h3>
                            <p>Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam
                                Laboriosam facilis.</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="site-block-feature-2 d-flex rounded mb-5">
                        <div className="me-3">
                            <i className="flaticon flaticon-scan-1 fw-light "></i>
                        </div>
                        <div className="text">
                            <h3>Dentist Tools</h3>
                            <p>Sunt illum fugit doloremque eaque omnis dolor sint fuga eligendi quis magnam
                                Laboriosam facilis.</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
    )
}
