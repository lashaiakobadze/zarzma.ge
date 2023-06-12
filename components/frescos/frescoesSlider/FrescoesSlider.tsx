import React, { useRef, useState } from "react";
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
        breakpoint: 2560,
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
              onClick={() => openModal(`${BASE_URL}${image.photoURL}`)}
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
    </div>
  );
};

export default FrescoesSlider;
