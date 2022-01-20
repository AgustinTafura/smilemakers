//styles
import 'aos/dist/aos.css'; 
import 'magnific-popup/dist/magnific-popup.css'
import './customBootstrap.scss';
import './App.scss';

//scripts
import 'bootstrap/dist/js/bootstrap.js'
import "magnific-popup/dist/jquery.magnific-popup.js"


//modules
import AOS from 'aos';

//components
import { NavBar } from './components/navBar';
import { BrowserRouter } from 'react-router-dom'
import ContactBubble from './components/contactBubble';
import { Faq } from './components/faq';
import { Braces } from './components/braces';
import { Benefits } from './components/benefits';
import { Treatment } from './components/treatment';
import { Footer } from './components/footer';
import { Home } from './components/home';
import { Booking } from './components/booking';
import { Parallax } from './components/parallax';
import { useEffect, useState} from 'react'
import { Spinner } from './components/spinner';
import { FindUs } from './components/findUs'
function App() {
  
  const [loading, setLoading] = useState(true)
  
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true
    });
  
    setTimeout(() => {
      setLoading(false)
    }, 2100);
  }, [])

  if (loading){
    return (
      <Spinner/>
    )
  }

  

  return (
    <div className="App">
      <BrowserRouter  basename={"/"}>
        <NavBar/>
        <div className='site-wrap'>
          <Home/>
          <Braces/>
          <Treatment/>
          <Benefits/>
          <FindUs/>
          <Booking/>
          <Parallax/>
          <Faq/>
          <Footer/>
          <ContactBubble/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
