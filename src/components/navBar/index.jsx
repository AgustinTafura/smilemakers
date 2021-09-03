import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <div className="site-navbar-wrap">
            {/* <div className="site-navbar-top">
                <div className="container py-2">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <Link to="#" className="p-2 ps-0"><span className="icon-twitter"></span></Link>
                            <Link to="#" className="p-2 ps-0"><span className="icon-facebook"></span></Link>
                            <Link to="#" className="p-2 ps-0"><span className="icon-linkedin"></span></Link>
                            <Link to="#" className="p-2 ps-0"><span className="icon-instagram"></span></Link>
                        </div>
                        <div className="col-6">
                            <div className="d-flex ml-auto">
                                <Link to="#" className="d-flex align-items-center ml-auto mr-4">
                                    <span className="icon-phone mr-2"></span>
                                    <span className="d-none d-md-inline-block">youremail@domain.com</span>
                                </Link>
                                <Link to="#" className="d-flex align-items-center">
                                    <span className="icon-envelope mr-2"></span>
                                    <span className="d-none d-md-inline-block">+1 291 2830 302</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="site-navbar">
                <div className="container py-1">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2 className="mb-0 site-logo"><Link to="#index">Dente</Link></h2>
                        </div>
                        <div className="col-10">
                            <nav className="site-navigation text-end" role="navigation">
                                <div className="container">
                                    <div className="d-inline-block d-lg-none ms-md-0 me-auto py-3"><Link to="#"
                                            className="site-menu-toggle js-menu-toggle text-white"><span
                                                className="icon-menu h3"></span></Link></div>

                                    <ul className="site-menu js-clone-nav d-none d-lg-block">
                                        <li className="has-children">
                                            <Link to="#index">Home</Link>
                                            <ul className="dropdown arrow-top">
                                                <li><Link to="#">Menu One</Link></li>
                                                <li><Link to="#">Menu Two</Link></li>
                                                <li><Link to="#">Menu Three</Link></li>
                                                <li className="has-children">
                                                    <Link to="#">Sub Menu</Link>
                                                    <ul className="dropdown">
                                                        <li><Link to="#">Menu One</Link></li>
                                                        <li><Link to="#">Menu Two</Link></li>
                                                        <li><Link to="#">Menu Three</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link to="#about">About Us</Link></li>
                                        <li className="has-children">
                                            <Link to="#patients">Patients</Link>
                                            <ul className="dropdown arrow-top">
                                                <li><Link to="#">Menu One</Link></li>
                                                <li><Link to="#">Menu Two</Link></li>
                                                <li><Link to="#">Menu Three</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="#news">News</Link></li>
                                        <li><Link to="#services">Services</Link></li>
                                        <li><Link to="#contact">Contact</Link></li>
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
