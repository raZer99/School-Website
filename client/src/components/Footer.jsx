import React from "react";
import styles from "../styles/footer.module.css";
import { offices } from "../constants/index";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["office-container"]}>
        {offices.map((office, index) => (
          <div key={index} className={styles["office-info"]}>
            <h2>{office.department}</h2>
            <p>{office.email}</p>
            <p>{office.tel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
