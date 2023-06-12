import Loader from "../shared/loader/Loader";
import style from "./Albums.module.css";
import { Album } from "@/models/album.interface";
import PageTitle from "../shared/page-title/PageTitle";
import AlbumsSlider from "./albumsSlider/AlbumsSlider";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

interface AlbumsProps {
  albums: Album[];
  loading: boolean;
  isMobile: boolean;
}

const BASE_URL = process.env.dataUrl + "/";

const Albums: React.FC<AlbumsProps> = ({ albums, loading, isMobile }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className={style.albums}>
        <div className={style.albumsHead}>
          {!isMobile && <h2 className={style.albumsTitle}>ფოტო გალერეა</h2>}
          <div
            className={`${style.albumsItems} ${
              isMobile ? style.albumsItemsMob : ""
            }`}
          >
            <img
              className={`${style.albumsImg} ${
                isMobile ? style.albumsImgMob : ""
              }`}
              src="/main_assets/png/Albums-img-1.png"
              alt="albums"
            />
            <img
              className={`${style.albumsImg} ${
                isMobile ? style.albumsImgMob : ""
              }`}
              src="/main_assets/png/Albums-img-2.png"
              alt="albums"
            />
          </div>
        </div>

        <PageTitle
          isMobile={isMobile}
          title={t("photos")}
          paddingLeft={isMobile ? 50 : 143}
        />

        <div
          className={`${style.albumsSlider} ${
            isMobile ? style.albumsSliderMob : ""
          }`}
        >
          {loading ? (
            <Loader size={'298px'}/>
          ) : (
            <>
              {!isMobile ? (
                <div className="albums-slider">
                  <AlbumsSlider albums={albums} />
                </div>
              ) : (
                <>
                  <div className={style.albumsContainer}>
                    {albums.map((album: Album) => (
                      <div key={album.id} className={style.album}>
                        <Link
                          href={`/gallery/albums/${album.id}`}
                          legacyBehavior
                        >
                          <div className={style.overlay}>
                            <h3 className={style.albumTitle}>{album.name}</h3>
                          </div>
                        </Link>

                        <img
                          className={style.albumImg}
                          src={`${BASE_URL}${album.albumItems[0]?.albumPhotos[0]?.photoURL}`}
                          alt={`Slide ${album.albumItems[0]?.albumPhotos[0]?.name} ${album.albumItems[0]?.albumPhotos[0]?.id}`}
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Albums;
