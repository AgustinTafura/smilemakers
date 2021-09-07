//styles
import 'aos/dist/aos.css'; 
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'magnific-popup/dist/magnific-popup.css'
import './customBootstrap.scss';
import './App.scss';
//scripts
import 'bootstrap/dist/js/bootstrap.js'
import "magnific-popup/dist/jquery.magnific-popup.js"

//modules
import AOS from 'aos';

//components
import { Test } from './components/test';
import { NavBar } from './components/navBar';
import { BrowserRouter } from 'react-router-dom'
import ContactBubble from './components/contactBubble';
import { Faq } from './components/faq';
import { Braces } from './components/braces';
import { Benefits } from './components/benefits';


function App() {

  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
  });

  return (
    <div className="App">
      <BrowserRouter  basename={"/"}>
        <NavBar/>

        <Test/>

        <Braces/>
        <Benefits/>
        <Faq/>
        <ContactBubble/>
      </BrowserRouter>
    </div>
  );
}

export default App;
