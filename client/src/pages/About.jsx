import React from "react";
import { president } from "../assets";
import FacultyDetails from "../components/FacultyDetails";
import TextContent from "../components/TextContent";
import {
  boardMemeber,
  collegeDevelopment,
  principals,
  vm,
} from "../constants/index";
import styles from "../styles/about.module.css";
import Footer from "../components/Footer";

const FourthTab = () => {
  return (
    <div class={styles["faculty"]}>
      <div class="">
        <img src={president} alt="" width="300" height="300" />
      </div>
      <div class={styles["fourth-content"]}>
        <hr />
        <h4 class="name">Shri S R Vishwanath</h4>
        <span class="designation">MLA, Yelahanka </span>
        <br />
        <span class="designation">Member, TTD Board&amp;M</span>
        <br />
        <span class="designation">
          Former Chairman, Bangalore Development Authority (BDA)
        </span>
        <hr />
        <p>
          Singanayakanahalli Ramaiah Vishwanath is an Indian Politician who is
          current MLA from Yelahanka constituency since 25 May 2008. He is
          former Chairman of Bangalore Development Authority and presently
          Member of Tirumala Tirupati Devasthanams (TTD) Board.
        </p>
        <p>
          He is a social worker and the chairperson of Government school and PU
          college of Rajanukunte. He is the founder of Vishwa Vani Foundation.
        </p>
      </div>
    </div>
  );
};

function About() {
  return (
    <div className="about">
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
            Vision Mission
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
            College Development committee
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
            Board of Members
          </button>
          <button
            class="nav-link my-2"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            About Chairperson
          </button>
          <button
            class="nav-link my-2"
            id="v-pills-principals-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-principals"
            type="button"
            role="tab"
            aria-controls="v-pills-principals"
            aria-selected="false"
          >
            Principals
          </button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            {vm.map((v) => (
              <TextContent title={v.title} content={v.content} />
            ))}
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            {collegeDevelopment.map((faculty) => (
              <FacultyDetails
                key={faculty.name}
                about={faculty.about}
                designation={faculty.designation}
                img={faculty.img}
                name={faculty.name}
              />
            ))}
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            {boardMemeber.map((faculty) => (
              <FacultyDetails
                key={faculty.name}
                about={faculty.about}
                img={faculty.img}
                name={faculty.name}
              />
            ))}
          </div>
          <div
            class="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            <FourthTab />
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="v-pills-principals"
          role="tabpanel"
          aria-labelledby="v-pills-principals-tab"
        >
          {principals.map((faculty) => (
            <FacultyDetails
              key={faculty.name}
              about={faculty.about}
              img={faculty.img}
              name={faculty.name}
              designation={faculty.designation}
              experience={faculty.experience}
              joining_date={faculty.joining_date}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
