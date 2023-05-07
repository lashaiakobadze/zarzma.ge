import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './SlickSlider.module.css';

type SlickSliderProps = {
  images: string[];
};

const SlickSlider: React.FC<SlickSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className={style.slider}>
          <img src={image} className={style.imgFluid}/>
        </div>
      ))}
    </Slider>
  );
};

export default SlickSlider;
