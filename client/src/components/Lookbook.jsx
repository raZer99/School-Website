import React from "react";
import { useNavigate } from "react-router-dom";
import classroom from "../assets/classroom.jpeg";
import events from "../assets/events.jpeg";
import campus from "../assets/campus.jpeg";
import facilities from "../assets/facilities.jpeg";
import achivements from "../assets/achivements.jpeg";
import Footer from "./Footer";

function Lookbook() {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(`/${route}`);
  };

  return (
    <>
      <section style={{ margin: "4rem" }} class="">
        <div className="row">
          <div class="col-lg-4 col-md-12 mt-3 mb-4 mb-lg-0">
            <div
              style={{
                background: "none",
                border: "none",
                position: "relative",
              }}
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src={
                  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                class="w-100"
                alt="random"
                style={{ opacity: 0.9 }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textAlign: "center",
                  fontSize: "2.3rem",
                  fontWeight: "bold",
                  textShadow:
                    "1px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,-1px -1px #000, 1px -1px #000, -1px 1px #000",
                }}
              >
                {/* Classroom */}
                Gallery
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-4 mb-lg-0">
            <button
              style={{
                background: "none",
                border: "none",
                position: "relative",
              }}
              onClick={() => handleClick("achievements")}
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src={achivements}
                class="w-100"
                alt="random"
                style={{ opacity: 0.7 }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "black",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Achievements
              </div>
            </button>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-4 mb-lg-0">
            <button
              style={{
                background: "none",
                border: "none",
                position: "relative",
              }}
              onClick={() => handleClick("school-facilities")}
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src={facilities}
                class="w-100"
                alt="random"
                style={{ opacity: 0.7 }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "black",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Facilities
              </div>
            </button>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-4 mb-lg-0">
            <button
              style={{
                background: "none",
                border: "none",
                position: "relative",
              }}
              onClick={() => handleClick("campus")}
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src={campus}
                class="w-100"
                alt="random"
                style={{ opacity: 0.7 }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "black",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Campus
              </div>
            </button>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-4 mb-lg-0">
            <button
              style={{
                background: "none",
                border: "none",
                position: "relative",
              }}
              onClick={() => handleClick("events")}
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src={events}
                class=""
                alt="random"
                style={{ opacity: 0.7, height: "200px", width: "350px" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "black",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Events
              </div>
            </button>
          </div>
          <div class="col-lg-4 col-md-12 mt-3 mb-4 mb-lg-0">
            <button
              style={{
                background: "none",
                border: "none",
                position: "relative",
              }}
              onClick={() => handleClick("classroom")}
              class="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src={classroom}
                class="w-100"
                alt="random"
                style={{ opacity: 0.7 }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "black",
                  textAlign: "center",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                Classroom
              </div>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Lookbook;
