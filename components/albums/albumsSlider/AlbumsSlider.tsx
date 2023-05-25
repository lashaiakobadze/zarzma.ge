import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./AlbumsSlider.module.css";
import { Album } from "@/pages/models/album.interface";
import Link from "next/link";
import { useRouter } from "next/router";

interface AlbumsSliderProps {
  albums: Album[];
}

const BASE_URL = process.env.dataUrl + "/";

const AlbumsSlider: React.FC<AlbumsSliderProps> = ({ albums }) => {
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
        {albums.map((album: Album) => (
          <div key={album.id} className={styles.slide}>
            <Link href={`/galleria/albums/${album.id}`} legacyBehavior>
              <div className={styles.overlay}>
                <h3 className={styles.albumTitle}>{album.name}</h3>
              </div>
            </Link>

            <img
              className={styles.albumImg}
              src={`${BASE_URL}${album.albumItems[0]?.albumPhotos[0]?.photoURL}`}
              alt={`Slide ${album.albumItems[0]?.albumPhotos[0]?.name} ${album.albumItems[0]?.albumPhotos[0]?.id}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AlbumsSlider;
