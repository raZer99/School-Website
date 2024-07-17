import styles from "../styles/facilities.module.css";
import React from "react";

import ControlledCarousel from "../components/ControlledCarousel";
import Footer from "../components/Footer";

const Facility = ({ heading, description }) => {
  return (
    <div style={{ marginBottom: "28px" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{heading}</h2>
      <p style={{ fontSize: "1rem" }}>{description}</p>
    </div>
  );
};

function Facilities() {
  return (
    <div className={styles["facilities"]}>
      <div className={styles["facilities-container"]}>
        <div className={styles["carousel"]}>
          <ControlledCarousel />
        </div>
        <div className={styles["content"]}>
          <div className="first-part">
            <Facility
              heading="Auditorium for Cultural Events"
              description="Our auditorium serves as a hub for cultural events, performances, and gatherings. With state-of-the-art audio-visual facilities, it provides an ideal platform for students to showcase their talents in the performing arts and for the community to come together."
            />
            <Facility
              heading="Science Laboratories"
              description=" Explore the wonders of science in our advanced laboratories. Equipped with cutting-edge apparatus, our science labs provide students with hands-on experiences, fostering a love for scientific inquiry and discovery."
            />
          </div>
          <div className="second-part">
            <Facility
              heading="Library and Study Halls"
              description="Our extensive library and quiet study halls offer a conducive atmosphere for academic pursuits. Students have access to a wide range of books, journals, and online resources to support their learning and research endeavors."
            />
            <Facility
              heading="Computer and Science Laboratories"
              description="Explore the wonders of computers and science in our advanced laboratories. Equipped with cutting-edge apparatus, our science labs provide students with hands-on experiences, fostering a love for scientific inquiry and discovery."
            />
          </div>
          <div className="second-part">
            <Facility
              heading="Digital Learning Center"
              description="Embrace the future of education in our digital learning center. Equipped with the latest technology, students can engage in interactive and immersive learning experiences, enhancing their skills and knowledge in various subjects."
            />
            <Facility
              heading="Multipurpose Sports Field and Indoor Badminton Court"
              description="Our multipurpose sports field is designed to accommodate a variety of sports activities, from football and cricket to athletics. Our indoor badminton court is equipped with professional-grade flooring and lighting, providing the perfect environment for badminton enthusiasts."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Facilities;
