import React from "react";
import styles from "../styles/deparments.module.css";
import FeeOveriew from "../components/FeeOverview";
import Footer from "../components/Footer";

const TableOne = () => {
  return (
    <>
      <div>
        <h2 className="section-title">1st PUC FEE STRUCTURE 2023-2024</h2>
        <div className="table-container">
          <table className="center-table">
            <col span="1" style={{ backgroundColor: "palegoldenrod" }} />
            <col span="3" style={{ backgroundColor: "palegoldenrod" }} />
            <col span="3" style={{ backgroundColor: "palegoldenrod" }} />
            <col span="3" style={{ backgroundColor: "palegoldenrod" }} />
            <thead>
              <tr>
                <th style={{ width: "8%" }}></th>
                <th colspan="3">PCMC/PCMB</th>
                <th colspan="3">CEBA</th>
                <th colspan="3">HEBA/HEPS</th>
              </tr>
              <tr>
                <th></th>
                <th style={{ width: "8%" }}>GM</th>
                <th style={{ width: "10%" }}>SC/ST/G-1/Girls</th>
                <th style={{ width: "8%" }}>OBC</th>
                <th style={{ width: "8%" }}>GM</th>
                <th style={{ width: "10%" }}>SC/ST/G-1/Girls</th>
                <th style={{ width: "8%" }}>OBC</th>
                <th style={{ width: "8%" }}>GM</th>
                <th style={{ width: "10%" }}>SC/ST/G-1/Girls</th>
                <th style={{ width: "8%" }}>OBC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <b>FEE</b>
                </td>
                <td>1466</td>
                <td>255</td>
                <td>796</td>
                <td>1466</td>
                <td>255</td>
                <td>796</td>
                <td>1466</td>
                <td>255</td>
                <td>796</td>
              </tr>
              <tr>
                <td>
                  <b>P-EXAM</b>
                </td>
                <td>336</td>
                <td>0</td>
                <td>0</td>
                <td>122</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <b>LAB</b>
                </td>
                <td>150</td>
                <td>0</td>
                <td>150</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>
                  <b>Govt Total Fee</b>
                </td>
                <td>1952</td>
                <td>255</td>
                <td>946</td>
                <td>1628</td>
                <td>305</td>
                <td>846</td>
                <td>1466</td>
                <td>255</td>
                <td>769</td>
              </tr>
              <tr>
                <td>
                  <b>CDC</b>
                </td>
                <td>548</td>
                <td>745</td>
                <td>554</td>
                <td>672</td>
                <td>695</td>
                <td>745</td>
                <td>534</td>
                <td>745</td>
                <td>704</td>
              </tr>
              <tr>
                <td>
                  <b>TOTAL</b>
                </td>
                <td>2500</td>
                <td>1000</td>
                <td>1500</td>
                <td>2300</td>
                <td>1000</td>
                <td>1500</td>
                <td>2000</td>
                <td>1000</td>
                <td>1500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
      </div>
    </>
  );
};

const TableTwo = () => {
  return (
    <>
      <h2 className="section-title">2nd PUC FEE STRUCTURE 2023-2024</h2>
      <div className="table-container">
        <table className="center-table">
          <col span="1" style={{ backgroundColor: "palegoldenrod" }} />
          <col span="3" style={{ backgroundColor: "palegoldenrod" }} />
          <col span="3" style={{ backgroundColor: "palegoldenrod" }} />
          <col span="3" style={{ backgroundColor: "palegoldenrod" }} />
          <thead>
            <tr>
              <th style={{ width: "8%" }}></th>
              <th colspan="3">PCMC/PCMB</th>
              <th colspan="3">CEBA</th>
              <th colspan="3">HEBA/HEPS</th>
            </tr>
            <tr>
              <th></th>
              <th style={{ width: "8%" }}>GM</th>
              <th style={{ width: "10%" }}>SC/ST/G-1/Girls</th>
              <th style={{ width: "8%" }}>OBC</th>
              <th style={{ width: "8%" }}>GM</th>
              <th style={{ width: "10%" }}>SC/ST/G-1/Girls</th>
              <th style={{ width: "8%" }}>OBC</th>
              <th style={{ width: "8%" }}>GM</th>
              <th style={{ width: "10%" }}>SC/ST/G-1/Girls</th>
              <th style={{ width: "8%" }}>OBC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>FEE</b>
              </td>
              <td>1466</td>
              <td>230</td>
              <td>686</td>
              <td>686</td>
              <td>255</td>
              <td>686</td>
              <td>686</td>
              <td>230</td>
              <td>686</td>
            </tr>
            <tr>
              <td>
                <b>P-EXAM</b>
              </td>
              <td>336</td>
              <td>0</td>
              <td>0</td>
              <td>110</td>
              <td>110</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>LAB</b>
              </td>
              <td>330</td>
              <td>0</td>
              <td>0</td>
              <td>112</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>EXAM</b>
              </td>
              <td>400</td>
              <td>0</td>
              <td>0</td>
              <td>400</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <b>M-FE</b>
              </td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>
                <b>Govt Total Fee</b>
              </td>
              <td>2132</td>
              <td>230</td>
              <td>736</td>
              <td>642</td>
              <td>585</td>
              <td>764</td>
              <td>764</td>
              <td>720</td>
              <td>764</td>
            </tr>
            <tr>
              <td>
                <b>CDC</b>
              </td>
              <td>868</td>
              <td>720</td>
              <td>764</td>
              <td>642</td>
              <td>585</td>
              <td>764</td>
              <td>764</td>
              <td>720</td>
              <td>764</td>
            </tr>
            <tr>
              <td>
                <b>TOTAL</b>
              </td>
              <td>3000</td>
              <td>1000</td>
              <td>1500</td>
              <td>2000</td>
              <td>1000</td>
              <td>1500</td>
              <td>1500</td>
              <td>1000</td>
              <td>1500</td>
            </tr>
          </tbody>
        </table>
        <br />
      </div>
    </>
  );
};

const TableThree = () => {
  return (
    <>
      <div>
        <h2 className="section-title">PRIMARY SCHOOL DIVISION</h2>
        <div className="table-container">
          <table className="center-table">
            <col span="1" style={{ backgroundColor: "palegoldenrod" }} />
            <col span="1" style={{ backgroundColor: "palegoldenrod" }} />
            <col span="1" style={{ backgroundColor: "palegoldenrod" }} />
            <col span="1" style={{ backgroundColor: "palegoldenrod" }} />
            <tr>
              <th style={{ width: "8%" }}>Sl.no</th>
              <th>Fee Description</th>
              <th>1st to 5th grade</th>
              <th>6th and 7th grade</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Students Sports Fee</td>
              <td>-</td>
              <td>10</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Teachers Day Flag</td>
              <td>-</td>
              <td>5</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>TOTAL</b>
              </td>
              <td>0</td>
              <td>15</td>
            </tr>
          </table>
        </div>
        <br />
        <hr />
        <h2 className="section-title">HIGH SCHOOL DIVISION</h2>
        <div className="table-container">
          <table className="center-table">
            <col span="1" style={{ backgroundColor: "palegoldenrod" }} />
            <col span="1" style={{ backgroundColor: "palegoldenrod" }} />
            <col span="1" style={{ backgroundColor: "palegoldenrod" }} />
            <col span="1" style={{ backgroundColor: "palegoldenrod" }} />
            <tr>
              <th style={{ width: "8%" }}>Sl.no</th>
              <th style={{ width: "33%" }}>Fee Description</th>
              <th style={{ width: "28%" }}>8th grade</th>
              <th>9th and 10th grade</th>
            </tr>
            <tr>
              <td>1.</td>
              <td>Registration Fee</td>
              <td>0</td>
              <td>10</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>Sports Fee</td>
              <td>0</td>
              <td>25</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>Reading Fee</td>
              <td>0</td>
              <td>20</td>
            </tr>
            <tr>
              <td>4.</td>
              <td>Laboratory Fee</td>
              <td>0</td>
              <td>20</td>
            </tr>
            <tr>
              <td>5.</td>
              <td>Audio and Visual Fee(AVE)</td>
              <td>0</td>
              <td>10</td>
            </tr>
            <tr>
              <td>6.</td>
              <td>Drawing/Co-Ciricular Fee</td>
              <td>0</td>
              <td>25</td>
            </tr>
            <tr>
              <td>7.</td>
              <td>Medical Fee</td>
              <td>0</td>
              <td>5</td>
            </tr>
            <tr>
              <td>8.</td>
              <td>Cleanliness Fee</td>
              <td>0</td>
              <td>15</td>
            </tr>
            <tr>
              <td>9.</td>
              <td>Students Sports Fund</td>
              <td>20</td>
              <td>20</td>
            </tr>
            <tr>
              <td>10.</td>
              <td>Students Welfare Fund(SWF)</td>
              <td>15</td>
              <td>15</td>
            </tr>
            <tr>
              <td>11.</td>
              <td>Teachers Welfare Fund(TWF)</td>
              <td>15</td>
              <td>15</td>
            </tr>
            <tr>
              <td>12.</td>
              <td>Teachers Day Flag</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td>13.</td>
              <td>School Development Fee</td>
              <td>0</td>
              <td>20</td>
            </tr>
            <tr>
              <td>14.</td>
              <td>Red Cross Activities Fee</td>
              <td>10</td>
              <td>10</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <b>TOTAL</b>
              </td>
              <td>70</td>
              <td>220</td>
            </tr>
          </table>
        </div>
        <br />
        <hr />
        <br />
        <p className="conditions">
          <b>
            <u>Conditions for Fee Concession:</u>
          </b>
        </p>
        <p className="conditions">1. All SC/ST students</p>
        <p className="conditions">2. All Girls</p>
        <p className="conditions">
          3. Students who fall under Category-1 with an annual income below 2
          Lakhs
        </p>
        <p className="conditions">
          4. Students belonging to Backward Classes with an annual income below
          Rs.44500/-
        </p>
        <br />
        <br />
      </div>
    </>
  );
};

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
            1st PUC
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
            2nd PUC
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
            High School
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
          <TableOne />
        </div>
        <div
          class="tab-pane fade show active"
          id="profile"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <TableTwo />
        </div>
        <div
          class="tab-pane fade"
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <TableThree />
        </div>
      </div>
    </div>
  );
};

const Admissions = () => {
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
            Overview
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
            Fees Structure
          </button>
        </div>
        <div class="tab-content" id="v-pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            <FeeOveriew />
          </div>
          <div className="ta">
            <Tabs />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admissions;
