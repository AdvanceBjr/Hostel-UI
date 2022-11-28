// import logo from './logo.svg';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import First from './Components/FirstPage/First';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Warden from './Components/Warden/Warden';
import Docu from './Components/Document/Docu'
import Location from './Components/Contact/Location';
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services';
import Student from './Components/Student/Student';
function App() {
  return (
  <div className="App">
   
  <BrowserRouter>
  
  <Routes>
    <Route exact path="/" element={<First/>}/>
     
     
    <Route  exact path="/warden" element={<><Navbar/><Home/><Student/><Warden/><Docu/><Footer/></>}/>
    <Route  exact path="/student" element={<><Navbar/><Home/><Services/><Footer/></>}/>
    
    <Route exact path="/contact" element={<><Navbar/><Location/><Contact/><Footer/></>}/>
  </Routes>
  </BrowserRouter>
  
  </div>
  
)
    

}

export default App;
