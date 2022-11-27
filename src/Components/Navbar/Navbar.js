import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"

import Nav from "react-bootstrap/Nav";

import { MDBCol, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownItem, MDBDropdownMenu } from "mdb-react-ui-kit";

const Navbar = () => {
  return <>

    <Nav>
      <logo>
        <a href="/home">
          <img src={process.env.PUBLIC_URL + "images/h.png"} />
          {/* <img src={process.env.PUBLIC_URL+"images/clgLOgo.png"}/> */}

        </a>
      </logo>
      <ul class="topnav">
        <li >
          <Link  to="/home">Government Women's Engineering College<br/>Makhupura (Ajmer), 305002</Link>
        </li>
        <li >
        <Link style={{fontSize:"20px"}}to="/home">Home</Link>
        
        </li>
        <li>
          <Link style={{fontSize:"20px"}} to="/contact">Contact</Link>
          
        </li>
        {/* <li>
          <button >Login</button>
          
        </li> */}
      </ul>
    </Nav>

  </>
}

export default Navbar
