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


function App() {

  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true
  });

  return (
    <div className="App">
      <Test/>
    </div>
  );
}

export default App;
