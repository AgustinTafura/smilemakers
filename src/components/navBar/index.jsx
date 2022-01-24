import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import $ from 'jquery'

import './index.scss'
export const NavBar = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)


    function navBarColor() {
        var navbar = document.querySelector('.site-navbar')
        var scrollYposition = window.scrollY
        navbar.style.backgroundColor = `rgb(255 255 255 / ${scrollYposition*1.5/700})`;
        navbar.style['boxShadow'] = `4px 0 20px -5px rgba(0, 0, 0, ${scrollYposition/700})`;
    }

    
    function siteMenuClone() {
        // $('.js-clone-nav').each(function () {
        //     var $this = $(this);
        //     $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        // });



            var counter = 0;
            $('.site-mobile-menu .has-children').each(function () {
                var $this = $(this);

                $this.prepend('<span className="arrow-collapse collapsed">');

                $this.find('.arrow-collapse').attr({
                    'data-toggle': 'collapse',
                    'data-target': '#collapseItem' + counter,
                });

                $this.find('> ul').attr({
                    'class': 'collapse',
                    'id': 'collapseItem' + counter,
                });
                counter++;
            });


        $('body').on('click', '.arrow-collapse', function (e) {
            var $this = $(this);
            if ($this.closest('li').find('.collapse').hasClass('show')) {
                $this.removeClass('active');
            } else {
                $this.addClass('active');
            }
            e.preventDefault();

        });

        $(window).resize(function () {
            var $this = $(this),
                w = $this.width();

            if (w > 768) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
            setWindowWidth(window.innerWidth)
        })

        $('body').on('click', '.js-menu-toggle', function (e) {
            var $this = $(this);
            e.preventDefault();

            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
                $this.removeClass('active');
            } else {
                $('body').addClass('offcanvas-menu');
                $this.addClass('active');
            }
        })

        // click outisde offcanvas
        $(document).mouseup(function (e) {
            var container = $(".site-mobile-menu");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('offcanvas-menu')) {
                    $('body').removeClass('offcanvas-menu');
                }
            }
        });
    };


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
    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener('scroll',navBarColor)
        siteMenuClone();
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
                                        <li><Link to="#beneficios">Beneficios</Link></li>
                                        <li><Link to="#encontranos">Solicitar Turno</Link></li>
                                        <li><Link to="#odontologo">Soy Odontólogo</Link></li>
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
