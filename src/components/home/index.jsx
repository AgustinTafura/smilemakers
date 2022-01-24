import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './index.scss'

export const Home = () => {

    const [windowWidth, setWindowWidth] = useState()
    const imageSmall = `${process.env.PUBLIC_URL}/images/homeSmall.jpg`;
    const imageBig = `${process.env.PUBLIC_URL}/images/homeBig.jpg`;

    function toggleMobileMenu() {
        if(windowWidth < 1200){
            if(document.querySelector('body').classList.contains('offcanvas-menu')){
                document.querySelector('body').classList.remove('offcanvas-menu')
            } else {
                document.querySelector('body').classList.add('offcanvas-menu')
            }
        }
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener('resize', ()=>setWindowWidth(window.innerWidth))
        return () => {
            window.removeEventListener('resize',()=>setWindowWidth(window.innerWidth))
        }
    }, []) 

    return (
        <>
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo brand smilemakers"/>
                    <div className="site-mobile-menu-close">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body">
                <ul class="site-nav-wrap">
                    <li><Link onClick={toggleMobileMenu} to="#alineadores">Alineadores</Link></li>
                    <li><Link onClick={toggleMobileMenu} to="#tratamiento">Tratamiento</Link></li>
                    <li><Link onClick={toggleMobileMenu} to="#beneficios">Beneficios</Link></li>
                    <li><Link onClick={toggleMobileMenu} to="#encontranos">Solicitar Turno</Link></li>
                    <li><Link onClick={toggleMobileMenu} to="#odontologo">Soy Odontólogo</Link></li>
                </ul>
                </div>
            </div>


            <div id='home' className="site-blocks-cover" style={{backgroundImage: `url(${windowWidth < 576 ? imageSmall : imageBig })`}} data-aos="fade"
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 title-container">
                            <div className="title-body">
                                <span className="sub-text fw-bolder">ALINEADORES INVISIBLES</span>
                                <h1>
                                    QUEREMOS
                                    <br/>
                                    <strong>VERTE
                                    SONREIR</strong></h1>
                            </div>
                            <Link to='#alineadores' className='title-button'>
                                <button className="btn btn-outline-light my-3">Quiero mis SM®</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}