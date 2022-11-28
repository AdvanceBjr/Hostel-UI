import React from "react";
import met from "../../images/shalini.jpeg";
import "../War_Meeta_Room/Meeta.css";
import { Link } from "react-router-dom";
import door from "../../images/door2.jpg";
const Shalini = () => {
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
          Shalini Agarwal
        </b>
        (Warden)
      </h4>
      <h5
        style={{ marginLeft: "30px", paddingLeft: "650px", marginTop: "2px" }}
      >
        {/* {" "} */}
        [Room No:201-206]
      </h5>
      <h6 style={{ textAlign: "center" }}>
        <b style={{ color: "black" }}>
          Ph.D(pur)(Mathematics)Mewar University Gangar , M.Phil.(Mathematics)M
          D S University Ajmer<br/> , B.Ed(Science)M D S University Ajmer ,
          PGDCA(Computers)MCRPV Bhopal , M.Sc.(Mathematics)M D S University
          Ajmer ,<br/> B.Sc.(Mathematics)M D S University Ajmer
        </b>
        <br />
        Asst.Professor Department of Computer Engineering
        <br /> <b style={{ color: "black" }}>Contact Details</b> : Govt Mahila
        Engineering College Ajmer Rajasthan 305001
        <br />
        <b style={{ color: "black" }}> Email</b> : shaliniagarwal@gweca.ac.in{" "}
        <br />
        <b style={{ color: "black" }}>Office No</b> : 01452695535,{" "}
        <b style={{ color: "black" }}>Mobile No</b> :9999999999
        <br />
        
         <b style={{ color: "black" }}>Specialisation </b>: Special Function , Fractional Calculus
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
          Rooms under Shalini Agarwal
        </h3>
        <div className="boxi">
          <Link to="/shalroom">
            <div className="weri">
              <h5 className="wer">201</h5>
              <img src={door} />
            </div>
          </Link>
          <Link to="/shalroom">
            <div className="weri">
              <h5 className="wer">202</h5>
              <img src={door} />
            </div>
          </Link>
          <Link to="/shalroom">
            <div className="weri">
              <h5 className="wer">203</h5>
              <img src={door} />
            </div>
          </Link>
          <Link to="/shalroom">
            <div className="weri">
              <h5 className="wer">204</h5>
              <img src={door} />
            </div>
          </Link>
          <Link to="/shalroom">
            <div className="weri">
              <h5 className="wer">205</h5>
              <img src={door} />
            </div>
          </Link>
          <Link to="/shalroom">
            <div className="weri">
              <h5 className="wer">206</h5>
              <img src={door} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shalini;
