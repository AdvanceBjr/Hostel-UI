import React from 'react'
import  "../../images/back.jpeg"
import "./Warden.css";
import anjali from "../../images/passportAnji.png"
import mad from "../../images/shalini.jpeg"
import met from "../../images/meeta2.jpg"
import swe from "../../images/sweta1.jpg"
import rek from "../../images/rekha12.jpg";
import {Link} from "react-router-dom";

const Warden = () => {
  return <>
  <div className='war'>
    <h3 className='jkl'> Wardens</h3>
    <div className='car'>
    <img className='img1' src={swe}/>
   
    </div>
    <h4 style={{textAlign:"center",marginTop:"10px"}}><b style={{color:"rgb(11, 110, 143)"}}>Shweta Tripathi </b>      (Chief Warden)</h4>
    <h3 style={{textAlign:"center",color:" rgb(11, 110, 143)",paddingBottom:"10px"}}></h3>
    <div className='port_container'>
    <Link to="/meeta">
        <div >
        
        <img  className="img2"src={met}/>
        <h4 ><b style={{color:"rgb(11, 110, 143)"}}>Meeta Sharma</b>(Warden)</h4>
        <h5 style={{marginLeft:"30px",color:"black"}}>   [Room No:301-306]</h5>
        </div>
        </Link>
      <Link to="/shalini">
        <div>
        <img  className="img2"src={mad}/>
        <h4><b style={{color:"rgb(11, 110, 143)"}}>Shalini Agarwal</b>(Warden)</h4>
        <h5 style={{marginLeft:"40px",color:"black"}}>   [Room No:201-206]</h5>
        </div>
        </Link>
        <Link to="/rekha">
        <div>
        <img  className="img2"src={rek}/>
        <h4 ><b style={{color:"rgb(11, 110, 143)"}}>Rekha Chahar</b>(Warden)</h4>
        <h5 style={{marginLeft:"40px",color:"black"}}>   [Room No:101-115]</h5>
        </div>
        </Link>
      
    </div>
    </div>
    </>
}

export default Warden