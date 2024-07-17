import React from "react";
import { overview, scholarship } from "../constants/index";
import TextContent from "../components/TextContent";
import puTimetable from "../assets/pu-timetable.pdf";
import highSchoolTimetable from "../assets/high-school-timetable.pdf";
import primarySchoolTimetable from "../assets/primary-school-timetable.pdf";
import styles from "../styles/academics.module.css";
import Footer from "../components/Footer";

const TimetablesContent = () => {
  return (
    <div className={styles["timetable"]}>
      <div className={styles["primary-school-timetable"]}>
        <div class="card w-100">
          <div class="card-body">
            <h5 class="card-title">The Government Primary School</h5>
            <p class="card-text">
              Download the timetable for primary school for current academic
              year
            </p>
            <a
              class="btn btn-primary"
              href={primarySchoolTimetable}
              download="primary-school-timetable"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      <div className={styles["high-school-timetable"]}>
        <div class="card w-100">
          <div class="card-body">
            <h5 class="card-title">The Government High School</h5>
            <p class="card-text">
              Download the timetable for high school for current academic year
            </p>
            <a
              class="btn btn-primary"
              href={highSchoolTimetable}
              download="high-school-timetable"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      <div className={styles["pu-timetable"]}>
        <div class="card w-100">
          <div class="card-body">
            <h5 class="card-title">The Government PU College</h5>
            <p class="card-text">
              Download the timetable for PU College for current academic year
            </p>
            <a
              class="btn btn-primary"
              href={puTimetable}
              download="pu-timetable"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function Academics() {
  return (
    <div className="academics">
      <div
        class="d-flex align-items-start"
        style={{ marginTop: "3rem", marginLeft: "4rem", width: "90%" }}
      >
        <div
          class="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          style={{ width: "25%", minWidth: "25%" }}
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            class="nav-link my-2 active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Overview
          </button>
          <button
            class="nav-link my-2"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Timetables
          </button>
          <button
            class="nav-link my-2"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Scholarships
          </button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            {overview.map((over) => (
              <TextContent title={over.title} content={over.content} />
            ))}
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <TimetablesContent />
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            {scholarship.map((scholar) => (
              <TextContent title={scholar.title} content={scholar.content} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Academics;
