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
import ThreeOne from './Components/War_Meeta_Room/ThreeOne';
import ThreeTwo from './Components/War_Meeta_Room/ThreeTwo';
import ThreeThree from './Components/War_Meeta_Room/ThreeThree';
import ThreeFour from './Components/War_Meeta_Room/ThreeFour';
import ThreeFive from './Components/War_Meeta_Room/ThreeFive';
import ThreeSix from './Components/War_Meeta_Room/ThreeSix';


import Rekha from './Components/War_Rekha_Room/Rekha';
import OneOne from './Components/War_Rekha_Room/OneOne';
import OneTwo from './Components/War_Rekha_Room/OneTwo';
import OneThree from './Components/War_Rekha_Room/OneThree';
import OneFour from './Components/War_Rekha_Room/OneFour';
import OneFive from './Components/War_Rekha_Room/OneFive';
import OneSix from './Components/War_Rekha_Room/OneSix';

import Shalini from './Components/War_Shalini_Room/Shalini';
import TwoOne from './Components/War_Shalini_Room/TwoOne';
import TwoTwo from './Components/War_Shalini_Room/TwoTwo';
import TwoThree from './Components/War_Shalini_Room/TwoThree';
import TwoFour from './Components/War_Shalini_Room/TwoFour';
import TwoFive from './Components/War_Shalini_Room/TwoFive';
import TwoSix from './Components/War_Shalini_Room/TwoSix';

// import Home from './Components/Home/Home'
function App() {
  return (
  <div className="App">
   
  <BrowserRouter>
  
  <Routes>
    <Route exact path="/" element={<First/>}/>
     
     
    <Route  exact path="/home" element={<><Navbar/><Home/><Warden/><Docu/></>}/>
    <Route exact path="/contact" element={<><Navbar/><Location/><Contact/></>}/>

    <Route exact path="/meeta" element={<><Navbar/><Meeta/><Footer/></>}/>
    <Route exact path="/301" element={<><Navbar/><ThreeOne/><Footer/></>}/>
    <Route exact path="/302" element={<><Navbar/><ThreeTwo/><Footer/></>}/>
    <Route exact path="/303" element={<><Navbar/><ThreeThree/><Footer/></>}/>
    <Route exact path="/304" element={<><Navbar/><ThreeFour/><Footer/></>}/>
    <Route exact path="/305" element={<><Navbar/><ThreeFive/><Footer/></>}/>
    <Route exact path="/306" element={<><Navbar/><ThreeSix/><Footer/></>}/>

    <Route exact path="/rekha" element={<><Navbar/><Rekha/><Footer/></>}/>
    <Route exact path="/101" element={<><Navbar/><OneOne/><Footer/></>}/>
    <Route exact path="/102" element={<><Navbar/><OneTwo/><Footer/></>}/>
    <Route exact path="/103" element={<><Navbar/><OneThree/><Footer/></>}/>
    <Route exact path="/104" element={<><Navbar/><OneFour/><Footer/></>}/>
    <Route exact path="/105" element={<><Navbar/><OneFive/><Footer/></>}/>
    <Route exact path="/106" element={<><Navbar/><OneSix/><Footer/></>}/>
    
    <Route exact path="/shalini" element={<><Navbar/><Shalini/><Footer/></>}/>
    <Route exact path="/201" element={<><Navbar/><TwoOne/><Footer/></>}/>
    <Route exact path="/202" element={<><Navbar/><TwoTwo/><Footer/></>}/>
    <Route exact path="/203" element={<><Navbar/><TwoThree/><Footer/></>}/>
    <Route exact path="/204" element={<><Navbar/><TwoFour/><Footer/></>}/>
    <Route exact path="/205" element={<><Navbar/><TwoFive/><Footer/></>}/>
    <Route exact path="/206" element={<><Navbar/><TwoSix/><Footer/></>}/>
    
  </Routes>
  </BrowserRouter>
  
  </div>
  
)
    

}

export default App;
