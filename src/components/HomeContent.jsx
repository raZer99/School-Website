import React, { useState } from "react";
import styles from "../styles/homepage.module.css";
import { homedetails } from "../constants";

const HomeContent = () => {
  const [selectedBox, setSelectedBox] = useState(1);

  const handleBoxClick = (boxNumber) => {
    setSelectedBox(boxNumber);
  };

  return (
    <div className={styles.hcontent}>
      <div className={styles.hcontent__left}>
        {selectedBox === 1 && (
          <>
            <h1 className={styles.hcontent__left__h1}>
              {homedetails[0].heading}
            </h1>
            <p className={styles.hcontent__left__p}>{homedetails[0].content}</p>
          </>
        )}
        {selectedBox === 2 && (
          <>
            <h1 className={styles.hcontent__left__h1}>
              {homedetails[1].heading}
            </h1>
            <p className={styles.hcontent__left__p}>{homedetails[1].content}</p>
          </>
        )}
        {selectedBox === 3 && (
          <>
            <h1 className={styles.hcontent__left__h1}>
              {homedetails[2].heading}
            </h1>
            <p className={styles.hcontent__left__p}>{homedetails[2].content}</p>
          </>
        )}
      </div>
      <div className={styles.hcontent__right}>
        <div
          className={styles.hcontent__right__box}
          onClick={() => handleBoxClick(1)}
        >
          01.
          <h1 className={styles.hcontent__right__box__h1}>About</h1>
        </div>
        <div
          className={styles.hcontent__right__box}
          onClick={() => handleBoxClick(2)}
        >
          02.
          <h1 className={styles.hcontent__right__box__h1}>Details</h1>
        </div>
        <div
          className={styles.hcontent__right__box}
          onClick={() => handleBoxClick(3)}
        >
          03.
          <h1 className={styles.hcontent__right__box__h1}>Overview</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
