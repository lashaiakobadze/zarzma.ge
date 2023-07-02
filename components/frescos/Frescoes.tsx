import { AlbumItem } from "@/models/albumItem.interface";
import { useState } from "react";
import Image from "next/image";
import Loader from "../shared/loader/Loader";
import style from "./Frescoes.module.css";
import FrescoesSlider from "./frescoesSlider/FrescoesSlider";

interface FrescoesProps {
  frescoesAlbum: AlbumItem;
  loading: boolean;
  isMobile: boolean;
}

const BASE_URL = process.env.dataUrl + "/";

const Frescoes: React.FC<FrescoesProps> = ({
  frescoesAlbum,
  loading,
  isMobile,
}) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const totalImages = frescoesAlbum?.albumPhotos.length;

  const openOverlay = (index: number) => {
    setIsOverlayOpen(true);
    setSelectedImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    document.body.style.overflow = "auto";
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

  return (
    <>
      <div className={style.frescoes}>
        <div className={style.frescoesHead}>
          {!isMobile && <h2 className={style.frescoesTitle}>ფრესკები</h2>}
          <div
            className={`${style.frescoesItems} ${
              isMobile ? style.frescoesItemsMob : ""
            }`}
          >
            <img
              className={`${style.frescoesImg} ${
                isMobile ? style.frescoesImgMob : ""
              }`}
              src="/main_assets/png/frescoes-1.png"
              alt="frescoes"
            />
            <img
              className={`${style.frescoesImg} ${
                isMobile ? style.frescoesImgMob : ""
              }`}
              src="/main_assets/png/frescoes-2.png"
              alt="frescoes"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className={style.frescoesLoader}>
          <Loader size={"298px"} />
        </div>
      ) : (
        <>
          {!isMobile ? (
            <div className="frescoes-slider">
              <FrescoesSlider slides={frescoesAlbum.albumPhotos} />
            </div>
          ) : (
            <>
              <div className={style.frescoesImages}>
                {frescoesAlbum.albumPhotos.length &&
                  frescoesAlbum.albumPhotos.map((image, index) => (
                    <img
                      key={image?.id}
                      className={`${style.imgMob} ${
                        (index + 1) % 3 === 0 ? style.thirdImg : ""
                      }`}
                      src={`${BASE_URL}${image.photoURL}`}
                      alt={image.name}
                      onClick={() => openOverlay(index)}
                    />
                  ))}
              </div>

              {/* Overlay */}
              {isOverlayOpen && (
                <div className={style.overlay} onClick={closeOverlay}>
                  {/* Display the selected image */}
                  <span className={style.close} onClick={closeOverlay}>
                    &times;
                  </span>
                  <img
                    className={style.modalContent}
                    src={`${BASE_URL}${frescoesAlbum.albumPhotos[selectedImageIndex].photoURL}`}
                    alt={`${BASE_URL}${frescoesAlbum.albumPhotos[selectedImageIndex].name}`}
                  />

                  {/* Navigation buttons */}
                  <button className={style.prev} onClick={goToPrevImage}>
                    <Image
                      src="/main_assets/Vector-white.svg"
                      alt="prev"
                      width={15}
                      height={20}
                    />
                  </button>
                  <button className={style.next} onClick={goToNextImage}>
                    <Image
                      src="/main_assets/Vector-white.svg"
                      alt="next"
                      width={15}
                      height={20}
                    />
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default Frescoes;
