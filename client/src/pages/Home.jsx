import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-hero">
        <img src="../assets/home-background.jpg" alt="" />
        <h1>The Government High School, Rajanakunte</h1>
      </div>
    </div>
  );
}

export default Home;
