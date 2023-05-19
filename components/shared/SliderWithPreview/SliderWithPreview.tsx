import { AlbumPhoto } from "@/pages/models/albumPhoto.interface";
import React, { useRef } from "react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import styles from "./SliderWithPreview.module.css";

SwiperCore.use([Navigation, Pagination, Thumbs]);

const inlineStyles = {
  paddingBottom: "40%",
};

interface SliderWithPreviewProps {
  images?: AlbumPhoto[];
  content?: any;
  navigation?: boolean;
  spaceBetween?: number;
  centeredSlides?: boolean;
}

const BASE_URL = process.env.dataUrl + "/";

const SliderWithPreview: React.FC<SliderWithPreviewProps> = ({
  images = [],
  content = [],
  navigation = false,
  spaceBetween = 0,
  centeredSlides = true,
}) => {
  const swiperRef = useRef(null);

  const handleSlideChange = () => {};

  return (
    <div className={styles.sliderContainer}>
      {images.length && (
        <Swiper
          ref={swiperRef}
          className={styles.thumbnailSlider}
          slidesPerView={"auto"}
          navigation={navigation}
          loop={true}
          freeMode={true}
          centeredSlides={centeredSlides}
          spaceBetween={spaceBetween}
          watchSlidesProgress={true}
          onSlideChange={handleSlideChange}
          // watchSlidesVisibility={true}
          // slidesOffsetAfter={0}
          // slidesOffsetBefore={-20}
        >
          {images.map((image: AlbumPhoto) => (
            <SwiperSlide key={image.id} style={inlineStyles}>
              <img
                className={styles.thumbnailImage}
                src={`${BASE_URL}${image.photoURL}`}
                alt={`Slide ${image.name} ${image.id}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default SliderWithPreview;
