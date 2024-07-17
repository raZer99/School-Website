import React from "react";
import styles from "../styles/faculty.module.css";

const FacultyDetails = ({
  img,
  name,
  designation,
  about,
  experience,
  joining_date,
}) => {
  return (
    <section className={styles.faculty}>
      <div className={styles.faculty__imageContainer}>
        <img className={styles.faculty__image} src={img} alt={name} />
      </div>
      <div className={styles.faculty__info}>
        <h2 className={styles.faculty__name}>{name}</h2>
        {designation && (
          <p className={styles.faculty__designation}>{designation}</p>
        )}
        {about && <p className={styles.faculty__about}>{about}</p>}
        {experience && (
          <p className={styles.faculty__experience}>Experience: {experience}</p>
        )}
        {joining_date && (
          <p className={styles.faculty__joiningDate}>
            Joining Date: {joining_date}
          </p>
        )}
      </div>
    </section>
  );
};

export default FacultyDetails;
