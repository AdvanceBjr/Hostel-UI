import React from "react";
import "./First.css";
import First1 from "../../images/fir.jpg";
import stud from "../../images/stu1.png";
import war from "../../images/war2.png"
import {Link} from "react-router-dom";
const First = () => {
  return (
    <>
      <div>
        <img className="img12" src={First1} />
        <Link  to="/home">
        <div className="bottom1">
          <img className="logo" src={stud} />
          Entered as a Student
        </div>
        </Link>
        <Link to="/home">
        <div className='bottom2'>
            <img className="logo1" src={war}/>
            Entered as a Warden
            </div>
            </Link>
      </div>
    </>
  );
};

export default First;
