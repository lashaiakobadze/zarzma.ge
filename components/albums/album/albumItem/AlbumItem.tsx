import PageTitle from "@/components/shared/page-title/PageTitle";
import * as Item from "@/pages/models/albumItem.interface";
import { AlbumPhoto } from "@/pages/models/albumPhoto.interface";
import { useState } from "react";
import Image from "next/image";
import style from "./AlbumItem.module.css";
import AlbumItemSlider from "./albumItemSlider/AlbumItemSlider";

const BASE_URL = process.env.dataUrl + "/";

interface AlbumItemProps {
  albumItem: Item.AlbumItem;
  isMobile: boolean;
}

const AlbumItem: React.FC<AlbumItemProps> = ({ albumItem, isMobile }) => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const totalImages = albumItem.albumPhotos.length;

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
      <div className={style.albumItem}>
        {!isMobile ? (
          <div className={style.albumItemSlider}>
            <div className="albums-slider album-item-slider">
              <AlbumItemSlider baseUrl={BASE_URL} albumItem={albumItem} />
            </div>
          </div>
        ) : (
          <div className={style.albumPhotos}>
            <div className={style.albumItemTitle}>
              <PageTitle
                isMobile={isMobile}
                title={albumItem.name}
                paddingLeft={50}
              />
            </div>
            {albumItem.albumPhotos.map(
              (albumPhoto: AlbumPhoto, index: number) => (
                <img
                  key={albumItem.id}
                  className={style.albumPhoto}
                  src={`${BASE_URL}${albumPhoto?.photoURL}`}
                  alt={`${albumPhoto?.name} ${albumPhoto?.id}`}
                  onClick={() => openOverlay(index)}
                />
              )
            )}

            {/* Overlay */}
            {isOverlayOpen && (
              <div className={style.overlay} onClick={closeOverlay}>
                {/* Display the selected image */}
                <span className={style.close} onClick={closeOverlay}>
                  &times;
                </span>
                <img
                  src={`${BASE_URL}${albumItem.albumPhotos[selectedImageIndex].photoURL}`}
                  alt={`${BASE_URL}${albumItem.albumPhotos[selectedImageIndex].name}`}
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
          </div>
        )}
      </div>
    </>
  );
};

export default AlbumItem;
