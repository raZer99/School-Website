import React from "react";
import styles from "../styles/facilities.module.css"
import Carousel  from 'react-bootstrap/Carousel';

import food from '../images/food.jpg';
import pool from '../images/pool.jpg';
import court from '../images/court.jpg';
import auditorium from '../images/auditorium.jpg';
import lab from '../images/labs.jpg';
import ground from '../images/ground.jpg';
import park from '../images/park.jpg';
import smartclass1 from '../images/smartclass-1.jpg';
import smartclass2 from '../images/smartclass-2.jpg';
import corridor from '../images/corridor.jpg';
import building from '../images/building.jpg';
import solarpanel from '../images/solar-panel.jpg';


function ControlledCarousel() {
  return (
      <div>
        <Carousel  className={styles.carousel} >
          <Carousel.Item>
            <img src={food} alt="Food img" height={400} width={850} />
          </Carousel.Item>

          <Carousel.Item>
            <img src={pool} alt="Pool img" height={400} width={850} />
          </Carousel.Item>

          <Carousel.Item>
            <img src={court} alt="Court img" height={400} width={850} />
          </Carousel.Item>

          <Carousel.Item>
            <img src={auditorium} alt="Auditorium img" height={400} width={850} />
          </Carousel.Item>

          <Carousel.Item>
            <img src={lab} alt="Lab img" height={400} width={850} />
          </Carousel.Item>

          <Carousel.Item>
            <img src={ground} alt="Ground img" height={400} width={850} />
          </Carousel.Item>

          <Carousel.Item>
            <img src={park} alt="Park img" height={400} width={850} />
          </Carousel.Item>

          <Carousel.Item>
            <img src={smartclass1} alt="Smart-class img" height={400} width={410} />
            <img src={smartclass2} alt="Smart-class img" height={400} width={410} />
          </Carousel.Item>

          <Carousel.Item>
            <img src={corridor} alt="Others img" height={400} width={270.33} />
            <img src={building} alt="Others img" height={400} width={280.34} />
            <img src={solarpanel} alt="Others img" height={400} width={270.33} />
          </Carousel.Item>
        </Carousel>
      </div>
  );
}

export default ControlledCarousel;
