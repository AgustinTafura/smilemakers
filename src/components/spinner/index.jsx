import './index.scss'

export const Spinner = () => {

    const logo = `${process.env.PUBLIC_URL}/images/logo.png`

    return (
        <div className='loadingComponent m-0 row justify-content-center aligne-items-center'>
            <div>
                <img  className='d-flex mb-5' src={logo} alt="" width={'200px'} />
        
                <div className="spinner-grow bounce1" role="status">
                    <span className="sr-only"></span>
                </div>
                <div className="spinner-grow bounce2" role="status">
                    <span className="sr-only"></span>
                </div>
                <div className="spinner-grow bounce3" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>    
            
        </div>
        )
}
