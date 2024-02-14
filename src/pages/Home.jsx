import React from "react";
import HomeContent from "../components/HomeContent";
import styles from "../styles/homepage.module.css";
import Footer from "../components/Footer";
import ReactPlayer from "react-player";

function Home() {
  return (
    <div className={styles.homeMain}>
      {/* <div className={styles["home-hero"]}>
        <img
          className={styles.homeImg}
          src={require("../assets/hero-bg.jpg")}
          alt=""
        />
        <h1 className={styles.homeH1}>GOVERNMENT INSTITUTIONS RAJANUKUNTE</h1>
      </div> */}
      <div className={styles["video-background"]}>
        <ReactPlayer
          className={styles["video"]}
          url={require("../assets/videos/main-ideo.mp4")}
          playing
          loop
          muted
          width="100%"
          height="50%"
        />
        <div className={styles["text-overlay"]}>
          <h1>Government Institutions Rajanukunte</h1>
        </div>
      </div>
      <HomeContent />
      <Footer />
    </div>
  );
}

export default Home;
