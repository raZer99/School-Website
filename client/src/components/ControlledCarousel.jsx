import React from "react";
import styles from "../styles/facilities.module.css";
import Carousel from "react-bootstrap/Carousel";

// import food from "../assets/events.jpeg";
// import pool from "../assets/events.jpeg";
// import court from "../assets/events.jpeg";
// import auditorium from "../assets/events.jpeg";
// import lab from "../assets/events.jpeg";
// import ground from "../assets/events.jpeg";
// import park from "../assets/events.jpeg";
// import smartclass1 from "../assets/events.jpeg";
// import smartclass2 from "../assets/events.jpeg";
// import corridor from "../assets/events.jpeg";
// import building from "../assets/events.jpeg";
// import solarpanel from "../assets/events.jpeg";

import {
  fac1,
  fac2,
  fac3,
  fac4,
  fac5,
  fac6,
  fac7,
  fac8,
  fac9,
  fac10,
  fac11,
  fac12,
} from "../assets/facilities";

function ControlledCarousel() {
  return (
    <div>
      <Carousel className={styles.carousel}>
        <Carousel.Item>
          <img src={fac1} alt="Food img" height={600} width={1200} />
        </Carousel.Item>

        <Carousel.Item>
          <img src={fac2} alt="Pool img" height={600} width={1200} />
        </Carousel.Item>

        <Carousel.Item>
          <img src={fac3} alt="Court img" height={600} width={1200} />
        </Carousel.Item>

        <Carousel.Item>
          <img src={fac4} alt="Auditorium img" height={600} width={1200} />
        </Carousel.Item>

        <Carousel.Item>
          <img src={fac6} alt="Lab img" height={600} width={1200} />
        </Carousel.Item>

        <Carousel.Item>
          <img src={fac5} alt="Ground img" height={600} width={1200} />
        </Carousel.Item>

        <Carousel.Item>
          <img src={fac7} alt="Park img" height={600} width={1200} />
        </Carousel.Item>

        <Carousel.Item>
          <img src={fac8} alt="Smart-class img" height={600} width={1200} />
        </Carousel.Item>

        <Carousel.Item>
          <img src={fac9} alt="Others img" height={600} width={1200} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={fac10} alt="Others img" height={600} width={1200} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={fac11} alt="Others img" height={600} width={1200} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={fac12} alt="Others img" height={600} width={1200} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
