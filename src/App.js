import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Home from "./pages/Home";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Departments from "./pages/Departments";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Lookbook from "./components/Lookbook";
import Achievements from "./components/Achievements";
import Events from "./components/Events";
import SchoolFacilities from "./components/Facilities";
import ClassRoom from "./components/ClassRoom";
import Campus from "./components/Campus";
import Facilities from "./pages/Facilities";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/admission" element={<Admissions />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/school-facilities" element={<SchoolFacilities />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/events" element={<Events />} />
        <Route path="/classroom" element={<ClassRoom />} />
        <Route path="/gallery" element={<Lookbook />} />
        <Route path="/facilities" element={<Facilities />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
