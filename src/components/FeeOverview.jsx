import React from "react";
import styles from "../styles/fee.module.css";

const FeeOverview = () => {
  return (
    <div className={styles.feeStructureOverview}>
      <h1 className={styles.overviewTitle}>Fee Structure Overview</h1>

      <section className={styles.admissionProcess}>
        <h2 className={styles.sectionTitle}>Admission Process</h2>
        <p>
          The admission process for government schools in Karnataka typically
          begins with notifications from the State Education Department,
          outlining eligibility criteria and application procedures. Interested
          candidates, usually residents of Karnataka or specific localities,
          submit filled application forms with required documents. The selection
          process, often involving a lottery system, may prioritize economically
          weaker sections. Some schools may charge a nominal admission fee, and
          selected candidates undergo a verification process. Admitted students
          should be familiar with school timings, curriculum, and any specific
          rules. It is essential to check with the official education department
          or specific schools for the latest and detailed information.
        </p>
      </section>

      <section className={styles.schoolDetails}>
        <h2 className={styles.sectionTitle}>
          Government PU College, Rajanakunte
        </h2>
        <p>
          The college offers diverse courses in Arts, Commerce, and Science.
        </p>
        <ul>
          <li>Students: 388</li>
          <li>Faculty: 11</li>
          <li>
            Courses:
            <ul>
              <li>Science(PCMB/PCMC)</li>
              <li>Commerce(HEBA, CEBA)</li>
              <li>Arts(HEPS)</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className={styles.schoolDetails}>
        <h2 className={styles.sectionTitle}>
          Government High School, Rajanakunte
        </h2>
        <p>
          This institution provides education for 9th and 10th grades in both
          Kannada and English mediums.
        </p>
        <ul>
          <li>Students: 197</li>
          <li>Faculty: 9</li>
        </ul>
      </section>

      <section className={styles.schoolDetails}>
        <h2 className={styles.sectionTitle}>
          Government Primary School, Rajanakunte
        </h2>
        <p>
          It caters to students from Std 1 to 8. The medium of instruction for
          Std 1-5 is Kannada, while for 6th-8th, it extends to both Kannada and
          English.
        </p>
        <ul>
          <li>Students: 357</li>
          <li>Faculty: 5 + Guest Faculty</li>
        </ul>
      </section>
    </div>
  );
};

export default FeeOverview;
