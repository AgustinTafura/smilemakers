//styles
import 'aos/dist/aos.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'magnific-popup/dist/magnific-popup.css'
import './App.css';
//scripts
import 'bootstrap/dist/js/bootstrap.js'

//modules
import AOS from 'aos';

//components
import { Test } from './components/test';
import { NavBar } from './components/navBar';
import { BrowserRouter } from 'react-router-dom'


function App() {

  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
  });

  return (
    <div className="App">
      <BrowserRouter  basename={"/smilemakers"}>
        <NavBar/>
        <Test/>
      </BrowserRouter>
    </div>
  );
}

export default App;
