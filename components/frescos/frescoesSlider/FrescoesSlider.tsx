import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./FrescoesSlider.module.css";
import { AlbumPhoto } from "@/pages/models/albumPhoto.interface";

interface FrescoesSliderProps {
  slides: AlbumPhoto[];
}

const BASE_URL = process.env.dataUrl + "/";

const FrescoesSlider: React.FC<FrescoesSliderProps> = ({
  slides,
}) => {
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
            <img
              src={`${BASE_URL}${image.photoURL}`}
              alt={`Slide ${image.name} ${image.id}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FrescoesSlider;
