import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./AlbumsSlider.module.css";
import { AlbumPhoto } from "@/pages/models/albumPhoto.interface";

interface AlbumsSliderProps {
  slides: AlbumPhoto[];
}

const BASE_URL = process.env.dataUrl + "/";

const AlbumsSlider: React.FC<AlbumsSliderProps> = ({ slides }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map((image: AlbumPhoto) => (
          <div key={image.photoName} className={styles.slide}>
            <div className={styles.overlay}>
              <h3 className={styles.albumTitle}>ზარზმობა</h3>
            </div>
            <img
              className={styles.albumImg}
              src={`${BASE_URL}${image.photoURL}`}
              alt={`Slide ${image.name} ${image.id}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AlbumsSlider;
