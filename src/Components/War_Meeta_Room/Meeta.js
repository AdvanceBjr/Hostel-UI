import React from "react";
import met from "../../images/meeta2.jpg";
import "./Meeta.css";
import {Link} from "react-router-dom";
import door from "../../images/door2.jpg";
const Meeta = () => {
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
          Meeta Sharma
        </b>
        (Warden)
      </h4>
      <h5
        style={{ marginLeft: "30px", paddingLeft: "650px", marginTop: "2px" }}
      >
        {/* {" "} */}
        [Room No:301-315]
      </h5>
      <h6 style={{ textAlign: "center" }}>
        <b style={{ color: "black" }}>
          PhD (Pursuing)(Computer Science)Bikaner Technical University ,
          MTech(VLSI Design)MNIT , BTech(CSE)Mody Institute of Technical Science
        </b>
        <br />
        Asst.Professor Department of Computer Engineering
        <br /> <b style={{ color: "black" }}>Contact Details</b> : Govt Mahila
        Engineering College Ajmer Rajasthan 305001
        <br />
        <b style={{ color: "black" }}> Email</b> : meetasharma@gweca.ac.in{" "}
        <br />
        <b style={{ color: "black" }}>Office No</b> : 01452695535,{" "}
        <b style={{ color: "black" }}>Mobile No</b> :9999999999
        <br />
        <b style={{ color: "black" }}>Research Interest </b> : Machine learning
        ,Cloud Computing , Deep Learning , Image Processing,Internet of
        ThingsVLSI Design,Digital Image Processing,Software Engineering,Cloud
        Computing
        <br /> <b style={{ color: "black" }}>Specialisation </b>: VLSI Design ,
        Machine Learning , Neural Networks , Image Processing.
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
          Rooms under Meeta Sharma
        </h3>
        <div className="boxi">
            <Link to="/301">
            <div className="weri">
          <h5 className="wer">301</h5>
            <img src={door}  />
          </div></Link>
          <Link to="/302">
          <div className="weri">
            <h5 className="wer">302</h5>
            <img src={door} />
          </div>
          </Link>
          <Link to="/303">
          <div className="weri">
            <h5 className="wer">303</h5>
            <img src={door} />
          </div>
          </Link>
          <Link to="/304">
          <div className="weri">
            <h5 className="wer">304</h5>
            <img src={door} />
          </div>
          </Link>
           <Link to="/305">
          <div className="weri">
            <h5 className="wer">305</h5>
            <img src={door} />
          </div>
          </Link>
           <Link to="/306">
          <div className="weri">
            <h5 className="wer">306</h5>
            <img src={door} />
          </div>
          </Link>
         </div>
      </div>
    </div>
  );
};

export default Meeta;
