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
        <li>
          <a href="/home">GWECA</a>
        </li>
        <li>
          <a href="/home">Home</a>

        </li>
        <li>
          <a href="/contact">Contact</a>

        </li>

        <MDBCol md="6">
          <form className="form-inline mt-4 mb-4">
            <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
          </form>
        </MDBCol>

        <li>
          <MDBIcon icon="user" color='white' />
        </li>
      </ul>
    </Nav>

  </>
}

export default Navbar
