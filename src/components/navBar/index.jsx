import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import $ from 'jquery'

import './index.scss'
export const NavBar = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const actualLocation = useLocation()


    function navBarColor() {
        var navbar = document.querySelector('.site-navbar')
        var scrollYposition = window.scrollY
        navbar.style.backgroundColor = `rgb(255 255 255 / ${scrollYposition*1.5/700})`;
        navbar.style['boxShadow'] = `4px 0 20px -5px rgba(0, 0, 0, ${scrollYposition/700})`;
    }

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
        const  siteMenuClone = () => {
            window.addEventListener('resize', ()=> {
                const bodyElement = document.querySelector('body')
                if(windowWidth > 768 && bodyElement.classList.contains('offcanvas-menu')){
                    bodyElement.classList.remove('offcanvas-menu')
                    setWindowWidth(window.innerWidth)
                } 
            })
    
            const buttonsToggleMobileMenu = document.querySelectorAll('.js-menu-toggle');
            const bodyElement = document.querySelector('body')
            buttonsToggleMobileMenu.forEach(button => {
                button.addEventListener('click', (e)=>{
                    e.preventDefault();
                    if (bodyElement.classList.contains('offcanvas-menu')) {
                        bodyElement.classList.remove('offcanvas-menu')
                        button.classList.remove('active')
                    } else {
                        bodyElement.classList.add('offcanvas-menu')
                        button.classList.add('active')
                    }
                })
            }) 
    
            // click outisde offcanvas        
            document.addEventListener('mouseup', (e) => {
                var container = $(".site-mobile-menu");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    if ($('body').hasClass('offcanvas-menu')) {
                        $('body').removeClass('offcanvas-menu');
                    }
                }
            })
        };    

        setWindowWidth(window.innerWidth)
        window.addEventListener('scroll',navBarColor)
        siteMenuClone();
        return () =>{ 
            window.removeEventListener('scroll',navBarColor)
        }
    }, [])

    useEffect(() => {
        preventURLHashLink()
    }, [actualLocation]);
    

    return (
        <>
        <div className="site-navbar-wrap">
            <div className="site-navbar fixed-top">
                <div className="container py-1">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <div className='site-logo'>
                                <img onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })} src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo brand smilemakers" style={{cursor:'pointer'}}/>
                            </div>
                        </div>
                        <div className="col-10">
                            <nav className="site-navigation text-end" role="navigation">
                                <div className="container">
                                    <div className="d-inline-block d-xl-none ms-md-0 me-auto py-3"><Link to="#"
                                            className="site-menu-toggle js-menu-toggle text-white"><span
                                                className="icon-menu fs-1"></span></Link></div>

                                    <ul className="site-menu js-clone-nav d-none d-xl-block">
                                    {
                                        actualLocation.pathname === '/' ?
                                        (
                                            <>
                                                    <li><Link to="#alineadores">Alineadores</Link></li>
                                                    <li><Link to="#tratamiento">Tratamiento</Link></li>
                                                    <li><Link to="#beneficios">Beneficios</Link></li>
                                                    <li><Link to="#encontranos">Solicitar Turno</Link></li>
                                                    <li><Link to="/profesional">Soy Odontólogo</Link></li>
                                            </>
                                        ) : (
                                            <li><Link to="/">Volver</Link></li>
                                        )
                                    }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo brand smilemakers"/>
                    <div className="site-mobile-menu-close">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body">
                <ul className="site-nav-wrap">
                    {
                        actualLocation.pathname === '/' ?
                        (
                            <>
                                <li><Link onClick={toggleMobileMenu} to="#alineadores">Alineadores</Link></li>
                                <li><Link onClick={toggleMobileMenu} to="#tratamiento">Tratamiento</Link></li>
                                <li><Link onClick={toggleMobileMenu} to="#beneficios">Beneficios</Link></li>
                                <li><Link onClick={toggleMobileMenu} to="#encontranos">Solicitar Turno</Link></li>
                                <li><Link onClick={toggleMobileMenu} to="/profesional">Soy Odontólogo</Link></li>
                            </>
                        ) : (
                            <li><Link onClick={toggleMobileMenu} to="/">Volver</Link></li>
                        )
                    }
                </ul>
                </div>
            </div>
        </>
        )
}
