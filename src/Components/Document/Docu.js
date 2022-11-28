import React from 'react'
import "./Docu.css"
import FEE from "../../images/pdf.pdf"

const Docu = () => {
  return (
    <div className='doc'>
        <a style={{textDecoration:"none"}} href={FEE}download><h4 className='abc'>Fee Details</h4></a>
        
        <h4  className='abc'>Mess Menu</h4>
        <h4  className='abc'>Outing Schedule</h4>
    </div>
  )
}

export default Docu