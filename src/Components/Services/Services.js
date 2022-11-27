import React from 'react'
import { Card, CardBody, CardTitle, CardText, Row, Col, Button } from 'reactstrap';
import "./services.css";
import Serviceslist from './Serviceslist';
import { MDBRipple } from 'mdb-react-ui-kit';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
const Services = () => {

  return (
    <>
      <div className='sam'>
        <h3 >Services</h3>
        <p >Basic needs of every hostelite</p>
      </div>
      <Row>
        {
          Serviceslist.map((event) => (
            <Col xs="3">
              <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
                <Card
                  style={{
                    width: '18rem', marginLeft: 35
                  }}
                >
                  <CardBody>
                    <CardTitle tag="h5" style={{ textAlign: 'center' }}>
                      {event.name}
                    </CardTitle>
                  </CardBody>
                  <img src={event.image_link} alt="Could not load image" style={{ width: '18rem', height: 200 }} className='w-100' />
                  <CardBody>
                    <Button style={{ width: '100%' }}>
                      Enquire Now
                    </Button>

                  </CardBody>

                </Card>
                <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
              </MDBRipple>
              <div style={{ width: '18rem', marginLeft: 35, marginTop: 20, marginBottom: 30 }}>
                {event.content}
              </div>
            </Col>
          ))
        }
      </Row>
       <MDBDropdown group className='shadow-0' style={{marginTop:10,marginBottom:15,marginLeft:700}}>
        <MDBDropdownToggle color='link'>View More</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem link>Action</MDBDropdownItem>
          <MDBDropdownItem link>Another action</MDBDropdownItem>
          <MDBDropdownItem link>Something else here</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown> 
   
    </>
  )
};
export default Services