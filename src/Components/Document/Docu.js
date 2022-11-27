import React from 'react'
import "./Docu.css"
import FEE from "../../images/pdf.pdf"

const Docu = () => {
  return (
    <div className='doc'>
        <a style={{textDecoration:"none"}} href={FEE}download><h2 className='abc'>Fee Details</h2></a>
        
        <h2  className='abc'>Mess Menu</h2>
        <h2  className='abc'>Outing Schedule</h2>
    </div>
  )
}

export default Docu