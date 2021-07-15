import logo from './logo.svg';
import './App.css';
import Navabar from './Compenents/Navbar';
import Second from './Compenents/Second';
import Data from './Compenents/Data';
import Footer from './Compenents/Footer';
import './Compenents/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Trial from './Compenents/Trial';

const App=()=> {
  return (
   <>
   <Navabar/>
   <Trial/>
   {/* <Second/> */}
   <Data/>
   <Footer/>
   </> 
  )
}

export default App;
