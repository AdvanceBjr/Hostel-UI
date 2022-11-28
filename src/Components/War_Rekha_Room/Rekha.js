import React from 'react'
import met from "../../images/rekha12.jpg";
import "../War_Meeta_Room/Meeta.css";
import { Link } from "react-router-dom";
import door from "../../images/door2.jpg";
const Rekha = () => {
  return (
    <div>
        <div className="divi">
        <img className="meet" src={met} />
      </div>

      <h4>
        <b
          style={{
            color: "rgb(11, 110, 143)",
            paddingLeft: "650px",
            // paddingTop: "30px",
          }}
        >
          Rekha Chahar
        </b>
        (Warden)
      </h4>
      <h5
        style={{ marginLeft: "30px", paddingLeft: "650px", marginTop: "2px" }}
      >
        {/* {" "} */}
        [Room No:101-106]
      </h5>
      <h6 style={{ textAlign: "center" }}>
        <b style={{ color: "black" }}>
        M.Tech(Communication and Signal Processing)JNU , B.TECH(ECE) Jaipur
        </b>
        <br />
        Asst.Professor Department of Electronics and Communication Engineering
        <br /> <b style={{ color: "black" }}>Contact Details</b> : Govt Mahila
        Engineering College Ajmer Rajasthan 305001
        <br />
        <b style={{ color: "black" }}> Email</b> :rekhachahar@gweca.ac.in{" "}
        <br />
        <b style={{ color: "black" }}>Office No</b> : 01452695535,{" "}
        <b style={{ color: "black" }}>Mobile No</b> :9999999999
        <br />
        <b style={{ color: "black" }}>Research Interest </b> : 
        Communication, Artificial Intelligence
        <br /> <b style={{ color: "black" }}>Specialisation </b>: Communication, Signal processing
      </h6>
      <div>
        <h3
          style={{
            paddingLeft: "600px",
            color: "black",
            paddingTop: "10px",
            textDecoration: "underline ",
          }}
        >
          Rooms under Rekha Chahar
        </h3>
        <div className="boxi">
            <Link to="/101">
            <div className="weri">
          <h5 className="wer">101</h5>
            <img src={door}  />
          </div></Link>
          <Link to="/102">
          <div className="weri">
            <h5 className="wer">102</h5>
            <img src={door} />
          </div>
          </Link>
          <Link to="/103">
          <div className="weri">
            <h5 className="wer">103</h5>
            <img src={door} />
          </div>
          </Link>
          <Link to="/104">
          <div className="weri">
            <h5 className="wer">104</h5>
            <img src={door} />
          </div>
          </Link>
           <Link to="/105">
          <div className="weri">
            <h5 className="wer">105</h5>
            <img src={door} />
          </div>
          </Link>
           <Link to="/106">
          <div className="weri">
            <h5 className="wer">106</h5>
            <img src={door} />
          </div>
          </Link>
         </div>
      </div>
    </div>
  )
}

export default Rekha