import { AlbumPhoto } from "@/pages/models/albumPhoto.interface";
import React, { useEffect, useRef, useState } from "react";
import swiper from "swiper";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";
// import "swiper/components/thumbs/thumbs.min.css";
import styles from "./SliderWithPreview.module.css";

SwiperCore.use([Navigation, Pagination, Thumbs]);

const inlineStyles = {
  paddingBottom: "40%",
};

interface SliderWithPreviewProps {
  images: AlbumPhoto[]; // Array of slide image URLs
}

const BASE_URL = process.env.dataUrl + "/";

const SliderWithPreview: React.FC<SliderWithPreviewProps> = ({
  images = [],
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [renderSwiper, setRenderSwiper] = useState(true);

  const swiperRef = useRef(null);

  let thisSet: any = null;

  useEffect(
    () => {
      // if (swiperRef.current) {
      //   console.log('albumPhotos', images)
      //   // Swiper.update();
      // }
    },
    [
      /* dependencies */
    ]
  );

  const handleSlideChange = () => {
    // Handle slide change event here
    // console.log("Slide changed!");
    // setRenderSwiper(false);
    // window.clearTimeout(thisSet)
    // thisSet = window.setTimeout(() => {
    //   setRenderSwiper(true);
    // }, 5000);
  };

  return (
    <div className={styles.sliderContainer}>
      {/* <Swiper
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className={styles.mainSlider}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
      {renderSwiper && images.length && (
        <Swiper
          ref={swiperRef}
          // onSwiper={setThumbsSwiper}
          // spaceBetween={10}
          onSlideChange={handleSlideChange}
          slidesPerView={"auto"}
          navigation
          loop={true}
          freeMode={true}
          centeredSlides={true}
          // watchSlidesVisibility={true}
          // watchSlidesProgress={true}
          // slidesOffsetAfter={0}
          // slidesOffsetBefore={-20}
          className={styles.thumbnailSlider}
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
