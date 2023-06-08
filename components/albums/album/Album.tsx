import { Album } from "@/pages/models/album.interface";
import PageTitle from "@/components/shared/page-title/PageTitle";
import style from "./Album.module.css";
import SlickSlider from "@/components/slickSlider/SlickSlider";
import AlbumSlider from "./albumSlider/AlbumSlider";
import { AlbumItem } from "@/pages/models/albumItem.interface";
import Link from "next/link";

const BASE_URL = process.env.dataUrl + "/";

interface AlbumProps {
  album: Album;
  isMobile: boolean;
}

const CurrentAlbum: React.FC<AlbumProps> = ({ album, isMobile }) => {
  return (
    <>
      <div className={style.album}>
        <div className="main-slider album-slider">
          <SlickSlider
            images={album.albumItems.map(
              (albumItem) => BASE_URL + albumItem.albumPhotos[0]?.photoURL
            )}
            slidesToShow={album.albumItems.length > 1 && !isMobile ? 2 : 1}
            slidesToScroll={album.albumItems.length > 1 && !isMobile ? 2 : 1}
          />
        </div>

        <div className={`${isMobile ? style.albumTitleMob : ""}`}>
          <PageTitle
            isMobile={isMobile}
            title={album.name}
            paddingLeft={isMobile ? 50 : 143}
          />
        </div>

        <div
          className={`${style.albumSlider} ${
            isMobile ? style.albumSliderMob : ""
          }`}
        >
          <>
            {!isMobile ? (
              <div className="albums-slider">
                <AlbumSlider baseUrl={BASE_URL} albumItems={album.albumItems} />
              </div>
            ) : (
              <>
                <div className={style.albumItemsContainer}>
                  {album.albumItems.map((albumItem: AlbumItem) => (
                    <div key={albumItem.id} className={style.albumItem}>
                      <Link
                        href={`/gallery/albums/albumItem/${albumItem.id}`}
                        legacyBehavior
                      >
                        <div className={style.overlay}>
                          <h3 className={style.albumItemsTitle}>
                            {albumItem.name}
                          </h3>
                        </div>
                      </Link>

                      <img
                        className={style.albumItemsImg}
                        src={`${BASE_URL}${albumItem.albumPhotos[0]?.photoURL}`}
                        alt={`Slide ${albumItem.albumPhotos[0]?.name} ${albumItem.albumPhotos[0]?.id}`}
                      />
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
};

export default CurrentAlbum;
