import React from "react";
import { achievements } from "../constants";
import ImageGallery from "../components/ImageGallery";

function Achivements() {
  return <ImageGallery images={achievements} />;
}

export default Achivements;
