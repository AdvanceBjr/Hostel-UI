import React from 'react'
import {Card,CardBody,CardTitle,CardText, Row, Col,Button} from 'reactstrap';
import fit1 from "../../images/foodd.jpg";
import fit2 from "../../images/wwifi.jpg";
import fit3 from "../../images/outingdd.jpg";
import "./services.css";
function Services() {
  return (
    <div>
    <div>Services</div>
    <Row style={{ marginLeft:150,marginBottom:50,marginTop:50}}>
    <Col sm="4">
    <Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5" style={{textAlign:'center'}}>
      Food Corner
    </CardTitle>
  </CardBody>
  <img 
    alt="Card cap"
    src={fit1}
    width="100%"
    style={{height:200}}
  />
  <CardBody>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button style={{marginLeft:70}}>
      Enquire Now
    </Button>
  </CardBody>
</Card>
</Col>
<Col sm="4">
     <Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5" style={{textAlign:'center'}}>
      Wifi
    </CardTitle>
  </CardBody>
  <img
    alt="Card cap"
    src={fit2}
    width="100%"
    style={{height:200}}
  />
  <CardBody>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button style={{marginLeft:70}}>
      Enquire Now
    </Button>
  </CardBody>
</Card> 
</Col>
<Col sm="3">
     <Card
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5" style={{textAlign:'center'}}>
      Outing
    </CardTitle>
  </CardBody>
  <img
    alt="Card cap"
    src={fit3}
    width="100%"
    style={{height:200}}
  />
  <CardBody>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Button style={{marginLeft:70}}>
      Enquire Now
    </Button>
  </CardBody>
</Card> 
</Col>

</Row>
    </div>
  )
}

export default Services