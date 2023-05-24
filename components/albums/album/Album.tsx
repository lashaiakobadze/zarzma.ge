import { Album } from "@/pages/models/album.interface";
import PageTitle from "@/components/shared/page-title/PageTitle";
import style from "./Album.module.css";
import SlickSlider from "@/components/slickSlider/SlickSlider";
import AlbumSlider from "./albumSlider/AlbumSlider";

const BASE_URL = process.env.dataUrl + "/";

interface AlbumProps {
  album: Album;
}

const CurrentAlbum: React.FC<AlbumProps> = ({ album }) => {
  return (
    <>
      <div className={style.album}>
        <div className="main-slider album-slider">
          <SlickSlider
            images={album.albumItems.map(
              (albumItem) => BASE_URL + albumItem.albumPhotos[0]?.photoURL
            )}
            slidesToShow={2}
            slidesToScroll={2}
          />
        </div>

        <PageTitle title={album.name} paddingLeft={143} />

        <div className={style.albumSlider}>
          <div className="albums-slider">
            <AlbumSlider baseUrl={BASE_URL} albumItems={album.albumItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentAlbum;
