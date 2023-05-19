import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ElasticCarouselSlider.module.css';

interface ElasticCarouselSliderProps {
  slides: string[]; // Array of slide image URLs
}

const ElasticCarouselSlider: React.FC<ElasticCarouselSliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <img src={slide} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ElasticCarouselSlider;
