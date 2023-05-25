import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./AlbumSlider.module.css";
import Link from "next/link";
import { AlbumItem } from "@/pages/models/albumItem.interface";

interface AlbumsSliderProps {
  baseUrl: string;
  albumItems: AlbumItem[];
}

const AlbumSlider: React.FC<AlbumsSliderProps> = ({ baseUrl, albumItems }) => {
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
        {albumItems.map((albumItem: AlbumItem) => (
          <div key={albumItem.id} className={styles.slide}>
            <Link href={`/gallery/albums/albumItem/${albumItem.id}`} legacyBehavior>
              <div className={styles.overlay}>
                <h3 className={styles.albumTitle}>{albumItem.name}</h3>
              </div>
            </Link>

            <img
              className={styles.albumImg}
              src={`${baseUrl}${albumItem.albumPhotos[0]?.photoURL}`}
              alt={`Slide ${albumItem.albumPhotos[0]?.name} ${albumItem.albumPhotos[0]?.id}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AlbumSlider;
