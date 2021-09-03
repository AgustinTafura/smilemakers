import { useEffect } from "react"
 import $ from 'jquery'

export const Test = () => {

    useEffect(() => {
        
        var siteMenuClone = function () {

            $('.js-clone-nav').each(function () {
                var $this = $(this);
                $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
            });
   
   
            setTimeout(function () {
   
                var counter = 0;
                $('.site-mobile-menu .has-children').each(function () {
                    var $this = $(this);
   
                    $this.prepend('<span class="arrow-collapse collapsed">');
   
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
   
   
        var sitePlusMinus = function () {
            $('.js-btn-minus').on('click', function (e) {
                e.preventDefault();
                if ($(this).closest('.input-group').find('.form-control').val() != 0) {
                    $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
                } else {
                    $(this).closest('.input-group').find('.form-control').val(parseInt(0));
                }
            });
            $('.js-btn-plus').on('click', function (e) {
                e.preventDefault();
                $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
            });
        };
        sitePlusMinus();
   
   
        var siteSliderRange = function () {
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 500,
                values: [75, 300],
                slide: function (event, ui) {
                    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1));
        };
        // siteSliderRange();
   
   
        var siteMagnificPopup = function () {
            $('.image-popup').magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                fixedContentPos: true,
                mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
                gallery: {
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
                },
                image: {
                    verticalFit: true
                },
                zoom: {
                    enabled: true,
                    duration: 300 // don't foget to change the duration also in CSS
                }
            });
   
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
   
                fixedContentPos: false
            });
        };
        // siteMagnificPopup();
   
   
        var siteCarousel = function () {
            if ($('.nonloop-block-13').length > 0) {
                $('.nonloop-block-13').owlCarousel({
                    center: false,
                    items: 1,
                    loop: false,
                    stagePadding: 0,
                    margin: 20,
                    nav: true,
                    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
                    responsive: {
                        600: {
                            margin: 0,
                            stagePadding: 10,
                            items: 2
                        },
                        1000: {
                            margin: 0,
                            stagePadding: 0,
                            items: 2
                        },
                        1200: {
                            margin: 0,
                            stagePadding: 0,
                            items: 3
                        }
                    }
                });
            }
   
            if ($('.slide-one-item').length > 0) {
                $('.slide-one-item').owlCarousel({
                    center: false,
                    items: 1,
                    loop: true,
                    stagePadding: 0,
                    margin: 0,
                    autoplay: true,
                    pauseOnHover: false,
                    nav: true,
                    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
                });
            }
        };
        siteCarousel();
   
        // var siteStellar = function () {
        //     $(window).stellar({
        //         responsive: false,
        //         parallaxBackgrounds: true,
        //         parallaxElements: true,
        //         horizontalScrolling: false,
        //         hideDistantElements: false,
        //         scrollProperty: 'scroll'
        //     });
        // };
        // siteStellar();
   
        // var siteCountDown = function () {
   
        //     if ($('#date-countdown').length > 0) {
        //         $('#date-countdown').countdown('2020/10/10', function (event) {
        //             var $this = $(this).html(event.strftime('' +
        //                 '<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
        //                 '<span class="countdown-block"><span class="label">%d</span> days </span>' +
        //                 '<span class="countdown-block"><span class="label">%H</span> hr </span>' +
        //                 '<span class="countdown-block"><span class="label">%M</span> min </span>' +
        //                 '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
        //         });
        //     }
   
        // };
        // siteCountDown();
   
        // var siteDatePicker = function () {
   
        //     if ($('.datepicker').length > 0) {
        //         $('.datepicker').datepicker();
        //     }
   
        // };
        // siteDatePicker();

    }, [])

    return (
        <div className="site-wrap">

            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>


            <div className="site-blocks-cover" style={{backgroundImage: "url(images/hero_bg_1.jpg)"}} data-aos="fade"
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <span className="sub-text">We Priority Your</span>
                            <h1>Your <strong>New Smile</strong></h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-block-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="site-block-feature d-flex p-4 rounded mb-4">
                                <div className="me-3">
                                    <span className="icon flaticon-tooth fw-light text-white h2"></span>
                                </div>
                                <div className="text">
                                    <h3>Periontodology</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="site-block-feature d-flex p-4 rounded mb-4">
                                <div className="me-3">
                                    <span className="icon flaticon-tooth-whitening fw-light text-white h2"></span>
                                </div>
                                <div className="text">
                                    <h3>Tooth Whitening</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="site-block-feature d-flex p-4 rounded mb-4">
                                <div className="me-3">
                                    <span className="icon flaticon-tooth-pliers fw-light text-white h2"></span>
                                </div>
                                <div className="text">
                                    <h3>Preventative Care</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section site-block-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img src={`/images/img_1.jpg`} alt="Image" className="img-fluid"/>
                        </div>
                        <div className="col-lg-6">
                            <div className="row row-items">
                                <div className="col-md-6">
                                    <a href="#" className="d-flex text-center feature active p-4 mb-4">
                                        <span className="align-self-center w-100">
                                            <span className="d-block mb-3">
                                                <span className="flaticon-tooth-whitening display-3"></span>
                                            </span>
                                            <h3>Tooth Whitening</h3>
                                        </span>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a href="#" className="d-flex text-center feature p-4 mb-4">
                                        <span className="align-self-center w-100">
                                            <span className="d-block mb-3">
                                                <span className="flaticon-stethoscope display-3"></span>
                                            </span>
                                            <h3>Stethoscope</h3>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="row row-items last">
                                <div className="col-md-6">
                                    <a href="#" className="d-flex text-center feature p-4 mb-4">
                                        <span className="align-self-center w-100">
                                            <span className="d-block mb-3">
                                                <span className="flaticon-first-aid-kit display-3"></span>
                                            </span>
                                            <h3>First Aid Kit</h3>
                                        </span>
                                    </a>
                                </div>
                                <div className="col-md-6">
                                    <a href="#" className="d-flex text-center active feature p-4 mb-4">
                                        <span className="align-self-center w-100">
                                            <span className="d-block mb-3">
                                                <span className="flaticon-tooth-pliers display-3"></span>
                                            </span>
                                            <h3>Tooth Pliers</h3>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="site-section site-block-appointment">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 ps-lg-5 order-1 order-lg-2">
                            <div className="ps-lg-5 ms-lg-5">
                                <h2 className="site-heading text-black">Online <strong>Appointment</strong> Request Form
                                </h2>
                                <p className="lead text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Ipsum vitae possimus sapiente temporibus, cum error.</p>
                                <p className="text-black-opacity-5">Temporibus adipisci modi nisi, in deserunt. Nam,
                                    veritatis pariatur fugit explicabo? Nemo eius, eaque saepe facilis quidem nisi.
                                    Officiis doloremque dolorum optio.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-2 order-lg-1">


                            <form action="#" className="p-5 bg-white">

                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="fw-bold" htmlFor="fname">First Name</label>
                                        <input type="text" id="fname" className="form-control" placeholder="First Name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="fw-bold" htmlFor="lname">Last Name</label>
                                        <input type="text" id="lname" className="form-control" placeholder="Last Name"/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="fw-bold" htmlFor="date">Date</label>
                                        <input type="text" id="date" className="form-control datepicker px-2"
                                            placeholder="Date of visit"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="fw-bold" htmlFor="email">Email</label>
                                        <input type="email" id="email" className="form-control" placeholder="Email"/>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <label className="fw-bold" htmlFor="treatment">Treatment Needed</label>
                                        <select name="treatment" id="treatment" className="form-control">
                                            <option value="">Dental exam and teeth cleaning</option>
                                            <option value="">Dental emergency</option>
                                            <option value="">Dental implants</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <label className="fw-bold" htmlFor="note">Notes</label>
                                        <textarea name="note" id="note" cols="30" rows="5" className="form-control"
                                            placeholder="Write your notes or questions here..."></textarea>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <input type="submit" value="Send" className="btn btn-primary"/>
                                    </div>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div className="promo py-5 bg-primary">
                <div className="container text-center">
                    <span className="d-block h4 mb-3 fw-light text-white">Promo For Tooth Cleaning from
                        <del>$140.00</del> now <strong className="fw-bold">$50.00</strong></span>
                    <div id="date-countdown" className="mt-0"></div>
                </div>
            </div>


            <div className="site-section bg-light">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-6 text-center">
                            <h2 className="site-heading text-black mb-5">Our <strong>Services</strong></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="site-block-feature-2 d-flex rounded mb-5">
                                <div className="me-3">
                                    <span className="icon flaticon-tooth-whitening fw-light "></span>
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
                                    <span className="icon flaticon-stethoscope fw-light "></span>
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
                                    <span className="icon flaticon-dentist-chair fw-light "></span>
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
                                    <span className="icon flaticon-tooth-pliers fw-light "></span>
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
                                    <span className="icon flaticon-first-aid-kit fw-light "></span>
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
                                    <span className="icon flaticon-dentist-tools fw-light "></span>
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

            <div className="site-block-half d-block d-lg-flex site-block-video">
                <div className="image bg-image order-2" style={{backgroundImage: "url(images/hero_bg_1.jpg)"}}>
                    <a href="https://vimeo.com/channels/staffpicks/93951774" className="play-button popup-vimeo"><span
                            className="icon-play"></span></a>
                </div>
                <div className="text order-1">
                    <h2 className="site-heading text-black mb-3">Success <strong>Stories</strong></h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id cum vel, eius nulla
                        inventore aperiam excepturi molestias incidunt, culpa alias repudiandae, a nobis libero vitae
                        repellendus temporibus vero sit natus.</p>
                    <p>Dolores perferendis ipsam animi fuga, dolor pariatur aliquam esse. Modi maiores minus velit iste
                        enim sunt iusto, dolore totam consequuntur incidunt illo voluptates vero quaerat excepturi.
                        Iusto dolor, cum et.</p>
                </div>

            </div>


            <div className="site-section bg-light">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div className="col-md-6 text-center">
                            <h2 className="site-heading text-black">People <strong>Says</strong></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="site-block-testimony p-4 text-center">
                                <div className="mb-3">
                                    <img src={`/images/person_2.jpg`} alt="Image" className="img-fluid"/>
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
                                    <img src={`images/person_1.jpg`} alt="Image" className="img-fluid"/>
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
                                    <img src={`images/person_3.jpg`} alt="Image" className="img-fluid"/>
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







            <footer className="site-footer border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="row mb-5">
                                <div className="col-md-12">
                                    <h3 className="footer-heading mb-4">Navigation</h3>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Services</a></li>
                                        <li><a href="#">News</a></li>
                                        <li><a href="#">Team</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <ul className="list-unstyled">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Membership</a></li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-4">


                            <div className="mb-5">
                                <h3 className="footer-heading mb-4">Recent News</h3>
                                <div className="block-25">
                                    <ul className="list-unstyled">
                                        <li className="mb-3">
                                            <a href="#" className="d-flex">
                                                <figure className="image me-4">
                                                    <img src={`images/hero_bg_1.jpg`} alt="" className="img-fluid"/>
                                                </figure>
                                                <div className="text">
                                                    <span className="small text-uppercase date">Sep 16, 2018</span>
                                                    <h3 className="heading fw-light">Lorem ipsum dolor sit amet
                                                        consectetur elit</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="#" className="d-flex">
                                                <figure className="image me-4">
                                                    <img src={`images/hero_bg_1.jpg`} alt="" className="img-fluid"/>
                                                </figure>
                                                <div className="text">
                                                    <span className="small text-uppercase date">Sep 16, 2018</span>
                                                    <h3 className="heading fw-light">Lorem ipsum dolor sit amet
                                                        consectetur elit</h3>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="#" className="d-flex">
                                                <figure className="image me-4">
                                                    <img src={`images/hero_bg_1.jpg`} alt="" className="img-fluid"/>
                                                </figure>
                                                <div className="text">
                                                    <span className="small text-uppercase date">Sep 16, 2018</span>
                                                    <h3 className="heading fw-light">Lorem ipsum dolor sit amet
                                                        consectetur elit</h3>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>


                        <div className="col-lg-4 mb-5 mb-lg-0">

                            <div className="mb-5">
                                <h3 className="footer-heading mb-2">Subscribe Newsletter</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio.</p>

                                <form action="#" method="post">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control border-white text-white bg-transparent"
                                            placeholder="Enter Email" aria-label="Enter Email"
                                            aria-describedby="button-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="button"
                                                id="button-addon2">Send</button>
                                        </div>
                                    </div>
                                </form>

                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="footer-heading mb-4">Follow Us</h3>

                                    <div>
                                        <a href="#" className="ps-0 pe-3"><span className="icon-facebook"></span></a>
                                        <a href="#" className="ps-3 pe-3"><span className="icon-twitter"></span></a>
                                        <a href="#" className="ps-3 pe-3"><span className="icon-instagram"></span></a>
                                        <a href="#" className="ps-3 pe-3"><span className="icon-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <p>
                                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                                Copyright &copy;<script data-cfasync="false"
                                    src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
                                {/* <script>
                                    document.write(new Date().getFullYear());
                                </script>  */}
                                All rights reserved | This template is made with <i className="icon-heart-o"
                                    aria-hidden="true"></i> by <a href="https://colorlib.com"
                                    target="_blank">Colorlib</a>
                                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                            </p>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
        )
}
