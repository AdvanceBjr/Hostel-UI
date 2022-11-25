import React from 'react'
import  "../../images/back.jpeg"
import "./Warden.css";
import anjali from "../../images/passportAnji.png"
import mad from "../../images/madhu.jpeg"
import met from "../../images/meeta.jpg"
import swe from "../../images/sweta.jpeg"
import rek from "../../images/rekha.jpeg";

const Warden = () => {
  return <>
  <div className='war'>
    <h1> Wardens</h1>
    <div className='car'>
    <img className='img1' src={swe}/>
   
    </div>
    <h4 style={{textAlign:"center",marginTop:"10px"}}><b style={{color:"rgb(11, 110, 143)"}}>Shweta Tripathi </b>      (Chief Warden)</h4>
    <h3 style={{textAlign:"center",color:" rgb(11, 110, 143)",paddingBottom:"10px"}}></h3>
    <div className='port_container'>
        <div>
        <img  className="img2"src={met}/>
        <h4 ><b style={{color:"rgb(11, 110, 143)"}}>Meeta Sharma</b>(Warden)</h4>
        <h5 style={{marginLeft:"30px"}}>   [Room No:301-315]</h5>
        </div>
        <div>
        <img  className="img2"src={mad}/>
        <h4><b style={{color:"rgb(11, 110, 143)"}}>Madhu Toshniwal</b>(Warden)</h4>
        <h5 style={{marginLeft:"40px"}}>   [Room No:201-215]</h5>
        </div>
        <div>
        <img  className="img2"src={rek}/>
        <h4 ><b style={{color:"rgb(11, 110, 143)"}}>Rekha Chahar</b>(Warden)</h4>
        <h5 style={{marginLeft:"40px"}}>   [Room No:101-115]</h5>
        </div>
     
      
    </div>
    </div>
    </>
}

export default Warden