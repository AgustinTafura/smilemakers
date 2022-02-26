//styles
import 'react-toastify/dist/ReactToastify.css';
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
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
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
import { Form } from './components/form';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './components/ScrollToTop'

function App() {
  
  const [loading, setLoading] = useState(true)
  
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'slide',
      once: true
    });
  
    document.addEventListener('load', setLoading(false))

    return () => {
      document.removeEventListener('load', setLoading(false))
    }
  }, [])

  if (loading){
    return (
      <Spinner/>
    )
  }

  

  return (
    <div className="App">
      <BrowserRouter  >
      <ScrollToTop/>
      <ContactBubble/>
      <ToastContainer limit={1}/>
        <div className='site-wrap'>
          
          <NavBar/>

          <Switch>
              <Route exact path='/'>
                <Home/>
                <Braces/>
                <Treatment/>
                <Benefits/>
                <FindUs/>
                <Booking/>
                <Parallax/>
                <Faq/>
              </Route>
              <Route exact path='/profesional'>
                <Form/>
              </Route>

              <Route path="/**">
                <Redirect to='/'/>
              </Route>
          </Switch>

          <Footer/>
          
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
