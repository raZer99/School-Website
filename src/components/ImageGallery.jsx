import React from "react";
import styles from "../styles/image.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ImageGallery = ({ images }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/gallery");
  };

  return (
    <>
      <button onClick={handleClick} className={styles.leftArrow}>
        <FaArrowLeft />
        <p>Back</p>
      </button>
      <div className={styles.imageGallery}>
        {images.map(({ img }) => (
          <div className={styles.imageItem}>
            <img src={img} alt={`Image `} className={styles.image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
