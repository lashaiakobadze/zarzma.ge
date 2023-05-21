import { Album } from "@/pages/models/album.interface";
import PageTitle from "@/components/shared/page-title/PageTitle";
import Loader from "@/components/shared/loader/Loader";
import style from "./Album.module.css";
import SlickSlider from "@/components/slickSlider/SlickSlider";
import AlbumSlider from "./albumSlider/AlbumSlider";

const BASE_URL = process.env.dataUrl + "/";

interface AlbumProps {
  album: Album;
  loading: boolean;
}

const CurrentAlbum: React.FC<AlbumProps> = ({ album, loading }) => {
  return (
    <>
      <div className={style.album}>
        <div className="main-slider album-slider">
          {loading ? (
            <Loader />
          ) : (
            <SlickSlider
              images={album.albumItems.map(
                (albumItem) => BASE_URL + albumItem.albumPhotos[0]?.photoURL
              )}
              slidesToShow={2}
              slidesToScroll={2}
            />
          )}
        </div>

        <PageTitle title={album.name} paddingLeft={143} />

        <div className={style.albumSlider}>
          {loading ? (
            <Loader />
          ) : (
            <div className="albums-slider">
              <AlbumSlider baseUrl={BASE_URL} albumItems={album.albumItems} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CurrentAlbum;
