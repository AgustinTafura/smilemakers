import { useEffect } from "react"
import { Link } from "react-router-dom"

import './index.scss'
export const NavBar = () => {


    function preventURLHashLink() {
        document.querySelectorAll('a').forEach(el=>{
            el.addEventListener('click',(e)=>{
                    if (el.hash.charAt(0) === "#") {
                    e.preventDefault()
                    document.querySelector(el.hash)?.scrollIntoView()
                    }
            })
        })
    }

    function navBarColor() {
        var navbar = document.querySelector('.site-navbar')
        var scrollYposition = window.scrollY
        navbar.style.backgroundColor = `rgb(255 255 255 / ${scrollYposition*1.5/700})`;
        navbar.style['boxShadow'] = `4px 0 20px -5px rgba(0, 0, 0, ${scrollYposition/700})`;
    }

    useEffect(() => {
        window.addEventListener('scroll',navBarColor)
        preventURLHashLink()

        return () =>{ 
            window.removeEventListener('scroll',navBarColor)
        }
    }, [])

    return (
        <div className="site-navbar-wrap">
            <div className="site-navbar fixed-top">
                <div className="container py-1">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <div className='site-logo'>
                                <img onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo brand smilemakers"/>
                            </div>
                        </div>
                        <div className="col-10">
                            <nav className="site-navigation text-end" role="navigation">
                                <div className="container">
                                    <div className="d-inline-block d-xl-none ms-md-0 me-auto py-3"><Link to="#"
                                            className="site-menu-toggle js-menu-toggle text-white"><span
                                                className="icon-menu fs-1"></span></Link></div>

                                    <ul className="site-menu js-clone-nav d-none d-xl-block">
                                        <li><Link to="#alineadores">Alineadores</Link></li>
                                        <li><Link to="#tratamiento">Tratamiento</Link></li>
                                        <li> <Link to="#beneficios">Beneficios</Link></li>
                                        <li><Link to="#encontranos">Encontranos</Link></li>
                                        <li><Link to="#odontologo">Soy Odontologo</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
