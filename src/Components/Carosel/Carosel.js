import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import  CaroselList from "./CaroselList"

import "./Carosel.css";

const Carosel = () => {
  

  const UpcomingEvents = CaroselList.map((event) => (
    <Carousel.Item>
      <img src={event.image_link} alt="Could not load image" />
      {/* <Carousel.Caption>
        <h3>{event.name}</h3>
        <h5>{event.date}</h5>
        <h5>{event.time}</h5>
        <p>{event.desc}</p>
      </Carousel.Caption> */}
    </Carousel.Item>
  ));
  return <Carousel className="header">{UpcomingEvents}</Carousel>;
};

export default Carosel;

