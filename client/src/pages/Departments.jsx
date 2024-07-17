import React from "react";
import FacultyDetails from "../components/FacultyDetails";
import TextContent from "../components/TextContent";
import {
  arts,
  commerce,
  department,
  highSchool,
  primarySchool,
  science,
} from "../constants";
import styles from "../styles/deparments.module.css";
import Footer from "../components/Footer";

const Tabs = () => {
  return (
    <div
      class="tab-pane fade"
      id="v-pills-messages"
      role="tabpanel"
      aria-labelledby="v-pills-messages-tab"
    >
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
          <a
            class="nav-link active"
            id="home-tab"
            data-toggle="tab"
            href="#home"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            Arts
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="profile-tab"
            data-toggle="tab"
            href="#profile"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Commerce
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            id="contact-tab"
            data-toggle="tab"
            href="#contact"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            Science
          </a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <TextContent
            title={department[2].title}
            content={department[2].content}
          />
          {arts.map((art) => (
            <FacultyDetails
              name={art.name}
              designation={art.designation}
              about={art.about}
              img={art.img}
              experience={art.experience}
              joining_date={art.joining_date}
            />
          ))}
        </div>
        <div
          class="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <TextContent
            title={department[3].title}
            content={department[3].content}
          />
          {commerce.map((comm) => (
            <FacultyDetails
              name={comm.name}
              about={comm.about}
              img={comm.img}
              experience={comm.experience}
              joining_date={comm.joining_date}
            />
          ))}
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <TextContent
            title={department[4].title}
            content={department[4].content}
          />
          {science.map((sci) => (
            <FacultyDetails
              name={sci.name}
              designation={sci.designation}
              about={sci.about}
              img={sci.img}
              experience={sci.experience}
              joining_date={sci.joining_date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function Departments() {
  return (
    <div className={styles["departments"]}>
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
            Primary School
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
            High School
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
            PU College
          </button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <TextContent
              title={department[0].title}
              content={department[0].content}
            />
            {primarySchool.map((pri) => (
              <FacultyDetails
                about={pri.about}
                experience={pri.experience}
                img={pri.img}
                name={pri.name}
                joining_date={pri.joining_date}
              />
            ))}
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            <TextContent
              title={department[1].title}
              content={department[1].content}
            />
            {highSchool.map((hi) => (
              <FacultyDetails
                about={hi.about}
                designation={hi.designation}
                experience={hi.experience}
                img={hi.img}
                name={hi.name}
                joining_date={hi.joining_date}
              />
            ))}
          </div>
          <div className="ta">
            <Tabs />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Departments;
