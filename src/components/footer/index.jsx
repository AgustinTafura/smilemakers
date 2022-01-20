import { Link } from "react-router-dom"
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
    return (
        <footer className="site-footer border-top">
            <div className="container">

                <div className="footer-right">
                    <Link to="https://www.instagram.com/smilemakers.arg/"><FontAwesomeIcon icon={faInstagramSquare} /></Link>
                    <Link to="https://www.facebook.com/Smile-Makers-102718928349549"><FontAwesomeIcon icon={faFacebookSquare} /></Link>
                    <Link to="https://api.whatsapp.com/send/?phone=5491124004005"><FontAwesomeIcon icon={faWhatsappSquare} /></Link>

                </div>

                <div className="footer-left">
                    <p className="footer-links">¡ Queremos verte sonreir !</p>
                    <p>Smile Makers<sup style={{fontVariant: 'all-small-caps'}}>®</sup>  -  Copyright {new Date().getFullYear()}  |  Designed by <a target="_blank" rel="noreferrer" href="https://github.com/AgustinTafura">タフラ</a></p>
                </div>
            </div>
        </footer>
    )
}