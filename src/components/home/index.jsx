import { useEffect, useState } from "react"
import $ from 'jquery'
export const Home = () => {

    const [windowWidth, setWindowWidth] = useState()
    const imageSmall = `${process.env.PUBLIC_URL}/images/homeSmall.jpg`;
    const imageBig = `${process.env.PUBLIC_URL}/images/homeBig.jpg`;
    useEffect(() => {

        setWindowWidth(window.innerWidth)

        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
          })

        var siteMenuClone = function () {

            $('.js-clone-nav').each(function () {
                var $this = $(this);
                $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
            });
   
   
            setTimeout(function () {
   
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
   
            }, 1000);
   
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
        siteMenuClone();
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
                <div className="site-mobile-menu-body"></div>
            </div>


            <div className="site-blocks-cover" style={{backgroundImage: `url(${windowWidth < 576 ? imageSmall : imageBig })`}} data-aos="fade"
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <span className="sub-text fw-bolder">ALINEADORES INVISIBLES</span>
                            <h1>QUEREMOS <strong>VERTE SONREIR</strong></h1>
                        <button className="btn btn-outline-light">Quiero mis SM®</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}