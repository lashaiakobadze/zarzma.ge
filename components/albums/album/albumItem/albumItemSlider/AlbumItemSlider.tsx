import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./AlbumItemSlider.module.css";
import { AlbumItem } from "@/pages/models/albumItem.interface";
import { AlbumPhoto } from "@/pages/models/albumPhoto.interface";

interface AlbumsSliderProps {
  baseUrl: string;
  albumItem: AlbumItem;
}

const AlbumItemSlider: React.FC<AlbumsSliderProps> = ({
  baseUrl,
  albumItem,
}) => {
  const getCustomPaging = (albumItem: AlbumItem) => {
    return albumItem.albumPhotos.map((albumPhoto) => (
      <div key={albumItem.id} className={styles.slide}>
        <img
          className={styles.slideImg}
          src={`${baseUrl}${albumPhoto?.photoURL}`}
          alt={`Slide ${albumPhoto?.name} ${albumPhoto?.id}`}
        />
      </div>
    ));
  };

  const settings: any = {
    customPaging: () => {
      return getCustomPaging(albumItem);
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Custom Paging</h2>
      <Slider {...settings}>
        {albumItem.albumPhotos.map((albumPhoto: AlbumPhoto) => (
          <div key={albumItem.id} className={styles.slide}>
            <img
              className={styles.slideImg}
              src={`${baseUrl}${albumPhoto?.photoURL}`}
              alt={`Slide ${albumPhoto?.name} ${albumPhoto?.id}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};


export default AlbumItemSlider;
