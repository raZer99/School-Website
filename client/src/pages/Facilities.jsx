import styles from "../styles/facilities.module.css";
import React from "react";

import ControlledCarousel from "./ControlledCarousel";

function Facilities() {
    return (
        <div style={{backgroundColor: "whitesmoke"}} >
            <div className={styles.facilities}  >
                <h1> Facilities </h1>
                
            </div>
            <ControlledCarousel />
            <div className={styles.contents} >
                <h2>"Comprehensive School Facilities: Enriching Learning Environments"</h2> 
                <ul>
                    <li>
                        <h3>Food</h3>
                        <p>Mid-day meals are provided with proper hygiene</p>
                    </li>

                    <li>
                        <h3>Swimming Pool</h3>
                        <p>A well-constructed Swimming Pool with a trained guide</p>
                    </li>

                    <li>
                        <h3>Badminton Court</h3>
                        <p>An indoor Badminton Court for indoor activities and physical fitnees</p>
                    </li>

                    <li>
                        <h3>Auditorium</h3>
                        <p>A Large Auditorium for daily prayers and annual functions</p>
                    </li>

                    <li>
                        <h3>Labs</h3>
                        <p>Embarking students' practical knowlege with computer, physics and chemistry labs</p>
                    </li>

                    <li>
                        <h3>Multi-purpose Ground</h3>
                        <p>Ground for outdoor games like football, cricket etc</p>
                    </li>

                    <li>
                        <h3>Park</h3>
                        <p>Greenery for students' refreshment</p>
                    </li>

                    <li>
                        <h3>Smart Class</h3>
                        <p>Smart class for smart students</p>
                    </li>

                    <li>
                        <h3>Infrastuctures</h3>
                        <p>Well constructed buildings with large corridors and solarpanels </p>
                    </li>
                   
                </ul>
            </div>
        </div>
        
    );
}

export default Facilities;

    // {/* <div className="contents">
        //         <div className="contents-items">
        //             <h2>Food</h2>
        //             <img src={food} alt="Food img" height={400} width={800} />
        //             <p>Mid-day meals are provided with proper hygiene</p>
        //         </div>

        //         <div className="contents-items">
        //             <h2>Swimming Pool</h2>
        //             <img src={pool} alt="Pool img" height={400} width={800} />
        //             <p>A well-constructed Swimming Pool with a trained guide</p>
        //         </div>

        //         <div className="contents-items">
        //             <h2>Indoor Badminton Court</h2>
        //             <img src={court} alt="Court img" height={400} width={800} />
        //             <p>An indoor Badminton Court for indoor activities and physical fitnees</p>
        //         </div>

        //         <div className="contents-items">
        //             <h2>Auditorium</h2>
        //             <img src={auditorium} alt="Auditorium img" height={400} width={800} />
        //             <p>A Large Auditorium for daily prayers and annual functions</p>
        //         </div>

        //         <div className="contents-items">
        //             <h2>Computer Lab</h2>
        //             <img src={lab} alt="Lab img" height={400} width={800} />
        //             <p>Computer Labs for teaching students the uses and functions of computers</p>
        //         </div>

        //         <div className="contents-items">
        //             <h2>Ground</h2>
        //             <img src={ground} alt="Ground img" height={400} width={800} />
        //             <p>Ground for outdoor games like football, cricket etc</p>
        //         </div>

        //         <div className="contents-items">
        //             <h2>Park</h2>
        //             <img src={park} alt="Park img" height={400} width={800} />
        //             <p>Park for students' refreshment</p>
        //         </div>

        //         <div className="contents-items">
        //             <h2>Smart Class</h2>
        //             <img src={smartclass1} alt="Smart-class img" height={400} width={400} />
        //             <img src={smartclass2} alt="Smart-class img" height={400} width={400} />
        //             <p>Smart class for smart students</p>
        //         </div>

        //         <div className="contents-items">
        //             <h2>Infrastructers</h2>
        //             <img src={corridor} alt="Others img" height={400} width={266.66} />
        //             <img src={building} alt="Others img" height={400} width={266.67} />
        //             <img src={solarpanel} alt="Others img" height={400} width={266.66} />

        //         </div>

        //     </div> */}
        // </div>
