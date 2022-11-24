// import logo from './logo.svg';
// import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import First from './Components/FirstPage/First';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
// import Home from './Components/Home/Home'
function App() {
  return (
  <div className="App">
   
  <BrowserRouter>
  
  <Routes>
    <Route exact path="/" element={<First/>}/>
    <Route  exact path="/home" element={<><Navbar/><Home/></>}/>
    <Route exact path="/contact" element={<><Navbar/><Contact/></>}/>
  </Routes>
  </BrowserRouter>
  
  </div>
  
)
    

}

export default App;
