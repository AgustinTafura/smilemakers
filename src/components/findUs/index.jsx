import './index.scss'

export const FindUs = () => {
    return (
        <>
            <div className="site-section">
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
                                    <img src={`/images/person_2.jpg`} alt="smilemakers " className="img-fluid"/>
                                </div>
                                <div>
                                    <p>Dolores perferendis ipsam animi fuga, dolor pariatur aliquam esse. Modi maiores
                                        minus velit iste enim sunt iusto dolore</p>
                                    <p><strong className="fw-bold">Nathalie Oscar</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="site-block-testimony p-4 text-center active">
                                <div className="mb-3">
                                    <img src={`images/person_1.jpg`} alt="smilemakers " className="img-fluid"/>
                                </div>
                                <div>
                                    <p>Dolores perferendis ipsam animi fuga dolor pariatur aliquam esse. Modi maiores
                                        minus velit iste enim sunt iusto dolore</p>
                                    <p><strong className="fw-bold">Linda Uler</strong></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="site-block-testimony p-4 text-center">
                                <div className="mb-3">
                                    <img src={`images/person_3.jpg`} alt="smilemakers " className="img-fluid"/>
                                </div>
                                <div>
                                    <p>Dolores perferendis ipsam animi fuga dolor pariatur aliquam esse. Modi maiores
                                        minus velit iste enim sunt iusto dolore</p>
                                    <p><strong className="fw-bold">Chris Coodard</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
