import React from 'react'
import {Card,CardBody,CardTitle,CardText, Row, Col,Button} from 'reactstrap';

function Services() {
  return (
    <div>
    <div>Services</div>
    <Row style={{ marginLeft:250}}>
    <Col sm="3">
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
    src="https://picsum.photos/318/180"
    width="100%"
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
      Wifi
    </CardTitle>
  </CardBody>
  <img
    alt="Card cap"
    src="https://picsum.photos/318/180"
    width="100%"
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
    src="https://picsum.photos/318/180"
    width="100%"
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