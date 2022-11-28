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
import Footer from './Components/Footer/Footer';

import Meeta from './Components/War_Meeta_Room/Meeta';
import ShaliniRoom from './Components/War_Shalini_Room/Shalini_Room';
import RekhaRoom from './Components/War_Rekha_Room/Rekha_Room';
import MeetaRoom from './Components/War_Meeta_Room/Meeta_Room';

import Rekha from './Components/War_Rekha_Room/Rekha';

import Shalini from './Components/War_Shalini_Room/Shalini';


// import Home from './Components/Home/Home'
function App() {
  return (
  <div className="App">
   
  <BrowserRouter>
  
  <Routes>
    <Route exact path="/" element={<First/>}/>
     
     
    <Route  exact path="/warden" element={<><Navbar/><Home/><Warden/><Docu/><Footer/></>}/>
    <Route  exact path="/student" element={<><Navbar/><Home/><Services/><Footer/></>}/>
    
    <Route exact path="/contact" element={<><Navbar/><Location/><Contact/><Footer/></>}/>
    <Route  exact path="/home" element={<><Navbar/><Home/><Warden/><Docu/></>}/>
    <Route exact path="/contact" element={<><Navbar/><Location/><Contact/></>}/>

    <Route exact path="/meeta" element={<><Navbar/><Meeta/><Footer/></>}/>
    
    <Route exact path="/rekha" element={<><Navbar/><Rekha/><Footer/></>}/>
    
    
    <Route exact path="/shalini" element={<><Navbar/><Shalini/><Footer/></>}/>
    <Route exact path='/shalroom' elemnt={<><Navbar/><ShaliniRoom/><Footer/></>}/>
    <Route exact path='/rekhroom' elemnt={<><Navbar/><RekhaRoom/><Footer/></>}/>
    <Route exact path='/meetroom' elemnt={<><Navbar/><MeetaRoom/><Footer/></>}/>
    
    
  </Routes>
  </BrowserRouter>
  
  </div>
  
)
    

}

export default App;
