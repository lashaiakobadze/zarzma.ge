import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import styles from "./AlbumItemSlider.module.css";
import { AlbumItem } from "@/models/albumItem.interface";
import { AlbumPhoto } from "@/models/albumPhoto.interface";

interface AlbumsSliderProps {
  baseUrl: string;
  albumItem: AlbumItem;
}

const AlbumItemSlider: React.FC<AlbumsSliderProps> = ({
  baseUrl,
  albumItem,
}) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const totalImages = albumItem.albumPhotos.length;

  const openOverlay = (index: number) => {
    setIsOverlayOpen(true);
    setSelectedImageIndex(index);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  const goToPrevImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const goToNextImage = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setSelectedImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const settings = {
    customPaging: function (index: number) {
      return (
        <div key={albumItem.id} className={styles.slide}>
          <img
            className={styles.slideImg}
            src={`${baseUrl}${albumItem.albumPhotos[index]?.photoURL}`}
            alt={`Slide ${albumItem.albumPhotos[index]?.name} ${albumItem.albumPhotos[index].id}`}
          />
        </div>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.slideHead}>
        <h2 className={styles.albumTitle}>
          {"გალერეა"}
          {/* ToDo: albumItem.parentName */}
        </h2>
        <h3 className={styles.albumItemTitle}>{albumItem.name}</h3>
      </div>

      <Slider {...settings}>
        {albumItem.albumPhotos.map((albumPhoto: AlbumPhoto, index: number) => (
          <div key={albumItem.id} className={styles.slide}>
            <img
              className={styles.slideImg}
              src={`${baseUrl}${albumPhoto?.photoURL}`}
              alt={`Slide ${albumPhoto?.name} ${albumPhoto?.id}`}
              onClick={() => openOverlay(index)}
            />
          </div>
        ))}
      </Slider>

      {/* Overlay */}
      {isOverlayOpen && (
        <div className={styles.overlay} onClick={closeOverlay}>
          <span className={styles.close} onClick={closeOverlay}>
            &times;
          </span>
          {/* Display the selected image */}
          <img
            className={styles.modalContent}
            src={`${baseUrl}${albumItem.albumPhotos[selectedImageIndex].photoURL}`}
            alt={`${baseUrl}${albumItem.albumPhotos[selectedImageIndex].name}`}
          />

          {/* Navigation buttons */}
          <button className={styles.prev} onClick={goToPrevImage}>
            <Image
              src="/main_assets/Vector-white.svg"
              alt="savane"
              width={20}
              height={25}
            />
          </button>
          <button className={styles.next} onClick={goToNextImage}>
            <Image
              src="/main_assets/Vector-white.svg"
              alt="savane"
              width={20}
              height={25}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default AlbumItemSlider;
