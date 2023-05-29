import React, { useRef, useState } from "react";
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
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const modalImg = useRef<HTMLImageElement>(null);

  const openModal = (imageURL: string) => {
    setModalIsOpen(true);
    setSelectedImage(imageURL);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
  };

  const settings = {
    customPaging: function (index: number) {
      return (
        <div key={albumItem.id} className={styles.slide}>
          <img
            className={styles.slideImg}
            src={`${baseUrl}${albumItem.albumPhotos[index]?.photoURL}`}
            alt={`Slide ${albumItem.albumPhotos[index]?.name} ${albumItem.albumPhotos[index].id}`}
            onClick={() => openModal(`${baseUrl}${albumItem.albumPhotos[index]?.photoURL}`)}
          />
        </div>
      );
    },
    dots: true,
    // dotsClass: styles.slideContainer,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerMode: true,
    // centerPadding: "100px",
    responsive: [
      {
        breakpoint: 2000,
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
        <h2 className={styles.albumTitle}>{"გალერეა"}</h2>
        <h3 className={styles.albumItemTitle}>{albumItem.name}</h3>
      </div>

      <Slider {...settings}>
        {albumItem.albumPhotos.map((albumPhoto: AlbumPhoto) => (
          <div key={albumItem.id} className={styles.slide}>
            <img
              className={styles.slideImg}
              src={`${baseUrl}${albumPhoto?.photoURL}`}
              alt={`Slide ${albumPhoto?.name} ${albumPhoto?.id}`}
              onClick={() => openModal(`${baseUrl}${albumPhoto.photoURL}`)}
            />
          </div>
        ))}
      </Slider>

      {modalIsOpen && (
        <div ref={modalRef} className={styles.modal} onClick={closeModal}>
          <span className={styles.close} onClick={closeModal}>
            &times;
          </span>

          <img
            ref={modalImg}
            src={selectedImage}
            className={styles.modalContent}
            onClick={handleImageClick}
          />
        </div>
      )}
    </>
  );
};

export default AlbumItemSlider;
