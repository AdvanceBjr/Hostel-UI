import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"
import {Link} from "react-router-dom"
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
          <Link  to="/home">Women's Engineering College Ajmer</Link>
        </li>
        <li >
        <Link to="/home">Home</Link>
        
        </li>
        <li>
          <Link  to="/contact">Contact</Link>
          
        </li>
    
      </ul>
    </Nav>

  </>
}

export default Navbar
